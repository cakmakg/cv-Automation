// TALKE — Specialist KI & Automatisierung (Mitarbeit an KI- und Digitalisierungs-Use-Cases)
// Standort Hürth, hybrides Arbeiten, n8n + MCP explicit in JD
// Run: node generate-bewerbung.mjs companies/talke.mjs

export default {
  slug: 'talke',
  date: '30.05.2026',

  recipient: [
    'ALFRED TALKE GmbH & Co. KG',
    'Max-Planck-Straße 20',
    '50354 Hürth',
  ],

  subject: 'Bewerbung im Bereich KI- & Digitalisierungs-Use-Cases (Automatisierung & agentische Workflows)',

  cv: {
    tagline: 'Full-Stack Developer · KI-Workflows · n8n · Multi-Agent Systems',
    competencies: [
      'TypeScript · JavaScript',
      'Node.js · Express',
      'n8n · Workflow Automation',
      'LangGraph · Multi-Agent',
      'Claude · Gemini · Groq APIs',
      'MCP · RAG · Vector Search',
      'REST APIs · SQL · MongoDB',
      'Monitoring · HITL · Critic-Agents',
    ],
    projects: [
      {
        title: 'AI Orchestra — Agentisches Multi-Agent-System für B2B-Automatisierung',
        stack: 'LangGraph · Claude · Gemini · Groq · MongoDB Vector Search · n8n · MCP',
        desc: 'Mehrere KI-Anbieter orchestriert, n8n als Nervensystem zu externen APIs. Vector Search als Retrieval, Critic-Agents und HITL-Checkpoints gegen Halluzinationen.',
      },
      {
        title: 'VSpots — Vollautomatisierte Daten-Pipeline mit LLM-Bewertung',
        stack: 'n8n · Modash API · Groq LLM',
        desc: 'End-to-End-Pipeline: Datenerfassung, LLM-Bewertung, Reports. Mit Rate-Limit-Handling und sauberer Fehlerbehandlung.',
      },
      {
        title: 'Full-Stack SaaS — Stock Management',
        stack: 'React · TypeScript · Node.js · MongoDB · Stripe',
        desc: 'End-to-end Web-Anwendung: skalierbare Backend-Architektur, REST-APIs, Auth, Geschäftslogik, Dashboard.',
      },
    ],
    skills: [
      { category: 'KI & Agenten', items: 'LangGraph, Multi-Agent Systems, Claude/Gemini/Groq APIs, RAG, HITL-Workflows, Critic-Agents, MCP' },
      { category: 'Automatisierung', items: 'n8n, Webhook-Design, API-Orchestrierung, Pipeline-Design, Event-Driven Architecture' },
      { category: 'Web-Stack', items: 'Node.js, Express, Next.js, React.js, TypeScript, JavaScript (ES6+), REST-APIs' },
      { category: 'Daten', items: 'MongoDB, MongoDB Vector Search, SQL, Firebase, AWS Bedrock' },
      { category: 'DevOps & Tools', items: 'Docker, Git/GitHub, CI/CD, Linux, Agile/Scrum, Jira' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Guerreiro,',
    paragraphs: [
      `mit großem Interesse bewerbe ich mich auf Ihre Stellenanzeige im Bereich KI- und Digitalisierungs-Use-Cases. Die Kombination aus agentischen Workflows, n8n als Automatisierungsplattform, MCP als Integrationsstandard und der Rolle als Schnittstelle zwischen Business und IT beschreibt sehr genau das Profil, an dem ich aktuell in eigenen Projekten und im Rahmen meiner Umschulung zum Full-Stack-Developer arbeite — mit klarem Fokus auf Stabilität, Monitoring und sauberen Übergang in den Produktivbetrieb.`,

      `Meine technische Basis sind TypeScript, React und Node.js/Express, mit täglichem Fokus auf REST-APIs, SQL und relationalen Datenmodellen sowie MongoDB. Im Bereich KI und Automatisierung arbeite ich produktiv mit n8n für Workflow-Orchestrierung, mit LangGraph für Multi-Agent-Systeme und mit den Claude-, Gemini- und Groq-APIs. MCP nutze ich aktuell, um Agenten strukturiert an verschiedene Datenquellen und Tools anzubinden. Sauberes Error-Handling, Logging und Monitoring sind für mich dabei keine Optionen, sondern Voraussetzungen — gerade bei Workflows, die in produktiven Prozessen laufen sollen.`,

      `Mein Hauptprojekt AI Orchestra ist genau das Szenario, das Sie beschreiben: ein agentisches System auf LangGraph-Basis, das mehrere KI-Anbieter (Claude, Gemini, Groq) orchestriert, über MongoDB Vector Search auf eigene Daten zugreift und über n8n an externe Dienste angebunden ist. Um Halluzinationen zu vermeiden, sichere ich die Qualität durch Critic-Agents und strikte Human-in-the-Loop-Checkpoints ab. In einer weiteren Pipeline (VSpots) habe ich eine vollautomatisierte Daten-Ingestion mit Modash-API und Groq-Scoring umgesetzt — inklusive Rate-Limit-Handling und sauberer Fehlerbehandlung im Produktivbetrieb.`,

      `Mit Signavio, Langdock und Microsoft Azure habe ich bisher nicht produktiv gearbeitet. Langdock liegt konzeptionell sehr nahe an den LLM-Workflow-Tools, die ich täglich einsetze, der Cloud-Wechsel von AWS Bedrock zu Azure ist überschaubar, und Prozessmodellierung kenne ich aus eigener Projektpraxis. Bei n8n, MCP und den LLM-APIs bin ich jeweils nach wenigen Wochen produktiv geworden.`,

      `Vor meinen Umschulungen zum Fachinformatiker und Full-Stack-Developer war ich in der Tourismusbranche tätig und habe danach ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Diese Jahre als Selbstständiger haben mir beigebracht, fachliche Anforderungen und technische Lösungen zusammen zu denken — die Schnittstelle zwischen Business und IT ist genau die Rolle, in der ich mich zu Hause fühle. Verantwortungsbewusstsein, strukturierte Arbeitsweise und Belastbarkeit nehme ich aus dieser Zeit mit.`,
    ],
  },
};
