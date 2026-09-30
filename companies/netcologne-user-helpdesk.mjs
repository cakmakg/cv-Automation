// NetCologne IT Services GmbH — IT-Supporter User Helpdesk (m/w/d), Köln
// Adolf-Grimme-Allee 3, 50829 Köln (Adresse direkt aus der Anzeige, Konzern NetCologne).
// Tochter des Telekommunikationsanbieters; Servicedesk nach ITIL für GESCHÄFTSKUNDEN +
// SCHULEN (Education Services, "Schul-IT zur Enterprise-IT"), 100.000+ iOS/Android/Windows
// Clients. Unbefristet, Vollzeit, Homeoffice-Regelung, 30 Tage (25-35 wählbar).
// Kontakte: Personalabteilung Elisa Zube & Michèle Polcyn -> Anrede an beide (Roover-Muster).
// Anzeige verlangt GEHALTSVORSTELLUNG + FRÜHESTEN EINTRITTSTERMIN -> 40.000 € (etablierte
// User-Linie KZVK/BRUNATA/DATAGROUP) + ab sofort, beides im Brief.
// Quelle: stepstone.de 14205376 (JSON-LD, aktiv bis 29.07.2026!).
// BEREICH 2 (Goldmuster). Score 4.4/5: IT-Berufsausbildung = FiSi; "erste Erfahrungen"
// Anwenderbetreuung/Support/Remote/Ticket = GIS 1:1; Windows + Standardapps = Anwender ✓;
// iPadOS/mobile Geräte = akkodis-genehmigte Formulierung; Wissensdatenbank/SOP-Doku =
// Kernaufgabe gespiegelt; KEIN Englisch; fließend Deutsch = C1. GAP ehrlich (nur
// "idealerweise"): M365-Support/Tenant-Betreuung -> Anwender + Ausbildungskonzepte +
// Einarbeitung (DPS-Muster, "das sage ich offen"). ITIL nur "in Anlehnung" (Aufgabe, kein
// Profil-Muss) -> nicht thematisiert.
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/netcologne-user-helpdesk.mjs

export default {
  slug: 'netcologne-user-helpdesk',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'NetCologne IT Services GmbH',
    'Personalabteilung, Frau Elisa Zube und Frau Michèle Polcyn',
    'Adolf-Grimme-Allee 3',
    '50829 Köln',
  ],

  subject: 'Bewerbung als IT-Supporter User Helpdesk',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Anfragen am Telefon und remote aufnehmen, im Ticketsystem dokumentieren, lösen oder weitergeben',
      'Workarounds in der Wissensdatenbank festhalten, Muster in Anfragen erkennen',
    ],
  },
  company: {
    mission: 'Kölner IT Dienstleister im NetCologne Konzern, der Geschäftskunden und Schulen betreut und die Schul IT zur Enterprise IT macht.',
    verbindung: 'Ob Lehrkraft oder Sachbearbeiter, am Helpdesk zählt ruhige, verständliche Hilfe und saubere Dokumentation; genau das ist meine Arbeitsweise.',
  },
  jobKeywords: ['Ticket', 'Remote', 'Windows', 'Dokumentation', 'Wissensdatenbank', 'Anwendersupport', 'Hardware', 'Microsoft 365'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      '1st Level Anwendersupport',
      'Remote-Support',
      'Ticketbearbeitung & Eskalation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Hardware-Einrichtung, Mobile Geräte (iOS, Android), Remote-Support' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Wissensdatenbank-Pflege, Eskalation an Second Level' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Zube, sehr geehrte Frau Polcyn,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als IT Supporter im User Helpdesk. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Anwendersupport für Geschäftskunden und Schulen bei einem Kölner IT Dienstleister passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern am Telefon, per E Mail und remote zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert an den Second Level weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich. Auch Hardware und mobile Geräte wie iPads gehören für mich dazu.`,

      `Den Microsoft 365 Support und die Tenant Betreuung kenne ich bisher als Anwender und aus den Konzepten meiner Ausbildung, in die tägliche Betreuung arbeite ich mich zügig ein. Das sage ich offen. Was mich von vielen im Helpdesk unterscheidet, ist meine Entwicklungsseite: In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch erkenne ich wiederkehrende Muster in Anfragen und halte Workarounds so in der Wissensdatenbank fest, dass das Team direkt damit weiterarbeiten kann.`,

      `Gerade an Schulen zählt, dass man technische Schritte ruhig und ohne Fachsprache erklärt. Genau so arbeite ich. Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Menschen schnell und freundlich bekommen, was sie brauchen. Ich wohne in Bonn, Köln erreiche ich gut. Meine Gehaltsvorstellung liegt bei 40.000 Euro brutto im Jahr, einsteigen kann ich ab sofort.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
