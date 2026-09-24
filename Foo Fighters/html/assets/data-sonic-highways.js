window.ALBUM = {
  "id": "sh",
  "title": "Sonic Highways",
  "year": 2014,
  "theme": "sh",
  "art": "assets/art/sonic-highways.jpg",
  "cablingMode": "qc",
  "recorded": "Eight US studios (one song each) — Butch Vig; HBO Sonic Highways",
  "presetBase": "FF-SH-BASE",
  "onLoad": "Scene 1 · merge A 100",
  "guitars": "Trini Lopez / electrics (Grohl), Shiflett / Smear layers; guests include Gary Clark Jr., Joe Walsh, Zac Brown, Ben Gibbard.",
  "amps": "Same DNA as Wasting Light — US TWN Normal (ToneMaster), UK C30 TopBoost (AC30), Rols Jazz CH120 (JC-120) — plus Dual Delay / Hall for each city’s room.",
  "effects": "Rodent Drive, Boost/OD250, Digital Delay, Dual Delay, Plate, Hall. No Vintage Chorus. City air = Scene 6.",
  "voicing": "WL architecture, wetter post-FX. Delay can be writing (Outside, I Am a River). Guest leads = Scene 3 character, not a new rhythm amp.",
  "cabling": "Guitar → QC Input 1 → pre-FX → Amp/Cab split → post-FX → Out 1/2. FRFR / studio. No TONEX required.",
  "baseBypass": [
    "Crying Wah",
    "Rodent Drive",
    "Exotic Z Boost",
    "OD250",
    "Dual Delay",
    "Hall"
  ],
  "baseMerge": {
    "a": 100,
    "b": 0,
    "c": 0
  },
  "baseChain": [
    {
      "name": "In",
      "type": "io"
    },
    {
      "name": "Simple Gate",
      "type": "util"
    },
    {
      "name": "Crying Wah",
      "type": "wah"
    },
    {
      "name": "Rodent Drive",
      "type": "od"
    },
    {
      "name": "Exotic Z Boost",
      "type": "od"
    },
    {
      "name": "OD250",
      "type": "od"
    },
    {
      "type": "split",
      "label": "ToneMaster / AC30 / JC-120",
      "aMix": "TWN",
      "bMix": "AC30",
      "cMix": "JC-120",
      "a": [
        {
          "name": "US TWN Normal",
          "type": "amp"
        },
        {
          "name": "212 US TWN C12Q 00s",
          "type": "cab"
        }
      ],
      "b": [
        {
          "name": "UK C30 TopBoost",
          "type": "amp"
        },
        {
          "name": "212 UK C30 GB ’69",
          "type": "cab"
        }
      ],
      "c": [
        {
          "name": "Rols Jazz CH120",
          "type": "amp"
        },
        {
          "name": "212 Rols Jazz ’87",
          "type": "cab"
        }
      ]
    },
    {
      "name": "Digital Delay",
      "type": "delay"
    },
    {
      "name": "Dual Delay",
      "type": "delay"
    },
    {
      "name": "Plate",
      "type": "verb"
    },
    {
      "name": "Hall",
      "type": "verb"
    },
    {
      "name": "Graphic-9",
      "type": "eq"
    },
    {
      "name": "Out",
      "type": "io"
    }
  ],
  "baseKnobs": [
    {
      "name": "US TWN Normal (ToneMaster stand-in)",
      "params": {
        "Volume": 5.8,
        "Bass": 5.0,
        "Mid": 6.5,
        "Treble": 6.0,
        "Bright": "Off",
        "Output": "0 dB"
      }
    },
    {
      "name": "UK C30 TopBoost (AC30)",
      "params": {
        "Volume": 6.0,
        "Bass": 5.0,
        "Treble": 6.5,
        "Tone Cut": 4.0,
        "Boost": "Hot",
        "Output": "0 dB"
      }
    },
    {
      "name": "Rols Jazz CH120 (JC-120)",
      "params": {
        "Volume": 5.5,
        "Bright": "On",
        "Chorus": "Off"
      }
    },
    {
      "name": "Rodent Drive",
      "params": {
        "Distortion": 3.5,
        "Filter": 6.0,
        "Volume": 5.5
      }
    },
    {
      "name": "Exotic Z Boost",
      "params": {
        "Gain": 3.5,
        "Bass": 5.0,
        "Treble": 5.5,
        "Volume": 5.0
      }
    },
    {
      "name": "OD250",
      "params": {
        "Gain": 3.0,
        "Volume": 5.0
      }
    },
    {
      "name": "Digital Delay",
      "params": {
        "Mix": "16%",
        "Time": "dotted 1/8",
        "Feedback": "20%",
        "High Pass": "120 Hz",
        "Low Pass": "8 kHz",
        "Mod Depth": "10%",
        "Sync": "On"
      }
    },
    {
      "name": "Dual Delay",
      "params": {
        "Time L": "1/4",
        "Time R": "dotted 1/8",
        "Feedback L/R": "18% linked",
        "Mix": "18%",
        "Cross Feedback": "15%",
        "High Pass": "120 Hz",
        "Low Pass": "3.5 kHz",
        "Mod Depth": "10%",
        "Sync": "On"
      }
    },
    {
      "name": "Plate",
      "params": {
        "Mix": "12%",
        "Decay": "40%",
        "Pre-delay": "15 ms"
      }
    },
    {
      "name": "Hall",
      "params": {
        "Mix": "14%",
        "Decay": "48%",
        "Pre-delay": "25 ms"
      }
    },
    {
      "name": "Graphic-9",
      "params": {
        "HPF": "90 Hz",
        "250 Hz": "−2 dB",
        "1 kHz": "+2 dB"
      }
    }
  ],
  "ampSlots": [
    {
      "path": "A",
      "block": "US TWN Normal",
      "cab": "212 US TWN C12Q 00s",
      "job": "ToneMaster / Grohl default"
    },
    {
      "path": "B",
      "block": "UK C30 TopBoost",
      "cab": "212 UK C30 GB ’69",
      "job": "AC30 / city sparkle"
    },
    {
      "path": "C",
      "block": "Rols Jazz CH120",
      "cab": "212 Rols Jazz ’87",
      "job": "JC-120 / Pat / room blend"
    }
  ],
  "sharedScenes": [
    {
      "id": 1,
      "name": "rhythm / tonemaster",
      "use": "Default",
      "note": "Merge A 100",
      "bypass": [
        "Crying Wah",
        "Rodent Drive",
        "Exotic Z Boost",
        "OD250",
        "Dual Delay",
        "Hall"
      ],
      "merge": {
        "a": 100,
        "b": 0,
        "c": 0
      }
    },
    {
      "id": 2,
      "name": "chime / ac30",
      "use": "City sparkle",
      "bypass": [
        "Crying Wah",
        "Rodent Drive",
        "Exotic Z Boost",
        "OD250",
        "Dual Delay",
        "Hall"
      ],
      "merge": {
        "a": 0,
        "b": 100,
        "c": 0
      }
    },
    {
      "id": 3,
      "name": "solo / boost",
      "use": "Leads",
      "note": "Delay Mix 24%",
      "bypass": [
        "Crying Wah",
        "Rodent Drive",
        "Dual Delay",
        "Hall"
      ],
      "merge": {
        "a": 100,
        "b": 0,
        "c": 0
      }
    },
    {
      "id": 4,
      "name": "blend / double",
      "use": "Stacked",
      "bypass": [
        "Crying Wah",
        "Rodent Drive",
        "Exotic Z Boost",
        "OD250",
        "Dual Delay",
        "Hall"
      ],
      "merge": {
        "a": 55,
        "b": 45,
        "c": 0
      }
    },
    {
      "id": 5,
      "name": "grit / rodent",
      "use": "Rodent beds",
      "bypass": [
        "Crying Wah",
        "Exotic Z Boost",
        "OD250",
        "Dual Delay",
        "Hall"
      ],
      "merge": {
        "a": 70,
        "b": 0,
        "c": 30
      }
    },
    {
      "id": 6,
      "name": "space / room",
      "use": "City air",
      "note": "Dual Delay + Hall on",
      "bypass": [
        "Crying Wah",
        "Rodent Drive",
        "Exotic Z Boost",
        "OD250"
      ],
      "merge": {
        "a": 50,
        "b": 0,
        "c": 50
      }
    }
  ],
  "songs": [
    {
      "id": "nothing",
      "num": "1",
      "title": "Something from Nothing",
      "side": "Chicago · Electrical Audio",
      "preset": "FF-SH-NOTHING",
      "guitar": "Trini Lopez",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Electrical Audio / Albini room energy — dry attack, then big lift.",
      "tonality": "Start dry on Scene 1; Scene 6 adds Hall for the climax — don’t live there.",
      "miss": "PV-505 on the verses.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 6.0,
            "Bass": 5.0,
            "Mid": 6.5,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "Hall (climax)",
          "params": {
            "Mix": "18%",
            "Decay": "50%",
            "Pre-delay": "25 ms"
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Main riff",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 4,
          "name": "blend / double",
          "use": "Chorus stacks",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 55,
            "b": 45,
            "c": 0
          }
        },
        {
          "id": 6,
          "name": "space / room",
          "use": "Climactic space",
          "note": "Hall Mix 18%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay"
          ],
          "merge": {
            "a": 50,
            "b": 0,
            "c": 50
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Solo",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        }
      ],
      "steps": [
        "Scene 1 dry riff.",
        "Scene 4 stacks.",
        "Scene 6 for climax air.",
        "Solo Scene 3."
      ]
    },
    {
      "id": "feast",
      "num": "2",
      "title": "The Feast and the Famine",
      "side": "Arlington, VA · Inner Ear",
      "preset": "FF-SH-FEAST",
      "guitar": "Trini / punk HB",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Inner Ear punk urgency — Don Zientara’s room, dry and fast.",
      "tonality": "Delay Mix ≤14% on Scene 1. Speed and attack matter more than verb.",
      "miss": "Dual Delay wash on the verse.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 6.2,
            "Bass": 4.8,
            "Mid": 6.8,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "Digital Delay",
          "params": {
            "Mix": "12%",
            "Time": "1/4",
            "Sync": "On"
          }
        },
        {
          "name": "Rodent Drive",
          "params": {
            "Distortion": 3.0,
            "Filter": 6.0
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Verses / chorus",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 5,
          "name": "grit / rodent",
          "use": "Extra grit beds",
          "bypass": [
            "Crying Wah",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 75,
            "b": 0,
            "c": 25
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Solo fills",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        }
      ],
      "steps": [
        "Keep it dry.",
        "Scene 5 for grit beds.",
        "Solo Scene 3."
      ]
    },
    {
      "id": "cong",
      "num": "3",
      "title": "Congregation",
      "side": "Nashville · Southern Ground",
      "preset": "FF-SH-CONG",
      "guitar": "Trini + AC30",
      "pickup": "bridge / neck",
      "toneVol": "tone 8–10 / vol 10",
      "historical": "Southern Ground air + Zac Brown devil-pickin’ color.",
      "tonality": "AC30 welcome on intros. Body still ToneMaster.",
      "miss": "JC chorus on for the whole song.",
      "knobs": [
        {
          "name": "UK C30 TopBoost",
          "params": {
            "Volume": 5.5,
            "Bass": 5.0,
            "Treble": 6.5,
            "Tone Cut": 4.0,
            "Boost": "Hot",
            "Output": "0 dB"
          }
        },
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 5.8,
            "Bass": 5.0,
            "Mid": 6.5,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        }
      ],
      "scenes": [
        {
          "id": 2,
          "name": "chime / ac30",
          "use": "Intro / sparkle",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 20,
            "b": 80,
            "c": 0
          }
        },
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Body",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 4,
          "name": "blend / double",
          "use": "Chorus",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 55,
            "b": 45,
            "c": 0
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Leads",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 70,
            "b": 30,
            "c": 0
          }
        }
      ],
      "steps": [
        "Scene 2 intro.",
        "Scene 1 body.",
        "Scene 4 chorus.",
        "Leads Scene 3."
      ]
    },
    {
      "id": "witness",
      "num": "4",
      "title": "What Did I Do? / God as My Witness",
      "side": "Austin · Studio 6A",
      "preset": "FF-SH-WITNESS",
      "guitar": "Trini + Gary Clark Jr. lead",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Two-part Austin epic — Gary Clark Jr. guest lead.",
      "tonality": "Part 1 dry/punchy; part 2 bigger delay. Optional Rodent/wah on guest grit.",
      "miss": "One scene for the whole medley.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 5.8,
            "Bass": 5.0,
            "Mid": 6.5,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "Digital Delay (lead)",
          "params": {
            "Mix": "26%",
            "Time": "1/4",
            "Feedback": "22%",
            "Sync": "On"
          }
        },
        {
          "name": "Rodent Drive (optional)",
          "params": {
            "Distortion": 3.5,
            "Filter": 5.5
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "What Did I Do? body",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 6,
          "name": "space / room",
          "use": "Transition / space",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 50,
            "b": 20,
            "c": 30
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "God as My Witness lead",
          "note": "Delay Mix 26%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 5,
          "name": "grit / rodent",
          "use": "Optional Clark grit",
          "bypass": [
            "Crying Wah",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 60,
            "b": 0,
            "c": 40
          }
        }
      ],
      "steps": [
        "Scene 1 for part one.",
        "Scene 6 into the second half.",
        "Lead Scene 3.",
        "Optional Scene 5 grit."
      ]
    },
    {
      "id": "outside",
      "num": "5",
      "title": "Outside",
      "side": "Joshua Tree · Rancho de la Luna",
      "preset": "FF-SH-OUTSIDE",
      "guitar": "Trini + Joe Walsh",
      "pickup": "neck / bridge",
      "toneVol": "tone 8 / vol 10",
      "historical": "Desert air at Rancho — Joe Walsh guest. Dual Delay + Hall are the city.",
      "tonality": "Wettest SH cut. AC30 verses; don’t use dry WL Scene 1 for the whole song.",
      "miss": "Dry ToneMaster only with Plate Mix 8%.",
      "knobs": [
        {
          "name": "UK C30 TopBoost",
          "params": {
            "Volume": 5.0,
            "Bass": 5.0,
            "Treble": 6.5,
            "Tone Cut": 4.5,
            "Boost": "Hot",
            "Output": "0 dB"
          }
        },
        {
          "name": "Dual Delay",
          "params": {
            "Time L": "1/4",
            "Time R": "dotted 1/8",
            "Mix": "20%",
            "Sync": "On"
          }
        },
        {
          "name": "Hall",
          "params": {
            "Mix": "16%",
            "Decay": "52%",
            "Pre-delay": "30 ms"
          }
        },
        {
          "name": "Digital Delay (solo)",
          "params": {
            "Mix": "28%",
            "Time": "dotted 1/8",
            "Sync": "On"
          }
        }
      ],
      "scenes": [
        {
          "id": 2,
          "name": "chime / ac30",
          "use": "Open verses",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 25,
            "b": 75,
            "c": 0
          }
        },
        {
          "id": 6,
          "name": "space / room",
          "use": "Rancho space",
          "note": "Dual Delay + Hall",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 40,
            "b": 30,
            "c": 30
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Solo / Walsh character",
          "note": "Delay Mix 28%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Hall"
          ],
          "merge": {
            "a": 60,
            "b": 40,
            "c": 0
          }
        }
      ],
      "steps": [
        "Scene 2 verses.",
        "Scene 6 for Rancho air.",
        "Solo Scene 3 — leave Dual Delay on if it sings."
      ]
    },
    {
      "id": "clear",
      "num": "6",
      "title": "In the Clear",
      "side": "New Orleans · Preservation Hall",
      "preset": "FF-SH-CLEAR",
      "guitar": "Trini Lopez",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Preservation Hall horns on the record — leave guitar mid-forward.",
      "tonality": "Polite Hall. Don’t wash out the brass on A/B.",
      "miss": "Hall Mix 30%+ under the horn arrangement.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 5.5,
            "Bass": 5.0,
            "Mid": 6.8,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "Hall",
          "params": {
            "Mix": "14%",
            "Decay": "45%",
            "Pre-delay": "20 ms"
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Rhythm",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 4,
          "name": "blend / double",
          "use": "Doubles",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 55,
            "b": 45,
            "c": 0
          }
        },
        {
          "id": 6,
          "name": "space / room",
          "use": "Room",
          "note": "Hall Mix 14%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay"
          ],
          "merge": {
            "a": 60,
            "b": 0,
            "c": 40
          }
        }
      ],
      "steps": [
        "Mid-forward so horns own the air.",
        "Scene 6 Hall polite.",
        "Doubles Scene 4."
      ]
    },
    {
      "id": "sub",
      "num": "7",
      "title": "Subterranean",
      "side": "Seattle · Robert Lang",
      "preset": "FF-SH-SUB",
      "guitar": "Trini Lopez",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Northwest weight at Robert Lang — slightly darker, Rodent optional on beds.",
      "tonality": "Heavier than Congregation; still not White Limo.",
      "miss": "Bright On with Volume too high on rhythm.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 6.0,
            "Bass": 5.0,
            "Mid": 6.0,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "Rodent Drive",
          "params": {
            "Distortion": 3.0,
            "Filter": 6.0
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Main",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 5,
          "name": "grit / rodent",
          "use": "Grit layers",
          "bypass": [
            "Crying Wah",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 70,
            "b": 0,
            "c": 30
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Solo",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 6,
          "name": "space / room",
          "use": "Atmosphere beds",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 40,
            "b": 20,
            "c": 40
          }
        }
      ],
      "steps": [
        "Slightly darker Mid; Bright Off.",
        "Scene 5 grit.",
        "Scene 6 atmosphere."
      ]
    },
    {
      "id": "river",
      "num": "8",
      "title": "I Am a River",
      "side": "New York · Magic Shop",
      "preset": "FF-SH-RIVER",
      "guitar": "Trini Lopez",
      "pickup": "bridge / neck",
      "toneVol": "tone 8–10 / vol 10",
      "historical": "Magic Shop closer — strings on the record; guitar wide and patient.",
      "tonality": "Dual Delay + Hall are the river. Survive under strings with +2 dB @ 1 kHz.",
      "miss": "Maxing Hall Decay past 60% and disappearing.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 5.2,
            "Bass": 5.0,
            "Mid": 6.8,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "UK C30 TopBoost",
          "params": {
            "Volume": 5.0,
            "Bass": 5.0,
            "Treble": 6.5,
            "Tone Cut": 4.0,
            "Boost": "Hot",
            "Output": "0 dB"
          }
        },
        {
          "name": "Dual Delay",
          "params": {
            "Mix": "22%",
            "Time L": "1/4",
            "Time R": "dotted 1/8",
            "Sync": "On"
          }
        },
        {
          "name": "Hall",
          "params": {
            "Mix": "18%",
            "Decay": "55%",
            "Pre-delay": "28 ms"
          }
        },
        {
          "name": "Digital Delay (solo)",
          "params": {
            "Mix": "26%",
            "Time": "dotted 1/8",
            "Sync": "On"
          }
        }
      ],
      "scenes": [
        {
          "id": 2,
          "name": "chime / ac30",
          "use": "Cleaner figures",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 30,
            "b": 70,
            "c": 0
          }
        },
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Body",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Dual Delay",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 6,
          "name": "space / room",
          "use": "River space",
          "note": "Dual Delay 22% Hall 18%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 45,
            "b": 25,
            "c": 30
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Solo",
          "note": "Boost, Delay Mix 26%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Hall"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        }
      ],
      "steps": [
        "Graphic-9 +2 dB @ 1 kHz under strings.",
        "Scene 6 is the river.",
        "Hall Decay ~55% max.",
        "Solo Scene 3."
      ]
    }
  ]
};
