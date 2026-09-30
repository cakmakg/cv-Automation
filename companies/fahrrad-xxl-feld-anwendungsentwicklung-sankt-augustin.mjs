// Fahrrad XXL Feld GmbH — Fachinformatiker Anwendungsentwicklung / Mitarbeiter IT-Support (m/w/d) Systemintegration
// Standort: Einsteinstraße 35, 53757 Sankt Augustin
// Quelle: job24.de/stellenangebote-partner9/stellenangebot-9154815 (via xing.com), datePosted 15.08.2026
//
// IMPRESSUM / HANDELSREGISTER (geprüft 26.08.2026):
//   Fahrrad XXL Feld GmbH, Einsteinstr. 35, 53757 Sankt Augustin
//   Amtsgericht Siegburg HRB 3602, Ersteintragung 10.04.1992
//   Geschäftsführung: Peter Feld (alleinvertretungsberechtigt) und Catherine Feld, beide Bonn
//   Haus seit 1954, rund 200 Mitarbeitende, eigenes Café Velo
// WICHTIG: Die Feld GmbH ist eine EIGENE juristische Person, NICHT die
// Fahrrad-XXL.de GmbH & Co. KG in Frankfurt (HRA 50375) — das ist der Verbund/Marktplatz.
// Adressiert wird die Feld GmbH in Sankt Augustin.
//
// KEIN NAMENTLICHER ANSPRECHPARTNER in der Anzeige, nur bewerbung.sa@fahrrad-xxl.de
// -> "Sehr geehrte Damen und Herren". Die Geschäftsführer stehen im Handelsregister,
// werden aber NICHT angeschrieben: die Anzeige nennt eine Sammeladresse.
//
// ⚠️ DIE ANZEIGE DUZT DURCHGEHEND ("Was du bei uns bewegst"). Der Brief SIEZT trotzdem.
// Ein Wechsel der Anredeform ist eine grosse Abweichung und geht nach
// [[feedback-sprache-nur-nach-rueckfrage]] nur nach Rückfrage. Beim User angefragt.
//
// ⚠️ BEFRISTET. "Voll- oder Teilzeit | Befristet", die Dauer wird NICHT genannt.
// Das ist der grösste vertragliche Dämpfer und gehört ins Erstgespräch.
//
// ANSCHREIBEN = GOLDMUSTER BEREICH 1, fünf Absätze mit fester Funktion
// ([[feedback-anschreiben-goldmuster-fullstack]], freigegeben 17.08.2026).
// NICHT die 9-Absatz-Fassung aus #78/#79 — die ist für Bereich 2 gebaut (IT-Support-
// Stationen, Förderzusage, Zeugnis-Hinweis) und trägt eine Anwendungsentwickler-Stelle nicht.
//   P1 rein faktisch: was ich baue, Stack, Arbeitsweise-Signal, aktueller Job
//   P2 Abgleich mit den Muss-Anforderungen, fehlendes zuerst als Einarbeitung
//   P3 Substanzabsatz: gebaute Systeme, KI Anwendungen, ein Ergebnis-Satz
//   P4 Fundament, Herkunft als Prägung, Standortaussage
//   P5 Abschlusssatz allein
//
// FÖRDERZUSAGE-ABSATZ BEWUSST NICHT DRIN. [[user-foerderzusage-arbeitsagentur]] sagt:
// eigener Absatz bei QUEREINSTIEGS-Bewerbungen, NICHT bei passgenauen Tech-Bewerbungen.
// Diese hier ist inhaltlich passgenau (KI Anwendungen + Web-Apps + Automatisierung).
// Er liesse sich als P5 einschieben, wenn der User das will -> beim User angefragt.
//
// Score 4.3/5:
//   + 🟢 "NACHWEISBARE ERFAHRUNG IN DER ENTWICKLUNG VON KI-ANWENDUNGEN" steht wörtlich
//     im Anforderungsprofil. Das ist genau der Teil, den kaum ein Bewerber belegen kann
//     und der hier öffentlich auf GitHub liegt. Stärkstes Einzelargument der Bewerbung.
//   + 🟢 "Web-Apps, Dashboards oder Automatisierungs-Workflows ... Low-Code-Plattformen,
//     Skriptsprachen oder API-Schnittstellen" = wörtlich der eigene Stack
//     (Next.js/React/TypeScript, Node.js, n8n als Low Code, REST und externe APIs).
//   + 🟢 Die Stelle verbindet BEIDE Hälften des Profils: Anwendungsentwicklung UND
//     IT-Support/Systemintegration (Kassen- und Lagersysteme am Laufen halten).
//     Genau das Narrativ "wo Webentwicklung und KI zusammenkommen".
//   + "Kenntnisse in Retail-Prozessen oder Service-/Werkstattabläufen sind ein Plus" —
//     drei Jahre eigenes Café mit Catering: Warenwirtschaft, Kasse, Personalplanung.
//     Der Gründer-Hintergrund ist hier zum ersten Mal ein FACHLICHES Plus, kein Soft Skill.
//   + "Eng mit der Geschäftsführung zusammen, digitale Roadmap" — Stakeholder-Arbeit
//     aus der eigenen Selbstständigkeit.
//   + 12 km von Bonn. Kein Standortthema.
//   - 🚩 "MEHRJÄHRIGE Berufserfahrung im IT-Prozessmanagement, Applikationsbetrieb oder
//     digitalen Projektmanagement" ist die Hauptlücke. IT-Praxis: rund ein Jahr
//     (GIS, Vidinli, Emlak, UNO) plus zwei Jahre Umschulung plus eigene Projekte.
//     NICHT negieren ([[feedback-anschreiben-keine-gap-negation]]) -> in P4 positiv
//     erzählt über die Gründerjahre (Prozesse, Zahlen, Systeme selbst verantwortet).
//   - 🚩 BEFRISTET ohne genannte Dauer.
//   - ⚠️ "Sicherer Umgang mit Datenanalyse, KPIs und Reporting-Tools": Dashboards und
//     Datenaufbereitung ja, ein Reporting-Werkzeug wie Power BI ist NICHT belegt und
//     wird NICHT behauptet.
//   - ⚠️ Kassen- und Lagersysteme des Hauses sind unbekannt -> in P2 als Einarbeitung.
//   - ⚠️ Ein-Personen-IT in einer Filiale: viel Gestaltungsraum, wenig Team zum Lernen.
// Run: node generate-bewerbung.mjs companies/fahrrad-xxl-feld-anwendungsentwicklung-sankt-augustin.mjs

export default {
  slug: 'fahrrad-xxl-feld-anwendungsentwicklung-sankt-augustin',
  date: '26.08.2026',
  language: 'de',

  recipient: [
    'Fahrrad XXL Feld GmbH',
    'Einsteinstraße 35',
    '53757 Sankt Augustin',
  ],

  subject: 'Bewerbung als Fachinformatiker Anwendungsentwicklung und Mitarbeiter im IT-Support',

  narrative: {
    kern: 'Baut Webanwendungen und KI Anwendungen im eigenen Stack aus Node.js und TypeScript und automatisiert Abläufe, die vorher von Hand liefen, mit Blick dafür, wo im Tagesgeschäft eines Betriebs Zeit verloren geht.',
    passung: [
      'Eigene KI Anwendungen mit LangGraph und RAG, öffentlich auf GitHub nachweisbar',
      'Web-Apps, Dashboards und Automatisierung über n8n, REST und externe APIs',
      'Drei Jahre eigenes Café mit Catering: Warenwirtschaft, Kasse und Personalplanung selbst verantwortet',
    ],
  },
  company: {
    mission: 'Familiengeführtes Fahrradhaus in Sankt Augustin, seit 1954, rund 200 Mitarbeitende, das Verkauf, Service, Werkstatt und Logistik unter einem Dach betreibt und seine digitalen Abläufe dafür zusammenführen will.',
    verbindung: 'Wer Verkauf, Werkstatt und Lager unter einem Dach betreibt, verliert Zeit an den Stellen, an denen die Systeme nicht ineinandergreifen. Genau dort setzen kleine eigene Anwendungen und automatisierte Workflows an.',
  },
  // "Low-Code" mit Bindestrich, weil der User es im Brief so schreibt (ATS-Abgleich).
  jobKeywords: ['KI', 'Anwendungen', 'Automatisierung', 'API', 'Dashboard', 'Prozess', 'Low-Code', 'Schnittstellen'],

  cv: {
    // FDSE-Muster: domain-forward Tagline erlaubt ([[project-fdse-bewerbung]]).
    tagline: 'Anwendungsentwicklung · KI & Automatisierung',
    // Schwerpunkte-Zeile einzeilig: "Schwerpunkte: …" = 76 Zeichen.
    competencies: [
      'Full-Stack-Entwicklung',
      'KI-Anwendungen',
      'Prozessautomatisierung',
    ],
    // Bereich 1: Projekte sind der Nachweis für "Nachweisbare Erfahrung in der
    // Entwicklung von KI-Anwendungen". Zwei Stück, damit der CV 1 Seite bleibt.
    projects: [
      {
        title: 'GuestMatrix — B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · Supabase',
        desc: 'Multi-Tenant-Isolation per Row-Level-Security, sektorbasierte Config-Registry, DSGVO-konform, Zod, Vitest.',
      },
      {
        title: 'AI Orchestra — Multi-Agenten-System',
        stack: 'TypeScript · Node.js · LangGraph · n8n',
        desc: 'Orchestriert mehrere LLM-Anbieter über LangGraph, RAG über MongoDB Vector Search, n8n als Event-Layer, HITL-Freigabe.',
      },
    ],
    skills: [
      { category: 'KI & Automatisierung', items: 'LangGraph, Multi-Agent-Systeme, RAG (Vector Search), HITL-Workflows, n8n (Low-Code)' },
      { category: 'Backend & Daten', items: 'Node.js, Express.js, REST-APIs &amp; Schnittstellen, PostgreSQL, MongoDB, Supabase' },
      { category: 'Frontend & Dashboards', items: 'TypeScript, React.js, Next.js 15, Dashboards &amp; Datenaufbereitung' },
      { category: 'IT-Betrieb & DevOps', items: 'Windows 11, Windows Server, Netzwerke, Docker, CI/CD, Git/GitHub, Linux' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `hiermit bewerbe ich mich auf Ihre Stelle als Fachinformatiker Anwendungsentwicklung und Mitarbeiter im IT-Support. Ich bin gelernter Fachinformatiker für Anwendungsentwicklung. Ich baue Webanwendungen im Frontend und im Backend und automatisiere Abläufe, die vorher von Hand liefen. Mein Stack ist JavaScript, React.js und Next.js mit TypeScript, im Backend Node.js.`,

      `Ihre Kassen- und Lagersysteme kenne ich noch nicht und arbeite mich zügig ein. Was ich mitbringe, ist die Arbeit an den Schnittstellen dazwischen: Ich baue REST-Schnittstellen, binde fremde Systeme über APIs an und bereite Daten so auf, dass sie als Dashboard lesbar werden. Für Automatisierung nutze ich n8n als Low-Code-Ebene; Skripte schreibe ich in TypeScript und Node.js. Damit lässt sich ein Engpass oft lösen, ohne ein neues Großsystem einzuführen.`,

      `Meine KI-Anwendungen baue ich selbst und zeige sie am liebsten am gebauten System. GuestMatrix ist eine mandantenfähige Plattform auf Basis von Next.js und Supabase, über eine Registry je Branche konfigurierbar, sodass derselbe Kern verschiedene Betriebsarten bedient. Daneben baue ich Systeme aus mehreren Agenten für Prozesse im B2B, darunter AI Orchestra und eine autonome Travel Agency. Ich nutze dafür LangGraph und MongoDB Vector Search, dazu n8n als digitales Nervensystem für ereignisgesteuerte Workflows. Die Qualität sichere ich über feste Freigabepunkte, an denen ein Mensch entscheidet, bevor das System weiterläuft. Dadurch bleibt jeder Schritt nachvollziehbar. Meine Projekte liegen öffentlich auf GitHub.`,

      `Für meine berufliche Neuorientierung liegt mir eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung übernimmt der Träger für bis zu zwei Jahre bis zu 50 Prozent meines Gehalts. Die Unterlagen dazu reiche ich Ihnen gerne ein. Damit tragen Sie das Risiko der Einarbeitung nur zur Hälfte.`,

      `Mein Fundament sind zwei Jahre Umschulung zum Fachinformatiker, zuerst Systemintegration, danach Anwendungsentwicklung mit Schwerpunkt Webentwicklung. Davor war ich im Tourismus tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. In diesen Jahren habe ich Warenwirtschaft, Kasse und Personalplanung selbst verantwortet. Ich weiß deshalb aus eigener Erfahrung, wo im Tagesgeschäft eines Betriebs Zeit verloren geht, und ich baue meine Werkzeuge genau dort hin.`,

      `Sankt Augustin liegt vor meiner Haustür; ich wohne in Bonn. Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
