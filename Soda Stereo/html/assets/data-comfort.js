window.ALBUM = {
  id: "comfort",
  artist: "Soda Stereo",
  title: "Comfort y Música Para Volar",
  year: 1996,
  theme: "comfort",
  art: "assets/art/comfort.jpg",
  recorded: "Post Edge, Miami (MTV live) · studio outtakes 1996",
  presetBase: "SODA-UNPLUG-VOX",
  guitars: "Steel-string acoustic (Misil, Té para 3), Gibson ES-335, Parker with piezo, PRS. Semi-hollow covers most electric songs if you only have one guitar.",
  amps: "Session: Vox AC50 head + Marshall 4×12 (Miami rental). QC: UK C30 TopBoost → 412 Brit 60B GB ’71. Studio outtakes: UK C30 Normal → 212 UK C30 GB ’69.",
  effects: "Chorus and delay as arrangement. Eventide H3000 character on Disco Eterno (Dual Delay + Pitch). Optional TONEX Vox only if UK C30 is not chimey enough — FX Loop, no parallel QC amp.",
  voicing: "Cerati’s “(Un)Plugged” — electric but turned down. Vox chime, ELO lounge atmosphere, strings and Rhodes in the midrange. Gain lower than Sueño Stereo studio versions.",
  baseBypass: ["Crying Wah", "Exotic Z Boost", "Rodent Drive"],
  baseChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Chief CS3", type: "comp" },
    { name: "Crying Wah", type: "wah" },
    { name: "Vintage Chorus", type: "mod" },
    { name: "Exotic Z Boost", type: "od" },
    { name: "Rodent Drive", type: "od" },
    { name: "UK C30 TopBoost", type: "amp" },
    { name: "412 Brit 60B GB ’71", type: "cab" },
    { name: "Chief DC2W", type: "mod" },
    { name: "Digital Delay", type: "delay" },
    { name: "Plate", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  acousticChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Chief CS3", type: "comp" },
    { name: "Vintage Chorus", type: "mod" },
    { name: "Graphic-9", type: "eq" },
    { name: "Hall", type: "verb" },
    { name: "Plate", type: "verb" },
    { name: "Out", type: "io" }
  ],
  acousticBypass: [],
  studioChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Chief CS3", type: "comp" },
    { name: "Vintage Chorus", type: "mod" },
    { name: "UK C30 Normal", type: "amp" },
    { name: "212 UK C30 GB ’69", type: "cab" },
    { name: "Chief DC2W", type: "mod" },
    { name: "Dual Delay", type: "delay" },
    { name: "Plate Lush", type: "verb" },
    { name: "Hall", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  studioBypass: ["Exotic Z Boost"],
  h3000Chain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Chief CS3", type: "comp" },
    { name: "Vintage Chorus", type: "mod" },
    { name: "UK C30 TopBoost", type: "amp" },
    { name: "412 Brit 60B GB ’71", type: "cab" },
    { name: "Dual Delay", type: "delay" },
    { name: "Pitch Shifter", type: "pitch" },
    { name: "Pitch Fine", type: "pitch" },
    { name: "Plate", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  baseKnobs: [
    { name: "UK C30 TopBoost", params: { Volume: 4.5, Bass: 4.5, Treble: 6.0, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
    { name: "Vintage Chorus", params: { Rate: "2.5 Hz", "VIB Depth": "45%", Mix: "28%", Sync: "Off" } },
    { name: "Chief DC2W", params: { Mix: "30%", Mode: 3, Type: "SDD-320", Drive: 5, Output: "0 dB" } },
    { name: "Digital Delay", params: { Time: "1/4", Feedback: "18%", Mix: "14%" } },
    { name: "Plate", params: { Mix: "14%", Decay: "40%", "Pre Delay": "20 ms", "High Pass": "120 Hz", "Low Pass": "8 kHz", "LF Damping": "40%", "HF Damping": "45%", "Mod Depth": "20%", Trails: "On" } },
    { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "1 kHz": "+1.5 dB", "4 kHz": "0 dB" } }
  ],
  sharedScenes: [
    { id: 1, name: "Lounge Rhythm", use: "Default electric", note: "Chorus on, Rodent Drive off, Delay Mix 14%" },
    { id: 2, name: "Arpeggio Clean", use: "Softer picking / guitar vol 7", note: "Volume 3.5, Chorus Mix 32%" },
    { id: 3, name: "Chorus Lift", use: "Wider sections", note: "Exotic Z on, Delay Mix 22%, DC2W 35%" },
    { id: 4, name: "Solo / Lead", use: "Lead lines", note: "Boost on, Delay Mix 24%" },
    { id: 5, name: "Drive", use: "Caníbales / Ella usó peaks", note: "Rodent Drive on, Volume 5.0–5.5" },
    { id: 6, name: "Ambient", use: "Outro wash", note: "Delay Mix 28%, Plate 20%" }
  ],
  songs: [
    {
      id: "misil", num: 1, title: "Un Misil en Mi Placard", side: "MTV Live · Miami", preset: "UNPLUG-MISIL",
      guitar: "Steel-string acoustic", pickup: "n/a", toneVol: "n/a",
      historical: "Opens the MTV set (Chrome Waves intro on full broadcast). Cerati on bright acoustic with chorus — the unplugged face before electric layers.",
      tonality: "Shimmering acoustic, slow strums, chorus halo. Low end stays out of the way of Zeta’s bass.",
      chain: null,
      knobs: [
        { name: "Chief CS3", params: { Sustain: 3.0, Attack: 3.5, Tone: 5.0, Level: 5.0 } },
        { name: "Vintage Chorus", params: { Rate: "2.5 Hz", "VIB Depth": "40%", Mix: "22%", Sync: "Off" } },
        { name: "Hall", params: { Mix: "20%", Decay: "2.0 s", "Pre Delay": "25 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
        { name: "Plate", params: { Mix: "12%", Decay: "38%", "Pre Delay": "20 ms", "High Pass": "120 Hz", "Low Pass": "8 kHz", "LF Damping": "40%", "HF Damping": "45%", "Mod Depth": "18%", Trails: "On" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "3 kHz": "+1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Main vocal / strummed chords", note: "Chorus 22%", bypass: [], knobs: [{ name: "Vintage Chorus", params: { Mix: "22%" } }] },
        { id: 2, name: "Arpeggio Clean", use: "Picking / intro", note: "Lighter chorus", bypass: [], knobs: [{ name: "Vintage Chorus", params: { Mix: "20%" } }] },
        { id: 3, name: "Chorus Lift", use: "Final lifts", note: "Hall Mix 24%", bypass: [], knobs: [{ name: "Hall", params: { Mix: "24%" } }, { name: "Vintage Chorus", params: { Mix: "24%" } }] }
      ],
      steps: [
        "Build SODA-UNPLUG-ACOUSTIC — no amp block.",
        "Vintage Chorus Mix 22%, Rate 2.5 Hz.",
        "Chief CS3 catches peaks so the acoustic doesn’t spike the TV limiter.",
        "Graphic-9: HPF 90 Hz, +1 dB at 3 kHz if your acoustic is dark.",
        "Electric with piezo: same template, tone 8."
      ]
    },
    {
      id: "furia", num: 2, title: "En la Ciudad de la Furia", side: "MTV Live · Miami", preset: "UNPLUG-FURIA",
      guitar: "ES-335 or semi-hollow", pickup: "neck or neck+middle", toneVol: "tone 7 / vol 10",
      historical: "Down-tempo with Andrea Echeverri. Opening + between-verse gaps: long dual-delay trails (short+long, high feedback) that keep ringing when guitar drops out. Intro figure: stereo ping-pong + parked wah. Slapback enters on the body for phrase endings.",
      tonality: "Trail wash at 0:00 and ~1:30; intro figure = bouncing ping-pong melody; verses = arpeggio + lighter slapback. Mystical slow pulse.",
      miss: "Missing the hanging trail between verses? Hit Scene 7 (Dual Delay high FB) — not Scene 2. Intro figure wrong? Scene 1: Ping Pong 28%/38%, Slapback off, Wah parked ~28%.",
      eq: "Graphic-9: HPF 100 Hz, +2 dB at 1.2 kHz, −1 dB at 4 kHz if vocal is forward.",
      chain: [
        { name: "In", type: "io" },
        { name: "Simple Gate", type: "util" },
        { name: "Chief CS3", type: "comp" },
        { name: "Crying Wah", type: "wah" },
        { name: "Vintage Chorus", type: "mod" },
        { name: "Exotic Z Boost", type: "od" },
        { name: "UK C30 TopBoost", type: "amp" },
        { name: "412 Brit 60B GB ’71", type: "cab" },
        { name: "Chief DC2W", type: "mod" },
        { name: "Slapback Delay", type: "delay" },
        { name: "Simple Ping Pong Delay", type: "delay" },
        { name: "Plate", type: "verb" },
        { name: "Graphic-9", type: "eq" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "Chief CS3", params: { Sustain: 2.5, Attack: 4.0, Tone: 5.0, Level: 4.5 } },
        { name: "UK C30 TopBoost", params: { Volume: 4.0, Bass: 4.5, Treble: 6.0, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Exotic Z Boost", params: { Gain: 2.5, Bass: 5.0, Treble: 5.0, Volume: 7.0 } },
        { name: "Vintage Chorus", params: { Rate: "2.5 Hz", "VIB Depth": "45%", Mix: "30%", Sync: "Off" } },
        { name: "Slapback Delay", params: { Time: "150 ms", Mix: "18%", Feedback: "12%" } },
        { name: "Ping Pong", params: { Time: "dotted 1/8", Mix: "20%", Feedback: "28%" } },
        { name: "Chief DC2W", params: { Mix: "32%", Mode: 3, Type: "SDD-320", Drive: 5, Output: "0 dB" } },
        { name: "Plate", params: { Mix: "14%", Decay: "42%", "Pre Delay": "20 ms", "High Pass": "120 Hz", "Low Pass": "8 kHz", "LF Damping": "40%", "HF Damping": "45%", "Mod Depth": "22%", Trails: "On" } },
        { name: "Graphic-9", params: { HPF: "100 Hz", "250 Hz": "-2 dB", "1.2 kHz": "+2 dB", "4 kHz": "-1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Intro Figure", use: "Opening arpeggio hook", note: "Ping-pong + parked wah — Slapback off", bypass: ["Slapback Delay", "Exotic Z Boost"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 3.8 } }, { name: "Crying Wah", params: { Position: "28%" } }, { name: "Ping Pong", params: { Time: "dotted 1/8", Mix: "28%", Feedback: "38%" } }, { name: "Chief DC2W", params: { Mix: "40%" } }, { name: "Plate", params: { Mix: "16%" } }, { name: "Vintage Chorus", params: { Mix: "32%" } }] },
        { id: 2, name: "Lounge Rhythm", use: "Verses / main body", note: "Slapback on, Ping Pong down", bypass: ["Crying Wah", "Exotic Z Boost"], knobs: [{ name: "Ping Pong", params: { Mix: "10%", Feedback: "22%" } }, { name: "Slapback Delay", params: { Mix: "18%" } }] },
        { id: 3, name: "Arpeggio Clean", use: "Softer picking", note: "Guitar vol 7", bypass: ["Crying Wah", "Exotic Z Boost"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 3.5 } }, { name: "Ping Pong", params: { Mix: "8%", Feedback: "18%" } }, { name: "Slapback Delay", params: { Mix: "14%" } }] },
        { id: 4, name: "Chorus Lift", use: "Andrea duet", note: "DC2W 35%", bypass: ["Crying Wah", "Exotic Z Boost"], knobs: [{ name: "Chief DC2W", params: { Mix: "35%" } }, { name: "Ping Pong", params: { Mix: "14%" } }] },
        { id: 5, name: "Solo / Lead", use: "Final peaks", note: "Exotic Z on — lift, not Rat grit", bypass: ["Crying Wah"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 4.5 } }, { name: "Exotic Z Boost", params: { Gain: 2.5, Bass: 5.0, Treble: 5.0, Volume: 7.0 } }, { name: "Slapback Delay", params: { Mix: "22%" } }, { name: "Ping Pong", params: { Mix: "24%", Feedback: "30%" } }] },
        { id: 6, name: "Wah Color", use: "Filter sweeps", note: "Wah toe ~40%", bypass: ["Exotic Z Boost"], knobs: [{ name: "Crying Wah", params: { Position: "40%" } }] },
        { id: 7, name: "Delay Trail", use: "Opening wash (~0:00) + between-verse gaps (~1:30)", note: "Tight frequent dual-delay trails — 1/8 + dotted 1/8; Slapback off", bypass: ["Slapback Delay", "Exotic Z Boost", "Crying Wah"], extra: [
          { name: "Dual Delay", type: "delay" }
        ], knobs: [
          { name: "UK C30 TopBoost", params: { Volume: 3.8 } },
          { name: "Dual Delay", params: { "Time L": "1/8", "Time R": "dotted 1/8", "Feedback L/R": "52% linked", "Cross Feedback": "40%", Mix: "30%", "Mod Depth": "12%" } },
          { name: "Ping Pong", params: { Time: "1/8", Mix: "24%", Feedback: "42%" } },
          { name: "Chief DC2W", params: { Mix: "38%" } },
          { name: "Plate", params: { Mix: "16%" } }
        ] }
      ],
      steps: [
        "Scene 1 Intro: Ping Pong Mix 28%, Feedback 38%, Slapback bypassed, Wah parked 28%.",
        "Scene 7 Delay Trail: for the hanging wash at open (~0:00–0:10) and between verses (~1:30) — Dual Delay 1/8 + dotted 1/8, Feedback ~52%, Cross Feedback ~40%. Not Scene 2.",
        "Scene 2+: Slapback 150 ms Mix 18% for phrase endings; Ping Pong Mix 8–10%.",
        "UK C30 Volume 3.8 intro / 4.0 body — stay clean when arpeggiating.",
        "Scene 5 Solo: Exotic Z Boost on (Gain 2.5, Volume 7) + Volume 4.5 — edge for the lead, not Rodent Drive.",
        "Neck pickup, tone 7. Chief CS3 catches arpeggio peaks.",
        "Scene 6: active wah sweeps — not the intro filter (that is parked wah on Scene 1)."
      ]
    },
    {
      id: "canibales", num: 3, title: "Entre Caníbales", side: "MTV Live · Miami", preset: "UNPLUG-CANIBALES",
      guitar: "PRS or humbucker solid", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "Heavier electric moment — rock Soda in a lounge room. Rat-style dirt.",
      tonality: "Mid-forward crunch, still not modern metal. Chorus lower when driven.",
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 5.0, Bass: 4.0, Treble: 6.0, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Rodent Drive", params: { Drive: 3.5, Filter: 5.0, Level: 7.0 } },
        { name: "Vintage Chorus", params: { Mix: "18%" } },
        { name: "Digital Delay", params: { Mix: "16%" } },
        { name: "Graphic-9", params: { HPF: "100 Hz", "250 Hz": "-2 dB", "1 kHz": "+2 dB", "4 kHz": "-1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Verses", bypass: ["Crying Wah", "Rodent Drive", "Exotic Z Boost"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 5.0 } }, { name: "Vintage Chorus", params: { Mix: "22%" } }] },
        { id: 5, name: "Drive", use: "Choruses / aggressive", note: "Rodent Drive on, Volume 5.5", bypass: ["Crying Wah", "Exotic Z Boost"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 5.5 } }, { name: "Rodent Drive", params: { Drive: 3.5, Filter: 5.0, Level: 7.0 } }, { name: "Vintage Chorus", params: { Mix: "18%" } }] },
        { id: 4, name: "Solo / Lead", use: "Lines over strings", bypass: ["Crying Wah"], knobs: [{ name: "Exotic Z Boost", params: { Gain: 2.5, Bass: 5.0, Treble: 5.0, Volume: 7.0 } }, { name: "Digital Delay", params: { Mix: "20%" } }] }
      ],
      steps: [
        "Volume 5.0 Scene 1, 5.5 Scene 5.",
        "Scene 5: Rodent Drive 3.5. Chorus Mix 18%.",
        "Bridge pickup, tone 8.",
        "If low E farts: Bass 4.0, HPF 100 Hz."
      ]
    },
    {
      id: "pasos", num: 4, title: "Pasos", side: "MTV Live · Miami", preset: "UNPLUG-PASOS",
      guitar: "ES-335", pickup: "bridge", toneVol: "tone 7 / vol 10",
      historical: "Short rhythmic pulse. Charly’s hybrid kit and Zeta’s bass carry energy.",
      tonality: "Dry-ish electric, little delay, moderate chorus.",
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 4.5, Bass: 4.5, Treble: 6, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Vintage Chorus", params: { Mix: "20%" } },
        { name: "Digital Delay", params: { Mix: "8%" } },
        { name: "Plate", params: { Mix: "10%", Decay: "35%", "Pre Delay": "15 ms", "High Pass": "120 Hz", "Low Pass": "8 kHz", "LF Damping": "45%", "HF Damping": "50%", "Mod Depth": "12%", Trails: "On" } },
        { name: "Graphic-9", params: { HPF: "100 Hz", "250 Hz": "-2 dB", "1 kHz": "+1 dB", "4 kHz": "0 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Entire song", note: "Minimal delay", bypass: ["Crying Wah", "Rodent Drive", "Exotic Z Boost", "Chief DC2W"], knobs: [{ name: "Digital Delay", params: { Mix: "8%" } }, { name: "Plate", params: { Mix: "10%" } }] }
      ],
      steps: [
        "Volume 4.5, bridge pickup, tone 7.",
        "Chorus 20%. Delay Mix 8% or bypass.",
        "Plate 10% — smallest reverb on the set.",
        "DC2W bypass on mono PA."
      ]
    },
    {
      id: "zoom", num: 5, title: "Zoom", side: "MTV Live · 2007 ed.", preset: "UNPLUG-ZOOM",
      guitar: "ES-335 / PRS", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "Full MTV set only. Sueño Stereo synth/guitar interplay — clean chorused electric.",
      tonality: "Glassy, stereo, medium delay. Optional JC-120 on Scene 3.",
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 4, Treble: 6.5, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Digital Delay", params: { Time: "1/4", Mix: "18%" } },
        { name: "Chief DC2W", params: { Mix: "30%" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "1 kHz": "+1.5 dB", "4 kHz": "0 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Main groove", bypass: ["Crying Wah", "Rodent Drive", "Exotic Z Boost"], knobs: [{ name: "Chief DC2W", params: { Mix: "30%" } }] },
        { id: 3, name: "Chorus Lift", use: "Wider sections", note: "DC2W 35%; optional Rols Jazz CH120", bypass: ["Crying Wah", "Rodent Drive"], knobs: [{ name: "Chief DC2W", params: { Mix: "35%" } }, { name: "Digital Delay", params: { Mix: "22%" } }] }
      ],
      steps: [
        "Default Template A. Volume 4.0.",
        "Digital Delay 1/4 note Mix 18%.",
        "Scene 3: optional swap to Rols Jazz CH120 → 212 Rols Jazz ’87 for JC stereo clean.",
        "DC2W Mix 35% Scene 3."
      ],
      notes: ["Not on 1996 CD — use 2007 complete edition for A/B."]
    },
    {
      id: "temblor", num: 6, title: "Cuando Pase el Temblor", side: "MTV Live · 2007 ed.", preset: "UNPLUG-TEMBLOR",
      guitar: "ES-335", pickup: "both", toneVol: "tone 7 / vol 10",
      historical: "Tremolo-feel rhythm — clean electric with subtle modulation.",
      tonality: "Chordal, steady, not heavy.",
      chain: [
        { name: "In", type: "io" },
        { name: "Simple Gate", type: "util" },
        { name: "MX Phase 95", type: "mod" },
        { name: "Vintage Chorus", type: "mod" },
        { name: "UK C30 TopBoost", type: "amp" },
        { name: "412 Brit 60B GB ’71", type: "cab" },
        { name: "Chief DC2W", type: "mod" },
        { name: "Digital Delay", type: "delay" },
        { name: "Plate", type: "verb" },
        { name: "Graphic-9", type: "eq" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 4.5, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "MX Phase 95", params: { Speed: 1.8, "45/90": "90", Script: "On" } },
        { name: "Digital Delay", params: { Mix: "14%" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "1 kHz": "+1.5 dB", "4 kHz": "0 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Verses", bypass: ["MX Phase 95", "Crying Wah"], knobs: [{ name: "Vintage Chorus", params: { Mix: "24%" } }] },
        { id: 4, name: "Phase Texture", use: "Modulated sections", note: "Phase on", bypass: ["Crying Wah"], knobs: [{ name: "MX Phase 95", params: { Speed: 1.8, "45/90": "90", Script: "On" } }, { name: "Vintage Chorus", params: { Mix: "20%" } }] }
      ],
      steps: [
        "Insert MX Phase 95 before amp — off Scene 1, on Scene 4.",
        "Volume 4.5, both pickups on 335.",
        "Delay Mix 14%."
      ]
    },
    {
      id: "tepara3", num: 7, title: "Té para Tres", side: "MTV Live · Miami", preset: "UNPLUG-TEPARA3",
      guitar: "Acoustic + electric for riff", pickup: "n/a / neck", toneVol: "vol 10",
      historical: "Acoustic-forward medley with Cementerio Club (Spinetta) riff quote.",
      tonality: "Warm acoustic, minimal effects, tribute mood.",
      chain: [
        { name: "In", type: "io" },
        { name: "Simple Gate", type: "util" },
        { name: "Chief CS3", type: "comp" },
        { name: "Vintage Chorus", type: "mod" },
        { name: "Graphic-9", type: "eq" },
        { name: "Hall", type: "verb" },
        { name: "Plate", type: "verb" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "Vintage Chorus", params: { Mix: "15%" } },
        { name: "Hall", params: { Mix: "18%", Decay: "1.8 s", "Pre Delay": "25 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "3 kHz": "+1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Té para tres body", note: "Acoustic template", bypass: [], knobs: [{ name: "Vintage Chorus", params: { Mix: "15%" } }, { name: "Hall", params: { Mix: "18%" } }] },
        { id: 2, name: "Spinetta Riff", use: "Cementerio Club quote", note: "Switch to electric: UK C30 Volume 4, Slapback 120 ms 12%", bypass: [], extra: [
          { name: "UK C30 TopBoost", type: "amp" },
          { name: "212 UK C30 GB ’69", type: "cab" },
          { name: "Slapback Delay", type: "delay" }
        ], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 4 } }, { name: "Slapback Delay", params: { Time: "120 ms", Mix: "12%" } }] }
      ],
      steps: [
        "Template B main song. Chorus Mix 15%.",
        "Scene 2: electric neck pickup, UK C30 Volume 4.0, Slapback 120 ms Mix 12%.",
        "Hall Mix 18% throughout."
      ]
    },
    {
      id: "angel", num: 8, title: "Ángel Eléctrico", side: "MTV Live · 1996 CD", preset: "UNPLUG-ANGEL",
      guitar: "ES-335", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "Co-written with Charly and Zeta — sparkling electric arpeggios.",
      tonality: "Bright Vox chime, chorus, medium delay. Not driven.",
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 4.5, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Vintage Chorus", params: { Mix: "28%" } },
        { name: "Digital Delay", params: { Time: "1/4", Mix: "20%" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "1 kHz": "+1.5 dB", "4 kHz": "0 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Verses", bypass: ["Crying Wah", "Rodent Drive", "Exotic Z Boost"], knobs: [{ name: "Vintage Chorus", params: { Mix: "26%" } }] },
        { id: 3, name: "Chorus Lift", use: "Hook", bypass: ["Crying Wah", "Rodent Drive"], knobs: [{ name: "Vintage Chorus", params: { Mix: "32%" } }, { name: "Chief DC2W", params: { Mix: "35%" } }] },
        { id: 4, name: "Solo / Lead", use: "Fills", note: "Exotic Z on", bypass: ["Crying Wah", "Rodent Drive"], knobs: [{ name: "Exotic Z Boost", params: { Gain: 2.5, Bass: 5.0, Treble: 5.0, Volume: 7.0 } }, { name: "Digital Delay", params: { Mix: "24%" } }] }
      ],
      steps: [
        "Volume 4.5, bridge tone 8.",
        "Chorus 28%, Delay 1/4 Mix 20%.",
        "Exotic Z Boost Scene 4 only."
      ]
    },
    {
      id: "terapia", num: 9, title: "Terapia de Amor Intensiva", side: "MTV Live · 2007 ed.", preset: "UNPLUG-TERAPIA",
      guitar: "ES-335 / PRS / Parker piezo on solo", pickup: "bridge; neck or piezo solo", toneVol: "tone 7 / vol 10",
      historical: "Sueño Stereo deep cut — more texture and swirl than Pasos. Solo and outro use reverse delay swells (H3000/rack on the album; unplugged matches the backwards lead character).",
      tonality: "Space-rock lounge. Dual delay for the body; Reverse Delay on solo/outro.",
      miss: "If the solo sounds like normal echo, bypass Dual Delay and engage Reverse Delay — the backwards swell is the hook, not more gain.",
      chain: [
        { name: "In", type: "io" },
        { name: "Simple Gate", type: "util" },
        { name: "Chief CS3", type: "comp" },
        { name: "Vintage Chorus", type: "mod" },
        { name: "Rodent Drive", type: "od" },
        { name: "UK C30 TopBoost", type: "amp" },
        { name: "412 Brit 60B GB ’71", type: "cab" },
        { name: "Chief DC2W", type: "mod" },
        { name: "Dual Delay", type: "delay" },
        { name: "Reverse Delay", type: "delay" },
        { name: "Plate", type: "verb" },
        { name: "Graphic-9", type: "eq" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 4.5, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "1/8", Mix: "20%" } },
        { name: "Reverse Delay", params: { Time: "420 ms", Feedback: "25%", Mix: "30%" } },
        { name: "Plate", params: { Mix: "16%", Decay: "42%", "Pre Delay": "20 ms", "High Pass": "120 Hz", "Low Pass": "8 kHz", "LF Damping": "40%", "HF Damping": "45%", "Mod Depth": "20%", Trails: "On" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "1 kHz": "+1.5 dB", "4 kHz": "0 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Verses", bypass: ["Rodent Drive", "Crying Wah", "Reverse Delay"], knobs: [{ name: "Dual Delay", params: { Mix: "18%" } }] },
        { id: 3, name: "Chorus Lift", use: "Choruses", bypass: ["Rodent Drive", "Crying Wah", "Reverse Delay"], knobs: [{ name: "Dual Delay", params: { Mix: "22%" } }, { name: "Chief DC2W", params: { Mix: "35%" } }] },
        { id: 4, name: "Solo / Outro", use: "Lead + ending swells", note: "Reverse Delay on — signature backwards swell", bypass: ["Rodent Drive", "Crying Wah", "Dual Delay"], knobs: [{ name: "Reverse Delay", params: { Time: "420 ms", Feedback: "28%", Mix: "32%" } }, { name: "Chief DC2W", params: { Mix: "38%" } }, { name: "Plate", params: { Mix: "18%" } }] },
        { id: 5, name: "Drive", use: "Heavier mid-section", note: "Rodent Drive if needed", bypass: ["Crying Wah", "Reverse Delay"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 5 } }, { name: "Rodent Drive", params: { Drive: 3.0, Filter: 5.0, Level: 7.0 } }, { name: "Dual Delay", params: { Mix: "20%" } }] }
      ],
      steps: [
        "Dual Delay 1/4 + 1/8 Mix 20% for Scenes 1 & 3 — bypass on Scene 4.",
        "Add Reverse Delay after Dual Delay. Scene 4 only: ~420 ms, Mix 32%, Feedback ~28%.",
        "Volume 4.5–5.0. Rodent Drive off unless Scene 5.",
        "Plate Mix 16%; bump to 18% on Scene 4 outro wash.",
        "Optional piezo or neck pickup for solo lines."
      ]
    },
    {
      id: "disco", num: 10, title: "Disco Eterno", side: "MTV Live · 2007 ed.", preset: "UNPLUG-DISCO",
      guitar: "ES-335 / Parker", pickup: "neck", toneVol: "tone 8 / vol 10",
      historical: "Eventide H3000 song — band-tap delays, pitch-shifted repeats, expression on feedback.",
      tonality: "Multi-tap delay wash with pitch movement — not about amp gain.",
      miss: "If it sounds like a normal delay, add pitch movement and staggered taps — not more Gain.",
      chain: [
        { name: "In", type: "io" },
        { name: "Simple Gate", type: "util" },
        { name: "Chief CS3", type: "comp" },
        { name: "Vintage Chorus", type: "mod" },
        { name: "UK C30 TopBoost", type: "amp" },
        { name: "412 Brit 60B GB ’71", type: "cab" },
        { name: "Dual Delay", type: "delay" },
        { name: "Pitch Shifter", type: "pitch" },
        { name: "Pitch Fine", type: "pitch" },
        { name: "Volume", type: "util" },
        { name: "Plate", type: "verb" },
        { name: "Graphic-9", type: "eq" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 3.5, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Dual Delay", params: { "Time L": "380 ms", "Time R": "520 ms", "Feedback L": "35%", "Feedback R": "45%", Mix: "22%" } },
        { name: "Pitch Shifter", params: { Pitch: "+7", Fine: 0, Mix: "10%" } },
        { name: "Pitch Fine", params: { Pitch: 0, Fine: "+8¢", Mix: "8%" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "1 kHz": "+1 dB", "8 kHz": "+1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Song body", note: "Amp clean", bypass: [], knobs: [{ name: "Dual Delay", params: { Mix: "22%" } }] },
        { id: 5, name: "H3000 Loop", use: "Loop / swell", note: "Delay Mix 30%, expr → Feedback", bypass: [], knobs: [{ name: "Dual Delay", params: { Mix: "30%", "Feedback L": "45%", "Feedback R": "55%" } }, { name: "Pitch Shifter", params: { Mix: "14%" } }] }
      ],
      steps: [
        "Build SODA-UNPLUG-H3000 from Foundations.",
        "UK C30 Volume 3.5–4.0 — stays clean.",
        "Dual Delay stagger 380/520 ms, Scene 5 Mix 30%.",
        "Pitch Shifter +7 Mix 10%. Pitch Fine +8¢ Mix 8%.",
        "Map Volume expression to Dual Delay Feedback."
      ]
    },
    {
      id: "ella", num: 11, title: "Ella Usó Mi Cabeza Como un Revólver", side: "MTV Live · 1996 CD", preset: "UNPLUG-ELLA",
      guitar: "PRS / humbucker", pickup: "bridge", toneVol: "tone 7 / vol 10",
      historical: "1996 CD closer. Psychedelic, heavier — loudest moments on the album.",
      tonality: "Crunchy Vox, delay for space, chorus lower when driven.",
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 5.5, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Rodent Drive", params: { Drive: 4.0 } },
        { name: "Vintage Chorus", params: { Mix: "15%" } },
        { name: "Digital Delay", params: { Mix: "22%" } },
        { name: "Graphic-9", params: { HPF: "100 Hz", "250 Hz": "-2 dB", "1 kHz": "+2 dB", "4 kHz": "-1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Verses", bypass: ["Rodent Drive", "Crying Wah"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 4.5 } }, { name: "Vintage Chorus", params: { Mix: "22%" } }] },
        { id: 5, name: "Drive", use: "Main riff / peaks", note: "Rodent Drive on", bypass: ["Crying Wah"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 5.5 } }, { name: "Rodent Drive", params: { Drive: 4.0, Filter: 5.0, Level: 7.0 } }, { name: "Vintage Chorus", params: { Mix: "15%" } }] },
        { id: 6, name: "Ambient", use: "Outro wash", note: "Delay 28%, Plate 20%", bypass: ["Rodent Drive", "Crying Wah"], knobs: [{ name: "Digital Delay", params: { Mix: "28%" } }, { name: "Plate", params: { Mix: "20%" } }] }
      ],
      steps: [
        "Scene 5: Rodent Drive 4, Volume 5.5, Chorus 15%.",
        "Bridge pickup, tone 7.",
        "Scene 6: Delay Mix 28%, Plate 20%.",
        "Do not scoop mids."
      ]
    },
    {
      id: "roma", num: 12, title: "Paseando por Roma", side: "MTV Live · 2007 ed.", preset: "UNPLUG-ROMA",
      guitar: "ES-335", pickup: "bridge", toneVol: "tone 7 / vol 10",
      historical: "Lighter pop/rock pulse from full MTV set.",
      tonality: "Clean, chorused, moderate delay — similar to Pasos / Zoom.",
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 4.5, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Vintage Chorus", params: { Mix: "26%" } },
        { name: "Digital Delay", params: { Mix: "16%" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "1 kHz": "+1.5 dB", "4 kHz": "0 dB" } }
      ],
      scenes: [
        { id: 1, name: "Lounge Rhythm", use: "Main", bypass: ["Rodent Drive", "Crying Wah", "Exotic Z Boost"], knobs: [{ name: "Vintage Chorus", params: { Mix: "26%" } }] },
        { id: 3, name: "Chorus Lift", use: "Hooks", bypass: ["Rodent Drive", "Crying Wah"], knobs: [{ name: "Vintage Chorus", params: { Mix: "30%" } }, { name: "Digital Delay", params: { Mix: "20%" } }] }
      ],
      steps: [
        "Template A defaults. Volume 4.5.",
        "Delay Mix 16%, Chorus 26%."
      ]
    },
    {
      id: "genesis", num: 13, title: "Génesis (Vox Dei)", side: "MTV Live · 2007 ed.", preset: "UNPLUG-GENESIS",
      guitar: "ES-335", pickup: "bridge / both", toneVol: "tone 8 / vol 10",
      historical: "Vox Dei cover — prog arpeggios. Aired on MTV, on 2007 edition only.",
      tonality: "British chime, clean to medium gain arpeggios.",
      chain: [
        { name: "In", type: "io" },
        { name: "Simple Gate", type: "util" },
        { name: "MX Phase 95", type: "mod" },
        { name: "Vintage Chorus", type: "mod" },
        { name: "Rodent Drive", type: "od" },
        { name: "UK C30 TopBoost", type: "amp" },
        { name: "212 UK C30 GB ’69", type: "cab" },
        { name: "Chief DC2W", type: "mod" },
        { name: "Digital Delay", type: "delay" },
        { name: "Plate", type: "verb" },
        { name: "Graphic-9", type: "eq" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "UK C30 TopBoost", params: { Volume: 4, "Tone Cut": 3, Boost: "Hot", Output: "0 dB" } },
        { name: "Digital Delay", params: { Mix: "18%" } },
        { name: "MX Phase 95", params: { Speed: 1.8, "45/90": "90", Script: "On" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-2 dB", "1.5 kHz": "+1.5 dB", "4 kHz": "0 dB" } }
      ],
      scenes: [
        { id: 2, name: "Arpeggio Clean", use: "Intro / verses", note: "Volume 4.0, 2×12 cab", bypass: ["Rodent Drive", "MX Phase 95"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 4 } }] },
        { id: 4, name: "Solo / Lead", use: "Lead lines", note: "Phase optional", bypass: ["Rodent Drive"], knobs: [{ name: "MX Phase 95", params: { Speed: 1.8, "45/90": "90", Script: "On" } }, { name: "Digital Delay", params: { Mix: "20%" } }] },
        { id: 5, name: "Drive", use: "Heavier bridge", note: "Volume 5.0", bypass: ["MX Phase 95"], knobs: [{ name: "UK C30 TopBoost", params: { Volume: 5 } }, { name: "Rodent Drive", params: { Drive: 3.0, Filter: 5.0, Level: 7.0 } }] }
      ],
      steps: [
        "Use 212 UK C30 GB ’69 instead of 4×12 for arpeggios.",
        "Volume 4.0 Scene 2, 5.0 Scene 5.",
        "MX Phase 95 Speed 1.8, 45/90 90, Script On — Scene 4 optional.",
        "Delay Mix 18%."
      ]
    },
    {
      id: "sonoman", num: 14, title: "Sonoman", side: "Studio outtake · CD interlude", preset: "STUDIO-SONOMAN",
      guitar: "Pad / optional", pickup: "n/a", toneVol: "n/a",
      historical: "Instrumental interlude on 1996 CD. Sound-design — synth/sample led.",
      tonality: "Textural pad. Guitar optional at barely-there chime.",
      chain: [
        { name: "In", type: "io" },
        { name: "Simple Gate", type: "util" },
        { name: "Vintage Chorus", type: "mod" },
        { name: "UK C30 Normal", type: "amp", off: true },
        { name: "212 UK C30 GB ’69", type: "cab", off: true },
        { name: "Dual Delay", type: "delay" },
        { name: "Pitch Fine", type: "pitch" },
        { name: "Plate Lush", type: "verb" },
        { name: "Hall", type: "verb" },
        { name: "Graphic-9", type: "eq" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "Dual Delay", params: { "Time L": "600 ms", "Time R": "900 ms", "Feedback L/R": "40% linked", Mix: "25%" } },
        { name: "Plate Lush", params: { Mix: "22%", Decay: "55%", "Pre Delay": "25 ms", "High Pass": "100 Hz", "Low Pass": "10 kHz", "LF Damping": "35%", "HF Damping": "40%", "Mod Depth": "28%", Trails: "On" } },
        { name: "Hall", params: { Mix: "28%", Decay: "2.8 s", "Pre Delay": "30 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
        { name: "Pitch Fine", params: { Pitch: 0, Fine: "+8¢", Mix: "12%" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-1 dB", "1.5 kHz": "+2 dB", "8 kHz": "+1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Dream Bed", use: "Entire piece", note: "Amp bypassed", bypass: ["UK C30 Normal", "212 UK C30 GB ’69"], knobs: [{ name: "Dual Delay", params: { Mix: "25%" } }, { name: "Hall", params: { Mix: "28%" } }] }
      ],
      steps: [
        "Template D but bypass amp unless you need barely-there chime (Volume 2.5).",
        "Long Dual Delay 600/900 ms Mix 25%.",
        "Plate Lush 22%, Hall 28%.",
        "Optional Pitch Fine +8¢ Mix 12% shimmer."
      ],
      notes: ["Skip if you only need Cerati rhythm/lead parts — pad/synth territory on record."]
    },
    {
      id: "planeador", num: 15, title: "Planeador", side: "Studio outtake", preset: "STUDIO-PLANEADOR",
      guitar: "Parker piezo / 335", pickup: "piezo or neck", toneVol: "tone 8 / vol 10",
      historical: "Sueño Stereo reject — ambient clean, widely cited as a highlight.",
      tonality: "Floating arpeggios, long reverb, slow chorus.",
      chain: [
        { name: "In", type: "io" },
        { name: "Simple Gate", type: "util" },
        { name: "Chief CS3", type: "comp" },
        { name: "Vintage Chorus", type: "mod" },
        { name: "UK C30 Normal", type: "amp" },
        { name: "212 UK C30 GB ’69", type: "cab" },
        { name: "Chief DC2W", type: "mod" },
        { name: "Dual Delay", type: "delay" },
        { name: "Plate Lush", type: "verb" },
        { name: "Hall", type: "verb" },
        { name: "Graphic-9", type: "eq" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "UK C30 Normal", params: { Volume: 3, Bright: "On", "Tone Cut": 3, Output: "0 dB" } },
        { name: "Vintage Chorus", params: { Mix: "38%" } },
        { name: "Dual Delay", params: { Mix: "22%" } },
        { name: "Plate Lush", params: { Mix: "20%", Decay: "50%", "Pre Delay": "25 ms", "High Pass": "100 Hz", "Low Pass": "10 kHz", "LF Damping": "35%", "HF Damping": "40%", "Mod Depth": "25%", Trails: "On" } },
        { name: "Hall", params: { Mix: "22%", Decay: "2.5 s", "Pre Delay": "30 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-1 dB", "1.5 kHz": "+2 dB", "8 kHz": "+1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Dream Bed", use: "Main body", bypass: [], knobs: [{ name: "UK C30 Normal", params: { Volume: 3 } }, { name: "Vintage Chorus", params: { Mix: "38%" } }] },
        { id: 2, name: "Swell", use: "Volume / expression swells", note: "Expr → Hall or Delay FB", bypass: [], knobs: [{ name: "Hall", params: { Mix: "28%" } }, { name: "Dual Delay", params: { Mix: "26%", "Feedback L/R": "50% linked" } }] },
        { id: 3, name: "Lead", use: "Melodic peaks", note: "Volume 4.0", bypass: [], knobs: [{ name: "UK C30 Normal", params: { Volume: 4 } }, { name: "Dual Delay", params: { Mix: "24%" } }] }
      ],
      steps: [
        "Duplicate SODA-STUDIO-DREAM. Piezo or neck, tone 8.",
        "UK C30 Normal Volume 3.0 — must stay clean.",
        "Chorus 38%. Dual Delay 22%.",
        "Scene 2: expression on Hall Mix or Delay Feedback.",
        "Graphic-9: HPF 90 Hz, +2 dB at 1.5 kHz."
      ]
    },
    {
      id: "coral", num: 16, title: "Coral", side: "Studio outtake", preset: "STUDIO-CORAL",
      guitar: "Parker / 335", pickup: "neck", toneVol: "tone 8 / vol 10",
      historical: "Ambient instrumental — guitar as colour, sparse arrangement.",
      tonality: "More sparse than Planeador — longer silence, more reverb.",
      knobs: [
        { name: "UK C30 Normal", params: { Volume: 2.8, Bright: "On", "Tone Cut": 3, Output: "0 dB" } },
        { name: "Vintage Chorus", params: { Rate: "1.8 Hz", "VIB Depth": "45%", Mix: "38%", Sync: "Off" } },
        { name: "Dual Delay", params: { Mix: "18%" } },
        { name: "Hall", params: { Mix: "28%", Decay: "3.0 s", "Pre Delay": "35 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
        { name: "Chief DC2W", params: { Mix: "38%", Mode: 3, Type: "SDD-320", Drive: 5, Output: "0 dB" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-1 dB", "1.5 kHz": "+2 dB", "8 kHz": "+1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Dream Bed", use: "Default", bypass: [], knobs: [{ name: "UK C30 Normal", params: { Volume: 2.8 } }, { name: "Hall", params: { Mix: "28%" } }] },
        { id: 2, name: "Swell", use: "Long tails", note: "Hall up", bypass: [], knobs: [{ name: "Hall", params: { Mix: "34%" } }, { name: "Plate Lush", params: { Mix: "22%" } }] }
      ],
      steps: [
        "Copy STUDIO-PLANEADOR. Dual Delay Mix 18%.",
        "Hall 28%, Plate Lush 18%.",
        "Chorus Rate 1.8 Hz. Volume 2.8.",
        "DC2W Mix 38% for wide stereo."
      ]
    },
    {
      id: "superstar", num: 17, title: "Superstar", side: "Studio outtake", preset: "STUDIO-SUPERSTAR",
      guitar: "ES-335", pickup: "bridge+middle / both", toneVol: "tone 7 / vol 10",
      historical: "Rhythmic studio outtake — more structure than Coral/Sonoman.",
      tonality: "Mid-tempo clean electric, chorus and dual delay.",
      knobs: [
        { name: "UK C30 Normal", params: { Volume: 3.5, Bright: "On", "Tone Cut": 3, Output: "0 dB" } },
        { name: "Vintage Chorus", params: { Mix: "30%" } },
        { name: "Dual Delay", params: { Mix: "18%" } },
        { name: "Hall", params: { Mix: "18%", Decay: "2.0 s", "Pre Delay": "25 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
        { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "-1 dB", "1.5 kHz": "+2 dB", "8 kHz": "+1 dB" } }
      ],
      scenes: [
        { id: 1, name: "Dream Bed", use: "Verses", bypass: [], knobs: [{ name: "UK C30 Normal", params: { Volume: 3.5 } }] },
        { id: 3, name: "Lead", use: "Fills / hook", note: "Volume 4.0, Exotic Z", bypass: [], extra: [{ name: "Exotic Z Boost", type: "od" }], knobs: [{ name: "UK C30 Normal", params: { Volume: 4 } }, { name: "Exotic Z Boost", params: { Gain: 2.5, Bass: 5.0, Treble: 5.0, Volume: 7.0 } }] }
      ],
      steps: [
        "Volume 3.5 Scene 1, 4.0 Scene 3.",
        "Chorus 30%. Dual Delay 18%.",
        "Both pickups on 335, tone 7.",
        "Exotic Z Boost Scene 3 only.",
        "Hall 18% — don’t bury the backbeat."
      ]
    }
  ]
};

// Wire shared chains
window.ALBUM.songs.find((s) => s.id === "misil").chain = window.ALBUM.acousticChain;
["coral", "superstar"].forEach((id) => {
  window.ALBUM.songs.find((s) => s.id === id).chain = window.ALBUM.studioChain;
});
