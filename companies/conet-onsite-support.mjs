// conet Deutschland GmbH — IT Supporter im Onsite Support (m/w/d), Standort BONN (o. Berlin)
// Bereich "Operational Services". IT-Dienstleister für öffentliche Verwaltung, Verteidigung
// und Unternehmen (End-to-End). Juristisch: conet Deutschland GmbH, Bundeskanzlerplatz 2,
// 53113 Bonn (HRB 28102 Bonn; Northdata + conet.de Impressum verifiziert 23.07.2026).
// Ansprechpartnerin: Stefanie Welsing (Senior People Partner), recruiting@conet.de,
// +49 228 9714-0916 -> Anrede Frau Welsing.
// Online-Formular verlangt: GEHALTSVORSTELLUNG (42.000 €, User 23.07.2026) +
// STANDORTWUNSCH (Bonn) + frühestmöglicher EINTRITTSTERMIN (ab sofort) -> alle im Brief.
// Quelle: stepstone.de 14119565 (JSON-LD, aktiv bis 06.08.2026).
// BEREICH 2 (Goldmuster). Score 4.6/5: BONN = Wohnort (kein Pendeln); "abgeschlossene
// Ausbildung im IT-Umfeld ODER vergleichbare Qualifikationen" = FiSi; Aufgaben (1st Level,
// Telefon, Fehleranalyse+Doku, Qualifizierung für nachgelagerte Serviceteams) = GIS 1:1;
// Microsoft/Client/Videokonferenz nur "routinierter Umgang" = Anwender, KEIN Admin-Gap;
// Ticketsysteme + Onsite nur "wünschenswert" = vorhanden. Einziger weicher Punkt:
// Englisch "gut in Wort und Schrift" -> thinkGROUP-Satz + cv.languages-Override (B1 ehrlich).
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/conet-onsite-support.mjs

export default {
  slug: 'conet-onsite-support',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'conet Deutschland GmbH',
    'Frau Stefanie Welsing',
    'Bundeskanzlerplatz 2',
    '53113 Bonn',
  ],

  subject: 'Bewerbung als IT Supporter im Onsite Support',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Störungen aufnehmen, im Ticketsystem dokumentieren, lösen oder qualifiziert weitergeben',
      'Entwicklungsseite: eigene Automatisierungen, präzise Qualifizierung von Kundenanfragen',
    ],
  },
  company: {
    mission: 'Bonner IT Dienstleister, der End-to-End-Lösungen für die öffentliche Verwaltung, Verteidigung und Unternehmen baut.',
    verbindung: 'Im Onsite Support entscheidet der erste Kontakt über Qualität und Tempo der gesamten Ticketkette; genau diesen ersten Kontakt mache ich ruhig, freundlich und sauber dokumentiert.',
  },
  jobKeywords: ['Ticket', 'Dokumentation', 'Anwendersupport', 'Microsoft', 'Windows', 'Onsite', 'Englisch', 'Kundenanfragen'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      '1st Level Anwendersupport',
      'Onsite- & Remote-Support',
      'Ticketbearbeitung & Eskalation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Videokonferenzsysteme (Teams, Zoom), Hardware-Einrichtung, Drucker & Peripherie' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Qualifizierung & Eskalation an Second Level, Anwenderschulung' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Welsing,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als IT Supporter im Onsite Support am Standort Bonn. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Anwendersupport bei einem Bonner IT Dienstleister für die öffentliche Verwaltung passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern am Telefon schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder für die nachgelagerten Teams qualifiziert weitergegeben. Mit Windows, den Microsoft Office Komponenten und Videokonferenzsystemen arbeite ich täglich, Englisch nutze ich im Arbeitskontext sicher. Endgeräte einrichten und austauschen kenne ich aus meiner Ausbildung und Praxis.`,

      `Was mich von vielen im First Level unterscheidet, ist meine Entwicklungsseite. In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch erkenne ich wiederkehrende Muster in Kundenanfragen und halte die Qualifizierung für nachgelagerte Serviceteams präzise: Ein gut beschriebenes Ticket spart dem nächsten Team Zeit. Meine Dokumentation ist so aufgebaut, dass andere direkt damit weiterarbeiten können.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Kunden schnell und freundlich bekommen, was sie brauchen. Diese Ruhe bringe ich in Ihren Support mit. Mein Wunschstandort ist Bonn, dort wohne ich. Einsteigen kann ich ab sofort, meine Gehaltsvorstellung liegt bei 42.000 Euro brutto im Jahr.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
