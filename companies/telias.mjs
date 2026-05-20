// TELiAS Gruppe — Full-Stack Entwickler (m/w/d), 100% Remote
// Run: node generate-bewerbung.mjs companies/telias.mjs

export default {
  slug: 'telias',
  date: '20.05.2026',

  recipient: [
    'TELiAS Gruppe',
    'Personalabteilung',
    'Köln',
  ],

  subject: 'Bewerbung als Full-Stack Entwickler (m/w/d), 100 % Remote',

  cv: {
    tagline: 'Full Stack Developer · React · TypeScript · LLM-Integration',
    competencies: [
      'JavaScript · TypeScript',
      'React.js · Redux',
      'Node.js · Express',
      'RESTful APIs',
      'LLM-Integration',
      'AI-Tools (ChatGPT · Copilot)',
      'Agile · SCRUM',
      'Docker · Git/GitHub',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent LLM-System',
        stack: 'LangGraph · Claude · Gemini · Groq · MongoDB',
        desc: 'Produktive LLM-Integration: mehrere Anbieter über RESTful APIs orchestriert, Vector Search als Retrieval-Layer, Quality Gates &amp; Critic-Agents gegen Halluzinationen.',
      },
      {
        title: 'VSpots — API &amp; LLM-Pipeline',
        stack: 'n8n · Modash API · Groq LLM · REST',
        desc: 'Workflow-Pipeline mit externer API und LLM-Bewertung. Rate-Limit-Handling, Error-Recovery, Datenvalidierung in Produktion.',
      },
      {
        title: 'Full-Stack SaaS — Stock Management',
        stack: 'Node.js · React · MongoDB · Stripe',
        desc: 'End-to-end Web-Anwendung: Backend-Architektur, Auth, Business-Logik, Dashboard-Analytics und Payment-Integration.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'React.js, TypeScript, JavaScript (ES6+), Redux, HTML, CSS, TailwindCSS, SASS, Material-UI' },
      { category: 'Backend', items: 'Node.js, Express.js, Next.js, RESTful APIs, Event-Driven Architecture, Stripe API' },
      { category: 'AI-Integration', items: 'LLM-APIs (Claude · Gemini · Groq · ChatGPT), LangGraph, RAG, Copilot im Workflow' },
      { category: 'Datenbanken', items: 'MongoDB, MongoDB Vector Search, SQL, Firebase' },
      { category: 'DevOps & Tools', items: 'Docker, CI/CD, Linux, Git/GitHub, Monitoring, Test-Automatisierung, Agile/SCRUM, Jira' },
    ],
  },

  anschreiben: {
    paragraphs: [
      `mit großem Interesse bewerbe ich mich auf Ihre Stellenanzeige als Full-Stack Entwickler (m/w/d). Als Quereinsteiger arbeite ich seit anderthalb Jahren produktiv als Full-Stack Developer mit Schwerpunkt auf React, TypeScript und Node.js, und habe in dieser Zeit auch praktische Erfahrung in der Integration von LLMs und AI-Tools gesammelt.`,

      `In meinem Projekt AI Orchestra habe ich ein Multi-Agent-System gebaut, das Claude, Gemini und Groq über REST-Schnittstellen orchestriert. Das Interessante an dem Projekt war weniger das LLM selbst, sondern alles drumherum: Wie verhindert man, dass ein Modell halluziniert, ohne den Output unbenutzbar zu zensieren? Diese Fragen habe ich auch in einer kleineren Pipeline mit n8n, Modash-API und Groq praktisch durchgespielt, mit Rate-Limit-Handling, Retries und einer ehrlichen Fehlerbehandlung.`,

      `Was meinen Web-Stack angeht: React und TypeScript habe ich im Praktikum bei Vidinli täglich eingesetzt, Node.js und Express im eigenen Stock-Management-SaaS, dazu Stripe für Payments und MongoDB als Datenbank. REST-APIs sind für mich Alltag, SCRUM auch.`,

      `Bei PHP und Laravel muss ich ehrlich sein, mit denen habe ich bisher nicht gearbeitet. Wenn ich anfangen sollte, plane ich vorab ein paar Tage Selbststudium mit einem kleinen Projekt. Bei n8n und Groq habe ich auch ohne Vorerfahrung begonnen und war nach sechs Wochen produktiv.`,

      `Mein Weg in die IT verläuft nicht linear. Zwischen 2020 und 2023 habe ich ein eigenes Catering-Unternehmen geführt, danach zwei Umschulungen abgeschlossen und drei Praktika gemacht. Ich denke in Lösungen, nicht in Tickets, und ich weiß, was es bedeutet, eine Sache von Anfang bis Ende zu verantworten.`,
    ],
  },
};
