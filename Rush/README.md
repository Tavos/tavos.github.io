# Rush Guitar Tones — Quad Cortex + TONEX Pedal

Alex Lifeson tones for **2112** (1976), **Moving Pictures** (1981), **Signals** (1982), and **Roll the Bones** (1991), built as a two-box live rig:

- **IK Multimedia TONEX Pedal** supplies the **amp + cabinet** from the [Alex Lifeson Legacy Signature Collection](https://www.ikmultimedia.com/products/tonex-lifeson/) (25 Tone Models, four amps Alex actually owned).
- **Neural DSP Quad Cortex** supplies **effects, scenes, mix EQ, and MIDI** that recalls those TONEX presets.
- Audio path: TONEX sits in the Quad Cortex **FX Loop** so pre-amp pedals (wah, CE-1, Maestro phaser) hit the capture the way they hit the real amp, and post-cab rack (2290, digital delay, hall) sits after it.

This folder is a **new analysis**, not a copy of the Quad Cortex–only guides in [`../../rush/tone_guides/`](../../rush/tone_guides/README.md). Those used stock QC amps (Twin, 2203, ADA MP-1 stand-ins). Here the amp voice is Lifeson’s own captures — and that changes the honest mapping, especially on *2112* and *Roll the Bones*.

## How to use this folder

| File | What it is |
|---|---|
| [00_foundations.md](00_foundations.md) | Cabling, TONEX global setup, MIDI, banks 07–15 working map, four era templates |
| [midi_map.md](midi_map.md) | One-page Program Change cheat sheet |
| [01_2112.md](01_2112.md) | Every song on *2112* |
| [02_moving_pictures.md](02_moving_pictures.md) | Every song on *Moving Pictures* |
| [03_signals.md](03_signals.md) | Every song on *Signals* |
| [04_roll_the_bones.md](04_roll_the_bones.md) | Every song on *Roll the Bones* |

Work in this order:

1. Load the Lifeson collection onto the TONEX Pedal and park the models in banks **07–15** (see Foundations).
2. Cable QC ↔ TONEX (audio + MIDI) and build the four era templates on the Cortex.
3. Duplicate a template per song. Each scene sends a **Program Change** that loads the matching TONEX slot.
4. A/B against the album. Change QC effects first. Only then trim TONEX Gain / Presence — the captures already are Alex’s amp settings.

**CorOS 4.1.0:** After updating firmware, use **Device Presets** to paste era base blocks (Vintage Chorus, Digital Delay, 229T row) into new song presets instead of re-dialing from scratch.

## Interactive HTML

Open [`html/index.html`](html/index.html) in a browser. Each album uses its cover art, a clickable track list, scene-aware signal-chain diagrams (FX Loop = TONEX), and the MIDI Program Change for that scene.

- [2112](html/2112.html)
- [Moving Pictures](html/moving-pictures.html)
- [Signals](html/signals.html)
- [Roll the Bones](html/roll-the-bones.html)

## What this collection actually contains

Four amplifiers, never captured in TONEX before this pack:

| Amp in the collection | Cab in the capture | Lifeson’s landmark |
|---|---|---|
| Marshall **4140 Club and Country** 2×12 combo | Open-back 2×12 (in the Tone Model) | *Moving Pictures* and *Signals* — “THE sound” of that era, per IK / Alex |
| Marshall **6100 30th Anniversary “Curly”** | 1960BV straight 4×12, SM57 + Royer 121 | British crunch through lead; later studio/live workhorse |
| Hughes & Kettner **TriAmp** | H&K 4×12, SM57 + R121 | Late-90s / early-2000s Rush backbone; crystalline clean → hi-fi gain |
| **Lerxst Omega** | Lerxst Omega 4×12 | *Clockwork Angels* DNA; gutsy clean, classic crunch, smooth lead |

Published Tone Model names include **Club & Country Bright Clean**, **Club & Country Clean**, **Curly Brite Crunch**, **Curly Hi-Gain**, **H&K Crunch**, **H&K Hi-Gain**, **Lerxst Omega Dark Crunch**, **Lerxst Omega More Crunch**. The pack has **25** models (5 Club & Country, 10 Curly, 5 H&K, 5 OMEGA). Assign the unpublished names by increasing dirt within each amp family — Foundations tells you which slot gets which character.

## Honest era map (read this before you argue with the record)

The collection does **not** include a Fender Twin, Super Reverb, Hiwatt, or Gallien-Krueger guitar preamp. Using it anyway is the point of this rig: you get *Lifeson’s* amps, not a QC approximation of the studio rental.

| Album | Historical studio amp | What you actually play here | Why it still works |
|---|---|---|---|
| *2112* | Twin / Super Reverb, Marshall 50W | **Club & Country** cleans + **Curly** crunch/lead | C&C is the clean-yet-dirty Marshall combo Alex later called his voice; Curly covers British 50W/100W grind. You will not get 1976 Fender bloom — you will get *Lifeson* bloom. |
| *Moving Pictures* | Club & Country 2×12 | **Club & Country** (home turf) + Curly for solos | This is the album the collection was built to nail. QC only adds CE-1, Phase 100, delay, spring. |
| *Signals* | Club & Country 2×12 (all 4140s; Analog Kid solo tracked outdoors) | **Club & Country** pulse + Curly for Analog Kid / Digital Man leads | Same amp as MP, wetter CE-1, delay as writing. Do not reach for H&K — that is 1991. |
| *Roll the Bones* | GK 2000GPL ~80% + Marshall ~20% | **H&K TriAmp** as the tight/hi-fi voice + **Curly** / C&C as the Marshall 20% | H&K is later than 1991, but it is the collection’s smooth, mix-ready, low-sag gain — the closest architecture to “rack tightness.” Chorus/delay stay **after** TONEX. |

Do not load a QC amp block in parallel “to add a Twin.” That fights the capture and doubles cab filtering. One amp at a time: TONEX. Scene change = MIDI Program Change.

## Era snapshot (effects still live on the Quad Cortex)

| Album | Core guitar | TONEX amp character | QC effects identity |
|---|---|---|---|
| *2112* | ES-335, Les Paul leads | C&C clean / Curly crunch | Maestro phaser **pre-loop**, Echoplex, Cry Baby. Chorus **off**. |
| *Moving Pictures* | Hentor Strat (PAF bridge) / ES-355 | Club & Country | **Vintage Chorus pre-loop**, Phase 100, digital delay, spring **post-loop** |
| *Signals* | Hentor Strat | Club & Country | **Wetter Vintage Chorus pre-loop**, dotted digital delay, Dual Delay / Hall on Weapon & Countdown. No 229T. |
| *Roll the Bones* | PRS bolt-ons | H&K rhythm / Curly rock | **Chorus 229T post-loop**, Dual Delay, IPS-style pitch. No CE-1 in front. |

Guitar setup, picks, frequency targets, and A/B method are unchanged from the QC-only foundations — they are restated in [00_foundations.md](00_foundations.md) so this folder stands alone.
