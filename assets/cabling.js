(function (root) {
  const HYBRID = (tonexLabel) => `
    <figure class="rig">
      <div class="rig-legend">
        <span><i class="lg audio"></i> Audio</span>
        <span><i class="lg midi"></i> MIDI</span>
      </div>
      <div class="rig-top">
        <div class="dev guitar">
          <b>Instrument</b>
          Guitar
        </div>
        <span class="wire audio">Input 1</span>
        <div class="dev qc">
          <header>Quad Cortex</header>
          <div class="qc-path">
            <span>In 1</span>
            <span class="arr">→</span>
            <span>Pre-FX</span>
            <span class="arr">→</span>
            <span class="loop-slot">FX Loop</span>
            <span class="arr">→</span>
            <span>Post-FX</span>
            <span class="arr">→</span>
            <span>Out 1/2</span>
          </div>
          <p class="dev-note">Effects · scenes · MIDI master. No amp/cab blocks.</p>
        </div>
        <span class="wire audio">Out 1/2</span>
        <div class="dev frfr">
          <b>Output</b>
          FRFR / FOH
        </div>
      </div>
      <div class="rig-drop">
        <div class="drop-col">
          <span class="wire audio down">Send 1 · TS</span>
        </div>
        <div class="dev tonex">
          <header>TONEX Pedal</header>
          <p>${tonexLabel}</p>
          <div class="tonex-ports">
            <span>In</span>
            <span>Out L / R</span>
            <span class="midi-port">MIDI In</span>
          </div>
        </div>
        <div class="drop-col">
          <span class="wire audio up">Return 1/2 · TS</span>
        </div>
      </div>
      <div class="rig-midi">
        <span class="wire midi">QC MIDI Out → TONEX MIDI In · Channel 1 · Program Change (scenes A–H)</span>
      </div>
      <figcaption>FX Loop mix 100% wet. TONEX mod / delay / reverb / compressor off. Bypass mode disabled on the pedal.</figcaption>
    </figure>
    <table class="scene-table cable-table">
      <thead>
        <tr><th>Cable</th><th>From</th><th>To</th></tr>
      </thead>
      <tbody>
        <tr><td>Instrument</td><td>Guitar</td><td>QC <strong>Input 1</strong></td></tr>
        <tr><td>TS</td><td>QC <strong>Send 1</strong></td><td>TONEX <strong>Input</strong></td></tr>
        <tr><td>TS</td><td>TONEX <strong>Out L</strong></td><td>QC <strong>Return 1</strong></td></tr>
        <tr><td>TS</td><td>TONEX <strong>Out R</strong></td><td>QC <strong>Return 2</strong></td></tr>
        <tr><td>5-pin DIN</td><td>QC <strong>MIDI Out</strong></td><td>TONEX <strong>MIDI In</strong></td></tr>
        <tr><td>XLR / TRS</td><td>QC <strong>Out 1/2</strong></td><td>FRFR / interface / FOH</td></tr>
      </tbody>
    </table>
  `;

  const QC_ONLY = `
    <figure class="rig">
      <div class="rig-legend">
        <span><i class="lg audio"></i> Audio</span>
      </div>
      <div class="rig-top">
        <div class="dev guitar">
          <b>Instrument</b>
          Guitar
        </div>
        <span class="wire audio">Input 1</span>
        <div class="dev qc">
          <header>Quad Cortex</header>
          <div class="qc-path">
            <span>In 1</span>
            <span class="arr">→</span>
            <span>Pre-FX</span>
            <span class="arr">→</span>
            <span>Amp → Cab</span>
            <span class="arr">→</span>
            <span>Post-FX</span>
            <span class="arr">→</span>
            <span>Out 1/2</span>
          </div>
          <p class="dev-note">Stock amps · scenes · merge blends. CorOS 4.1.0.</p>
        </div>
        <span class="wire audio">Out 1/2</span>
        <div class="dev frfr">
          <b>Output</b>
          FRFR / FOH
        </div>
      </div>
      <p class="dev-note" style="margin-top:12px">QC-only: no TONEX / FX Loop required. Optional later — mute Amp/Cab and insert FX Loop if you add a pedal capture.</p>
    </figure>
  `;

  function htmlFor(el) {
    const mode = (el.getAttribute("data-cabling") || "qc").toLowerCase();
    if (mode === "qc" || mode === "qc-only" || mode === "qconly") return QC_ONLY;
    const tonex = el.getAttribute("data-tonex") || "Amp + Cab captures";
    return HYBRID(tonex);
  }

  function mount(el) {
    if (!el) return;
    el.innerHTML = htmlFor(el);
  }

  root.mountCabling = mount;
  root.CABLING_HTML = HYBRID("Amp + Cab captures");

  function auto() {
    document.querySelectorAll("[data-cabling]").forEach(mount);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", auto);
  } else {
    auto();
  }
})(window);
