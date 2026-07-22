// Hottgenroth Software AG — Mitarbeiter für den Software-Support (m/w/d)
// Standorte: Köln (gewählt, Von-Hünefeld-Str. 3) + Flammersfeld/Weyerbusch. Vollzeit.
// Juristisch: Hottgenroth Software AG, Von-Hünefeld-Straße 3, 50829 Köln (HRB 108966 Köln,
// verifiziert via hottgenroth.de/Impressum, 22.07.2026). Softwarehaus für Energieberatung/
// TGA/Gebäudetechnik (eigene Programme, u.a. ETU/Hottgenroth Akademie).
// Bewerbung per E-Mail: bewerbung@hottgenroth.de (Karriere-Kontakte: Palacz/Gerhard/Klapper,
// kein einzelner Ansprechpartner in der Anzeige) -> "Sehr geehrte Damen und Herren".
// Quelle: jobware.de 2021872225 (Anzeigentext vom User eingefügt, 22.07.2026).
// BEREICH 2 (Software-/IT-Support, Goldmuster). Score 4.5/5: Anforderungen weich
// (kaufm. ODER techn. Ausbildung; "idealerweise erste Erfahrung"; sehr gute Deutschkenntnisse;
// KEIN Englisch gefordert); Kern-Task "wiederkehrende Themen an die Software-Entwicklung
// weiterleiten" = Entwicklungsseite-Differenzierer (2B-Advice-Präzedenz).
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit (comps ≤100, Bullets ≤95),
// Tricolon-Budget (Gold-P1 = 1, Rest 0).
// Run: node generate-bewerbung.mjs companies/hottgenroth-software-support.mjs

export default {
  slug: 'hottgenroth-software-support',
  date: '22.07.2026',
  language: 'de',

  recipient: [
    'Hottgenroth Software AG',
    'Von-Hünefeld-Straße 3',
    '50829 Köln',
  ],

  subject: 'Bewerbung als Mitarbeiter für den Software-Support',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Kundenanfragen am Telefon aufnehmen, im Ticketsystem dokumentieren, lösen oder weitergeben',
      'Entwicklungsseite: eigene Webanwendungen, reproduzierbare Fälle für die Entwicklung',
    ],
  },
  company: {
    mission: 'Kölner Softwarehaus, das eigene Programme für Energieberatung und Gebäudetechnik entwickelt und seine Anwender direkt betreut.',
    verbindung: 'Support direkt beim Hersteller lebt davon, dass Anfragen sauber geklärt und wiederkehrende Themen an die Entwicklung gehen; genau das kann ich aus beiden Welten bedienen.',
  },
  jobKeywords: ['Software', 'Support', 'Ticket', 'Remote', 'Dokumentation', 'Anwendersupport', 'Windows', 'Kundenanfragen'],

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
      { category: 'Support & Clients', items: 'Windows 11, Softwareinstallation, Drucker & Peripherie, Remote-Support, Anwenderschulung' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Eskalation an Second Level, Kundenkontakt-Dokumentation' },
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
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Mitarbeiter für den Software Support in Köln. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Anwendersupport für die eigene Software eines Kölner Softwarehauses für Energieberatung und Gebäudetechnik passt genau zu dem, was ich kann und machen möchte.`,

      `Kundenanfragen am Telefon und per Remote Zugriff zu klären, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich. Für Ihre Kunden heißt das: Jeder Kontakt wird nachvollziehbar festgehalten, und niemand muss sein Anliegen zweimal erklären.`,

      `Was mich von vielen im Support unterscheidet, ist meine Entwicklungsseite. Ich baue selbst Webanwendungen mit React und Node. Dadurch kann ich zuverlässig trennen, ob es eine Bedienungsfrage oder ein Fehler in der Software ist. Ihre Entwicklung bekommt von mir einen Fall mit sauberer Dokumentation, der reproduzierbar beschrieben ist. In die Funktionalität Ihrer Programme arbeite ich mich zügig ein.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Kunden schnell und freundlich bekommen, was sie brauchen. Diesen Serviceanspruch bringe ich in Ihren Support mit. Ich wohne in Bonn, Köln ist für mich gut erreichbar, ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
