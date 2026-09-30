// BWI GmbH — Senior IT Service Techniker Litauen (m/w/d), Stellen-ID 59893
// Long-Term-Assignment 24 Monate VILNIUS (nach Einarbeitung in DE), Anstellung an
// BWI-Standort bundesweit (Bonn möglich), unbefristet, Vollzeit, 44.100–61.700 €.
// Juristisch: BWI GmbH, Auf dem Steinbüchel 22, 53340 Meckenheim (HRB 15251 Bonn;
// bwi.de/impressum verifiziert 23.07.2026). Kein namentl. Kontakt (Recruiting-Team,
// 02225 988 25000) -> "Sehr geehrte Damen und Herren"; Stellen-ID im Betreff.
// Quelle: stepstone.de 14227296 (JSON-LD, aktiv bis 01.08.2026).
// BEREICH 2 (Goldmuster). Score 2.0/5 — BEWUSSTER STRETCH-BUILD (User 23.07.2026
// "yinede hazirla" entgegen klarer SKIP-Empfehlung). ECHTE BLOCKER, NICHT übertüncht,
// aber auch NICHT negiert (Gap-Negations-Verbot):
// (1) "Etwa 3 Jahre Berufserfahrung Field Service" (Senior) -> NICHT thematisiert,
//     eigener Weg positiv (FiSi + GIS + Praxis); (2) "fließende Englischkenntnisse" ->
//     KEIN Overclaim, RADIUZE-Formel "im technischen Kontext sicher, entwickle gezielt
//     weiter" + cv.languages transparent; (3) Bundeswehr/VS -> Sicherheitsüberprüfung
//     praktisch sicher, als türk. Staatsbürger Hürde (NUR Tracker, nicht im Brief);
// (4) ITIL/DGUV nur "von Vorteil" -> ITIL ehrlich offen (Xecuro-Formel).
// POSITIV: Führerschein Klasse B VORHANDEN (User bestätigt 23.07.2026) -> CV + Brief;
// Entsendungs-Bereitschaft ausdrücklich (Kern der Stelle); FiSi wörtlich; Hardware/
// Ticket/Doku = GIS + akkodis-Formulierungen.
// Regeln: Fakten nur belegt, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/bwi-service-techniker-litauen.mjs

export default {
  slug: 'bwi-service-techniker-litauen',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'BWI GmbH',
    'Auf dem Steinbüchel 22',
    '53340 Meckenheim',
  ],

  subject: 'Bewerbung als Senior IT Service Techniker Litauen, Stellen-ID 59893',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Geräte und Software installieren, warten, Störungen im Ticketsystem dokumentieren',
      'Ausdrückliche Bereitschaft zur Entsendung nach Vilnius, Führerschein Klasse B',
    ],
  },
  company: {
    mission: 'Digitalisierungspartner der Bundeswehr, der den sicheren IT Betrieb im Inland und Ausland gewährleistet.',
    verbindung: 'Ein Auslandsstandort funktioniert nur mit Technikern vor Ort, die ruhig arbeiten und sauber dokumentieren; genau dafür bewerbe ich mich.',
  },
  jobKeywords: ['Ticket', 'Hardware', 'Software', 'Netzwerk', 'Dokumentation', 'Wissensdatenbank', 'Installation', 'Windows'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      '1st Level Anwendersupport',
      'Windows & Hardware',
      'Ticketbearbeitung & Eskalation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Hardware-Einrichtung, Drucker & Peripherie, Softwareinstallation' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Wissensdatenbank-Pflege, Eskalation an Second Level' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Client-Server-Grundlagen, Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (B1, sichere Verständigung, in aktiver Weiterentwicklung) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Senior IT Service Techniker für Litauen. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Einsatz für den sicheren IT Betrieb der Bundeswehr im Ausland passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern vor Ort schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Installation, Inbetriebnahme und Wartung von Hardware und Software kenne ich aus Ausbildung und Praxis. Ich installiere und konfiguriere Windows und richte Drucker und weitere Peripherie ein, dazu Grundlagen in Netzwerk und Serverumgebungen. Für die Anwender heißt das: Störungen werden zügig und nachvollziehbar gelöst, dadurch bleiben die vereinbarten Service Level einhaltbar.`,

      `Die Entsendung nach Vilnius für 24 Monate reizt mich, genau dafür bewerbe ich mich. Einen Führerschein der Klasse B habe ich. Erfahrung nach ITIL bringe ich noch nicht mit, das sage ich offen. Strukturierte Prozessarbeit und saubere Dokumentation in der Wissensdatenbank gehören aber zu meinem Alltag. Englisch nutze ich im technischen Kontext sicher und entwickle es gerade gezielt weiter.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass der Betrieb läuft, auch wenn viel gleichzeitig passiert. Diese Ruhe bringe ich mit, auch in Bereitschaftsdiensten. Die Einarbeitung in Deutschland kann ab sofort beginnen.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
