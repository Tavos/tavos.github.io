const fs = require("fs");
const path = require("path");
const vm = require("vm");

const files = [
  "data-2112.js",
  "data-moving-pictures.js",
  "data-signals.js",
  "data-roll-the-bones.js"
];

function loadAlbum(file) {
  const code = fs.readFileSync(path.join(__dirname, file), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.ALBUM;
}

function fingerprint(scene) {
  const midi = scene.midi || null;
  return JSON.stringify({
    bypass: [...(scene.bypass || [])].sort(),
    merge: scene.merge || null,
    extra: (scene.extra || []).map((b) => b.name).sort(),
    midi: midi ? { pc: midi.pc, off: !!midi.off, slot: midi.slot || null } : null
  });
}

function collectNames(chain) {
  const names = [];
  (chain || []).forEach((n) => {
    if (n.name) names.push(n.name);
    ["a", "b", "c"].forEach((k) => (n[k] || []).forEach((b) => b.name && names.push(b.name)));
  });
  return names;
}

let failed = 0;
let checked = 0;

files.forEach((file) => {
  const album = loadAlbum(file);
  console.log("\n== " + album.title + " ==");
  album.songs.forEach((song) => {
    const scenes = song.scenes || [];
    const chain = song.chain || album.baseChain;
    const names = collectNames(chain);
    const seen = new Map();
    scenes.forEach((scene) => {
      checked += 1;
      const fp = fingerprint(scene);
      if (seen.has(fp)) {
        failed += 1;
        console.log("FAIL duplicate scene state: " + song.title + " S" + scene.id + " matches S" + seen.get(fp));
      } else {
        seen.set(fp, scene.id);
      }
      if (!scene.midi) {
        failed += 1;
        console.log("FAIL missing midi: " + song.title + " S" + scene.id);
      }
      (scene.bypass || []).forEach((id) => {
        const hit = names.some((n) => n.toLowerCase().includes(id.toLowerCase()) || id.toLowerCase().includes(n.toLowerCase()));
        if (!hit) {
          failed += 1;
          console.log("FAIL bypass not in chain: " + song.title + " S" + scene.id + " → " + id);
        }
      });
    });
    if (scenes.length > 1 && seen.size === scenes.length) {
      console.log("OK  " + song.num + " " + song.title + " (" + scenes.length + " unique scenes)");
    } else if (scenes.length === 1) {
      console.log("OK  " + song.num + " " + song.title + " (single scene)");
    }
  });
});

console.log("\nChecked " + checked + " scenes. Failures: " + failed);
process.exit(failed ? 1 : 0);
