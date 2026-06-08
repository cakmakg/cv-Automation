// FNTIO (AI-First Systems Engineers for Enterprise) — Full-Stack Entwickler (m/w/d) .NET, 100% Remote
// Office: Lindleystraße 8a, 60314 Frankfurt am Main — 100% Remote. Kunden: Siemens, Deutsche Börse, VW.
// TECH-Profil (AI-First) → Anschreiben aus bewerbung.md (AI Engineer / Agentic).
// FIT-WARNUNG: harte Anforderung "3 Jahre .NET-Schwerpunkt" — Gökhan hat KEIN .NET (TS/Node/Python).
//   Aber: AI-CLI-Tool-Erfahrung (Claude Code) + Critic-Agents/HITL = AI-Output kritisch bewerten = ihr Kern.
// HINWEIS: Rechtsform "GmbH" angenommen, nicht verifiziert. Firma will CV + kurzes Statement.
// Run: node generate-bewerbung.mjs companies/fntio.mjs

export default {
  slug: 'fntio',
  date: '02.06.2026',
  language: 'de',

  recipient: [
    'FNTIO GmbH',
    'Lindleystraße 8a',
    '60314 Frankfurt am Main',
  ],

  subject: 'Bewerbung als Full-Stack Entwickler',

  cv: {
    tagline: 'AI Engineer · Agentic Systems · Claude Code · AWS · Fullstack',
    competencies: [
      'AI CLI · Claude Code · Cursor',
      'LangGraph · Multi-Agent',
      'Critic-Agents · HITL · QA',
      'TypeScript · Node.js',
      'Python · FastAPI',
      'AWS · Docker · CI/CD',
      'REST APIs · Integration',
      'React · Next.js',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent B2B-System',
        stack: 'LangGraph · Claude · Node.js · MongoDB · n8n',
        desc: 'Orchestriert mehrere LLM-Anbieter über LangGraph; Critic-Agents und Human-in-the-Loop-Checkpoints bewerten den AI-Output kritisch und fangen Fehler ab, bevor sie Wirkung entfalten.',
      },
      {
        title: 'Autonomous SecOps Agent — AI Command Center',
        stack: 'Next.js 14 · AWS SageMaker/WAF · WebSocket/SSE · MCP',
        desc: 'End-to-end-System: Next.js-Frontend mit Echtzeit-Layer, AWS-Anbindung, RBAC und einer QA-Critic-Stufe mit HITL-Approval — AI generiert, der Mensch verantwortet Architektur und Qualität.',
      },
      {
        title: 'werbung-otomation — Multi-Tenant AI-Pipeline',
        stack: 'Anthropic Managed Agents · React · FastAPI · fal.ai',
        desc: 'Mandantenfähige Pipeline aus spezialisierten Agenten mit Policy- und Compliance-/QA-Stufe; React-Frontend, FastAPI-Backend, saubere API-Integration externer Dienste.',
      },
    ],
    skills: [
      { category: 'AI & Agents', items: 'Claude Code, Cursor, Gemini CLI, LangGraph, Multi-Agent Systems, Anthropic SDK, RAG, Critic-Agents, HITL, MCP' },
      { category: 'Backend', items: 'Node.js, Python (FastAPI), Express, REST-APIs, Event-Driven Architecture' },
      { category: 'Frontend', items: 'React.js, Next.js 14, TypeScript, JavaScript (ES6+), TailwindCSS' },
      { category: 'Cloud & DevOps', items: 'AWS (Bedrock/SageMaker/WAF), Docker, Git/GitHub, CI/CD, Linux, automatisierte Tests' },
      { category: 'Datenbanken', items: 'MongoDB, PostgreSQL, MongoDB Vector Search, ChromaDB' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Warum FNTIO (Statement-Charakter)
      `ich bewerbe mich auf Ihre Position als Full-Stack Entwickler. Ihr Ansatz hat mich sofort angesprochen: Der Engineer denkt in Architektur und Entscheidungen, AI übernimmt die Ausführung, und der eigentliche Wert liegt darin, AI-Output kritisch zu bewerten und Enterprise-Qualität zu liefern. Genau so arbeite ich seit anderthalb Jahren.`,

      // Block 2 — AI CLI Tools (direkte Anforderung)
      `Claude Code nutze ich täglich als zentrales Arbeitsmittel — nicht als Spielerei, sondern als Multiplikator für Entwicklung, Refactoring und Testing. Ich gebe Ideen an AI-Agents, iteriere den Output und prüfe ihn kritisch, statt ihn blind zu übernehmen. Dass Sie LLM-Keys und AI-Tools als Arbeitsmittel statt als Benefit begreifen, deckt sich genau mit meiner Arbeitsweise.`,

      // Block 3 — Showcase als Beleg für "AI-Output kritisch bewerten"
      `In meinen eigenen Systemen habe ich genau dieses Prinzip in Architektur gegossen. AI Orchestra orchestriert mehrere LLM-Anbieter über LangGraph; Critic-Agents und Human-in-the-Loop-Checkpoints fangen fehlerhafte Ausgaben ab, bevor sie Wirkung entfalten. In Autonomous SecOps Agent habe ich ein Next.js-Frontend mit AWS-Anbindung, rollenbasierter Zugriffskontrolle und einer QA-Critic-Stufe gebaut. Das ist im Kern dasselbe, was Sie beschreiben: AI generiert, der Mensch verantwortet Architektur und Qualität.`,

      // Block 4 — Ehrliche .NET-Lücke + Ramp im AI-First-Modell
      `Offen gesagt: Mein Full-Stack-Schwerpunkt liegt bisher auf TypeScript/Node.js und Python, nicht auf .NET. In Ihrem Modell, in dem AI-Agents die Ausführung übernehmen und der Engineer Architektur und kritische Bewertung beisteuert, sehe ich das jedoch als überschaubare Lücke — gerade weil ich die Werkzeuge (Claude Code) und die Denkweise mitbringe, mit denen sich eine neue Sprache schnell produktiv erschließen lässt. AWS, Docker, CI/CD und automatisiertes Testing sind ohnehin Teil meines Alltags.`,

      // Block 5 — Persönlichkeit / Kultur-Fit
      `Vor meinen Umschulungen zum Fachinformatiker und Full-Stack-Developer habe ich ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Ergebnisverantwortung, direkte Kommunikation und eine Hands-on-Mentalität — die Kultur, die Sie beschreiben — sind mir daher vertraut.`,
    ],
  },
};
