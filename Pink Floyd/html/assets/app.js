(function () {
  const album = window.ALBUM;
  if (!album) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const tracksEl = $("#tracks");
  const mainEl = $("#main");
  const searchEl = $("#search");
  let currentId = album.songs[0].id;
  let currentScene = null;

  const ICON_DIR = "../../assets/qc-icons/";
  // Device icons per https://quadcortex.wiki/Appendix
  const ICON_BY_TYPE = {
    amp: "Device-Amp.png",
    cab: "Device-Cab.png",
    od: "Device-OD.png",
    mod: "Device-Mod-New.png",
    delay: "Device-Delay.png",
    verb: "Device-Reverb.png",
    eq: "Device-EQ.png",
    pitch: "Device-Pitch.png",
    wah: "Device-Wah.png",
    comp: "Device-Comp.png",
    util: "Device-Utility.png",
    loop: "Device-FX.png",
    filter: "Device-Filter.png",
    morph: "Device-Morph.png",
    ir: "Device-IR.png",
    capture: "Device-NC.png"
  };

  function numToBar(value) {
    if (typeof value === "number") return Math.max(0, Math.min(100, (value / 10) * 100));
    if (typeof value === "string" && value.endsWith("%")) return parseFloat(value);
    return null;
  }

  function iconFile(block) {
    const name = (block.name || "").toLowerCase();
    const type = block.type;

    // 1. Trust explicit type (amp vs cab vs od) — Appendix category icons
    if (type && ICON_BY_TYPE[type]) return ICON_BY_TYPE[type];

    // 2. Name fallbacks — cab speaker-count prefix before amp brand names
    //    e.g. "212 US TWN C12Q 00s" / "412 Brit 60B GB 90s" are cabs, not amps
    if (/^\d{3}\b/.test(name) || /\bcab\b/.test(name)) return "Device-Cab.png";
    if (/fx loop|tonex/.test(name)) return "Device-FX.png";
    if (/wah/.test(name)) return "Device-Wah.png";
    if (/gate|volume/.test(name)) return "Device-Utility.png";
    if (/comp|cs3|chef/.test(name)) return "Device-Comp.png";
    if (/eq|parametric|graphic/.test(name)) return "Device-EQ.png";
    if (/delay|echoplex|slapback/.test(name)) return "Device-Delay.png";
    if (/hall|plate|spring|reverb/.test(name)) return "Device-Reverb.png";
    if (/pitch|detune/.test(name)) return "Device-Pitch.png";
    if (/chorus|phaser|flanger|rotary|dimension|dc2w|229/.test(name)) return "Device-Mod-New.png";
    // Amp brands (after cab check so "212 UK C30…" is never an amp)
    if (/uk c30|us twn|rols jazz|pv-?505|brit |watt |hiwatt|solo 100/.test(name)) return "Device-Amp.png";
    if (/vibes|univibe|nu.?vibes/.test(name)) return "Device-Mod-New.png";
    // OD / boost pedals — "TopBoost" alone is an amp channel name; only match pedal boosts here
    if (/exotic z boost|od250|808|colossus|fuzz|rodent|\bmicro.?amp\b/.test(name)) return "Device-OD.png";
    if (/\bboost\b/.test(name) && !/top\s*boost|topboost/.test(name)) return "Device-OD.png";
    return "Device-Utility.png";
  }

  function normalizeName(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/\s+st\b/g, "")
      .replace(/[·•]/g, " ")
      // Keep parenthetical tags (e.g. "verses Scene 1") — needed for per-scene knob matching
      .replace(/[()]/g, " ")
      .replace(/[^a-z0-9+]+/g, " ")
      .trim();
  }

  /** Strip scene tags / aliases so "UK C30 TopBoost (AC30)" roots to "uk c30 topboost". */
  function deviceRoot(name) {
    return normalizeName(name)
      .replace(/\bscene\s*\d+\b/g, " ")
      .replace(/\b(intro|verses?|solo|chorus|optional|pad|middle|body|riff|climax|atmosphere)\b/g, " ")
      .replace(/\b(ac30|tonemaster|stand\s*in|jc\s*120|jazz\s*chorus|club\s*country|peavey|6505)\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  /**
   * Resolve device params for the active scene.
   * Prefers scene.knobs, then song knobs tagged for this scene, then baseKnobs.
   */
  function findSettings(block, knobs, scene) {
    const target = normalizeName(block.name);
    const targetRoot = deviceRoot(block.name);
    if (!target) return null;

    const pools = [];
    if (scene && Array.isArray(scene.knobs) && scene.knobs.length) {
      pools.push({ pool: scene.knobs, bonus: 200 });
    }
    if (knobs && knobs.length) pools.push({ pool: knobs, bonus: 50 });
    if (album.baseKnobs && album.baseKnobs.length) pools.push({ pool: album.baseKnobs, bonus: 0 });

    let best = null;
    let bestScore = -Infinity;
    const sname = normalizeName((scene && scene.name) || "");
    const sid = scene && scene.id != null ? String(scene.id) : null;

    for (const { pool, bonus } of pools) {
      for (const g of pool) {
        if (!g || !g.params) continue;
        const n = normalizeName(g.name);
        const root = deviceRoot(g.name);
        const matches =
          n === target ||
          root === targetRoot ||
          (targetRoot && root && (root.includes(targetRoot) || targetRoot.includes(root))) ||
          n.includes(target) ||
          target.includes(n);
        if (!matches) continue;

        let score = bonus + 10;
        if (n === target || root === targetRoot) score += 40;
        else if (targetRoot && root && (root.includes(targetRoot) || targetRoot.includes(root))) score += 25;

        if (sid) {
          if (n.includes("scene " + sid) || new RegExp(`(^|\\s)s${sid}(\\s|$)`).test(n)) score += 120;
          const wrong = n.match(/scene\s*(\d+)/);
          if (wrong && wrong[1] !== sid) score -= 100;
        }
        if (sname) {
          ["intro", "verse", "verses", "rhythm", "solo", "chorus", "space", "grit", "blend", "chime", "room"].forEach((tok) => {
            if (sname.includes(tok) && n.includes(tok)) score += 55;
          });
        }
        if (score > bestScore) {
          bestScore = score;
          best = g;
        }
      }
    }
    return best;
  }

  /** Knob cards for the settings panel — scene overrides win per device. */
  function knobsForPanel(song, scene) {
    const songKnobs = song.knobs || album.baseKnobs || [];
    if (!scene) return songKnobs;
    if (Array.isArray(scene.knobs) && scene.knobs.length) {
      const overridden = new Set(scene.knobs.map((g) => deviceRoot(g.name)));
      const rest = songKnobs.filter((g) => !overridden.has(deviceRoot(g.name)));
      return [...scene.knobs, ...rest];
    }
    // No scene.knobs: still surface the best-matching tagged song knobs first for active devices
    return songKnobs;
  }

  const AMP_TWEAK_ROOTS = ["watt d103", "us twn"];

  function isAmpTweakGroup(g) {
    const root = deviceRoot(g.name);
    return AMP_TWEAK_ROOTS.some((a) => root === a || root.startsWith(a));
  }

  /** Song-level amp overrides only (Watt D103 / US TWN). */
  function songAmpTweaks(song) {
    return (song.knobs || []).filter(isAmpTweakGroup);
  }

  function renderAmpNote(note) {
    if (!note) return "";
    return `
      <div class="panel">
        <h3>${note.title}</h3>
        <div class="grid-2">
          ${note.paths.map((p) => `
            <div>
              <p class="meta"><strong>Path ${p.path}</strong> · ${p.name} → ${p.cab}</p>
              <table class="scene-table">
                <thead><tr><th>Knob</th><th>Value</th></tr></thead>
                <tbody>${p.knobs.map((k) => `<tr><td>${k.knob}</td><td>${k.value}</td></tr>`).join("")}</tbody>
              </table>
              ${p.never ? `<p class="meta" style="margin-top:8px">${p.never}</p>` : ""}
            </div>
          `).join("")}
        </div>
        ${note.footer ? `<p class="meta" style="margin-top:12px">${note.footer}</p>` : ""}
      </div>
    `;
  }

  function renderSongAmpTweaks(song) {
    const tweaks = songAmpTweaks(song);
    if (!tweaks.length) {
      return `
        <div class="panel">
          <h3>Song amp tweaks</h3>
          <p class="meta">No amp overrides — use Template J defaults (Watt Gain 4.0 · Twin Volume 3.8 Bright On). See Album template.</p>
        </div>
      `;
    }
    return `
      <div class="panel">
        <h3>Song amp tweaks</h3>
        <p class="meta">Overrides Template J defaults for this song. Unlisted knobs stay at album base.</p>
        ${renderKnobs(tweaks)}
      </div>
    `;
  }

  function nameMatches(blockName, id) {
    if (!blockName || !id) return false;
    const a = String(blockName).toLowerCase();
    const b = String(id).toLowerCase();
    return a === b || a.includes(b) || b.includes(a);
  }

  function isBypassed(block, offIds) {
    if (!block || block.type === "io" || block.type === "split") return false;
    if (Array.isArray(offIds)) {
      return offIds.some((id) => nameMatches(block.name, id));
    }
    return !!block.off;
  }

  function isLoop(block) {
    return block && (block.type === "loop" || /fx loop/i.test(block.name || ""));
  }

  function splitPaths(node) {
    if (node.paths) return node.paths;
    const paths = [];
    if (node.a) paths.push({ id: "a", label: node.aMix || "A", blocks: node.a });
    if (node.b) paths.push({ id: "b", label: node.bMix || "B", blocks: node.b });
    if (node.c) paths.push({ id: "c", label: node.cMix || "C", blocks: node.c });
    return paths;
  }

  function pathMix(scene, path) {
    const merge = scene && scene.merge;
    if (!merge || merge[path.id] == null) return null;
    return Number(merge[path.id]);
  }

  function midiOf(scene) {
    return scene && scene.midi ? scene.midi : null;
  }

  function midiLine(midi) {
    if (!midi) return "";
    const ch = midi.ch != null ? midi.ch : 1;
    const pc = midi.pc != null ? midi.pc : "—";
    const slot = midi.slot ? " · " + midi.slot : "";
    return `Ch${ch} PC ${pc}${slot}`;
  }

  function renderSettingsList(block, knobs, scene, off) {
    const rows = [];
    const midi = midiOf(scene);
    if (isLoop(block) && midi) {
      if (midi.off || off) {
        rows.push(["MIDI", "loop bypassed"]);
      } else {
        rows.push(["MIDI", midiLine(midi)]);
        if (midi.model) rows.push(["Model", midi.model]);
      }
    }
    const group = findSettings(block, knobs, scene);
    if (group) {
      Object.entries(group.params).slice(0, 6).forEach(([k, v]) => rows.push([k, v]));
    }
    if (!rows.length) return "";
    return `<dl class="qc-settings">${rows.map(([k, v]) =>
      `<div><dt>${k}</dt><dd>${v}</dd></div>`
    ).join("")}</dl>`;
  }

  function keepInActiveChain(block) {
    if (!block) return false;
    if (block.type === "io" || block.type === "split") return true;
    if (block.a || block.b || block.c) return true;
    if (block.type === "amp" || block.type === "cab") return true;
    return false;
  }

  /** Drop bypassed FX so the chain shows only blocks used by this scene. */
  function filterChainForScene(chain, scene) {
    if (!chain || !chain.length) return chain || [];
    const offIds = Array.isArray(scene) ? scene : (scene && scene.bypass) || [];
    return chain
      .map((node) => {
        if (!(node.type === "split" || node.a || node.b || node.c)) return node;
        const next = Object.assign({}, node);
        ["a", "b", "c"].forEach((key) => {
          if (!Array.isArray(node[key])) return;
          next[key] = node[key].filter((b) => keepInActiveChain(b) || !isBypassed(b, offIds));
        });
        return next;
      })
      .filter((node) => {
        if (keepInActiveChain(node)) return true;
        return !isBypassed(node, offIds);
      });
  }

  function renderMergeBlock(scene, node) {
    const merge = scene && scene.merge;
    const db = mergePracticalDb(merge);
    const name = node.name || "Merge";
    const rows = db
      ? Object.entries(db).map(([k, v]) => ["Level " + k.toUpperCase(), formatDb(v)])
      : [];
    const settings = rows.length
      ? `<dl class="qc-settings">${rows.map(([k, v]) =>
          `<div><dt>${k}</dt><dd>${v}</dd></div>`
        ).join("")}</dl>`
      : "";
    return `<div class="qc-block util on" title="CorOS Mixer · Level A / Level B (−40…+12 dB)">
      <div class="qc-icon-wrap">
        <img src="${ICON_DIR}${ICON_BY_TYPE.util}" alt="mixer">
      </div>
      <div class="qc-block-name">${name}</div>
      <div class="qc-block-status">ON</div>
      ${settings}
    </div>`;
  }

  function renderBlock(b, offIds, forceOff, scene, knobs) {
    const midi = midiOf(scene);
    const loop = isLoop(b);
    const loopOff = loop && midi && midi.off;
    const off = forceOff || loopOff || isBypassed(b, offIds);
    if (b.type === "io") {
      const dir = /out/i.test(b.name) ? "OUT" : "IN";
      return `<div class="qc-block io" title="${b.name}">
        <div class="qc-io-glyph">${dir}</div>
        <div class="qc-block-name">${b.name}</div>
      </div>`;
    }
    const file = iconFile(b);
    const togglable = true;
    return `<div class="qc-block ${b.type || "util"}${off ? " off" : " on"}" title="${b.note || b.name}">
      <div class="qc-icon-wrap">
        <img src="${ICON_DIR}${file}" alt="${b.type || "device"}">
        ${off ? `<span class="qc-icon-shade" aria-hidden="true"></span>` : ""}
      </div>
      <div class="qc-block-name">${b.name}</div>
      ${togglable ? `<div class="qc-block-status">${off ? "BYP" : "ON"}</div>` : ""}
      ${renderSettingsList(b, knobs, scene, off)}
    </div>`;
  }

  function renderChain(chain, scene, knobs) {
    if (!chain) return "";
    const offIds = Array.isArray(scene) ? scene : (scene && scene.bypass) || [];
    const sceneObj = Array.isArray(scene) ? { bypass: scene } : (scene || {});
    const extras = sceneObj.extra || [];
    const nodes = filterChainForScene(chain, sceneObj);
    if (extras.length) {
      const outAt = nodes.findIndex((n) => n.type === "io" && /out/i.test(n.name || ""));
      const insertAt = outAt === -1 ? nodes.length : outAt;
      extras.forEach((b, i) => {
        if (!isBypassed(b, offIds)) nodes.splice(insertAt + i, 0, b);
      });
    }
    return nodes.map((node) => {
      if (node.type === "split" || node.a || node.b) {
        const paths = splitPaths(node).filter((path) => {
          const mix = pathMix(sceneObj, path);
          return mix == null || mix > 0;
        });
        const rows = paths.map((path) => {
          const mix = pathMix(sceneObj, path);
          const dbMap = mergePracticalDb(sceneObj && sceneObj.merge);
          const pathDb = dbMap && Object.prototype.hasOwnProperty.call(dbMap, path.id) ? dbMap[path.id] : null;
          const mixLabel = pathDb == null
            ? (mix == null ? (path.label || "") : `${path.label || path.id} ${mix}%`)
            : `${path.label || path.id} ${formatDb(pathDb)}`;
          return `<div class="chain-row">
            <span class="path-mix">${mixLabel}</span>
            ${path.blocks.map((b) => renderBlock(b, offIds, false, sceneObj, knobs)).join('<span class="arrow">→</span>')}
          </div>`;
        }).join("");
        return `<div class="qc-block split"><div class="qc-split-label">split</div><div class="qc-block-name">${node.label || ""}</div></div>${rows}${renderMergeBlock(sceneObj, node)}`;
      }
      return renderBlock(node, offIds, false, sceneObj, knobs);
    }).join('<span class="arrow">→</span>');
  }

  function mergePracticalDb(merge) {
    if (!merge) return null;
    const entries = Object.entries(merge);
    const raw = entries.map(([k, pct]) => {
      const p = Math.max(Number(pct) || 0, 0.1);
      return [k, 20 * Math.log10(p / 100)];
    });
    const peak = Math.max(...raw.map(([, v]) => v));
    const out = {};
    for (const [k, v] of raw) out[k] = Math.round(v - peak);
    return out;
  }

  function formatDb(n) {
    if (n === 0) return "0 dB";
    return `${n > 0 ? "+" : "−"}${Math.abs(n)} dB`;
  }

  /** Practical Mixer levels (louder path = 0 dB). Internal merge still stores relative weights. */
  function formatMergeBlend(merge, sep = " · ") {
    const db = mergePracticalDb(merge);
    if (!db) return "—";
    return Object.entries(db)
      .map(([k, v]) => `${k.toUpperCase()} ${formatDb(v)}`)
      .join(sep);
  }

  function sceneSummary(scene) {
    if (!scene) return "";
    const bits = [];
    const midi = midiOf(scene);
    if (midi) {
      if (midi.off) bits.push("Amp path muted / acoustic cheat");
      else bits.push("MIDI " + midiLine(midi) + (midi.model ? " → " + midi.model : ""));
    }
    if (scene.merge) {
      bits.push("Mixer " + formatMergeBlend(scene.merge, " / "));
    }
    if (scene.extra && scene.extra.length) bits.push("Added: " + scene.extra.map((b) => b.name).join(", "));
    return bits.join(". ") + (bits.length ? ". " : "");
  }

  function renderMidiBanner(scene) {
    const midi = midiOf(scene);
    if (!midi) return "";
    if (midi.off) {
      return `<div class="midi-banner"><span class="midi-pill">FX Loop <strong>bypassed</strong> · acoustic / Input 2</span></div>`;
    }
    return `<div class="midi-banner">
      <span class="midi-pill">Scene · <strong>${midiLine(midi)}</strong></span>
      <span class="midi-pill">Amp · <strong>${midi.model || "merge blend"}</strong></span>
    </div>`;
  }

  function renderKnobs(groups) {
    if (!groups) return "";
    return `<div class="knob-grid">${groups.map((g) => `
      <div class="knob-card">
        <h4>${g.name}</h4>
        ${Object.entries(g.params).map(([k, v]) => {
          const pct = numToBar(v);
          return `<div class="kv"><span>${k}</span><strong>${v}</strong></div>
            ${pct == null ? "" : `<div class="bar"><i style="width:${pct}%"></i></div>`}`;
        }).join("")}
      </div>`).join("")}</div>`;
  }

  function midiTableRows(scenes) {
    return (scenes || []).map((s) => {
      const merge = s.merge;
      const amp = !merge ? "—" : (merge.a >= (merge.b || 0) && merge.a >= (merge.c || 0) ? "Watt" : merge.b >= (merge.c || 0) ? "Twin" : "—");
      const blend = !merge ? "—" : formatMergeBlend(merge);
      return `<tr>
        <td>${s.id}</td><td>${s.name}</td><td>${amp}</td><td>${blend}</td><td>${s.use}</td><td>${s.note || "—"}</td>
      </tr>`;
    }).join("");
  }

  function renderSong(song) {
    const scene = (song.scenes || []).find((s) => s.id === currentScene) || song.scenes?.[0];
    const chain = song.chain || album.baseChain;
    const knobs = song.knobs || album.baseKnobs;
    const panelKnobs = knobsForPanel(song, scene);

    return `
      <section class="hero">
        <img class="cover" src="${album.art}" alt="${album.title} cover">
        <div>
          <p class="kicker">${song.side || album.title} · ${song.preset}</p>
          <h2>${song.num ? song.num + ". " : ""}${song.title}</h2>
          <p class="meta">${song.tonality}</p>
          <div class="chips">
            <span class="chip"><strong>Guitar</strong> ${song.guitar}</span>
            <span class="chip"><strong>Pickup</strong> ${song.pickup}</span>
            <span class="chip"><strong>Tone / Vol</strong> ${song.toneVol}</span>
            <span class="chip"><strong>On load</strong> ${song.onLoad || album.onLoad || "Scene 1"}</span>
          </div>
        </div>
      </section>

      <div class="panel">
        <div class="preset-row">
          <div class="preset-name">${song.preset}</div>
          <div class="preset-actions">
            <button class="copy" type="button" data-copy="${song.preset}">Copy preset name</button>
            <button class="export-pdf" type="button" data-pdf>Export PDF</button>
          </div>
        </div>
        <h3>Quad Cortex signal chain (QC-only)</h3>
        <div class="scenes">
          ${(song.scenes || []).map((s) =>
            `<button class="scene-btn${scene && s.id === scene.id ? " active" : ""}" data-scene="${s.id}">S${s.id} ${s.name}</button>`
          ).join("")}
        </div>
        ${scene ? `<p class="meta">${scene.use}${scene.note ? " — " + scene.note : ""}</p>` : ""}
        ${renderMidiBanner(scene)}
        <div class="chain">${renderChain(chain, scene, knobs)}</div>
        <p class="meta" style="margin-top:10px">${sceneSummary(scene)}Chain shows active blocks for this scene only. Device values update per scene when listed. Icons from the <a href="https://quadcortex.wiki/Appendix">Quad Cortex Wiki appendix</a>.</p>
      </div>

      <div class="grid-2">
        <div class="panel prose">
          <h3>Historical tone</h3>
          <p>${song.historical}</p>
        </div>
        <div class="panel prose">
          <h3>What you are chasing</h3>
          <p>${song.tonality}</p>
          ${song.miss ? `<div class="note">${song.miss}</div>` : ""}
        </div>
      </div>

      <div class="panel">
        <h3>QC amp + effects settings${scene ? ` · Scene ${scene.id}` : ""}</h3>
        ${renderKnobs(panelKnobs)}
        ${song.eq ? `<div class="note">${song.eq}</div>` : ""}
      </div>

      ${renderSongAmpTweaks(song)}

      <div class="panel">
        <h3>Scenes + amp blend</h3>
        <table class="scene-table">
          <thead><tr><th>Scene</th><th>Name</th><th>Amp</th><th>Blend</th><th>Use</th><th>QC changes</th></tr></thead>
          <tbody>${midiTableRows(song.scenes)}</tbody>
        </table>
      </div>

      <div class="panel">
        <h3>Build it</h3>
        <ol class="steps">${(song.steps || []).map((s) => `<li>${s}</li>`).join("")}</ol>
        ${(song.notes || []).map((n) => `<div class="note">${n}</div>`).join("")}
      </div>
    `;
  }

  function renderOverview() {
    return `
      <section class="hero">
        <img class="cover" src="${album.art}" alt="${album.title} cover">
        <div>
          <p class="kicker">Pink Floyd · ${album.year} · Quad Cortex QC-first</p>
          <h2>${album.title}</h2>
          <p class="meta">${album.voicing}</p>
          <div class="chips">
            <span class="chip"><strong>Recorded</strong> ${album.recorded}</span>
            <span class="chip"><strong>Base preset</strong> ${album.presetBase}</span>
            <span class="chip"><strong>On load</strong> ${album.onLoad || "Scene 1"}</span>
          </div>
        </div>
      </section>
      <div class="grid-2">
        <div class="panel prose"><h3>Guitars</h3><p>${album.guitars}</p></div>
        <div class="panel prose"><h3>Amps (stock QC)</h3><p>${album.amps}</p></div>
      </div>
      <div class="panel prose"><h3>Effects identity (Quad Cortex)</h3><p>${album.effects}</p></div>
      <div class="panel">
        <h3>Cabling — Quad Cortex QC-only</h3>
        <div data-cabling="${album.cablingMode || "qc"}"${album.tonexLabel ? ` data-tonex="${album.tonexLabel}"` : ""}></div>
        ${album.cabling ? `<p class="meta" style="margin-top:12px">${album.cabling}</p>` : ""}
      </div>
      <div class="panel">
        <h3>Era template chain — ${album.presetBase}</h3>
        <div class="chain">${renderChain(album.baseChain, { bypass: album.baseBypass, merge: album.baseMerge, midi: album.baseMidi }, album.baseKnobs)}</div>
      </div>
      <div class="panel">
        <h3>Shared starting knobs</h3>
        ${renderKnobs(album.baseKnobs)}
      </div>
      ${renderAmpNote(album.ampNote)}
      ${album.ampSlots ? `<div class="panel">
        <h3>Amp paths used on this album</h3>
        <table class="scene-table">
          <thead><tr><th>Path</th><th>Amp</th><th>Cab</th><th>Job</th></tr></thead>
          <tbody>${album.ampSlots.map((s) => `<tr><td>${s.path}</td><td>${s.block}</td><td>${s.cab}</td><td>${s.job}</td></tr>`).join("")}</tbody>
        </table>
      </div>` : ""}
      <div class="panel">
        <h3>Shared scenes</h3>
        <table class="scene-table">
          <thead><tr><th>Scene</th><th>Name</th><th>Amp</th><th>Blend</th><th>Use</th><th>Notes</th></tr></thead>
          <tbody>${midiTableRows(album.sharedScenes)}</tbody>
        </table>
      </div>
      <div class="panel">
        <h3>How to use this page</h3>
        <ol class="steps">
          <li>Build the two-amp merge: <strong>A = Watt D103 Bright</strong> → 412 Watt S4123, <strong>B = US TWN Normal</strong> → 212 US TWN.</li>
          <li>Cable guitar → QC Input 1 → Out 1/2 to FRFR / interface. TONEX optional (see midi map).</li>
          <li>Build <strong>${album.presetBase}</strong> once. Default blend <strong>A 80 / B 20</strong> ≈ Mixer <strong>A 0 dB / B −12 dB</strong>. Scenes change merge + bypass.</li>
          <li>Pick a song. Duplicate the base preset. Assign Scenes 1–6 to footswitches. Check <strong>Song amp tweaks</strong> when a song is open.</li>
          <li>Click a scene to see active blocks only and Mixer levels on the Merge block.</li>
          <li>A/B against the record: attack and delay trails first, then amp blend, then Uni-Vibe / fuzz. Hybrid only if stock Watt/Twin fails.</li>
        </ol>
      </div>
      ${album.mixerNote ? `<div class="panel">
        <h3>${album.mixerNote.title}</h3>
        <p class="meta">${album.mixerNote.body}</p>
        <table class="scene-table">
          <thead><tr><th>Guide blend</th><th>Level A</th><th>Level B</th><th>Practical (louder = 0 dB)</th></tr></thead>
          <tbody>${album.mixerNote.rows.map((r) => `<tr><td>${r.blend}</td><td>${r.a}</td><td>${r.b}</td><td>${r.practical}</td></tr>`).join("")}</tbody>
        </table>
        <p class="meta" style="margin-top:12px">${album.mixerNote.footer}</p>
      </div>` : ""}
    `;
  }

  function paintTracks() {
    const q = (searchEl.value || "").toLowerCase();
    const items = [{ id: "overview", num: "•", title: "Album template", preset: album.presetBase }, ...album.songs];
    tracksEl.innerHTML = items.filter((s) =>
      !q || s.title.toLowerCase().includes(q) || (s.preset || "").toLowerCase().includes(q)
    ).map((s) => `
      <button class="track${s.id === currentId ? " active" : ""}" data-id="${s.id}">
        <span class="n">${s.num || ""}</span>
        <span class="t">${s.title}</span>
        <span class="preset">${s.preset || ""}</span>
      </button>
    `).join("");
  }

  function printRoot() {
    let el = document.getElementById("print-root");
    if (!el) {
      el = document.createElement("div");
      el.id = "print-root";
      el.className = "print-root";
      document.body.appendChild(el);
    }
    return el;
  }

  function fileTitle(song) {
    const num = song.num ? String(song.num).replace(/\./g, "") + " " : "";
    return `${album.title} — ${num}${song.title} — ${song.preset}`;
  }

  function buildPrintSheet(song) {
    const chain = song.chain || album.baseChain;
    const knobs = song.knobs || album.baseKnobs;
    const scenes = song.scenes || [];
    const sceneBlocks = scenes.map((s) => `
      <section class="print-scene">
        <header>
          <h3>Scene ${s.id} · ${s.name}</h3>
          <p>${s.use}${s.note ? " — " + s.note : ""}</p>
        </header>
        ${renderMidiBanner(s)}
        <div class="chain">${renderChain(chain, s, knobs)}</div>
        <p class="print-summary">${sceneSummary(s)}</p>
      </section>
    `).join("");

    return `
      <header class="print-head">
        <img src="${album.art}" alt="">
        <div>
          <p class="kicker">Pink Floyd · ${album.year} · Quad Cortex QC-first · CorOS 4.1.0</p>
          <h1>${song.num ? song.num + ". " : ""}${song.title}</h1>
          <p class="print-preset">${song.preset}</p>
          <p class="meta">${song.side || album.title}</p>
        </div>
      </header>
      <div class="print-chips">
        <span><strong>Guitar</strong> ${song.guitar}</span>
        <span><strong>Pickup</strong> ${song.pickup}</span>
        <span><strong>Tone / Vol</strong> ${song.toneVol}</span>
        <span><strong>On load</strong> ${song.onLoad || album.onLoad || "Scene 1"}</span>
      </div>
      <div class="print-copy">
        <p><strong>Historical.</strong> ${song.historical}</p>
        <p><strong>Chase this.</strong> ${song.tonality}</p>
        ${song.miss ? `<p class="print-warn">${song.miss}</p>` : ""}
      </div>
      ${sceneBlocks}
      <section class="print-block">
        <h2>QC amp + effects settings</h2>
        ${renderKnobs(knobs)}
        ${song.eq ? `<p class="print-warn">${song.eq}</p>` : ""}
      </section>
      <section class="print-block">
        <h2>Scenes + amp blend</h2>
        <table class="scene-table">
          <thead><tr><th>Scene</th><th>Name</th><th>Amp</th><th>Blend</th><th>Use</th><th>QC changes</th></tr></thead>
          <tbody>${midiTableRows(scenes)}</tbody>
        </table>
      </section>
      <section class="print-block">
        <h2>Build it</h2>
        <ol class="steps">${(song.steps || []).map((s) => `<li>${s}</li>`).join("")}</ol>
        ${(song.notes || []).map((n) => `<p class="print-warn">${n}</p>`).join("")}
      </section>
      <footer class="print-foot">Chain shows active blocks for each scene. Stock Amp → Cab on the grid. Scenes change Mixer levels and which FX are in the chain.</footer>
    `;
  }

  function waitForImages(root) {
    const imgs = [...root.querySelectorAll("img")];
    if (!imgs.length) return Promise.resolve();
    return Promise.all(imgs.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      });
    }));
  }

  async function exportSongPdf() {
    const song = album.songs.find((s) => s.id === currentId);
    if (!song) return;
    const root = printRoot();
    const prevTitle = document.title;
    document.title = fileTitle(song);
    root.innerHTML = buildPrintSheet(song);
    document.documentElement.classList.add("printing");
    const cleanup = () => {
      document.documentElement.classList.remove("printing");
      document.title = prevTitle;
      root.innerHTML = "";
    };
    window.addEventListener("afterprint", cleanup, { once: true });
    await waitForImages(root);
    window.print();
  }

  function paintMain() {
    if (currentId === "overview") {
      mainEl.innerHTML = renderOverview();
      if (window.mountCabling) {
        mainEl.querySelectorAll("[data-cabling]").forEach(window.mountCabling);
      }
      return;
    }
    const song = album.songs.find((s) => s.id === currentId);
    if (!song) return;
    if (!currentScene && song.scenes?.[0]) currentScene = song.scenes[0].id;
    mainEl.innerHTML = renderSong(song);
  }

  tracksEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-id]");
    if (!btn) return;
    currentId = btn.dataset.id;
    currentScene = null;
    paintTracks();
    paintMain();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  mainEl.addEventListener("click", (e) => {
    const sceneBtn = e.target.closest("[data-scene]");
    if (sceneBtn) {
      currentScene = Number(sceneBtn.dataset.scene);
      paintMain();
      return;
    }
    const pdfBtn = e.target.closest("[data-pdf]");
    if (pdfBtn) {
      exportSongPdf();
      return;
    }
    const copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) {
      navigator.clipboard.writeText(copyBtn.dataset.copy);
      copyBtn.textContent = "Copied";
      setTimeout(() => { copyBtn.textContent = "Copy preset name"; }, 1200);
    }
  });

  searchEl.addEventListener("input", paintTracks);

  currentId = "overview";
  paintTracks();
  paintMain();
})();
