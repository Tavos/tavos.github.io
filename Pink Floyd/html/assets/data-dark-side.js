window.ALBUM = {
  id: "ds",
  title: "The Dark Side of the Moon",
  year: "1973",
  theme: "dsotm",
  art: "assets/art/dark-side-of-the-moon.jpg",
  cablingMode: "qc",
  recorded: "Abbey Road, 1972–73 · EMI",
  presetBase: "PF-DS-BASE",
  onLoad: "Scene 1 · Mixer A 0 dB · B −12 dB",
  guitars: "Fender Stratocaster (bridge / bridge+middle). Neck for Breathe and Us and Them beds. Ride guitar volume into the Hiwatt.",
  amps: "Stock Watt D103 Bright → 412 Watt S4123 (Hiwatt DR103). Soft beds: US TWN Normal merge. Optional hybrid: Lifeson Club & Country (PC 21/22) or Curly Brite (PC 27) — see midi_map.md.",
  effects: "MX Vibes (Uni-Vibe), Colossus Fuzz (Big Muff), Tape Delay + Dual Delay (Binson Echorec), Plate / Hall. Pre-amp vibe/fuzz; delays post merge.",
  voicing: "Clean-to-edge Hiwatt with delayed space. Not Marshall crunch. Uni-Vibe and Echorec are identity; gain is secondary.",
  cabling: "Guitar → QC In. Pre-FX → Watt/Twin merge → Tape/Dual Delay → Plate/Hall → Graphic-9 → Out. Optional: replace merge with FX Loop → TONEX (Amp/Cab on, FX off); MIDI ch 1.",
  baseBypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"],
  baseMerge: { a: 80, b: 20 },
  ampSlots: [
    { path: "A", block: "Watt D103 Bright", cab: "412 Watt S4123", job: "Hiwatt body / album spine" },
    { path: "B", block: "US TWN Normal", cab: "212 US TWN C12Q 00s", job: "Twin chime / soft beds" }
  ],
  ampNote: {
    title: "Amp knobs — Watt D103 Bright & US TWN Normal (CorOS 4.1.0)",
    paths: [
      {
        path: "A",
        name: "Watt D103 Bright",
        cab: "412 Watt S4123",
        knobs: [
          { knob: "Gain", value: "4.0" },
          { knob: "Bass", value: "5.5" },
          { knob: "Middle", value: "5.0" },
          { knob: "Treble", value: "6.0" },
          { knob: "Master", value: "5.5" },
          { knob: "Presence", value: "5.5" },
          { knob: "Output", value: "0 dB" }
        ],
        never: "Primary Hiwatt stand-in — not Brit 2203."
      },
      {
        path: "B",
        name: "US TWN Normal",
        cab: "212 US TWN C12Q 00s",
        knobs: [
          { knob: "Volume", value: "3.8" },
          { knob: "Bass", value: "5.0" },
          { knob: "Mid", value: "5.0" },
          { knob: "Treble", value: "6.0" },
          { knob: "Bright", value: "On" },
          { knob: "Output", value: "0 dB" }
        ],
        never: null
      }
    ],
    footer: "Song pages list amp overrides only when they differ. Optional hybrid: swap merge for FX Loop + Lifeson C&C / Curly (midi_map.md)."
  },
  mixerNote: {
    title: "Mixer note — A/B blend → CorOS dB",
    body: "Guide blends like A 80 / B 20 are relative path weights, not Mixer knobs. On QC, Mixer Level A / Level B are −40…+12 dB. If both amps arrive similarly loud: L_dB = 20·log10(pct/100).",
    rows: [
      { blend: "A 80 / B 20 (default)", a: "≈ −1.9 dB", b: "≈ −14 dB", practical: "A 0 dB · B −12 dB" },
      { blend: "A 25 / B 75", a: "−12 dB", b: "−2.5 dB", practical: "A −10 dB · B 0 dB" },
      { blend: "A 70 / B 30", a: "−3 dB", b: "−10.5 dB", practical: "A 0 · B −7 dB" },
      { blend: "A 90 / B 10", a: "−0.9 dB", b: "−20 dB", practical: "A 0 · B −19 dB" },
      { blend: "A 60 / B 40", a: "−4.4 dB", b: "−8 dB", practical: "A 0 · B −4 dB" },
      { blend: "A 50 / B 50", a: "−6 dB", b: "−6 dB", practical: "A 0 · B 0" }
    ],
    footer: "Practical column = louder path at 0 dB (typical live setup)."
  },
  baseChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Chief CS3", type: "comp" },
    { name: "Crying Wah", type: "wah" },
    { name: "Colossus Fuzz", type: "od" },
    { name: "MX Vibes", type: "mod" },
    { name: "MX Phase 95", type: "mod" },
    { name: "Exotic Z Boost", type: "od" },
    { name: "OD250", type: "od" },
    {
      name: "Merge",
      type: "util",
      a: [
        { name: "Watt D103 Bright", type: "amp" },
        { name: "412 Watt S4123", type: "cab" }
      ],
      b: [
        { name: "US TWN Normal", type: "amp" },
        { name: "212 US TWN C12Q 00s", type: "cab" }
      ]
    },
    { name: "Tape Delay", type: "delay" },
    { name: "Dual Delay", type: "delay" },
    { name: "Plate", type: "verb" },
    { name: "Hall", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  baseKnobs: [
    { name: "Chief CS3", params: { Sustain: 2.5, Attack: 4.0, Tone: 5.0, Level: 5.0 } },
    { name: "Watt D103 Bright", params: { Gain: 4.0, Bass: 5.5, Middle: 5.0, Treble: 6.0, Master: 5.5, Presence: 5.5, Output: "0 dB" } },
    { name: "US TWN Normal", params: { Volume: 3.8, Bass: 5.0, Mid: 5.0, Treble: 6.0, Bright: "On", Output: "0 dB" } },
    { name: "Colossus Fuzz", params: { Fuzz: 6.5, Level: 4.5, Mode: "Vintage", Bass: 5.5, Treble: 5.5 } },
    { name: "MX Vibes", params: { Speed: 1.8, Intensity: "42%", Mode: "Chorus" } },
    { name: "MX Phase 95", params: { Speed: 1.6, "45/90": "90", Script: "On" } },
    { name: "Exotic Z Boost", params: { Gain: 3.5, Bass: 5.0, Treble: 5.5, Volume: 5.0 } },
    { name: "OD250", params: { Gain: 2.5, Volume: 5.0 } },
    { name: "Tape Delay", params: { Time: "380 ms", Feedback: "24%", Mix: "16%", "Mod Depth": "18%" } },
    { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "20%", Mix: "22%", "Cross Feedback": "18%", "High Pass": "120 Hz", "Low Pass": "6 kHz", "Mod Depth": "12%", Sync: "On" } },
    { name: "Plate", params: { Mix: "12%", Decay: "42%", "Pre Delay": "20 ms", "High Pass": "120 Hz", "Low Pass": "8 kHz", "LF Damping": "40%", "HF Damping": "45%", "Mod Depth": "18%", Trails: "On" } },
    { name: "Hall", params: { Mix: "14%", Decay: "2.2 s", "Pre Delay": "25 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
    { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "−1 dB", "1 kHz": "+2 dB" } }
  ],
  midiSlots: [
    { pc: 21, slot: "07A", model: "Club & Country Bright Clean", job: "Optional Twin-like beds (hybrid)" },
    { pc: 22, slot: "07B", model: "Club & Country Clean", job: "Optional soft rhythm (hybrid)" },
    { pc: 23, slot: "07C", model: "Club & Country Drive", job: "Optional edge if Watt flat (hybrid)" },
    { pc: 27, slot: "09A", model: "Curly Brite Crunch", job: "Optional Money/Time lead (hybrid)" }
  ],
  sharedScenes: [
    { id: 1, name: "rhythm / watt", use: "Default album rhythm", note: "Tape Delay Mix 16%", merge: { a: 80, b: 20 } },
    { id: 2, name: "clean / twin", use: "Soft beds", note: "Optional hybrid PC 21/22", merge: { a: 25, b: 75 } },
    { id: 3, name: "vibe / swirl", use: "Uni-Vibe color", note: "MX Vibes on", merge: { a: 70, b: 30 } },
    { id: 4, name: "muff / grit", use: "Big Muff edge", note: "Colossus on", merge: { a: 85, b: 15 } },
    { id: 5, name: "solo / lead", use: "Leads", note: "Boost + Dual Delay · optional PC 27", merge: { a: 90, b: 10 } },
    { id: 6, name: "space / echorec", use: "Atmosphere", note: "Dual Delay + Hall", merge: { a: 60, b: 40 } }
  ],
  songs: [
    {
      id: "breathe", num: "1", title: "Breathe (In the Air)", side: "The Dark Side of the Moon", preset: "PF-DS-BREATHE",
      guitar: "Strat / neck–middle", pickup: "neck / both", toneVol: "tone 6 / vol 8",
      historical: "Opening guitar statement after Speak to Me — lazy Uni-Vibe pulse, Hiwatt clean, delayed air. Twin color suits the bed.",
      tonality: "Twin-forward merge + MX Vibes. Tape Delay under the chords. Keep Gain low; ride volume.",
      miss: "Brit crunch or dry guitar — kills the album’s first inhale.",
      knobs: [
        { name: "MX Vibes", params: { Speed: 1.6, Intensity: "38%", Mode: "Chorus" } },
        { name: "Tape Delay", params: { Time: "420 ms", Feedback: "22%", Mix: "18%", "Mod Depth": "20%" } }
      ],
      scenes: [
        { id: 2, name: "verse / twin", use: "Verses / main bed", merge: { a: 25, b: 75 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"] },
        { id: 3, name: "swirl / vibe", use: "Heavier vibe wash", merge: { a: 40, b: 60 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"] },
        { id: 6, name: "outro / space", use: "Into On the Run / space", merge: { a: 50, b: 50 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "Exotic Z Boost", "OD250"] }
      ],
      steps: ["Scene 2 on load: Mixer A −10 dB / B 0 dB. MX Vibes Intensity ~38%.", "Tape Delay Mix ~18%.", "Optional hybrid: FX Loop PC 21 Club & Country instead of Twin path."]
    },
    {
      id: "time", num: "2", title: "Time", side: "The Dark Side of the Moon", preset: "PF-DS-TIME",
      guitar: "Strat / bridge", pickup: "bridge", toneVol: "tone 7 / vol 9–10",
      historical: "Clock intro into ringing rhythm, then the celebrated solo — sustain, Echorec trails, controlled grit.",
      tonality: "Watt-forward rhythm. Solo: Exotic Z + Dual Delay. Optional Colossus tickle — don’t bury the note.",
      miss: "Recto solo gain or missing delay trails.",
      knobs: [
        { name: "Tape Delay", params: { Time: "360 ms", Feedback: "26%", Mix: "18%", "Mod Depth": "16%" } },
        { name: "Dual Delay (Scene 5)", params: { Mix: "26%", "Time L": "1/4", "Time R": "dotted 1/8", Sync: "On" } },
        { name: "Exotic Z Boost (Scene 5)", params: { Gain: 4.0, Bass: 5.0, Treble: 6.0, Volume: 5.2 } }
      ],
      scenes: [
        { id: 1, name: "rhythm / watt", use: "Main rhythm after clocks", merge: { a: 80, b: 20 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"] },
        { id: 6, name: "intro / space", use: "Clock / atmosphere bed", merge: { a: 55, b: 45 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250"] },
        { id: 5, name: "solo / lead", use: "Featured solo", merge: { a: 90, b: 10 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "OD250", "Hall"] }
      ],
      steps: ["Scene 1 rhythm: Watt Gain ~4.0, Tape Mix 18%.", "Solo Scene 5: Exotic Z + Dual Delay Mix ~26%.", "Optional hybrid lead: PC 27 Curly Brite if Watt+boost isn’t enough."]
    },
    {
      id: "money", num: "3", title: "Money", side: "The Dark Side of the Moon", preset: "PF-DS-MONEY",
      guitar: "Strat / bridge HB or hot single", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "7/4 cash-register riff into blues-rock solo — Big Muff texture on accents, Hiwatt body, delayed lead.",
      tonality: "Watt Gain ~4.5. Colossus for riff grit (Scene 4). Solo Scene 5 with Dual Delay.",
      miss: "Always-on fuzz or Twin-only — loses the riff’s punch.",
      knobs: [
        { name: "Watt D103 Bright", params: { Gain: 4.5, Middle: 5.5 } },
        { name: "Colossus Fuzz (Scene 4)", params: { Fuzz: 6.8, Level: 4.5, Mode: "Vintage", Bass: 5.5, Treble: 5.0 } },
        { name: "Dual Delay (Scene 5)", params: { Mix: "24%", "Time L": "1/4", "Time R": "dotted 1/8", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "riff / watt", use: "7/4 riff / verses", merge: { a: 85, b: 15 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"] },
        { id: 4, name: "riff / muff", use: "Grittier riff hits", merge: { a: 90, b: 10 }, bypass: ["Crying Wah", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"] },
        { id: 5, name: "solo / lead", use: "Solo", merge: { a: 92, b: 8 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "OD250", "Hall"] }
      ],
      steps: ["Scene 1: Watt Gain 4.5, dig the 7/4 pocket.", "Scene 4: Colossus Vintage for accents only.", "Solo Scene 5: Dual Delay · optional hybrid PC 27."]
    },
    {
      id: "us", num: "4", title: "Us and Them", side: "The Dark Side of the Moon", preset: "PF-DS-US",
      guitar: "Strat / neck", pickup: "neck", toneVol: "tone 5 / vol 7–8",
      historical: "Sax-led ballad — guitar is supportive Twin-ish pad with gentle delay, not a riff vehicle.",
      tonality: "Twin-heavy merge. Soft Tape Delay. No fuzz. Optional light phase.",
      miss: "Watt Gain 6 or Uni-Vibe churn — wrong song.",
      knobs: [
        { name: "US TWN Normal", params: { Volume: 3.5, Bright: "On" } },
        { name: "Tape Delay", params: { Time: "450 ms", Feedback: "20%", Mix: "14%", "Mod Depth": "15%" } }
      ],
      scenes: [
        { id: 2, name: "verse / twin", use: "Verses / pads", merge: { a: 20, b: 80 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"] },
        { id: 3, name: "chorus / twin-phase", use: "Wider choruses", merge: { a: 30, b: 70 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"], knobs: [{ name: "MX Phase 95", params: { Speed: 1.4, "45/90": "90", Script: "On" } }] },
        { id: 6, name: "bridge / space", use: "Sax / space lifts", merge: { a: 45, b: 55 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "Exotic Z Boost", "OD250"] }
      ],
      steps: ["Scene 2: Mixer A −12 dB / B 0 dB (practical from A 20/B 80).", "Keep Tape Mix ~14%.", "Optional hybrid: PC 21/22 C&C."]
    },
    {
      id: "colour", num: "5", title: "Any Colour You Like", side: "The Dark Side of the Moon", preset: "PF-DS-COLOUR",
      guitar: "Strat / bridge+middle", pickup: "both", toneVol: "tone 6 / vol 9",
      historical: "Instrumental jam — Uni-Vibe and delay do the talking; Hiwatt stays open.",
      tonality: "MX Vibes on + Dual Delay. Watt/Twin mid blend. Jam dynamics > preset gain.",
      miss: "Static dry rhythm tone — this track is motion.",
      knobs: [
        { name: "MX Vibes", params: { Speed: 2.0, Intensity: "48%", Mode: "Chorus" } },
        { name: "Dual Delay", params: { Mix: "24%", "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "22%", Sync: "On" } }
      ],
      scenes: [
        { id: 3, name: "jam / vibe", use: "Main jam bed", merge: { a: 65, b: 35 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "Exotic Z Boost", "OD250", "Hall"] },
        { id: 5, name: "lead / lift", use: "Lead breaks", merge: { a: 80, b: 20 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "OD250", "Hall"] },
        { id: 6, name: "wash / space", use: "Closing wash", merge: { a: 50, b: 50 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "Exotic Z Boost", "OD250"] }
      ],
      steps: ["Scene 3: Vibes Intensity ~48%, Dual Delay Mix 24%.", "Lead Scene 5: add Exotic Z lightly.", "Stay in the pocket with the keys."]
    },
    {
      id: "brain", num: "6", title: "Brain Damage", side: "The Dark Side of the Moon", preset: "PF-DS-BRAIN",
      guitar: "Strat / neck–bridge", pickup: "both", toneVol: "tone 6 / vol 8",
      historical: "Acoustic-leaning electric support under the vocal — polite Hiwatt, soft chorus Twin, delayed answers.",
      tonality: "Watt rhythm Scene 1; Twin for softer lines. Tape Delay answers, not washes.",
      miss: "Arena solo tone on the verses.",
      knobs: [
        { name: "Tape Delay", params: { Time: "400 ms", Feedback: "18%", Mix: "12%", "Mod Depth": "14%" } }
      ],
      scenes: [
        { id: 1, name: "verse / watt", use: "Verses", merge: { a: 75, b: 25 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"] },
        { id: 2, name: "soft / twin", use: "Softer answers", merge: { a: 35, b: 65 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"] },
        { id: 6, name: "into / eclipse", use: "Transition lift", merge: { a: 55, b: 45 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250"] }
      ],
      steps: ["Scene 1: Watt, Tape Mix ~12%.", "Soft Scene 2 more Twin.", "Scene 6 into Eclipse."]
    },
    {
      id: "eclipse", num: "7", title: "Eclipse", side: "The Dark Side of the Moon", preset: "PF-DS-ECLIPSE",
      guitar: "Strat / bridge", pickup: "bridge", toneVol: "tone 7 / vol 9",
      historical: "Closing affirmation — full band swell, guitar supports the cadence with space and sustain.",
      tonality: "Watt body Scene 1; finish Scene 6 Dual Delay + Hall. Don’t overplay.",
      miss: "Solo-hero volume on the last cadence.",
      knobs: [
        { name: "Hall (Scene 6)", params: { Mix: "18%", Decay: "2.5 s", "Pre Delay": "30 ms", Trails: "On" } },
        { name: "Dual Delay (Scene 6)", params: { Mix: "20%", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "song / watt", use: "Main cadence support", merge: { a: 70, b: 30 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"] },
        { id: 5, name: "lift / lead", use: "Slight lift", merge: { a: 80, b: 20 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "OD250", "Hall"] },
        { id: 6, name: "finale / space", use: "Final wash", merge: { a: 55, b: 45 }, bypass: ["Crying Wah", "Colossus Fuzz", "MX Vibes", "MX Phase 95", "Exotic Z Boost", "OD250"] }
      ],
      steps: ["Scene 1 body.", "Finale Scene 6: Dual Delay + Hall Decay 2.5 s.", "Leave headroom for the vocal last line."]
    }
  ]
};
