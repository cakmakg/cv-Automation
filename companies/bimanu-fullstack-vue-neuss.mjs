// bimanu Cloud Solutions GmbH — Fullstack Entwickler Vue 3 / Node.js (m/w/d), Neuss, bis 85k.
//   Impressum bimanu.de (verifiziert 18.08.2026): bimanu Cloud Solutions GmbH, Sperberweg 47,
//   41468 Neuss; GF Michael Jungschläger und Swen Göllner; HRB 20382 Amtsgericht Neuss;
//   USt-ID DE 325 06 20 86. DIREKTER ARBEITGEBER, kein Vermittler (anders als #55 grinnberg, #56 SOMI).
//   Kontakt: Katharina Bretz, Personalwesen, bewerbung@bimanu.de
// Quelle: xing.com/jobs/neuss-fullstack-entwickler-vue-3-node-js-gehalt-85k-156297926,
//   vom User als Volltext geliefert 18.08.2026.
// Produkt: bimanu One, "Contextual Intelligence Plattform" für den Mittelstand (Bäckereien, Gemüsebau,
//   Energieversorger, Industrie). Eigenfinanziert, profitabel, kein Investor.
//
// ZWEI VARIANTEN, beide als Bewerbungspaket-PDF (User-Entscheidung 18.08.2026):
//   LANG  = diese Config → bewerbungspaket-bimanu-fullstack-vue-neuss-2026-08-18.pdf
//           CV + vollständiges Anschreiben nach Goldmuster Fullstack.
//   KURZ  = companies/bimanu-fullstack-vue-neuss-kurz.mjs
//           → bewerbungspaket-bimanu-fullstack-vue-neuss-kurz-2026-08-18.pdf
//           CV + exakt die drei Sätze auf Briefkopf, wie die Anzeige es verlangt.
//   Hintergrund: Die Anzeige sagt "Kurzbewerbung: CV + drei Sätze … Kein Anschreiben."
//   Die KURZ-Variante folgt dem wörtlich, die LANG-Variante ist die klassische Bewerbung.
//   Welche rausgeht, entscheidet der User.
//
// PASSUNG ~2.7/5 — schwächster der drei Fullstack-Treffer, aber sehr billige Bewerbung.
// Was TRÄGT: Node.js, TailwindCSS, Vitest UND Playwright (alle namentlich gefordert, alle belegt);
//   Docker/CI-CD; "Features end to end verantwortet" = genau die Arbeitsweise des Users in eigenen
//   Projekten; Fachinformatiker ausdrücklich als Plus genannt; und vor allem der Plus-Punkt
//   "Erfahrung mit KI-Integrationen (LLM-APIs, RAG)" — bimanu will KI-Funktionen in die Plattform
//   bringen und hat dafür einen eigenen KI-Entwickler. Dort liegt der User klar über dem Gesuchten.
// Was BLOCKIERT (drei namentlich geforderte Technologien fehlen):
//   (1) VUE 3 — steht im Stellentitel UND als Muss mit "mehrjährige Erfahrung". User kommt aus
//       React/Next.js, hat Vue nie produktiv eingesetzt. Härtester Punkt, NICHT wegzuschreiben.
//   (2) PINIA — Vue-State-Management, im Profil gar nicht vorhanden (React: Redux/Zustand).
//   (3) AZURE — als Muss genannt. User hat AWS, Vercel, Supabase. NICHT in die Skills schreiben
//       (User-Regel CV No Overclaim: Cloud = AWS, ausdrücklich NICHT Azure).
//   (4) "Betrieb in Produktion" / "mehrjährig": Systeme sind lauffähig und getestet, ohne Live-Kunden.
//   Snowflake fehlt ebenfalls, ist aber nur "Plus, kein Muss".
// CV: Tech-Default (tagline leer, kein Profil — die drei Sätze übernehmen hier die Vorstellungsrolle),
//   1 Projekt → 1 Seite A4. Skills auf DIESE Anzeige getrimmt: TailwindCSS und Vitest/Playwright nach
//   vorne, KI/RAG als eigene Kategorie (der Differenzierer). Vue/Pinia/Azure/Snowflake NICHT gelistet.
// Run: node generate-bewerbung.mjs companies/bimanu-fullstack-vue-neuss.mjs

export default {
  slug: 'bimanu-fullstack-vue-neuss',
  date: '18.08.2026',
  language: 'de',

  recipient: [
    'bimanu Cloud Solutions GmbH',
    'Frau Katharina Bretz',
    'Sperberweg 47',
    '41468 Neuss',
  ],

  subject: 'Bewerbung als Fullstack Entwickler',

  narrative: {
    kern: 'Full Stack Entwickler mit TypeScript und Node.js, der Anwendungen von der Architekturentscheidung bis zum Deployment allein verantwortet und seinen Schwerpunkt auf KI Integration legt.',
    passung: [
      'Features von der Architektur bis zum Deployment selbst verantwortet',
      'TailwindCSS, Vitest und Playwright im Alltag, ausgeliefert über Docker und CI/CD',
      'KI Integration mit LangGraph und RAG über Vector Search',
    ],
  },
  company: {
    mission: 'bimanu baut mit bimanu One eine Plattform, mit der mittelständische Betriebe ihre Daten selbst nutzen können, ohne ein halbjähriges Projekt aufzusetzen, und bringt dafür KI Funktionen bis in eine Oberfläche, die ohne Schulung bedienbar ist.',
    verbindung: 'Genau diese Verbindung ist mein Schwerpunkt: Ich baue Anwendungen allein von der Architektur bis zum Deployment und setze KI so ein, dass am Ende jemand ohne technischen Hintergrund damit arbeiten kann.',
  },
  jobKeywords: ['Node.js', 'TailwindCSS', 'Vitest', 'Playwright', 'CI/CD', 'RAG', 'Docker', 'PostgreSQL'],

  cv: {
    // Tech-Default: tagline leer. Kein cv.profil — die geforderten drei Sätze übernehmen hier die
    // Vorstellungsrolle, die sonst das Anschreiben hätte.
    tagline: '',
    // Sprache der Anzeige aufgegriffen ("Features end to end", "DevOps ist Teil der Entwicklung").
    competencies: [
      'Features end to end',
      'KI in die Oberfläche bringen',
      'Tests & Deployment',
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Genau 1 Projekt → 1 Seite A4. GuestMatrix ist der beste Beleg für "Feature end to end
    // verantwortet, nicht Tickets abgearbeitet": Architektur, Umsetzung, Tests, Deployment in einer Hand.
    projects: [
      {
        title: 'GuestMatrix — Multi-Tenant B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · PostgreSQL · TailwindCSS · Vercel',
        desc: 'Architektur, Umsetzung und Deployment allein verantwortet: Mandantentrennung per Row-Level-Security, REST-Endpunkte mit Zod validiert, Vitest-Suite, DSGVO-Löschkonzept.',
      },
    ],
    // Vue 3, Pinia, Azure und Snowflake bewusst NICHT gelistet — nicht im Profil vorhanden.
    skills: [
      { category: 'Frontend', items: 'TypeScript, JavaScript, React.js, Next.js 15, TailwindCSS, HTML5/CSS3, Responsive Design' },
      { category: 'Backend & APIs', items: 'Node.js, Express.js, REST-APIs, WebSockets, PostgreSQL, Zod-Validierung' },
      { category: 'KI-Integration', items: 'LangGraph, RAG (Vector Search), LLM-APIs (Claude, Gemini, OpenAI), Multi-Agent-Systeme, n8n' },
      { category: 'DevOps & Qualität', items: 'Docker, CI/CD, AWS, Vercel, Supabase, Vitest/Playwright, Git/GitHub, Linux' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  // LANG-Variante: vollständiges Anschreiben nach Goldmuster Fullstack (siehe Kopf).
// P4 (18.08.2026): Wortlaut ab "Bevor ich in die IT gewechselt bin …" stammt VOM USER und ist
//   unverändert übernommen. Ersetzt die frühere Kurzfassung (Angebote/Rechnungen/Buchhaltung).
//   Der Satz "Ich habe gelernt, Finanzen zu steuern, Verkäufe zu gestalten und … den Überblick zu
//   behalten." ist eine Dreier-Aufzählung und verbraucht damit das gesamte Tricolon-Budget des
//   Briefes (Validator warnt ab 2). Bei künftigen Ergänzungen in DIESEM Brief keine weitere Liste.
//   ENTFALLEN dabei: der Standortsatz ("Ich wohne in Bonn, Neuss ist gut erreichbar. Hybrides
//   Arbeiten passt gut zu mir."), weil der User-Text den Absatz abschliesst. Bei Bedarf wieder
//   einsetzen — Neuss sind rund 75 km, hybrid ohne feste Bürotage, also unkritisch.
  anschreiben: {
    anrede: 'Sehr geehrte Frau Bretz,',
    paragraphs: [
      `bei bimanu bewerbe ich mich als Fullstack Entwickler in Neuss. Ich entwickle Webanwendungen im Frontend und im Backend, von der Architekturentscheidung bis zum Deployment. Tests und Dokumentation schreibe ich von Anfang an mit, nicht erst am Ende. Zurzeit bin ich im Frontend und Marketing eines Reisebüros in Köln tätig.`,

      `Vue 3 und Pinia habe ich nicht produktiv eingesetzt, ich komme aus React und TypeScript und arbeite mich schnell in neue Frameworks ein. TailwindCSS nutze ich in jedem Projekt. Im Backend arbeite ich mit Node.js und PostgreSQL, getestet wird mit Vitest und Playwright. Meine Anwendungen laufen in Docker Containern, ausgeliefert über CI/CD.`,

      `Ein Beispiel ist GuestMatrix, eine mandantenfähige Plattform auf Next.js und PostgreSQL. Die Mandantentrennung erfolgt über Row Level Security direkt in der Datenbank, die Eingaben validiere ich mit Zod. Dadurch fallen Fehler beim Commit auf und nicht erst im laufenden Betrieb. Mein Schwerpunkt liegt daneben auf der KI Seite. Ich baue Systeme aus mehreren Agenten mit LangGraph und RAG über Vector Search. Die Qualität sichere ich über feste Freigabepunkte, an denen immer ein Mensch entscheidet, bevor das System weiterläuft.`,

      `Mein Fundament sind zwei Jahre Umschulung zum Fachinformatiker, zuerst Systemintegration in Köln, danach Anwendungsentwicklung mit Schwerpunkt Webentwicklung im Fullstack. Bevor ich in die IT gewechselt bin, war ich im Tourismus tätig und habe ein eigenes Café mit Catering geführt. In dieser Zeit habe ich meine Kundenorientierung, Kommunikationsfähigkeit und meine Fähigkeit zur Planung und Organisation entwickelt. Ich habe gelernt, Finanzen zu steuern, Verkäufe zu gestalten und in stressigen Situationen den Überblick zu behalten. Diese Erfahrungen prägen meine Arbeit bis heute: Ich denke konsequent vom Kunden her, bleibe auch unter Druck ruhig und baue Software, die im Alltag wirklich funktioniert.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
