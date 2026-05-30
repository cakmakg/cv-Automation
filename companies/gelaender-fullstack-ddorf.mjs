// Geländersystem-Hersteller — Full Stack Developer (m/w/d), Düsseldorf VOR ORT
// React + TypeScript + Node.js/NestJS, 50-70K, Mid-Level
// Run: node generate-bewerbung.mjs companies/gelaender-fullstack-ddorf.mjs
//
// HINWEIS: Unternehmensname stand nicht in der Anzeige.
// Vor Versand: recipient[0] und slug ggf. anpassen, sobald bekannt.

export default {
  slug: 'gelaender-fullstack-ddorf',
  date: '30.05.2026',

  recipient: [
    '[Unternehmen]',
    'Personalabteilung',
    'Düsseldorf',
  ],

  subject: 'Bewerbung als Full Stack Developer (m/w/d)',

  cv: {
    tagline: 'Full Stack Developer · React · TypeScript · Node.js',
    competencies: [
      'TypeScript · JavaScript',
      'React.js · Redux',
      'Node.js · Express',
      'HTML · CSS · SASS',
      'REST · JSON · APIs',
      'MongoDB · SQL',
      'Docker · Git/GitHub',
      'Refactoring · Tests',
    ],
    projects: [
      {
        title: 'Full-Stack SaaS — Stock Management',
        stack: 'React · TypeScript · Node.js · Express · MongoDB',
        desc: 'End-to-end Web-Anwendung: modulare Architektur, REST-APIs, Auth, Business-Logik, Dashboard-Analytics und Payment-Integration.',
      },
      {
        title: 'Vidinli Shopping-Platform — Frontend Praktikum',
        stack: 'React · TypeScript · Component Architecture',
        desc: 'Frontend einer Shopping-Plattform: Komponentenstruktur, responsive Layouts, State-Management und API-Integration.',
      },
      {
        title: 'AI Orchestra — Multi-Agent System',
        stack: 'LangGraph · Claude · Gemini · Groq · MongoDB',
        desc: 'Multi-Agent-System mit REST-Orchestrierung mehrerer LLM-Anbieter, Quality Gates und Critic-Komponenten zur Sicherung der Code- und Output-Qualität.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'React.js, TypeScript, JavaScript (ES6+), Redux, HTML, CSS, SASS, TailwindCSS, Material-UI' },
      { category: 'Backend', items: 'Node.js, Express.js, Next.js, REST-APIs, Event-Driven Architecture, Stripe API' },
      { category: 'Datenbanken', items: 'MongoDB, SQL, MongoDB Vector Search, Firebase' },
      { category: 'DevOps & Tools', items: 'Docker, Git/GitHub, CI/CD, Linux, Playwright, npm/pnpm, Agile/SCRUM, Jira' },
      { category: 'Qualität', items: 'Code-Reviews, Refactoring, automatisierte Tests, Pair-Programming, sauberer Architekturentwurf' },
    ],
  },

  anschreiben: {
    paragraphs: [
      `ich bewerbe mich auf Ihre Position als Full Stack Developer. Seit anderthalb Jahren arbeite ich produktiv mit React, TypeScript und Node.js — genau der Stack Ihrer Anzeige.`,

      `Mein Schwerpunkt liegt auf React und TypeScript im Frontend sowie Node.js und Express im Backend, ergänzt um REST-APIs, SCSS, MongoDB und Docker. Im Praktikum bei Vidinli habe ich React-/TypeScript-Frontends entwickelt, im eigenen Stock-Management-SaaS Backend, API, Auth und Datenbank end-to-end gebaut.`,

      `NestJS habe ich noch nicht produktiv eingesetzt. Da es auf Express aufsetzt, mit dem ich täglich arbeite, ist der Einstieg überschaubar. Code-Reviews, Refactoring und automatisierte Tests sind Themen, die mir aus eigenen Projekten wichtig sind — sie entscheiden über Wartbarkeit in größeren Codebasen.`,

      `Bei Ihnen reizt mich die Arbeit an modularen Web-Applikationen mit Fokus auf Performance, Skalierbarkeit und sauberer Architektur sowie die enge Zusammenarbeit mit Designern und Data-Experten in einem cross-funktionalen Umfeld.`,

      `Vor meinen Umschulungen zum Fachinformatiker und Full-Stack-Developer war ich in der Tourismusbranche tätig und habe ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Daraus nehme ich Verantwortungsbewusstsein, strukturierte Arbeitsweise und Belastbarkeit mit.`,
    ],
  },
};
