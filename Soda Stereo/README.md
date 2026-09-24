# Soda Stereo — *Comfort y Música Para Volar* — Quad Cortex Guide

Step-by-step recreations of Gustavo Cerati’s guitar tones on **MTV Unplugged: Comfort y Música Para Volar** (1996), built primarily with Neural DSP Quad Cortex **stock blocks** on **CorOS 4.1.0** (August 2026).

These are starting points, not museum replicas. The Miami session was a **semi-acoustic “(Un)Plugged”** experiment: electric guitars at lower volume, orchestral strings, Rhodes and synths, and Cerati’s ELO-inspired lounge atmosphere. The Quad Cortex gets you close if you treat **Scenes** like section changes in a TV studio, not like a single pedalboard for the whole show.

## What this album actually is

| Part | Tracks | Where recorded |
|---|---|---|
| MTV live set (13 songs) | Full show — see [01_mtv_unplugged_live.md](01_mtv_unplugged_live.md) | Post Edge, Miami — 12 March 1996 |
| 1996 CD release (7 live + interlude) | Furia, Misil, Pasos, Caníbales, Té para 3, Ángel, Ella usó…, Sonoman | Same session (subset) |
| Studio outtakes (*Sueño Stereo* rejects) | Planeador, Coral, Superstar (+ Sonoman on CD) | Artisan / Master — see [02_studio_outtakes.md](02_studio_outtakes.md) |

The **2007 reissue** adds the six MTV songs missing from the original CD (Zoom, Temblor, Terapia, Disco Eterno, Paseando por Roma, Génesis). This guide covers **all 13 live songs** plus the **studio outtakes** on the album.

## How to use this folder

| File | What it is |
|---|---|
| [00_foundations.md](00_foundations.md) | Guitar setup, Cerati tonality, QC grid method, stock block map, four templates |
| [01_mtv_unplugged_live.md](01_mtv_unplugged_live.md) | Every song from the Miami MTV session |
| [02_studio_outtakes.md](02_studio_outtakes.md) | Planeador, Coral, Superstar, Sonoman |

Work in this order:

1. Read **Foundations** once. Set the guitar up. Build the four base presets.
2. Duplicate the correct template per song and load the listed scenes.
3. A/B against the album (2007 complete edition for the full MTV set). Change one control at a time.

## Interactive HTML

Open [`html/index.html`](html/index.html) in a browser, or go directly to the album page:

- [Comfort y Música Para Volar](html/comfort.html)

Each track includes cover art, clickable scene buttons, **Quad Cortex device icons** with inline knob hints, color-coded bypass states, stock-block knob values, and step-by-step build notes from the markdown guides.

## TONEX (optional, not required)

There is **no TONEX section in this folder by default.** Cerati rented a **Vox AC50** into Marshall cabs in Miami; the Quad Cortex **UK C30 TopBoost** block is the honest stock stand-in on current firmware.

Use a TONEX Pedal **only if you already own a Vox capture** (AC30/AC50 family) and the stock block is not chimey enough for you. Cable it in the QC **FX Loop** the same way as the [Rush](../Rush/README.md) hybrid guides — amp in the loop, effects on the Cortex. Do not run a QC amp block in parallel with TONEX.

## Era snapshot

| Element | Session reality | QC voice |
|---|---|---|
| Core amp | Vox AC50 head + Marshall 4×12 (rented Miami) | **UK C30 TopBoost** → **412 Brit 60B GB ’71** |
| Also seen | Vox AC30 combo in the broadcast | **UK C30 TopBoost** → **212 UK C30 GB ’69** |
| Guitars | Acoustic (Misil, Té para 3), ES-335, Parker (piezo), PRS | Match pickup notes per song |
| Effects | Chorus, delay, Eventide H3000 (Disco Eterno), expression | **Vintage Chorus**, **Digital Delay**, **Dual Delay**, **Pitch Shifter** |
| Orchestration | Viola, cello, bassoon, Rhodes, synth | Leave 250 Hz–1 kHz for strings — HPF the guitar |

## Cerati vs. a “typical” unplugged

Soda did not play campfire acoustics. Cerati wanted **“eléctrico, pero más abajo”** — plugged instruments, softer dynamics, ELO-style arrangement. Gain is **lower** than *Sueño Stereo* studio versions. Chorus and delay are **more audible**. Distortion appears on a few songs (Caníbales, Ella usó…), not as a default.
