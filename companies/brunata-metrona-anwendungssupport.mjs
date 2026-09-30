// BRUNATA-METRONA GmbH — Mitarbeiter Geräte- und Anwendungssupport (m/w/d)
// Köln (Parkgürtel 26, 50823 Köln — Adresse direkt aus der Anzeige), unbefristet, Vollzeit,
// 38–52k. Messgeräte/Verbrauchsabrechnung (Submetering, Energiewende im Gebäudesektor).
// Ansprechpartner: Marcel Hoffmann (HR Business Partner), 0221 995101543 -> Herr Hoffmann.
// Bewerbung über Portal, INKL. GEHALTSWUNSCH -> 40.000 € (User-Entscheidung 22.07.2026).
// Quelle: xing.com/jobs/155968213 (JSON-LD extrahiert, aktiv bis 31.08.2026).
// NEU ERZEUGT 16.08.2026: Anzeige im Browser gegengeprüft, unverändert (Anforderungen, Herr Hoffmann,
// Portal inkl. Gehaltswunsch). Paket vom 22.07. wurde nie versendet, PDFs nicht mehr in output/.
// P1 auf die Regel vom 23.07. gezogen: rein faktisch, ohne „möchte zurück in die IT, weil…" und
// ohne „passt genau zu dem, was ich kann" (feedback_anschreiben_p1_keine_begruendung).
// BEREICH 2 (Goldmuster). Score 4.5/5: Anforderungen weich (kaufm. ODER techn. Ausbildung ->
// FiSi übererfüllt; "erste Berufserfahrung kundenorientiert, idealerweise IT-Vorkenntnisse" ->
// GIS + Café; MS-Office nur ANWENDERkenntnisse; KEIN Englisch); Aufgaben 1st/2nd-Level,
// Fachanwendungen, IT-Doku, Test-/Rollout = GIS-Grundmechanik + Entwicklungsseite passt.
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/brunata-metrona-anwendungssupport.mjs

export default {
  slug: 'brunata-metrona-anwendungssupport',
  date: '16.08.2026',
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
    mission: 'Unternehmen aus Köln, dessen Messgeräte und Verbrauchsabrechnungen den Energieverbrauch im Gebäudesektor überhaupt erst sichtbar machen.',
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
      `ich bewerbe mich auf Ihre Stelle im Support für Geräte und Anwendungen in Köln. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing.`,

      `Anwendern schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen am Telefon und remote aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert an den Second Level weitergegeben. Geräte einzurichten und wieder ans Laufen zu bringen gehört für mich dazu, von Windows Clients über Drucker und Peripherie bis zu mobilen Geräten. Ihre Anwender merken davon im besten Fall nur, dass ihre Anfrage zügig bearbeitet wird und die Technik weiterläuft.`,

      `Was mich im Anwendersupport von vielen unterscheidet, ist meine Entwicklungsseite. Ich baue selbst Webanwendungen mit React und Node. Dadurch verstehe ich, wie Fachanwendungen aufgebaut sind und wo sie im Alltag klemmen. Beim Testen neuer Softwarestände sehe ich schnell, ob sich ein Verhalten geändert hat. Meine Dokumentation schreibe ich so, dass die Kolleginnen und Kollegen in den Niederlassungen direkt damit weiterarbeiten können. In Ihre Fachanwendungen rund um Messgeräte und Verbrauchsabrechnungen arbeite ich mich zügig ein.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Kunden schnell und freundlich bekommen, was sie brauchen. Diesen Serviceanspruch bringe ich in Ihren Support mit. Ich wohne in Bonn, der Parkgürtel ist für mich gut erreichbar. Einsteigen kann ich ab sofort, mein Gehaltswunsch liegt bei 40.000 Euro brutto im Jahr.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
