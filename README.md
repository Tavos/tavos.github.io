# QC Tone Guides

Interactive **Neural DSP Quad Cortex** tone guides for CorOS **4.1.0**. This folder is the collection root — one home page, one folder per artist, shared conventions for markdown + HTML viewers.

## Start here

Open the browse home in a browser:

**[`index.html`](index.html)**

Filter by **Hybrid** / **QC Only**, search artists or albums, then open a guide. Each artist page lists albums; each album page has songs, scenes, signal chains, and dial-in notes.

| Path | What it is |
|---|---|
| [`index.html`](index.html) | Artist home — browse all guides |
| [`assets/`](assets/) | Shared assets (home hero, **qc-icons**, **styles.css**, **cabling.js**) |
| `<Artist>/` | One artist package (markdown + `html/`) |

## Artists

| Artist | Rig | Albums |
|---|---|---|
| [Rush](Rush/README.md) | Hybrid | *2112*, *Moving Pictures*, *Signals*, *Roll the Bones* |
| [Foo Fighters](Foo%20Fighters/README.md) | QC Only | *Wasting Light*, *Sonic Highways* |
| [Pink Floyd](Pink%20Floyd/README.md) | QC Only | *The Dark Side of the Moon* |
| [Muse](Muse/README.md) | Hybrid | *Essentials* |
| [Incubus](Incubus/README.md) | Hybrid | *Morning View* |
| [Soda Stereo](Soda%20Stereo/README.md) | QC Only | *Comfort y Música Para Volar* |
| [Gustavo Cerati](Gustavo%20Cerati/README.md) | QC Only | *Ahí Vamos*, *Siempre es Hoy* |

**Hybrid** = Quad Cortex + TONEX in the FX Loop (MIDI PC for amp captures).  
**QC Only** = stock Amp → Cab (and merges) on the Quad Cortex; no TONEX required.

Interactive entry for each artist: `<Artist>/html/index.html` (also linked from the home page).

## Folder layout

```
qc-tone-guides/
  index.html              ← browse home
  README.md               ← this file
  assets/
    ndsp-hero.jpg         ← home hero
    qc-icons/             ← shared Quad Cortex device icons (all artists)
    styles.css            ← shared themes (all artists)
    cabling.js            ← hybrid / QC-only diagrams (data-cabling + data-tonex)
  <Artist Name>/
    README.md
    00_foundations.md     ← guitar, CorOS knobs, era template
    {nn}_{album}.md       ← album reference
    midi_map.md           ← hybrid MIDI PC map (when used)
    html/
      index.html          ← artist album picker
      {album}.html        ← link ../../assets/styles.css (+ cabling.js when needed)
      assets/
        app.js            ← ICON_DIR → ../../assets/qc-icons/
        data-{album}.js   ← cablingMode / tonexLabel for diagram
        test-scenes.js
        art/              ← album covers (per artist)
```

## How to use a guide

1. Open [`index.html`](index.html) → pick an artist.
2. Open an album → pick a song → click a scene.
3. Build the chain on the QC from the on-screen blocks and knobs.
4. For Hybrid artists, wire TONEX in the FX Loop and match PC values from that artist’s `midi_map.md`.

Markdown under each artist (`00_foundations.md`, album files) is the printable / reference twin of the HTML data.

## CorOS target

All guides in this folder use **CorOS 4.1.0** device names and knob layouts unless a note says otherwise. Shared device/param dumps used when authoring live under [`Soda Stereo/html/assets/`](Soda%20Stereo/html/assets/) (`devices-coros-410-names.json`, `block-params-coros-410.json`).

## Adding an artist

1. Create `qc-tone-guides/<Artist Name>/` using the layout above (reuse top-level `assets/` — do not copy `qc-icons/`, `styles.css`, or `cabling.js` into the artist folder).
2. Copy patterns from **Foo Fighters** / **Gustavo Cerati** / **Pink Floyd** (QC Only) or **Rush** / **Muse** / **Incubus** (Hybrid). Set `ICON_DIR = "../../assets/qc-icons/"` in `app.js`. HTML links `../../assets/styles.css` and (when diagrams are used) `../../assets/cabling.js`. Set `cablingMode: "qc"|"hybrid"` and optional `tonexLabel` on the album data object.
3. Add an artist card to [`index.html`](index.html) (same **Hybrid** / **QC Only** + **Albums** shape as the others).
4. Add a row to the Artists table in this README.
5. From the artist folder, run:

```bash
node html/assets/test-scenes.js
```

Scene fingerprints must be unique; bypass names must exist on the chain.
