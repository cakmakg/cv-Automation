// Tech Punk GmbH (Personalvermittlung) — (Senior) Forward Deployed AI Engineer (m/w/d), C1 Deutsch.
// End-Arbeitgeber anonymisiert: "digitaler Publisher"; Standort Köln oder Berlin, hybrid + Remote-Anteil.
// Recruiter-Adresse: Chausseestraße 103, 10115 Berlin. Ansprechpartner: Leonard Eisenberg (Founder & CEO,
// eisenberg@techpunk.com) -> Anrede Herr Eisenberg. Job-ID BH1218.
// Quelle: techpunk.com/…/senior-forward-deployed-ai-engineer-m-w-d-c1-german.html (via Xing), 05.08.2026.
// Rolle: LLM-Pipelines, RAG-Architekturen und KI-Agenten in Produktion bauen/deployen, eingebettet in die
// Produkt- und Technikteams; Debugging/Optimierung für Prod; wiederkehrende Muster in die Plattform ziehen.
// Stack: Python (production-level, "keine Notebooks"), LLM/RAG/Agenten, Vector-DBs, MLOps, Containerisierung,
// CI/CD, Cloud (AWS/Azure/GCP/Vercel/Supabase). C1 Deutsch = PFLICHT.
// TRÄGT STARK: AI-Engineering hands-on (LangGraph, RAG, HITL) = deren Produktionsreife-Sprache; Supabase +
// Vercel wörtlich gefordert = GuestMatrix nutzt GENAU beide; C1 Deutsch = Stärke; Tourismus/Café = Menschen-
// und Problemlösekompetenz für "eingebettet in Teams".
// HONESTY (User 05.08.2026): KERN = Node.js/TypeScript (Ausbildung Clarusway); PYTHON NUR GRUNDLAGEN
// -> NICHT als Python-Experte framen, Node/TS überall zuerst, Python als "im Einsatz + vertiefen".
// P2 = 3 eigene Repos: GuestMatrix (Supabase/RLS), SecOps-Agent (TS/Node, HITL/RBAC), Outreach (n8n/HITL).
// P3 = NUR Tourismus + eigenes Café/Catering + Menschen/Problemlösung, KEINE Sprachzeile (User-Wunsch).
// GAPS ehrlich: mehrjährige BERUFSERFAHRUNG formal + "Senior"-Titel (nur Projekte + Praktika, keine Gap-
// Negation); Python production-level = echter Fit-Dämpfer; Azure/GCP nicht im Profil -> nur AWS/Vercel/Supabase.
// Honesty-Regel: Systeme "lauffähig und getestet, produktiven Kundenbetrieb noch nicht gesehen".
// P1-Regel: rein faktisch, keine Begründungs-/Reiz-Sätze. Fließtext hyphenfrei, kein Dash, max 1 Tricolon.
// BEREICH 1 (Tech/AI). Domain-forward Tagline (User-Wahl 05.08.2026), Projekte GuestMatrix + Travelagency.
// Run: node generate-bewerbung.mjs companies/techpunk-forward-deployed-ai.mjs

export default {
  slug: 'techpunk-forward-deployed-ai',
  date: '05.08.2026',
  language: 'de',

  recipient: [
    'Tech Punk GmbH',
    'Herr Leonard Eisenberg',
    'Chausseestraße 103',
    '10115 Berlin',
  ],

  subject: 'Bewerbung als Forward Deployed AI Engineer',

  narrative: {
    kern: 'Baut eigene KI Agenten Systeme mit Fokus auf Produktionsreife (Tests, Guardrails, HITL) und bringt aus eigener Gründung die Kunden und Beratungsseite mit.',
    passung: [
      'Eigene Multi Agenten Pipelines: LangGraph, RAG, Human in the Loop Freigaben, automatisierte Tests',
      'Cloud Deployment auf Supabase und Vercel, containerisiert mit Docker',
      'Tourismus und eigenes Café mit Cateringservice: Umgang mit Menschen',
    ],
  },
  company: {
    mission: 'Über Tech Punk sucht ein digitaler Publisher jemanden, der KI dauerhaft in Produktion bringt: LLM Pipelines, RAG Architekturen und Agenten, eingebettet in die Produkt und Technikteams statt als Prototyp im Notebook.',
    verbindung: 'Genau solche Systeme baue ich bereits: Agenten Pipelines mit Guardrails und Tests, die auf Produktionsreife zielen, dazu die Cloud Basis mit Supabase und Vercel, die in der Anzeige ausdrücklich genannt ist.',
  },
  jobKeywords: ['Python', 'RAG', 'LLM', 'Agenten', 'Vector', 'MLOps', 'CI/CD', 'Docker', 'Supabase', 'Vercel'],

  cv: {
    tagline: 'Forward Deployed AI Engineer · RAG & Agenten · Full-Stack',
    competencies: [
      'Node.js & TypeScript',
      'Multi-Agenten & RAG',
      'Cloud-Deployment & CI/CD',
    ],
    projects: [
      {
        title: 'GuestMatrix — Multi-Tenant B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · Supabase · Vercel',
        desc: 'Multi-Tenant-Isolation per Row-Level-Security, sektorbasierte Config-Registry (Tourismus, Immobilien, Events), DSGVO-konform, Magic-Byte-Validierung, Zod, Vitest.',
      },
      {
        title: 'Autonomous SecOps Agent — KI-Sicherheitszentrale',
        stack: 'TypeScript · Node.js · LangGraph · AWS · Next.js 14',
        desc: 'LangGraph-Pipeline mit HITL-Gate vor jeder Auto-Mitigation (AWS WAF IP-Blocking), Multi-Tenant-RBAC, AES-256-GCM, Audit-Logging; Anomalie-Scoring über AWS SageMaker.',
      },
    ],
    skills: [
      { category: 'AI Engineering', items: 'LangGraph, Multi-Agent-Systeme, RAG (Vector Search), HITL-Workflows, LLM-APIs, MCP' },
      { category: 'Backend & Data', items: 'Node.js, Express.js, REST-APIs, PostgreSQL, MongoDB, ChromaDB, SQL, Python (Grundlagen)' },
      { category: 'Frontend', items: 'TypeScript, React.js, Next.js 15, TailwindCSS' },
      { category: 'Cloud & DevOps', items: 'Docker, CI/CD, MLOps-nahe Deployments, AWS, Vercel, Supabase, Git/GitHub, Linux' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    // Kurzform für 1-Zeiligkeit; C1 Deutsch zuerst (Knockout-Kriterium), Englisch B1-ehrlich.
    languages: 'Deutsch (fließend, C1) · Englisch (im Arbeitskontext sicher) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Eisenberg,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Forward Deployed AI Engineer. Ich baue eigene KI Agenten Systeme, mein Schwerpunkt liegt auf Node.js und TypeScript: Agenten Pipelines mit LangGraph und RAG, Freigaben über einen Human in the Loop Schritt und automatisierten Tests. Zurzeit arbeite ich in einem Reisebüro in Bonn im Bereich Frontend und Marketing.`,

      `Produktionsreife ist mein Thema, und ich zeige sie am liebsten an gebauten Systemen. GuestMatrix ist eine mandantenfähige Plattform auf Supabase. Die Isolation läuft über Row Level Security, dazu kommen ein DSGVO Löschkonzept und eine Prüfung der Dateiuploads anhand der echten Bytefolge. Mein SecOps Agent pausiert vor jeder automatischen Sperre und wartet auf eine menschliche Freigabe, dazu kommen getrennte Mandanten und ein Audit Log. Meine Outreach Automatisierung erzeugt die Nachrichten mit einem LLM und verschickt keine ohne Freigabe über Telegram. Diese Systeme sind lauffähig und getestet, produktiven Kundenbetrieb haben sie noch nicht gesehen. Das sage ich offen. Dadurch weiß ich sehr genau, was zwischen einem Prototyp und einem System liegt, das ein Audit übersteht.`,

      `Die zweite Hälfte der Rolle liegt mir genauso. Ich komme aus dem Tourismus und habe in Bonn ein eigenes Café mit Cateringservice gegründet und geführt. Der Umgang mit Menschen ist meine Stärke. Ich höre zu, verstehe woran es beim Gegenüber hakt und entwickle eine Lösung, die im Alltag wirklich trägt.`,

      `Mein Unterbau sind zwei Jahre Umschulung zum Fachinformatiker und ein Jahr Vollzeitkurs zum Full Stack Web Developer mit Schwerpunkt Node.js. Gebaut sind meine Systeme im Backend mit Node.js und TypeScript, im Frontend mit React und Next.js, ausgeliefert in Docker Containern. Python setze ich in meinen KI Projekten mit LangGraph ein und vertiefe es gezielt weiter. Meine jüngste Anwendung läuft auf Supabase und Vercel, also genau der Cloud Basis, die Sie nennen. Meine Arbeit zeige ich gerne direkt, über 40 Repositories auf GitHub und die laufenden Systeme im Portfolio. Ich wohne in Bonn, Köln erreiche ich schnell und ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
