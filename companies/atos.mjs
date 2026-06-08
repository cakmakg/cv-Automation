// Atos (Atos Information Technology GmbH) — AI Engineer (m/w/d), Düsseldorf
// Consulting/Delivery-Rolle: RAG, Vektor-DBs, Embeddings, LangChain/LlamaIndex, Cloud (AWS/Azure/GCP),
//   MLOps/LLMOps, + kundennah: Workshops, Machbarkeit, Pre-Sales, Angebote.
// Ansprechpartnerin: Frau Ana-Maria Chiriloaie → Anrede mit Nachname.
// Sprache: DE (Deutsch zuerst gefordert). TECH-Profil (AI Engineer + Consultant-Brücke aus bewerbung.md).
// Recipient = eingetragener Sitz München (Stelle ist Düsseldorf — im Text referenziert).
// FIT-HINWEIS: "mind. 3 Jahre im Umfeld" — Gökhans KI-Erfahrung ~1,5 Jahre (ehrlich, nicht überzeichnet).
// Run: node generate-bewerbung.mjs companies/atos.mjs

export default {
  slug: 'atos',
  date: '02.06.2026',
  language: 'de',

  recipient: [
    'Atos Information Technology GmbH',
    'Otto-Hahn-Ring 6',
    '81739 München',
  ],

  subject: 'Bewerbung als AI Engineer',

  cv: {
    tagline: 'AI Engineer · RAG & LLM-Systeme · Python · LangGraph · AWS',
    competencies: [
      'Python · FastAPI',
      'RAG · Vector Search',
      'Embeddings · NLP',
      'LangGraph · LangChain',
      'Multi-Agent · LLMOps',
      'AWS · Cloud · Docker',
      'Claude · Gemini · OpenAI',
      'TypeScript · Node.js',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent RAG-System',
        stack: 'LangGraph · Claude · Gemini · OpenAI · MongoDB Vector Search',
        desc: 'Orchestriert mehrere LLM-Anbieter und greift über einen RAG-Layer (Vector Search, Embeddings) auf eigene Daten zu; Critic-Agents und Human-in-the-Loop-Checkpoints sichern die Output-Qualität.',
      },
      {
        title: 'werbung-otomation — Multi-Tenant AI-Pipeline',
        stack: 'Anthropic Managed Agents · FastAPI · React · fal.ai',
        desc: 'Mandantenfähige Pipeline spezialisierter Agenten mit Policy-/Compliance-Stufe; strukturierte Verarbeitung von Rohdaten zu fertigen Assets, von der Idee bis in den Produktivbetrieb.',
      },
      {
        title: 'Autonomous SecOps Agent — KI in Produktion',
        stack: 'LangGraph · AWS SageMaker/WAF · Next.js 14 · MCP',
        desc: 'KI-Komponenten in eine reale Pipeline integriert: Anomalie-Scoring über AWS SageMaker, QA-Critic-Stufe und HITL-Approval, mit Echtzeit-Frontend und sauberer Cloud-Anbindung.',
      },
    ],
    skills: [
      { category: 'KI & LLM', items: 'LangGraph, LangChain, Multi-Agent Systems, Claude/Gemini/OpenAI, RAG, Embeddings, Vector Search, Critic-Agents, HITL, MCP' },
      { category: 'Backend', items: 'Python (FastAPI), Node.js, Express, REST-APIs, SQL, strukturierte Datenverarbeitung' },
      { category: 'Daten & Cloud', items: 'MongoDB Vector Search, ChromaDB, PostgreSQL, AWS (Bedrock/SageMaker/WAF), Docker, CI/CD, LLMOps' },
      { category: 'Frontend', items: 'React.js, Next.js 14, TypeScript, JavaScript (ES6+), TailwindCSS' },
      { category: 'Arbeitsweise', items: 'Agile Teams, PoC → Produktion, Stakeholder-Kommunikation, schnelle Einarbeitung in neue Domänen' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Chiriloaie,',
    paragraphs: [
      // Block 1 — Einleitung AI Engineer, auf JD zugeschnitten
      `ich bewerbe mich auf Ihre Stelle als AI Engineer am Standort Düsseldorf. Seit anderthalb Jahren baue ich produktionsreife KI-Systeme rund um LLMs, RAG und Multi-Agent-Architekturen — also genau die Technologien, die Sie in Ihrer Anzeige beschreiben.`,

      // Block 2 — Technische Kompetenz (RAG / Python / LangChain / Cloud / LLMOps)
      `Mein technischer Schwerpunkt liegt auf Python, RAG-Architekturen und Vektordatenbanken: Ich strukturiere unstrukturierte Daten, baue RAG-Pipelines über MongoDB Vector Search und ChromaDB mit Embedding-Modellen und orchestriere mehrere LLMs über die LangChain-/LangGraph-Familie (Claude, Gemini, OpenAI). Im Cloud-Bereich arbeite ich mit AWS — unter anderem Bedrock und SageMaker —, dazu Docker und CI/CD; das Überführen von Prototypen in den produktiven Betrieb (MLOps/LLMOps) ist mir aus eigenen Systemen vertraut.`,

      // Block 3 — Showcase (RAG/Agenten end-to-end)
      `Mein Hauptprojekt AI Orchestra ist ein Multi-Agent-System auf LangGraph-Basis, das mehrere LLM-Anbieter orchestriert und über einen RAG-Layer auf eigene Daten zugreift; Critic-Agents und Human-in-the-Loop-Checkpoints sichern die Qualität der Ausgaben. In einem weiteren produktiven System, Autonomous SecOps Agent, habe ich KI-Komponenten mit AWS-Anbindung in eine reale Pipeline integriert. Solche end-to-end gebauten RAG- und Agenten-Systeme sind genau die Art von Lösungen, die Sie für Ihre Kunden entwickeln.`,

      // Block 4 — Value Proposition + Consulting/Pre-Sales-Bezug
      `In Ihren Projekten sehe ich die Möglichkeit, technisch wie im Kundenkontakt beizutragen — beim Entwurf von RAG- und NLP-Lösungen mit messbarem Mehrwert, beim Überführen von Proof-of-Concepts in den Produktivbetrieb und beim Übersetzen fachlicher Kundenanforderungen in tragfähige technische Konzepte. Dass die Rolle auch Workshops, Machbarkeitsanalysen und Pre-Sales umfasst, reizt mich besonders, weil ich gern an der Schnittstelle zwischen Technik und Geschäftssicht arbeite.`,

      // Block 5 — Persönlichkeit (Consultant-Variante, Business-IT-Brücke)
      `Vor meinen Umschulungen zum Fachinformatiker und Full-Stack-Developer war ich in der Tourismusbranche tätig und habe ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Diese Jahre als Selbstständiger haben mir den Blick für Kunden und Geschäftsziele geschult: Anforderungen aufnehmen, Prioritäten kommunizieren und technische Lösungen verständlich übersetzen — genau die Mischung, die diese Rolle verlangt.`,
    ],
  },
};
