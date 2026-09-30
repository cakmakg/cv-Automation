// NXT Applied GmbH — Forward Deployed Engineer (m/w/d), Düsseldorf, ergebnis-/verantwortungsbasiert (nicht Präsenz).
// Adresse (Register): Breite Str. 27, 40213 Düsseldorf (HRB 112353 AG Düsseldorf, Gesellschaftsvertrag 02.03.2026
// = früher Startup). Geschäftsführer/Founder: Dr. Matthias Lange -> Anrede "Herr Dr. Lange".
// Quelle: xing.com/jobs/duesseldorf-forward-deployed-engineer-152720399 + join.com/companies/nxtappliedcom/15937763 (aktiv 05.08.2026).
// Rolle: AI Operators aus Playbooks in laufende Systeme deployen, direkt beim Kunden, Systeme integrieren
// (ERP, Accounting, Inbox, Legacy), klare Grenzen agentische Logik <-> deterministische Ausführung,
// stabil/nachvollziehbar/steuerbar, Edge Cases robust machen. AI-native: täglich mit Coding Agents.
// TRÄGT SEHR STARK: Backend „Node / Python / TypeScript" mit NODE ZUERST = Gökhans Kern (kein Python-Zwang!);
// Workflow/Integration (n8n, externe APIs) = AI Orchestra + influencer-outreach; agentisch vs deterministisch +
// Kontrolle = SecOps HITL-Gate/Guardrails; „täglich mit Coding Agents" = nutzt Claude Code täglich;
// kundennah/messy Umgebungen = Tourismus + eigenes Café/Business-Übersetzung; C1 Deutsch = Stärke.
// HONESTY (User 05.08.2026): Node.js/TypeScript IMMER zuerst, Python NUR Grundlagen (via LangGraph), nie als
// Experte framen. GAPS ehrlich: „sehr gutes Englisch" gefordert, User B1 -> im CV „im Arbeitskontext sicher",
// im Brief NICHT thematisiert (deutschsprachiger Kontext, keine CV-Wiederholung); formale Berufsjahre = Projekte
// + Praktika (keine Gap-Negation). Systeme „lauffähig und getestet", kein Live-Kundenbetrieb.
// BEREICH 1 (Tech/AI). Domain-forward Tagline (Node/TS). Projekte GuestMatrix (Node/TS) + AI Orchestra (Integration/Agentic).
// Run: node generate-bewerbung.mjs companies/nxt-applied-forward-deployed-engineer.mjs

export default {
  slug: 'nxt-applied-forward-deployed-engineer',
  date: '05.08.2026',
  language: 'de',

  recipient: [
    'NXT Applied GmbH',
    'Herr Dr. Matthias Lange',
    'Breite Str. 27',
    '40213 Düsseldorf',
  ],

  subject: 'Bewerbung als Forward Deployed Engineer',

  narrative: {
    kern: 'Baut eigene KI Systeme und Integrationen mit Node.js und TypeScript und bringt sie in laufende Abläufe, mit Fokus auf Kontrolle (Freigaben durch Menschen, Guardrails) und Kundennähe aus eigener Gründung.',
    passung: [
      'Backend mit Node.js und TypeScript, APIs, Webhooks und ereignisgesteuerte Abläufe',
      'Integration und Orchestrierung über n8n, Freigaben durch Menschen, agentische gegen deterministische Ausführung',
      'Direkter Kundenkontakt aus Tourismus und eigenem Café, Umgang mit unklaren Abläufen',
    ],
  },
  company: {
    mission: 'NXT Applied baut ein AI-native Unternehmen, das KI Operatoren in echte operative Abläufe deployt und messbar wirksam macht, genau dort wo aus guten Prototypen sonst keine stabile Produktion wird.',
    verbindung: 'Genau diese Lücke zwischen Prototyp und stabiler Produktion schließe ich in meinen eigenen Systemen bereits, mit Freigaben durch Menschen, Tests und klaren Grenzen zwischen agentischer und deterministischer Logik.',
  },
  jobKeywords: ['Node', 'TypeScript', 'Python', 'APIs', 'Workflows', 'Integration', 'LLM', 'Agenten', 'Monitoring', 'HITL'],

  cv: {
    tagline: 'Forward Deployed Engineer · Node.js & TypeScript · KI in Produktion',
    competencies: [
      'Node.js & TypeScript',
      'Workflow- & API-Integration',
      'KI-Agenten & HITL',
    ],
    projects: [
      {
        title: 'GuestMatrix — Multi-Tenant B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · Supabase · Vercel',
        desc: 'Multi-Tenant-Isolation per Row-Level-Security, sektorbasierte Config-Registry (Tourismus, Immobilien, Events), DSGVO-konform, Magic-Byte-Validierung, Zod, Vitest.',
      },
      {
        title: 'AI Orchestra — Multi-Agent-Orchestrierung',
        stack: 'LangGraph · n8n · Python · MongoDB · Multi-LLM',
        desc: 'n8n als Integrationsschicht zu externen APIs, Multi-Agent-Orchestrierung mit HITL-Checkpoints und Critic-Agents (agentische vs. deterministische Ausführung), 19-teilige Test-Suite, MongoDB-Checkpointer, Cost-Tracking.',
      },
    ],
    skills: [
      { category: 'Backend & APIs', items: 'Node.js, Express.js, TypeScript, REST-APIs, Webhooks, MongoDB, PostgreSQL, Python (Grundlagen)' },
      { category: 'KI & Agenten', items: 'LangGraph, Multi-Agent-Systeme, RAG (Vector Search), HITL-Workflows, Critic-Agents, LLM-APIs, MCP' },
      { category: 'Workflow & Integration', items: 'n8n, API-Orchestrierung, ereignisgesteuerte Abläufe, Queues/State, externe Integrationen' },
      { category: 'Cloud & Betrieb', items: 'Docker, CI/CD, Logging & Monitoring, Supabase, Vercel, AWS, Git/GitHub, Linux, Vitest' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (im Arbeitskontext sicher) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Dr. Lange,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Forward Deployed Engineer. Ich baue eigene KI Systeme mit Node.js und TypeScript und bringe sie in laufende Workflows: Integrationen über n8n und eigene APIs, Freigaben über einen Menschen im Ablauf und automatisierten Tests. Zurzeit arbeite ich in einem Reisebüro in Bonn im Bereich Frontend und Marketing.`,

      `Produktionsreife ist genau mein Thema. GuestMatrix ist eine mandantenfähige Plattform auf Supabase, mit Isolation über Row Level Security und einer Prüfung der Uploads anhand der echten Bytefolge. In meiner Multi Agenten Orchestrierung mit mehreren LLMs ziehe ich klare Grenzen zwischen agentischer Logik und fester Ausführung: kritische Schritte laufen nur nach einer Freigabe durch einen Menschen. Dazu kommen automatisierte Tests, ein Checkpointer für Pause und Resume und ein Cost Tracking. Diese Systeme sind lauffähig und getestet, produktiven Kundenbetrieb haben sie noch nicht gesehen. Das sage ich offen. Dadurch weiß ich sehr genau, wo Prototypen brechen. Fast immer liegt es an unsauberen Daten, an Edge Cases oder an fehlender Kontrolle in der Ausführung.`,

      `Der zweite Teil der Rolle liegt mir genauso. Ich komme aus dem Tourismus und habe in Bonn ein eigenes Café mit Cateringservice gegründet und geführt. Der direkte Umgang mit Menschen und ihren Abläufen ist meine Stärke. Ich höre zu, verstehe woran es im Betrieb wirklich hakt und baue daraus eine Lösung, die im Alltag trägt.`,

      `Mein Unterbau sind zwei Jahre Umschulung zum Fachinformatiker und ein Jahr Vollzeitkurs zum Full Stack Web Developer mit Schwerpunkt Node.js. Gebaut sind meine Systeme im Backend mit Node.js und TypeScript, ausgeliefert in Docker Containern. Auf Logging, Monitoring und wiederholbare Abläufe achte ich dabei von Anfang an. Python setze ich in meinen KI Projekten mit LangGraph ein und vertiefe es gezielt weiter. Mit KI Werkzeugen arbeite ich täglich, sie gehören für mich fest zum Bauen. Meine Arbeit zeige ich gerne direkt, über 40 Repositories auf GitHub und die laufenden Systeme im Portfolio. Ich wohne in Bonn, Düsseldorf erreiche ich gut und ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
