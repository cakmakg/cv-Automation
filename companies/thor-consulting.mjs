// Thor Consulting (für E-Commerce-/Telekom-Kunde Köln-Bonn) — TypeScript Fullstack Developer (m/w/d)
// Standort Troisdorf, hybrides Arbeiten
// Run: node generate-bewerbung.mjs companies/thor-consulting.mjs

export default {
  slug: 'thor-consulting',
  date: '30.05.2026',

  recipient: [
    'Thor Consulting',
    'Herr Alex Quách',
    'Düsseldorf',
  ],

  subject: 'Bewerbung als TypeScript Fullstack Developer (m/w/d)',

  cv: {
    tagline: 'Full Stack Developer · TypeScript · React · Node.js',
    competencies: [
      'TypeScript · JavaScript',
      'React.js · Redux',
      'Node.js · Express',
      'REST · JSON · APIs',
      'MongoDB · SQL',
      'Docker · Git/GitHub',
      'Playwright · Automation',
      'AI-Tools (Claude Code · Claude API)',
    ],
    projects: [
      {
        title: 'Full-Stack SaaS — Stock Management',
        stack: 'React · TypeScript · Node.js · Express · MongoDB',
        desc: 'End-to-end Web-Anwendung: Backend-Architektur, REST-APIs, Auth, Business-Logik, Dashboard-Analytics und Payment-Integration.',
      },
      {
        title: 'AI Orchestra — Multi-Agent System',
        stack: 'LangGraph · Claude · Gemini · Groq · MongoDB',
        desc: 'Multi-Agent-System mit Queue-/Pipeline-Strukturen, REST-Orchestrierung mehrerer LLM-Anbieter und Quality Gates gegen Halluzinationen.',
      },
      {
        title: 'career-ops — Automation Tool mit Playwright',
        stack: 'Node.js · Playwright · PDF-Generation',
        desc: 'Eigenes Automation-Tool: HTML-zu-PDF-Rendering und Web-Scraping mit Playwright, modulare Pipeline für End-to-End-Bewerbungen.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'React.js, TypeScript, JavaScript (ES6+), Redux, HTML, CSS, TailwindCSS, Material-UI' },
      { category: 'Backend', items: 'Node.js, Express.js, Next.js, REST-APIs, Event-Driven Architecture, Stripe API' },
      { category: 'Datenbanken', items: 'MongoDB, SQL, MongoDB Vector Search, Firebase' },
      { category: 'DevOps & Tools', items: 'Docker, Git/GitHub, CI/CD, Linux, Playwright, npm/pnpm, Agile/SCRUM, Jira' },
      { category: 'KI-gestützte Entwicklung', items: 'Claude Code im Daily-Workflow, Claude API, LangGraph, RAG, n8n, Multi-Agent Systems' },
    ],
  },

  anschreiben: {
    paragraphs: [
      `ich bewerbe mich auf Ihre Position als TypeScript Fullstack Developer. Seit anderthalb Jahren arbeite ich produktiv mit TypeScript, React, Node.js und Express — genau dem Stack, den Sie ausschreiben.`,

      `Mein Schwerpunkt liegt auf React und TypeScript im Frontend sowie Node.js und Express im Backend, ergänzt um REST-APIs, MongoDB und Docker. Im Praktikum bei Vidinli Software habe ich React-/TypeScript-Frontends entwickelt, im eigenen Stock-Management-SaaS Backend, API, Auth und Datenbank end-to-end gebaut. SQL und relationale Modelle sind mir vertraut; der Einstieg in MS SQL ist überschaubar.`,

      `Für Automatisierung nutze ich Playwright produktiv in einem eigenen Tool — der Schritt zu Puppeteer ist klein. Mit Redis, BullMQ und Turborepo habe ich noch nicht gearbeitet, kenne Queueing- und Pipeline-Strukturen aber aus AI Orchestra (Multi-Agent-System mit Claude, Gemini, Groq) und aus n8n-Workflows. Neue Tools setze ich erfahrungsgemäß innerhalb weniger Wochen produktiv ein.`,

      `Bei Ihnen sehe ich Anknüpfungspunkte vor allem in der Entwicklung sauberer Frontend- und Backend-Lösungen, der Pflege wartbarer APIs und bei Automatisierungen. Codequalität und Refactoring sind Themen, die mir aus eigenen Projekten wichtig sind.`,

      `Vor meinen Umschulungen zum Fachinformatiker und Full-Stack-Developer war ich in der Tourismusbranche tätig und habe ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Daraus nehme ich Verantwortungsbewusstsein, strukturierte Arbeitsweise und Belastbarkeit mit.`,
    ],
  },
};
