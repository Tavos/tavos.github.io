window.ALBUM = {
  id: "av",
  artist: "Gustavo Cerati",
  title: "Ahí Vamos",
  year: "2006",
  theme: "cerati",
  art: "assets/art/ahi-vamos.jpg",
  cablingMode: "qc",
  recorded: "Buenos Aires sessions · Héctor Castillo mix · guitar-forward rock return",
  presetBase: "CERATI-AV-BASE",
  onLoad: "Scene 1 · Mixer A −7 dB · B 0 dB",
  guitars: "PRS / hot humbucker for rockers; Strat or G&L Legacy for rhythmic beds; neck/clean for Adiós / Crimen / Lago. Coleman layers = second guitar or Dual Delay width.",
  amps: "Studio Two-Rock Custom Reverb / live Bogner Shiva stand-ins: UK C30 TopBoost (chime) + Brit 2203 (rock body) via merge. No TONEX required.",
  effects: "Exotic Z Boost / OD250 ≈ Fulltone Full-Drive. Rodent Drive ≈ Hot Tubes / Mr. Ed grit. Digital Delay post-cab. Dual Delay for Médium loops & Crimen solo space. Plate (not Lush) for dry rock air.",
  voicing: "Direct rock song craft — drier than Comfort Unplugged, more mid-forward than Bocanada electronics. Riffs and choruses lead; chorus/delay are accents.",
  cabling: "Guitar → QC In. Stock Amp → Cab on the grid. No FX Loop / TONEX. FRFR or cab sim out.",
  baseBypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"],
  baseMerge: { a: 30, b: 70 },
  ampSlots: [
    { path: "A", short: "C30", block: "UK C30 TopBoost", cab: "212 UK C30 GB ’69", job: "Chime / ballads" },
    { path: "B", short: "Brit", block: "Brit 2203", cab: "412 Brit 60B GB 90s", job: "Rock body" }
  ],
  ampTweakDefault: "No amp overrides — use Template I defaults (C30 Volume 4.5 / Boost Cool · Brit Gain 5.5 / Mid 6.5). See Album template.",
  ampTweakRoots: ["uk c30 topboost", "brit 2203"],
  howTo: [
    "Build the two-amp merge: <strong>A = UK C30 TopBoost</strong> → 212 UK C30, <strong>B = Brit 2203</strong> → 412 Brit 60B.",
    "Cable guitar → QC Input 1 → Out 1/2 to FRFR / interface. No TONEX required.",
    "Build <strong>CERATI-AV-BASE</strong> once. Default blend <strong>A 30 / B 70</strong> ≈ Mixer <strong>A −7 dB / B 0 dB</strong>. Scenes change merge + bypass.",
    "Pick a song. Duplicate the base preset. Assign Scenes 1–6 to footswitches. Check <strong>Song amp tweaks</strong> when a song is open.",
    "Click a scene to see active blocks only and Mixer levels on the Merge block.",
    "A/B against the record: attack first, then midrange, amp blend, then space. Keep it drier than Unplugged."
  ],
  mixerNote: {
    title: "Mixer note — A/B blend → CorOS dB",
    body: "Guide blends like A 30 / B 70 are relative path weights, not Mixer knobs. On QC, Mixer Level A / Level B are −40…+12 dB. If both amps arrive similarly loud: L_dB = 20·log10(pct/100).",
    rows: [
      { blend: "A 30 / B 70 (default)", a: "≈ −10.5 dB", b: "≈ −3 dB", practical: "A −7 dB · B 0 dB" },
      { blend: "A 50 / B 50", a: "−6 dB", b: "−6 dB", practical: "A 0 · B 0" },
      { blend: "A 85 / B 15", a: "−1.4 dB", b: "−16.5 dB", practical: "A 0 · B −15 dB" },
      { blend: "A 20 / B 80", a: "−14 dB", b: "−1.9 dB", practical: "A −12 dB · B 0 dB" },
      { blend: "A 95 / B 5", a: "−0.4 dB", b: "−26 dB", practical: "A 0 · B −26 dB" },
      { blend: "A 70 / B 30", a: "−3 dB", b: "−10.5 dB", practical: "A 0 · B −7 dB" }
    ],
    footer: "Default Scene 1: Mixer Level A ≈ −7 dB, Level B ≈ 0 dB. If one amp is already louder, trim its Master/Output first, then keep the ~7 dB gap for 30/70."
  },
  ampNote: {
    title: "Amp knobs — UK C30 TopBoost & Brit 2203 (CorOS 4.1.0)",
    paths: [
      {
        path: "A",
        name: "UK C30 TopBoost",
        cab: "212 UK C30 GB ’69",
        knobs: [
          { knob: "Volume", value: "4.5" },
          { knob: "Bass", value: "4.5" },
          { knob: "Treble", value: "6.0" },
          { knob: "Tone Cut", value: "3.5" },
          { knob: "Boost", value: "Cool" },
          { knob: "Output", value: "0 dB" }
        ],
        never: "No Gain / Mid / Presence on this amp."
      },
      {
        path: "B",
        name: "Brit 2203",
        cab: "412 Brit 60B GB 90s",
        knobs: [
          { knob: "Gain", value: "5.5" },
          { knob: "Bass", value: "5.0" },
          { knob: "Mid", value: "6.5" },
          { knob: "Treble", value: "6.0" },
          { knob: "Presence", value: "6.0" },
          { knob: "Master", value: "6.0" }
        ],
        never: null
      }
    ],
    footer: "Song pages list amp overrides only when they differ from these defaults."
  },
  baseChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Chief CS3", type: "comp" },
    { name: "Crying Wah", type: "wah" },
    { name: "Vintage Chorus", type: "mod" },
    { name: "Exotic Z Boost", type: "od" },
    { name: "OD250", type: "od" },
    { name: "Rodent Drive", type: "od" },
    {
      name: "Merge",
      type: "util",
      a: [
        { name: "UK C30 TopBoost", type: "amp" },
        { name: "212 UK C30 GB ’69", type: "cab" }
      ],
      b: [
        { name: "Brit 2203", type: "amp" },
        { name: "412 Brit 60B GB 90s", type: "cab" }
      ]
    },
    { name: "Chief DC2W", type: "mod" },
    { name: "Digital Delay", type: "delay" },
    { name: "Dual Delay", type: "delay" },
    { name: "Plate", type: "verb" },
    { name: "Hall", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  baseKnobs: [
    { name: "Chief CS3", params: { Sustain: 3.0, Attack: 3.5, Tone: 5.0, Level: 5.0 } },
    { name: "UK C30 TopBoost", params: { Volume: 4.5, Bass: 4.5, Treble: 6.0, "Tone Cut": 3.5, Boost: "Cool", Output: "0 dB" } },
    { name: "Brit 2203", params: { Gain: 5.5, Bass: 5.0, Mid: 6.5, Treble: 6.0, Presence: 6.0, Master: 6.0 } },
    { name: "Exotic Z Boost", params: { Gain: 4.0, Bass: 5.0, Treble: 5.5, Volume: 5.0 } },
    { name: "OD250", params: { Gain: 3.5, Volume: 5.0 } },
    { name: "Rodent Drive", params: { Distortion: 4.5, Filter: 6.0, Volume: 5.5 } },
    { name: "Vintage Chorus", params: { Mix: "22%", Rate: "2.0 Hz", "VIB Depth": "35%", Sync: "Off" } },
    { name: "Chief DC2W", params: { Mix: "28%", Mode: 3, "SDD-320": "On" } },
    { name: "Digital Delay", params: { Mix: "14%", Time: "1/4", Feedback: "18%", "High Pass": "120 Hz", "Low Pass": "7 kHz", "Mod Depth": "10%", Sync: "On" } },
    { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "18%", Mix: "20%", "Cross Feedback": "12%", Sync: "On" } },
    { name: "Plate", params: { Mix: "10%", Decay: "38%", "Pre Delay": "15 ms", "High Pass": "120 Hz", "Low Pass": "8 kHz", "LF Damping": "40%", "HF Damping": "45%", "Mod Depth": "15%", Trails: "On" } },
    { name: "Hall", params: { Mix: "16%", Decay: "2.0 s", "Pre Delay": "25 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
    { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "−1 dB", "1.2 kHz": "+2 dB" } }
  ],
  sharedScenes: [
    { id: 1, name: "rock / brit", use: "Default album rhythm", note: "Delay Mix 14%", merge: { a: 30, b: 70 } },
    { id: 2, name: "chime / c30", use: "Ballads / clean", note: "Chorus optional", merge: { a: 85, b: 15 } },
    { id: 3, name: "drive / full", use: "Full-Drive push", note: "Exotic Z or OD250", merge: { a: 20, b: 80 } },
    { id: 4, name: "rat / grit", use: "Hot Tubes / Mr. Ed grit", note: "Rodent on", merge: { a: 15, b: 85 } },
    { id: 5, name: "solo / lead", use: "Leads", note: "Boost + Dual Delay", merge: { a: 25, b: 75 } },
    { id: 6, name: "space / lush", use: "Atmosphere", note: "Dual Delay + Hall", merge: { a: 70, b: 30 } }
  ],
  songs: [
    {
      id: "alfin", num: "1", title: "Al fin sucede", side: "Ahí Vamos", preset: "CERATI-AV-ALFIN",
      guitar: "PRS / hot HB", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "Album opener — dynamic uplifting riff rock. Guitar at the front of the mix.",
      tonality: "Brit-heavy merge. Dig in; leave chorus off. Delay dotted under the riff optional.",
      miss: "Too much C30 chime or Unplugged chorus — wrong album mood.",
      knobs: [
        { name: "Digital Delay", params: { Mix: "16%", Time: "dotted 1/8", Feedback: "18%", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "riff / brit", use: "Main riff / choruses", merge: { a: 25, b: 75 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 3, name: "lift / drive", use: "Bigger lifts", merge: { a: 20, b: 80 }, bypass: ["Crying Wah", "Vintage Chorus", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 5, name: "solo / lead", use: "Lead fills", merge: { a: 25, b: 75 }, bypass: ["Crying Wah", "Vintage Chorus", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 1 on load: Mixer A −10 dB / B 0 dB. Brit Gain ~5.5.", "Delay Mix ~16% dotted 1/8.", "Lift: Scene 3 Exotic Z Boost Gain 4."]
    },
    {
      id: "excepcion", num: "2", title: "La excepción", side: "Ahí Vamos", preset: "CERATI-AV-EXCEP",
      guitar: "PRS / hot HB", pickup: "bridge", toneVol: "tone 9 / vol 10",
      historical: "Second single — surging guitar rocker, Latin Grammy Best Rock Song.",
      tonality: "Committed Brit path. Optional Rodent for chorus grit. Solo gets Dual Delay.",
      miss: "Clean C30-only — loses the single’s punch.",
      knobs: [
        { name: "Rodent Drive (Scene 4)", params: { Distortion: 4.5, Filter: 6.0, Volume: 5.5 } },
        { name: "Dual Delay (Scene 5)", params: { Mix: "24%", "Time L": "1/4", "Time R": "dotted 1/8", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "riff / brit", use: "Verses / main riff", merge: { a: 20, b: 80 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 4, name: "chorus / grit", use: "Chorus peaks", merge: { a: 15, b: 85 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 5, name: "solo / lead", use: "Solo", merge: { a: 20, b: 80 }, bypass: ["Crying Wah", "Vintage Chorus", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 1: Brit forward. Dig midrange.", "Chorus: Scene 4 Rodent Distortion ~4.5.", "Solo Scene 5: Dual Delay Mix 24%."]
    },
    {
      id: "uno", num: "3", title: "Uno entre 1000", side: "Ahí Vamos", preset: "CERATI-AV-UNO",
      guitar: "HB or Strat", pickup: "bridge / both", toneVol: "tone 7 / vol 9",
      historical: "Cerati–Coleman write — groove, bass-forward, relaxed rock pocket.",
      tonality: "Slightly less Gain than tracks 1–2. Leave space for Nalé. Light delay.",
      miss: "Recto-level saturation — buries the groove.",
      knobs: [
        { name: "Brit 2203", params: { Gain: 5.0, Mid: 6.0 } },
        { name: "Digital Delay", params: { Mix: "12%", Time: "1/4", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "groove / brit", use: "Main groove", merge: { a: 35, b: 65 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 3, name: "lift / drive", use: "Chorus lift", merge: { a: 25, b: 75 }, bypass: ["Crying Wah", "Vintage Chorus", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 2, name: "break / chime", use: "Softer break", merge: { a: 70, b: 30 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] }
      ],
      steps: ["Scene 1: Brit Gain ~5.0, Mixer A −5 dB / B 0 dB.", "Don’t overplay — pocket first.", "Break: Scene 2 more C30."]
    },
    {
      id: "caravana", num: "4", title: "Caravana", side: "Ahí Vamos", preset: "CERATI-AV-CARAVANA",
      guitar: "Strat / single-coil or HB", pickup: "bridge", toneVol: "tone 6 / vol 9",
      historical: "Neu!-style motorik pulse — hypnotic rhythm more than big riffs.",
      tonality: "Balanced merge. Digital Delay as the hypnotic glue. Optional light Vintage Chorus.",
      miss: "Heavy Rodent — kills the motorik trance.",
      knobs: [
        { name: "Digital Delay", params: { Mix: "20%", Time: "1/8", Feedback: "22%", Sync: "On" } },
        { name: "Vintage Chorus (optional)", params: { Mix: "18%", Rate: "1.8 Hz", "VIB Depth": "30%", Sync: "Off" } }
      ],
      scenes: [
        { id: 1, name: "pulse / brit", use: "Motorik body", merge: { a: 40, b: 60 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 2, name: "pulse / chorus", use: "Wider hypnotic bed", merge: { a: 50, b: 50 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "outro / space", use: "Ending wash", merge: { a: 60, b: 40 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W"] }
      ],
      steps: ["Scene 1: Delay Mix 20% at 1/8 Sync On.", "Stay locked to the pulse.", "Outro Scene 6: Dual Delay + Hall."]
    },
    {
      id: "adios", num: "5", title: "Adiós", side: "Ahí Vamos", preset: "CERATI-AV-ADIOS",
      guitar: "Neck HB / clean", pickup: "neck / both", toneVol: "tone 5 / vol 8",
      historical: "Third single — melancholic, elegant, instantly melodic. Live often Pensa green.",
      tonality: "C30-dominant. Light Vintage Chorus. Delay supports the melody — no grit.",
      miss: "Brit 2203 Gain 6 — wrong song.",
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 4.0, Boost: "Cool" } },
        { name: "Vintage Chorus", params: { Mix: "24%", Rate: "2.0 Hz", "VIB Depth": "38%", Sync: "Off" } },
        { name: "Digital Delay", params: { Mix: "18%", Time: "dotted 1/8", Feedback: "20%", Sync: "On" } }
      ],
      scenes: [
        { id: 2, name: "verse / chime", use: "Verses / choruses", merge: { a: 90, b: 10 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "bridge / space", use: "Wider bridge", merge: { a: 80, b: 20 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W"] },
        { id: 5, name: "solo / lead", use: "Lead lines", merge: { a: 70, b: 30 }, bypass: ["Crying Wah", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 2: Mixer A 0 dB / B −19 dB, Volume 4.0 Cool.", "Chorus Mix ~24%.", "Keep Brit almost out."]
    },
    {
      id: "quedo", num: "6", title: "Me quedo aquí", side: "Ahí Vamos", preset: "CERATI-AV-QUEDO",
      guitar: "HB", pickup: "bridge", toneVol: "tone 7 / vol 9",
      historical: "Fifth single — mid-tempo rock, memorable chorus.",
      tonality: "Template default rock merge. OD250 for chorus lift optional.",
      miss: "Dream-pop Plate Lush wash — keep Plate Mix ~10–12%.",
      knobs: [
        { name: "Digital Delay", params: { Mix: "15%", Time: "1/4", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "verse / brit", use: "Verses", merge: { a: 30, b: 70 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 3, name: "chorus / drive", use: "Choruses", merge: { a: 25, b: 75 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 5, name: "solo / lead", use: "Solo", merge: { a: 25, b: 75 }, bypass: ["Crying Wah", "Vintage Chorus", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 1 verses.", "Chorus Scene 3: OD250 Gain 3.5.", "Solo Scene 5."]
    },
    {
      id: "lago", num: "7", title: "Lago en el cielo", side: "Ahí Vamos", preset: "CERATI-AV-LAGO",
      guitar: "Clean / neck", pickup: "neck / both", toneVol: "tone 5 / vol 8",
      historical: "Fourth single — spacious, heavenly; delay and atmosphere matter.",
      tonality: "C30 + Dual Delay + Hall. Optional Plate Lush swap for longer bloom.",
      miss: "Dry Brit rhythm only — you skipped the sky.",
      chain: null,
      knobs: [
        { name: "Digital Delay", params: { Mix: "22%", Time: "dotted 1/8", Feedback: "24%", Sync: "On" } },
        { name: "Dual Delay (Scene 6)", params: { Mix: "26%", "Time L": "1/4", "Time R": "dotted 1/8", Sync: "On" } },
        { name: "Hall (Scene 6)", params: { Mix: "22%", Decay: "2.2 s", "Pre Delay": "30 ms", Trails: "On" } },
        { name: "Vintage Chorus", params: { Mix: "20%", Rate: "1.8 Hz", "VIB Depth": "40%", Sync: "Off" } }
      ],
      scenes: [
        { id: 2, name: "verse / chime", use: "Verses", merge: { a: 85, b: 15 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "chorus / space", use: "Choruses / outro", merge: { a: 75, b: 25 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W"] },
        { id: 5, name: "solo / lead", use: "Lead", merge: { a: 60, b: 40 }, bypass: ["Crying Wah", "Rodent Drive", "Chief DC2W"] }
      ],
      steps: ["Scene 2: C30 Cool, Chorus Mix 20%.", "Chorus/outro Scene 6: Dual Delay 26%, Hall 22%.", "Optional: swap Plate → Plate Lush Mix 16%."]
    },
    {
      id: "dios", num: "8", title: "Dios nos libre", side: "Ahí Vamos", preset: "CERATI-AV-DIOS",
      guitar: "HB", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "Cerati–Coleman — experimental edges inside song form.",
      tonality: "Rock merge with optional Rodent and DC2W width. Don’t over-wash.",
      miss: "Full Unplugged lounge chain — wrong era.",
      knobs: [
        { name: "Chief DC2W (Scene 3)", params: { Mix: "32%", Mode: 3, "SDD-320": "On" } }
      ],
      scenes: [
        { id: 1, name: "riff / brit", use: "Main body", merge: { a: 30, b: 70 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 4, name: "edge / grit", use: "Grittier sections", merge: { a: 20, b: 80 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 3, name: "wide / dc2w", use: "Wider stereo lift", merge: { a: 30, b: 70 }, bypass: ["Crying Wah", "Vintage Chorus", "OD250", "Rodent Drive", "Dual Delay", "Hall"] }
      ],
      steps: ["Scene 1 default.", "Edge: Scene 4 Rodent.", "Width: Scene 3 DC2W Mix 32%."]
    },
    {
      id: "otra", num: "9", title: "Otra piel", side: "Ahí Vamos", preset: "CERATI-AV-OTRA",
      guitar: "Clean HB / Strat", pickup: "neck / both", toneVol: "tone 6 / vol 8",
      historical: "Dream-pop adjacent — softer than the openers.",
      tonality: "C30 + Vintage Chorus + Plate. Light Dual Delay. Keep Brit low.",
      miss: "Rodent Drive — wrong skin.",
      knobs: [
        { name: "Vintage Chorus", params: { Mix: "28%", Rate: "2.2 Hz", "VIB Depth": "42%", Sync: "Off" } },
        { name: "Plate", params: { Mix: "16%", Decay: "45%", "Pre Delay": "20 ms", "Mod Depth": "22%", Trails: "On" } }
      ],
      scenes: [
        { id: 2, name: "verse / chime", use: "Verses", merge: { a: 85, b: 15 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "chorus / space", use: "Choruses", merge: { a: 75, b: 25 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W"] },
        { id: 1, name: "lift / brit", use: "Slightly firmer lift", merge: { a: 45, b: 55 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] }
      ],
      steps: ["Scene 2: Chorus Mix 28%, Plate 16%.", "Chorus Scene 6 adds Dual Delay.", "Avoid Rodent entirely."]
    },
    {
      id: "medium", num: "10", title: "Médium", side: "Ahí Vamos", preset: "CERATI-AV-MEDIUM",
      guitar: "HB / any", pickup: "bridge", toneVol: "tone 7 / vol 9",
      historical: "Live: Boomerang phrase loops on the intro. Studio still loop/texture minded.",
      tonality: "Dual Delay as loop stand-in. C30/Brit blend mid. Hall for the séance.",
      miss: "No delay trails — you skipped the medium.",
      knobs: [
        { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "3/8", Mix: "28%", "Feedback L/R": "30%", Sync: "On" } },
        { name: "Hall", params: { Mix: "20%", Decay: "2.4 s", Trails: "On" } }
      ],
      scenes: [
        { id: 6, name: "intro / loops", use: "Intro loop bed", merge: { a: 60, b: 40 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W"] },
        { id: 1, name: "song / brit", use: "Song body", merge: { a: 35, b: 65 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Hall"] },
        { id: 5, name: "solo / lead", use: "Lead over loops", merge: { a: 40, b: 60 }, bypass: ["Crying Wah", "Vintage Chorus", "Rodent Drive", "Chief DC2W"] }
      ],
      steps: ["On load Scene 6: Dual Delay Mix 28%, higher FB.", "Hold notes to feed the ‘Boomerang’ feel.", "Song body Scene 1; lead Scene 5."]
    },
    {
      id: "bomba", num: "11", title: "Bomba de Tiempo", side: "Ahí Vamos", preset: "CERATI-AV-BOMBA",
      guitar: "Hot HB", pickup: "bridge", toneVol: "tone 9 / vol 10",
      historical: "Denser mid-album rocker — time-bomb tension.",
      tonality: "Brit forward, OD250 or Exotic Z on lifts. Keep Plate tight.",
      miss: "Ballad C30 setting — not enough fuse.",
      knobs: [
        { name: "Brit 2203", params: { Gain: 5.8, Mid: 7.0 } },
        { name: "Digital Delay", params: { Mix: "12%", Time: "1/8", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "riff / brit", use: "Main riff", merge: { a: 20, b: 80 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 3, name: "lift / drive", use: "Explosions", merge: { a: 15, b: 85 }, bypass: ["Crying Wah", "Vintage Chorus", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 4, name: "peak / grit", use: "Peak grit", merge: { a: 10, b: 90 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] }
      ],
      steps: ["Scene 1: Gain ~5.8, Mid 7.", "Lifts Scene 3 Exotic Z.", "Peak Scene 4 Rodent sparingly."]
    },
    {
      id: "crimen", num: "12", title: "Crimen", side: "Ahí Vamos", preset: "CERATI-AV-CRIMEN",
      guitar: "Clean → lead HB", pickup: "neck then bridge", toneVol: "tone 5–8 / vol 8–10",
      onLoad: "Scene 2 · piano-ballad guitar",
      historical: "Lead single — piano ballad, yearning chorus. Solo requested Brian May–style.",
      tonality: "Verses: C30 Cool, light chorus/delay. Solo: Dual Delay + Exotic Z, optional Pitch Shifter Fine +7¢ widen — not Whammy theatrics.",
      miss: "Rodent on the verses — ruins Crimen.",
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 3.8, Boost: "Cool", Treble: 6.5 } },
        { name: "Vintage Chorus", params: { Mix: "20%", Rate: "1.8 Hz", "VIB Depth": "35%", Sync: "Off" } },
        { name: "Digital Delay", params: { Mix: "16%", Time: "dotted 1/8", Feedback: "22%", Sync: "On" } },
        { name: "Dual Delay (Scene 5)", params: { Mix: "28%", "Time L": "1/4", "Time R": "dotted 1/8", Sync: "On" } },
        { name: "Exotic Z Boost (Scene 5)", params: { Gain: 4.5, Treble: 6.0, Volume: 5.0 } }
      ],
      scenes: [
        { id: 2, name: "verse / chime", use: "Verses / soft chorus", merge: { a: 95, b: 5 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "chorus / lift", use: "Bigger chorus", merge: { a: 80, b: 20 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W"] },
        { id: 5, name: "solo / may", use: "Brian May–ish solo", merge: { a: 40, b: 60 }, bypass: ["Crying Wah", "Vintage Chorus", "OD250", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["On load Scene 2: almost pure C30, Volume ~3.8.", "Chorus Scene 6 optional Dual Delay.", "Solo Scene 5: Exotic Z + Dual Delay Mix 28% — melodic, sustained, not shred."]
    },
    {
      id: "jugo", num: "13", title: "Jugo de luna", side: "Ahí Vamos", preset: "CERATI-AV-JUGO",
      guitar: "HB", pickup: "bridge / both", toneVol: "tone 7 / vol 9",
      historical: "Album closer — moonlit, still rock-framed.",
      tonality: "Balanced merge, Plate up slightly, Dual Delay for the last glow.",
      miss: "Slamming Rodent into the final chord.",
      knobs: [
        { name: "Plate", params: { Mix: "14%", Decay: "42%", Trails: "On" } },
        { name: "Dual Delay (Scene 6)", params: { Mix: "24%", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "song / brit", use: "Main body", merge: { a: 40, b: 60 }, bypass: ["Crying Wah", "Vintage Chorus", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 2, name: "soft / chime", use: "Softer passages", merge: { a: 75, b: 25 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "outro / space", use: "Closing wash", merge: { a: 65, b: 35 }, bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Rodent Drive", "Chief DC2W"] }
      ],
      steps: ["Scene 1 body.", "Soft Scene 2 more C30.", "Outro Scene 6 Dual Delay + Hall."]
    }
  ]
};
