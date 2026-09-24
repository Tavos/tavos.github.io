# Foo Fighters Guitar Tones — Quad Cortex (QC-only)

Dave Grohl / Chris Shiflett / Pat Smear tones for **Wasting Light** (2011) and **Sonic Highways** (2014), built on a stock **Neural DSP Quad Cortex** (CorOS **4.1.0**).

This set follows the same interactive guide patterns as the [Rush](../Rush/README.md) hybrid guides (era templates, scene tables, QC device icons, `data-*.js` + `test-scenes.js`), adapted for **QC-only** amp/cab blocks — no TONEX required.

| File | What it is |
|---|---|
| [00_foundations.md](00_foundations.md) | Grid method, CorOS 4.1.0 device rules, FF amp map, Templates E / F |
| [01_wasting_light.md](01_wasting_light.md) | Every song on *Wasting Light* |
| [02_sonic_highways.md](02_sonic_highways.md) | Every song on *Sonic Highways* |
| [html/index.html](html/index.html) | Interactive guide |

## Rig mode

**QC-only.** Stock Amp → Cab on The Grid. Scenes change merge blends and FX bypass (not MIDI Program Changes).

Optional later: drop a TONEX Pedal in the FX Loop and mute QC amp/cab rows if you prefer captures — these guides stay stock.

## Era templates (skill mapping)

| Album | Closest Rush template | FF template |
|---|---|---|
| Wasting Light | **A** (dry into amp) + **D** (no Vintage Chorus) | **E** — ToneMaster / AC30 / JC-120 split |
| Sonic Highways | Same DNA, more city/room color | **F** — E + Dual Delay / Hall for studio air |

## Interactive HTML

Open [`html/index.html`](html/index.html) (or album pages). Hard-refresh after JS edits (`Cmd+Shift+R`).

```bash
node html/assets/test-scenes.js
```

Icons are from the [Quad Cortex Wiki appendix](https://quadcortex.wiki/Appendix).
