// KZVK — Kirchliche Zusatzversorgungskasse des Verbandes der Diözesen Deutschlands
// Stelle: Mitarbeiter (w/m/d) IT-Support — Köln, unbefristet, Vollzeit, 35–48 T€
// Ansprechpartnerin: Carmen Wagner (Personalreferentin), Tel. +49 221 2031-168
// Adresse: Am Hildeboldplatz 2–18, 50672 Köln — verifiziert via Stellenanzeige (Anfahrt).
// Anforderungen: FiSi Systemintegration (= echte Ausbildung!), Anwendersupport,
// Windows 11, Citrix (NICHT im Profil → im Brief als Einarbeitung adressiert),
// JIRA, Hardware-Bereitstellung Image→Auslieferung, Deutsch C1.
// Anzeige verlangt Gehaltsvorstellung + Eintrittstermin → 40.000 € / ab sofort (User 22.07.2026).
// BEREICH 2: IT-Support/Admin (user_ausbildung_systemintegration harmonisiert).
// KORREKTUR 22.07.2026 (User-Feedback): Erstfassung enthielt unbelegte Claims
// (70%-Erstlösungsquote = Stilbeispiel aus bewerbung.md, "FAW abgeschlossen",
// "Windows 11 tägliche Arbeitsumgebung", "Imaging", "Virtualisierung aus Ausbildung")
// → entfernt; Brief neu nach Bereich-2-Goldmuster (bewerbung.md Regel 3 + Stimme-Referenz).
// Quelle: stellenanzeigen.de/job/detail/SDE-110710 (aktiv, 21.07.–20.09.2026)
// Run: node generate-bewerbung.mjs companies/kzvk-koeln-it-support.mjs

export default {
  slug: 'kzvk-koeln-it-support',
  date: '22.07.2026',
  language: 'de',

  recipient: [
    'Kirchliche Zusatzversorgungskasse des Verbandes der Diözesen Deutschlands',
    'Frau Carmen Wagner',
    'Am Hildeboldplatz 2–18',
    '50672 Köln',
  ],

  subject: 'Bewerbung als Mitarbeiter IT-Support',

  // Recruiter-Framework (Juli 2026): Narrativ / Passung / Mission / Verbindung
  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Störungen aufnehmen, im Ticketsystem dokumentieren, lösen oder qualifiziert weitergeben',
      'Entwicklungsseite: eigene Automatisierungen mit Python und n8n',
    ],
  },
  company: {
    mission: 'Sichere, gemeinwohlorientierte Arbeitgeberin mitten in Köln, die mit betrieblicher Altersversorgung für ihre Versicherten sorgt.',
    verbindung: 'Damit die Mitarbeitenden der KZVK verlässlich arbeiten können, muss die Technik im Alltag einfach funktionieren — dafür ist mein Support da.',
  },
  jobKeywords: ['Windows 11', 'Citrix', 'Jira', 'Anwendersupport', 'Systemintegration', 'Erstkontakt', 'Hardware', 'Dokumentation'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Kein cv.profil (User 22.07.2026): Schwerpunkte-Zeile aus competencies, wie mgm/reboot.
    // Der frühere Profil-Text enthielt zudem den unbelegten Imaging-Claim.
    // Einzeiligkeits-Regel 22.07.2026: Schwerpunkte-Zeile ≤100 Zeichen → max 3 kurze Tags.
    competencies: [
      '1st Level Anwendersupport',
      'Windows 11 & Hardware',
      'Ticketbearbeitung & Eskalation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV (feedback_cv_fixed_experience)
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Hardware-Einrichtung & Imaging, Softwareinstallation, Drucker & Peripherie, Remote-Support' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Eskalation an Second Level, Anwenderschulung' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Active Directory (Grundlagen), Virtualisierung (Grundlagen), Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Wagner,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Mitarbeiter im IT Support. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Anwendersupport bei einer gemeinwohlorientierten Arbeitgeberin mitten in Köln passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern in Präsenz oder remote schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt im Erstkontakt gelöst oder qualifiziert an den Second Level weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich. Für Ihre Mitarbeitenden heißt das: Anfragen werden zügig und nachvollziehbar bearbeitet, und niemand bleibt mit seinem Problem allein.`,

      `Auch Hardware gehört für mich dazu: Ich installiere und konfiguriere Windows, richte Drucker und weitere Peripherie ein und bereite Geräte für die Auslieferung vor. Mit Citrix habe ich noch nicht gearbeitet, das sage ich offen, in neue Umgebungen arbeite ich mich erfahrungsgemäß zügig ein. Was mich von vielen im First Level unterscheidet, ist meine Entwicklungsseite: In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch erkenne ich wiederkehrende Muster in Supportanfragen und kann die Fachbereiche bei der Einführung neuer Softwarelösungen technisch unterstützen.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Menschen schnell und freundlich bekommen, was sie brauchen, auch wenn viel los war. Diese Ruhe bringe ich in Ihren Support mit. Einsteigen kann ich ab sofort, meine Gehaltsvorstellung liegt bei 40.000 Euro brutto im Jahr.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
