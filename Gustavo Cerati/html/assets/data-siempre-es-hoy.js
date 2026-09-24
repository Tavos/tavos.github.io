window.ALBUM = {
  id: "seh",
  artist: "Gustavo Cerati",
  title: "Siempre es Hoy",
  year: "2002",
  theme: "cerati",
  art: "assets/art/siempre-es-hoy.jpg",
  cablingMode: "qc",
  recorded: "Buenos Aires · post-Bocanada rhythmic guitar/pop · hip-hop pocket under rock melodies",
  presetBase: "CERATI-SEH-BASE",
  onLoad: "Scene 1 · Mixer A 0 dB · B −7 dB",
  guitars: "Fender Telecaster (principal). Gibson Les Paul (Artefacto / alternate tunings). Pensa-Suhr on Casa. PRS backup. Guild acoustic off this electric guide.",
  amps: "Live dual Roland JC-120 → stock Rols Jazz CH120 → 212 Rols Jazz ’87 (Chorus On). Rock grit: Brit 2203 merge. No TONEX required.",
  effects: "Chief CS3 ≈ EBS MultiComp. Rodent Drive ≈ ProCo RAT. Pitch Shifter +12 ≈ Fulltone Ultimate Octave accents. Digital/Dual Delay + Plate. AdrenaLinn-style motion = delay/modulation programming, not a separate block.",
  voicing: "JC stereo clean is the album spine. Brit path for singles that dig in. Wet programming already in the mix — keep Plate Mix modest; don’t rebuild Bocanada electronics.",
  cabling: "Guitar → QC In. Stock Amp → Cab merge on the grid. No FX Loop / TONEX. FRFR or cab sim out.",
  baseBypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"],
  baseMerge: { a: 70, b: 30 },
  ampSlots: [
    { path: "A", short: "JC", block: "Rols Jazz CH120", cab: "212 Rols Jazz ’87", job: "JC-120 stereo clean spine" },
    { path: "B", short: "Brit", block: "Brit 2203", cab: "412 Brit 60B GB 90s", job: "Rock grit / singles" }
  ],
  ampTweakDefault: "No amp overrides — use Template K defaults (JC Volume 5.2 · Chorus On · Brit Gain 5.2). See Album template.",
  ampTweakRoots: ["rols jazz", "brit 2203"],
  howTo: [
    "Build the two-amp merge: <strong>A = Rols Jazz CH120</strong> → 212 Rols Jazz ’87 (Chorus <strong>On</strong>), <strong>B = Brit 2203</strong> → 412 Brit 60B.",
    "Cable guitar → QC Input 1 → Out 1/2 to FRFR / interface. No TONEX required.",
    "Build <strong>CERATI-SEH-BASE</strong> once. Default blend <strong>A 70 / B 30</strong> ≈ Mixer <strong>A 0 dB / B −7 dB</strong>.",
    "Pick a song. Duplicate the base preset. Assign Scenes 1–6. Check <strong>Song amp tweaks</strong> when a song is open.",
    "Click a scene to see active blocks only and Mixer levels on the Merge block.",
    "A/B against the record: JC clean and pocket first, then Brit grit, RAT, octave accents, delay — not Unplugged wash."
  ],
  mixerNote: {
    title: "Mixer note — A/B blend → CorOS dB",
    body: "Guide blends like A 70 / B 30 are relative path weights. On QC, Mixer Level A / Level B are −40…+12 dB.",
    rows: [
      { blend: "A 70 / B 30 (default)", a: "≈ −3 dB", b: "≈ −10.5 dB", practical: "A 0 dB · B −7 dB" },
      { blend: "A 25 / B 75", a: "−12 dB", b: "−2.5 dB", practical: "A −10 dB · B 0 dB" },
      { blend: "A 40 / B 60", a: "−8 dB", b: "−4.4 dB", practical: "A −4 dB · B 0 dB" },
      { blend: "A 55 / B 45", a: "−5.2 dB", b: "−6.9 dB", practical: "A 0 · B −2 dB" },
      { blend: "A 35 / B 65", a: "−9.1 dB", b: "−3.7 dB", practical: "A −5 dB · B 0 dB" },
      { blend: "A 60 / B 40", a: "−4.4 dB", b: "−8 dB", practical: "A 0 · B −4 dB" }
    ],
    footer: "Practical column = louder path at 0 dB."
  },
  ampNote: {
    title: "Amp knobs — Rols Jazz CH120 & Brit 2203 (CorOS 4.1.0)",
    paths: [
      {
        path: "A",
        name: "Rols Jazz CH120",
        cab: "212 Rols Jazz ’87",
        knobs: [
          { knob: "Volume", value: "5.2" },
          { knob: "Bright", value: "On" },
          { knob: "Chorus", value: "On" },
          { knob: "Output", value: "0 dB" }
        ],
        never: "Cerati SEH live JC chorus stays On — not the FF “Chorus Off” patch."
      },
      {
        path: "B",
        name: "Brit 2203",
        cab: "412 Brit 60B GB 90s",
        knobs: [
          { knob: "Gain", value: "5.2" },
          { knob: "Bass", value: "5.0" },
          { knob: "Mid", value: "6.0" },
          { knob: "Treble", value: "6.0" },
          { knob: "Presence", value: "5.5" },
          { knob: "Master", value: "5.5" }
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
    { name: "Pitch Shifter", type: "pitch" },
    { name: "Rodent Drive", type: "od" },
    { name: "Exotic Z Boost", type: "od" },
    { name: "OD250", type: "od" },
    {
      name: "Merge",
      type: "util",
      a: [
        { name: "Rols Jazz CH120", type: "amp" },
        { name: "212 Rols Jazz ’87", type: "cab" }
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
    { name: "Rols Jazz CH120", params: { Volume: 5.2, Bright: "On", Chorus: "On", Output: "0 dB" } },
    { name: "Brit 2203", params: { Gain: 5.2, Bass: 5.0, Mid: 6.0, Treble: 6.0, Presence: 5.5, Master: 5.5 } },
    { name: "Pitch Shifter", params: { Pitch: "+12", Fine: "0¢", Mix: "35%" } },
    { name: "Rodent Drive", params: { Distortion: 4.5, Filter: 6.0, Volume: 5.5 } },
    { name: "Exotic Z Boost", params: { Gain: 3.5, Bass: 5.0, Treble: 5.5, Volume: 5.0 } },
    { name: "OD250", params: { Gain: 3.0, Volume: 5.0 } },
    { name: "Chief DC2W", params: { Mix: "24%", Mode: 3, "SDD-320": "On" } },
    { name: "Digital Delay", params: { Mix: "16%", Time: "1/8", Feedback: "20%", "High Pass": "120 Hz", "Low Pass": "7 kHz", "Mod Depth": "12%", Sync: "On" } },
    { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "18%", Mix: "20%", "Cross Feedback": "14%", Sync: "On" } },
    { name: "Plate", params: { Mix: "10%", Decay: "40%", "Pre Delay": "18 ms", "High Pass": "120 Hz", "Low Pass": "8 kHz", "LF Damping": "40%", "HF Damping": "45%", "Mod Depth": "16%", Trails: "On" } },
    { name: "Hall", params: { Mix: "14%", Decay: "2.0 s", "Pre Delay": "25 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
    { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "−1 dB", "1.2 kHz": "+2 dB" } }
  ],
  sharedScenes: [
    { id: 1, name: "clean / jc", use: "Default JC bed", note: "Chorus On", merge: { a: 70, b: 30 } },
    { id: 2, name: "rock / brit", use: "Single grit", note: "Brit forward", merge: { a: 25, b: 75 } },
    { id: 3, name: "rat / edge", use: "RAT accents", note: "Rodent on", merge: { a: 40, b: 60 } },
    { id: 4, name: "octave / lift", use: "Ultimate Octave stand-in", note: "Pitch +12", merge: { a: 55, b: 45 } },
    { id: 5, name: "solo / lead", use: "Leads", note: "Boost + Dual Delay", merge: { a: 35, b: 65 } },
    { id: 6, name: "space / program", use: "Atmosphere", note: "Dual Delay + Hall", merge: { a: 60, b: 40 } }
  ],
  songs: [
    {
      id: "cosas", num: "1", title: "Cosas imposibles", side: "Siempre es Hoy", preset: "CERATI-SEH-COSAS",
      guitar: "Tele / HB", pickup: "bridge", toneVol: "tone 7 / vol 9",
      historical: "Album opener and single — rhythmic guitar/pop with programmed pocket under melodic riffs.",
      tonality: "Brit-forward merge, Delay at 1/8. JC stays under for stereo air.",
      miss: "Pure JC clean only — loses the single’s punch.",
      knobs: [
        { name: "Digital Delay", params: { Mix: "18%", Time: "1/8", Feedback: "20%", Sync: "On" } }
      ],
      scenes: [
        { id: 2, name: "riff / brit", use: "Main riff / choruses", merge: { a: 25, b: 75 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 3, name: "lift / rat", use: "Grittier lifts", merge: { a: 30, b: 70 }, bypass: ["Crying Wah", "Pitch Shifter", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 5, name: "solo / lead", use: "Lead fills", merge: { a: 30, b: 70 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 2 on load: Mixer A −10 dB / B 0 dB.", "Delay Mix ~18% at 1/8.", "Lift Scene 3: Rodent Distortion ~4.5."]
    },
    {
      id: "creo", num: "2", title: "No te creo", side: "Siempre es Hoy", preset: "CERATI-SEH-CREO",
      guitar: "Tele", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "Punchy disbelief anthem — direct rhythm guitar, tight production.",
      tonality: "Brit path. Keep delay short. Dig midrange.",
      miss: "JC wash drowning the vocal pocket.",
      knobs: [
        { name: "Brit 2203", params: { Gain: 5.4, Mid: 6.5 } }
      ],
      scenes: [
        { id: 2, name: "verse / brit", use: "Verses / choruses", merge: { a: 20, b: 80 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 3, name: "edge / rat", use: "Chorus grit", merge: { a: 25, b: 75 }, bypass: ["Crying Wah", "Pitch Shifter", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 5, name: "solo / lead", use: "Lead", merge: { a: 30, b: 70 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 2: Brit Gain ~5.4.", "Scene 3 Rodent for accents.", "Don’t over-chorus the JC path."]
    },
    {
      id: "artefacto", num: "3", title: "Artefacto", side: "Siempre es Hoy", preset: "CERATI-SEH-ARTE",
      guitar: "Les Paul (often drop / alt)", pickup: "bridge", toneVol: "tone 6 / vol 8",
      historical: "Les Paul character on the SEH tour — thicker, programmed bed, JC stereo clean around it.",
      tonality: "JC-forward. Light delay. Match the recording’s tuning note before dialing.",
      miss: "Brit Gain 6 as default — wrong bed.",
      knobs: [
        { name: "Rols Jazz CH120", params: { Volume: 5.0, Bright: "On", Chorus: "On" } },
        { name: "Digital Delay", params: { Mix: "14%", Time: "dotted 1/8", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "bed / jc", use: "Main bed", merge: { a: 80, b: 20 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 4, name: "octave / color", use: "Octave accents", merge: { a: 70, b: 30 }, bypass: ["Crying Wah", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "space / program", use: "Programmed space", merge: { a: 65, b: 35 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W"] }
      ],
      steps: ["Confirm tuning (tour used drop D for Artefacto live).", "Scene 1: JC Volume ~5.0 Chorus On.", "Octave Scene 4 sparingly."]
    },
    {
      id: "naci", num: "4", title: "Nací para esto", side: "Siempre es Hoy", preset: "CERATI-SEH-NACI",
      guitar: "Tele", pickup: "bridge / both", toneVol: "tone 6 / vol 9",
      historical: "Driving affirmation — Tele into JC with rhythmic delay glue.",
      tonality: "JC spine + 1/8 delay. Brit only for chorus lift.",
      miss: "Always-on RAT.",
      knobs: [
        { name: "Digital Delay", params: { Mix: "17%", Time: "1/8", Feedback: "18%", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "pulse / jc", use: "Main pulse", merge: { a: 75, b: 25 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 2, name: "chorus / brit", use: "Chorus lift", merge: { a: 35, b: 65 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 5, name: "solo / lead", use: "Lead", merge: { a: 40, b: 60 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 1 pocket first.", "Chorus Scene 2 more Brit.", "Solo Scene 5 Dual Delay Mix ~22%."]
    },
    {
      id: "cicatriz", num: "5", title: "Tu cicatriz en mí", side: "Siempre es Hoy", preset: "CERATI-SEH-CICA",
      guitar: "Tele / PRS", pickup: "bridge", toneVol: "tone 7 / vol 9",
      historical: "Signature single — scarred melody over rhythmic production; guitar carries the hook.",
      tonality: "Brit for the hook body; JC under for width. Dual Delay on the solo.",
      miss: "Dry JC-only — the single needs midrange commitment.",
      knobs: [
        { name: "Brit 2203", params: { Gain: 5.3, Mid: 6.5 } },
        { name: "Dual Delay (Scene 5)", params: { Mix: "24%", Sync: "On" } }
      ],
      scenes: [
        { id: 2, name: "hook / brit", use: "Hook / choruses", merge: { a: 30, b: 70 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 1, name: "verse / jc", use: "Softer verses", merge: { a: 65, b: 35 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 5, name: "solo / lead", use: "Solo", merge: { a: 35, b: 65 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 2 hook: Brit Mid ~6.5.", "Verses Scene 1 more JC.", "Solo Scene 5 Dual Delay 24%."]
    },
    {
      id: "karaoke", num: "6", title: "Karaoke", side: "Siempre es Hoy", preset: "CERATI-SEH-KARA",
      guitar: "Tele / clean", pickup: "neck / both", toneVol: "tone 5 / vol 8",
      historical: "Playful track — clean JC answers and delay as conversation.",
      tonality: "JC dominant. Dual Delay for call/response. No RAT.",
      miss: "Brit Gain 6 — wrong mood.",
      knobs: [
        { name: "Dual Delay", params: { Mix: "22%", "Time L": "1/4", "Time R": "dotted 1/8", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "verse / jc", use: "Verses", merge: { a: 85, b: 15 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Hall"] },
        { id: 6, name: "wide / space", use: "Wider sections", merge: { a: 70, b: 30 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W"] },
        { id: 4, name: "octave / wink", use: "Octave wink", merge: { a: 75, b: 25 }, bypass: ["Crying Wah", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 1: almost pure JC.", "Wide Scene 6 Dual Delay + Hall.", "Octave Scene 4 as a wink only."]
    },
    {
      id: "casa", num: "7", title: "Casa", side: "Siempre es Hoy", preset: "CERATI-SEH-CASA",
      guitar: "Pensa-Suhr / HB", pickup: "bridge / both", toneVol: "tone 6 / vol 8",
      historical: "Live: Pensa-Suhr into the JC rig — home/house groove, glassy clean with delay.",
      tonality: "JC Chorus On. Optional DC2W for extra stereo. Light delay.",
      miss: "Rodent always on.",
      knobs: [
        { name: "Chief DC2W (Scene 6)", params: { Mix: "28%", Mode: 3, "SDD-320": "On" } }
      ],
      scenes: [
        { id: 1, name: "groove / jc", use: "Main groove", merge: { a: 80, b: 20 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "wide / dc2w", use: "Wider house feel", merge: { a: 70, b: 30 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Hall"] },
        { id: 5, name: "lead / lift", use: "Lead lift", merge: { a: 55, b: 45 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 1 JC bed.", "Scene 6: DC2W Mix ~28%.", "Keep Brit low."]
    },
    {
      id: "camuflaje", num: "8", title: "Camuflaje", side: "Siempre es Hoy", preset: "CERATI-SEH-CAMU",
      guitar: "Tele / HB", pickup: "bridge", toneVol: "tone 7 / vol 9",
      historical: "Camouflage grit — RAT texture over the rhythmic bed.",
      tonality: "Rodent Scene 3 as the identity. JC still under for stereo.",
      miss: "Clean-only — you removed the camouflage.",
      knobs: [
        { name: "Rodent Drive", params: { Distortion: 5.0, Filter: 5.5, Volume: 5.5 } }
      ],
      scenes: [
        { id: 3, name: "riff / rat", use: "Main grit", merge: { a: 40, b: 60 }, bypass: ["Crying Wah", "Pitch Shifter", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 2, name: "chorus / brit", use: "Bigger choruses", merge: { a: 25, b: 75 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 5, name: "solo / lead", use: "Solo", merge: { a: 30, b: 70 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Chief DC2W", "Hall"] }
      ],
      steps: ["Scene 3: Rodent Distortion ~5.0.", "Chorus Scene 2 Brit without RAT if it piles up.", "Solo Scene 5 Dual Delay."]
    },
    {
      id: "fantasma", num: "9", title: "Fantasma", side: "Siempre es Hoy", preset: "CERATI-SEH-FANT",
      guitar: "Tele / neck", pickup: "neck", toneVol: "tone 5 / vol 7",
      historical: "Ghostly soft track — JC clean, Plate air, almost no grit.",
      tonality: "JC almost alone. Plate Mix ~12%. Optional Hall Scene 6.",
      miss: "Brit or RAT — wrong ghost.",
      knobs: [
        { name: "Plate", params: { Mix: "12%", Decay: "44%", Trails: "On" } }
      ],
      scenes: [
        { id: 1, name: "verse / jc", use: "Verses", merge: { a: 90, b: 10 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "space / hall", use: "Space lifts", merge: { a: 80, b: 20 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W"] },
        { id: 3, name: "soft / jc-delay", use: "Soft delay bed", merge: { a: 88, b: 12 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Hall"], knobs: [{ name: "Digital Delay", params: { Mix: "20%", Time: "dotted 1/8", Sync: "On" } }] }
      ],
      steps: ["Almost pure JC.", "Scene 6 for Hall space.", "Soft delay variant for hanging trails."]
    },
    {
      id: "sudestada", num: "10", title: "Sudestada", side: "Siempre es Hoy", preset: "CERATI-SEH-SUDE",
      guitar: "Tele / HB", pickup: "both", toneVol: "tone 6 / vol 8",
      historical: "Closing weather system — dual delay and hall as the storm front.",
      tonality: "Start JC, finish Scene 6 Dual Delay + Hall. Brit optional for mid lift.",
      miss: "Dry ending — this track wants space.",
      knobs: [
        { name: "Hall (Scene 6)", params: { Mix: "18%", Decay: "2.4 s", Trails: "On" } },
        { name: "Dual Delay (Scene 6)", params: { Mix: "22%", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "body / jc", use: "Song body", merge: { a: 70, b: 30 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 2, name: "lift / brit", use: "Mid lift", merge: { a: 40, b: 60 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W", "Dual Delay", "Hall"] },
        { id: 6, name: "finale / space", use: "Closing storm", merge: { a: 55, b: 45 }, bypass: ["Crying Wah", "Pitch Shifter", "Rodent Drive", "Exotic Z Boost", "OD250", "Chief DC2W"] }
      ],
      steps: ["Scene 1 body.", "Lift Scene 2.", "Finale Scene 6: Dual Delay + Hall Decay 2.4 s."]
    }
  ]
};
