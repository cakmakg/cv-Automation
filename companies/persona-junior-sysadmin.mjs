// persona service AG & Co. KG, Niederlassung Bonn — Junior IT-Systemadministrator (m/w/d),
// DIREKTVERMITTLUNG für Kunden aus der Medienbranche in Meckenheim.
// Adresse: Friedrichstr. 45, 53111 Bonn (persona.de/niederlassung/bonn verifiziert, 23.07.2026).
// Ansprechpartnerin: Frau Katharina Konrad (katharina.konrad@persona.de), Niederlassung Bonn.
// Quelle: linkedin.com/jobs/view/4443168388 (aktiv, 23.07.2026).
// Rolle: interner IT-Support 1st/2nd Level + Doku, Windows-Server/AD/M365 Admin Center/
// Exchange Online (Benutzer-, Rechte-, Postfachverwaltung), Hyper-V-VMs, Hardware,
// WLAN mit UniFi Controller, Verkabelung/Patchpanels.
// Anforderungen: IT-Ausbildung z. B. FiSi (= WÖRTLICH erfüllt), Admin-Kenntnisse (GAP:
// Anwender + Ausbildungskonzepte -> DPS-Muster Einarbeitung), Netzwerk/UniFi (FAW
// IT-NETZWERKE trägt Grundlagen, UniFi offen), Linux Grundkenntnisse (vorhanden),
// verhandlungssicher Deutsch (C1), Arbeitserlaubnis + fester Wohnsitz (deutsche
// Staatsangehörigkeit + Bonn). KEIN Englisch gefordert.
// BEREICH 2 (IT-Support/Admin, Goldmuster-Skelett). Score 4.0/5.
// FAKTENREGEL: alle Claims aus cv.md/freigegebenen Briefen; keine Gap-Negation bei Formalem.
// Run: node generate-bewerbung.mjs companies/persona-junior-sysadmin.mjs

export default {
  slug: 'persona-junior-sysadmin',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'persona service AG & Co. KG',
    'Niederlassung Bonn',
    'Friedrichstr. 45',
    '53111 Bonn',
  ],

  subject: 'Bewerbung als Junior IT-Systemadministrator',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt, sauber dokumentiert und in Administrationsaufgaben hineinwächst.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Netzwerkgrundlagen aus der Ausbildung: Switches, Access Points, Patchfeld, Verkabelung',
      'Entwicklungsseite: eigene Automatisierungen mit Python und n8n',
    ],
  },
  company: {
    mission: 'Personaldienstleister, der für einen Kunden aus der Medienbranche in Meckenheim einen Junior IT-Systemadministrator in Direktvermittlung sucht.',
    verbindung: 'In einem Medienunternehmen muss die Technik im Hintergrund einfach laufen; mein Support und meine Dokumentation halten den Teams den Rücken frei.',
  },
  // Hyper-V + UniFi Controller bewusst NICHT im CV (kein Overclaim) → Warning akzeptiert,
  // beide werden im Brief offen als Einarbeitung adressiert.
  jobKeywords: ['Windows Server', 'Active Directory', 'Microsoft 365', 'Exchange Online', 'Hyper-V', 'UniFi Controller', 'IT-Support', 'Netzwerk', 'Dokumentation'],

  cv: {
    tagline: 'IT-Administration · Systemintegration',
    // Einzeiligkeits-Regel 22.07.2026: Schwerpunkte-Zeile ≤100 Zeichen → max 3 kurze Tags.
    competencies: [
      'IT-Support (1st & 2nd Level)',
      'Windows & Netzwerk',
      'Technische Dokumentation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 & Exchange Online (Anwender), Hardware-Einrichtung, Drucker & Peripherie' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Eskalation an Second Level, technische Dokumentation' },
      { category: 'Netzwerk & Systeme', items: 'DNS, DHCP, Switches & Access Points, Netzwerkverkabelung & Patchfelder (Ausbildung), Windows Server & Active Directory (Konzepte, Einarbeitung), Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Konrad,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Junior IT Systemadministrator bei Ihrem Kunden aus der Medienbranche in Meckenheim. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Die Mischung aus Support und Administration in dieser Stelle passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Aus meiner Ausbildung kenne ich die Netzwerkseite: Switches und Access Points konfigurieren und Anschlüsse am Patchfeld auflegen. Auch Arbeitsplätze einzurichten und Hardware bereitzustellen ist mir vertraut, Grundkenntnisse in Linux bringe ich mit.`,

      `Die Administration von Windows Servern und Active Directory sowie das Microsoft 365 Admin Center und Exchange Online kenne ich bisher als Anwender und aus den Konzepten meiner Ausbildung. Virtuelle Maschinen und den UniFi Controller habe ich noch nicht im Arbeitsalltag betreut. Das sage ich offen. In diese Aufgaben arbeite ich mich zügig ein. Was mich von vielen Bewerbern im Junior Bereich unterscheidet, ist meine Entwicklungsseite: In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch erkenne ich wiederkehrende Muster in Anfragen und kann Abläufe vereinfachen, bevor sie zum Dauerthema werden.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass der Betrieb läuft, auch wenn es hektisch wird. Diese Ruhe bringe ich in den Arbeitsalltag bei Ihrem Kunden mit. Ich wohne in Bonn, Meckenheim erreiche ich gut, ein Führerschein der Klasse B ist vorhanden. Ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
