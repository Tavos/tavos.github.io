window.ALBUM = {
  id: "rtb",
  title: "Roll the Bones",
  year: 1991,
  theme: "rtb",
  art: "assets/art/roll-the-bones.jpg",
  cablingMode: "hybrid",
  tonexLabel: "Lifeson Legacy · Amp + Cab captures",
  recorded: "Le Studio / McClear Place, 1991 · produced with Rupert Hine",
  presetBase: "QT-RTB-BASE",
  onLoad: "PC 37 · CC#12 = 127",
  guitars: "PRS bolt-ons — humbucker pair and Evans active single-coils. Acoustics: Gibson Dove, Washburn, Gibson J-55 in Nashville tuning. Strings .009 .011 .014 .028 .038 .048.",
  amps: "No GK in the Lifeson pack. H&K TriAmp is the tight, hi-fi 80% voice (later Rush architecture, used here for rack tightness). Curly is the Marshall 20%. Scene 1 vs Scene 4 is that blend — one pedal cannot 80/20 merge. Lerxst Omega stays optional / wrong album.",
  effects: "Drier at the amp, wetter after. Chorus 229T and Dual Delay post-loop. Hall = DEP-5. IPS-33 → two Pitch Shifter blocks (Pitch Fine +8¢ and Pitch +12). Detune and Intelligent Pitch are gone on CorOS 4.1.0. Chief CS3 on. No Vintage Chorus in front — instant 1981.",
  voicing: "Solid-state / rack tightness. Notes start and stop with the pick. High-pass at 90 Hz and keep 1 kHz. Solos on Bravado, Ghost of a Chance, and the title track were late-night keepers — human, not shred.",
  cabling: "Guitar → QC In. Comp / wah / boost before the loop. QC Send 1 → TONEX In. TONEX L/R → Return 1/2. MIDI channel 1. Title-track sung chorus is Scene 2 / PC 21, not Marshall.",
  baseBypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"],
  baseMidi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 },
  baseChain: [
    { name: "In", type: "io" },
    { name: "Simple Gate", type: "util" },
    { name: "Chief CS3", type: "comp" },
    { name: "Crying Wah", type: "wah" },
    { name: "Exotic Z Boost", type: "od" },
    { name: "FX Loop · TONEX", type: "loop" },
    { name: "Chorus 229T", type: "mod" },
    { name: "Pitch +12", type: "pitch" },
    { name: "Pitch Fine", type: "pitch" },
    { name: "Dual Delay", type: "delay" },
    { name: "Slapback Delay", type: "delay" },
    { name: "Hall", type: "verb" },
    { name: "Graphic-9", type: "eq" },
    { name: "Out", type: "io" }
  ],
  baseKnobs: [
    { name: "TONEX H&K / Curly", params: { Amp: "On", Cab: "On", FX: "all off", "H&K Gain": "crunchy eighths, chords still chordal" } },
    { name: "Chief CS3 (CS-3, pre-loop)", params: { Sustain: 3.0, Attack: 3.5, Tone: 5.0, Level: 5.0 } },
    { name: "Pitch Fine (Pitch Shifter #1)", params: { Pitch: 0, Fine: "+8¢", Mix: "22%" } },
    { name: "Pitch +12 (Pitch Shifter #2)", params: { Pitch: "+12", Fine: 0, Mix: "12%" } },
    { name: "Chorus 229T (post-loop)", params: { Mix: "28%", Rate: 2.0, Depth: 4.0, Width: "high" } },
    { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "20% linked", Mix: "20%", "Low Pass": "3.0 kHz" } },
    { name: "Hall (DEP-5)", params: { Mix: "14%", Decay: "42%", "Pre-delay": "20 ms" } }
  ],
  midiSlots: [
    { pc: 21, slot: "07A", model: "Club & Country Bright Clean", job: "Ghost intro, title sung chorus, acoustic cheat" },
    { pc: 27, slot: "09A", model: "Curly Brite Crunch", job: "Marshall 20% choruses" },
    { pc: 32, slot: "10C", model: "Curly Hi-Gain", job: "Neurotica; last YBYL choruses" },
    { pc: 37, slot: "12B", model: "H&K Crunch", job: "Default rhythm (GK stand-in)" },
    { pc: 40, slot: "13B", model: "H&K Hi-Gain", job: "Most solos" },
    { pc: 36, slot: "12A", model: "H&K Bright Crunch", job: "Bravado intro/solo, RTB atmosphere, Face Up / Thing lifts" }
  ],
  sharedScenes: [
    { id: 1, name: "verse / hk - PC37", use: "Default verses / GK-ish crunch", note: "229T Mix 28%, Delay Mix 18%", midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
    { id: 2, name: "chorus / bright - PC21", use: "Title chorus, Ghost, sparkle — not Bravado body", note: "229T Mix 35%; Pitch Fine for fake acoustics", midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
    { id: 3, name: "solo / lead - PC40", use: "Leads (not Bravado, not Neurotica)", note: "Boost on, Delay Mix 26%", midi: { pc: 40, slot: "13B", model: "H&K Hi-Gain", ch: 1 } },
    { id: 4, name: "chorus / curly - PC27", use: "Choruses / Marshall 20% (Neurotica uses hi-gain)", note: "229T Mix 22%", midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
    { id: 5, name: "pitch / hk - PC37", use: "IPS / 12-string cheat on the rhythm amp", note: "Pitch Fine +8¢ Mix 22% + Pitch +12 Mix 12%", midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
    { id: 6, name: "intro / crunch - PC36", use: "Bravado intro, Face Up / rap beds", note: "Delay Mix 32%", midi: { pc: 36, slot: "12A", model: "H&K Bright Crunch", ch: 1 } }
  ],
  songs: [
    {
      id: "dreamline", num: "1", title: "Dreamline", side: "Roll the Bones", preset: "QT-RTB-DREAMLINE",
      guitar: "PRS humbucker", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "Opener, highway song, chunky eighth notes. Tight, modern-for-1991. Marshall percentage comes up on the chorus.",
      tonality: "The thesis of the album. H&K tightness, 2290 width, eighth notes like tires on a road. Scene 4 MIDI to Curly is the 20%.",
      miss: "Do not use Vintage Chorus pre-loop. Instant wrong decade. Leaving PC 37 on the chorus and turning 229T Mix to 50% is the wrong lift.",
      knobs: [
        { name: "Chief CS3", params: { Sustain: 3.0, Attack: 3.5, Tone: 5.0, Level: 5.0 } },
        { name: "Exotic Z Boost (solo)", params: { Gain: 3.0, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
        { name: "Chorus 229T", params: { Mix: "25% verse / 22% chorus", Rate: 2.0, Depth: 4.0, Width: "high" } },
        { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "20% linked", Mix: "16% riff / 24% solo", "Cross Feedback": "15%", "High Pass": "120 Hz", "Low Pass": "3.0 kHz", "Mod Depth": "10%" } },
        { name: "Hall", params: { Mix: "14%", Decay: "42%", "Pre-delay": "20 ms" } },
        { name: "Graphic-9", params: { HPF: "90 Hz (100 Hz if low E blooms)", "1 kHz": "+1.5 dB", "3.2 kHz": "−2 dB if icy" } }
      ],
      scenes: [
        { id: 1, name: "verse / hk - PC37", use: "Verses, main groove", note: "229T Mix 25%, Dual Delay Mix 16%", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 4, name: "chorus / curly - PC27", use: "Choruses / bigger hooks — the 20% Marshall", note: "229T Mix 22%, Dual Delay Mix 16%", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 3, name: "solo / lead - PC40", use: "Lead fills", note: "Boost Gain 3, Dual Delay Mix 24%", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 40, slot: "13B", model: "H&K Hi-Gain", ch: 1 } }
      ],
      steps: [
        "Humbucker bridge. Input Pad off unless actives clip.",
        "H&K Gain so muted eighths are crunch and open E chords still have definition. If low E blooms, Graphic-9 HPF 100 Hz — not PC 32.",
        "Chorus 229T Mix 25%, Rate 2.0, Depth 4.0, Width high — width, not swirl. You should still hear a center guitar.",
        "Scene 4: MIDI to Curly Brite Crunch, 229T Mix 22%. That is Lifeson’s Marshall 20%, used where the song lifts.",
        "Dual Delay: Time L 1/4, Time R dotted 1/8, Feedback L/R 20% linked, Mix 16% on the riff, 24% on Scene 3. Low Pass 3.0 kHz.",
        "Vintage Chorus pre-loop stays off. Pitch Fine and Pitch +12 stay bypassed."
      ]
    },
    {
      id: "bravado", num: "2", title: "Bravado", side: "Roll the Bones", preset: "QT-RTB-BRAVADO",
      guitar: "PRS + Dove / Washburn / Nashville J-55", pickup: "neck electric; acoustic layers", toneVol: "clean-ish, vol 8–10",
      onLoad: "PC 21 · CC#12 = 127",
      historical: "Atmospheric, restrained, one of the band’s favorites. Acoustic layers. Late-night keeper solo — Lifeson ranks it among his best.",
      tonality: "Opposite of Dreamline’s chunk. Air, bloom, vocal guitar. Verses are Bright Clean, not H&K Crunch. Solo stays H&K Bright Crunch + boost — never Hi-Gain or Curly.",
      miss: "If it sounds like a rock patch with the volume down, you loaded PC 37 (Dreamline). This preset On Load is PC 21. Solo is PC 36, not 40.",
      knobs: [
        { name: "Exotic Z Boost (solo)", params: { Gain: 3.0, Bass: 5.0, Treble: 5.0, Volume: 5.0 } },
        { name: "Chorus 229T", params: { Mix: "35%", Rate: 2.0, Depth: 4.0, Width: "high" } },
        { name: "Dual Delay", params: { "Time L": "1/4", "Time R": "dotted 1/8", "Feedback L/R": "20% linked", Mix: "14% body / 30% solo", "Low Pass": "3.0 kHz" } },
        { name: "Hall", params: { Mix: "20%", Decay: "45%", "Pre-delay": "20 ms" } },
        { name: "Pitch Fine (Scene 5)", params: { Pitch: 0, Fine: "+8¢", Mix: "22%" } },
        { name: "Pitch +12 (Scene 5)", params: { Pitch: "+12", Fine: 0, Mix: "12%" } }
      ],
      scenes: [
        { id: 6, name: "intro / crunch - PC36", use: "Intro and breakdowns — H&K Bright Crunch, not H&K Crunch", bypass: ["Crying Wah", "Exotic Z Boost", "Slapback Delay"], midi: { pc: 36, slot: "12A", model: "H&K Bright Crunch", ch: 1 } },
        { id: 2, name: "verse / bright - PC21", use: "Verses / the song’s body — Club & Country Bright Clean", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Slapback Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 5, name: "acoustic / bright - PC21", use: "Fake Dove + Washburn + Nashville J-55", bypass: ["Crying Wah", "Exotic Z Boost", "Slapback Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 3, name: "solo / crunch - PC36", use: "Keeper solo — same H&K Bright Crunch + boost, not Hi-Gain", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 36, slot: "12A", model: "H&K Bright Crunch", ch: 1 } }
      ],
      steps: [
        "On load: PC 21, not 37. Scene 2 verses are Club & Country Bright Clean.",
        "Scene 6 intro/breakdowns: PC 36 H&K Bright Crunch — tight GK-ish air, still not Dreamline crunch.",
        "Real acoustics on Input 2, or Scene 5 (still PC 21) Pitch Fine + Pitch +12.",
        "Solo: Scene 3, PC 36 + Exotic Z Boost Gain 3. Do not send 40 or 32. Play it like a singer.",
        "Hall Mix 20%, Decay 45%. This is the one RTB song that wants more room."
      ]
    },
    {
      id: "rtb", num: "3", title: "Roll the Bones", side: "Roll the Bones", preset: "QT-RTB-RTB",
      guitar: "PRS humbuckers + Dove / Washburn / Nashville J-55 on the sung chorus", pickup: "bridge (verses) · neck or acoustic (chorus)", toneVol: "tone 10 verses / tone 7–8 chorus",
      historical: "Title track, spoken-word middle, late-night solo that stayed. The sung chorus (Why are we here?) is the open Em–G5–C lift — acoustic layers and clean chime, not the Marshall wall.",
      tonality: "Verse guitar lean and chorused (PC 37). Sung chorus is clean/acoustic sparkle (PC 21). Marshall (PC 27) only for punches around the rap exit and solo return.",
      miss: "If you send PC 27 on the sung chorus you have the wrong section.",
      knobs: [
        { name: "Scene 1 verses", params: { "229T Mix": "30%", "Delay Mix": "20%" } },
        { name: "Scene 2 sung chorus", params: { "Pitch Fine": "Pitch 0 · Fine +8¢ · Mix 22%", "Pitch +12": "Pitch +12 · Fine 0 · Mix 12%", "Hall Mix": "20%" } },
        { name: "Scene 6", params: { "Delay Mix": "30%", "Pitch +12": "Pitch +5 or +7 · Mix 8%" } }
      ],
      scenes: [
        { id: 1, name: "verse / hk - PC37", use: "Verses and the main electric riff", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 2, name: "chorus / bright - PC21", use: "Sung chorus — Why are we here / Roll the bones", note: "Open Em–G5–C. Pitch Fine + octave.", bypass: ["Crying Wah", "Exotic Z Boost", "Slapback Delay"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 6, name: "rap / crunch - PC36", use: "Spoken-word bed — don’t overplay", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch Fine", "Slapback Delay"], midi: { pc: 36, slot: "12A", model: "H&K Bright Crunch", ch: 1 } },
        { id: 4, name: "hit / curly - PC27", use: "Heavier electric punches after the rap / into the solo return", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 3, name: "solo / lead - PC40", use: "Title-track solo", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 40, slot: "13B", model: "H&K Hi-Gain", ch: 1 } }
      ],
      steps: [
        "Scene 1: PC 37, 229T Mix 30%, Delay Mix 20%. Leave holes for the vocal.",
        "Scene 2 for the sung chorus. PC 21. Pitch Fine on (Pitch 0, Fine +8¢, Mix 22%) and Pitch +12 Mix 12% if you do not have acoustics. Play Em–G5–C; do not crunch it.",
        "Real acoustic: Input 2, bypass FX Loop on that row.",
        "Scene 4 is not the sung chorus. Rap-exit punches and solo return only.",
        "Scene 6: Delay Mix 30%. Ghost interval barely there under the spoken section.",
        "Solo: Scene 3, PC 40. One or two takes, not a stacked harmony patch. HPF 90 Hz."
      ]
    },
    {
      id: "faceup", num: "4", title: "Face Up", side: "Roll the Bones", preset: "QT-RTB-FACEUP",
      guitar: "PRS", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "IPS-33 for little atmospheric movements in the middle. Tighter pop-rock, FX as arrangement.",
      tonality: "H&K rhythm plus a dedicated atmosphere scene that is pitch/detune, not more distortion.",
      knobs: [
        { name: "Scene 1 Dual Delay", params: { Mix: "16%" } },
        { name: "Scene 5 atmosphere", params: { "Pitch Fine": "Pitch 0 · Fine +8¢ · Mix 25%", "Pitch +12": "Pitch +5 or +12 · Mix 12%", "229T Mix": "35%", "Delay Mix": "30%" } }
      ],
      scenes: [
        { id: 1, name: "verse / hk - PC37", use: "Main song / verses", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 2, name: "lift / crunch - PC36", use: "Arpeggiated lifts on H&K Bright Crunch — air, not Bright Clean", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 36, slot: "12A", model: "H&K Bright Crunch", ch: 1 } },
        { id: 5, name: "break / hk - PC37", use: "Middle atmospheric moves — Pitch Fine + octave", bypass: ["Crying Wah", "Exotic Z Boost", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 3, name: "solo / lead - PC40", use: "Lead lines", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 40, slot: "13B", model: "H&K Hi-Gain", ch: 1 } }
      ],
      steps: [
        "Keep Scene 1 relatively dry so Scene 5 feels like a new location.",
        "Do not leave Pitch Fine or Pitch +12 on for the whole song. The IPS was a moment.",
        "Stay off Scene 4. This is not Neurotica."
      ]
    },
    {
      id: "thing", num: "5", title: "Where’s My Thing?", side: "Roll the Bones", preset: "QT-RTB-THING",
      guitar: "PRS", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "First studio instrumental since YYZ. Funky, keyboard-forward, Grammy-nominated.",
      tonality: "Tighter and more percussive than Dreamline. H&K + compressor + 2290, lots of left-hand mute.",
      knobs: [
        { name: "Chief CS3", params: { Sustain: 3.5, Attack: 3.5, Tone: 5.0, Level: 5.0 } },
        { name: "Dual Delay", params: { Mix: "18%" } },
        { name: "Chorus 229T", params: { Mix: "26%" } }
      ],
      scenes: [
        { id: 1, name: "riff / hk - PC37", use: "Funk / riff figures", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 2, name: "break / crunch - PC36", use: "Brighter interjections — still H&K Bright Crunch, not C&C Bright Clean", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 36, slot: "12A", model: "H&K Bright Crunch", ch: 1 } },
        { id: 5, name: "sparkle / crunch - PC36", use: "Sparkle hits with Pitch Fine + octave", bypass: ["Crying Wah", "Exotic Z Boost", "Slapback Delay"], midi: { pc: 36, slot: "12A", model: "H&K Bright Crunch", ch: 1 } },
        { id: 3, name: "solo / lead - PC40", use: "Melodic / fusion-ish leads", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 40, slot: "13B", model: "H&K Hi-Gain", ch: 1 } }
      ],
      steps: [
        "Chief CS3 Sustain 3.5 so the funk pops sit even.",
        "H&K Gain lower than Dreamline. You need pick click. If PC 37 is still thick, send PC 36 for the funkiest figures.",
        "Too much delay smears the funk. Center stays solid for the riff.",
        "Solo: play in the holes — the keys own a lot of this track."
      ]
    },
    {
      id: "wheel", num: "6", title: "The Big Wheel", side: "Roll the Bones", preset: "QT-RTB-WHEEL",
      guitar: "PRS humbucker", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "Mid-album rocker, more openhearted than Neurotica. Guitar supports a big vocal.",
      tonality: "Dreamline’s cousin with more bloom on the chorus and a more singing lead. Scene 4 should feel like a different cabinet (1960BV vs H&K 4×12).",
      knobs: [
        { name: "Copy Dreamline, then", params: { "229T Mix": "+5%", "Hall Mix": "16%" } },
        { name: "Scene 1 Graphic-9 (optional)", params: { "1.6 kHz": "−1.5 dB" } },
        { name: "Solo delay", params: { Time: "1/4", Mix: "25%" } }
      ],
      scenes: [
        { id: 1, name: "verse / hk - PC37", use: "Verses", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 4, name: "chorus / curly - PC27", use: "Choruses", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 3, name: "solo / lead - PC40", use: "Lead", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 40, slot: "13B", model: "H&K Hi-Gain", ch: 1 } }
      ],
      steps: [
        "Copy Dreamline, then open chorus and hall slightly.",
        "Verses: leave space. Restore the 1.6 kHz cut on Scene 3.",
        "Solo: Boost on. Vibrato first, speed second."
      ]
    },
    {
      id: "heresy", num: "7", title: "Heresy", side: "Roll the Bones", preset: "QT-RTB-HERESY",
      guitar: "PRS humbuckers", pickup: "bridge or both", toneVol: "tone 8 / vol 10",
      historical: "Heavier subject, more sober guitar. Atmosphere and weight, not a shred vehicle.",
      tonality: "Darker RTB. Less 2290 sparkle, more Hall, Marshall body earlier than Dreamline. Do not turn it into Witch Hunt.",
      knobs: [
        { name: "Chorus 229T", params: { Mix: "20%", Rate: 1.5 } },
        { name: "Hall", params: { Mix: "18%", Decay: "50%" } }
      ],
      scenes: [
        { id: 6, name: "intro / crunch - PC36", use: "Intro / bridges", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Slapback Delay"], midi: { pc: 36, slot: "12A", model: "H&K Bright Crunch", ch: 1 } },
        { id: 1, name: "verse / hk - PC37", use: "Main verses", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 4, name: "chorus / curly - PC27", use: "Weight where the band lifts", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 27, slot: "09A", model: "Curly Brite Crunch", ch: 1 } },
        { id: 3, name: "solo / lead - PC40", use: "Lead lines", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 40, slot: "13B", model: "H&K Hi-Gain", ch: 1 } }
      ],
      steps: [
        "Humbuckers, tone 8. Let it be darker.",
        "Do not add Phase 95 — that is 1981. Slow the 229T instead.",
        "Delay Mix 20%, Feedback 20%. Repeats should feel like a hall, not a pop slap."
      ]
    },
    {
      id: "ghost", num: "8", title: "Ghost of a Chance", side: "Roll the Bones", preset: "QT-RTB-GHOST",
      guitar: "PRS coil-split / Evans single-coil", pickup: "bridge tap", toneVol: "tone 10 intro; 5 if you cannot split",
      historical: "Lifeson called the opening riff twangy, almost rockabilly. Solo is a favorite, another late-night keeper.",
      tonality: "The most single-coil moment on the album. PC 21 for the intro (open Club & Country, not H&K crunch).",
      miss: "A thick bridge humbucker on PC 37 misses the record. TONEX must show Bright Clean on the intro.",
      knobs: [
        { name: "Scene 2 twang", params: { "Chief CS3 Sustain": 3.5, "229T Mix": "18%", "Delay Mix": "14%" } },
        { name: "Slapback (optional)", params: { Mix: "12%" } },
        { name: "Scene 1 full band", params: { "229T Mix": "26%" } }
      ],
      scenes: [
        { id: 2, name: "intro / bright - PC21", use: "Opening riff and verses — C&C Bright Clean twang", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Chorus 229T"], midi: { pc: 21, slot: "07A", model: "C&C Bright Clean", ch: 1 } },
        { id: 1, name: "band / hk - PC37", use: "Fuller band sections", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 3, name: "solo / lead - PC40", use: "The keeper solo", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 40, slot: "13B", model: "H&K Hi-Gain", ch: 1 } }
      ],
      steps: [
        "Get the intro right before the solo. Pick near the bridge, light nylon pick, almost no palm mute.",
        "Cannot split a humbucker: guitar tone 5, +3 dB at 3.5 kHz, −3 dB at 400 Hz.",
        "Scene 4 off for the intro.",
        "Solo: Boost Gain 3–4, Delay Mix 28%. Play it, do not perfect it."
      ]
    },
    {
      id: "neurotica", num: "9", title: "Neurotica", side: "Roll the Bones", preset: "QT-RTB-NEURO",
      guitar: "PRS humbucker", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "Nervous energy, tighter riffs, more aggressive than Big Wheel. Marshall 20% as a feature.",
      tonality: "The rock end of RTB. Still not a 5150. Default the song on Curly Hi-Gain (PC 32).",
      knobs: [
        { name: "Chorus 229T", params: { Mix: "22%" } },
        { name: "Green 808 (emergency only)", params: { Drive: 1.5, Tone: 6.0, Position: "pre-loop" } }
      ],
      scenes: [
        { id: 4, name: "riff / hi-gain - PC32", use: "Main riff — start here on Curly Hi-Gain", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 32, slot: "10C", model: "Curly Hi-Gain", ch: 1 } },
        { id: 1, name: "verse / hk - PC37", use: "Leaner verses if the riff is too much", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 3, name: "solo / hi-gain - PC32", use: "Lead — stay on Curly Hi-Gain, add boost; not H&K 40", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 32, slot: "10C", model: "Curly Hi-Gain", ch: 1 } }
      ],
      steps: [
        "Default the song on PC 32. This should sound the most amp-like.",
        "Gate can be tighter. The riff wants stop/start.",
        "Solo: Exotic Z Boost Gain 5, Delay Mix 22%. Keep PC 32 so the solo is a boost, not a different cabinet."
      ]
    },
    {
      id: "ybyl", num: "10", title: "You Bet Your Life", side: "Roll the Bones", preset: "QT-RTB-YBYL",
      guitar: "PRS humbucker", pickup: "bridge", toneVol: "tone 10 / vol 10",
      historical: "Album closer, more swagger than Neurotica. Room for Marshall lift.",
      tonality: "Dreamline’s weight + Neurotica’s grit, a bit more chorus on the hook. Last choruses can go PC 32.",
      knobs: [
        { name: "Copy Dreamline", params: { "229T Mix": "30%", "Hall Mix": "15%" } },
        { name: "Delay", params: { "Mix verses": "18%", "Mix outro": "24%", Feedback: "20%" } },
        { name: "Optional Scene 5 double", params: { "Pitch Fine Mix": "18%" } }
      ],
      scenes: [
        { id: 1, name: "verse / hk - PC37", use: "Verses", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } },
        { id: 4, name: "chorus / hi-gain - PC32", use: "Choruses / closer lift — Curly Hi-Gain, not Brite Crunch", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 32, slot: "10C", model: "Curly Hi-Gain", ch: 1 } },
        { id: 3, name: "solo / lead - PC40", use: "Lead / outro", bypass: ["Crying Wah", "Pitch +12", "Pitch Fine", "Slapback Delay"], midi: { pc: 40, slot: "13B", model: "H&K Hi-Gain", ch: 1 } },
        { id: 5, name: "hook / hk - PC37", use: "Optional doubled hook", note: "Pitch Fine Mix 18%", bypass: ["Crying Wah", "Exotic Z Boost", "Pitch +12", "Slapback Delay"], midi: { pc: 37, slot: "12B", model: "H&K Crunch", ch: 1 } }
      ],
      steps: [
        "Copy Dreamline. Scene 4 PC 32 — biggest electric guitar on the album.",
        "Outro delay tail on the last chord, not infinite 2290 repeats.",
        "End on Scene 4, then roll QC Volume rather than killing the delay with the gate."
      ]
    }
  ]
};
