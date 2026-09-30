// 2pi IT Solutions GmbH — Forward-Deployed AI Engineer (m/w/d), Köln-Ehrenfeld,
// ab sofort, Teil-/Vollzeit, Remote + Büro, punktuell beim Kunden vor Ort.
// Adresse (Register): Richard-Wagner-Str. 32-34, 50674 Köln (HRB 106872 Köln,
// Creditreform/Northdata verifiziert 23.07.2026; Büro laut Anzeige Ehrenfeld).
// Ansprechpartnerin: Nina Magiera (nina@2pi-it.com) -> Anrede Frau Magiera.
// Quelle: linkedin.com/jobs/view/4442734945 (aktiv, 23.07.2026).
// Rolle: KI-Lösungen in Produktion (RAG, Agenten, LLM-Pipelines) eingebettet beim Kunden;
// Evals/Guardrails/Monitoring; Beratung von CTOs; Python/FastAPI/PostgreSQL/TS/React/Docker.
// TRÄGT STARK: AI-Engineering hands-on = 10+ eigene Agenten-Systeme (LangGraph, RAG, HITL,
// Test-Suite, Cost-Tracking = deren Evals/Guardrails-Sprache); GRÜNDER-PLUS wörtlich gefordert
// (Café/Catering!); Business-Übersetzung (Reisebüro Frontend/Marketing); Deutsch C1 exakt;
// "Wir schauen lieber auf deine Arbeit als auf den Lebenslauf" = GitHub 43 Repos + Portfolio.
// GAPS ehrlich: mehrjährige BERUFSERFAHRUNG formal (nur eigene Projekte + Praktika, KEINE
// Gap-Negation -> Weg positiv + Arbeit zeigen); ENGLISCH FLIESSEND vs B1 (thinkGROUP-Satz);
// PostgreSQL-TIEFE (SQL ja, PG nicht produktiv -> im CV gelistet nach reboot-Präzedenz,
// im Brief nicht behauptet); reguliert nur "Plus" (PII-Masking/AES/RBAC als Signale).
// Honesty-Regel: Systeme "lauffähig und getestet, produktiven Kundenbetrieb noch nicht gesehen".
// P1-Regel 23.07: rein faktisch, keine Begründungs-/Reiz-Sätze.
// BEREICH 1 (Tech/AI, reboot-Struktur: tagline leer, kein profil, Projekte MIT Reife-Signalen).
// Score 4.2/5. Run: node generate-bewerbung.mjs companies/2pi-forward-deployed-ai.mjs

export default {
  slug: '2pi-forward-deployed-ai',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    '2pi IT Solutions GmbH',
    'Frau Nina Magiera',
    'Richard-Wagner-Str. 32-34',
    '50674 Köln',
  ],

  subject: 'Bewerbung als Forward-Deployed AI Engineer',

  narrative: {
    kern: 'Baut eigene KI Agenten Systeme mit Fokus auf Produktionsreife (Tests, Guardrails, HITL) und bringt aus eigener Gründung die Kunden- und Beratungsseite mit.',
    passung: [
      'Eigene Multi Agenten Systeme: LangGraph, RAG, HITL Freigaben, automatisierte Tests',
      'Personenbezogene Daten maskieren vor LLM Aufrufen, Verschlüsselung mit AES 256',
      'Gründererfahrung: eigenes Café mit Cateringservice, Kundengespräche täglich',
    ],
  },
  company: {
    mission: 'Hochspezialisierter Dienstleister aus Köln Ehrenfeld, der KI Lösungen in Produktion bringt: Retrieval, verlässliche Agenten und LLM Pipelines, eingebettet in die Teams der Kunden, auch in regulierten Branchen.',
    verbindung: 'Genau diese Art Systeme baue ich bereits: Agenten Pipelines mit Guardrails und Tests, die auf Produktionsreife zielen; die Beratungsseite bringe ich aus eigener Gründung mit.',
  },
  jobKeywords: ['Python', 'FastAPI', 'PostgreSQL', 'TypeScript', 'React', 'RAG', 'LLM', 'Docker', 'Testing'],

  cv: {
    tagline: '',
    competencies: [
      'Python & FastAPI',
      'Multi-Agent-Systeme & RAG',
      'TypeScript & React',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent-System',
        stack: 'LangGraph · Python · Claude · Gemini · OpenAI · MongoDB',
        desc: 'MongoDB-Checkpointer (Pause/Resume), Routing-Guards, Cost-Tracking, 19-teilige Test-Suite, RAG, HITL.',
      },
      {
        title: 'Autonomous SecOps Agent',
        stack: 'LangGraph · AWS SageMaker · Next.js 14 · MCP',
        desc: 'HITL-Gate (15-Min-Timeout), AWS WAF Auto-Mitigation, Multi-Tenant-RBAC, AES-256-GCM.',
      },
    ],
    skills: [
      { category: 'AI Engineering', items: 'LangGraph, Multi-Agent-Systeme, RAG (Vector Search), HITL-Workflows, LLM-APIs, MCP' },
      { category: 'Backend', items: 'Python, FastAPI, Node.js, Express.js, REST-APIs, PostgreSQL, SQL, MongoDB' },
      { category: 'Frontend', items: 'TypeScript, React.js, Next.js 14, TailwindCSS, Komponentenarchitektur' },
      { category: 'Tooling & Cloud', items: 'Docker, Git/GitHub, automatisiertes Testing, CI/CD, AWS (SageMaker, WAF), Linux' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    // Kurzform für 1-Zeiligkeit (Langfassung umbricht); Aussage bleibt B1-ehrlich.
    languages: 'Deutsch (fließend, C1) · Englisch (im Arbeitskontext sicher) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Magiera,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Forward Deployed AI Engineer. Ich baue eigene KI Systeme mit Python und LangGraph: Multi Agenten Pipelines mit RAG, Human in the Loop Freigaben und automatisierten Tests. Zurzeit arbeite ich in einem Reisebüro in Bonn im Bereich Frontend und Marketing.`,

      `Produktionsreife ist genau mein Thema. Mein größtes System hat eine Test Suite mit 19 automatisierten Tests, Routing Guards, Cost Tracking mit Budget Kill Switch und einen MongoDB Checkpointer für Pause und Resume. In meiner digitalen Reiseagentur maskiere ich personenbezogene Daten vor jedem LLM Aufruf und verschlüssele Zugangsdaten mit AES 256. Meine Systeme sind lauffähig und getestet, produktiven Kundenbetrieb haben sie noch nicht gesehen. Das sage ich offen. Dadurch weiß ich aber sehr genau, was zwischen einem Prototyp und einem System liegt, das ein Audit übersteht.`,

      `Die zweite Hälfte der Rolle liegt mir genauso: erklären, moderieren, zuhören. Ich habe in Bonn ein eigenes Café mit Cateringservice gegründet und geführt, Kundengespräche waren dort Alltag. Im Reisebüro übersetze ich heute täglich zwischen Technik und Fachseite. Unternehmerisch zu denken muss mir niemand beibringen.`,

      `Mein Unterbau sind zwei Jahre Umschulung zum Fachinformatiker und ein Jahr Vollzeitkurs zum Full Stack Web Developer. Gebaut sind meine Systeme mit Python und FastAPI im Backend sowie TypeScript und React im Frontend, ausgeliefert in Docker Containern. Meine Arbeit zeige ich gerne direkt: über 40 Repositories auf GitHub und die laufenden Systeme im Portfolio. Englisch nutze ich im technischen Kontext sicher und entwickle es gezielt weiter. Ich wohne in Bonn, Köln Ehrenfeld erreiche ich schnell, ein Einstieg ist ab sofort möglich, in Vollzeit oder Teilzeit.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
