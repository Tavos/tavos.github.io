window.ALBUM = {
  id: "mp",
  title: "Moving Pictures",
  year: 1981,
  theme: "mp",
  art: "assets/art/moving-pictures.jpg",
  cablingMode: "hybrid",
  tonexLabel: "Lifeson Legacy · Amp + Cab captures",
  recorded: "Le Studio, Morin Heights, 1980–81",
  presetBase: "QT-MP-BASE",
  onLoad: "PC 23 · CC#12 = 127",
  guitars: "Gibson ES-355 (Witch Hunt, Sawyer layers), Howard Roberts Fusion (some Sawyer), Hentor Strats with a Gibson PAF in the bridge — black Limelight, red Camera Eye, white Vital Signs.",
  amps: "This is the Lifeson Legacy pack’s home album. TONEX Club & Country is the amp — not a QC 2203 stand-in. Curly is for solos that need a 4×12 lead push. There is no Hiwatt in the pack; Bright Clean covers Limelight intro chime.",
  effects: "CE-1 → Vintage Chorus pre-loop. Chief DC2W after the loop for studio doubles. MX Phase 95 = Phase 100, pre-loop. Digital Delay, Spring (M), OD250 / Exotic Z Boost for solos. TONEX FX stay off.",
  voicing: "Tighter and more compressed than 2112 because that was the 2×12 combo — and you finally have Alex’s. Chorus into grit. Chords must stay chords. If they square-wave, you sent PC 27 on a rhythm scene.",
  cabling: "Guitar → QC In. Vintage Chorus and Phase 95 before the FX Loop. QC Send 1 → TONEX In. TONEX L/R → Return 1/2. MIDI channel 1. Limelight intro must recall PC 21.",
  baseBypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"],
  baseMidi: { pc: 23, slot: "07C", model: "Club & Country Drive", ch: 1 },
  baseChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Crying Wah", type: "wah" },
    { name: "MX Phase 95", type: "mod" },
    { name: "Vintage Chorus", type: "mod" },
    { name: "Exotic Z Boost", type: "od" },
    { name: "OD250", type: "od" },
    { name: "FX Loop · TONEX", type: "loop" },
    { name: "Chief DC2W", type: "mod" },
    { name: "MX Flanger", type: "mod" },
    { name: "Digital Delay", type: "delay" },
    { name: "Dual Delay", type: "delay" },
    { name: "Spring (M)", type: "verb" },
    { name: "Plate", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  baseKnobs: [
    { name: "TONEX Club & Country", params: { Amp: "On", Cab: "On (open-back 2×12)", FX: "all off", Gain: "modeled ±0.5" } },
    { name: "Vintage Chorus (CE-1, pre-loop)", params: { Mix: "25%", Rate: 2.2, Depth: 4.5, Sync: "Off" } },
    { name: "Chief DC2W (post-loop)", params: { Mix: "28%", Mode: 3, "SDD-320": "On" } },
    { name: "MX Phase 95 (verses)", params: { Speed: 2.0, "45/90": "90", Script: "On" } },
    { name: "Exotic Z Boost (solo)", params: { Gain: 3.5, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
    { name: "OD250 (solo)", params: { Drive: 3.0, Level: 5.0 } },
    { name: "MX Flanger (Witch Hunt Scene 6)", params: { Mix: "18%", Speed: 1.5, Manual: 5.0, Regen: 3.0, Sync: "Off" } },
    { name: "Digital Delay", params: { Mix: "14%", Time: "1/4", Feedback: "20%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
    { name: "Spring (M)", params: { Mix: "18%" } },
    { name: "Plate", params: { Mix: "10%", Decay: "40%", "Pre-delay": "15 ms" } },
    { name: "Graphic-9", params: { HPF: "80–90 Hz", "250 Hz": "−2 dB", "1 kHz": "+2 dB", "4 kHz": "−1 to −2 dB if icy", "8 kHz": "+1 dB only if chorus vanished" } }
  ],
  midiSlots: [
    { pc: 21, slot: "07A", model: "Club & Country Bright Clean", job: "Intros, 335 sparkle, Vital skank" },
    { pc: 22, slot: "07B", model: "Club & Country Clean", job: "In-between if 21 is sterile and 23 is dirty" },
    { pc: 23, slot: "07C", model: "Club & Country Drive", job: "Default rhythm" },
    { pc: 27, slot: "09A", model: "Curly Brite Crunch", job: "Every featured solo" },
    { pc: 32, slot: "10C", model: "Curly Hi-Gain", job: "Avoid unless a solo is lost in the PA" }
  ],
  sharedScenes: [
    { id: 1, name: "riff / drive - PC23", use: "Default rhythm / main riff", note: "Chorus on, Phase off, Delay Mix 14%", midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
    { id: 2, name: "intro / bright - PC21", use: "Intros, 335 sparkle, arpeggios", note: "Chorus Mix 35%, Spring Mix 22%", midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
    { id: 3, name: "solo / curly - PC27", use: "Leads", note: "Boost on, OD250 Drive 3 Level 5, Delay Mix 24%", midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
    { id: 4, name: "verse / phase - PC23", use: "Synth-like verses — Phase 95 into the amp", note: "Speed 2.0, 90, Script on", midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
    { id: 5, name: "wah / curly - PC27", use: "Barchetta / cocked wah", note: "Wah on + Scene 3 delay", midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
    { id: 6, name: "space / bright - PC21", use: "Camera Eye / fades", note: "Delay Mix 32%, Plate Mix 22%", midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } }
  ],
  songs: [
    {
      id: "sawyer", num: "1", title: "Tom Sawyer", side: "Moving Pictures", preset: "QT-MP-SAWYER",
      guitar: "Hentor Strat / Fusion + 355 layers", pickup: "bridge humbucker", toneVol: "tone 8 / vol 10",
      historical: "Rush’s hard-rock signature. Multiple Marshall passes. Phase 100 on the verse guitar that behaves like a synth pad. CE-1 on layered passes.",
      tonality: "Dense, compressed, mid-forward. Not scooped. PC 23 for the riff (the actual Club & Country). PC 23 + Phase for verses. PC 27 for the solo.",
      miss: "If the riff farts on the low E, Graphic-9 HPF 90 Hz — do not jump to Curly.",
      eq: "Graphic-9: HPF 80–90 Hz, −2 dB at 250 Hz, +2 dB at 1 kHz.",
      knobs: [
        { name: "Vintage Chorus", params: { Mix: "20% Scene 1 / 30% layers", Rate: 2.2, Depth: 4.5, Sync: "Off" } },
        { name: "MX Phase 95 (verses)", params: { Speed: 2.0, "45/90": "90", Script: "On" } },
        { name: "Exotic Z Boost (solo)", params: { Gain: 3.5, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
        { name: "OD250 (solo)", params: { Drive: 3.0, Level: 5.0 } },
        { name: "Digital Delay (solo)", params: { Mix: "24%", Time: "380–420 ms", Feedback: "20%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "Off" } }
      ],
      scenes: [
        { id: 1, name: "intro / drive - PC23", use: "Intro riff and choruses", note: "Chorus Mix 20%", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 4, name: "verse / phase - PC23", use: "Verses — pad guitar, play less, sustain more", note: "Speed 2.0, 90, Script on", bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Lead", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 2, name: "overdub / bright - PC21", use: "355 sparkle overdubs you fake live", note: "Neck, chorus Mix 35%", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Digital Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } }
      ],
      steps: [
        "Pickup: bridge humbucker (or 335 bridge, tone 8).",
        "Confirm TONEX shows C&C Drive on Scene 1 — not Curly.",
        "Vintage Chorus Mix 20% on Scene 1. Rate 2.2, Depth 4.5 — there is no Tone knob on this block.",
        "Scene 4 verses: MX Phase 95 Speed 2.0, 45/90 = 90, Script on. That part is orchestration, not a riff.",
        "Solo: Scene 3, PC 27. Vibrato with the fingers, not more chorus."
      ],
      notes: ["Howard Roberts Fusion parts: Scene 2, neck pickup, PC 21. Live, most players stay on the humbucker Strat."]
    },
    {
      id: "barchetta", num: "2", title: "Red Barchetta", side: "Moving Pictures", preset: "QT-MP-BARCHETTA",
      guitar: "Hentor / 335", pickup: "neck (intro harmonics) / bridge (body)", toneVol: "vol 7 on the landing",
      historical: "Cinematic dynamics — harmonics intro, driving body, screaming middle, quiet landing. Lifeson parked a wah for a Jeff Beck solo tone.",
      tonality: "More dynamic range than Sawyer. Cleaner intro (PC 21), tighter drive (PC 23), wah-colored lead (PC 27).",
      miss: "Simple Gate Threshold must let 12th/7th harmonics through. That is the #1 Barchetta failure. Scene 2 must be PC 21.",
      knobs: [
        { name: "Vintage Chorus (Scene 2)", params: { Mix: "30%", Rate: 2.2, Depth: 4.5, Sync: "Off" } },
        { name: "Spring (M) (Scene 2)", params: { Mix: "25%" } },
        { name: "Crying Wah (solo)", params: { Position: "cocked 10–11 o’clock" } },
        { name: "Exotic Z Boost (solo)", params: { Gain: 3.5, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
        { name: "OD250 (solo)", params: { Drive: 3.0, Level: 5.0 } },
        { name: "Digital Delay (solo)", params: { Mix: "20%", Time: "1/4", Feedback: "25%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } }
      ],
      scenes: [
        { id: 2, name: "intro / bright - PC21", use: "Harmonics intro and ending", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Digital Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "verse / drive - PC23", use: "Driving verses / open road", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 5, name: "solo / wah - PC27", use: "Beck-ish lead — cocked or rocked wah", bypass: ["MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Lead if you prefer no wah", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Scene 2: PC 21. Set the gate so harmonics still pass.",
        "Scene 1: PC 23. Play mutes as part of the engine, not as djent.",
        "Wah: start cocked 10–11 o’clock. Rock it only on longer notes.",
        "Last section: back to Scene 2, guitar volume 7, let it land."
      ]
    },
    {
      id: "yyz", num: "3", title: "YYZ", side: "Moving Pictures", preset: "QT-MP-YYZ",
      guitar: "ES-355", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "ES-355 through the Marshall, CE-1 on the airy middle, dry crunch on the 5/4 theme. Tightest picking on the record.",
      tonality: "Drier than Sawyer, more 355 midrange, chorus reserved for the lyrical middle. Tone has to be immediate or the 5/4 smears.",
      miss: "Do not use Phase 95 on the main riff. Do not send PC 32 on the riff. If 5/4 is late, no capture will save it.",
      knobs: [
        { name: "Vintage Chorus Scene 1", params: { Mix: "15%", Rate: 2.2, Depth: 4.5, Sync: "Off" } },
        { name: "Vintage Chorus (middle)", params: { Mix: "35%", Rate: 2.2, Depth: 4.5, Sync: "Off" } },
        { name: "Chief DC2W (middle)", params: { Mix: "40%", Mode: 3, "SDD-320": "On" } },
        { name: "Digital Delay (middle)", params: { Mix: "20%", Time: "1/4", Feedback: "20%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
        { name: "Digital Delay (solo)", params: { Mix: "22%", Time: "1/4", Feedback: "20%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
        { name: "Exotic Z Boost (solo)", params: { Gain: 3.5, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
        { name: "Graphic-9", params: { "1 kHz": "+2 dB" } }
      ],
      scenes: [
        { id: 1, name: "theme / drive - PC23", use: "5/4 theme — chorus almost off", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 2, name: "middle / bright - PC21", use: "CE-1 stereo picture, held voicings", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Lead", note: "Boost + Delay Mix 22%", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Treat this as a precision rhythm patch. Gate a little tighter than Barchetta.",
        "Graphic-9 +2 dB at 1 kHz. The 355 has to bark on every 5/4 downbeat.",
        "Vintage Chorus Mix 15% on Scene 1. If you hear seasick detune, Mix is too high.",
        "Middle: Scene 2, PC 21. Mute unused strings hard."
      ]
    },
    {
      id: "limelight", num: "4", title: "Limelight", side: "Moving Pictures", preset: "QT-MP-LIMELIGHT",
      guitar: "ES-335 intro, then Hentor Strat", pickup: "neck (intro) / bridge HB (body & solo)", toneVol: "tone 8 intro",
      historical: "Clean 335 arpeggio intro, then Strat for the body and the famous solo. Phase 100 very subtle. The most important dynamic contrast on the album.",
      tonality: "Two guitars in one song. If you play the intro on PC 23, it is not Limelight.",
      miss: "Scene 2 TONEX screen must say Bright Clean. If the arpeggio breaks up, you are still on PC 23.",
      knobs: [
        { name: "MX Phase 95 (verse)", params: { Speed: 1.8, "45/90": "90", Script: "On" } },
        { name: "Vintage Chorus (intro)", params: { Mix: "40%", Rate: 2.2, Depth: 4.5, Sync: "Off" } },
        { name: "Vintage Chorus (body)", params: { Mix: "22%", Rate: 2.2, Depth: 4.5, Sync: "Off" } },
        { name: "Spring (M) (intro)", params: { Mix: "28%" } },
        { name: "Exotic Z Boost (solo)", params: { Gain: 4.5, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
        { name: "OD250 (solo)", params: { Drive: 3.0, Level: 5.0 } },
        { name: "Digital Delay (solo)", params: { Mix: "26%", Time: "450 ms", Feedback: "28%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "Off" } },
        { name: "Chief DC2W (solo)", params: { Mix: "30%", Mode: 3, "SDD-320": "On" } }
      ],
      scenes: [
        { id: 2, name: "intro / bright - PC21", use: "Intro and 335 sparkle — almost acoustic", note: "Must read Bright Clean", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "riff / drive - PC23", use: "Main riff / chorus guitar", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Plate"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 4, name: "verse / phase - PC23", use: "Optional verse texture", note: "Speed ~1.8, 90, Script on", bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "The lead — reason for the preset", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Scene 2: PC 21. Arpeggio blooms with no grit on the 335 low E. Gain down before chorus down.",
        "Scene 1: Strat bridge humbucker, PC 23, chorus Mix 22%. Thick, not mean.",
        "Phase 95 only if you need verse movement: Speed ~1.8, 45/90 = 90, Script on. This block has no Mix.",
        "Solo: Scene 3, PC 27. Wide vibrato, leave space. Every note is a melody.",
        "Thin solo: Strat neck pickup or scooped 1 kHz. Bridge humbucker, Graphic-9 +2 dB at 1 kHz."
      ],
      notes: ["There is no Hiwatt capture. PC 21 + more Spring / DC2W is the chime. Do not insert a QC Watt D103 in parallel."]
    },
    {
      id: "camera", num: "5", title: "The Camera Eye", side: "Moving Pictures", preset: "QT-MP-CAMERA",
      guitar: "Red PAF Strat", pickup: "bridge humbucker", toneVol: "tone 10 / vol 10",
      historical: "Longest track, two city portraits. Power chords, fast picking, pinch harmonics. Delay is part of the writing.",
      tonality: "Bigger hall than Sawyer, wetter, still Club & Country DNA. Power chords stay PC 23.",
      knobs: [
        { name: "Digital Delay", params: { Mix: "22% Scene 1 / 32% Scene 6", Time: "dotted 1/8", Feedback: "20%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
        { name: "Dual Delay (optional)", params: { "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "20% linked", Mix: "20%", "Cross Feedback": "15%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
        { name: "Exotic Z Boost (solo)", params: { Gain: 3.5, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
        { name: "OD250 (solo)", params: { Drive: 3.0, Level: 5.0 } },
        { name: "Digital Delay (solo)", params: { Mix: "24%", Time: "1/4", Feedback: "22%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
        { name: "Vintage Chorus", params: { Mix: "28%", Rate: 2.2, Depth: 4.5, Sync: "Off" } }
      ],
      scenes: [
        { id: 6, name: "intro / bright - PC21", use: "Opening, London colors, transitions", note: "Dual Delay on", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Vintage Chorus"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 2, name: "verse / bright - PC21", use: "City-scene arpeggios", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "riff / drive - PC23", use: "New York / hard rhythm", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Lead — pinch harmonics must pop", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Dotted 1/8 delay Mix 22% on Scene 1, 32% on Scene 6. This song is allowed to be wetter.",
        "Optional Dual Delay 1/4 left / dotted 1/8 right — the two-cities stereo trick.",
        "Pinch harmonics on Scene 3: PC 27, Graphic-9 +1 dB at 2.5–3 kHz — not PC 32.",
        "HPF 90 Hz. The arrangement is huge; guitar mud will bury the keys."
      ]
    },
    {
      id: "witch", num: "6", title: "Witch Hunt", side: "Moving Pictures", preset: "QT-MP-WITCH",
      guitar: "ES-355", pickup: "bridge or both", toneVol: "tone 6 / vol 10",
      historical: "The production piece. Fear suite Part 3. You need the ominous 355, not the mob FX.",
      tonality: "Darker than the rest of MP. Still Club & Country — darker QC EQ and slower chorus, not a different amp family.",
      miss: "Do not send PC 32. This solo is a cry in a crowd, not Limelight.",
      knobs: [
        { name: "Graphic-9 (darker)", params: { "4 kHz": "−2 dB", "400–500 Hz": "+1 dB if needed" } },
        { name: "Vintage Chorus", params: { Mix: "22%", Rate: 1.6, Depth: 4.5, Sync: "Off" } },
        { name: "MX Flanger (Scene 6 only)", params: { Mix: "18%", Speed: 1.5, Manual: 5.0, Regen: 3.0, Sync: "Off" } },
        { name: "MX Phase 95 (verse)", params: { Speed: 2.0, "45/90": "90", Script: "On" } },
        { name: "Exotic Z Boost (solo)", params: { Gain: 3.5, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
        { name: "OD250 (solo)", params: { Drive: 3.0, Level: 5.0 } },
        { name: "Plate", params: { Mix: "18%", Decay: "55%", "Pre-delay": "15 ms" } }
      ],
      scenes: [
        { id: 6, name: "intro / bright - PC21", use: "Intro atmosphere", note: "Flanger dust", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "Dual Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "riff / drive - PC23", use: "Main figure — palm-muted menace", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 4, name: "verse / phase - PC23", use: "Extra unease under the figure", bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Short, bent, vocal solo", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "ES-355 / 335, bridge or both, tone 6. Strat-only: tone 4, Graphic-9 −2 dB at 4 kHz.",
        "Palm mute the verse figure; open up on the big chords.",
        "Gate slower than YYZ. Let the 355 sustain."
      ]
    },
    {
      id: "vital", num: "7", title: "Vital Signs", side: "Moving Pictures", preset: "QT-MP-VITAL",
      guitar: "White Hentor Strat", pickup: "bridge HB or bridge+middle", toneVol: "tone 10 / vol 10",
      historical: "Reggae-informed pulse with more oomph, album closer. Arpeggios, syncopation, chorus as rhythmic shimmer. The bridge toward Signals.",
      tonality: "Tighter, cleaner, delay as groove, almost new-wave around Club & Country. No QC JC-120 — stereo comes from DC2W + delay after Bright Clean.",
      miss: "If it sounds like The Police, Scene 1 chorus Mix is too high and you never left PC 21.",
      knobs: [
        { name: "Vintage Chorus", params: { Mix: "35%", Rate: 2.8, Depth: 4.5, Sync: "Off" } },
        { name: "Digital Delay (Scene 2)", params: { Mix: "24%", Time: "dotted 1/8", Feedback: "20%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
        { name: "Digital Delay (solo)", params: { Mix: "28%", Time: "1/4", Feedback: "22%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
        { name: "Exotic Z Boost (solo)", params: { Gain: 3.5, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
        { name: "OD250 (solo)", params: { Drive: 3.0, Level: 5.0 } },
        { name: "Spring (M)", params: { Mix: "20%" } }
      ],
      scenes: [
        { id: 2, name: "verse / bright - PC21", use: "Skank / arpeggio pulse", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "chorus / drive - PC23", use: "Oomph choruses", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Spring (M)"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Closing lead", note: "Delay Mix 28%", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 6, name: "outro / bright - PC21", use: "Fade", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Digital Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } }
      ],
      steps: [
        "Snap, not 355 velvet. Play the skank on the upbeats. Stay PC 21.",
        "Do not overdrive the upbeats — chorus and delay do the width.",
        "Scene 1 choruses: PC 23. Oomph, not Temples of Syrinx (not PC 32).",
        "Solo: Scene 3, delay Mix 28%. Let it speak over the fade."
      ]
    }
  ]
};
