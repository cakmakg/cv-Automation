// SKR Reisen GmbH — Full-Stack Developer (m/w/d)
// Run: node generate-bewerbung.mjs companies/skr-reisen.mjs

export default {
  slug: 'skr-reisen',
  date: '20.05.2026',

  recipient: [
    'SKR Reisen GmbH',
    'Personalabteilung',
    'Venloer Straße 47–53',
    '50672 Köln',
  ],

  subject: 'Bewerbung als Full-Stack Developer (m/w/d)',

  cv: {
    tagline: 'Full Stack Developer · Node.js · React · TypeScript',
    competencies: [
      'Node.js · Express · Next.js',
      'React · TypeScript · Redux',
      'RESTful APIs',
      'MongoDB · SQL · Vector Search',
      'Event-Driven Architecture',
      'Docker · CI/CD · Linux',
      'AWS Bedrock · Cloud',
      'n8n Workflow-Automation',
    ],
    projects: [
      {
        title: 'Full-Stack SaaS — Stock Management Plattform',
        stack: 'Node.js · Express · React · MongoDB · Stripe',
        desc: 'Produktive SaaS-Anwendung end-to-end geliefert: skalierbare Backend-Architektur, sauberes API-Design, Auth, Dashboard-Analytics und Payment-Integration.',
      },
      {
        title: 'VSpots — API-Integration Pipeline',
        stack: 'n8n · Node.js · REST · LLM',
        desc: 'Workflow-Pipeline mit n8n als Orchestrierungs-Layer und externer API-Integration. Rate-Limit-Handling, Error-Recovery, Datenvalidierung in Produktion.',
      },
      {
        title: 'AI Orchestra — Multi-Agent System',
        stack: 'LangGraph · Node.js · MongoDB · Vector Search',
        desc: 'Verteiltes Multi-Agent-System für B2B-Prozessautomatisierung mit klaren Service-Grenzen und Quality Gates für Output-Validierung.',
      },
    ],
    skills: [
      { category: 'Backend', items: 'Node.js, Express.js, Next.js, RESTful APIs, Event-Driven Architecture, AWS Bedrock, Stripe API' },
      { category: 'Frontend', items: 'React.js, TypeScript, JavaScript (ES6+), Redux, TailwindCSS, SASS, Material-UI' },
      { category: 'Datenbanken', items: 'MongoDB, MongoDB Vector Search, SQL, Firebase' },
      { category: 'DevOps & Tools', items: 'Docker, CI/CD, Linux, Git/GitHub, Agile/Scrum, Jira' },
      { category: 'Automation & AI', items: 'n8n, Webhooks, LangGraph, Multi-Agent Systems, RAG, Claude/Gemini/Groq APIs' },
    ],
  },

  anschreiben: {
    paragraphs: [
      `mit großem Interesse bewerbe ich mich auf Ihre Stellenanzeige als Full-Stack Developer (m/w/d). Als Quereinsteiger arbeite ich seit anderthalb Jahren produktiv als Full-Stack Developer mit Schwerpunkt auf Node.js, TypeScript und React.`,

      `In meinem Stock-Management-SaaS habe ich Backend, Frontend, Authentifizierung und Stripe-Integration alleine aufgebaut. Was ich aus dem Projekt mitnehme, ist weniger eine Liste an Skills als die Erkenntnis, dass saubere API-Grenzen und ein einfaches Datenmodell den späteren Ärger reduzieren. Mit MongoDB, Docker und Git arbeite ich täglich; AWS Bedrock habe ich produktiv eingesetzt, sodass mir Cloud-Konzepte vertraut sind.`,

      `Bei Zoho und Deluge muss ich ehrlich sein: damit habe ich noch nicht gearbeitet. Als ich vor anderthalb Jahren zum ersten Mal mit n8n und externen APIs anfing, war ich nach sechs Wochen produktiv. Mit Deluge erwarte ich keine andere Lernkurve, weil die Syntax JavaScript-nah aussieht.`,

      `Mein Weg in die IT war ungerade. Bis 2023 habe ich in Bonn ein eigenes Catering-Unternehmen geführt, danach zwei Umschulungen abgeschlossen und Praktika bei Vidinli und GIS gemacht. Ich schreibe Code nicht aus Selbstzweck, sondern weil ich damit Probleme lösen will, die jemand auch wirklich hat.`,
    ],
  },
};
