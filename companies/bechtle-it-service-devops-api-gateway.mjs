// Bechtle GmbH IT-Systemhaus Bonn/Köll — IT Service Engineer / DevOps Engineer (w/m/d),
//   API-Gateway / Integrationsplattform. Standort: Niederlassung Sankt Augustin,
//   Marie-Curie-Straße 11-17, 53757 Sankt Augustin (via bechtle.com Standortseite verifiziert;
//   Hauptsitz Pennefeldsweg 10, 53177 Bonn). Bereichsleiter der AV Software Solutions:
//   Christian Rupert Maierhofer — Anzeige nennt aber KEINEN Recruiting-Ansprechpartner und
//   spricht durchgehend per „du", daher Anrede „Sehr geehrte Damen und Herren".
// Quelle: stepstone.de/…-14342720 (aktiv, 31.07.2026, vom User als Volltext geliefert).
// BEREICH 1 (Tech/DevOps, bewerbung.md), Gold-Voice, hyphenfrei im Fließtext, Tricolon-Budget 0.
//
// PASSUNG (starke Stelle): Anzeige NENNT Fachinformatiker Systemintegration als Zielprofil ✓ =
//   die echte Ausbildung des Users (nicht AE). 2nd-Level-Support + Störungsanalyse = GIS-First-Level
//   plus eigenes Debugging tieferer Fehler in selbst gebauten Systemen. CI/CD, Docker, Git,
//   Deployment, Automatisierung, Monitoring = aus eigenen Projekten belegt (Test-Suite, Monitoring/
//   Incident-Pipeline). SÜ2 gefordert → als DEUTSCHER Staatsbürger kein Blocker (user_staatsangehoerigkeit),
//   Sankt Augustin liegt direkt neben Bonn → Führerschein B + Erreichbarkeit im Brief.
// ECHTE LÜCKEN (ehrlich, keine Gap-Negation): Kubernetes/OpenShift (User hat Docker, nicht K8s) →
//   „finde mich zügig hinein"; API-Gateway/Middleware, GitOps/IaC, ITIL nur Grundlagen → nicht
//   überclaimen, im Skill-Block als (Grundlagen)/Einarbeitung, nicht als Admin-Anspruch.
// CV: Tech-Default (tagline leer), 1 Projekt (Integrations-Monorepo mit Gateway → API-Gateway-Bezug),
//   Skills DevOps-first; Education-Override = Systemintegration (Validator-Pflicht). 1-Seiten-Regel
//   nach Generate per pdftotext prüfen.
// Run: node generate-bewerbung.mjs companies/bechtle-it-service-devops-api-gateway.mjs

export default {
  slug: 'bechtle-it-service-devops-api-gateway',
  date: '31.07.2026',
  language: 'de',

  recipient: [
    'Bechtle GmbH IT-Systemhaus Bonn/Köln',
    'Niederlassung Sankt Augustin',
    'Marie-Curie-Straße 11-17',
    '53757 Sankt Augustin',
  ],

  subject: 'Bewerbung als IT Service Engineer / DevOps Engineer',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration und Full Stack Entwickler, der Systeme im First Level betreut und eigene Anwendungen in Containern baut, deployt und im Betrieb hält.',
    passung: [
      'Fachinformatiker für Systemintegration mit First Level Support Praxis bei GIS',
      'CI/CD, Docker, Git und Deployment aus der täglichen Arbeit an eigenen Projekten',
      'Monitoring und Störungsanalyse aus einer selbst gebauten Incident Pipeline',
    ],
  },
  company: {
    mission: 'Bechtle betreibt als IT Dienstleister für seine Kunden Integrationsplattformen und Managed Services und hält den Betrieb dieser Systeme zuverlässig am Laufen.',
    verbindung: 'Wer Plattformen stabil betreibt, braucht Leute, die Störungen schnell verstehen und Änderungen sauber ausrollen; genau so arbeite ich an meinen eigenen Systemen.',
  },
  jobKeywords: ['DevOps', 'CI/CD', 'Deployment', 'Container', 'Monitoring', 'Support', 'Automatisierung', 'Systemintegration'],

  cv: {
    // Tech-Default: tagline leer (reboot-Struktur), Schwerpunkte-Zeile trägt die Rollenklammer.
    tagline: '',
    // ≤5 Wörter/Tag, Schwerpunkte-Zeile ≤100 Zeichen, bewusst anders formuliert als die Skill-Liste.
    competencies: [
      'Plattform-Betrieb & Support',
      'CI/CD & Deployment',
      'Systemintegration',
    ],
    // Tech-Rolle, internationales Systemhaus: englische Selbstbeschreibung ehrlich, nicht als bare B1.
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Genau 1 Projekt → 1 Seite A4. Integrations-Monorepo mit Node.js-Gateway = bester Bezug zu
    // „API-Gateway / Integrationsplattform"; zeigt Container-Betrieb + getrennte Deployments.
    projects: [
      {
        title: 'Travelagency — Integrations-Monorepo',
        stack: 'TypeScript · Node.js · FastAPI · Docker · MongoDB',
        desc: 'Monorepo mit Node.js-Gateway, das mehrere Dienste und externe APIs (Amadeus, Hotelbeds, Stripe) anbindet. Betrieb in Docker-Containern, getrennte Deployments, AES-256-GCM-Verschlüsselung.',
      },
    ],
    skills: [
      { category: 'DevOps & Betrieb', items: 'CI/CD-Pipelines, Docker (Container), Deployment, Git/GitHub, Linux, Monitoring' },
      { category: 'Support & Systeme', items: 'First Level Support, Ticketing, Störungsanalyse, ITIL (Grundlagen), Windows 11, Active Directory' },
      { category: 'Entwicklung & APIs', items: 'TypeScript, Node.js, Python (FastAPI), REST-APIs, MongoDB, SQL' },
      { category: 'KI & Automatisierung', items: 'LangGraph, Multi-Agent-Systeme, LLM-APIs (Claude, Gemini, OpenAI), MCP, n8n' },
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
      `ich bewerbe mich als IT Service Engineer und DevOps Engineer bei Bechtle. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Daneben baue ich seit rund zwei Jahren eigene Anwendungen, betreibe sie in Containern und kümmere mich um Aufbau und Deployment. Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros in Köln.`,

      `Den stabilen Betrieb einer Plattform sicherzustellen und bei Störungen schnell die Ursache zu finden, liegt mir. Bei GIS habe ich Anfragen aufgenommen, im Ticketsystem dokumentiert und Störungen selbst gelöst oder qualifiziert weitergegeben. Auf der technischen Seite kenne ich CI/CD, Docker und Git aus der täglichen Arbeit an meinen Projekten. Damit baue ich Pipelines für Aufbau, Deployment und Automatisierung. Mit Kubernetes und OpenShift habe ich noch nicht produktiv gearbeitet, da ich Container und Deployments aus Docker kenne, finde ich mich aber zügig hinein.`,

      `Meine Projekte baue ich selbst von Grund auf. In meinem größten Projekt sichere ich die Abläufe mit einer eigenen Test Suite ab. Dadurch finde ich Fehler, bevor sie in den Betrieb gehen. Ein anderes Projekt ist eine Monitoring und Incident Pipeline, die Logs auswertet, Auffälligkeiten erkennt und Gegenmaßnahmen erst nach Freigabe durch einen Menschen anstößt. Über 40 solcher Repositories liegen öffentlich auf GitHub. KI gehört dabei fest zu meiner Arbeit, ich entwickle mit Claude und baue selbst Systeme, die auf großen Sprachmodellen aufsetzen.`,

      `Bechtle betreibt für seine Kunden Integrationsplattformen und Managed Services und hält deren Betrieb zuverlässig am Laufen. Dazu passe ich, weil ich Systeme selbst baue und ihren Betrieb im Blick behalte, von der Änderung bis zum sauberen Deployment. Die geforderte erweiterte Sicherheitsüberprüfung bringe ich als deutscher Staatsbürger ohne Weiteres mit. Ich wohne in Bonn und habe Führerschein Klasse B, Sankt Augustin ist für mich gut erreichbar.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
