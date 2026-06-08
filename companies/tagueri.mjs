// Tagueri AG / Scalian Germany — Junior Consultant Fullstack Development (m/w/d)
// Standort Köln, onsite + Reisebereitschaft DE, Entry-Level, Beratung + Entwicklung
// Bewerbung: bewerbung@tagueri.com (keine Ansprechperson genannt)
// Run: node generate-bewerbung.mjs companies/tagueri.mjs

export default {
  slug: 'tagueri',
  date: '01.06.2026',
  language: 'de',

  recipient: [
    'Tagueri AG (Scalian Germany)',
    'Zirkusweg 1',
    '20359 Hamburg',
  ],

  subject: 'Bewerbung als Junior Consultant Fullstack Development',

  cv: {
    tagline: 'Fullstack Developer · React · Node.js · Python · SQL',
    competencies: [
      'JavaScript · TypeScript',
      'React.js · Next.js',
      'Node.js · Express',
      'Python · FastAPI',
      'SQL · PostgreSQL',
      'REST APIs · Git',
      'Docker · CI/CD · Cloud',
      'Stakeholder-Kommunikation',
    ],
    projects: [
      {
        title: 'Otonom-Travelagency — Full-Stack-Buchungsplattform',
        stack: 'TypeScript · Node.js · Python (FastAPI) · Next.js · SQL · REST APIs · Monorepo',
        desc: 'Monorepo aus Node.js-Gateway, Python-Service und Next.js-Frontend. Echte API-Integrationen (Amadeus, Hotelbeds, Stripe), saubere Datenmodelle und Fehlerbehandlung über den gesamten Buchungsfluss.',
      },
      {
        title: 'Stock-Management-SaaS — End-to-End-Webanwendung',
        stack: 'React · TypeScript · Node.js · Express · Datenbank · Stripe',
        desc: 'Komplette Webanwendung selbst gebaut: REST-API, Authentifizierung, Datenmodell, Business-Logik, Dashboard-Auswertungen und Zahlungsanbindung über Stripe.',
      },
      {
        title: 'Autonomous SecOps Agent — Echtzeit-Web-Dashboard',
        stack: 'Next.js 14 · TypeScript · Python · WebSocket/SSE · REST APIs · Docker',
        desc: 'Next.js-14-Frontend mit Echtzeit-Layer und interaktivem Graph, Python-Backend-Services, REST-APIs und containerisiertem Deployment in einer mandantenfähigen Architektur.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'React.js, Next.js 14, JavaScript (ES6+), TypeScript, HTML, CSS, Redux, Zustand, TailwindCSS' },
      { category: 'Backend', items: 'Node.js, Express, Python (FastAPI 3.11+), REST APIs, API-Integration, Event-Driven Architecture' },
      { category: 'Datenbanken', items: 'SQL, PostgreSQL, MongoDB, Firebase, Datenmodellierung' },
      { category: 'DevOps & Cloud', items: 'Git/GitHub, CI/CD-Pipelines, Docker, AWS, Linux, Playwright' },
      { category: 'Beratung & Arbeitsweise', items: 'Anforderungsanalyse, Stakeholder-Kommunikation, Clean Code, automatisierte Tests, Agile/Scrum, Jira' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Junior Consultant Fullstack Development. Die Verbindung aus Softwareentwicklung und Kundenberatung reizt mich besonders, weil sie zu meinem Werdegang passt: Ich entwickle Full-Stack-Anwendungen mit React, Node.js und Python und habe vorher jahrelang direkt mit Kunden gearbeitet. Beides zusammenzubringen, ist für mich die richtige Richtung.`,

      `Was ich konkret gebaut habe: Für meine Otonom-Travelagency habe ich ein Monorepo aus Node.js-Gateway, Python-Service und Next.js-Frontend aufgesetzt, das echte Buchungen über Amadeus, Hotelbeds und Stripe abwickelt. Dabei habe ich REST-APIs entworfen, Datenmodelle aufgebaut und auf sauberes Fehlerhandling geachtet. In einer eigenen Stock-Management-Webanwendung habe ich das komplette Paket selbst umgesetzt: API, Authentifizierung, Datenmodell, Dashboard und Zahlungsanbindung. Damit bringe ich die Frontend-, Backend- und Datenbankbasis mit, die Sie für die Rolle suchen.`,

      `Technisch arbeite ich mit React, JavaScript und TypeScript im Frontend, Node.js und Python im Backend, dazu SQL, Git, Docker und CI/CD-Pipelines. Als Quereinsteiger bin ich es gewohnt, mich zügig in neue Sprachen und Frameworks einzuarbeiten, und gerade die Offenheit, eingefahrene Lösungswege zu hinterfragen, sehe ich als Stärke.`,

      `Vor meiner Umschulung zum Fachinformatiker und Full-Stack-Developer habe ich ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Anforderungen aufnehmen, mit unterschiedlichen Ansprechpartnern kommunizieren und technische Dinge verständlich erklären, gehört für mich zum Alltag, nicht erst seit der Entwicklung. Köln liegt direkt vor meiner Haustür, regelmäßige Reisen innerhalb Deutschlands sind für mich kein Problem, und ich spreche fließend Deutsch und gutes Englisch.`,
    ],
  },
};
