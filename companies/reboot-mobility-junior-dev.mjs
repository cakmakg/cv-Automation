// Reboot Mobility GmbH — Junior Software Developer (m/w/d) Full-Stack Entwicklung (Vollzeit)
// Standort: Blankenheim (HQ) + Büro Köln-Ehrenfeld (hybrides Arbeiten).
// Ansprechperson: Anna Kasper (Recruiting Team).
// Adresse: Lammerswiese 11, 53945 Blankenheim — verifiziert via evemo.de Footer.
// Tech: Angular (Frontend) + Node.js (Backend) + TypeScript. Angular = Bonus, nicht zwingend.
// Studium gefordert (Informatik/Wirtschaftsinformatik/vergleichbar) — Gökhan hat Umschulungen,
// im Brief offen adressiert als praktische Alternative zum Abschluss.
// BEREICH 1 (Full-Stack/Tech, bewerbung.md). Gold-Voice, hyphenfrei im Fließtext.
// Quelle: join.com/companies/mobilityhqcom/16470339 (Job aktiv, 20.07.2026)
// Run: node generate-bewerbung.mjs companies/reboot-mobility-junior-dev.mjs

export default {
  slug: 'reboot-mobility-junior-dev',
  date: '20.07.2026',
  language: 'de',

  recipient: [
    'Reboot Mobility GmbH',
    'Frau Anna Kasper',
    'Lammerswiese 11',
    '53945 Blankenheim',
  ],

  subject: 'Bewerbung als Junior Software Developer Full-Stack Entwicklung',

  cv: {
    tagline: '',
    competencies: [
      'TypeScript & Node.js',
      'React & Full-Stack',
      'REST-APIs & Datenbankintegration',
      'Anforderungsanalyse & UI',
    ],
    projects: [
      {
        title: 'Travelagency — Full-Stack Monorepo',
        stack: 'TypeScript · Node.js · Next.js 14 · FastAPI · MongoDB · Stripe',
        desc: 'Monorepo: TypeScript Node.js Gateway, FastAPI Agent-Service, Next.js Frontend. Echtzeit-Integrationen: Amadeus (Flüge), Hotelbeds (Hotels), Stripe (Payment), Twilio (WhatsApp). GDPR-PII-Masking, AES-256-GCM Verschlüsselung.',
      },
      {
        title: 'AI Orchestra — Multi-Agent-Automatisierung',
        stack: 'LangGraph · Python · Claude · Gemini · OpenAI · MongoDB',
        desc: 'Multi-Agent-System mit MongoDB-Checkpointer (Pause/Resume), Routing-Guards, Cost-Tracking mit Budget-Kill-Switch und 19-teiliger Test-Suite zur Sicherung von Betrieb, Kosten und Output-Qualität.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'TypeScript, React.js, Next.js 14, HTML5/CSS3, TailwindCSS, Komponentenarchitektur, Responsive Design' },
      { category: 'Backend', items: 'Node.js, Express.js, REST-APIs, FastAPI (Python), MongoDB, PostgreSQL, SQL' },
      { category: 'AI & Automatisierung', items: 'LangGraph, Multi-Agent-Systeme, LLM-APIs (Claude, Gemini, OpenAI), n8n Workflow Automation' },
      { category: 'Tooling & DevOps', items: 'Git/GitHub, Docker, Playwright, Linux, CI/CD, npm/pnpm' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Kasper,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Junior Software Developer. Ich entwickle seit anderthalb Jahren eigene Projekte in TypeScript und Node.js und achte dabei von Anfang an darauf, dass der Code nicht nur zum ersten Release funktioniert, sondern auch danach noch lesbar bleibt. Reboot Mobility hat mich interessiert, weil evemo wirklich läuft und echte Kommunen damit arbeiten. Das ist ein anderer Ausgangspunkt als ein internes Demo.`,

      `Mein technischer Schwerpunkt ist TypeScript, im Backend mit Node.js und im Frontend mit React. REST Schnittstellen, Datenbankanbindung und Komponentenarchitektur kenne ich durch eigene Projekte. Angular habe ich noch nicht im Einsatz gehabt, aber die Konzepte dahinter kenne ich aus React und ich finde mich in Frameworks schnell zurecht. Für Sie heißt das: In TypeScript und Node.js brauchen Sie mich nicht einzuarbeiten, nur in Angular selbst.`,

      `Direkten Kundenkontakt kenne ich seit Jahren, aus dem Tourismus, aus meinem eigenen Catering Unternehmen und zuletzt aus dem IT Support Praktikum. Dort konnte ich 70 Prozent der Tickets direkt lösen, ohne Weiterleitung. Anforderungen zu verstehen und schnell darauf zu reagieren ist mir sehr vertraut. Für Reboot Mobility heißt das: Ich kann Gespräche mit Kommunen führen, das Gehörte einordnen und direkt umsetzen.`,

      `Ich arbeite am liebsten in kleinen Teams, wo ich von Anfang an Verantwortung übernehme. Köln und Blankenheim kenne ich als Region gut, die Erreichbarkeit ist kein Problem.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
