window.ALBUM = {
  id: "mv",
  title: "Morning View",
  year: 2001,
  theme: "mv",
  art: "assets/art/morning-view.jpg",
  cablingMode: "hybrid",
  tonexLabel: "Mesa Trem-o-Verb / DR · Amp + Cab captures",
  recorded: "Stern House, Malibu (Morning View Drive) · April–May 2001",
  presetBase: "INC-MV-BASE",
  onLoad: "Scene 1 · PC 2 · CC#12 = 127",
  guitars: "PRS McCarty Hollowbody (primary MV sessions). Neck pickup for *Echo* / *11am* cleans; bridge for riffs. Semi-hollow / LP acceptable stand-ins.",
  amps: "Mesa Trem-o-Verb combo + DR Maverick 2×12 (studio). TONEX: Orange Vintage clean, Red Modern rhythm, DR Modern for heavy tracks. QC stand-in: California Tremo Orange / Red, California Ch3 Modern.",
  effects: "Boss CS-3 → Chief CS3. PH-2 → MX Phase 95 pre-loop. OC-2 → Digital Octave. RV-3 / Reel Echo → Digital Delay + Tape Delay + Plate. TONEX FX stay off.",
  voicing: "Mid-forward hollowbody bloom — not scooped recto. Gain from pedals + edge-of-breakup Mesa more than amp saturation. *Echo* is the reference clean.",
  cabling: "Guitar → QC In. Pre-FX before FX Loop. QC Send 1 → TONEX In. TONEX L/R → Return 1/2. MIDI ch 1. Loop 100% wet. No QC amp/cab in path.",
  baseBypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"],
  baseMidi: { pc: 2, slot: "01B", model: "Trem-o-Verb Red Modern", ch: 1 },
  baseChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Crying Wah", type: "wah" },
    { name: "Chief CS3", type: "comp" },
    { name: "MX Phase 95", type: "mod" },
    { name: "Digital Octave", type: "pitch" },
    { name: "Exotic Z Boost", type: "od" },
    { name: "OD250", type: "od" },
    { name: "FX Loop · TONEX", type: "loop" },
    { name: "Tape Delay", type: "delay" },
    { name: "Digital Delay", type: "delay" },
    { name: "Plate", type: "verb" },
    { name: "Hall", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  baseKnobs: [
    { name: "TONEX Mesa (default PC 2)", params: { Amp: "On", Cab: "On (2×12 V30)", FX: "all off", Gain: "modeled ±0.5" } },
    { name: "Chief CS3", params: { Sustain: 3.5, Attack: 3.0, Tone: 5.0, Level: 5.0 } },
    { name: "MX Phase 95", params: { Speed: 2.5, "45/90": "90", Script: "On" } },
    { name: "Digital Octave", params: { Direct: "80%", "Oct 1": "65%", "Oct 2": "Off", Mix: "40%" } },
    { name: "Exotic Z Boost (solo)", params: { Gain: 4.0, Bass: 5.0, Treble: 5.5, Volume: 5.0 } },
    { name: "OD250 (solo)", params: { Gain: 3.0, Volume: 5.0 } },
    { name: "Digital Delay", params: { Mix: "18%", Time: "dotted 1/8", Feedback: "22%", "High Pass": "120 Hz", "Low Pass": "6.5 kHz", "Mod Depth": "12%", Sync: "On" } },
    { name: "Tape Delay", params: { Time: "420 ms", Feedback: "28%", Mix: "14%", "Mod Depth": "18%" } },
    { name: "Plate", params: { Mix: "14%", Decay: "45%", "Pre Delay": "20 ms" } },
    { name: "Hall", params: { Mix: "16%", Decay: "55%", "Pre Delay": "30 ms" } },
    { name: "Graphic-9", params: { HPF: "100 Hz", "750 Hz": "+2 dB", "1 kHz": "+1 dB", "250 Hz": "−1 dB if muddy" } }
  ],
  midiSlots: [
    { pc: 1, slot: "01A", model: "Trem-o-Verb Orange Vintage", job: "Echo / 11am / Wish arpeggios / Aqueous" },
    { pc: 2, slot: "01B", model: "Trem-o-Verb Red Modern", job: "Default MV rhythm" },
    { pc: 3, slot: "01C", model: "Dual Rectifier Modern", job: "Nice to Know You / Just a Phase / Warning" },
    { pc: 4, slot: "02A", model: "DR Vintage / Red Blues", job: "Lighter crunch layers" }
  ],
  sharedScenes: [
    { id: 1, name: "rhythm / modern - PC2", use: "Default riff / chorus guitar", note: "Phase off · Delay Mix 18%", midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
    { id: 2, name: "clean / orange - PC1", use: "Hollowbody clean bloom", note: "Delay Mix 16%", midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } },
    { id: 3, name: "heavy / recto - PC3", use: "Aggressive MV rhythm", note: "Graphic-9 +750 Hz", midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } },
    { id: 4, name: "phaser / modern - PC2", use: "PH-2 swirl — Circles, Are You In?", note: "MX Phase 95 on", midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
    { id: 5, name: "solo / boost - PC3", use: "Featured leads", note: "Boost + OD250", midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } },
    { id: 6, name: "space / delay - PC1", use: "Ambient beds", note: "Hall on · Delay Mix 28%", midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } }
  ],
  songs: [
    {
      id: "nice", num: "1", title: "Nice to Know You", side: "Morning View", preset: "INC-MV-NICE",
      guitar: "PRS McCarty Hollowbody", pickup: "bridge", toneVol: "tone 8 / vol 10",
      onLoad: "Scene 3 · heavy intro",
      historical: "Album opener — tight rhythmic punches, OC-2 sub weight, modern recto body. Einziger's syncopated riffs define MV aggression.",
      tonality: "Heavy but not nü-metal scooped. Octave on the signature riff. Mid-forward recto, not fizzy treble.",
      miss: "Starting on PC 2 without octave — the riff loses its submarine weight. Do not scoop 750 Hz.",
      scenes: [
        { id: 3, name: "intro / heavy - PC3", use: "Main riff + choruses", note: "Digital Octave on", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } },
        { id: 1, name: "verse / modern - PC2", use: "Verse groove — less weight", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
        { id: 5, name: "solo / boost - PC3", use: "Lead break", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } }
      ],
      steps: ["Scene 3 on load: PC 3 + Digital Octave for the riff.", "Verse: Scene 1, PC 2, octave off.", "Solo: Scene 5 — Boost before OD250 if needed."]
    },
    {
      id: "circles", num: "2", title: "Circles", side: "Morning View", preset: "INC-MV-CIRCLES",
      guitar: "PRS McCarty Hollowbody", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "Angular riff + breathing bridge. PH-2 phaser on the bridge is the signature motion.",
      tonality: "Drive from Red Modern, not recto saturation. Phaser is pre-amp — Scene 4.",
      miss: "Leaving phaser off on the bridge — it is the song.",
      scenes: [
        { id: 1, name: "riff / modern - PC2", use: "Main riff / body", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
        { id: 4, name: "bridge / phaser - PC2", use: "Bridge swirl", note: "Speed 2.5, 90, Script on", bypass: ["Crying Wah", "Chief CS3", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
        { id: 5, name: "solo / boost - PC3", use: "Outro lead", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } }
      ],
      steps: ["Scene 1 for riff — Phase off.", "Bridge: Scene 4, MX Phase 95 on.", "Do not add Vintage Chorus."]
    },
    {
      id: "wish", num: "3", title: "Wish You Were Here", side: "Morning View", preset: "INC-MV-WISH",
      guitar: "PRS McCarty Hollowbody", pickup: "neck / both", toneVol: "tone 7 / vol 9",
      historical: "Warm arpeggiated verses — Malibu sunshine. Light drive on chorus only.",
      tonality: "Clean PC 1 bloom on verses. Delay audible but not washed out.",
      miss: "PC 3 on the verse arpeggio — wrong song, wrong coast.",
      knobs: [{ name: "Digital Delay (Scene 2)", params: { Mix: "22%", Time: "1/4", Feedback: "24%", "High Pass": "120 Hz", "Low Pass": "7 kHz", "Mod Depth": "10%", Sync: "On" } }],
      scenes: [
        { id: 2, name: "verse / clean - PC1", use: "Arpeggiated verses", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } },
        { id: 1, name: "chorus / modern - PC2", use: "Chorus lift", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } }
      ],
      steps: ["Verse: Scene 2, PC 1, neck pickup.", "Chorus: Scene 1, PC 2.", "Keep Plate Mix ≤14%."]
    },
    {
      id: "phase", num: "4", title: "Just a Phase", side: "Morning View", preset: "INC-MV-PHASE",
      guitar: "PRS McCarty Hollowbody", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "Heavy syncopated main riff — recto territory. Featured solo with boost.",
      tonality: "Tighter low end than Nice to Know You. PC 3 throughout rhythm.",
      miss: "Red Modern (PC 2) on the main riff — not enough punch.",
      scenes: [
        { id: 3, name: "riff / heavy - PC3", use: "Main riff / verses", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } },
        { id: 5, name: "solo / boost - PC3", use: "Guitar solo", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } },
        { id: 4, name: "break / phaser - PC2", use: "Dynamic break — optional phaser", bypass: ["Crying Wah", "Chief CS3", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } }
      ],
      steps: ["Default Scene 3, PC 3.", "Solo: Scene 5 with Boost Gain 4.", "Optional break: Scene 4 for phaser color."]
    },
    {
      id: "eleven", num: "5", title: "11am", side: "Morning View", preset: "INC-MV-11AM",
      guitar: "PRS McCarty Hollowbody", pickup: "neck", toneVol: "tone 6 / vol 8",
      historical: "Sparkling clean/grunge hybrid — one of MV's most admired clean tones.",
      tonality: "Orange Vintage, neck pickup, light CS-3 optional. Touch-sensitive.",
      miss: "Any recto PC on the main figure — kills the wood.",
      scenes: [
        { id: 2, name: "main / clean - PC1", use: "Primary figure — hollowbody chime", note: "Chief CS3 optional light", bypass: ["Crying Wah", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } },
        { id: 1, name: "lift / modern - PC2", use: "Heavier chorus moments", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } }
      ],
      steps: ["Scene 2, PC 1, neck, vol 8.", "Dig in for natural grit — do not add Rodent.", "Chorus lift: Scene 1 only."]
    },
    {
      id: "blood", num: "6", title: "Blood on the Ground", side: "Morning View", preset: "INC-MV-BLOOD",
      guitar: "PRS McCarty Hollowbody", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "Aggressive uptempo — recto rhythm, featured solo.",
      tonality: "Heavier than Circles. Less octave, more midrange punch.",
      miss: "Too much delay — this track is dry and angry.",
      knobs: [{ name: "Digital Delay", params: { Mix: "12%", Time: "1/8", Feedback: "16%", "High Pass": "120 Hz", "Low Pass": "6 kHz", "Mod Depth": "8%", Sync: "On" } }],
      scenes: [
        { id: 3, name: "rhythm / heavy - PC3", use: "Full track rhythm", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } },
        { id: 5, name: "solo / boost - PC3", use: "Solo", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } }
      ],
      steps: ["Keep Delay Mix 12%.", "Scene 3 throughout — PC 3.", "Solo: Scene 5."]
    },
    {
      id: "mexico", num: "7", title: "Mexico", side: "Morning View", preset: "INC-MV-MEXICO",
      guitar: "PRS McCarty Hollowbody", pickup: "neck / both", toneVol: "tone 7 / vol 9",
      historical: "Vintage-leaning warmth — lighter than album openers.",
      tonality: "Clean-to-crunch arc. PC 1 verses, PC 2 choruses.",
      miss: "DR Modern on verses — too heavy for the vibe.",
      scenes: [
        { id: 2, name: "verse / clean - PC1", use: "Verses", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } },
        { id: 1, name: "chorus / modern - PC2", use: "Choruses", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
        { id: 4, name: "bridge / phaser - PC2", use: "Bridge texture", bypass: ["Crying Wah", "Chief CS3", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } }
      ],
      steps: ["Verse Scene 2 · Chorus Scene 1.", "Optional bridge phaser: Scene 4."]
    },
    {
      id: "warning", num: "8", title: "Warning", side: "Morning View", preset: "INC-MV-WARNING",
      guitar: "PRS McCarty Hollowbody", pickup: "bridge", toneVol: "tone 9 / vol 10",
      historical: "Single release — heavy groove, phaser and octave colors in sections.",
      tonality: "Recto body with modulation. Similar family to Nice to Know You but more phaser.",
      miss: "Flat recto with no motion on the hook.",
      scenes: [
        { id: 3, name: "groove / heavy - PC3", use: "Main groove", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } },
        { id: 4, name: "hook / phaser - PC2", use: "Hook / chorus motion", bypass: ["Crying Wah", "Chief CS3", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
        { id: 7, name: "accent / octave - PC3", use: "Octave accent hits", note: "Digital Octave on", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } }
      ],
      steps: ["Scene 3 for main groove.", "Hook: Scene 4 with phaser.", "Octave accents: Scene 7."]
    },
    {
      id: "echo", num: "9", title: "Echo", side: "Morning View", preset: "INC-MV-ECHO",
      guitar: "PRS McCarty Hollowbody", pickup: "neck", toneVol: "tone 5 / vol 9",
      onLoad: "Scene 2 · clean reference",
      historical: "The MV clean tone benchmark — hollowbody into Mesa clean, minimal FX.",
      tonality: "PC 1 Orange Vintage. Neck pickup, vol 9. Delay subtle. This is the A/B tone for the whole album.",
      miss: "Any gain on the main clean figure. If it distorts, lower TONEX gain before adding pedals.",
      knobs: [
        { name: "Digital Delay (Scene 2)", params: { Mix: "14%", Time: "1/4", Feedback: "18%", "High Pass": "120 Hz", "Low Pass": "8 kHz", "Mod Depth": "8%", Sync: "On" } },
        { name: "Plate (Scene 2)", params: { Mix: "12%", Decay: "40%", "Pre Delay": "15 ms" } }
      ],
      scenes: [
        { id: 2, name: "main / clean - PC1", use: "Entire song clean body", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } },
        { id: 1, name: "swell / modern - PC2", use: "Optional louder moments", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } }
      ],
      steps: ["Load Scene 2, PC 1. Neck, tone 5, vol 9.", "Delay Mix 14% max.", "If sterile, +1 dB at 750 Hz on Graphic-9 — not more gain."]
    },
    {
      id: "have", num: "10", title: "Have You Ever", side: "Morning View", preset: "INC-MV-HAVE",
      guitar: "PRS McCarty Hollowbody", pickup: "bridge", toneVol: "tone 8 / vol 10",
      historical: "Mid-tempo drive — Red Modern, not full recto.",
      tonality: "Lighter than Blood on the Ground. Singing midrange.",
      miss: "PC 3 on the whole song — too much.",
      scenes: [
        { id: 1, name: "body / modern - PC2", use: "Verses and choruses", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
        { id: 5, name: "solo / boost - PC3", use: "Lead", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Tape Delay", "Hall"], midi: { pc: 3, slot: "01C", model: "DR Modern", ch: 1 } }
      ],
      steps: ["Scene 1, PC 2 default.", "Solo: Scene 5."]
    },
    {
      id: "areyou", num: "11", title: "Are You In?", side: "Morning View", preset: "INC-MV-AREYOU",
      guitar: "PRS McCarty Hollowbody", pickup: "bridge / both", toneVol: "tone 8 / vol 10",
      historical: "Funk-rock — deep phaser swirl (Einziger used dual PH-2 live; one MX Phase 95 here).",
      tonality: "Motion over gain. PC 2 + phaser is the identity.",
      miss: "Vintage Chorus instead of phaser — wrong pedal era.",
      knobs: [{ name: "MX Phase 95 (Scene 4)", params: { Speed: 3.0, "45/90": "90", Script: "On" } }],
      scenes: [
        { id: 4, name: "groove / phaser - PC2", use: "Main groove — phaser on", bypass: ["Crying Wah", "Chief CS3", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
        { id: 1, name: "verse / modern - PC2", use: "Dryer verses", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
        { id: 6, name: "outro / space - PC1", use: "Spacey outro", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay"], midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } }
      ],
      steps: ["Scene 4 default — Speed 3.0 on Phase 95.", "Verse: Scene 1, phaser off.", "Outro: Scene 6, Hall on."]
    },
    {
      id: "umbrella", num: "12", title: "Under My Umbrella", side: "Morning View", preset: "INC-MV-UMBRELLA",
      guitar: "PRS McCarty Hollowbody", pickup: "both", toneVol: "tone 7 / vol 10",
      historical: "Shorter track — modern rhythm with clean lift.",
      tonality: "PC 2 body, PC 1 for lighter sections.",
      miss: "Heavy recto throughout — song needs air.",
      scenes: [
        { id: 1, name: "rhythm / modern - PC2", use: "Main figure", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } },
        { id: 2, name: "lift / clean - PC1", use: "Lighter sections", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } },
        { id: 4, name: "bridge / phaser - PC2", use: "Bridge color", bypass: ["Crying Wah", "Chief CS3", "Digital Octave", "Exotic Z Boost", "OD250", "Tape Delay", "Hall"], midi: { pc: 2, slot: "01B", model: "Red Modern", ch: 1 } }
      ],
      steps: ["Scene 1 default.", "Clean lift: Scene 2.", "Bridge phaser: Scene 4."]
    },
    {
      id: "aqueous", num: "13", title: "Aqueous Transmission", side: "Morning View", preset: "INC-MV-AQUEOUS",
      guitar: "PRS / sitar texture (guitar stand-in)", pickup: "neck", toneVol: "tone 4 / vol 7",
      onLoad: "Scene 6 · ambient",
      historical: "Closing epic — sitar, guzheng, flute on record. Guitar is ambient bed with long delay and hall.",
      tonality: "PC 1 clean, Tape + Digital Delay, Hall wide. No recto. Volume swell aesthetic.",
      miss: "Any heavy PC. This is Malibu at night, not the album opener.",
      knobs: [
        { name: "Tape Delay (Scene 6)", params: { Time: "680 ms", Feedback: "35%", Mix: "22%", "Mod Depth": "25%" } },
        { name: "Digital Delay (Scene 6)", params: { Mix: "28%", Time: "1/2", Feedback: "30%", "High Pass": "100 Hz", "Low Pass": "5 kHz", "Mod Depth": "15%", Sync: "On" } },
        { name: "Hall (Scene 6)", params: { Mix: "24%", Decay: "60%", "Pre Delay": "40 ms" } }
      ],
      scenes: [
        { id: 6, name: "bed / space - PC1", use: "Ambient guitar bed", note: "Tape + Hall on", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250"], midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } },
        { id: 2, name: "figure / clean - PC1", use: "Sparse picked figures", bypass: ["Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250", "Hall"], midi: { pc: 1, slot: "01A", model: "Orange Vintage", ch: 1 } },
        { id: 5, name: "acoustic / off", use: "Real acoustic / sitar — bypass loop", bypass: ["FX Loop · TONEX", "Crying Wah", "Chief CS3", "MX Phase 95", "Digital Octave", "Exotic Z Boost", "OD250"], midi: { off: true } }
      ],
      steps: ["Scene 6 on load: PC 1, Tape + Hall engaged.", "Pick lightly, vol 7.", "Real sitar/guzheng: Scene 5 bypasses TONEX."]
    }
  ]
};
