const fs = require("fs");
const path = require("path");
const vm = require("vm");

const file = "data-comfort.js";

function loadAlbum() {
  const code = fs.readFileSync(path.join(__dirname, file), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.ALBUM;
}

function fingerprint(scene) {
  return JSON.stringify({
    bypass: [...(scene.bypass || [])].sort(),
    merge: scene.merge || null,
    extra: (scene.extra || []).map((b) => b.name).sort(),
    knobs: scene.knobs || null,
    params: scene.params || null,
    chain: scene.chain ? scene.chain.map((b) => b.name) : null
  });
}

function collectNames(chain, scene) {
  const names = [];
  const walk = (nodes) => {
    (nodes || []).forEach((n) => {
      if (n.name) names.push(n.name);
      ["a", "b", "c"].forEach((k) => (n[k] || []).forEach((b) => b.name && names.push(b.name)));
    });
  };
  walk(chain);
  (scene?.extra || []).forEach((b) => b.name && names.push(b.name));
  return names;
}

const album = loadAlbum();
let failed = 0;
let checked = 0;

console.log("\n== " + album.title + " ==");

album.songs.forEach((song) => {
  const scenes = song.scenes || [];
  const baseChain = song.chain || album.baseChain;
  const seen = new Map();

  scenes.forEach((scene) => {
    checked += 1;
    const chain = scene.chain || baseChain;
    const names = collectNames(chain, scene);
    const fp = fingerprint(scene);

    if (seen.has(fp)) {
      failed += 1;
      console.log("FAIL duplicate scene state: " + song.title + " S" + scene.id + " matches S" + seen.get(fp));
    } else {
      seen.set(fp, scene.id);
    }

    (scene.bypass || []).forEach((id) => {
      const hit = names.some(
        (n) => n.toLowerCase().includes(id.toLowerCase()) || id.toLowerCase().includes(n.toLowerCase())
      );
      if (!hit) {
        failed += 1;
        console.log("FAIL bypass not in chain: " + song.title + " S" + scene.id + " → " + id);
      }
    });

    (scene.knobs || []).forEach((group) => {
      if (!group.name || !group.params) {
        failed += 1;
        console.log("FAIL invalid scene.knobs group: " + song.title + " S" + scene.id);
      }
    });
  });

  if (scenes.length > 1 && seen.size === scenes.length) {
    console.log("OK  " + song.num + " " + song.title + " (" + scenes.length + " unique scenes)");
  } else if (scenes.length === 1) {
    console.log("OK  " + song.num + " " + song.title + " (single scene)");
  }
});

console.log("\nChecked " + checked + " scenes. Failures: " + failed);
process.exit(failed ? 1 : 0);
