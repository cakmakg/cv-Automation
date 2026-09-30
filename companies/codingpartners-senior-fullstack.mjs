// Coding Partners GmbH — Senior Full Stack Engineer (m/w/d), voll remote
// Firma/Adresse: Coding Partners GmbH, Graefestr. 11, 10967 Berlin (AG Charlottenburg HRB 255695 B,
//   GF Daniel Atanasovski) — via codingpartners.com/imprint verifiziert.
// Ansprechpartner: Enrique de Lima (Recruiting Team), aus der join.com-Anzeige.
// SPRACHE: Anzeige ist auf ENGLISCH; User hat am 27.07.2026 bewusst DEUTSCH gewählt (Rückfrage gestellt).
// BEREICH 1 (Tech/Full-Stack, bewerbung.md). Gold-Voice, hyphenfrei im Fließtext.
// PASSUNG: JD verlangt Expert JS/TS, React, Node.js, DB relational+NoSQL, AWS/GCP, Docker, CI/CD —
//   alles Kern. Zusätzlich EXPLIZIT „AI-assisted development tools (Claude, Cursor, Copilot)" =
//   genau das Alleinstellungsmerkmal → im Brief stark betont (feedback-anschreiben-ai-emphasis).
//   Echte Lücke: NestJS (User hat Node/Express) → ehrlich als Einarbeitung, keine Gap-Negation.
//   „Senior" ist ein Stretch (~1,5 J. Eigenbau), vom User bewusst breit adressiert (job-scope BREIT).
// Quelle: join.com/companies/codingpartners/16448781 (aktiv, 27.07.2026)
// Run: node generate-bewerbung.mjs companies/codingpartners-senior-fullstack.mjs

export default {
  slug: 'codingpartners-senior-fullstack',
  date: '27.07.2026',
  language: 'de',

  recipient: [
    'Coding Partners GmbH',
    'Herrn Enrique de Lima',
    'Graefestr. 11',
    '10967 Berlin',
  ],

  subject: 'Bewerbung als Senior Full Stack Engineer',

  narrative: {
    kern: 'Full Stack Entwickler mit TypeScript, React und Node.js, der eigene Anwendungen baut und KI-Werkzeuge fest in seinen Arbeitsablauf integriert.',
    passung: [
      'JavaScript und TypeScript aus eigenen Projekten und Praktikum',
      'React im Frontend, Node.js und REST Schnittstellen im Backend',
      'KI-gestützte Entwicklung mit Claude und Cursor als Teil des Alltags',
    ],
  },
  company: {
    mission: 'Softwareagentur, die Softwarefirmen hilft, Produkte schneller zu bauen und auszuliefern, und dafür Custom Development sowie Full-Stack Entwickler auf Zeit bereitstellt.',
    verbindung: 'Wer Produkte schnell ausliefert, braucht Entwickler, die mit modernen Werkzeugen Tempo machen und trotzdem sauberen, getesteten Code liefern; genau so arbeite ich in meinen eigenen Projekten.',
  },
  jobKeywords: ['TypeScript', 'React', 'Node.js', 'REST', 'Docker', 'AWS', 'Full Stack', 'NoSQL'],

  cv: {
    tagline: '',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen → max 3 kurze Tags.
    competencies: [
      'TypeScript & Node.js',
      'React & Full-Stack',
      'REST-APIs & Datenbanken',
    ],
    // Tech-Rolle, englischer Auftraggeber: englische Selbstbeschreibung ehrlich, nicht als bare B1.
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Nur 1 Projekt → CV bleibt exakt 1 Seite A4 (2 Projekte = Überlauf, gemessen 27.07).
    // Travelagency: stärkstes Senior-Full-Stack-Signal; die KI-Tiefe trägt das Anschreiben (P3).
    projects: [
      {
        title: 'Travelagency — Full-Stack Monorepo',
        stack: 'TypeScript · Node.js · Next.js 14 · FastAPI · MongoDB · Stripe',
        desc: 'Monorepo: TypeScript Node.js Gateway, FastAPI Agent-Service, Next.js Frontend. Echtzeit-Integrationen: Amadeus (Flüge), Hotelbeds (Hotels), Stripe (Payment), Twilio (WhatsApp). GDPR-PII-Masking, AES-256-GCM Verschlüsselung.',
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
    anrede: 'Sehr geehrter Herr de Lima,',
    paragraphs: [
      `ich bewerbe mich als Senior Full Stack Engineer bei Coding Partners. Seit anderthalb Jahren baue ich eigene Webanwendungen in TypeScript und React, im Backend mit Node.js. KI Werkzeuge wie Claude und Cursor gehören dabei von Anfang an zu meinem Arbeitsablauf. Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros in Köln.`,

      `Mein Schwerpunkt ist TypeScript, im Frontend mit React und im Backend mit Node.js. Dazu kommen REST Schnittstellen und Datenbanken, relational mit PostgreSQL und als NoSQL MongoDB. Meine Dienste betreibe ich in Docker und deploye sie auf AWS. Ihr Backend setzt auf NestJS, das hatte ich noch nicht im Einsatz; die Konzepte dahinter kenne ich aus Node und Express und finde mich schnell hinein. In meinem größten Projekt sichere ich die Abläufe mit einer eigenen Test Suite ab, dadurch finde ich Fehler, bevor sie in den Betrieb kommen.`,

      `Mein Unterbau sind zwei Jahre Umschulung zum Fachinformatiker und ein einjähriger Kurs zum Full Stack Web Developer. Seitdem baue ich eigene Projekte, darunter eine Reiseplattform mit Buchungsintegrationen und ein Multi Agenten System, das mehrere Sprachmodelle orchestriert. KI ist für mich kein Zusatz, sondern Teil des Handwerks: Ich entwickle mit Claude und Cursor und baue selbst Systeme, die auf großen Sprachmodellen aufsetzen. Über 40 dieser Repositories liegen öffentlich auf GitHub.`,

      `Zu der Stelle gehört der ganze Weg von der ersten Anforderung bis zum fertigen Release. Anforderungen aufnehmen und direkt umsetzen kenne ich gut aus der Praxis: aus dem Tourismus, aus meinem eigenen Catering Unternehmen und aus einem IT Support Praktikum, in dem ich rund 70 Prozent der Anfragen selbst gelöst habe. Coding Partners hilft Softwarefirmen, Produkte schneller zu bauen und auszuliefern. Dazu passe ich, weil ich schnell arbeite und dabei auf sauberen Code und Tests achte. Die Stelle ist voll remote, und genau so arbeite ich am liebsten.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
