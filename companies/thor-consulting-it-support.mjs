// thor consulting GmbH (Personalberatung) — IT Support Spezialist (m/w/d), Einsatzort Langenfeld
// Echter Arbeitgeber ANONYM: "technologiegetriebenes Unternehmen, Softwarelösungen entlang
// der Supply Chain" (Industry-Tag: Verkehrstechnik). 40-50k, Vollzeit, Rufbereitschaft,
// Reisebereitschaft gefordert. Personalberatung mit namentlichen Kontakten (kein anonymer
// Aggregator; akkodis-Präzedenz: Dienstleister-Bewerbung ok, trotzdem Skepsis-Notiz im Tracker).
// thor consulting GmbH: HQ Campusallee 2, 51379 Leverkusen (HRB 99587 Köln); IT-Branch
// DÜSSELDORF: Graf-Adolf-Str. 70, 40210 Düsseldorf (0211-Nummern der Kontakte; Northdata
// + thor-consulting.de/impressum verifiziert 22.07.2026).
// Bewerbung per E-Mail an sami.senguel@thor-consulting.de ("an mich") -> Anrede Herr Sengül;
// Zweitkontakt: Thomas Orth (Branch-Manager IT, 0211 87744526).
// Quelle: xing.com/jobs/156462932 (JSON-LD, aktiv bis 16.08.2026).
// BEREICH 2 (Goldmuster). Score 4.0/5: Help-Desk-Kern + Ticketsystem + Doku = GIS;
// GAPS ehrlich: PL SQL (nur wünschenswert) -> "noch nicht im Einsatz, das sage ich offen",
// SQL/PostgreSQL aus eigenen Projekten als Brücke; Englisch "gut" -> thinkGROUP-Satz +
// cv.languages-Override (kein Overclaim); Supply Chain nur "idealerweise" -> nicht behauptet.
// Rufbereitschaft/Reisebereitschaft = Bereitschafts-Zusage im Brief (kein Erfahrungs-Claim).
// Run: node generate-bewerbung.mjs companies/thor-consulting-it-support.mjs

export default {
  slug: 'thor-consulting-it-support',
  date: '22.07.2026',
  language: 'de',

  recipient: [
    'thor consulting GmbH',
    'Herrn Sami Sengül',
    'Graf-Adolf-Straße 70',
    '40210 Düsseldorf',
  ],

  subject: 'Bewerbung als IT Support Spezialist',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Störungen aufnehmen, im Ticketsystem dokumentieren, lösen oder qualifiziert weitergeben',
      'Entwicklungsseite: eigene Webanwendungen, SQL aus eigenen Projekten, reproduzierbare Rückmeldungen',
    ],
  },
  company: {
    mission: 'Technologiegetriebenes Unternehmen, das Softwarelösungen entlang der Supply Chain entwickelt und seine Kunden im laufenden Betrieb begleitet.',
    verbindung: 'Stabiler Systembetrieb beim Kunden braucht Support, der Störungen ruhig analysiert, sauber dokumentiert und den Projektteams verwertbare Rückmeldungen gibt; genau so arbeite ich.',
  },
  jobKeywords: ['Ticket', 'Remote', 'Support', 'Dokumentation', 'SQL', 'Windows', 'Anwendersupport', 'Englisch'],

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
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, SQL (PostgreSQL), Skript-Automatisierung, n8n' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Sengül,',
    paragraphs: [
      `ich bewerbe mich auf die Stelle als IT Support Spezialist in Langenfeld. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Anwendersupport für Softwarelösungen entlang der Supply Chain passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern am Telefon und per Remote Zugriff zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich, Englisch nutze ich im Arbeitskontext sicher. Für die Kunden heißt das: Anfragen werden priorisiert, zügig bearbeitet und nachvollziehbar festgehalten.`,

      `Was mich von vielen im Support unterscheidet, ist meine Entwicklungsseite. Ich baue selbst Webanwendungen mit React und Node. Dadurch verstehe ich technische Zusammenhänge hinter einer Fachanwendung und kann den Projektteams Rückmeldungen geben, die reproduzierbar beschrieben sind. Meine Dokumentation ist so aufgebaut, dass sie direkt in den Wissensaufbau passt. PL SQL habe ich noch nicht im Einsatz gehabt, das sage ich offen. SQL kenne ich aus eigenen Projekten mit PostgreSQL, die Einarbeitung traue ich mir zügig zu.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Kunden schnell und freundlich bekommen, was sie brauchen. Diesen Serviceanspruch bringe ich mit, auch in einer Rufbereitschaft. Reisen zu Kunden sind für mich in Ordnung, Langenfeld erreiche ich von Bonn aus gut. Ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
