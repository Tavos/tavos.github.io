window.ALBUM = {
  id: "es",
  title: "Essentials",
  year: "2001–2015",
  theme: "muse",
  art: "assets/art/muse-essentials.jpg",
  cablingMode: "hybrid",
  tonexLabel: "Diezel VH4 / Vox AC30 · Amp + Cab captures",
  recorded: "Song set across Origin of Symmetry → Drones (live staples)",
  presetBase: "MUSE-ES-BASE",
  onLoad: "Scene 1 · PC 3 · CC#12 = 127",
  guitars: "Manson customs (P-90 / hot humbucker / Sustainer). Tele or Strat with hot bridge HB works. MIDI guitar strip optional — use Pitch Shifter (automate Pitch) for octave moves.",
  amps: "Diezel VH4 is the Muse high-gain spine (TONEX Ch3/Ch4). Vox AC30 for Starlight / Madness / Knights intro. QC-only: Diezel VH4 → 412 Brit 60B GB 90s and UK C30 TopBoost → 212 UK C30 GB ’69.",
  effects: "Pitch Shifter (Hysteria +12; Map optional strict), Colossus Fuzz, MX Phase 95, Overlord Synth (Map Arp default / Madness), Digital / Dual Delay. TONEX FX stay off.",
  voicing: "Aggressive mid-forward Diezel with theatrical FX — pitch shifts and fuzz are identity, not garnish. Cleans must stay AC30 chime, not VH4 rolled back.",
  cabling: "Guitar → QC In. Pitch Shifter / fuzz / phase / synth before FX Loop. QC Send 1 → TONEX In. TONEX L/R → Return 1/2. MIDI ch 1. Loop 100% wet. No QC amp/cab in path.",
  baseBypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"],
  baseMidi: { pc: 3, slot: "01C", model: "Diezel VH4 Hi-Gain", ch: 1 },
  baseChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Crying Wah", type: "wah" },
    { name: "Pitch Shifter", type: "pitch" },
    { name: "Colossus Fuzz", type: "od" },
    { name: "MX Phase 95", type: "mod" },
    { name: "Overlord Synth", type: "filter" },
    { name: "Exotic Z Boost", type: "od" },
    { name: "OD250", type: "od" },
    { name: "FX Loop · TONEX", type: "loop" },
    { name: "Digital Delay", type: "delay" },
    { name: "Dual Delay", type: "delay" },
    { name: "Chief DC2W", type: "mod" },
    { name: "Plate", type: "verb" },
    { name: "Hall", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  baseKnobs: [
    { name: "TONEX Diezel VH4 (default PC 3)", params: { Amp: "On", Cab: "On (4×12 V30)", FX: "all off", Gain: "modeled ±0.5" } },
    { name: "Pitch Shifter", params: { Pitch: "+12", Fine: "0¢", Mix: "100%" } },
    { name: "Colossus Fuzz", params: { Fuzz: 7.5, Level: 5.0, Mode: "Vintage", Bass: 5.5, Treble: 6.0 } },
    { name: "MX Phase 95", params: { Speed: 1.8, "45/90": "90", Script: "On" } },
    { name: "Overlord Synth", params: { Mix: "55%", Gate: "−42 dB", Sensitivity: "65%", Glide: "25 ms", Output: "0 dB", "OSC1": "On · Saw", "OSC1 Level": 7.0, "OSC2": "Off", "Filter": "On", Cutoff: 3.0, Resonance: 6.5, "Filter Drive": 3.0, Envelope: "+40", Sustain: 6.5, Arpeggiator: "On", "Root Note": "C", Scale: "Natural Minor", "Sync Note": "1/16", "Arp Pattern": "Up", Octave: "+1", Tuning: "440 Hz" } },
    { name: "Exotic Z Boost (solo)", params: { Gain: 4.0, Bass: 5.0, Treble: 5.5, Volume: 5.0 } },
    { name: "OD250 (solo)", params: { Gain: 3.0, Volume: 5.0 } },
    { name: "Digital Delay", params: { Mix: "18%", Time: "dotted 1/8", Feedback: "22%", "High Pass": "120 Hz", "Low Pass": "7 kHz", "Mod Depth": "12%", Sync: "On" } },
    { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "18%", Mix: "20%", "Cross Feedback": "15%", "High Pass": "120 Hz", "Low Pass": "6 kHz", "Mod Depth": "10%", Sync: "On" } },
    { name: "Chief DC2W", params: { Mix: "28%", Mode: 3, "SDD-320": "On" } },
    { name: "Plate", params: { Mix: "12%", Decay: "40%", "Pre Delay": "15 ms", "High Pass": "120 Hz", "Low Pass": "8 kHz", "LF Damping": "40%", "HF Damping": "45%", "Mod Depth": "18%", Trails: "On" } },
    { name: "Hall", params: { Mix: "16%", Decay: "50%", "Pre Delay": "25 ms", "Hi Pass": "120 Hz", "Low Pass": "8 kHz", Trails: "On" } },
    { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "−1 dB", "1 kHz": "+2 dB", "4 kHz": "−1 dB if icy" } }
  ],
  midiSlots: [
    { pc: 1, slot: "01A", model: "Vox AC30 Clean", job: "Starlight / Madness / Knights intro" },
    { pc: 2, slot: "01B", model: "Diezel VH4 Crunch", job: "Supermassive / Map body" },
    { pc: 3, slot: "01C", model: "Diezel VH4 Hi-Gain", job: "Hysteria / Psycho / Plug In Baby / Knights" },
    { pc: 4, slot: "02A", model: "Diezel VH4 Lead", job: "Featured solos" }
  ],
  sharedScenes: [
    { id: 1, name: "rhythm / vh4 - PC3", use: "Default high-gain rhythm", note: "Delay Mix 18%", midi: { pc: 3, slot: "01C", model: "VH4 Hi-Gain", ch: 1 } },
    { id: 2, name: "clean / ac30 - PC1", use: "AC30 arpeggio / clean", note: "Delay Mix 16%", midi: { pc: 1, slot: "01A", model: "AC30 Clean", ch: 1 } },
    { id: 3, name: "crunch / vh4 - PC2", use: "Funky mid-gain", note: "Supermassive territory", midi: { pc: 2, slot: "01B", model: "VH4 Crunch", ch: 1 } },
    { id: 4, name: "fuzz / vh4 - PC3", use: "Fuzz Factory stand-in", note: "Colossus Fuzz on", midi: { pc: 3, slot: "01C", model: "VH4 Hi-Gain", ch: 1 } },
    { id: 5, name: "solo / pitch - PC4", use: "Lead + Pitch Shifter +12", note: "Dual Delay on", midi: { pc: 4, slot: "02A", model: "VH4 Lead", ch: 1 } },
    { id: 6, name: "synth / space - PC1", use: "Synth / sequenced beds", note: "Map: Overlord Arp default (strict Pitch optional)", midi: { pc: 1, slot: "01A", model: "AC30 Clean", ch: 1 } }
  ],
  songs: [
    {
      id: "supermassive", num: "1", title: "Supermassive Black Hole", side: "Black Holes and Revelations", preset: "MUSE-ES-SUPER",
      guitar: "Manson / hot HB", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "2006 single — funky single-note riff, mid-gain Diezel, tight delay. Disco-rock pocket more than metal.",
      tonality: "PC 2 crunch, not Ch4 recto-metal. Delay dotted 1/8 under the riff. Optional light phase on verse beds.",
      miss: "PC 3 hi-gain — sounds like Psycho, not Supermassive.",
      knobs: [
        { name: "Digital Delay", params: { Mix: "20%", Time: "dotted 1/8", Feedback: "20%", "High Pass": "120 Hz", "Low Pass": "7 kHz", "Mod Depth": "10%", Sync: "On" } }
      ],
      scenes: [
        { id: 3, name: "riff / crunch - PC2", use: "Main riff / choruses", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 2, slot: "01B", model: "VH4 Crunch", ch: 1 } },
        { id: 1, name: "verse / hi-gain - PC3", use: "Heavier verse hits", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 3, slot: "01C", model: "VH4 Hi-Gain", ch: 1 } },
        { id: 5, name: "solo / pitch - PC4", use: "Lead fills", bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Hall"], midi: { pc: 4, slot: "02A", model: "VH4 Lead", ch: 1 } }
      ],
      steps: ["Scene 3 on load: PC 2. Dig in for funk, do not scoop mids.", "Keep Delay Mix ~20%.", "Solo: Scene 5 — Pitch Shifter optional +12."]
    },
    {
      id: "map", num: "2", title: "Map of the Problematique", side: "Black Holes and Revelations", preset: "MUSE-ES-MAP",
      guitar: "Manson / MIDI or hot HB", pickup: "bridge", toneVol: "tone 7 / vol 9",
      historical: "Studio: guitar split into pitch-shifter + analog synth chains (Costey). QC-only default: Overlord Arp (Root C, Natural Minor, Sync Note 1/16) @ 125. Optional strict: Pitch Shifter −12/0/+12 via MIDI→EXP.",
      tonality: "Scene 6 default = **Overlord Arp** (Root C, Natural Minor, Sync Note 1/16, Pattern Up, Octave +1, Tuning 440 Hz, OSC1 Saw). Pitch Shifter bypassed. Dual Delay + Plate Lush. Optional strict mode sequences Pitch Shifter instead.",
      miss: "Dry amp only — no Overlord Arp. Or Plate / Plate Tight instead of Plate Lush.",
      chain: [
        { name: "In", type: "io" },
        { name: "Simple Gate", type: "util" },
        { name: "Crying Wah", type: "wah" },
        { name: "Pitch Shifter", type: "pitch" },
        { name: "Colossus Fuzz", type: "od" },
        { name: "MX Phase 95", type: "mod" },
        { name: "Overlord Synth", type: "filter" },
        { name: "Exotic Z Boost", type: "od" },
        { name: "OD250", type: "od" },
        { name: "FX Loop · TONEX", type: "loop" },
        { name: "Digital Delay", type: "delay" },
        { name: "Dual Delay", type: "delay" },
        { name: "Chief DC2W", type: "mod" },
        { name: "Plate Lush", type: "verb" },
        { name: "Hall", type: "verb" },
        { name: "Graphic-9", type: "eq" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "Overlord Synth (Scene 6)", params: { Mix: "65%", Gate: "−38 dB", Sensitivity: "70%", Glide: "10 ms", Output: "+1 dB", "OSC1": "On · Saw", "OSC1 Level": 7.5, "OSC2": "Off", "Filter": "On", Cutoff: 2.8, Resonance: 7.0, "Filter Drive": 3.5, Envelope: "+50", Sustain: 6.5, Arpeggiator: "On", "Root Note": "C", Scale: "Natural Minor", "Sync Note": "1/16", "Arp Pattern": "Up", Octave: "+1", Tuning: "440 Hz", Tempo: "125 BPM" } },
        { name: "Pitch Shifter (optional strict)", params: { Mix: "100%", Fine: "0¢", Pitch: "MIDI/EXP seq −12 · 0 · +12 @ 1/16", Note: "Bypass in default Scene 6; enable only for strict −1/0/+1 (Overlord Arp Off)" } },
        { name: "Dual Delay (Scene 6)", params: { "Time L": "1/8", "Time R": "dotted 1/8", Mix: "26%", "Feedback L/R": "20%", Sync: "On", Tempo: "125 BPM" } },
        { name: "Plate Lush", params: { Mix: "20%", Decay: "52%", "Pre Delay": "22 ms", "High Pass": "100 Hz", "Low Pass": "10 kHz", "LF Damping": "35%", "HF Damping": "40%", "Mod Depth": "26%", Trails: "On" } },
        { name: "Plate Lush (Scene 2)", params: { Mix: "24%", Decay: "55%", "Pre Delay": "25 ms", "High Pass": "100 Hz", "Low Pass": "10 kHz", "LF Damping": "35%", "HF Damping": "38%", "Mod Depth": "28%", Trails: "On" } }
      ],
      scenes: [
        { id: 6, name: "pulse / synth - PC1", use: "Main sequenced figure (QC-only default)", note: "Overlord Arp Sync Note 1/16 · C Natural Minor · Pitch off · Plate Lush", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Exotic Z Boost", "OD250", "Chief DC2W"], midi: { pc: 1, slot: "01A", model: "AC30 Clean", ch: 1 }, knobs: [
          { name: "Overlord Synth", params: { Mix: "65%", Arpeggiator: "On", "Root Note": "C", Scale: "Natural Minor", "Sync Note": "1/16", "Arp Pattern": "Up", Octave: "+1", Tuning: "440 Hz", Cutoff: 2.8, Resonance: 7.0 } },
          { name: "Dual Delay", params: { Mix: "26%", Sync: "On" } }
        ] },
        { id: 3, name: "lift / crunch - PC2", use: "Heavier chorus lift", note: "Keep Overlord Arp on", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Exotic Z Boost", "OD250", "Chief DC2W", "Hall"], midi: { pc: 2, slot: "01B", model: "VH4 Crunch", ch: 1 } },
        { id: 2, name: "pad / clean - PC1", use: "Ambient beds without pulse", note: "Plate Lush Mix 24% · Overlord + Pitch off", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W"], midi: { pc: 1, slot: "01A", model: "AC30 Clean", ch: 1 } }
      ],
      steps: [
        "QC-only default — set tempo **125 BPM**. Scene 6: Pitch Shifter **bypassed**. Overlord Mix **65%**, OSC1 Saw, OSC2 Off, Filter Cutoff ~2.8 / Res ~7.",
        "Arpeggiator **On** · Root **C** · Scale **Natural Minor** · Sync Note **1/16** · Arp Pattern **Up** · Octave **+1** · Tuning **440 Hz**. Dual Delay Sync On Mix 26%. Plate Lush 20%. Hold single notes — Arp is the pulse.",
        "Optional strict (−1/0/+1): Overlord Arp **Off**, Pitch Shifter on, Mix 100%, Pitch→EXP1, sequence CC#1 from Logic/Reaper @ 125 (0/64/127). GarageBand cannot MIDI-out CC to QC."
      ]
    },
    {
      id: "psycho", num: "3", title: "Psycho", side: "Drones", preset: "MUSE-ES-PSYCHO",
      guitar: "Manson / hot HB", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "2015 *Drones* — modern high-gain Muse. Diezel / profiler-era aggression, tight low end.",
      tonality: "PC 3 throughout. Dry-er than BHaR. Gate a little tighter. Solo gets Boost, not fuzz.",
      miss: "AC30 or crunch PC 2 — not heavy enough.",
      knobs: [
        { name: "Digital Delay", params: { Mix: "12%", Time: "1/8", Feedback: "15%", "High Pass": "140 Hz", "Low Pass": "6 kHz", "Mod Depth": "8%", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "riff / vh4 - PC3", use: "Main riff / verses", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 3, slot: "01C", model: "VH4 Hi-Gain", ch: 1 } },
        { id: 5, name: "solo / lead - PC4", use: "Solo", note: "Boost on · Delay Mix 20%", bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Hall"], midi: { pc: 4, slot: "02A", model: "VH4 Lead", ch: 1 } },
        { id: 3, name: "chorus / crunch - PC2", use: "Optional slightly less saturated chorus", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 2, slot: "01B", model: "VH4 Crunch", ch: 1 } }
      ],
      steps: ["Scene 1, PC 3. Delay Mix 12% — keep it punchy.", "Solo: Scene 5 with Exotic Z Boost Gain 4.", "Match drop tuning if covering the live arrangement."]
    },
    {
      id: "madness", num: "4", title: "Madness", side: "The 2nd Law", preset: "MUSE-ES-MADNESS",
      guitar: "Manson / clean neck or both", pickup: "neck / both", toneVol: "tone 6 / vol 8",
      historical: "2012 — spacious clean guitar with delay/synth character under electronic production.",
      tonality: "PC 1 AC30. Dual Delay + light Overlord Synth optional. No fuzz, no VH4.",
      miss: "Any Diezel PC — wrong album, wrong mood.",
      knobs: [
        { name: "Dual Delay (Scene 2)", params: { "Time L": "1/4", "Time R": "dotted 1/8", Mix: "26%", "Feedback L/R": "24%", Sync: "On" } },
        { name: "Plate (Scene 2)", params: { Mix: "16%", Decay: "45%", "Pre Delay": "20 ms" } },
        { name: "Overlord Synth (Scene 6)", params: { Mix: "35%", Gate: "−45 dB", Sensitivity: "60%", Glide: "40 ms", Output: "0 dB", "OSC1": "On · Triangle", "OSC1 Level": 6.0, "OSC2": "Off", "Filter": "On", Cutoff: 4.5, Resonance: 4.5, "Filter Drive": 2.0, Envelope: "+25", Sustain: 5.5, Arpeggiator: "Off" } }
      ],
      scenes: [
        { id: 2, name: "verse / clean - PC1", use: "Clean arpeggios / verses", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Chief DC2W", "Hall"], midi: { pc: 1, slot: "01A", model: "AC30 Clean", ch: 1 } },
        { id: 6, name: "hook / synth - PC1", use: "Synth-tinged hook", note: "Overlord Mix ~35%, Arp off", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Exotic Z Boost", "OD250", "Chief DC2W"], midi: { pc: 1, slot: "01A", model: "AC30 Clean", ch: 1 } },
        { id: 3, name: "lift / crunch - PC2", use: "Rare louder lift", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Chief DC2W", "Hall"], midi: { pc: 2, slot: "01B", model: "VH4 Crunch", ch: 1 } }
      ],
      steps: ["Scene 2, PC 1, vol 8, neck or both.", "Dual Delay Mix 26%.", "Hook Scene 6: Overlord Mix 35%, Arpeggiator Off, Filter Cutoff ~4 — texture, not lead synth."]
    },
    {
      id: "plugin", num: "5", title: "Plug In Baby", side: "Origin of Symmetry", preset: "MUSE-ES-PLUGIN",
      guitar: "Manson DeLorean / P-90", pickup: "bridge", toneVol: "tone 10 / vol 10",
      onLoad: "Scene 4 · fuzz intro",
      historical: "Z.Vex Fuzz Factory on the iconic intro. High-gain body. Phase 90 slow sweep available on Manson builds.",
      tonality: "Colossus Fuzz = Fuzz Factory stand-in for intro/outro splat. PC 3 for the song body. Do not leave fuzz on for verses if it muddies.",
      miss: "Starting without fuzz — you skipped the part that makes Plug In Baby *Plug In Baby*.",
      knobs: [
        { name: "Colossus Fuzz (Scene 4)", params: { Fuzz: 7.5, Level: 5.0, Mode: "Vintage", Bass: 5.5, Treble: 6.0 } },
        { name: "MX Phase 95 (optional)", params: { Speed: 1.5, "45/90": "90", Script: "On" } }
      ],
      scenes: [
        { id: 4, name: "intro / fuzz - PC3", use: "Intro & outro Fuzz Factory riff", bypass: ["Crying Wah", "Pitch Shifter", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 3, slot: "01C", model: "VH4 Hi-Gain", ch: 1 } },
        { id: 1, name: "verse / vh4 - PC3", use: "Verses / choruses without fuzz", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 3, slot: "01C", model: "VH4 Hi-Gain", ch: 1 } },
        { id: 5, name: "solo / pitch - PC4", use: "Solo", bypass: ["Crying Wah", "Colossus Fuzz", "Overlord Synth", "Hall"], midi: { pc: 4, slot: "02A", model: "VH4 Lead", ch: 1 } },
        { id: 7, name: "verse / phase - PC3", use: "Optional Phase 90 color", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 3, slot: "01C", model: "VH4 Hi-Gain", ch: 1 } }
      ],
      steps: ["On load Scene 4: Colossus Fuzz Mode Vintage, Fuzz ~7.5 — splatty stand-in for Fuzz Factory.", "Scene 1 for verses — fuzz off.", "Solo Scene 5. Optional Scene 7 for slow Phase 95."]
    },
    {
      id: "knights", num: "6", title: "Knights of Cydonia", side: "Black Holes and Revelations", preset: "MUSE-ES-KNIGHTS",
      guitar: "Manson / hot HB", pickup: "bridge", toneVol: "tone 8 / vol 10",
      onLoad: "Scene 2 · AC30 gallop",
      historical: "Ennio Morricone spaghetti-western gallop into full Muse high gain. AC30 chime into Diezel.",
      tonality: "PC 1 intro/gallop clean-ish drive. PC 3 for the big riff. Delay is part of the gallop.",
      miss: "Starting on PC 3 — you lose the western intro character.",
      knobs: [
        { name: "Digital Delay (Scene 2)", params: { Mix: "22%", Time: "dotted 1/8", Feedback: "25%", Sync: "On" } }
      ],
      scenes: [
        { id: 2, name: "intro / ac30 - PC1", use: "Gallop / western intro", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 1, slot: "01A", model: "AC30 Clean", ch: 1 } },
        { id: 1, name: "riff / vh4 - PC3", use: "Main high-gain riff", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 3, slot: "01C", model: "VH4 Hi-Gain", ch: 1 } },
        { id: 5, name: "solo / pitch - PC4", use: "Lead / climax", bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Hall"], midi: { pc: 4, slot: "02A", model: "VH4 Lead", ch: 1 } },
        { id: 3, name: "build / crunch - PC2", use: "Build sections", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 2, slot: "01B", model: "VH4 Crunch", ch: 1 } }
      ],
      steps: ["Scene 2 on load — AC30 gallop with Delay Mix 22%.", "Hit Scene 1 when the full riff arrives.", "Climax: Scene 5."]
    },
    {
      id: "hysteria", num: "7", title: "Hysteria", side: "Absolution", preset: "MUSE-ES-HYSTERIA",
      guitar: "Manson / hot HB", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "2003 — famous bassline; guitar is high-gain open-E pedal tone riff. Solo uses stereo delay with octave pitch on the repeats (studio trick) — approximate with Dual Delay + Pitch Shifter +12 on Scene 5.",
      tonality: "PC 3 tight and mid-forward. Solo Scene 5: Pitch Shifter +12, Dual Delay on, Mix committed.",
      miss: "Fuzz Factory on the main riff — wrong song (that's Plug In Baby).",
      knobs: [
        { name: "Pitch Shifter (Scene 5)", params: { Pitch: "+12", Fine: "0¢", Mix: "100%", Note: "or EXP sweep Pitch 0→+12" } },
        { name: "Dual Delay (Scene 5)", params: { "Time L": "1/4", "Time R": "dotted 1/8", Mix: "28%", "Feedback L/R": "22%", Sync: "On" } }
      ],
      scenes: [
        { id: 1, name: "riff / vh4 - PC3", use: "Main riff / choruses", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 3, slot: "01C", model: "VH4 Hi-Gain", ch: 1 } },
        { id: 5, name: "solo / pitch - PC4", use: "Arpeggio solo — Pitch Shifter + Dual Delay", bypass: ["Crying Wah", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Hall"], midi: { pc: 4, slot: "02A", model: "VH4 Lead", ch: 1 } },
        { id: 3, name: "verse / crunch - PC2", use: "Slightly less saturated verse option", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 2, slot: "01B", model: "VH4 Crunch", ch: 1 } }
      ],
      steps: ["Scene 1: open E pedal tones must stay clear — Graphic-9 +1 kHz.", "Solo Scene 5: Pitch Shifter Pitch **+12**, Fine **0¢**, Mix **100%** (or EXP sweep Pitch 0→+12).", "Dual Delay Mix 28%. Play the arpeggio solo cleanly before adding Pitch sweeps."]
    },
    {
      id: "starlight", num: "8", title: "Starlight", side: "Black Holes and Revelations", preset: "MUSE-ES-STARLIGHT",
      guitar: "Manson / clean", pickup: "neck / both", toneVol: "tone 5 / vol 8",
      onLoad: "Scene 2 · AC30 arpeggio",
      historical: "AC30 clean arpeggio anthem. Delay and plate are the space — not gain.",
      tonality: "PC 1 only for the song body. If chords break up, lower TONEX gain / Volume before touching EQ.",
      miss: "Any VH4 PC — instant wrong song.",
      knobs: [
        { name: "Digital Delay (Scene 2)", params: { Mix: "24%", Time: "1/4", Feedback: "28%", "High Pass": "100 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
        { name: "Plate (Scene 2)", params: { Mix: "18%", Decay: "48%", "Pre Delay": "25 ms" } }
      ],
      scenes: [
        { id: 2, name: "verse / clean - PC1", use: "Arpeggio verses / choruses", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 1, slot: "01A", model: "AC30 Clean", ch: 1 } },
        { id: 6, name: "outro / space - PC1", use: "Bigger ambient ending", note: "Hall on · Delay Mix 30%", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Chief DC2W"], midi: { pc: 1, slot: "01A", model: "AC30 Clean", ch: 1 } },
        { id: 3, name: "bridge / crunch - PC2", use: "Optional light drive bridge", bypass: ["Crying Wah", "Pitch Shifter", "Colossus Fuzz", "MX Phase 95", "Overlord Synth", "Exotic Z Boost", "OD250", "Dual Delay", "Chief DC2W", "Hall"], midi: { pc: 2, slot: "01B", model: "VH4 Crunch", ch: 1 } }
      ],
      steps: ["Scene 2, PC 1, neck/both, vol 8.", "Delay Mix 24%, Plate 18%.", "Outro Scene 6 for Hall wash. Avoid PC 3 entirely."]
    }
  ]
};
