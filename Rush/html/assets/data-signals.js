window.ALBUM = {
  id: "sig",
  title: "Signals",
  year: 1982,
  theme: "sig",
  art: "assets/art/signals.jpg",
  cablingMode: "hybrid",
  tonexLabel: "Lifeson Legacy · Amp + Cab captures",
  recorded: "Le Studio, Morin Heights, 1982",
  presetBase: "QT-SIG-BASE",
  onLoad: "PC 21 · CC#12 = 127",
  guitars: "Hentor Sportscaster (white), Hentor Porkflapsocaster (black), blonde Telecaster. Howard Roberts Fusion and ES-355 still in the locker for the tour.",
  amps: "Signals was all Marshall 4140 Club & Country combos — same amps as Moving Pictures, different job. Analog Kid’s lead was tracked outdoors, aimed at the lake and hills. No Rockman in the TONEX pack; do not substitute H&K (that is 1991).",
  effects: "CE-1 → Vintage Chorus pre-loop, wetter than Moving Pictures. Yamaha E1010 / digital delay → Digital Delay + Dual Delay post-loop. Electric Mistress → MX Flanger on Weapon and Countdown. Chorus 229T stays off.",
  voicing: "Geddy’s Oberheim / Mini-Moog own the arrangement. Guitar is often the rhythm section with Neil. Chorus and dotted delay are the part. If Subdivisions verses sound like Tom Sawyer, you sent PC 23.",
  cabling: "Guitar → QC In. Vintage Chorus before the FX Loop. QC Send 1 → TONEX In. TONEX L/R → Return 1/2. MIDI channel 1. On load: PC 21. Subdivisions verses must recall Bright Clean.",
  baseBypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Hall"],
  baseMidi: { pc: 21, slot: "07A", model: "Club & Country Bright Clean", ch: 1 },
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
    { name: "Plate", type: "verb" },
    { name: "Hall", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  baseKnobs: [
    { name: "TONEX Club & Country", params: { Amp: "On", Cab: "On (open-back 2×12)", FX: "all off", Gain: "modeled ±0.5" } },
    { name: "Vintage Chorus (CE-1, pre-loop)", params: { Mix: "32%", Rate: 2.6, Depth: 5.0, Sync: "Off" } },
    { name: "Chief DC2W (post-loop)", params: { Mix: "32%", Mode: 3, "SDD-320": "On" } },
    { name: "MX Flanger (Weapon / Countdown)", params: { Mix: "16%", Speed: 1.4, Manual: 5.0, Regen: 3.0, Sync: "Off" } },
    { name: "Digital Delay", params: { Mix: "22%", Time: "dotted 1/8", Feedback: "20%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "10%", Sync: "On" } },
    { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "20% linked", Mix: "24%", "Cross Feedback": "20%", "High Pass": "120 Hz", "Low Pass": "3.0 kHz", "Mod Depth": "10%", Sync: "On" } },
    { name: "Graphic-9", params: { HPF: "90 Hz", "250 Hz": "−2 dB", "1 kHz": "+2 to +3 dB" } }
  ],
  midiSlots: [
    { pc: 21, slot: "07A", model: "Club & Country Bright Clean", job: "Default pulse — verses, ska, space" },
    { pc: 22, slot: "07B", model: "Club & Country Clean", job: "Losing It thicker figures" },
    { pc: 23, slot: "07C", model: "Club & Country Drive", job: "Choruses / Analog Kid body" },
    { pc: 27, slot: "09A", model: "Curly Brite Crunch", job: "Analog Kid / Digital Man / Countdown leads" },
    { pc: 32, slot: "10C", model: "Curly Hi-Gain", job: "Avoid on this album" }
  ],
  sharedScenes: [
    { id: 1, name: "chorus / drive - PC23", use: "Choruses / Analog Kid body", note: "Chorus Mix 30%, Dual Delay off", midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
    { id: 2, name: "verse / bright - PC21", use: "Verses, ska, arpeggios — album default pulse", note: "Chorus Mix 38%, Delay Mix 26%", midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
    { id: 3, name: "solo / curly - PC27", use: "Leads", note: "Boost on, OD250 Drive 3, Delay Mix 24%", midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
    { id: 4, name: "lift / drive - PC23", use: "Bigger chorus, still Club & Country", note: "Dual Delay or Hall on", midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
    { id: 5, name: "wah / curly - PC27", use: "Optional Analog Kid cocked wah", note: "Wah on + Scene 3 delay", midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
    { id: 6, name: "space / bright - PC21", use: "Weapon, Countdown, intro beds", note: "Dual Delay + Hall, Flanger where noted", midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } }
  ],
  songs: [
    {
      id: "subdivisions", num: "1", title: "Subdivisions", side: "Signals", preset: "QT-SIG-SUBDIV",
      guitar: "Hentor Strat", pickup: "bridge humbucker", toneVol: "tone 8 / vol 10",
      historical: "The statement of the record. Guitar shares the ostinato with the Oberheim; Neil and Alex are often the rhythm section around Geddy’s foundation. Chorus and delay are the part, not makeup.",
      tonality: "Glassy pulse, not Sawyer. PC 21 on the verses. PC 23 only when the chorus needs combo grind. PC 27 for the lead.",
      miss: "If Scene 2 is still PC 23, it is Tom Sawyer in a suburb. Chorus Mix 20% also reads as Moving Pictures.",
      eq: "Graphic-9: HPF 90 Hz, −2 dB at 250 Hz, +3 dB at 1 kHz.",
      knobs: [
        { name: "Vintage Chorus", params: { Mix: "38% Scene 2 / 30% Scene 1", Rate: 2.6 } },
        { name: "Digital Delay", params: { Time: "dotted 1/8", Mix: "26% verses / 24% solo" } }
      ],
      scenes: [
        { id: 6, name: "intro / bright - PC21", use: "Intro / synth-bed guitar", note: "Dual Delay on", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 2, name: "verse / bright - PC21", use: "Verses, arpeggios, the high-school-halls figure", note: "TONEX must read Bright Clean", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "chorus / drive - PC23", use: "Choruses — still chords, not Temples", note: "Still chords, not Temples", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Lead", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Pickup: bridge humbucker, tone 8.",
        "Scene 2: TONEX shows Bright Clean. Vintage Chorus Mix 38%, dotted 1/8 Mix 26%. Play the ostinato with the sequence — do not out-pick it.",
        "Scene 1 choruses: PC 23, chorus Mix 30%.",
        "Solo: Scene 3, PC 27. Wide vibrato; leave holes for the keys.",
        "Graphic-9 +3 dB at 1 kHz. If it disappears in a trio, you scooped the Rush band."
      ]
    },
    {
      id: "analog-kid", num: "2", title: "The Analog Kid", side: "Signals", preset: "QT-SIG-ANALOG",
      guitar: "Hentor Strat", pickup: "bridge humbucker", toneVol: "tone 10 / vol 10",
      historical: "The album’s rock song — closest to Moving Pictures body, with a raging lead. They put the Marshalls outside aimed at the mountains and lake so the solo’s echo was natural.",
      tonality: "PC 23 for the riff with chorus drier than Subdivisions. PC 27 + Hall + Delay for the outdoor solo.",
      miss: "Chorus Mix 38% on the riff. Then it is Subdivisions with lyrics about summer. Do not send PC 32 — outdoor echo is Hall/Delay, not more gain.",
      knobs: [
        { name: "Vintage Chorus Scene 1", params: { Mix: "22%" } },
        { name: "Scene 3 solo", params: { "Hall Mix": "22%", "Delay": "1/4 Mix 28% FB 24%" } }
      ],
      scenes: [
        { id: 1, name: "riff / drive - PC23", use: "Main riff / verses", note: "Chorus Mix 22%", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 2, name: "verse / bright - PC21", use: "Quieter figures, harmonic color", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "The outdoor lead", note: "Hall on — that is the lake", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 5, name: "solo / wah - PC27", use: "Optional cocked wah", bypass: ["MX Phase 95", "MX Flanger", "Dual Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Scene 1: PC 23. Vintage Chorus Mix 22% — the exception to the album’s wet default.",
        "Bridge humbucker, pick a little closer to the bridge than Subdivisions.",
        "Solo: Scene 3. Hall Mix 22%, Digital Delay 1/4 Mix 28%. That is the lake, not a 2290 wash.",
        "Wah: cocked 10–11 o’clock only if you want a Beck edge; the record lead is mostly fingers."
      ],
      notes: ["Geddy: huge Marshalls outside, aimed at the lake and hills, natural echo on a raging lead."]
    },
    {
      id: "chemistry", num: "3", title: "Chemistry", side: "Signals", preset: "QT-SIG-CHEM",
      guitar: "Hentor / Tele", pickup: "bridge or bridge+middle", toneVol: "tone 8 / vol 10",
      historical: "Reggae-informed bounce, the Vital Signs hangover. Hugh Syme even tied the dog-and-hydrant cover to this title. Guitar skanks; keys and bass carry the science lecture.",
      tonality: "Upbeats. PC 21 verses, PC 23 chorus punch. Delay is the lilt.",
      miss: "If it sounds like the Police, you never left PC 21 and Mix is past 40%.",
      knobs: [
        { name: "Vintage Chorus Scene 2", params: { Mix: "36%" } },
        { name: "Digital Delay", params: { Time: "dotted 1/8", Mix: "24%" } }
      ],
      scenes: [
        { id: 2, name: "verse / bright - PC21", use: "Skank / verse pulse", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "chorus / drive - PC23", use: "Chorus punch", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Lead fills", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 6, name: "break / bright - PC21", use: "Dual Delay lilt, breakdowns", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } }
      ],
      steps: [
        "Upbeats. Gate tight enough that off-beats are air, not sludge.",
        "Scene 2: PC 21, chorus Mix 36%, dotted 1/8 Mix 24%.",
        "Scene 1 choruses: PC 23. Oomph, not a plexi."
      ]
    },
    {
      id: "digital-man", num: "4", title: "Digital Man", side: "Signals", preset: "QT-SIG-DIGITAL",
      guitar: "Hentor Strat", pickup: "bridge or bridge+middle", toneVol: "tone 10 / vol 10",
      historical: "Ska/reggae chops, snappy Hentor, a real solo. Tightest picking on the album after Analog Kid.",
      tonality: "Snap and mute. PC 21 for the chops. PC 23 when it actually thickens. PC 27 for the lead.",
      miss: "Playing the chops on Curly. Stay PC 21 until the part actually thickens. Do not send PC 32.",
      knobs: [
        { name: "Vintage Chorus Scene 2", params: { Mix: "32%" } },
        { name: "Digital Delay", params: { Mix: "20%" } },
        { name: "Scene 4 Dual Delay", params: { L: "1/4", R: "dotted 1/8", Mix: "22%" } }
      ],
      scenes: [
        { id: 2, name: "verse / bright - PC21", use: "Ska chops", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "chorus / drive - PC23", use: "Heavier statements", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Lead", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 4, name: "lift / drive - PC23", use: "Stereo chorus chorus", note: "Dual Delay on", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Hall"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } }
      ],
      steps: [
        "Bridge humbucker or bridge+middle. Mute unused strings like YYZ.",
        "Scene 2: PC 21, chorus Mix 32%, Delay Mix 20% — delay is bounce, not haze.",
        "Gate a little tighter than Chemistry.",
        "Solo: Scene 3, PC 27, Delay Mix 22%."
      ]
    },
    {
      id: "weapon", num: "5", title: "The Weapon", side: "Signals · Fear Pt. 1", preset: "QT-SIG-WEAPON",
      guitar: "Hentor / 355", pickup: "neck or both", toneVol: "tone 6 / vol 10",
      historical: "Fear suite, Part 1. Sequenced, ominous, delay is the guitar. Least riff song on the record. Electric Mistress dust on the atmosphere.",
      tonality: "Scene 6 is the patch. Flanger, Dual Delay, Hall, PC 21. PC 23 only when the arrangement hits.",
      miss: "High-gain plus a scoop. Instant wrong decade. If you hear Sawyer crunch, you sent PC 23 on the pulse.",
      eq: "Graphic-9: −2 dB at 4 kHz, +1 dB at 400 Hz if it needs gloom — do not add 80 Hz.",
      knobs: [
        { name: "MX Flanger (Scene 6)", params: { Mix: "16%", Speed: 1.4, Manual: 5.0, Regen: 3.0, Sync: "Off" } },
        { name: "Dual Delay", params: { Mix: "26%", Feedback: "22%" } },
        { name: "Vintage Chorus", params: { Rate: 1.8, Mix: "28%" } }
      ],
      scenes: [
        { id: 6, name: "intro / bright - PC21", use: "Pulse, intro, the sequenced figure", note: "Flanger + Dual Delay + Hall", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 2, name: "verse / bright - PC21", use: "Drier pulse — Dual Delay off", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "hit / drive - PC23", use: "Heavier hits", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 4, name: "verse / phase - PC23", use: "Optional Phase 95 unease", bypass: ["Crying Wah", "Exotic Z Boost", "OD250", "Dual Delay", "Hall"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } }
      ],
      steps: [
        "Play less. The sequence is the hook; you lock to Neil.",
        "Scene 6 must show Bright Clean.",
        "Crowd/percussion FX stay on the playback. You need the pulse, not a mob patch.",
        "Phase 95 only on Scene 4, Mix 22% max."
      ]
    },
    {
      id: "new-world-man", num: "6", title: "New World Man", side: "Signals", preset: "QT-SIG-NWM",
      guitar: "Hentor Strat", pickup: "bridge humbucker", toneVol: "tone 8 / vol 10",
      historical: "Written last, in a day, to fill the cassette side — the radio single. Tighter and drier than Weapon/Countdown, still chorused, still Club & Country.",
      tonality: "Chorus Mix 28% — less than Subdivisions, more than Analog Kid’s riff. PC 21 verses, PC 23 choruses.",
      miss: "Over-wetting until it is Countdown. Keep Scene 2 relatively dry.",
      knobs: [
        { name: "Vintage Chorus", params: { Mix: "28%" } },
        { name: "Digital Delay verses", params: { Time: "dotted 1/8", Mix: "18%" } }
      ],
      scenes: [
        { id: 2, name: "verse / bright - PC21", use: "Verses", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "chorus / drive - PC23", use: "Choruses", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Lead", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 4, name: "chorus / drive - PC23", use: "Last-chorus width", note: "Dual Delay + Hall", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } }
      ],
      steps: [
        "Chorus Mix 28%. Delay Mix 18% dotted 1/8 on verses. Do not Dual-Delay the whole song.",
        "Scene 1 choruses: PC 23, still friendly. This is a single, not Analog Kid.",
        "Last chorus: Scene 4 if you need width. Then land."
      ]
    },
    {
      id: "losing-it", num: "7", title: "Losing It", side: "Signals", preset: "QT-SIG-LOSING",
      guitar: "Tele / neck Hentor / 355", pickup: "neck", toneVol: "tone 6 / vol 7",
      historical: "Ben Mink’s electric violin is the lead. Guitar is pad, figures, and manners.",
      tonality: "Sit under the violin. PC 21 almost the whole song. PC 22 only if a line disappears — never PC 27.",
      miss: "There must be a guitar solo in here. There is. It is a violin.",
      eq: "Graphic-9: +1 dB at 8 kHz, −2 dB at 250 Hz. Hollow-body honk fights Mink.",
      knobs: [
        { name: "Scene 6 pad", params: { "Chorus Mix": "40%", "Hall Mix": "24%", "Dual Delay Mix": "20%" } }
      ],
      scenes: [
        { id: 2, name: "verse / bright - PC21", use: "Present figures", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 6, name: "space / bright - PC21", use: "Pad / atmosphere", note: "Dual Delay + Hall", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "line / clean - PC22", use: "Slightly thicker lines — C&C Clean, not Drive", note: "C&C Clean, not Crunch", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 22, slot: "07B", model: "C&C Clean", ch: 1 } }
      ],
      steps: [
        "Neck pickup, tone 6, volume 7. Fingers or a thin nylon pick.",
        "Scene 6: chorus Mix 40%, Hall Mix 24%, Dual Delay Mix 20%. Sit under the violin.",
        "Scene 2 when the guitar actually states a figure. Still PC 21.",
        "Scene 1 (PC 22, not 23) only if a line disappears — never PC 27."
      ],
      notes: ["Do not fake Mink with a pitch shifter. Leave the violin to the playback or a guest."]
    },
    {
      id: "countdown", num: "8", title: "Countdown", side: "Signals", preset: "QT-SIG-COUNT",
      guitar: "Hentor Strat", pickup: "bridge (body) / neck (space)", toneVol: "tone 8 / vol 10",
      historical: "STS-1 Columbia, radio chatter, the wettest cinematic guitar on the album. Dual Delay and Hall are the writing.",
      tonality: "Plate/hall 1982, not a combo tank. PC 21 space, PC 23 when it actually rocks, PC 27 for a short lead in the expanse.",
      miss: "Surf-spring or H&K hi-fi clean. Stay in the C&C / Curly family. Playback owns the NASA voice.",
      knobs: [
        { name: "Scene 6", params: { "Dual Delay": "1/4 L · dotted 1/8 R Mix 28%", "Hall Mix": "24%", "Flanger Mix": "14%" } }
      ],
      scenes: [
        { id: 6, name: "intro / bright - PC21", use: "Opening, radio-bed, space", note: "Flanger + Dual Delay + Hall", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 2, name: "verse / bright - PC21", use: "Clearer figures", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "riff / drive - PC23", use: "Driving statements", bypass: ["Crying Wah", "MX Phase 95", "Exotic Z Boost", "OD250", "MX Flanger", "Dual Delay", "Hall"], midi: { pc: 23, slot: "07C", model: "C&C Drive", ch: 1 } },
        { id: 3, name: "solo / curly - PC27", use: "Short lead in the expanse", note: "Keep Dual Delay + Hall on", bypass: ["Crying Wah", "MX Phase 95", "MX Flanger"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } }
      ],
      steps: [
        "Scene 6: Dual Delay 1/4 L / dotted 1/8 R, Mix 28%, Hall Mix 24%, Flanger Mix 14%.",
        "Do not use Spring. This is plate/hall 1982.",
        "Scene 1 when it actually rocks: PC 23, Dual Delay off so the riff speaks.",
        "Solo: Scene 3, keep Dual Delay + Hall on — the pad around the lead is the point."
      ]
    }
  ]
};
