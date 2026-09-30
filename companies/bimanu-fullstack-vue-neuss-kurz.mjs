// bimanu Cloud Solutions GmbH — Fullstack Entwickler Vue 3 / Node.js (m/w/d), Neuss.
// KURZ-VARIANTE von companies/bimanu-fullstack-vue-neuss.mjs — identisches CV, aber das Anschreiben
// besteht aus GENAU DEN DREI SÄTZEN, die die Anzeige verlangt, auf normalem Briefkopf:
//   "Kurzbewerbung: CV + drei Sätze, warum du zu uns passt. Kein Anschreiben."
// Damit gibt es die drei Sätze als PDF im Bewerbungspaket statt als loser Mailtext.
// Ergebnis: output/bewerbungspaket-bimanu-fullstack-vue-neuss-kurz-2026-08-18.pdf
//
// Die drei Sätze und ihr Zweck:
//   S1 Ownership belegen statt behaupten ("dein Code, deine Verantwortung", "Produkt gebaut").
//   S2 Der Differenzierer: KI-Integration (LLM-APIs, RAG) — bimanu nennt einen eigenen KI-Entwickler
//      und "eine Oberfläche, die ein Geschäftsführer ohne Schulung bedient" (Formulierung aufgegriffen).
//   S3 Vue-3-Lücke offen ansprechen — passt zu "direktes Feedback statt Schulterklopfen" und dazu,
//      dass bimanu eine Arbeitsprobe fährt. Verschweigen fliegt dort ohnehin auf.
// ALTERNATIVE zu S3 (Lücke erst im Erstgespräch, stattdessen Ownership aus der Selbstständigkeit):
//   "Bevor ich in die IT gewechselt bin, habe ich ein eigenes Café mit Catering geführt, Verantwortung
//    für ein Ergebnis statt für eine Anwesenheit kenne ich daher aus erster Hand."
//
// Validator-Anpassungen gegenüber der Langfassung (die Regeln gelten auch hier):
//   - HOW-Signal in P1 nötig → "Webanwendungen baue ich selbst …" statt "Ich baue Webanwendungen …".
//   - Ergebnis-Signal nötig → "dadurch kann sie jemand ohne Schulung bedienen" in S2.
//   - jobKeywords auf das reduziert, was in drei Sätze passt (sonst ATS-Fehler unter 60 Prozent).
// Run: node generate-bewerbung.mjs companies/bimanu-fullstack-vue-neuss-kurz.mjs

export default {
  slug: 'bimanu-fullstack-vue-neuss-kurz',
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
    kern: 'Full Stack Entwickler, der Webanwendungen von der Architekturentscheidung bis zum Deployment allein verantwortet und seinen Schwerpunkt auf KI Integration legt.',
    passung: [
      'Webanwendungen von der Architekturentscheidung bis zum Deployment selbst gebaut',
      'GuestMatrix als mandantenfähige Plattform auf PostgreSQL mit eigener Vitest Suite',
      'KI Integration mit LangGraph und RAG über Vector Search bis in die Oberfläche',
    ],
  },
  company: {
    mission: 'bimanu baut mit bimanu One eine Plattform, mit der mittelständische Betriebe ihre Daten selbst nutzen können, und bringt dafür KI Funktionen bis in eine Oberfläche, die ohne Schulung bedienbar ist.',
    verbindung: 'Genau diese Verbindung ist mein Schwerpunkt: Anwendungen allein von der Architektur bis zum Deployment bauen und KI so einsetzen, dass am Ende jemand ohne technischen Hintergrund damit arbeiten kann.',
  },
  // Auf das reduziert, was in drei Sätzen ehrlich unterzubringen ist.
  jobKeywords: ['Vitest', 'RAG', 'PostgreSQL', 'LLM', 'Vue 3'],

  cv: {
    tagline: '',
    competencies: [
      'Features end to end',
      'KI in die Oberfläche bringen',
      'Tests & Deployment',
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
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

  anschreiben: {
    anrede: 'Sehr geehrte Frau Bretz,',
    paragraphs: [
      `Webanwendungen baue ich selbst von der Architekturentscheidung bis zum Deployment, zuletzt GuestMatrix als mandantenfähige Plattform auf Next.js und PostgreSQL mit eigener Vitest Suite.`,

      `Mein Schwerpunkt ist die KI Seite: Ich baue Systeme aus mehreren Agenten mit LangGraph und RAG über Vector Search und bringe LLM Funktionen bis in die Oberfläche, dadurch kann sie jemand ohne Schulung bedienen.`,

      `Vue 3 und Pinia habe ich nicht produktiv eingesetzt, ich komme aus React und TypeScript und arbeite mich schnell ein, das sage ich lieber jetzt als in der Arbeitsprobe.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
