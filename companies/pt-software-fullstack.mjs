// P&T Software GmbH — Full Stack Developer (m/w/d)
// Standort: Frankfurt am Main (Platz der Einheit 2, 60327 Frankfurt am Main-Gallus),
// Remote laut Anzeige möglich. Juristische Firma: P&T Software GmbH (Amtsgericht Wiesbaden
// HRB 31073). Frankfurter Büro-/Arbeitsadresse für das Anschreiben verwendet.
// Ansprechpartner: Phillip Hoffmann (Founder & Managing Director), aus der join.com-Anzeige.
// Bewerbung erfolgt offiziell über pt.software/bewerben/fullstack — Paket dient als Beilage.
// BEREICH 1 (Tech/Full-Stack, bewerbung.md). Gold-Voice, hyphenfrei im Fließtext.
// PASSUNG: JD verlangt „mindestens eine Hochsprache (bevorzugt Java ODER JavaScript)" —
//   JavaScript/Node = mein Kern, also die Hauptanforderung ist eine STÄRKE (kein Stretch wie mgm).
//   Gewünschte Extras (Vue, GraphQL, Spring) ehrlich als Einarbeitung, keine Gap-Negation.
// Quelle: join.com/companies/karriere-bei-ptsoftware/16497003 (aktiv, 27.07.2026)
// Run: node generate-bewerbung.mjs companies/pt-software-fullstack.mjs

export default {
  slug: 'pt-software-fullstack',
  date: '27.07.2026',
  language: 'de',

  recipient: [
    'P&T Software GmbH',
    'Herrn Phillip Hoffmann',
    'Platz der Einheit 2',
    '60327 Frankfurt am Main',
  ],

  subject: 'Bewerbung als Full Stack Developer',

  narrative: {
    kern: 'Full Stack Entwickler mit JavaScript und TypeScript, der eigene Anwendungen von der Datenbank bis zur Oberfläche baut und mit Tests absichert.',
    passung: [
      'JavaScript und TypeScript aus eigenen Projekten und Praktikum',
      'Backend mit Node.js und REST Schnittstellen',
      'Kundenberatung und Anforderungsanalyse aus der Praxis',
    ],
  },
  company: {
    mission: 'Software Boutique, die hochwertige B2B und Enterprise Webanwendungen für anspruchsvolle Kunden baut und von der Analyse bis zum Skalieren begleitet.',
    verbindung: 'Wer Software für anspruchsvolle Enterprise Kunden baut, braucht Entwickler, die eng mit dem Kunden sprechen und zugleich sauberen, wartbaren Code liefern; genau so arbeite ich in meinen eigenen Projekten.',
  },
  jobKeywords: ['JavaScript', 'Node.js', 'REST', 'SQL', 'Docker', 'Full Stack', 'Frontend', 'Backend'],

  cv: {
    tagline: '',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen → max 3 kurze Tags.
    competencies: [
      'TypeScript & Node.js',
      'React & Full-Stack',
      'REST-APIs & Datenbanken',
    ],
    // Tech-Rolle: englische Selbstbeschreibung ehrlich, aber nicht als bare B1 (user_language_levels).
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Nur 1 Projekt → CV bleibt exakt 1 Seite A4 (2 Projekte = Überlauf auf Seite 2, gemessen 27.07).
    // Travelagency gewählt: stärkstes Full-Stack-Signal für eine B2B/Enterprise-Web-Boutique.
    projects: [
      {
        title: 'Travelagency — Full-Stack Monorepo',
        stack: 'TypeScript · Node.js · Next.js 14 · FastAPI · MongoDB · Stripe',
        desc: 'Monorepo: TypeScript Node.js Gateway, FastAPI Agent-Service, Next.js Frontend. Echtzeit-Integrationen: Amadeus (Flüge), Hotelbeds (Hotels), Stripe (Payment), Twilio (WhatsApp). GDPR-PII-Masking, AES-256-GCM Verschlüsselung.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'TypeScript, JavaScript, React.js, Next.js 14, HTML5/CSS3, TailwindCSS, Responsive Design' },
      { category: 'Backend', items: 'Node.js, Express.js, REST-APIs, FastAPI (Python), MongoDB, PostgreSQL, SQL' },
      { category: 'AI & Automatisierung', items: 'LangGraph, Multi-Agent-Systeme, LLM-APIs (Claude, Gemini, OpenAI), n8n Workflow Automation' },
      { category: 'Tooling & DevOps', items: 'Git/GitHub, Docker, Playwright, Linux, CI/CD, npm/pnpm' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Hoffmann,',
    paragraphs: [
      `ich bewerbe mich als Full Stack Developer bei P&T Software. Seit anderthalb Jahren baue ich eigene Webanwendungen in JavaScript und TypeScript, im Backend mit Node.js, und achte von Anfang an auf lesbaren Code und Tests. Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros in Köln.`,

      `Mein Schwerpunkt ist JavaScript und TypeScript, im Frontend mit React und im Backend mit Node.js. Dazu kommen REST Schnittstellen, Datenbanken von SQL bis NoSQL und der Betrieb in Docker Containern. Sie bevorzugen Java oder JavaScript, und JavaScript ist genau mein Fundament; in Ergänzungen wie Vue oder GraphQL arbeite ich mich zügig ein. In meinem größten Projekt sichere ich die Abläufe mit einer eigenen Test Suite ab, dadurch finde ich Fehler, bevor sie in den Betrieb kommen.`,

      `Mein Unterbau sind zwei Jahre Umschulung zum Fachinformatiker, das erste Jahr Systemintegration bei der FAW in Köln inklusive Praktikum, das zweite Jahr ein einjähriger Kurs zum Full Stack Web Developer. Seitdem baue ich fortlaufend eigene Projekte, darunter eine Reiseplattform mit Buchungsintegrationen und ein Multi Agenten System zur Orchestrierung mehrerer Sprachmodelle. Inzwischen liegt mein Schwerpunkt dort, wo Webentwicklung und KI zusammenkommen. Über 40 dieser Repositories liegen öffentlich auf GitHub.`,

      `Zu Ihren Aufgaben gehören auch Kundenberatung und Anforderungsanalyse. Direkten Kundenkontakt habe ich aus dem Tourismus, aus meinem eigenen Catering Unternehmen und aus einem IT Support Praktikum, in dem ich rund 70 Prozent der Tickets direkt gelöst habe. P&T Software ist eine kleine Software Boutique, die hochwertige B2B und Enterprise Webanwendungen für anspruchsvolle Kunden von der Analyse bis zum Skalieren baut. Wer solche Systeme baut, braucht Entwickler mit Blick fürs Detail, die zugleich mit dem Kunden sprechen können; genau so arbeite ich. Remote bin ich eingespielt und komme für Termine gern nach Frankfurt.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
