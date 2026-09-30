// DATAGROUP Köln GmbH — Fachinformatiker (all genders) für den IT-Vor-Ort-Support,
// Einsatzort VETTELSCHOSS (53560, Lk. Neuwied, ~25 km von Bonn), Kennziffer DGK-KLNX-0422.
// Juristisch: DATAGROUP Köln GmbH, Schanzenstraße 6-20, 51063 Köln (HRB 65490 Köln;
// Northdata verifiziert 23.07.2026; Telefon passt zu Recruiterin). Unbefristet, Vollzeit.
// Ansprechpartnerin: Angela Pape (Recruiterin, +49 221 96486-116) -> Anrede Frau Pape.
// Bewerbungsformular verlangt GEHALTSVORSTELLUNG (40.000 €, User 23.07.) + VERFÜGBARKEIT
// (ab sofort) -> beides im Brief. Kennziffer NUR im Betreff (Bindestrich-Regel Fließtext).
// Quelle: stepstone.de 14221550 (JSON-LD, aktiv bis 31.07.2026).
// BEREICH 2 (Goldmuster). Score 4.3/5: "Fachinformatiker für Systemintegration" WÖRTLICH;
// Windows 11/M365 als NUTZUNGS-Erfahrung (kein Admin-Gap); Netzwerk nur GRUNDKENNTNISSE
// (FAW IT-NETZWERKE); ITIL "nicht Voraussetzung, wir schulen"; FÜHRERSCHEIN B gefordert =
// VORHANDEN; Deutsch C1 exakt. Weicher Punkt: Support auch AUF ENGLISCH -> thinkGROUP-Satz
// + "entwickle gezielt weiter" + cv.languages-Override (B1 ehrlich, kein Overclaim).
// Windows 11 nur im CV-Skill, Brief generisch "Mit Windows" (Faktenregel).
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/datagroup-vor-ort-support.mjs

export default {
  slug: 'datagroup-vor-ort-support',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'DATAGROUP Köln GmbH',
    'Frau Angela Pape',
    'Schanzenstraße 6-20',
    '51063 Köln',
  ],

  subject: 'Bewerbung als Fachinformatiker für den IT-Vor-Ort-Support, Kennziffer DGK-KLNX-0422',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Störungen aufnehmen, im Ticketsystem dokumentieren, lösen oder an nachgelagerte Einheiten weitergeben',
      'Führerschein Klasse B und Wissensdatenbank Pflege für den Vor Ort Service',
    ],
  },
  company: {
    mission: 'Einer der führenden deutschen IT Dienstleister, der für seine Kunden verlässliche IT Services im laufenden Betrieb erbringt.',
    verbindung: 'Vor Ort Service lebt davon, dass Technik schnell wieder läuft und jeder Fall nachvollziehbar dokumentiert ist; genau so arbeite ich.',
  },
  jobKeywords: ['Ticket', 'Windows', 'Microsoft', 'Netzwerk', 'Dokumentation', 'Wissensdatenbank', 'Hardware', 'Führerschein'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      '1st Level Anwendersupport',
      'Windows & Hardware',
      'Ticketbearbeitung & Eskalation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Hardware-Einrichtung, Drucker & Peripherie, Softwareinstallation' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Wissensdatenbank-Pflege, Eskalation an Second Level' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Verbindungstests, Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (B1, sichere Verständigung, in aktiver Weiterentwicklung) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Pape,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Fachinformatiker für den IT Vor Ort Support in Vettelschoß. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Vor Ort Service bei einem der führenden deutschen IT Dienstleister passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern vor Ort schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert an nachgelagerte Einheiten weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich, Englisch nutze ich im Arbeitskontext sicher und entwickle es gerade gezielt weiter. Hardware wie Desktops und Drucker installiere ich, bei IT Umzügen richte ich Arbeitsplätze ein und prüfe die Verbindungen. Grundlagen im Netzwerkbereich bringe ich aus meiner Ausbildung mit.`,

      `Was mich von vielen im Support unterscheidet, ist meine Entwicklungsseite. In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch erkenne ich wiederkehrende Muster in Anfragen und pflege eine Wissensdatenbank so, dass das Team direkt damit weiterarbeiten kann. Einen Führerschein der Klasse B habe ich, Vettelschoß erreiche ich von Bonn aus gut.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Kunden schnell und freundlich bekommen, was sie brauchen. Diese Ruhe bringe ich mit, gelegentliche Einsätze außerhalb der Regelarbeitszeit sind für mich in Ordnung. Meine Gehaltsvorstellung liegt bei 40.000 Euro brutto im Jahr, verfügbar bin ich ab sofort.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
