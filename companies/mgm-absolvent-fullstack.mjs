// mgm technology partners GmbH — Absolvent der Informatik (m/w/d) Java / Spring / TypeScript / React
// Standorte: u.a. Köln (Hohenstaufenring 30–32) — Bewerbung für Standort KÖLN.
// Zentrale/juristische Adresse: Taunusstraße 23, 80807 München (HRB 161298 München,
// verifiziert via Northdata + insights.mgm-tp.com/de/impressum, 22.07.2026).
// Ansprechpartnerin: Corina Freund (Recruiter), jobs_de@mgm-tp.com, +49 89 35868 0918.
// Unbefristet, Vollzeit, 40–60k, Probezeit 4 Tage/Woche Büro, danach bis 60% mobil.
// BEREICH 1 (Tech, bewerbung.md). BEWUSSTER STRETCH-BUILD (Score 2.8/5, User-Entscheidung
// 22.07.2026 entgegen SKIP-Empfehlung). ECHTE BLOCKER, im Brief offen adressiert:
// (1) Java + Spring = Kernanforderung, NICHT im Profil → ehrlich als Einarbeitung, TS/Node-Konzepte
//     als Brücke; (2) Studium: NIE explizit verneinen (User-Regel 22.07: kein "Das bringe ich
//     nicht mit") → stattdessen 2 Jahre FiSi-Umschulung POSITIV erzählt: Jahr 1 SI/FAW
//     (Module IT-Systeme + IT-Netzwerke erfolgreich, inkl. Praktikum), Jahr 2 AE = 1-jähriger
//     Full-Stack-Kurs; (3) Englisch "gut" gefordert → nicht thematisiert, CV-Zeile transparent (B1).
// FAKTENREGEL (feedback-anschreiben-fakten-nur-belegt): alle Claims aus cv.md/freigegebenen Briefen.
// Quelle: empfehlungsbund.de/jobs/303742 (aktiv, 22.07.2026)
// Run: node generate-bewerbung.mjs companies/mgm-absolvent-fullstack.mjs

export default {
  slug: 'mgm-absolvent-fullstack',
  date: '22.07.2026',
  language: 'de',

  recipient: [
    'mgm technology partners GmbH',
    'Frau Corina Freund',
    'Taunusstraße 23',
    '80807 München',
  ],

  subject: 'Bewerbung als Absolvent der Informatik: Java / Spring / TypeScript / React',

  narrative: {
    kern: 'Full Stack Entwickler mit TypeScript und React, der eigene Anwendungen von der API bis zur Oberfläche baut und mit Tests absichert.',
    passung: [
      'TypeScript und React aus eigenen Projekten und Praktikum',
      'Backend Entwicklung mit Node.js und REST Schnittstellen',
      'Eigene Anwendungen mit Test Suite abgesichert',
    ],
  },
  company: {
    mission: 'Beratungs und Entwicklungshaus, das langlebige Enterprise Anwendungen für Handel, Versicherungen und öffentliche Verwaltung baut.',
    verbindung: 'Wer Software für lange Lebenszyklen baut, braucht Entwickler, die lesbar schreiben, testen und dokumentieren; genauso arbeite ich in meinen eigenen Projekten.',
  },
  jobKeywords: ['TypeScript', 'React', 'Java', 'Spring', 'Backend', 'Frontend', 'REST', 'MongoDB'],

  cv: {
    tagline: '',
    // Einzeiligkeits-Regel 22.07.2026: Schwerpunkte-Zeile ≤100 Zeichen → max 3 kurze Tags.
    competencies: [
      'TypeScript & Node.js',
      'React & Full-Stack',
      'Tests & Codequalität',
    ],
    projects: [
      {
        title: 'Travelagency — Full-Stack Monorepo',
        stack: 'TypeScript · Node.js · Next.js 14 · FastAPI · MongoDB · Stripe',
        desc: 'Monorepo: TypeScript Node.js Gateway, FastAPI Agent-Service, Next.js Frontend. Echtzeit-Integrationen: Amadeus (Flüge), Hotelbeds (Hotels), Stripe (Payment), Twilio (WhatsApp). GDPR-PII-Masking, AES-256-GCM Verschlüsselung.',
      },
      {
        title: 'AI Orchestra — Multi-Agent-Automatisierung',
        stack: 'LangGraph · Python · Claude · Gemini · OpenAI · MongoDB',
        desc: 'Multi-Agent-System mit MongoDB-Checkpointer (Pause/Resume), Routing-Guards, Cost-Tracking mit Budget-Kill-Switch und 19-teiliger Test-Suite zur Sicherung von Betrieb, Kosten und Output-Qualität.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'TypeScript, React.js, Next.js 14, HTML5/CSS3, TailwindCSS, Komponentenarchitektur, Responsive Design' },
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
    anrede: 'Sehr geehrte Frau Freund,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Absolvent der Informatik für den Standort Köln. Ich entwickle seit anderthalb Jahren eigene Anwendungen in TypeScript und React, im Backend mit Node.js, und achte von Anfang an auf lesbaren Code und Tests. Enterprise Anwendungen, die über Jahre wartbar bleiben sollen, sind genau die Art von Aufgabe, die mich reizt.`,

      `Mein Schwerpunkt ist TypeScript, im Frontend mit React und im Backend mit Node.js. Dazu kommen REST Schnittstellen und Datenbanken wie MongoDB und PostgreSQL. In meinem größten Projekt sichere ich die Abläufe mit einer eigenen Test Suite ab, dadurch finde ich Fehler, bevor sie in den Betrieb kommen. Java und Spring habe ich noch nicht im Einsatz gehabt, das sage ich offen. Die Konzepte dahinter, Typisierung und klare Schichten, kenne ich aus TypeScript und Node, und in neue Sprachen arbeite ich mich zügig ein.`,

      `Mein Unterbau sind zwei Jahre Umschulung zum Fachinformatiker. Das erste Jahr Systemintegration bei der FAW in Köln habe ich mit den Modulen IT Systeme und IT Netzwerke erfolgreich abgeschlossen, inklusive Praktikum. Das zweite Jahr gehörte der Anwendungsentwicklung, mit einem einjährigen Kurs zum Full Stack Web Developer. Seitdem baue ich kontinuierlich eigene Projekte: Webanwendungen wie eine Reiseplattform mit Buchungsintegrationen und ein Shopsystem, dazu REST APIs für Lager und Personalverwaltung. Inzwischen liegt mein Schwerpunkt dort, wo Webentwicklung und KI zusammenkommen: ein Multi Agenten System zur Orchestrierung mehrerer Sprachmodelle und ein Security Agent mit menschlicher Freigabe. Dazu Automatisierungen mit n8n. Über 40 Repositories davon liegen öffentlich auf GitHub.`,

      `An mgm gefällt mir der Anspruch, Anwendungen für Versicherungen und die öffentliche Verwaltung so zu bauen, dass sie lange leben. Ich wohne in Bonn, das Kölner Büro ist für mich gut erreichbar, auch an vier Präsenztagen pro Woche in der Probezeit.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
