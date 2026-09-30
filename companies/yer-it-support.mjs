// YER Deutschland GmbH — IT Support Mitarbeiter (m/w/d), Personaldienstleister (YER Group,
// Mobility/Tech/Energy, "Einsatz bei Kundenunternehmen oder internes YER-Team").
// EINSATZORT + KUNDE IN DER ANZEIGE NICHT GENANNT (mamgo-Aggregator-Posting, JD vom User
// gepastet 23.07.2026, mamgo-ID 2543612) -> Brief ortsneutral, Wohnort Bonn genannt.
// Adresse: Birketweg 21, 80639 München (HRB 300341 München, Northdata/Creditreform
// verifiziert 23.07.2026). KEIN namentl. Ansprechpartner -> Damen und Herren.
// Anforderungen: IT-Ausbildung z. B. Fachinformatiker (= WÖRTLICH erfüllt); 1st/2nd Level
// nur "von Vorteil" (GIS ✓); Windows + Office ✓; Netzwerktechnik LAN/WAN/VPN
// GRUNDVERSTÄNDNIS = FAW; Ticketsysteme + Remote-Support ✓ (GIS); Deutsch ✓ C1;
// Englisch "sicher" -> etablierter Satz, kein Overclaim. GAP (DPS-Muster): AD/M365
// Benutzer-/Rechteverwaltung nur Anwender + Ausbildungskonzepte.
// P1-REGEL 23.07: rein faktisch, KEINE Rückkehr-Begründung, keine "reizt mich"-Sätze.
// BEREICH 2 (IT-Support, Goldmuster-Skelett). Score 4.0/5 (Vorbehalt: Einsatzort/Kunde offen).
// Run: node generate-bewerbung.mjs companies/yer-it-support.mjs

export default {
  slug: 'yer-it-support',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'YER Deutschland GmbH',
    'Birketweg 21',
    '80639 München',
  ],

  subject: 'Bewerbung als IT Support Mitarbeiter',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Störungen aufnehmen, im Ticketsystem dokumentieren, lösen oder strukturiert eskalieren',
      'Entwicklungsseite: eigene Automatisierungen mit Python und n8n',
    ],
  },
  company: {
    mission: 'Personaldienstleister der YER Group, der Talente bundesweit in den Bereichen Mobility, Tech und Energy bei Kundenunternehmen oder im internen Team einsetzt.',
    verbindung: 'Ein Support, der Anfragen ruhig aufnimmt und sauber dokumentiert, hält dem jeweiligen Kundenteam den Rücken frei; genau das ist meine Arbeitsweise.',
  },
  jobKeywords: ['IT-Support', 'Ticketsystem', 'Active Directory', 'Microsoft 365', 'Windows', 'Netzwerk', 'Remote-Support', 'Wissensdatenbank'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    competencies: [
      'IT-Support (1st & 2nd Level)',
      'Windows & Netzwerk',
      'Ticketbearbeitung & Doku',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Hardware-Einrichtung, Drucker & Peripherie, Mobile Endgeräte, Remote-Support' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticketsysteme & Dokumentation, Wissensdatenbank-Pflege, Eskalation an 2nd/3rd Level, Anwenderschulung' },
      { category: 'Netzwerk & Systeme', items: 'LAN/WAN, VPN (Grundlagen), DNS, DHCP, Active Directory (Konzepte, Einarbeitung), Linux' },
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
      `ich bewerbe mich auf Ihre Stelle als IT Support Mitarbeiter. Ich bin gelernter Fachinformatiker für Systemintegration mit Praxis im First Level Support. Zurzeit arbeite ich in einem Reisebüro in Bonn im Bereich Frontend und Marketing.`,

      `Anwendern schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Rund 70 Prozent der Störungen konnte ich direkt im First Level lösen, komplexere Fälle habe ich strukturiert eskaliert. Arbeitsplätze einrichten, Drucker und mobile Endgeräte betreuen und die Wissensdatenbank pflegen kenne ich aus Ausbildung und Praktikum. Mit Windows und den Microsoft Office Programmen arbeite ich täglich, Netzwerkgrundlagen wie LAN und VPN bringe ich aus meiner Ausbildung mit.`,

      `Die Verwaltung von Benutzerkonten in Active Directory und Microsoft 365 kenne ich bisher als Anwender und aus den Konzepten meiner Ausbildung. Das sage ich offen. Hier arbeite ich mich zügig ein. Was mich von vielen im First Level unterscheidet, ist meine Entwicklungsseite: In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch erkenne ich wiederkehrende Muster in Anfragen und kann Abläufe vereinfachen, bevor sie zum Dauerthema werden. Englisch nutze ich im Arbeitskontext sicher.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass der Betrieb läuft, auch wenn es hektisch wird. Ob der Einsatz bei einem Kundenunternehmen oder im internen Team von YER erfolgt, ich stelle mich schnell auf neue Umgebungen ein. Ich wohne in Bonn und bin ab sofort verfügbar.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
