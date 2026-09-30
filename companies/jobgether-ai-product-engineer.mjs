// Jobgether (anonymer Aggregator, on behalf of a partner company) — AI Product Engineer, voll remote (DE/Köln)
// KEIN echter Firmenname/Adresse/Ansprechpartner → generischer Empfängerblock, Anrede "Damen und Herren".
// LEGITIMITÄT: Jobgether = laut User-Notiz skeptisch (anonymer Aggregator). User hat 27.07.2026
//   bewusst entschieden zu bauen (Rückfrage gestellt), Sprache DEUTSCH gewählt (Anzeige ist EN).
// BEREICH 1, aber KI-Schwerpunkt: JD = AI Product Engineer, Multi-Agenten, LangGraph, MCP, Claude Code,
//   TypeScript/React/Node/PostgreSQL/GraphQL. Volltreffer auf das Alleinstellungsmerkmal (AI Orchestra).
// EHRLICHKEIT (feedback-anschreiben-honesty-lauffaehig): eigenes Multi-Agenten-System ist LAUFFÄHIG &
//   GETESTET, aber NICHT mit echten Kunden im Dauerbetrieb → im Brief genau so gesagt, nicht "produktiv".
//   5+ Jahre & "in production" gefordert → Seniority NICHT thematisiert (keine Gap-Negation), stattdessen
//   mit dem stärksten Asset geöffnet. GraphQL/MCP ehrlich als "noch nicht produktiv, aber nah dran".
// Bewerbung läuft über die Jobgether-Plattform; Paket = Beilage.
// Quelle: linkedin.com/jobs/view/4445724290 (Jobgether-Repost, aktiv 27.07.2026)
// Run: node generate-bewerbung.mjs companies/jobgether-ai-product-engineer.mjs

export default {
  slug: 'jobgether-ai-product-engineer',
  date: '27.07.2026',
  language: 'de',

  recipient: [
    'Jobgether',
    'Recruiting Team',
    'Remote, Deutschland',
  ],

  subject: 'Bewerbung als AI Product Engineer',

  narrative: {
    kern: 'Entwickler mit TypeScript und React, dessen Schwerpunkt dort liegt, wo Webentwicklung und KI zusammenkommen, und der eigene Multi-Agenten-Systeme baut.',
    passung: [
      'Eigenes Multi Agenten System mit LangGraph und mehreren Sprachmodellen',
      'Full Stack mit TypeScript, React, Node.js und PostgreSQL',
      'Tägliche Arbeit mit Claude Code und KI-Werkzeugen',
    ],
  },
  company: {
    mission: 'Team, das produktionsreife Software mit KI baut, Geschäftswerkzeuge verbindet und komplexe Abläufe automatisiert.',
    verbindung: 'Wer Software baut, die Geschäftswerkzeuge über Agenten verbindet, braucht jemanden, der Multi-Agenten-Systeme versteht und absichert; genau daran arbeite ich in meinen eigenen Projekten.',
  },
  jobKeywords: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'LangGraph', 'MCP', 'Multi Agenten', 'Full Stack'],

  cv: {
    tagline: '',
    // KI-Rolle: eine Kompetenz explizit auf Agenten/LLM ausrichten (Schwerpunkte-Zeile ≤100 Zeichen).
    competencies: [
      'TypeScript & Node.js',
      'React & Full-Stack',
      'KI-Agenten & LLM-Integration',
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Nur 1 Projekt → CV bleibt exakt 1 Seite A4. Für diese Rolle AI Orchestra statt Travelagency:
    // Multi-Agenten/LangGraph ist die Kernanforderung; Full-Stack-Breite tragen Skills + Brief (P3).
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent-Automatisierung',
        stack: 'LangGraph · Python · Claude · Gemini · OpenAI · MongoDB',
        desc: 'Multi-Agent-System mit MongoDB-Checkpointer (Pause/Resume), Routing-Guards, Cost-Tracking mit Budget-Kill-Switch und 19-teiliger Test-Suite zur Sicherung von Betrieb, Kosten und Output-Qualität.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'TypeScript, JavaScript, React.js, Next.js 14, HTML5/CSS3, TailwindCSS, Responsive Design' },
      { category: 'Backend', items: 'Node.js, Express.js, REST-APIs, FastAPI (Python), MongoDB (NoSQL), PostgreSQL, SQL' },
      { category: 'AI & Automatisierung', items: 'LangGraph, Multi-Agent-Systeme, LLM-APIs (Claude, Gemini, OpenAI), KI-Entwicklung mit Cursor & Claude Code' },
      { category: 'Tooling & DevOps', items: 'Git/GitHub, Docker, AWS, CI/CD, Linux, npm/pnpm' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich über Jobgether als AI Product Engineer. Seit anderthalb Jahren baue ich eigene Anwendungen in TypeScript und React, im Backend mit Node.js. Mein Schwerpunkt liegt inzwischen dort, wo Webentwicklung und KI zusammenkommen. Claude Code nutze ich dabei von Anfang an. Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros in Köln.`,

      `Am nächsten an Ihrer Aufgabe ist mein eigenes Multi Agenten System. Es orchestriert mit LangGraph mehrere Sprachmodelle, kann über einen Checkpointer pausieren und fortsetzen und begrenzt die Kosten über ein Budget mit Notaus. Neunzehn Tests sichern Betrieb, Kosten und Qualität ab. Das System ist lauffähig und getestet, kein reiner Prototyp, wenn auch noch nicht mit echten Kunden im Dauerbetrieb.`,

      `Mein Unterbau sind zwei Jahre Umschulung zum Fachinformatiker und ein einjähriger Kurs zum Full Stack Web Developer. Von der Datenbank bis zur Oberfläche baue ich selbst. Im Backend REST Schnittstellen mit Node.js und Daten in PostgreSQL oder MongoDB, im Frontend Oberflächen in React und Next.js. Mit dem Model Context Protocol (MCP) und GraphQL habe ich noch nicht produktiv gearbeitet, aber ich bin über Claude Code und eigene Agenten nah dran und arbeite mich zügig ein. Über 40 meiner Projekte liegen öffentlich auf GitHub.`,

      `Zu der Rolle gehört, Verantwortung für das ganze Produkt zu übernehmen, von der Anforderung bis zum stabilen Betrieb. Anforderungen aufnehmen und direkt umsetzen kenne ich gut aus der Praxis: aus dem Tourismus, aus meinem eigenen Catering Unternehmen und aus einem IT Support Praktikum, in dem ich rund 70 Prozent der Anfragen selbst gelöst habe. Gesucht wird jemand, der produktionsreife Software mit KI baut und damit komplexe Abläufe vereinfacht. Genau daran arbeite ich in meinen eigenen Projekten, wenn ich Geschäftswerkzeuge über Agenten verbinde. Die Stelle ist voll remote, und genau so arbeite ich am liebsten.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
