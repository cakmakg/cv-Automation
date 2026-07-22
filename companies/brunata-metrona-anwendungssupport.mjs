// BRUNATA-METRONA GmbH — Mitarbeiter Geräte- und Anwendungssupport (m/w/d)
// Köln (Parkgürtel 26, 50823 Köln — Adresse direkt aus der Anzeige), unbefristet, Vollzeit,
// 38–52k. Messgeräte/Verbrauchsabrechnung (Submetering, Energiewende im Gebäudesektor).
// Ansprechpartner: Marcel Hoffmann (HR Business Partner), 0221 995101543 -> Herr Hoffmann.
// Bewerbung über Portal, INKL. GEHALTSWUNSCH -> 40.000 € (User-Entscheidung 22.07.2026).
// Quelle: xing.com/jobs/155968213 (JSON-LD extrahiert, aktiv bis 31.08.2026).
// BEREICH 2 (Goldmuster). Score 4.5/5: Anforderungen weich (kaufm. ODER techn. Ausbildung ->
// FiSi übererfüllt; "erste Berufserfahrung kundenorientiert, idealerweise IT-Vorkenntnisse" ->
// GIS + Café; MS-Office nur ANWENDERkenntnisse; KEIN Englisch); Aufgaben 1st/2nd-Level,
// Fachanwendungen, IT-Doku, Test-/Rollout = GIS-Grundmechanik + Entwicklungsseite passt.
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/brunata-metrona-anwendungssupport.mjs

export default {
  slug: 'brunata-metrona-anwendungssupport',
  date: '22.07.2026',
  language: 'de',

  recipient: [
    'BRUNATA-METRONA GmbH',
    'Herrn Marcel Hoffmann',
    'Parkgürtel 26',
    '50823 Köln',
  ],

  subject: 'Bewerbung als Mitarbeiter Geräte- und Anwendungssupport',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Störungen aufnehmen, im Ticketsystem dokumentieren, lösen oder qualifiziert weitergeben',
      'Entwicklungsseite: eigene Webanwendungen, Verständnis für Fachanwendungen und Tests',
    ],
  },
  company: {
    mission: 'Kölner Unternehmen, das mit Messgeräten und Verbrauchsabrechnungen den bewussten Umgang mit Energie im Gebäudesektor möglich macht.',
    verbindung: 'Damit Niederlassungen und Anwender zuverlässig arbeiten können, braucht es Support, der Störungen ruhig klärt und sauber dokumentiert; genau das ist meine Arbeitsweise.',
  },
  jobKeywords: ['Anwendersupport', 'Second Level', 'Ticket', 'Dokumentation', 'Windows', 'Remote', 'Software', 'Fachanwendungen'],

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
      { category: 'Support & Clients', items: 'Windows 11, MS Office (Anwender), Softwareinstallation, Drucker & Peripherie, Remote-Support' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Eskalation an Second Level, IT-Dokumentation' },
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
    anrede: 'Sehr geehrter Herr Hoffmann,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle im Support für Geräte und Anwendungen in Köln. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Anwendersupport bei einem Kölner Unternehmen für Messgeräte und Verbrauchsabrechnungen passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern am Telefon schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert an den Second Level weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich. Für Ihre Anwender heißt das: Anfragen werden zügig und nachvollziehbar bearbeitet, im Regelbetrieb genauso wie bei einer Störung.`,

      `Was mich von vielen im First Level unterscheidet, ist meine Entwicklungsseite. Ich baue selbst Webanwendungen mit React und Node. Dadurch verstehe ich, wie Fachanwendungen aufgebaut sind. Beim Testen neuer Softwarestände sehe ich schnell, ob sich ein Verhalten geändert hat. Dokumentation halte ich so, dass Kolleginnen und Kollegen direkt damit weiterarbeiten können. In Ihre Fachanwendungen und Messgeräte arbeite ich mich zügig ein.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Kunden schnell und freundlich bekommen, was sie brauchen. Diesen Serviceanspruch bringe ich in Ihren Support mit. Ich wohne in Bonn, der Parkgürtel ist für mich gut erreichbar. Einsteigen kann ich ab sofort, mein Gehaltswunsch liegt bei 40.000 Euro brutto im Jahr.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
