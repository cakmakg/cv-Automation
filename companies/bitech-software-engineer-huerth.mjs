// BITech Aktiengesellschaft — Software Engineer (m/w/d), Standort Hürth.
//   Juristische Firma/Anschrift (Impressum bitech.de + HRB 44351 Amtsgericht Köln,
//   verifiziert 31.07.2026): BITech Aktiengesellschaft Beratungsgesellschaft für
//   Informationstechnologie, Daimlerstraße 22, 50354 Hürth. Vorstand: Ute Turbanisch, Serge N'Silu.
//   Anzeige nennt KEINEN Recruiting-Ansprechpartner und duzt durchgehend → Anrede
//   "Sehr geehrte Damen und Herren".
// Quelle: stepstone.de/…-14282163 (aktiv, 31.07.2026, vom User als Volltext geliefert).
// BEREICH 1 (Tech/Full-Stack, bewerbung.md). Gold-Voice, hyphenfrei im Fließtext, Tricolon-Budget 0.
//
// PASSUNG = STRETCH wie mgm (Score ~2.5/5, User-Entscheidung "bereich 1"). ECHTE LÜCKEN, im Brief
//   offen und positiv adressiert (keine Gap-Negation):
//   (1) Java-Enterprise-Stack + Spring = Kernanforderung, NICHT im Profil → ehrlich als Einarbeitung,
//       TS/Node-Konzepte (Schichten, Typisierung) als Brücke; Java/Spring NICHT in Skills/jobKeywords
//       (kein ATS-Stuffing), nur im Brieftext als Prosa.
//   (2) "Abgeschlossenes Hochschulstudium + 1 Jahr Versicherungs-/Bankenbranche" → NIE verneinen
//       (User-Regel) → 2 Jahre FiSi-Umschulung POSITIV: Jahr 1 Systemintegration (Module IT-Systeme +
//       IT-Netzwerke + Praktikum), Jahr 2 Anwendungsentwicklung/Full-Stack-Kurs, seitdem eigene Projekte.
//   (3) Englisch "gut" gefordert → CV-Zeile transparent (Verständigung gut), im Brief nicht thematisiert.
//   STÄRKEN, die die Anzeige (idealerweise) nennt: JavaScript/Node.js/TypeScript/Frontend = Kern des
//   Users; Scrum; "Erste Erfahrungen im Entwurf von IT-Architekturen" = selbst entworfene Monorepo-
//   Architektur (Gateway + Services). Analyse/Konzeption/Test = eigener End-to-End-Bau.
// CV: Tech-Default (tagline leer, kein Profil), 1 Projekt (Travelagency-Monorepo → IT-Architektur +
//   REST + Test-Suite), Skills Frontend-first + Scrum, Education-Override = Systemintegration
//   (Validator-Pflicht). 1-Seiten-Regel nach Generate per pdftotext prüfen.
// Run: node generate-bewerbung.mjs companies/bitech-software-engineer-huerth.mjs

export default {
  slug: 'bitech-software-engineer-huerth',
  date: '31.07.2026',
  language: 'de',

  recipient: [
    'BITech Aktiengesellschaft',
    'Beratungsgesellschaft für Informationstechnologie',
    'Daimlerstraße 22',
    '50354 Hürth',
  ],

  subject: 'Bewerbung als Software Engineer',

  narrative: {
    kern: 'Full Stack Entwickler mit TypeScript und Node.js, der eigene Anwendungen von der Analyse über die Entwicklung bis zum Test selbst baut und absichert.',
    passung: [
      'TypeScript, JavaScript und Node.js aus eigenen Projekten und Praktikum',
      'Eigene Architektur aus Gateway und Services im Frontend und Backend entworfen',
      'Arbeit nach Scrum, von der Analyse bis zum getesteten Ergebnis',
    ],
  },
  company: {
    mission: 'Bitech ist ein IT-Beratungshaus, das Digitalisierungsvorhaben für Kunden aus Versicherungen und Banken von der Analyse bis zur Einführung begleitet.',
    verbindung: 'Wer Anwendungssoftware von der Analyse bis zur Einführung für Kunden baut, braucht Entwickler, die sauber analysieren, lesbar entwickeln und ihre Ergebnisse testen; genau so arbeite ich in meinen eigenen Projekten.',
  },
  jobKeywords: ['TypeScript', 'JavaScript', 'Node.js', 'Frontend', 'REST', 'Scrum', 'Test'],

  cv: {
    // Tech-Default: tagline leer (reboot-Struktur), Schwerpunkte-Zeile trägt die Rollenklammer.
    tagline: '',
    // Bewusst anders formuliert als die Skill-Liste (keine Dopplung-Warnung), Schwerpunkte-Zeile ≤100.
    competencies: [
      'Full-Stack-Entwicklung',
      'Analyse & Konzeption',
      'Tests & Codequalität',
    ],
    // Tech-Rolle, "gute Englischkenntnisse" gefordert: ehrlich, aber nicht als bare B1 (user_language_levels).
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Genau 1 Projekt → 1 Seite A4. Monorepo = bester Beleg für "Entwurf von IT-Architekturen"
    // (selbst entworfener Gateway + Services), zeigt REST, Test-Suite und Frontend+Backend.
    projects: [
      {
        title: 'Travelagency — Full-Stack Monorepo',
        stack: 'TypeScript · Node.js · Next.js 14 · FastAPI · MongoDB · Stripe',
        desc: 'Selbst entworfene Architektur: Node.js-Gateway, FastAPI-Service und Next.js-Frontend als Monorepo, mit Echtzeit-Integrationen (Amadeus, Hotelbeds, Stripe) über REST. Abläufe mit eigener Test-Suite abgesichert, AES-256-GCM-Verschlüsselung.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'TypeScript, JavaScript, React.js, Next.js 14, HTML5/CSS3, TailwindCSS, Responsive Design' },
      { category: 'Backend & APIs', items: 'Node.js, Express.js, REST-APIs, FastAPI (Python), MongoDB, PostgreSQL, SQL' },
      { category: 'Methoden & DevOps', items: 'Scrum/Agile, Git/GitHub, CI/CD, Docker, Linux, Jira' },
      { category: 'KI & Automatisierung', items: 'LangGraph, Multi-Agent-Systeme, LLM-APIs (Claude, Gemini, OpenAI), n8n' },
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
      `ich bewerbe mich als Software Engineer bei Bitech. Seit rund zwei Jahren baue ich eigene Anwendungen in TypeScript und Node.js und achte von Anfang an auf lesbaren Code und Tests. Im Frontend arbeite ich mit JavaScript und React. Zurzeit bin ich im Frontend und Marketing eines Reisebüros in Köln tätig.`,

      `Mein Schwerpunkt ist TypeScript, im Frontend mit React und im Backend mit Node.js. Dazu kommen REST Schnittstellen und Datenbanken von SQL bis MongoDB. Bitech setzt im Kern auf Java und Spring. Damit habe ich noch nicht produktiv gearbeitet, das sage ich offen. Die dahinterliegenden Konzepte wie klare Schichten und feste Typisierung kenne ich aus TypeScript und Node. In neue Sprachen arbeite ich mich zügig ein. In meinem größten Projekt sichere ich die Abläufe mit einer eigenen Test Suite ab. Dadurch finde ich Fehler, bevor sie in den Betrieb kommen.`,

      `Mein Unterbau sind zwei Jahre Umschulung zum Fachinformatiker. Das erste Jahr Systemintegration bei der FAW in Köln habe ich mit den Modulen IT Systeme und IT Netzwerke abgeschlossen, dazu ein Praktikum. Das zweite Jahr gehörte der Anwendungsentwicklung, mit einem einjährigen Kurs zum Full Stack Web Developer. Seitdem baue ich fortlaufend eigene Projekte, darunter eine Reiseplattform mit Buchungsintegrationen und ein Multi Agenten System zur Orchestrierung mehrerer Sprachmodelle. Inzwischen liegt mein Schwerpunkt dort, wo Webentwicklung und KI zusammenkommen. Über 40 dieser Repositories liegen öffentlich auf GitHub.`,

      `Bitech begleitet Digitalisierungsvorhaben für Kunden aus Versicherungen und Banken, von der Analyse bis zur Einführung. Dazu passe ich, weil ich Anwendungen selbst von der Analyse über die Entwicklung bis zum Test aufbaue und dabei eng an den Anforderungen bleibe. Mit agilen Methoden wie Scrum arbeite ich in meinen Projekten. Ich wohne in Bonn und habe Führerschein Klasse B, Hürth ist für mich gut erreichbar.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
