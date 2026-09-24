const fs = require("fs");
const path = require("path");
const vm = require("vm");

const schemaPath = path.join(__dirname, "block-params-coros-410.json");
const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

const BLOCK_ALIASES = {
  "Ping Pong": "Simple Ping Pong Delay",
  "Plate Lush / Hall": null
};

const FORBIDDEN = {
  "Vintage Chorus": ["Depth"],
  "Chief DC2W": ["Mode:Dimension"],
  "MX Phase 95": ["Rate", "Mix"],
  "Exotic Z Boost": ["Mix"],
  "Dual Delay": ["Time A", "Time B", "FB A", "FB B", "Feedback"],
  "Reverse Delay": ["Mode"],
  "Plate": ["DecaySeconds", "Pre-delay", "Hi Pass"],
  "Plate Lush": ["DecaySeconds", "Pre-delay", "Hi Pass"],
  "Hall": ["DecaySeconds"]
};

function loadAlbum() {
  const code = fs.readFileSync(path.join(__dirname, "data-comfort.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.ALBUM;
}

function resolveBlock(name) {
  if (BLOCK_ALIASES[name] === null) return null;
  return BLOCK_ALIASES[name] || name.replace(/\s+\(.*\)$/, "").trim();
}

function checkParams(blockName, params, ctx) {
  const resolved = resolveBlock(blockName);
  if (!resolved || !params || typeof params !== "object") return [];

  const allowed = schema[resolved];
  if (!allowed) return [];

  const errors = [];
  Object.keys(params).forEach((key) => {
    if (!allowed.includes(key)) {
      errors.push(`${ctx} → ${blockName}: unknown param "${key}"`);
    }
    if (resolved === "Vintage Chorus" && key === "Depth") {
      errors.push(`${ctx} → ${blockName}: use "VIB Depth" (%), not Depth`);
    }
    if (resolved === "Plate" || resolved === "Plate Lush") {
      if (key === "Decay" && / s$/.test(String(params[key]))) {
        errors.push(`${ctx} → ${blockName}: Plate Decay is % (e.g. "40%"), not seconds`);
      }
      if (key === "Pre-delay") {
        errors.push(`${ctx} → ${blockName}: use "Pre Delay" (with space)`);
      }
      if (key === "Hi Pass") {
        errors.push(`${ctx} → ${blockName}: Plate uses "High Pass" (Hall uses "Hi Pass")`);
      }
    }
    if (resolved === "Hall" && key === "Decay" && /%$/.test(String(params[key]))) {
      errors.push(`${ctx} → ${blockName}: Hall Decay is seconds (e.g. "2.0 s"), not %`);
    }
    if (resolved === "Hall" && key === "Pre-delay") {
      errors.push(`${ctx} → ${blockName}: use "Pre Delay" (with space)`);
    }
    if (resolved === "Hall" && (key === "High Pass" || key === "HighPass")) {
      errors.push(`${ctx} → ${blockName}: use "Hi Pass"`);
    }
    if (resolved === "Chief DC2W" && key === "Mode" && params[key] === "Dimension") {
      errors.push(`${ctx} → ${blockName}: Mode is 1–4, not "Dimension"`);
    }
    if (resolved === "Chief DC2W" && key === "SDD-320") {
      errors.push(`${ctx} → ${blockName}: use Type (not SDD-320 switch) — knobs are Mix, Mode, Type, Drive, Output`);
    }
    if (resolved === "Chief DC2W" && /^(Rate|VIB Depth|Sync|Depth)$/.test(key)) {
      errors.push(`${ctx} → ${blockName}: that is Vintage Chorus — DC2W uses Mix/Mode/Type/Drive/Output`);
    }
    if (resolved === "Reverse Delay" && key === "Mode") {
      errors.push(`${ctx} → ${blockName}: Reverse Delay has no Mode — block is reverse-only`);
    }
    if (resolved === "Dual Delay" && /^Time [AB]$|^FB [AB]$/.test(key)) {
      errors.push(`${ctx} → ${blockName}: use Time L/R and Feedback L/R`);
    }
    if (resolved === "Dual Delay" && key === "Feedback") {
      errors.push(`${ctx} → ${blockName}: use "Feedback L/R"`);
    }
    if (resolved === "MX Phase 95" && (key === "Rate" || key === "Mix")) {
      errors.push(`${ctx} → ${blockName}: use Speed, 45/90, Script — no ${key}`);
    }
    if ((resolved === "UK C30 TopBoost" || resolved === "UK C30 Normal") && /^(Gain|Mid|Presence|Master|Cut)$/.test(key)) {
      errors.push(`${ctx} → ${blockName}: use Volume / Tone Cut / Output — not ${key}`);
    }
    if (resolved === "UK C30 TopBoost" && key === "Boost" && !/^(Hot|Cool)$/.test(String(params[key]))) {
      errors.push(`${ctx} → ${blockName}: Boost is Hot/Cool, not ${params[key]}`);
    }
    if ((resolved === "UK C30 TopBoost" || resolved === "UK C30 Normal") && key === "Tone Cut" && (typeof params[key] !== "number" || params[key] < 1 || params[key] > 10)) {
      errors.push(`${ctx} → ${blockName}: Tone Cut is dial 1–10, got ${params[key]}`);
    }
    if (resolved === "Exotic Z Boost" && key === "Mix") {
      errors.push(`${ctx} → ${blockName}: use Gain, Bass, Treble, Volume — no Mix`);
    }
  });
  return errors;
}

function walkKnobs(knobs, ctx, errors) {
  (knobs || []).forEach((k) => {
    errors.push(...checkParams(k.name, k.params, ctx));
  });
}

const album = loadAlbum();
const errors = [];

walkKnobs(album.baseKnobs, "baseKnobs", errors);
album.songs.forEach((song) => {
  walkKnobs(song.knobs, `${song.title} knobs`, errors);
  (song.scenes || []).forEach((scene) => {
    walkKnobs(scene.knobs, `${song.title} S${scene.id}`, errors);
  });
});

if (errors.length) {
  errors.forEach((e) => console.log("FAIL " + e));
} else {
  console.log("All block parameters match CorOS 4.1.0 schema.");
}
console.log("\nParameter check failures: " + errors.length);
process.exit(errors.length ? 1 : 0);
