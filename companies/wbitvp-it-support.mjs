// Warner Bros. International Television Production Deutschland GmbH — IT-Support (m/w/d), Köln
// Adresse: Niehler Str. 104, 50733 Köln (HRB 65452 Köln; verifiziert via Northdata +
// wbitvpgermany.com/disclaimer, 22.07.2026). KEIN namentl. Ansprechpartner -> Damen und Herren.
// Quelle: wbitvpgermany.com/vacancy/421/itsupport-mwd ("ab sofort in Köln", Frist 31.01.2027);
// WBD-Careers-Link war abgelaufen, eigene Karriereseite AKTIV.
// Rolle: 1st/2nd Level für Mitarbeitende + Produktionsteams, Benutzerkonten/Zugänge,
// Netzwerk/Infrastruktur, Arbeitsplatz-Setup/Umzüge/Hardware, IT-Projekte.
// Anforderungen: IT-Ausbildung ODER gleichwertige Praxis (= weich, FiSi+GIS tragen),
// sehr gute M365-Kenntnisse (GAP: nur Anwender -> DPS-Muster Einarbeitung), Windows/macOS
// (macOS GAP -> offen), AD-Administration (GAP -> Konzepte aus Ausbildung + Einarbeitung),
// Deutsch fließend (C1 = Stärke), Englisch solide (B1 -> nicht überzeichnet, thinkGROUP-Satz
// "Englisch nutze ich im Arbeitskontext sicher" + cv.languages-Override).
// BEREICH 2 (IT-Support, Goldmuster-Skelett). Score 4.0/5.
// FAKTENREGEL: alle Claims aus cv.md/freigegebenen Briefen; keine Gap-Negation bei Formalem.
// Run: node generate-bewerbung.mjs companies/wbitvp-it-support.mjs

export default {
  slug: 'wbitvp-it-support',
  date: '22.07.2026',
  language: 'de',

  recipient: [
    'Warner Bros. International Television Production Deutschland GmbH',
    'Niehler Str. 104',
    '50733 Köln',
  ],

  subject: 'Bewerbung als IT-Support',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Störungen aufnehmen, im Ticketsystem dokumentieren, lösen oder qualifiziert weitergeben',
      'Entwicklungsseite: eigene Automatisierungen mit Python und n8n',
    ],
  },
  company: {
    mission: 'Produktionsunternehmen in Köln, das Formate für Fernsehen und Streaming in Deutschland, Österreich und der Schweiz entwickelt und produziert.',
    verbindung: 'In einem Produktionsbetrieb muss die Technik sofort laufen, damit gedreht werden kann; mein Support hält den Teams den Rücken frei.',
  },
  jobKeywords: ['Microsoft 365', 'Active Directory', 'Windows', 'macOS', 'Anwendersupport', 'Benutzerkonten', 'Hardware', 'Netzwerk'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel 22.07.2026: Schwerpunkte-Zeile ≤100 Zeichen → max 3 kurze Tags.
    competencies: [
      '1st Level Anwendersupport',
      'Windows & Client-Hardware',
      'Ticketbearbeitung & Eskalation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Hardware-Einrichtung, Softwareinstallation, Drucker & Peripherie, Remote-Support' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Eskalation an Second Level, Anwenderschulung' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Active Directory (Konzepte aus der Ausbildung, Einarbeitung), Linux' },
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
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle im IT Support in Köln. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Anwendersupport bei einem Produktionsunternehmen für Fernsehen und Streaming in Köln passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert an den Second Level weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich, Englisch nutze ich im Arbeitskontext sicher. Auch Arbeitsplätze einzurichten und Hardware bereitzustellen kenne ich aus meiner Ausbildung.`,

      `Die Verwaltung von Benutzerkonten in Microsoft 365 und Active Directory kenne ich bisher als Anwender und aus den Konzepten meiner Ausbildung, macOS habe ich noch nicht im Arbeitsalltag genutzt. Das sage ich offen. In beides arbeite ich mich zügig ein. Was mich von vielen im First Level unterscheidet, ist meine Entwicklungsseite: In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch erkenne ich wiederkehrende Muster in Anfragen und kann Abläufe vereinfachen, bevor sie zum Dauerthema werden.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass der Betrieb läuft, auch wenn es hektisch wird. Diese Ruhe bringe ich in Ihren Support mit, auch wenn eine Produktion sofort weiterdrehen muss. Ich wohne in Bonn, Köln ist für mich schnell erreichbar, ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
