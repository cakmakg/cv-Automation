// Capgemini — Agentic AI Consultant (w/m/d) Public Sector
// Standort Ratingen, hybrid (auch andere DE-Standorte / HomeOffice)
// Recruiter: Tobias Stryk (career.de@capgemini.com)
// Run: node generate-bewerbung.mjs companies/capgemini.mjs

export default {
  slug: 'capgemini',
  date: '30.05.2026',

  recipient: [
    'Capgemini Deutschland GmbH',
    'Berliner Allee 26-28',
    '40212 Düsseldorf',
  ],

  subject: 'Bewerbung als Agentic AI Consultant (w/m/d) Public Sector',

  cv: {
    tagline: 'Agentic AI Engineer · LangGraph · Multi-Agent Systems · AWS',
    competencies: [
      'LangGraph · Multi-Agent',
      'Claude · Gemini · Groq APIs',
      'RAG · Vector Search',
      'AWS Bedrock · SageMaker · WAF',
      'n8n · Workflow Automation',
      'TypeScript · Node.js · Python',
      'HITL · Critic-Agents · MCP',
      'GDPR · AES-256-GCM',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent B2B-Automatisierung',
        stack: 'LangGraph · Claude · Gemini · Groq · MongoDB Vector Search · n8n',
        desc: 'Multi-LLM-Orchestrierung über LangGraph, RAG-Layer auf Vector Search, HITL-Checkpoints und Critic-Agents gegen Halluzinationen.',
      },
      {
        title: 'Autonomous SecOps Agent — Cyber-Security-Command-Center',
        stack: 'LangGraph · AWS SageMaker RCF · AWS WAF · MCP · Next.js 14',
        desc: 'Anomalie-Scoring (RCF) + WAF Auto-Mitigation + HITL-Approval (15min Timeout). Multi-Tenant RBAC, AES-256-GCM, Threat-Enrichment via VirusTotal/AbuseIPDB/Shodan.',
      },
      {
        title: 'werbung-otomation — Multi-Tenant AI-Werbe-Pipeline',
        stack: 'Anthropic Managed Agents · fal.ai · FastAPI · React',
        desc: '8-Agenten-Pipeline pro Tenant, Bild-/Video-Generierung (Nano Banana 2, Veo 3), YAML Policy Engine mit Tenant-Overrides. B2B-SaaS-ready.',
      },
      {
        title: 'Otonom-Travelagency — Vollautonome KI-Reiseagentur',
        stack: 'LangGraph · Amadeus · Hotelbeds · Stripe · ChromaDB',
        desc: 'Echte Buchungen (Flug, Hotel, Payment), GDPR-PII-Masking vor LLM-Aufrufen, HITL-Approval bei kritischen Zahlungen.',
      },
    ],
    skills: [
      { category: 'Agentic AI', items: 'LangGraph, Multi-Agent Systems, Anthropic Managed Agents, RAG, HITL-Workflows, Critic-Agents, MCP' },
      { category: 'LLM-APIs & Cloud', items: 'Claude/Anthropic, Gemini, Groq, AWS Bedrock, AWS SageMaker (RCF), AWS WAF, fal.ai' },
      { category: 'Backend & Daten', items: 'Node.js, Express, Next.js, FastAPI (Python), MongoDB, MongoDB Vector Search, ChromaDB, SQL' },
      { category: 'Frontend', items: 'React, Next.js 14, TypeScript, Redux, Zustand, React Flow, TailwindCSS' },
      { category: 'Sicherheit & Compliance', items: 'AES-256-GCM, GDPR PII-Masking, Multi-Tenant RBAC, Audit-Logging' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Stryk,',
    paragraphs: [
      `mit großem Interesse bewerbe ich mich auf Ihre Position als Agentic AI Consultant im Public Sector. Multi-Agent-Systeme und autonome Workflows bilden den Kern meiner aktuellen Projektarbeit — in den letzten anderthalb Jahren habe ich drei produktiv laufende Agentic-AI-Systeme konzipiert und umgesetzt. KI-Lösungen mit messbarem Public Value zu gestalten, ist genau die Richtung, in die ich meine Praxis als nächstes ausrichten möchte.`,

      `Mein technischer Schwerpunkt umfasst LangGraph für Multi-Agent-Orchestrierung, RAG-Architekturen über MongoDB Vector Search und ChromaDB, die Claude-, Gemini- und Groq-APIs sowie Anthropic Managed Agents. Im Cloud-Bereich arbeite ich produktiv mit AWS — Bedrock, SageMaker für RCF-basiertes Anomalie-Scoring und WAF für Auto-Mitigation. Sauberes Error-Handling, Logging, Monitoring und HITL-Checkpoints sind in meinen Systemen Standard, denn gerade in regulierten Kontexten entscheiden diese Themen über Vertrauen und Akzeptanz.`,

      `Konkret zeigen das drei produktive Systeme: AI Orchestra orchestriert mehrere LLM-Anbieter über LangGraph mit Critic-Agents und HITL-Checkpoints; Autonomous SecOps Agent ist ein KI-gestütztes Cyber-Security-Command-Center mit AWS SageMaker RCF-Scoring, WAF-Auto-Mitigation und 15-Minuten-HITL-Timeout, dazu Multi-Tenant-RBAC und Threat-Enrichment über VirusTotal, AbuseIPDB und Shodan; Otonom-Travelagency ist eine vollautonome Reiseagentur mit echten Amadeus-/Hotelbeds-/Stripe-Buchungen, GDPR-konformer PII-Maskierung und HITL-Approval bei kritischen Zahlungen. Damit decke ich technisch genau die Felder ab, die Sie in Ihrer Anzeige beschreiben: autonome Analyse-, Entscheidungs- und Workflow-Agents in regulierten, sicherheitskritischen Kontexten.`,

      `Ehrlich zu meiner Erfahrung: Mehrjährige Public-Sector-Projekterfahrung bringe ich noch nicht mit, und mit Databricks, Snowflake oder Collibra habe ich noch nicht produktiv gearbeitet. Was ich mitbringe: tiefe Agentic-AI-Praxis, AWS-Hyperscaler-Erfahrung (Bedrock, SageMaker, WAF) und solide Grundlagen in Data Governance, Datenmodellierung und MLOps-Konzepten aus eigenen Multi-Tenant-Architekturen mit AES-256-GCM-Verschlüsselung, RBAC und Audit-Logging. In neue Plattformen und Branchen-Regularien arbeite ich mich erfahrungsgemäß schnell ein — bei LangGraph, n8n, AWS SageMaker und MCP war ich jeweils nach wenigen Wochen produktiv.`,

      `Vor meinen Umschulungen zum Fachinformatiker und Full-Stack-Developer war ich in der Tourismusbranche tätig und habe danach ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Diese Jahre als Selbstständiger haben mir den Stakeholder- und Business-Blick geschult: fachliche Anforderungen aufnehmen, Wirkung und Prioritäten kommunizieren, technische Lösungen verständlich übersetzen. Genau diese Mischung aus Hands-on-Engineering und Business-Sicht möchte ich als Agentic-AI-Consultant in Ihre Public-Sector-Projekte einbringen.`,
    ],
  },
};
