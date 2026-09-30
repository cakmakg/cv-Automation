// MDS Medical EDV Services GmbH — IT-First Level Support, Windhagen (Klarenplatz 11,
// 53578 Windhagen; Adresse aus der Anzeige). Vertriebs-/Servicepartner für CGM ALBIS
// (Arztinformationssystem, CompuGroup Medical), Kunden = Arztpraxen. Vollzeit, Homeoffice mgl.
// ⚠ LIVENESS: Stepstone validThrough = 23.07.2026 08:13 (heute!) — Anzeige läuft ggf. aus,
// Bewerbung aber PER E-MAIL: t.roessner@mds-medical.de + d.dempewulf@mds-medical.de
// (2 Kontakte ohne Vornamen/Anrede -> "Sehr geehrte Damen und Herren").
// Quelle: stepstone.de 12813421 (JSON-LD, 23.07.2026).
// BEREICH 2 (Goldmuster). Score 4.0/5: IT-Ausbildung oder vergleichbar = FiSi; First-Level-
// Kern (Supportanfragen, Fehlerdiagnose, Doku, Schulung) = GIS; Installation in Arztpraxen =
// akkodis-Formulierungen + FÜHRERSCHEIN KLASSE B (gefordert!) = vorhanden (user_fuehrerschein);
// KEIN Englisch. GAP ehrlich: "sehr gute Kenntnisse Windows Server" -> Grundlagen aus
// Ausbildung + Einarbeitung ("das sage ich offen", DPS-Muster); Medizinbranche -> Sensibilität
// über Café/Support, Fachsysteme als Einarbeitung. Windows 11 NUR im CV-Skill (Brief generisch
// "Mit Windows", feedback-anschreiben-fakten-nur-belegt).
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/mds-medical-first-level.mjs

export default {
  slug: 'mds-medical-first-level',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'MDS Medical EDV Services GmbH',
    'Klarenplatz 11',
    '53578 Windhagen',
  ],

  subject: 'Bewerbung als IT-First Level Support',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Supportanfragen aufnehmen, im Ticketsystem dokumentieren, lösen oder qualifiziert weitergeben',
      'Führerschein Klasse B für Installation und Einsätze in den Arztpraxen der Region',
    ],
  },
  company: {
    mission: 'Vertriebs und Servicepartner für CGM ALBIS, der Arztpraxen mit ihrem Informationssystem im laufenden Betrieb hält.',
    verbindung: 'Praxisteams brauchen Technik, die einfach läuft, und Ansprechpartner, die ruhig und verständlich erklären; genau diese Rolle liegt mir.',
  },
  jobKeywords: ['Support', 'Windows', 'Installation', 'Dokumentation', 'Schulung', 'Ticket', 'Hardware', 'Führerschein'],

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
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Eskalation an Second Level, Anwenderschulung' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Windows Server (Grundlagen, Einarbeitung), Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
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
      `ich bewerbe mich auf Ihre Stelle im IT First Level Support. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der First Level Support für Arztpraxen mit dem Informationssystem ALBIS passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern am Telefon und vor Ort schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Supportanfragen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich, die Installation und Einrichtung von Hardware kenne ich aus Ausbildung und Praxis. Einen Führerschein der Klasse B habe ich, Einsätze in den Praxen der Region sind für mich gut machbar.`,

      `Mit Windows Server Systemen habe ich bisher Grundlagen aus meiner Ausbildung, in die tägliche Administration arbeite ich mich zügig ein. Das sage ich offen. Dokumentation und Schulung liegen mir: Ich erkläre technische Schritte so, dass sie ohne IT Hintergrund verständlich sind, und halte sie schriftlich fest. Zusätzlich baue ich in meiner Freizeit eigene Anwendungen, dadurch verstehe ich, wie ein Informationssystem im Hintergrund arbeitet.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Menschen schnell und freundlich bekommen, was sie brauchen, auch wenn viel los war. Diese Ruhe hilft mir im Umgang mit Praxisteams, bei denen der Betrieb weiterlaufen muss. Ich wohne in Bonn, Windhagen ist für mich gut erreichbar. Ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
