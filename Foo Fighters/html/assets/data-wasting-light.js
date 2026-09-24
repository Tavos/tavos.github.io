window.ALBUM = {
  "id": "wl",
  "title": "Wasting Light",
  "year": 2011,
  "theme": "wl",
  "art": "assets/art/wasting-light.jpg",
  "cablingMode": "qc",
  "recorded": "Grohl garage / Studio 606, Van Nuys — analog tape, Butch Vig",
  "presetBase": "FF-WL-BASE",
  "onLoad": "Scene 1 · merge A 100",
  "guitars": "Gibson Trini Lopez (Grohl), Les Paul / Tele (Shiflett), JC-120 + Peavey / baritone (Smear).",
  "amps": "Historical: Fender ToneMaster, Vox AC30, Roland JC-120, Peavey 6505. Stock QC: US TWN Normal, UK C30 TopBoost, Rols Jazz CH120, optional PV-505 Lead (White Limo).",
  "effects": "Rodent Drive (RAT), Exotic Z Boost, OD250, Digital Delay, Plate. No Vintage Chorus. Width from amp merge blends.",
  "voicing": "Analog garage: dry, touch-sensitive, loud. Default Path A (ToneMaster). Blend B/C for layers. White Limo is the grit outlier.",
  "cabling": "Guitar → QC Input 1 → pre-FX → Amp/Cab split → post-FX → Out 1/2. FRFR / studio. No TONEX required.",
  "baseBypass": [
    "Crying Wah",
    "Rodent Drive",
    "Exotic Z Boost",
    "OD250"
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
      "name": "Plate",
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
        "Volume": 6.0,
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
        "Distortion": 4.0,
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
        "Mix": "12%",
        "Time": "1/4",
        "Feedback": "18%",
        "High Pass": "120 Hz",
        "Low Pass": "8 kHz",
        "Mod Depth": "8%",
        "Sync": "On"
      }
    },
    {
      "name": "Plate",
      "params": {
        "Mix": "10%",
        "Decay": "35%",
        "Pre-delay": "15 ms"
      }
    },
    {
      "name": "Graphic-9",
      "params": {
        "HPF": "90 Hz",
        "250 Hz": "−2 dB",
        "1 kHz": "+2 dB",
        "4 kHz": "−1 dB if icy"
      }
    }
  ],
  "ampSlots": [
    {
      "path": "A",
      "block": "US TWN Normal",
      "cab": "212 US TWN C12Q 00s",
      "job": "ToneMaster / Grohl default rhythm"
    },
    {
      "path": "B",
      "block": "UK C30 TopBoost",
      "cab": "212 UK C30 GB ’69",
      "job": "AC30 / Shifty chime"
    },
    {
      "path": "C",
      "block": "Rols Jazz CH120",
      "cab": "212 Rols Jazz ’87",
      "job": "JC-120 / Pat texture"
    },
    {
      "path": "C*",
      "block": "PV-505 Lead",
      "cab": "412 Brit 60B GB 90s",
      "job": "White Limo / Smear grit (song chain)"
    }
  ],
  "sharedScenes": [
    {
      "id": 1,
      "name": "rhythm / tonemaster",
      "use": "Default Grohl rhythm",
      "note": "Merge A 100",
      "bypass": [
        "Crying Wah",
        "Rodent Drive",
        "Exotic Z Boost",
        "OD250"
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
      "use": "Shifty / arpeggio",
      "note": "Merge B 100",
      "bypass": [
        "Crying Wah",
        "Rodent Drive",
        "Exotic Z Boost",
        "OD250"
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
      "note": "Boost + OD250, Delay Mix 22%",
      "bypass": [
        "Crying Wah",
        "Rodent Drive"
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
      "use": "Studio double",
      "note": "A 60 / B 40",
      "bypass": [
        "Crying Wah",
        "Rodent Drive",
        "Exotic Z Boost",
        "OD250"
      ],
      "merge": {
        "a": 60,
        "b": 40,
        "c": 0
      }
    },
    {
      "id": 5,
      "name": "grit / rodent",
      "use": "Heavier beds",
      "note": "Rodent on",
      "bypass": [
        "Crying Wah",
        "Exotic Z Boost",
        "OD250"
      ],
      "merge": {
        "a": 80,
        "b": 0,
        "c": 20
      }
    },
    {
      "id": 6,
      "name": "space / jc",
      "use": "Pat texture / ambient",
      "note": "Delay/Plate up",
      "bypass": [
        "Crying Wah",
        "Rodent Drive",
        "Exotic Z Boost",
        "OD250"
      ],
      "merge": {
        "a": 30,
        "b": 0,
        "c": 70
      }
    }
  ],
  "songs": [
    {
      "id": "bridge",
      "num": "1",
      "title": "Bridge Burning",
      "side": "Wasting Light",
      "preset": "FF-WL-BRIDGE",
      "guitar": "Trini Lopez / HB",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Album opener — stacked power chords tracked to analog tape in Grohl’s garage with Butch Vig.",
      "tonality": "Dry ToneMaster punch. Chords must stay chords. Width comes from merge doubles, not chorus.",
      "miss": "Rodent on the main riff or PV-505 as default rhythm.",
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
          "name": "Digital Delay",
          "params": {
            "Mix": "10%",
            "Time": "1/4",
            "Sync": "On"
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Main riff / choruses",
          "note": "Delay Mix 10%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          },
          "knobs": [
            {
              "name": "Digital Delay",
              "params": {
                "Mix": "10%",
                "Time": "1/4",
                "Feedback": "18%",
                "High Pass": "120 Hz",
                "Low Pass": "8 kHz",
                "Mod Depth": "8%",
                "Sync": "On"
              }
            }
          ]
        },
        {
          "id": 4,
          "name": "blend / double",
          "use": "Doubled hooks",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 60,
            "b": 40,
            "c": 0
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Lead fills",
          "note": "Boost on",
          "bypass": [
            "Crying Wah",
            "Rodent Drive"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          },
          "knobs": [
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
              "name": "Digital Delay",
              "params": {
                "Mix": "22%",
                "Time": "1/4",
                "Feedback": "20%",
                "High Pass": "120 Hz",
                "Low Pass": "8 kHz",
                "Mod Depth": "10%",
                "Sync": "On"
              }
            }
          ]
        }
      ],
      "steps": [
        "Duplicate FF-WL-BASE. Bridge HB, vol 10.",
        "Set Volume so open E chords stay chords.",
        "Scene 1 Delay Mix ≤12%.",
        "Scene 4 for stacked hooks — not more Gain."
      ]
    },
    {
      "id": "rope",
      "num": "2",
      "title": "Rope",
      "side": "Wasting Light",
      "preset": "FF-WL-ROPE",
      "guitar": "Trini / Les Paul",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "onLoad": "Scene 2 · intro delay",
      "historical": "Single centerpiece. Iconic delayed intro — Butch Vig synced analog delay to the click by hand (drum machine + shake tambourine) so trails overlap the angular riff. Then palm-muted verses, hook chorus, featured solo.",
      "tonality": "Intro is Television / Mission of Burma angular chords with trailing delay that must still be singing when the next hit lands. Verses A/B better with UK C30 TopBoost in the blend (Path B) under the palm mutes — not ToneMaster alone. Solo needs boost + a little delay, not more amp gain.",
      "miss": "Starting on Scene 1 with Delay Mix 12% — you skipped the intro that makes Rope Rope. Also: leaving intro Feedback so low the trail dies before the next chord. Verses on A 100 only (no AC30) sound thinner against the record.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 5.5,
            "Bass": 4.8,
            "Mid": 6.5,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "Digital Delay (intro Scene 2)",
          "params": {
            "Mix": "34%",
            "Time": "300 ms",
            "Feedback": "50%",
            "High Pass": "120 Hz",
            "Low Pass": "5.5 kHz",
            "Mod Depth": "40%",
            "Sync": "Off"
          }
        },
        {
          "name": "Digital Delay (verses Scene 1)",
          "params": {
            "Mix": "12%",
            "Time": "1/4",
            "Feedback": "18%",
            "Sync": "On"
          }
        },
        {
          "name": "Exotic Z Boost (solo)",
          "params": {
            "Gain": 4.0,
            "Treble": 5.5,
            "Volume": 5.0
          }
        },
        {
          "name": "Digital Delay (solo Scene 3)",
          "params": {
            "Mix": "22%",
            "Time": "1/4",
            "Feedback": "20%",
            "Sync": "On"
          }
        }
      ],
      "scenes": [
        {
          "id": 2,
          "name": "intro / delay",
          "use": "Iconic delayed intro — trails overlap the riff",
          "note": "Delay Mix 34% · 300 ms · Sync Off · Feedback 50% · Mod Depth 40% · Plate off",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250",
            "Plate"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          },
          "knobs": [
            {
              "name": "Digital Delay",
              "params": {
                "Mix": "34%",
                "Time": "300 ms",
                "Feedback": "50%",
                "High Pass": "120 Hz",
                "Low Pass": "5.5 kHz",
                "Mod Depth": "40%",
                "Sync": "Off"
              }
            }
          ]
        },
        {
          "id": 1,
          "name": "rhythm / ac30",
          "use": "Verses / palm mutes — AC30 + ToneMaster blend",
          "note": "Merge A 40 / B 60 · Delay Mix 12%, Feedback 18%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 40,
            "b": 60,
            "c": 0
          },
          "knobs": [
            {
              "name": "UK C30 TopBoost",
              "params": {
                "Volume": 5.8,
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
                "Volume": 5.2,
                "Bass": 4.8,
                "Mid": 6.5,
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
                "Feedback": "18%",
                "High Pass": "120 Hz",
                "Low Pass": "8 kHz",
                "Mod Depth": "8%",
                "Sync": "On"
              }
            }
          ]
        },
        {
          "id": 4,
          "name": "blend / double",
          "use": "Chorus lift",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 55,
            "b": 45,
            "c": 0
          },
          "knobs": [
            {
              "name": "Digital Delay",
              "params": {
                "Mix": "14%",
                "Time": "1/4",
                "Feedback": "18%",
                "High Pass": "120 Hz",
                "Low Pass": "8 kHz",
                "Mod Depth": "8%",
                "Sync": "On"
              }
            }
          ]
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Solo",
          "note": "Boost Gain 4, Delay Mix 22%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          },
          "knobs": [
            {
              "name": "Exotic Z Boost",
              "params": {
                "Gain": 4.0,
                "Bass": 5.0,
                "Treble": 5.5,
                "Volume": 5.0
              }
            },
            {
              "name": "Digital Delay",
              "params": {
                "Mix": "22%",
                "Time": "1/4",
                "Feedback": "20%",
                "High Pass": "120 Hz",
                "Low Pass": "8 kHz",
                "Mod Depth": "10%",
                "Sync": "On"
              }
            }
          ]
        }
      ],
      "steps": [
        "On load: Scene 2. Digital Delay Sync Off, Time 300 ms, Mix 34%, Feedback 50%, High Pass 120 Hz, Mod Depth 40%. Plate off — the delay is the room.",
        "Play the angular intro grips (Bm7sus → D territory). Let each hit still be echoing when the next lands — that overlap is the part.",
        "Scene 1 verses: Merge A 40 / B 60 (UK C30 TopBoost + 212 UK C30 GB ’69 on) — AC30-forward blend A/Bs better under palm mutes than ToneMaster alone. Delay Mix 12%, Feedback 18%, Time 1/4.",
        "Scene 4 for chorus width (A 55 / B 45).",
        "Solo: Scene 3 — Boost before OD250 if you need more. Delay Mix 22%."
      ],
      "notes": [
        "Intro delay is free-running 300 ms (Sync Off) with heavier Mod Depth — dialed against the record, not tempo-synced. Other scenes keep Sync On / their own delay values."
      ]
    },
    {
      "id": "rosemary",
      "num": "3",
      "title": "Dear Rosemary",
      "side": "Wasting Light",
      "preset": "FF-WL-ROSEMARY",
      "guitar": "Trini + LP layers",
      "pickup": "bridge",
      "toneVol": "tone 9 / vol 10",
      "historical": "Bob Mould energy — mid-forward grind with AC30 color on layers.",
      "tonality": "More mid aggression than Bridge Burning. Rodent light on solo grit only.",
      "miss": "Scooping 1 kHz under the vocal.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 6.2,
            "Bass": 5.0,
            "Mid": 7.0,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "UK C30 TopBoost",
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
          "name": "Rodent Drive (solo)",
          "params": {
            "Distortion": 3.5,
            "Filter": 6.0,
            "Volume": 5.5
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Main rhythm",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
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
          "use": "AC30 layers",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 20,
            "b": 80,
            "c": 0
          }
        },
        {
          "id": 3,
          "name": "solo / grit",
          "use": "Solo / Mould-ish",
          "note": "Rodent on",
          "bypass": [
            "Crying Wah",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        }
      ],
      "steps": [
        "Mid 7.0 on TWN for Mould bark.",
        "Scene 2 for AC30 sparkle layers.",
        "Solo Scene 3 with Rodent Distortion 3.5."
      ]
    },
    {
      "id": "limo",
      "num": "4",
      "title": "White Limo",
      "side": "Wasting Light",
      "preset": "FF-WL-LIMO",
      "guitar": "Trini / LP",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Motörhead garage outlier — Rodent and Peavey 6505 / high grit territory.",
      "tonality": "Grit first. Path C is PV-505 Lead on this song’s chain.",
      "miss": "Playing the whole song on clean US TWN with no Rodent.",
      "knobs": [
        {
          "name": "PV-505 Lead",
          "params": {
            "Gain": 5.5,
            "Bass": 5.0,
            "Mid": 6.0,
            "Treble": 5.5,
            "Presence": 5.5,
            "Master": 6.0
          }
        },
        {
          "name": "Rodent Drive",
          "params": {
            "Distortion": 5.0,
            "Filter": 5.5,
            "Volume": 5.5
          }
        },
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 6.5,
            "Bass": 5.0,
            "Mid": 6.0,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        }
      ],
      "scenes": [
        {
          "id": 5,
          "name": "grit / rodent",
          "use": "Main riff",
          "note": "Rodent on · A50/C50",
          "bypass": [
            "Crying Wah",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 50,
            "b": 0,
            "c": 50
          }
        },
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "If 6505 is too much — TWN + Rodent",
          "bypass": [
            "Crying Wah",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Solo",
          "note": "Rodent Distortion 5",
          "bypass": [
            "Crying Wah"
          ],
          "merge": {
            "a": 40,
            "b": 0,
            "c": 60
          }
        }
      ],
      "steps": [
        "Use this song’s PV-505 chain (Path C).",
        "Scene 5 is the default riff.",
        "Filter 5.5 keeps RAT from ice-picking."
      ],
      "notes": [
        "Path C = PV-505 Lead → 412 Brit 60B GB 90s on this preset only."
      ],
      "chain": [
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
          "label": "ToneMaster / AC30 / PV-505",
          "aMix": "TWN",
          "bMix": "AC30",
          "cMix": "6505",
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
              "name": "PV-505 Lead",
              "type": "amp"
            },
            {
              "name": "412 Brit 60B GB 90s",
              "type": "cab"
            }
          ]
        },
        {
          "name": "Digital Delay",
          "type": "delay"
        },
        {
          "name": "Plate",
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
      "eq": "Graphic-9: HPF 100 Hz, +1 dB @ 1 kHz, −2 dB @ 4 kHz."
    },
    {
      "id": "arlandria",
      "num": "5",
      "title": "Arlandria",
      "side": "Wasting Light",
      "preset": "FF-WL-ARLANDRIA",
      "guitar": "Trini Lopez",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Big chorus hooks with dynamic verses — classic WL stack.",
      "tonality": "Verse restraint, chorus blend. Don’t ride Volume — ride Scene 4.",
      "miss": "Same merge for verse and chorus.",
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
          "name": "UK C30 TopBoost (chorus)",
          "params": {
            "Volume": 5.5,
            "Bass": 5.0,
            "Treble": 6.5,
            "Tone Cut": 4.0,
            "Boost": "Hot",
            "Output": "0 dB"
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Verses",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
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
          "use": "Choruses",
          "note": "A55/B45",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
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
          "use": "Solo",
          "bypass": [
            "Crying Wah",
            "Rodent Drive"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        }
      ],
      "steps": [
        "Scene 1 verses dry.",
        "Scene 4 choruses — blend, not more Distortion.",
        "Solo Scene 3."
      ]
    },
    {
      "id": "these",
      "num": "6",
      "title": "These Days",
      "side": "Wasting Light",
      "preset": "FF-WL-THESE",
      "guitar": "Trini / AC30 feel",
      "pickup": "neck or bridge",
      "toneVol": "tone 8 / vol 9–10",
      "historical": "More open and melodic — lower Gain, AC30 color.",
      "tonality": "Less garage crush than Rope. Let chords bloom.",
      "miss": "Full WL Volume 6.5 on the intro.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 4.5,
            "Bass": 5.0,
            "Mid": 6.5,
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
          "name": "Plate",
          "params": {
            "Mix": "18%",
            "Decay": "40%"
          }
        }
      ],
      "scenes": [
        {
          "id": 2,
          "name": "chime / ac30",
          "use": "Intro / verses",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
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
          "use": "Bigger choruses",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 6,
          "name": "space / jc",
          "use": "Outro air",
          "note": "Plate Mix 18%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 40,
            "b": 0,
            "c": 60
          }
        }
      ],
      "steps": [
        "Start Scene 2 — lower Gain.",
        "Chorus: Scene 1.",
        "Outro Scene 6 — Plate up, not Hall (WL template has Plate only)."
      ]
    },
    {
      "id": "back",
      "num": "7",
      "title": "Back & Forth",
      "side": "Wasting Light",
      "preset": "FF-WL-BACK",
      "guitar": "Trini Lopez",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Driving midtempo rock — ToneMaster home base.",
      "tonality": "Straightforward WL rhythm. Doubles for hooks.",
      "miss": "Adding Vintage Chorus for width.",
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
          "name": "Digital Delay",
          "params": {
            "Mix": "12%",
            "Time": "1/4",
            "Sync": "On"
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Body",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
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
          "use": "Hook doubles",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 60,
            "b": 40,
            "c": 0
          }
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Solo",
          "bypass": [
            "Crying Wah",
            "Rodent Drive"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        }
      ],
      "steps": [
        "Scene 1 body.",
        "Scene 4 hooks.",
        "Solo Scene 3."
      ]
    },
    {
      "id": "matter",
      "num": "8",
      "title": "A Matter of Time",
      "side": "Wasting Light",
      "preset": "FF-WL-MATTER",
      "guitar": "Trini / LP",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Punchy and dry — slightly tighter low end.",
      "tonality": "HPF 100 Hz if low E blooms. Keep Delay modest.",
      "miss": "Too much 100 Hz fighting bass.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 6.0,
            "Bass": 4.5,
            "Mid": 6.5,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "Graphic-9",
          "params": {
            "HPF": "100 Hz",
            "1 kHz": "+2 dB"
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Riff",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
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
            "OD250"
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
          "use": "Solo",
          "bypass": [
            "Crying Wah",
            "Rodent Drive"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        }
      ],
      "steps": [
        "Bass 4.5 / HPF 100 Hz.",
        "Scene 4 chorus.",
        "Solo Scene 3."
      ]
    },
    {
      "id": "misery",
      "num": "9",
      "title": "Miss the Misery",
      "side": "Wasting Light",
      "preset": "FF-WL-MISERY",
      "guitar": "Trini Lopez",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Aggressive stacked guitars — Scene 4 and 5 do the work.",
      "tonality": "Heavier beds without abandoning ToneMaster DNA.",
      "miss": "PV-505 as the only path for the whole song.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 6.3,
            "Bass": 5.0,
            "Mid": 6.8,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "Rodent Drive",
          "params": {
            "Distortion": 3.5,
            "Filter": 6.0
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Verses",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
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
          "use": "Choruses A50/B50",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 50,
            "b": 50,
            "c": 0
          }
        },
        {
          "id": 5,
          "name": "grit / rodent",
          "use": "Heavier beds",
          "note": "Rodent on",
          "bypass": [
            "Crying Wah",
            "Exotic Z Boost",
            "OD250"
          ],
          "merge": {
            "a": 70,
            "b": 0,
            "c": 30
          }
        }
      ],
      "steps": [
        "Verse Scene 1.",
        "Chorus Scene 4.",
        "Beds Scene 5 with light Rodent."
      ]
    },
    {
      "id": "known",
      "num": "10",
      "title": "I Should Have Known",
      "side": "Wasting Light",
      "preset": "FF-WL-KNOWN",
      "guitar": "Trini Lopez",
      "pickup": "bridge / neck",
      "toneVol": "tone 8–10 / vol 10",
      "historical": "Krist Novoselic guest — bigger emotional room, still analog.",
      "tonality": "More Plate than other WL cuts. Keep Volume honest.",
      "miss": "Hall wash (use Plate on WL template).",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 5.5,
            "Bass": 5.0,
            "Mid": 6.5,
            "Treble": 6.0,
            "Bright": "Off",
            "Output": "0 dB"
          }
        },
        {
          "name": "Plate",
          "params": {
            "Mix": "20%",
            "Decay": "42%",
            "Pre-delay": "20 ms"
          }
        },
        {
          "name": "Digital Delay",
          "params": {
            "Mix": "20%",
            "Time": "dotted 1/8",
            "Sync": "On"
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
            "OD250"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        },
        {
          "id": 6,
          "name": "space / jc",
          "use": "Atmosphere",
          "note": "Plate 20% Delay 20%",
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
        },
        {
          "id": 3,
          "name": "solo / boost",
          "use": "Solo",
          "bypass": [
            "Crying Wah",
            "Rodent Drive"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          }
        }
      ],
      "steps": [
        "Scene 1 main.",
        "Scene 6 for space.",
        "Solo Scene 3."
      ]
    },
    {
      "id": "walk",
      "num": "11",
      "title": "Walk",
      "side": "Wasting Light",
      "preset": "FF-WL-WALK",
      "guitar": "Trini Lopez",
      "pickup": "bridge",
      "toneVol": "tone 10 / vol 10",
      "historical": "Anthem closer — clear chords, soaring solo.",
      "tonality": "Mid-forward clarity. Solo needs Boost + Delay, not Recto.",
      "miss": "Scooping 1 kHz so the solo disappears.",
      "knobs": [
        {
          "name": "US TWN Normal",
          "params": {
            "Volume": 5.8,
            "Bass": 5.0,
            "Mid": 6.8,
            "Treble": 6.0,
            "Bright": "On",
            "Output": "0 dB"
          }
        },
        {
          "name": "Exotic Z Boost",
          "params": {
            "Gain": 4.0,
            "Treble": 5.5,
            "Volume": 5.0
          }
        },
        {
          "name": "Digital Delay (solo)",
          "params": {
            "Mix": "24%",
            "Time": "1/4",
            "Feedback": "22%",
            "Sync": "On"
          }
        }
      ],
      "scenes": [
        {
          "id": 1,
          "name": "rhythm / tonemaster",
          "use": "Verses / chorus rhythm",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
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
          "use": "Stacked chorus",
          "bypass": [
            "Crying Wah",
            "Rodent Drive",
            "Exotic Z Boost",
            "OD250"
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
          "use": "Solo",
          "note": "Boost Gain 4, Delay Mix 24%",
          "bypass": [
            "Crying Wah",
            "Rodent Drive"
          ],
          "merge": {
            "a": 100,
            "b": 0,
            "c": 0
          },
          "knobs": [
            {
              "name": "Exotic Z Boost",
              "params": {
                "Gain": 4.0,
                "Bass": 5.0,
                "Treble": 5.5,
                "Volume": 5.0
              }
            },
            {
              "name": "Digital Delay",
              "params": {
                "Mix": "24%",
                "Time": "1/4",
                "Feedback": "22%",
                "High Pass": "120 Hz",
                "Low Pass": "8 kHz",
                "Mod Depth": "10%",
                "Sync": "On"
              }
            }
          ]
        }
      ],
      "steps": [
        "Do not scoop 1 kHz.",
        "Scene 4 for stacked chorus.",
        "Solo Scene 3 — bridge HB, Mid 6.8+."
      ]
    }
  ]
};
