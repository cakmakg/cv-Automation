// apploft GmbH — Full Stack Developer Node.js/TypeScript (m/w/d)
// Standort: Hamburg (HQ) / Bonn / Remote-Hybrid möglich
// Recruiterin: Franziska Schwemer (HR) — jobs@apploft.de
// Run: node generate-bewerbung.mjs companies/apploft.mjs

export default {
  slug: 'apploft',
  date: '01.06.2026',
  language: 'de',

  recipient: [
    'apploft GmbH',
    'Bäckerbreitergang 75',
    '20355 Hamburg',
  ],

  subject: 'Bewerbung als Full Stack Developer – Node.js/TypeScript',

  cv: {
    tagline: 'Full-Stack Developer · TypeScript · Node.js · React · PostgreSQL',
    competencies: [
      'TypeScript · JavaScript',
      'Node.js · Express',
      'React.js · Next.js',
      'REST APIs · GraphQL-Grundlagen',
      'PostgreSQL · SQL',
      'MongoDB · Prisma-Grundlagen',
      'Docker · CI/CD · Git',
      'Agile · Scrum',
    ],
    projects: [
      {
        title: 'Otonom-Travelagency — Full-Stack-Buchungsplattform',
        stack: 'TypeScript · Node.js · Next.js · FastAPI · Stripe · REST APIs · Monorepo',
        desc: 'Monorepo aus TypeScript-Node.js-Gateway, Python-Service und Next.js-Frontend. Echte API-Integrationen (Amadeus, Hotelbeds, Stripe, Twilio), sauberes Daten- und Fehlerhandling über den gesamten Buchungsfluss.',
      },
      {
        title: 'Stock-Management-SaaS — End-to-End-Webanwendung',
        stack: 'React · TypeScript · Node.js · Express · MongoDB · Stripe',
        desc: 'Komplette Webanwendung selbst gebaut: REST-API, Authentifizierung, Datenmodell, Business-Logik, Dashboard-Auswertungen und Stripe-Zahlungsanbindung.',
      },
      {
        title: 'Autonomous SecOps Agent — Echtzeit-Web-Dashboard',
        stack: 'Next.js 14 · TypeScript · WebSocket/SSE · React Flow · REST APIs · Multi-Tenant',
        desc: 'Next.js-14-Frontend mit Echtzeit-Layer (WebSocket/SSE) und interaktivem React-Flow-Graph. Multi-Tenant-Architektur mit RBAC, REST-APIs und verschlüsselten Mandanten-Daten.',
      },
    ],
    skills: [
      { category: 'Backend', items: 'Node.js, Express, TypeScript, REST APIs, GraphQL-Grundlagen, Event-Driven Architecture, Stripe API' },
      { category: 'Frontend', items: 'React.js, Next.js 14, TypeScript, JavaScript (ES6+), Redux, Zustand, React Flow, TailwindCSS' },
      { category: 'Datenbanken', items: 'PostgreSQL, SQL, MongoDB, Firebase, Datenmodellierung, Prisma-Grundlagen' },
      { category: 'DevOps & Tools', items: 'Docker, Git/GitHub, CI/CD, Linux, Playwright, npm/pnpm, AWS' },
      { category: 'Arbeitsweise', items: 'Agile/Scrum, Jira, Code Reviews, automatisierte Tests, technische Dokumentation' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Schwemer,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Full Stack Developer für Node.js und TypeScript. Mit diesem Stack arbeite ich seit anderthalb Jahren täglich: TypeScript im Back- und Frontend, Node.js mit Express, dazu React und Next.js. Dass apploft Apps für namhafte Kunden baut und dabei auf saubere Architektur achtet, passt zu der Art, wie ich entwickle.`,

      `Was ich konkret gebaut habe: Für meine Otonom-Travelagency habe ich ein Monorepo aufgesetzt, in dem ein TypeScript-Node.js-Gateway echte Buchungen über Amadeus, Hotelbeds und Stripe abwickelt, mit einem Next.js-Frontend davor. Dabei habe ich REST-APIs spezifiziert, Datenmodelle entworfen und für robustes Fehler- und Transaktionshandling gesorgt. In einer eigenen Stock-Management-Webanwendung habe ich das komplette Paket selbst umgesetzt: REST-API, Authentifizierung, Datenmodell, Dashboard und Zahlungsanbindung über Stripe. Die Verantwortung für API und Datenmodell von Anfang bis Ende ist für mich also Alltag.`,

      `Technisch decke ich Ihren Kern ab: TypeScript, Node.js, React und Next.js, dazu PostgreSQL und SQL, Docker, CI/CD und Git. Mit Nest.js und Prisma habe ich noch nicht produktiv gearbeitet, die Grundlagen (Dependency Injection, ORM-Konzepte, Migrations) kenne ich aber und arbeite mich erfahrungsgemäß in wenigen Wochen ein. GraphQL habe ich bisher als Konsument genutzt, REST-Schnittstellen entwerfe ich routiniert selbst.`,

      `Vor meiner Umschulung zum Fachinformatiker und Full-Stack-Developer habe ich ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Eigenverantwortung, Teamarbeit und der direkte Draht zum Kunden sind mir daher vertraut. Ich wohne in Bonn, arbeite gut remote und spreche fließend Deutsch und gutes Englisch.`,
    ],
  },
};
