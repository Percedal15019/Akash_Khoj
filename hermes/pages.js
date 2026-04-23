/**
 * pages.js — Hermes HandBook Page Data
 * ======================================
 * Each entry in PAGES defines one LEAF of the book.
 * A leaf has a FRONT face and a BACK face.
 *
 * To add more pages: simply push new entries into PAGES.
 * The flipbook engine reads this array dynamically.
 *
 * Page types: 'cover' | 'toc' | 'content' | 'image' | 'blank'
 */

const PAGES = [

  /* ═══════════════════════════════════════════════════
     LEAF 1 — Cover (front) + Inside Cover (back)
  ═══════════════════════════════════════════════════ */
  {
    id: 'leaf-cover',
    isCover: true,
    front: {
      type: 'cover',
      html: `
        <div class="cover-content" style="position:absolute;inset:0;padding:50px 40px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;text-align:center;">
          <div class="cover-border"></div>

          <div>
            <div class="cover-top-ornament">⚜</div>
            <div style="margin-top:10px;align:center;font-family:'Cinzel',serif;font-size:0.8rem;letter-spacing:0.5em;color:rgb(11, 9, 0);">CODEX ASTRONOMICA</div>
          </div>

          <div>
            <span class="cover-eagle">🦅</span>
            <h1 class="cover-title">
              HERMES
              <span class="subtitle">HANDBOOK</span>
            </h1>
            <div class="cover-divider"></div>
            <p style="font-family:'IM Fell English SC',serif;font-size:0.65rem;letter-spacing:0.3em;color:rgba(0, 0, 0, 0.72);line-height:2;">
              EXPLORING THE HEAVENS<br>
              STARS · PLANETS · CONSTELLATIONS
            </p>
          </div>
        </div>
      `
    },
    back: {
      type: 'content',
      pageNumber: 'II',
      html: `
        <div class="page-number">— II —</div>
        <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:16px;padding:20px;">
          <div style="font-family:'Cinzel Decorative',serif;font-size:1rem;color:var(--crimson);letter-spacing:0.15em;">DE LIBRO</div>
          <div style="width:50px;height:1px;background:rgba(120,80,20,0.4);margin:4px auto;"></div>
          <p style="font-family:'IM Fell English',serif;font-style:italic;font-size:0.8rem;line-height:1.9;color:var(--ink-faded);text-align:center;max-width:280px;">
            "Per aspera ad astra."<br>
            <span style="font-size:0.65rem;letter-spacing:0.2em;font-style:normal;opacity:0.6;">Through hardship to the stars.</span>
          </p>
          <div style="width:80px;height:1px;background:rgba(120,80,20,0.2);margin:4px auto;"></div>
          <p style="font-family:'IM Fell English',serif;font-size:0.75rem;line-height:1.85;color:var(--ink-faded);text-align:center;max-width:280px;">
            This Handbook is dedicated to all who gaze upon the heavens and seek the wisdom of the cosmos, as the Roman scholars before us once did.
          </p>
          <div style="margin-top:16px;font-family:'Cinzel',serif;font-size:0.55rem;letter-spacing:0.35em;color:var(--crimson);opacity:0.7;">· HERMES TRISMEGISTUS ·</div>
        </div>
      `
    }
  },

  /* ═══════════════════════════════════════════════════
     LEAF 2 — Table of Contents (front + back)
  ═══════════════════════════════════════════════════ */
  {
    id: 'leaf-toc',
    front: {
      type: 'toc',
      pageNumber: 'III',
      title: 'Tabula Contentorum',
      subtitle: 'Table of Contents',
      html: `
        <div class="page-number">— III —</div>
        <div class="section-label">INDEX</div>
        <div class="page-title">Tabula Contentorum</div>
        <div class="ornament">✦</div>
        <div style="margin-top:12px;position:relative;z-index:1;">
          <div class="toc-entry"><span class="toc-chapter">I. Introduction to Roman Astronomy</span><span class="toc-page-num">IV</span></div>
          <div class="toc-entry"><span class="toc-chapter">II. The Celestial Sphere</span><span class="toc-page-num">V</span></div>
          <div class="toc-entry"><span class="toc-chapter">III. The Constellations</span><span class="toc-page-num">VI</span></div>
          <div class="toc-entry"><span class="toc-chapter">IV. Orion — The Hunter</span><span class="toc-page-num">VII</span></div>
          <div class="toc-entry"><span class="toc-chapter">V. Ursa Major — The Great Bear</span><span class="toc-page-num">VIII</span></div>
          <div class="toc-entry"><span class="toc-chapter">VI. Scorpius — The Scorpion</span><span class="toc-page-num">IX</span></div>
          <div class="toc-entry"><span class="toc-chapter">VII. The Planets of Our System</span><span class="toc-page-num">X</span></div>
          <div class="toc-entry"><span class="toc-chapter">VIII. Mercury — Mercurius</span><span class="toc-page-num">XI</span></div>
          <div class="toc-entry"><span class="toc-chapter">IX. Venus — Goddess of Beauty</span><span class="toc-page-num">XII</span></div>
          <div class="toc-entry"><span class="toc-chapter">X. Mars — The Red Warrior</span><span class="toc-page-num">XIII</span></div>
        </div>
      `
    },
    back: {
      type: 'content',
      pageNumber: 'IV',
      html: `
        <div class="page-number">— IV —</div>
        <div class="section-label">CAPUT I</div>
        <div class="page-title">Introduction to<br>Roman Astronomy</div>
        <div class="ornament">✦</div>
        <div class="page-body">
          <p>The Romans inherited much of their astronomical knowledge from the Greeks, yet they brought to it a uniquely Roman character — practical, systematic, and interwoven with the divine. The heavens were not merely observed; they were read as messages from the gods themselves.</p>
          <p>Roman astronomers charted the movements of celestial bodies with remarkable precision, naming the planets after their most important deities. Jupiter, brightest of wandering stars, bore the name of the king of gods. Mars, glowing red as blood, was named for the god of war.</p>
        </div>
      `
    }
  },

  /* ═══════════════════════════════════════════════════
     LEAF 3 — Celestial Sphere + Constellation Intro
  ═══════════════════════════════════════════════════ */
  {
    id: 'leaf-celestial',
    front: {
      type: 'content',
      pageNumber: 'V',
      html: `
        <div class="page-number">— V —</div>
        <div class="section-label">CAPUT II</div>
        <div class="page-title">The Celestial Sphere</div>
        <div class="ornament">✦</div>
        <div class="page-body" style="margin-top:8px;">
          <p>The ancients conceived the cosmos as a great crystalline sphere, rotating about the Earth at its centre.</p>
          <p>This model, known as the geocentric model, was widely accepted for centuries and influenced astronomical thought well into the Renaissance.</p>
          <p>On this celestial sphere, the stars were fixed, while the planets traced their paths along the ecliptic — the apparent path of the sun across the sky. The sphere was divided into 12 sections, each associated with a constellation of the zodiac.</p>
        </div>
      `
    },
    back: {
      type: 'content',
      pageNumber: 'VI',
      html: `
        <div class="page-number">— VI —</div>
        <div class="section-label">CAPUT III</div>
        <div class="page-title">The Constellations</div>
        <div class="ornament">✦</div>
        <div class="page-body">
          <p>Across the night sky, Roman scholars traced the great figures of myth and legend — heroes, beasts, and gods immortalised among the stars. These patterns, called <em>constellations</em>, served as guides for sailors, farmers, and soldiers.</p>
          <p>There are <strong>88 officially recognised constellations</strong> in the modern sky, though the Romans knew of 48, catalogued by the Greek astronomer Ptolemy in his works. Each constellation carries with it a story stretching back into the age of myth.</p>
          <p>The 12 constellations of the <em>Zodiac</em> held special significance — the sun, moon, and five known planets all moved through this band of the sky, each entry into a new constellation.</p>
        </div>
      `
    }
  },

  /* ═══════════════════════════════════════════════════
     LEAF 4 — Orion
  ═══════════════════════════════════════════════════ */
  {
    id: 'leaf-orion',
    front: {
      type: 'content',
      pageNumber: 'VII',
      html: `
        <div class="page-number">— VII —</div>
        <div class="section-label">CAPUT IV · CONSTELLATION</div>
        <div class="page-title">ORION<br><span style="font-family:'IM Fell English SC',serif;font-size:0.65rem;letter-spacing:0.3em;font-weight:800;">The Hunter</span></div>
        <div class="ornament">✦</div>
        <div class="page-body" style="margin-top:6px;">
          <p>Orion is among the most recognisable of all constellations — the great hunter stands with belt of three stars aligned, sword at his hip, and shield raised against Taurus the bull. The Romans knew him as a warrior of divine heritage, son of Neptune himself.</p>
        </div>
      `
    },
    back: {
      type: 'content',
      pageNumber: 'VIII',
      html: `
        <div class="page-number">— VIII —</div>
        <div class="section-label">CAPUT IV · CONTINUED</div>
        <div class="page-title">ORION — Key Stars</div>
        <div class="ornament">✦</div>
        <table class="roman-table" style="margin-top:10px;">
          <thead>
            <tr><th>Star</th><th>Latin Name</th><th>Type</th><th>Distance</th></tr>
          </thead>
          <tbody>
            <tr><td>Betelgeuse</td><td>Humerus</td><td>Red Supergiant</td><td>700 ly</td></tr>
            <tr><td>Rigel</td><td>Pedes</td><td>Blue Supergiant</td><td>860 ly</td></tr>
            <tr><td>Bellatrix</td><td>Bellatrix</td><td>Blue Giant</td><td>240 ly</td></tr>
            <tr><td>Mintaka</td><td>Cingulum I</td><td>Blue Giant</td><td>900 ly</td></tr>
            <tr><td>Alnilam</td><td>Cingulum II</td><td>Blue Supergiant</td><td>1340 ly</td></tr>
            <tr><td>Alnitak</td><td>Cingulum III</td><td>O-type Star</td><td>800 ly</td></tr>
          </tbody>
        </table>
        <div class="page-body" style="margin-top:12px;">
        </div>
      `
    }
  },

  /* ═══════════════════════════════════════════════════
     LEAF 5 — Ursa Major
  ═══════════════════════════════════════════════════ */
  {
    id: 'leaf-ursa',
    front: {
      type: 'content',
      pageNumber: 'IX',
      html: `
        <div class="page-number">— IX —</div>
        <div class="section-label">CAPUT V · CONSTELLATION</div>
        <div class="page-title">URSA MAJOR<br><span style="font-family:'IM Fell English SC',serif;font-size:0.65rem;letter-spacing:0.3em;font-weight:800;">The Great Bear</span></div>
        <div class="ornament">✦</div>
       
        <div class="page-body" style="margin-top:6px;">
          <p>The Great Bear circles eternally around the pole star, never setting below the horizon for observers in Rome. The Romans called her <em>Ursa Maior</em> — Callisto, a nymph transformed into a bear by the jealous Juno, placed among the stars by Jupiter himself as an act of mercy.</p>
        </div>
      `
    },
    back: {
      type: 'content',
      pageNumber: 'X',
      html: `
        <div class="page-number">— X —</div>
        <div class="section-label">CAPUT VI · CONSTELLATION</div>
        <div class="page-title">SCORPIUS<br><span style="font-family:'IM Fell English SC',serif;font-size:0.65rem;letter-spacing:0.3em;font-weight:800;">The Scorpion</span></div>
        <div class="ornament">✦</div>
       
        <div class="page-body" style="margin-top:6px;">
          <p>The Scorpion rises in the south as Orion sets in the west — the two are said never to share the sky, for it was the scorpion's sting that slew the great hunter. Its brightest star, <em>Antares</em>, glows with a deep red that rivals Mars, its very name meaning "rival of Ares."</p>
        </div>
      `
    }
  },

  /* ═══════════════════════════════════════════════════
     LEAF 6 — Planets Introduction
  ═══════════════════════════════════════════════════ */
  {
    id: 'leaf-planets-intro',
    front: {
      type: 'content',
      pageNumber: 'XI',
      html: `
        <div class="page-number">— XI —</div>
        <div class="section-label">CAPUT VII</div>
        <div class="page-title">The Planets of<br>Our Solar System</div>
        <div class="ornament">✦</div>
        <div class="page-body">
          <p>The Romans called the five naked-eye planets <em>stellae errantes</em> — "wandering stars" — for unlike the fixed stars, they moved against the backdrop of the heavens, tracing slow and complex paths across the zodiac.</p>
          <p>Each planet was identified with a god: swift <strong>Mercury</strong>, brilliant <strong>Venus</strong>, blood-red <strong>Mars</strong>, majestic <strong>Jupiter</strong>, and slow-moving <strong>Saturn</strong>. The movements of these gods-in-heaven were read as the will of the divine, and the priestly class of <em>haruspices</em> interpreted their positions for matters of state.</p>
        </div>
      `
    },
    back: {
      type: 'content',
      pageNumber: 'XII',
      html: `
        <div class="page-number">— XII —</div>
        <div class="section-label">CAPUT VIII · PLANET</div>
        <div class="page-title">MERCURIUS<br><span style="font-family:'IM Fell English SC',serif;font-size:0.65rem;letter-spacing:0.3em;font-weight:800;">Mercury — Messenger of Gods</span></div>
        <div class="ornament">✦</div>
        
        <div class="page-body" style="margin-top:6px;">
          <p>Closest to the sun and swiftest of all planets, Mercury races through the sky — completing one orbit in a mere 88 Earth days. The Romans named it for <em>Mercurius</em>, winged messenger of the gods, patron of travellers and merchants, whose caduceus wand appears in medicine to this day.</p>
        </div>
      `
    }
  },

  /* ═══════════════════════════════════════════════════
     LEAF 7 — Venus + Mars
  ═══════════════════════════════════════════════════ */
  {
    id: 'leaf-venus-mars',
    front: {
      type: 'content',
      pageNumber: 'XIII',
      html: `
        <div class="page-number">— XIII —</div>
        <div class="section-label">CAPUT IX · PLANET</div>
        <div class="page-title">VENUS<br><span style="font-family:'IM Fell English SC',serif;font-size:0.65rem;letter-spacing:0.3em;font-weight:800;">Goddess of Love & Beauty</span></div>
        <div class="ornament">✦</div>
        
        <div class="page-body" style="margin-top:6px;">
          <p>Blazing brighter than any star, <em>Venus</em> appears as the Morning Star or Evening Star, never straying far from the sun. Named for the goddess of love, it is paradoxically the most hellish of worlds — a thick atmosphere of CO₂ creates a runaway greenhouse effect, with surface temperatures reaching <strong>465°C</strong>.</p>
        </div>
      `
    },
    back: {
      type: 'content',
      pageNumber: 'XIV',
      html: `
        <div class="page-number">— XIV —</div>
        <div class="section-label">CAPUT X · PLANET</div>
        <div class="page-title">MARS<br><span style="font-family:'IM Fell English SC',serif;font-size:0.65rem;letter-spacing:0.3em;font-weight:800;">The Red Warrior</span></div>
        <div class="ornament">✦</div>
       
        <div class="page-body" style="margin-top:6px;">
          <p>Ruddy as freshly spilled blood, <em>Mars</em> was the Roman god of war — father of Romulus, founder of Rome. When Mars appeared especially bright in the sky, augurs predicted conflict and calamity. Mars as a cold desert world, with the largest volcano in the solar system: <strong>Olympus Mons</strong>.</p>
        </div>
      `
    }
  },

  /* ═══════════════════════════════════════════════════
     LEAF 8 — Jupiter + Saturn
  ═══════════════════════════════════════════════════ */
  {
    id: 'leaf-jupiter-saturn',
    front: {
      type: 'content',
      pageNumber: 'XV',
      html: `
        <div class="page-number">— XV —</div>
        <div class="section-label">CAPUT XI · PLANET</div>
        <div class="page-title">IUPPITER<br><span style="font-family:'IM Fell English SC',serif;font-size:0.65rem;letter-spacing:0.3em;font-weight:800;">King of the Gods</span></div>
        <div class="ornament">✦</div>
        
        <div class="page-body" style="margin-top:6px;">
          <p>Greatest of the planets, <em>Jupiter</em> — named for the king of the gods — is more massive than all other planets combined. Its Great Red Spot, a storm larger than Earth, has raged for centuries. The Romans held Jupiter as their supreme deity, and his bright appearance in the night sky inspired reverence.</p>
        </div>
      `
    },
    back: {
      type: 'content',
      pageNumber: 'XVI',
      html: `
        <div class="page-number">— XVI —</div>
        <div class="section-label">CAPUT XII · PLANET</div>
        <div class="page-title">SATURNUS<br><span style="font-family:'IM Fell English SC',serif;font-size:0.65rem;letter-spacing:0.3em;font-weight:800;">Lord of Time & Harvest</span></div>
        <div class="ornament">✦</div>
       
        <div class="page-body" style="margin-top:6px;">
          <p>Slowest of the visible planets, <em>Saturn</em> creeps through the zodiac over 29 years — one Roman generation. Named for the ancient god of agriculture and time, Saturn was also the god of the Golden Age. His festival, <em>Saturnalia</em>, was Rome's great winter celebration.</p>
      `
    }
  },

  /* ═══════════════════════════════════════════════════
     LEAF 9 — Back Cover
  ═══════════════════════════════════════════════════ */
  {
    id: 'leaf-back-cover',
    front: {
      type: 'content',
      pageNumber: 'XVII',
      html: `
        <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:20px;padding:30px;">
          <div style="font-family:'Cinzel Decorative',serif;font-size:0.9rem;color:var(--crimson);letter-spacing:0.2em;">FINIS</div>
          <div style="width:60px;height:1px;background:rgba(120,80,20,0.4);"></div>
          <div style="font-family:'IM Fell English',serif;font-style:italic;font-size:0.85rem;line-height:1.9;color:var(--ink-faded);">
            "Omnia, Caeser, iam pridem ex aequo pariter que.<br>
            <em>All things, Caesar, already long since equally and alike.</em>"
          </div>
          <div style="width:60px;height:1px;background:rgba(120,80,20,0.4);"></div>
          <p style="font-family:'IM Fell English',serif;font-size:0.75rem;line-height:1.85;color:var(--ink-faded);max-width:280px;">
            This concludes the current volume of the Hermes HandBook. Further chapters on celestial mechanics, lunar cycles, eclipses, and deep sky objects shall be added in forthcoming volumes.
          </p>
          <div style="font-family:'Cinzel',serif;font-size:0.55rem;letter-spacing:0.4em;color:var(--crimson);opacity:0.7;margin-top:10px;">· MORE PAGES COMING SOON ·</div>
        </div>
      `
    },
    back: {
      type: 'cover',
      isBackCover: true,
      html: `
        <div class="cover-content" style="position:absolute;inset:0;padding:50px 40px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:24px;">
          <div class="cover-border"></div>
          <div style="font-family:'Cinzel Decorative',serif;font-size:1.2rem;font-weight:900;color:rgba(123, 131, 9, 0.81);letter-spacing:0.15em;">HERMES<br>HANDBOOK</div>
          <div style="width:80px;height:1px;background:rgba(60, 49, 14, 0.5);"></div>
          <div style="font-family:'IM Fell English SC',serif;font-size:0.6rem;letter-spacing:0.35em;color:rgba(0, 0, 0, 0.65);line-height:2.2;">
            CODEX ASTRONOMICA ROMANA<br>
            VOLUME I
          </div>
          <div style="font-size:2rem;color:rgba(255,240,150,0.7);letter-spacing:0.5em;margin-top:10px;">⚜</div>
        </div>
      `
    }
  }

]; // end PAGES
