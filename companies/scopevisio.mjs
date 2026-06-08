// Scopevisio AG — AI Software Engineer (m/w/d) – Integration & AI-First Anwendungen
// Bonn (Konrad-Zuse-Platz 7, 53227), hybrid/mobile work, Cloud-ERP
// Recruiter: Pascal Magiera (HR) — 0228 4334 2117
// Run: node generate-bewerbung.mjs companies/scopevisio.mjs

export default {
  slug: 'scopevisio',
  date: '01.06.2026',
  language: 'de',

  recipient: [
    'Scopevisio AG',
    'Konrad-Zuse-Platz 7',
    '53227 Bonn',
  ],

  subject: 'Bewerbung als AI Software Engineer – Integration & AI-First-Anwendungen',

  cv: {
    tagline: 'AI Software Engineer · LangGraph · TypeScript · Python · AWS',
    competencies: [
      'LangGraph · Multi-Agent',
      'TypeScript · Node.js',
      'Python · FastAPI',
      'PostgreSQL · MongoDB',
      'Claude · Anthropic SDK',
      'AWS · Docker · CI/CD',
      'RAG · Vector Search',
      'HITL · Critic-Agents · MCP',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent B2B-Automatisierung',
        stack: 'LangGraph · Claude · Gemini · OpenAI · MongoDB Vector Search · n8n',
        desc: 'Multi-LLM-Orchestrierung mit RAG-Layer auf Vector Search. n8n verbindet die Agenten mit externen APIs; HITL-Checkpoints und Critic-Agents verhindern Halluzinationen.',
      },
      {
        title: 'werbung-otomation — Multi-Tenant AI-Pipeline',
        stack: 'Anthropic Managed Agents · fal.ai · FastAPI · React',
        desc: '8-Agenten-Pipeline pro Tenant (1 Tenant = 1 Config-Ordner, B2B-SaaS-ready), YAML-Policy-Engine mit Tenant-Overrides, Bild-/Video-Generierung via fal.ai.',
      },
      {
        title: 'Autonomous SecOps Agent — AI Security Command Center',
        stack: 'LangGraph · AWS SageMaker RCF · AWS WAF · MCP · Next.js 14',
        desc: 'Sechsstufige LangGraph-Pipeline mit Anomalie-Scoring (RCF) und WAF-Auto-Mitigation unter HITL-Approval. Multi-Tenant-RBAC, AES-256-GCM, Echtzeit-WebSocket/SSE-Layer.',
      },
    ],
    skills: [
      { category: 'Backend', items: 'TypeScript, Python (FastAPI 3.11+), Node.js, Express, REST APIs, Event-Driven Architecture' },
      { category: 'Frontend', items: 'React.js, Next.js 14, TypeScript, Redux, Zustand, React Flow, TailwindCSS' },
      { category: 'AI & Agents', items: 'LangGraph, Multi-Agent Systems, Anthropic Managed Agents, Claude/Gemini/OpenAI, RAG, HITL-Workflows, MCP' },
      { category: 'Daten & Cloud', items: 'PostgreSQL, MongoDB, MongoDB Vector Search, ChromaDB, AWS Bedrock/SageMaker/WAF, n8n' },
      { category: 'DevOps & Sicherheit', items: 'Docker, Git/GitHub, CI/CD, Linux, Playwright, AES-256-GCM, GDPR PII-Masking, Multi-Tenant RBAC' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Magiera,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als AI Software Engineer für Integration und AI-First-Anwendungen. Seit anderthalb Jahren entwickle ich KI-Systeme, die produktiv laufen und nicht im Prototyp enden. Dass Scopevisio in Bonn sitzt, passt für mich gut, denn ich wohne hier.`,

      `Was ich konkret gebaut habe: AI Orchestra steuert mehrere Sprachmodelle (Claude, Gemini, OpenAI) über LangGraph. n8n verbindet die Agenten mit externen Systemen, und feste Kontrollpunkte mit Critic-Agents sorgen dafür, dass keine fehlerhaften Ausgaben durchrutschen. Für ein Werbe-Tool habe ich eine mandantenfähige Pipeline aufgebaut: ein Kunde, ein Config-Ordner, eigene Regeln pro Mandant über eine YAML-Policy. Genau diese saubere Mandantentrennung ist das, was eine Cloud-ERP-Plattform mit über 7.000 Kunden zuverlässig leisten muss.`,

      `Technisch passe ich gut zu Ihrem Stack: TypeScript und Python im Backend, Node.js, React und Next.js, dazu PostgreSQL, MongoDB, Docker, AWS und CI/CD. Bei KI arbeite ich täglich mit der LangChain-Familie und der Anthropic SDK; mit AWS SageMaker habe ich Anomalie-Erkennung produktiv umgesetzt. TensorFlow und das Monitoring mit Grafana, Prometheus und Jaeger hatte ich noch nicht im Einsatz, die Konzepte dahinter kenne ich aber aus eigenen Pipelines und arbeite mich schnell ein.`,

      `Vor meiner Umschulung zum Fachinformatiker und Full-Stack-Developer habe ich ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Eigenverantwortung und der direkte Draht zum Kunden sind mir daher vertraut.`,
    ],
  },
};
