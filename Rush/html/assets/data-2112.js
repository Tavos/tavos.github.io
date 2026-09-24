window.ALBUM = {
  id: "2112",
  title: "2112",
  year: 1976,
  theme: "2112",
  art: "assets/art/2112.jpg",
  cablingMode: "hybrid",
  tonexLabel: "Lifeson Legacy · Amp + Cab captures",
  recorded: "Toronto Sound, 1976",
  presetBase: "QT-2112-BASE",
  onLoad: "PC 22 · CC#12 = 127",
  guitars: "Gibson ES-335 (primary), Gibson Les Paul Standard on some leads, borrowed Strat on a few parts, Gibson Dove, Gibson B-45 12-string, classical guitar.",
  amps: "Studio was Twin / Super Reverb + Marshall 50W. This collection has no Fender — TONEX Club & Country is the singing midrange (Alex’s later “this is my voice” combo); Curly is the British crunch/lead. One amp at a time, recalled by MIDI.",
  effects: "Maestro PS-1a → Phaser pre-loop. Echoplex → Tape Delay post-loop. Cry Baby → Crying Wah. Chorus off. TONEX mod/delay/reverb/comp stay off.",
  voicing: "Rawer and more open than Moving Pictures. Historically Fender; here it is Club & Country at low dirt, Curly when the suite gets angry. Phaser on Overture, Presentation, Oracle, Soliloquy, and Something for Nothing — into the amp, not after the cab.",
  cabling: "Guitar → QC In. Pre-FX on the Grid. QC Send 1 → TONEX In. TONEX L/R → QC Return 1/2. QC MIDI Out → TONEX MIDI In, channel 1. FX Loop mix 100% wet. Never put a QC amp/cab in this path.",
  baseBypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall"],
  baseMidi: { pc: 22, slot: "07B", model: "Club & Country Clean", ch: 1 },
  baseChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Crying Wah", type: "wah" },
    { name: "Phaser", type: "mod" },
    { name: "Exotic Z Boost", type: "od" },
    { name: "Volume", type: "util" },
    { name: "FX Loop · TONEX", type: "loop" },
    { name: "Rotary", type: "mod" },
    { name: "Tape Delay", type: "delay" },
    { name: "Plate", type: "verb" },
    { name: "Hall", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  baseKnobs: [
    { name: "TONEX global (every slot)", params: { Amp: "On", Cab: "On", Mod: "Off", Delay: "Off", Reverb: "Off", Comp: "Off", Bypass: "disabled" } },
    { name: "Phaser (Maestro PS-1, pre-loop)", params: { Rate: 2.5, "Depth": 5.5, Feedback: 4.0, Mix: "40%", Stages: "4 or 6" } },
    { name: "Tape Delay (post-loop)", params: { Time: "380 ms", Feedback: "22%", Mix: "15%", "Mod Depth": "15–20%" } },
    { name: "Graphic-9", params: { HPF: "~80 Hz", "1 kHz": "+2 dB", "4 kHz": "−2 dB if icy" } }
  ],
  midiSlots: [
    { pc: 21, slot: "07A", model: "Club & Country Bright Clean", job: "Bloom, Discovery, Tears, Twilight default" },
    { pc: 22, slot: "07B", model: "Club & Country Clean", job: "Default rhythm / Twin stand-in / Maestro wash" },
    { pc: 27, slot: "09A", model: "Curly Brite Crunch", job: "Leads, Temples fills, wah" },
    { pc: 32, slot: "10C", model: "Curly Hi-Gain", job: "Grand Finale, optional climax" },
    { pc: 30, slot: "10A", model: "Curly Crunch", job: "Optional Bangkok chest" }
  ],
  sharedScenes: [
    { id: 1, name: "verse / clean - PC22", use: "Default electric rhythm", note: "Phaser off · Tape Mix 12%", midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
    { id: 2, name: "verse / bright - PC21", use: "Open-back air / bloom", note: "Phaser off · Tape Mix 12%", midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
    { id: 3, name: "solo / curly - PC27", use: "Solos and heavier fills", note: "Tape Mix 20%", midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
    { id: 4, name: "wash / clean - PC22", use: "Named phaser tracks — Maestro into the amp", note: "Phaser on · Tape Mix 18%", midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
    { id: 5, name: "acoustic / off", use: "Discovery / Lessons / Tears — real acoustic bypasses the loop", note: "Real acoustic: bypass loop", midi: { off: true } },
    { id: 6, name: "wah / curly - PC27", use: "Cry Baby engaged", note: "Tape Mix 22%", midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
    { id: 7, name: "climax / hi-gain - PC32", use: "Grand Finale / last-chorus weight", note: "Phaser off", midi: { pc: 32, slot: "10C", model: "Curly Hi-Gain", ch: 1 } }
  ],
  songs: [
    {
      id: "overture", num: "I", title: "Overture", side: "Side A · 2112 suite", preset: "QT-2112-SUITE",
      guitar: "ES-335", pickup: "neck + bridge", toneVol: "tone 8 / vol 10",
      historical: "ES-335, Maestro phaser, Echoplex. Dramatic and cinematic, building from color into the Temples riff language.",
      tonality: "Phased Club & Country, not metal. Slow swirl into the amp; Curly peeks in as the arrangement thickens.",
      miss: "If the phaser sits after the FX Loop it will sound like Moving Pictures, not 1976. Confirm TONEX shows C&C Clean on Scene 4.",
      eq: "Graphic-9: HPF ~80 Hz. +2 dB at 1 kHz. Scene change is MIDI, not a Twin/Plexi merge.",
      knobs: [
        { name: "Phaser", params: { Rate: 2.5, Depth: 5.5, Feedback: 4.0, Mix: "40%" } },
        { name: "Tape Delay", params: { Time: "380 ms", Feedback: "22%", Mix: "under 20%" } }
      ],
      scenes: [
        { id: 4, name: "intro / clean - PC22", use: "Opening figures and held chords — Maestro into Club & Country", note: "Phaser on, Mix 40%", bypass: ["Crying Wah", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 1, name: "riff / clean - PC22", use: "Driving unison figures once the overture thickens", note: "Phaser off", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 3, name: "climax / curly - PC27", use: "Climactic lines into Temples", note: "MIDI to Curly", bypass: ["Crying Wah", "Phaser", "Rotary", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Duplicate QT-2112-SUITE. Start on Scene 4. Confirm Preset MIDI Out on switch D is PC 22.",
        "Confirm Phaser is pre-loop.",
        "Phaser Mix 40%. If it turns to Univibe soup, Mix 30% and Rate 2.0.",
        "Play the opening with neck+bridge, tone 8. Let chords bloom; do not palm-mute.",
        "Heavier statements: Scene 1 or 3. Do not add a Tube Screamer — change PC, not Drive.",
        "Tape Delay Mix stays under 20%."
      ],
      notes: ["A Les Paul on PC 27 the whole overture jumps the era to 1978. Stay on PC 22 until the last third."]
    },
    {
      id: "temples", num: "II", title: "The Temples of Syrinx", side: "Side A · 2112 suite", preset: "QT-2112-SUITE",
      guitar: "ES-335 (classical at the tag)", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "ES-335 bridge, the hit riff. Passion and anger after Caress of Steel. Classical guitar at the end toward Discovery.",
      tonality: "Mid-forward, pick-heavy, almost no chorus, almost no phase. Dry 335 into C&C Clean, Curly only for fills.",
      miss: "If it sounds modern-tight, you sent PC 32 on the riff. Stay PC 22.",
      knobs: [
        { name: "TONEX Scene 1", params: { Slot: "07B C&C Clean", Gain: "modeled +0.5 if needed" } },
        { name: "Tape Delay", params: { Mix: "12%" } }
      ],
      scenes: [
        { id: 1, name: "verse / clean - PC22", use: "Main riff and verse punches", note: "Phaser off, Wah off", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 3, name: "fill / curly - PC27", use: "Bigger unison / lead fills", bypass: ["Crying Wah", "Phaser", "Rotary", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 7, name: "chorus / hi-gain - PC32", use: "Optional last-chorus weight", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall", "Tape Delay"], midi: { pc: 32, slot: "10C", model: "Curly Hi-Gain", ch: 1 } },
        { id: 5, name: "tag / acoustic - off", use: "Last bars / classical tag", note: "Neck, tone 3, Hall Mix 30%, fingers", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Tape Delay", "Plate", "FX Loop · TONEX"], midi: { off: true } }
      ],
      steps: [
        "Phaser off. Wah off. TONEX must show C&C Clean, not Curly.",
        "Bridge pickup. If the riff will not self-distort, TONEX Gain +0.5 — do not jump to PC 32.",
        "Pick closer to the bridge. The recorded attack is snappy.",
        "If the riff masks the vocal, Graphic-9 −2 dB at 1.6 kHz — not a scoop at 800 Hz.",
        "Scene 5 only for the classical ending."
      ]
    },
    {
      id: "discovery", num: "III", title: "Discovery", side: "Side A · 2112 suite", preset: "QT-2112-DISCOVERY",
      guitar: "Dove / classical spirit; neck 335 if electric", pickup: "neck or piezo", toneVol: "tone 4 / vol 8",
      historical: "The protagonist finds a guitar. Acoustic / classical, intimate, then awakening.",
      tonality: "Unplugged, fingers, room. Distortion is the enemy.",
      miss: "Prefer a real acoustic on Input 2 with the FX Loop bypassed.",
      chain: [
        { name: "In", type: "io" },
        { name: "Parametric-3", type: "eq" },
        { name: "FX Loop · TONEX", type: "loop" },
        { name: "Hall", type: "verb" },
        { name: "Graphic-9", type: "eq" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "Parametric-3", params: { "Cut 350 Hz": "−4 dB", "Boost 4.5 kHz": "+3 dB" } },
        { name: "Hall", params: { Mix: "28%", "Pre-delay": "25 ms", Decay: "50%" } }
      ],
      scenes: [
        { id: 5, name: "verse / acoustic - off", use: "Real acoustic — FX Loop off", bypass: ["FX Loop · TONEX"], midi: { off: true } },
        { id: 2, name: "swell / bright - PC21", use: "Electric-only cheat — ride volume 6→10 as the guitar is “discovered”", note: "Ride guitar volume 6→10", bypass: [], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } }
      ],
      steps: [
        "Fingers or a very soft nylon pick.",
        "Neck pickup, tone 4, volume 8 if electric.",
        "Parametric-3: −4 dB at 350 Hz, +3 dB at 4.5 kHz.",
        "As it “discovers” electricity, ride guitar volume from 6 to 10 rather than stomping Curly.",
        "Optional last 20%: Scene 1 from the suite (PC 22) — a hint of grit, not Hi-Gain."
      ]
    },
    {
      id: "presentation", num: "IV", title: "Presentation", side: "Side A · 2112 suite", preset: "QT-2112-SUITE",
      guitar: "ES-335", pickup: "neck + bridge", toneVol: "vol 8 (Scene 4) / 10 (1 & 3)",
      historical: "Maestro phaser listed by Lifeson. Call-and-response drama. Cleaner 335 verses against more driven replies.",
      tonality: "Two characters — priest / protagonist. Use scenes as the dialogue.",
      knobs: [
        { name: "Phaser", params: { Rate: 2.0, Mix: "40%" } },
        { name: "Tape Delay", params: { Mix: "18%" } }
      ],
      scenes: [
        { id: 4, name: "verse / clean - PC22", use: "The official / ominous voice", note: "Guitar vol 8, Rate 2.0", bypass: ["Crying Wah", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 1, name: "reply / clean - PC22", use: "The human / pleading voice — Phaser off", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 3, name: "climax / curly - PC27", use: "Climactic answers", bypass: ["Crying Wah", "Phaser", "Rotary", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Phaser Rate 2.0 (slower than Overture) so chords still read as chords.",
        "Guitar volume 8 on Scene 4, 10 on Scene 1/3.",
        "Tape Delay Mix 18% — recitative, like a hall.",
        "If the phaser gets woozy, Graphic-9 −2 dB at 250 Hz. Do not scoop TONEX Bass."
      ]
    },
    {
      id: "oracle", num: "V", title: "Oracle: The Dream", side: "Side A · 2112 suite", preset: "QT-2112-SUITE",
      guitar: "ES-335", pickup: "neck (or both)", toneVol: "tone 8 / vol 10",
      historical: "Maestro phaser. Dream logic, floating, more delay than the rock movements.",
      tonality: "Wetter, slower swell. The most Echoplex-forward movement.",
      knobs: [
        { name: "Phaser", params: { Rate: 2.0, Mix: "45%" } },
        { name: "Tape Delay", params: { Time: "420 ms", Feedback: "28%", Mix: "24%" } },
        { name: "Rotary (optional)", params: { Speed: "Slow", Mix: "20%" } }
      ],
      scenes: [
        { id: 4, name: "verse / clean - PC22", use: "Entire movement — Maestro wash, delay up", note: "Optional Rotary Slow Mix 20%", bypass: ["Crying Wah", "Exotic Z Boost", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 2, name: "verse / bright - PC21", use: "If PC 22 still crunches, stay on Bright Clean", bypass: ["Crying Wah", "Exotic Z Boost", "Hall"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } }
      ],
      steps: [
        "Phaser Mix 45%, Rate 1.8–2.2.",
        "Tape Delay 420 ms, Feedback 28%, Mix 24%.",
        "Let delay and phase create the motion. If C&C Clean still bites, send PC 21.",
        "Optional Rotary after the loop, Mix 20%, Slow. Do not stack Rotary + Phaser at high mix.",
        "Pickup: neck. Play behind the beat."
      ]
    },
    {
      id: "soliloquy", num: "VI", title: "Soliloquy", side: "Side A · 2112 suite", preset: "QT-2112-SUITE",
      guitar: "ES-335", pickup: "neck, then both", toneVol: "tone 8 / vol 10",
      historical: "Maestro phaser. Intimate then huge. Live, a Leslie was used at times; the studio is Twin + phase + space.",
      tonality: "Vocal guitar. Every note has to speak like a lyric.",
      knobs: [
        { name: "Tape Delay", params: { Mix: "20%", Feedback: "20%" } },
        { name: "Rotary (optional)", params: { Speed: "Slow", Mix: "25%" } }
      ],
      scenes: [
        { id: 4, name: "intro / clean - PC22", use: "Opening soliloquy — Maestro wash", bypass: ["Crying Wah", "Exotic Z Boost", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 6, name: "solo / wah - PC27", use: "Expressive lines — vowel wah, not funk", note: "Park wah at 10 o’clock; Rotary Slow", bypass: ["Phaser", "Exotic Z Boost", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 3, name: "climax / curly - PC27", use: "Surge into Grand Finale", bypass: ["Crying Wah", "Phaser", "Rotary", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Start on PC 22. Cleaner than Temples.",
        "Optional Rotary Slow, Mix 25%, post-loop — Leslie color, not carnival.",
        "Wah: heel-down for dark vowels, small rocker moves.",
        "Tape Delay Mix 20%, Feedback 20% — repeats die before the next phrase.",
        "Last third: Scene 3, guitar volume 10, drive into Grand Finale."
      ]
    },
    {
      id: "finale", num: "VII", title: "Grand Finale", side: "Side A · 2112 suite", preset: "QT-2112-SUITE",
      guitar: "ES-335 / Les Paul", pickup: "both (335) or bridge (LP)", toneVol: "tone 10 / vol 10",
      historical: "The full-band detonation. 335/Les Paul, Marshall in the blend, phaser off.",
      tonality: "The most rock-amp moment on the album, still not a JCM800. This is the movement that should sound like Curly.",
      miss: "Do not add chorus to make it bigger. Confirm TONEX says Curly, not Club & Country.",
      knobs: [
        { name: "TONEX", params: { Slot: "10C Curly Hi-Gain", Presence: "trim +0.5 if it will not cut" } },
        { name: "Plate", params: { Mix: "16%", Decay: "40%" } }
      ],
      scenes: [
        { id: 7, name: "climax / hi-gain - PC32", use: "Default Grand Finale weight", note: "Phaser off", bypass: ["Crying Wah", "Phaser", "Rotary", "Hall"], midi: { pc: 32, slot: "10C", model: "Curly Hi-Gain", ch: 1 } },
        { id: 3, name: "stab / curly - PC27", use: "If Hi-Gain is too compressed for chord stabs", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Phaser off.",
        "This is where Curly should be obvious — MIDI PC 32.",
        "If it will not cut, Graphic-9 +1 dB at 2.5 kHz.",
        "Plate Mix 16%, Decay 40% — a studio, not a cathedral."
      ]
    },
    {
      id: "bangkok", num: "8", title: "A Passage to Bangkok", side: "Side B", preset: "QT-2112-BANGKOK",
      guitar: "ES-335", pickup: "bridge", toneVol: "tone 6–7 / vol 10",
      historical: "ES-335 travelogue riff, Eastern-tinged, mid-heavy. Groovy rather than angry.",
      tonality: "Saturated 335, slightly nasal. Temples’ cousin after a layover. C&C Clean for chest; guitar tone knob does the nasal mid.",
      miss: "PC 32 on the riff turns stabs to mush. Dirt down (PC 22), Mid up.",
      knobs: [
        { name: "Guitar tone", params: { Knob: "6–7", Why: "sitar-adjacent honk" } },
        { name: "Tape Delay", params: { Mix: "12%" } }
      ],
      scenes: [
        { id: 1, name: "riff / clean - PC22", use: "Main travelogue riff", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 2, name: "groove / bright - PC21", use: "If PC 22 is too dirty for the groove", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall", "Tape Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 4, name: "fill / clean - PC22", use: "Psychedelic fills only — not the riff", note: "Phaser Mix 25%", bypass: ["Crying Wah", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Solo / fills", note: "Tape Mix 20%", bypass: ["Crying Wah", "Phaser", "Rotary", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Bridge pickup, guitar tone 6–7. That treble roll is the sitar-adjacent mid honk.",
        "Optional Scene 4 Phaser Mix 25% only on fills — not the main riff.",
        "Tape Delay Mix 12%. Keep the odd rhythmic hits punchy.",
        "Strat players: bridge pickup, tone 5. A bright Strat misses the riff’s weight."
      ]
    },
    {
      id: "twilight", num: "9", title: "The Twilight Zone", side: "Side B", preset: "QT-2112-TWILIGHT",
      guitar: "ES-335", pickup: "neck + bridge", toneVol: "tone 8 / vol ~7–10",
      historical: "More open, eerie, space between the hits. Serling-world, not Temples-world.",
      tonality: "Cleaner C&C, more delay, a hint of phase for the odd dimension — subtler than Oracle.",
      knobs: [
        { name: "Tape Delay", params: { Time: "450 ms", Feedback: "30%", Mix: "22%" } },
        { name: "Plate", params: { Mix: "20%", Decay: "48%" } }
      ],
      scenes: [
        { id: 2, name: "verse / bright - PC21", use: "Main guitar — cleaner and spacier than Temples", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "verse / clean - PC22", use: "If Bright Clean is too thin", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall", "Tape Delay"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 4, name: "fill / clean - PC22", use: "Color fills / the zone — Maestro on", bypass: ["Crying Wah", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Solo — keep it spooky", bypass: ["Crying Wah", "Phaser", "Rotary", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Neck+bridge, pick near the neck for verse figures.",
        "Leave air. This song dies if you fill every beat with Curly.",
        "If the guitar disappears under the vocal, Graphic-9 +2 dB at 1.2 kHz — do not send PC 27."
      ]
    },
    {
      id: "lessons", num: "10", title: "Lessons", side: "Side B", preset: "QT-2112-LESSONS",
      guitar: "B-45 12-string + electric 335", pickup: "neck (acoustic-ish) / bridge (electric fills)", toneVol: "light pick",
      historical: "Lifeson original. Acoustic 12-string character plus electric commentary. Folk-rock in a hard-rock band.",
      tonality: "12-string sparkle on top of a polite electric. No phaser. No wah.",
      chain: [
        { name: "In", type: "io" },
        { type: "split", label: "acoustic / electric", aMix: "acoustic", bMix: "electric",
          a: [{ name: "Parametric-3", type: "eq" }, { name: "Pitch Fine", type: "pitch" }, { name: "Hall", type: "verb" }],
          b: [{ name: "FX Loop · TONEX", type: "loop" }, { name: "Analog Delay", type: "delay" }]
        },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "Pitch Fine (12-string cheat)", params: { Pitch: 0, Fine: "+7¢", Mix: "12%" } },
        { name: "Hall", params: { Mix: "20%", Decay: "48%", "Pre-delay": "25 ms" } },
        { name: "Analog Delay", params: { Time: "280 ms", Feedback: "12%", Mix: "10%", "Mod Depth": "10%" } },
        { name: "Merge", params: { Verses: "60 / 40", "Electric lines": "30 / 70" } }
      ],
      scenes: [
        { id: 5, name: "verse / bright - PC21", use: "Verses / 12-string bed (or real B-45 on Input 2)", bypass: [], merge: { a: 70, b: 30 }, midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "fill / clean - PC22", use: "Electric commentary — edge, not crunch", note: "Still edge, not crunch", bypass: ["Pitch Fine"], merge: { a: 30, b: 70 }, midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } }
      ],
      steps: [
        "If you have a 12-string, use it on Row 1 (no loop).",
        "If not: neck pickup, light pick, Parametric +4 dB at 3.5 kHz and Pitch Fine (Pitch 0, Fine +7¢, Mix 12%).",
        "Electric stays PC 22 — Super Reverb stand-in, not a plexi fight.",
        "Electric fills: guitar volume 10, still PC 22."
      ]
    },
    {
      id: "tears", num: "11", title: "Tears", side: "Side B", preset: "QT-2112-TEARS",
      guitar: "Classical / nylon", pickup: "neck if electric", toneVol: "tone 2–4 · fingers",
      historical: "Ballad. Classical / gentle guitar, vocal-forward. Quietest guitar on the album.",
      tonality: "Nylon or very rolled-off 335. Church hall, not plate-on-a-solo.",
      chain: [
        { name: "In", type: "io" },
        { name: "Opto Comp", type: "comp" },
        { name: "Parametric-3", type: "eq" },
        { name: "FX Loop · TONEX", type: "loop" },
        { name: "Hall", type: "verb" },
        { name: "Out", type: "io" }
      ],
      knobs: [
        { name: "Parametric-3", params: { HPF: "150 Hz", "500 Hz": "−3 dB", "6 kHz": "+2 dB" } },
        { name: "Hall", params: { Mix: "32%", Decay: "58%", "Pre-delay": "35 ms" } },
        { name: "Opto Comp (optional)", params: { Comp: 2.5, Mix: "40%" } }
      ],
      scenes: [
        { id: 5, name: "verse / acoustic - off", use: "Real nylon / acoustic — loop off", bypass: ["FX Loop · TONEX"], midi: { off: true } },
        { id: 2, name: "verse / bright - PC21", use: "Electric-only ballad", note: "Fingers, tone 2–4", bypass: [], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } }
      ],
      steps: [
        "Fingers. Always.",
        "Tone knob 2–4. If you hear pick click, you are too bright or still using a pick.",
        "Optional Opto Comp, Comp 2–3, Mix 40%. Do not use Legendary 87.",
        "Steel-string only: play at the neck and accept it will not be the record."
      ]
    },
    {
      id: "sfn", num: "12", title: "Something for Nothing", side: "Side B", preset: "QT-2112-SFN",
      guitar: "ES-335", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "Lifeson listed Maestro phaser on this one. Side-B closer, statement riff.",
      tonality: "Phased rock 335 — the suite’s attitude without the suite’s length.",
      knobs: [
        { name: "Phaser", params: { Mix: "35%", Rate: 2.8 } },
        { name: "Tape Delay", params: { Mix: "16%" } },
        { name: "Exotic Z Boost (solo)", params: { Gain: 4.0 } }
      ],
      scenes: [
        { id: 4, name: "riff / clean - PC22", use: "Default riff — Maestro on", note: "Phaser Mix 35%, Rate 2.8", bypass: ["Crying Wah", "Exotic Z Boost", "Rotary", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Solo", note: "Boost on", bypass: ["Crying Wah", "Phaser", "Rotary", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 7, name: "chorus / hi-gain - PC32", use: "Chorus weight if PC 27 still feels small", bypass: ["Crying Wah", "Phaser", "Rotary", "Hall", "Tape Delay"], midi: { pc: 32, slot: "10C", model: "Curly Hi-Gain", ch: 1 } },
        { id: 1, name: "outro / clean - PC22", use: "Last chord, dry ending", note: "Delay Feedback 10%", bypass: ["Crying Wah", "Phaser", "Exotic Z Boost", "Rotary", "Hall", "Tape Delay"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } }
      ],
      steps: [
        "Phaser Mix 35%, Rate 2.8 — a bit faster than Overture so the riff pulses.",
        "Rhythm stays PC 22. Choruses may bump to PC 27, not PC 32 unless it still feels small.",
        "Tape Delay Mix 16%. Keep the riff’s downbeats dry.",
        "Solo: Scene 3. End dry on Scene 1 so the last chord does not wash into hiss."
      ]
    }
  ]
};
