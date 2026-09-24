const fs = require("fs");
const path = require("path");
const vm = require("vm");

const files = ["data-essentials.js"];

function loadAlbum(file) {
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
    midi: scene.midi || null
  });
}

function collectNames(chain) {
  const names = [];
  (chain || []).forEach((n) => {
    if (n.name) names.push(n.name);
  });
  return names;
}

let failed = 0;
let checked = 0;

files.forEach((file) => {
  const album = loadAlbum(file);
  console.log("\n== " + album.title + " ==");
  album.songs.forEach((song) => {
    const fps = song.scenes.map(fingerprint);
    const uniq = new Set(fps);
    const chainNames = collectNames(album.baseChain);
    song.scenes.forEach((sc) => {
      (sc.bypass || []).forEach((id) => {
        const ok = chainNames.some(
          (n) =>
            n.toLowerCase().includes(String(id).toLowerCase().split(" ")[0]) ||
            String(id).toLowerCase().includes(n.toLowerCase().split(" ")[0])
        );
        if (!ok && id !== "FX Loop · TONEX") {
          console.warn("WARN " + song.title + " scene " + sc.id + ": bypass '" + id + "' may not match chain");
        }
      });
    });
    if (uniq.size !== fps.length) {
      console.log("FAIL " + song.num + " " + song.title + " (" + fps.length + " scenes, " + uniq.size + " unique)");
      failed++;
    } else {
      const label = fps.length === 1 ? "single scene" : fps.length + " unique scenes";
      console.log("OK  " + song.num + " " + song.title + " (" + label + ")");
    }
    checked += fps.length;
  });
});

console.log("\nChecked " + checked + " scenes. Failures: " + failed + "\n");
process.exit(failed ? 1 : 0);
