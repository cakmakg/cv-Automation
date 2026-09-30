// telacc GmbH — IT-Techniker*in Onsite mit Reisebereitschaft (m/w/d), Köln / Luxemburg
// Eigentümergeführter Service-Dienstleister (gegr. 2001, 70 MA), STÜTZPUNKT KÖLN,
// Reisen nach Luxemburg nach Absprache WÄHREND der Dienstzeiten (+ optional DE-Einsätze).
// Juristisch (aus Anzeige): telacc GmbH, Pfaffendorfstraße 5c, 83454 Anger.
// Kein namentl. Kontakt -> "Sehr geehrte Damen und Herren". Kein Gehalt/Eintritt gefordert.
// Quelle: stepstone.de 14038843 (JSON-LD, aktiv bis 20.08.2026).
// BEREICH 2 (Goldmuster). Score 4.3/5: techn. Ausbildung = FiSi; Ticketsystem/IT-Support-
// Erfahrung = GIS; Windows 10/11 + MS Office/365/Teams/OneDrive = ANWENDER-Level (kein
// Admin-Gap!); Netzwerk nur "von Vorteil" = FAW-Grundlagen; FÜHRERSCHEIN B gefordert =
// VORHANDEN; Aufgaben (PC-Arbeitsplätze & Peripherie installieren/warten, Ticket + Knowledge
// DataBase Doku, Clientlandschaft) = akkodis/CONET-Formulierungen 1:1. AUTHENTISCHER WINKEL:
// Reisebereitschaft = er arbeitet aktuell in der Reisebranche, gern unterwegs (belegt!).
// Weicher Punkt: Englisch "gut in Wort und Schrift" -> thinkGROUP-Satz + languages-Override.
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/telacc-onsite-techniker.mjs

export default {
  slug: 'telacc-onsite-techniker',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'telacc GmbH',
    'Pfaffendorfstraße 5c',
    '83454 Anger',
  ],

  subject: 'Bewerbung als IT-Techniker Onsite mit Reisebereitschaft, Köln / Luxemburg',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Tickets aufnehmen, dokumentieren, PC Arbeitsplätze und Peripherie installieren',
      'Reisebereitschaft aus der Reisebranche plus Führerschein Klasse B',
    ],
  },
  company: {
    mission: 'Eigentümergeführter IT Dienstleister, der internationale Kunden vom Stützpunkt Köln aus betreut.',
    verbindung: 'Onsite Einsätze bei internationalen Kunden brauchen Techniker, die gern unterwegs sind und vor Ort ruhig arbeiten; beides bringe ich mit.',
  },
  jobKeywords: ['Ticket', 'Windows', 'Microsoft 365', 'Installation', 'Dokumentation', 'Netzwerk', 'Führerschein', 'Hardware'],

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
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Linux' },
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
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als IT Techniker Onsite mit Reisebereitschaft. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Onsite Einsatz für internationale Kunden mit Stützpunkt Köln passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern vor Ort schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Mit Windows, den Microsoft 365 Anwendungen und Teams arbeite ich täglich, Englisch nutze ich im Arbeitskontext sicher. Hardware wie PC Arbeitsplätze und Peripheriegeräte installiere ich und richte sie ein, Grundlagen im Netzwerkbereich bringe ich aus meiner Ausbildung mit.`,

      `Die Reisebereitschaft nach Luxemburg bringe ich gern mit. Ich komme aus der Reisebranche und bin ohnehin gern unterwegs, einen Führerschein der Klasse B habe ich. Was mich von vielen im Support unterscheidet, ist meine Entwicklungsseite: In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch erkenne ich wiederkehrende Muster in Anfragen und halte die Dokumentation in der Knowledge Base so, dass das Team direkt damit weiterarbeiten kann.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Kunden schnell und freundlich bekommen, was sie brauchen. Diese Ruhe bringe ich zu Ihren Kunden mit. Ich wohne in Bonn, der Stützpunkt Köln liegt für mich gut. Ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
