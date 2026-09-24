const fs = require("fs");
const path = require("path");
const vm = require("vm");

const REMOVED = [
  "Dynamic Comp",
  "Detune",
  "Detune ST",
  "Rodent",
  "Digital Delay ST",
  "Dual Delay ST",
  "Simple Ping Pong ST",
  "Reverse Delay ST",
  "Pitch Shifter ST"
];

// Official CorOS 4.1.0 names (or documented second-instance labels used in this guide)
const ALIASES = {
  "Pitch Fine": "Pitch Shifter",
  "Pitch +7": "Pitch Shifter",
  "Ping Pong": "Simple Ping Pong Delay"
};

const namesPath = path.join(__dirname, "devices-coros-410-names.json");
const official = new Set(JSON.parse(fs.readFileSync(namesPath, "utf8")));
["Volume"].forEach((n) => official.add(n));

function loadAlbum() {
  const code = fs.readFileSync(path.join(__dirname, "data-comfort.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.ALBUM;
}

function collectBlocks(chain, scene) {
  const list = [];
  const walk = (nodes) => {
    (nodes || []).forEach((n) => {
      if (n.name) list.push(n.name);
      ["a", "b", "c"].forEach((k) => (n[k] || []).forEach((b) => b.name && list.push(b.name)));
    });
  };
  walk(chain);
  (scene?.extra || []).forEach((b) => b.name && list.push(b.name));
  return list;
}

function resolve(name) {
  return ALIASES[name] || name;
}

const album = loadAlbum();
let failed = 0;
const seen = new Set();

function check(name, ctx) {
  if (name === "In" || name === "Out" || seen.has(name + ctx)) return;
  seen.add(name + ctx);

  if (REMOVED.includes(name)) {
    failed += 1;
    console.log("FAIL removed block: " + ctx + " → " + name);
    return;
  }
  if (/\bST\b/.test(name) && !name.includes("STUDIO")) {
    failed += 1;
    console.log("FAIL ST suffix (use bare stereo name): " + ctx + " → " + name);
    return;
  }
  const resolved = resolve(name);
  if (!official.has(resolved)) {
    failed += 1;
    console.log("FAIL unknown device: " + ctx + " → " + name + (resolved !== name ? " (alias of " + resolved + ")" : ""));
  }
}

[
  ["baseChain", album.baseChain],
  ["acousticChain", album.acousticChain],
  ["studioChain", album.studioChain],
  ["h3000Chain", album.h3000Chain]
].forEach(([label, chain]) => collectBlocks(chain).forEach((n) => check(n, label)));

album.songs.forEach((song) => {
  const chain = song.chain || album.baseChain;
  collectBlocks(chain).forEach((n) => check(n, song.title + " chain"));
  (song.scenes || []).forEach((scene) => {
    const sc = scene.chain || chain;
    collectBlocks(sc, scene).forEach((n) => check(n, song.title + " S" + scene.id));
  });
});

console.log("\nChecked CorOS 4.1.0 device names. Failures: " + failed);
process.exit(failed ? 1 : 0);
