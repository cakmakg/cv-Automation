// Linkbroker (JustScale GmbH) — Full-Stack Developer (m/w/d)
// Standort Bonn-Ramersdorf / Region Königswinter, Remote-Option, kleines Startup (~20 MA)
// Linkbuilding & digitale PR DACH. GF: Mats-Lennart Petersen
// Run: node generate-bewerbung.mjs companies/linkbroker.mjs

export default {
  slug: 'linkbroker',
  date: '01.06.2026',
  language: 'de',
  signatureWidth: '210px',

  recipient: [
    'JustScale GmbH (Linkbroker)',
    'Humboldtstraße 20',
    '53639 Königswinter',
  ],

  subject: 'Bewerbung als Full-Stack Developer',

  cv: {
    tagline: 'Full-Stack Developer · TypeScript · React · Node.js',
    competencies: [
      'TypeScript · JavaScript',
      'React.js · Next.js',
      'Node.js · Express',
      'REST APIs · Datenbankdesign',
      'PostgreSQL · SQL · MongoDB',
      'Stripe · Payment · CRM',
      'Docker · CI/CD · Git',
      'Eigenverantwortliches Arbeiten',
    ],
    projects: [
      {
        title: 'Stock-Management-SaaS — End-to-End-Webanwendung',
        stack: 'React · TypeScript · Node.js · Express · Datenbank · Stripe',
        desc: 'Komplette Webanwendung vom Entwurf bis zum Deployment selbst gebaut: REST-API, Authentifizierung, Datenmodell, Business-Logik, Dashboard-Auswertungen und Zahlungsanbindung über Stripe.',
      },
      {
        title: 'Otonom-Travelagency — Full-Stack-Plattform mit externen Integrationen',
        stack: 'TypeScript · Node.js · Next.js · Stripe · Twilio · REST APIs · Monorepo',
        desc: 'Monorepo aus Node.js-Gateway und Next.js-Frontend. Anbindung externer Systeme (Amadeus, Hotelbeds, Stripe, Twilio), saubere Datenmodelle und robustes Fehler- und Transaktionshandling.',
      },
      {
        title: 'Autonomous SecOps Agent — Echtzeit-Web-Dashboard',
        stack: 'Next.js 14 · TypeScript · WebSocket/SSE · React Flow · REST APIs · Docker',
        desc: 'Next.js-14-Frontend mit Echtzeit-Layer und interaktivem Graph, REST-APIs, containerisiertes Deployment und mandantenfähige Architektur mit sauberer Trennung der Daten.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'React.js, Next.js 14, TypeScript, JavaScript (ES6+), HTML, CSS, Redux, Zustand, TailwindCSS' },
      { category: 'Backend', items: 'Node.js, Express, TypeScript, REST APIs, Event-Driven Architecture, externe API-Integration' },
      { category: 'Datenbanken', items: 'PostgreSQL, SQL, MongoDB, Firebase, Datenbankdesign, Datenmodellierung, Optimierung' },
      { category: 'Integrationen', items: 'Stripe (Payment), Twilio, Amadeus, Hotelbeds, Webhook-Design, API-Orchestrierung' },
      { category: 'DevOps & Arbeitsweise', items: 'Docker, Git/GitHub, CI/CD, Linux, Clean Code, automatisierte Tests, Agile/Scrum' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Petersen,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Full-Stack Developer. Mit TypeScript, React und Node.js arbeite ich seit anderthalb Jahren täglich, und ich wohne in Bonn, direkt in Ihrer Region. An Linkbroker reizt mich besonders, dass Sie eine Plattform für Linkbuilding und digitale PR bauen: ein Feld, in dem KI und Automatisierung großen Hebel haben. Genau darauf liegt seit über einem Jahr mein Schwerpunkt.`,

      `Ich baue Full-Stack-Anwendungen, in denen Sprachmodelle eine zentrale Rolle spielen. In meinem Projekt AI Orchestra steuere ich mehrere LLMs (Claude, Gemini und OpenAI) über LangGraph und lasse Agenten Aufgaben über Gmail und mehrere Social-Plattformen automatisiert ausführen; Kontrollpunkte und Critic-Agents verhindern, dass fehlerhafte Ausgaben durchrutschen. Für ein Werbe-Tool habe ich eine mandantenfähige Pipeline aus acht KI-Agenten (Anthropic Managed Agents) aufgebaut, die Werbetexte und Creatives erzeugt und pro Kunde über eine Policy-Engine steuerbar ist. Systeme, die Inhalte automatisiert erzeugen und gegenprüfen, lassen sich direkt auf Linkbuilding- und PR-Workflows übertragen.`,

      `Genauso wichtig ist mir die solide Web-Basis darunter. In einer eigenen Stock-Management-Webanwendung habe ich das komplette Paket vom Entwurf bis zum Deployment umgesetzt: REST-API, Authentifizierung, Datenmodell, Dashboard und Zahlungsanbindung über Stripe. In meiner Otonom-Travelagency bindet ein Node.js-Gateway externe Systeme wie Stripe und Twilio an und wickelt echte Transaktionen ab. Externe Integrationen wie Payment- oder CRM-Anbindungen, die Sie in der Anzeige nennen, sind für mich vertrautes Terrain.`,

      `KI-Werkzeuge sind bei mir Teil des täglichen Arbeitens, nicht nur Projektthema. Ich nutze die Anthropic SDK und das Model Context Protocol, orchestriere mehrere LLM-Anbieter und setze KI-gestützte Tools auch direkt beim Entwickeln ein, um schneller von der Idee zum lauffähigen Prototyp zu kommen. Sauberer, wartbarer Code bleibt dabei die Grundlage: klare Datenmodelle, automatisierte Tests und nachvollziehbare Workflows über Git und CI/CD.`,

      `Vor meiner Umschulung zum Fachinformatiker und Full-Stack-Developer habe ich ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Eigenverantwortung und strukturiertes Arbeiten unter realen Bedingungen sind mir daher vertraut. Ich spreche fließend Deutsch und gutes Englisch und kann sowohl im Büro in Bonn als auch remote gut arbeiten.`,
    ],
  },
};
