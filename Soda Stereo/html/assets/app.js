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
    // Prefer explicit type (Amp ≠ Overdrive). "UK C30 TopBoost" is an amp channel,
    // not Device-OD — see https://quadcortex.wiki/Appendix
    if (block.type && ICON_BY_TYPE[block.type]) return ICON_BY_TYPE[block.type];

    const name = (block.name || "").toLowerCase();
    if (/fx loop|tonex/.test(name)) return "Device-FX.png";
    if (/wah/.test(name)) return "Device-Wah.png";
    if (/gate|volume/.test(name)) return "Device-Utility.png";
    if (/comp|cs3|chef|jewel|dynamic/.test(name)) return "Device-Comp.png";
    if (/eq|parametric|graphic/.test(name)) return "Device-EQ.png";
    if (/delay|echoplex|slapback|ping pong|reverse delay/.test(name)) return "Device-Delay.png";
    if (/hall|plate|spring|reverb|lush/.test(name)) return "Device-Reverb.png";
    if (/pitch|detune|harmon/.test(name)) return "Device-Pitch.png";
    if (/chorus|phaser|flanger|rotary|dimension|dc2w|229|chief/.test(name)) return "Device-Mod-New.png";
    // Pedal boosts only — do not match amp "TopBoost" channel names
    if (/(?:^|\s)(?:exotic z |rage |bass )?boost(?:er)?\b|od250|808|fuzz|rodent|distortion/.test(name)) {
      return "Device-OD.png";
    }
    if (/uk c\d+|topboost|top boost/.test(name)) return "Device-Amp.png";
    return "Device-Utility.png";
  }

  function normalizeName(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/\s+st\b/g, "")
      .replace(/[·•’']/g, " ")
      .replace(/\([^)]*\)/g, " ")
      .replace(/[^a-z0-9+]+/g, " ")
      .trim();
  }

  function nameMatches(blockName, id) {
    if (!blockName || !id) return false;
    const a = String(blockName).toLowerCase();
    const b = String(id).toLowerCase();
    return a === b || a.includes(b) || b.includes(a);
  }

  function blockAliases(block) {
    const target = normalizeName(block.name);
    const aliases = [target];
    if (/uk c30|412 brit|212 uk|rols jazz/.test(target)) {
      aliases.push("uk c30 topboost", "uk c30 normal", "412 brit", "212 uk");
    }
    if (/vintage chorus|chief dc2w|digital delay|dual delay|slapback|ping pong|plate lush|^plate$|hall/.test(target)) {
      aliases.push(target.replace(/\s+st$/, ""));
    }
    if (/dynamic comp|chief cs3|chef cs3|jewel/.test(target)) aliases.push("dynamic comp", "chief cs3", "comp");
    if (/rodent/.test(target)) aliases.push("rodent drive", "rodent");
    if (/pitch fine|pitch \+7/.test(target)) aliases.push("pitch shifter", "pitch fine");
    if (/ping pong|simple ping pong/.test(target)) aliases.push("ping pong", "simple ping pong");
    if (/slapback/.test(target)) aliases.push("slapback delay", "slapback");
    if (/pitch shifter/.test(target)) aliases.push("pitch shifter");
    if (/detune/.test(target)) aliases.push("detune st", "detune");
    if (/dual delay|digital delay|reverse delay/.test(target)) aliases.push("dual delay", "digital delay", "reverse delay");
    if (/exotic z|rodent/.test(target)) aliases.push("exotic z boost", "rodent");
    if (/mx phase|phase 95/.test(target)) aliases.push("mx phase 95", "phase");
    if (/plate lush/.test(target)) aliases.push("plate lush", "plate");
    return aliases;
  }

  function sceneGroupMatches(group, sceneId) {
    if (sceneId == null || !group || !group.name) return false;
    const n = group.name;
    if (new RegExp(`\\bscene\\s*${sceneId}\\b`, "i").test(n)) return true;
    if (/^scene\s*\d+$/i.test(n.trim()) && Number(n.replace(/\D/g, "")) === sceneId) return true;
    return false;
  }

  function mergeKnobGroup(map, group) {
    if (!group || !group.name) return;
    const key = normalizeName(group.name.replace(/\(?\s*scene\s*\d+[^)]*\)?/gi, "").trim() || group.name);
    const existing = map.get(key);
    if (existing) {
      map.set(key, {
        name: group.name.replace(/\(?\s*scene\s*\d+[^)]*\)?/gi, "").trim() || existing.name,
        params: { ...existing.params, ...(group.params || {}) }
      });
    } else {
      map.set(key, { name: group.name, params: { ...(group.params || {}) } });
    }
  }

  function baseKnobsFor(song) {
    return song.knobs || album.baseKnobs || [];
  }

  function resolveSceneKnobs(song, scene) {
    const base = baseKnobsFor(song);
    const map = new Map();

    base.forEach((g) => {
      if (!scene || !sceneGroupMatches(g, scene.id)) mergeKnobGroup(map, g);
    });

    if (!scene) return Array.from(map.values());

    (scene.knobs || []).forEach((g) => mergeKnobGroup(map, g));

    if (scene.params) {
      Object.entries(scene.params).forEach(([name, params]) => {
        mergeKnobGroup(map, { name, params });
      });
    }

    base.forEach((g) => {
      if (sceneGroupMatches(g, scene.id)) {
        const clean = g.name.replace(/\(?\s*scene\s*\d+[^)]*\)?/gi, "").trim();
        mergeKnobGroup(map, { name: clean || g.name, params: g.params });
      }
    });

    return Array.from(map.values());
  }

  function findSettingsInPool(block, pools) {
    const aliases = blockAliases(block);
    const target = normalizeName(block.name);
    for (const pool of pools) {
      if (!pool) continue;
      // Exact name / alias match first — never let "Chief DC2W" pick up "Vintage Chorus"
      const exact = pool.find((g) => {
        const n = normalizeName(g.name);
        return n === target || aliases.some((a) => n === a);
      });
      if (exact) return exact;
      const fuzzy = pool.find((g) => {
        const n = normalizeName(g.name);
        // Require whole-token containment; block "chief dc2w" must not match "vintage chorus"
        return aliases.some((a) => {
          if (a.length < 4) return false;
          const re = new RegExp(`(?:^|\\s)${a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\s|$)`);
          return re.test(n) || n === a;
        });
      });
      if (fuzzy) return fuzzy;
    }
    return null;
  }

  function findSettings(block, sceneKnobs, baseKnobs) {
    return findSettingsInPool(block, [sceneKnobs, baseKnobs, album.baseKnobs]);
  }

  function isBypassed(block, offIds) {
    if (!block || block.type === "io" || block.type === "split") return false;
    if (Array.isArray(offIds)) {
      return offIds.some((id) => nameMatches(block.name, id));
    }
    return !!block.off;
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

  function resolveChain(song, scene) {
    if (scene && scene.chain) return scene.chain;
    return song.chain || album.baseChain;
  }

  function collectBlocks(chain, scene) {
    const list = [];
    const walk = (nodes) => {
      (nodes || []).forEach((node) => {
        if (node.type === "split") {
          splitPaths(node).forEach((path) => walk(path.blocks));
        } else if (node.name) {
          list.push(node);
        }
      });
    };
    walk(chain);
    if (scene && scene.extra) list.push(...scene.extra);
    return list;
  }

  function activeSceneKnobCards(song, scene, chain) {
    if (!scene) return resolveSceneKnobs(song, scene);
    const sceneKnobs = resolveSceneKnobs(song, scene);
    const offIds = scene.bypass || [];
    const blocks = collectBlocks(chain, scene);
    return sceneKnobs.filter((g) => {
      const gn = normalizeName(g.name);
      return blocks.some((b) => {
        if (isBypassed(b, offIds)) return false;
        const aliases = blockAliases(b);
        return aliases.some((a) => gn === a || gn.includes(a) || a.includes(gn));
      });
    });
  }

  function paramDiff(baseVal, sceneVal) {
    return baseVal !== undefined && String(baseVal) !== String(sceneVal);
  }

  function renderSettingsList(block, sceneKnobs, baseKnobs, off) {
    if (off) return `<dl class="qc-settings"><div><dt>Status</dt><dd>bypassed</dd></div></dl>`;
    const group = findSettings(block, sceneKnobs, baseKnobs);
    const baseGroup = findSettings(block, baseKnobs, baseKnobs);
    if (!group) return "";
    const rows = Object.entries(group.params).slice(0, 6).map(([k, v]) => {
      const changed = baseGroup && paramDiff(baseGroup.params[k], v);
      return `<div><dt>${k}</dt><dd class="${changed ? "changed" : ""}">${v}</dd></div>`;
    });
    return `<dl class="qc-settings">${rows.join("")}</dl>`;
  }

  function renderBlock(b, offIds, forceOff, scene, sceneKnobs, baseKnobs) {
    const off = forceOff || isBypassed(b, offIds);
    if (b.type === "io") {
      const dir = /out/i.test(b.name) ? "OUT" : "IN";
      return `<div class="qc-block io" title="${b.name}">
        <div class="qc-io-glyph">${dir}</div>
        <div class="qc-block-name">${b.name}</div>
      </div>`;
    }
    if (b.type === "split") {
      return `<div class="qc-block split"><div class="qc-split-label">split</div><div class="qc-block-name">${b.label || b.name || ""}</div></div>`;
    }
    const file = iconFile(b);
    return `<div class="qc-block ${b.type || "util"}${off ? " off" : " on"}" title="${b.note || b.name}">
      <div class="qc-icon-wrap">
        <img src="${ICON_DIR}${file}" alt="${b.type || "device"}">
        ${off ? `<span class="qc-icon-shade" aria-hidden="true"></span>` : ""}
      </div>
      <div class="qc-block-name">${b.name}</div>
      <div class="qc-block-status">${off ? "BYP" : "ON"}</div>
      ${renderSettingsList(b, sceneKnobs, baseKnobs, off)}
    </div>`;
  }

  function renderChain(chain, scene, sceneKnobs, baseKnobs) {
    if (!chain) return "";
    const offIds = Array.isArray(scene) ? scene : (scene && scene.bypass) || [];
    const sceneObj = Array.isArray(scene) ? { bypass: scene } : (scene || {});
    const extras = sceneObj.extra || [];
    const nodes = chain.slice();
    if (extras.length) {
      const outAt = nodes.findIndex((n) => n.type === "io" && /out/i.test(n.name || ""));
      const insertAt = outAt === -1 ? nodes.length : outAt;
      extras.forEach((b, i) => nodes.splice(insertAt + i, 0, b));
    }
    return nodes.map((node) => {
      if (node.type === "split") {
        const paths = splitPaths(node);
        const rows = paths.map((path) => {
          const mix = pathMix(sceneObj, path);
          const muted = mix === 0;
          const mixLabel = mix == null ? (path.label || "") : `${path.label || path.id} ${mix}%`;
          return `<div class="chain-row${muted ? " dim" : ""}">
            <span class="path-mix">${mixLabel}</span>
            ${path.blocks.map((b) => renderBlock(b, offIds, muted, sceneObj, sceneKnobs, baseKnobs)).join('<span class="arrow">→</span>')}
          </div>`;
        }).join("");
        return `${renderBlock({ type: "split", label: node.label || "" }, offIds, false, sceneObj, sceneKnobs, baseKnobs)}${rows}<div class="qc-block split"><div class="qc-split-label">merge</div></div>`;
      }
      return renderBlock(node, offIds, false, sceneObj, sceneKnobs, baseKnobs);
    }).join('<span class="arrow">→</span>');
  }

  function sceneSummary(scene) {
    if (!scene) return "";
    const bits = [];
    if (scene.merge) {
      bits.push("Blend " + Object.entries(scene.merge).map(([k, v]) => `${k.toUpperCase()} ${v}%`).join(" / "));
    }
    if (scene.bypass && scene.bypass.length) bits.push("Bypassed: " + scene.bypass.join(", "));
    else bits.push("No FX bypassed");
    if (scene.extra && scene.extra.length) bits.push("Added: " + scene.extra.map((b) => b.name).join(", "));
    if (scene.knobs && scene.knobs.length) bits.push("Scene knob overrides on " + scene.knobs.map((k) => k.name).join(", "));
    return bits.join(". ") + ".";
  }

  const chainLegend = 'Grey overlay = bypassed. <span class="changed">Orange values</span> differ from the preset default for this scene. Icons from the <a href="https://quadcortex.wiki/Appendix">Quad Cortex Wiki appendix</a>.';

  function renderKnobs(groups, baseGroups, title, emptyMsg) {
    if (!groups || !groups.length) {
      return emptyMsg ? `<p class="meta">${emptyMsg}</p>` : "";
    }
    const baseMap = new Map((baseGroups || []).map((g) => [normalizeName(g.name), g]));
    return `
      ${title ? `<h4 class="knob-section-title">${title}</h4>` : ""}
      <div class="knob-grid">${groups.map((g) => {
        const base = baseMap.get(normalizeName(g.name));
        return `<div class="knob-card">
          <h4>${g.name}</h4>
          ${Object.entries(g.params).map(([k, v]) => {
            const pct = numToBar(v);
            const changed = base && paramDiff(base.params[k], v);
            return `<div class="kv${changed ? " changed" : ""}"><span>${k}</span><strong>${v}</strong></div>
              ${pct == null ? "" : `<div class="bar"><i style="width:${pct}%"></i></div>`}`;
          }).join("")}
        </div>`;
      }).join("")}</div>`;
  }

  function sceneTableRows(scenes) {
    return (scenes || []).map((s) => {
      const bypass = (s.bypass && s.bypass.length) ? s.bypass.join(", ") : "—";
      const knobs = (s.knobs || []).map((k) => k.name + ": " + Object.entries(k.params).map(([a, b]) => `${a} ${b}`).join(", ")).join("; ");
      const params = s.params ? Object.entries(s.params).map(([n, p]) => n + " " + JSON.stringify(p)).join("; ") : "";
      const changes = [s.note, knobs, params].filter(Boolean).join(" · ") || "—";
      return `<tr><td>${s.id}</td><td>${s.name}</td><td>${s.use}</td><td>${bypass}</td><td>${changes}</td></tr>`;
    }).join("");
  }

  function renderSong(song) {
    const scene = (song.scenes || []).find((s) => s.id === currentScene) || song.scenes?.[0];
    const chain = resolveChain(song, scene);
    const baseKnobs = baseKnobsFor(song);
    const sceneKnobs = resolveSceneKnobs(song, scene);
    const activeCards = activeSceneKnobCards(song, scene, chain);

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
          </div>
        </div>
      </section>

      <div class="panel">
        <div class="preset-row">
          <div class="preset-name">${song.preset}</div>
          <button class="copy" type="button" data-copy="${song.preset}">Copy preset name</button>
        </div>
        <h3>Quad Cortex signal chain</h3>
        <div class="scenes">
          ${(song.scenes || []).map((s) =>
            `<button class="scene-btn${scene && s.id === scene.id ? " active" : ""}" data-scene="${s.id}">S${s.id} ${s.name}</button>`
          ).join("")}
        </div>
        ${scene ? `<p class="meta">${scene.use}${scene.note ? " — " + scene.note : ""}</p>` : ""}
        <div class="chain">${renderChain(chain, scene, sceneKnobs, baseKnobs)}</div>
        <p class="meta" style="margin-top:10px">${sceneSummary(scene)} ${chainLegend}</p>
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
        <h3>Scene ${scene ? scene.id : "—"} · active block settings</h3>
        ${renderKnobs(activeCards, baseKnobs, null, "No block overrides for this scene — use preset defaults below.")}
      </div>

      <div class="panel">
        <h3>Preset defaults (all scenes)</h3>
        ${renderKnobs(baseKnobs, baseKnobs)}
        ${song.eq ? `<div class="note">${song.eq}</div>` : ""}
      </div>

      <div class="panel">
        <h3>Scenes</h3>
        <table class="scene-table">
          <thead><tr><th>Scene</th><th>Name</th><th>Use</th><th>Bypass</th><th>Knob / note changes</th></tr></thead>
          <tbody>${sceneTableRows(song.scenes)}</tbody>
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
    const label = album.artist ? `${album.artist} · ${album.year}` : `${album.title} · ${album.year}`;
    return `
      <section class="hero">
        <img class="cover" src="${album.art}" alt="${album.title} cover">
        <div>
          <p class="kicker">${label} · Quad Cortex stock blocks</p>
          <h2>${album.title}</h2>
          <p class="meta">${album.voicing}</p>
          <div class="chips">
            <span class="chip"><strong>Recorded</strong> ${album.recorded}</span>
            <span class="chip"><strong>Base preset</strong> ${album.presetBase}</span>
          </div>
        </div>
      </section>
      <div class="grid-2">
        <div class="panel prose"><h3>Guitars</h3><p>${album.guitars}</p></div>
        <div class="panel prose"><h3>Amps</h3><p>${album.amps}</p></div>
      </div>
      <div class="panel prose"><h3>Effects identity</h3><p>${album.effects}</p></div>
      <div class="panel">
        <h3>Era template chain — ${album.presetBase}</h3>
        <div class="chain">${renderChain(album.baseChain, { bypass: album.baseBypass, merge: album.baseMerge }, album.baseKnobs, album.baseKnobs)}</div>
      </div>
      <div class="panel">
        <h3>Acoustic template — SODA-UNPLUG-ACOUSTIC</h3>
        <div class="chain">${renderChain(album.acousticChain, { bypass: album.acousticBypass || [] }, album.baseKnobs, album.baseKnobs)}</div>
      </div>
      <div class="panel">
        <h3>Studio template — SODA-STUDIO-DREAM</h3>
        <div class="chain">${renderChain(album.studioChain, { bypass: album.studioBypass || [] }, album.baseKnobs, album.baseKnobs)}</div>
      </div>
      <div class="panel">
        <h3>H3000 template — SODA-UNPLUG-H3000</h3>
        <div class="chain">${renderChain(album.h3000Chain, {}, album.baseKnobs, album.baseKnobs)}</div>
      </div>
      <div class="panel">
        <h3>Shared starting knobs</h3>
        ${renderKnobs(album.baseKnobs, album.baseKnobs)}
      </div>
      <div class="panel">
        <h3>Shared scenes (electric template)</h3>
        <table class="scene-table">
          <thead><tr><th>Scene</th><th>Name</th><th>Use</th><th>Notes</th></tr></thead>
          <tbody>${album.sharedScenes.map((s) => `<tr><td>${s.id}</td><td>${s.name}</td><td>${s.use}</td><td>${s.note || "—"}</td></tr>`).join("")}</tbody>
        </table>
      </div>
      <div class="panel">
        <h3>How to use this page</h3>
        <ol class="steps">
          <li>Build <strong>${album.presetBase}</strong>, <strong>SODA-UNPLUG-ACOUSTIC</strong>, and <strong>SODA-STUDIO-DREAM</strong> from the chains above.</li>
          <li>Pick a song. Duplicate the matching template and assign scenes on the Quad Cortex.</li>
          <li>Click a <strong>scene button</strong> — bypassed blocks grey out and <strong>inline knob values update</strong> on active devices.</li>
          <li>Use <strong>Scene · active block settings</strong> for the dial-in list; orange values differ from preset defaults.</li>
          <li>A/B against the record: chime first, then midrange, then width, then space.</li>
        </ol>
        <p class="meta" style="margin-top:12px">${chainLegend}</p>
      </div>
    `;
  }

  function paintTracks() {
    const q = (searchEl.value || "").toLowerCase();
    const items = [{ id: "overview", num: "•", title: "Album templates", preset: album.presetBase }, ...album.songs];
    tracksEl.innerHTML = items.filter((s) =>
      !q || s.title.toLowerCase().includes(q) || (s.preset || "").toLowerCase().includes(q) || (s.side || "").toLowerCase().includes(q)
    ).map((s) => `
      <button class="track${s.id === currentId ? " active" : ""}" data-id="${s.id}">
        <span class="n">${s.num || ""}</span>
        <span class="t">${s.title}</span>
        <span class="preset">${s.preset || ""}</span>
      </button>
    `).join("");
  }

  function paintMain() {
    if (currentId === "overview") {
      mainEl.innerHTML = renderOverview();
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
