// Xecuro GmbH (Bundesdruckerei-Gruppe) — IT Support Specialist - Service Desk (m/w/d), BONN
// WIEDERVORLAGE von Tracker #7 (09.06.2026, Score 3.2, Paket nie versandt, alte Dateien
// gelöscht) -> Stelle erneut auf Stepstone 14196580, FRIST 25.07.2026! Paket am 23.07.
// nach Juli-Regeln NEU gebaut (Gold-Voice, Reisegesucht-CV, Einzeiligkeit). KEIN neuer
// Tracker-Eintrag — #7 wird aktualisiert (Regel: company+role existiert).
// Juristisch: Xecuro GmbH, Oranienstraße 91, 10969 Berlin (HRB 236008 Charlottenburg;
// webvalid + xecuro.de/legal-notice verifiziert 23.07.2026). Standort Bonn = Einsatzort,
// keine verifizierte Bonner Postadresse -> Empfänger = HQ Berlin. Kein namentl. Kontakt.
// Bewerbung über Portal (softgarden/Stepstone). Unbefristet, Vollzeit, Früh-/Spätschicht.
// Firma: baut/betreibt Systeme für die Verschlusssachen-Kommunikation des Bundes
// (verschlüsselte Telefonie/Video, sicherer Datenaustausch Ministerien/Behörden).
// BEREICH 2 (Goldmuster). Score 3.6/5 (rekalibriert von 3.2): FiSi WÖRTLICH als
// Beispiel-Ausbildung + Bonn + unbefristet + "Berufserfahrung wünschenswert" = weich;
// GAPS ehrlich: ITIL-Erfahrung -> "noch nicht, das sage ich offen, Foundation hole ich
// kurzfristig nach" (Report-007-Linie); Schichtdienst -> Bereitschaft (Café-Schichten);
// IT-Sicherheit -> eigene Projekte (Verschlüsselung, Freigabeprozesse) als Brücke.
// RISIKO unverändert (nur Tracker, NICHT im Brief): Sicherheitsüberprüfung SÜG im
// VS-Umfeld als türkischer Staatsbürger — vor Vertragsphase klären.
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/xecuro-service-desk.mjs

export default {
  slug: 'xecuro-service-desk',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'Xecuro GmbH',
    'Oranienstraße 91',
    '10969 Berlin',
  ],

  subject: 'Bewerbung als IT Support Specialist Service Desk, Standort Bonn',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Anfragen aufnehmen, im Ticketsystem qualifizieren, dokumentieren, lösen oder weitergeben',
      'Eigene Projekte mit Verschlüsselung und Freigabeprozessen als Bezug zur Sicherheit',
    ],
  },
  company: {
    mission: 'Technologieunternehmen des Bundes, das sichere Systeme für die Verschlusssachen Kommunikation zwischen Ministerien und Behörden aufbaut und betreibt.',
    verbindung: 'Wo sensible Kommunikation läuft, muss der Service Desk ruhig, präzise und nachvollziehbar arbeiten; genau diese Arbeitsweise bringe ich mit.',
  },
  jobKeywords: ['Ticket', 'Dokumentation', 'Service Desk', 'Windows', 'Hardware', 'Netzwerk', 'Sicherheit', 'Qualifizierung'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      '1st Level Anwendersupport',
      'Service Desk & Ticketbearbeitung',
      'Windows & Hardware',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Hardware-Einrichtung, Drucker & Peripherie, Softwareinstallation' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Qualifizierung & Eskalation an Second Level, Anwenderschulung' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Client-Server-Grundlagen, IT-Sicherheit (Grundlagen: Verschlüsselung, Zugriffsrechte), Linux' },
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
      `ich bewerbe mich auf Ihre Stelle als IT Support Specialist im Service Desk am Standort Bonn. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Service Desk bei einem Technologieunternehmen des Bundes in Bonn passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern am Telefon schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich. Hardware einrichten und austauschen kenne ich aus Ausbildung und Praxis, dazu Grundlagen in Netzwerk und Client Server Umgebungen. Für Ihre Kunden heißt das: Von der Aufnahme über die Qualifizierung bis zum Abschluss bleibt jedes Ticket nachvollziehbar.`,

      `Erfahrung nach ITIL bringe ich noch nicht mit, das sage ich offen. Strukturierte Prozessarbeit und saubere Dokumentation gehören aber längst zu meinem Alltag, die ITIL Foundation hole ich kurzfristig nach. Was mich zusätzlich trägt, ist meine Entwicklungsseite: In eigenen Projekten arbeite ich mit Verschlüsselung und Freigabeprozessen. Dadurch weiß ich, wie viel Sorgfalt Sicherheit im Umgang mit Daten verlangt. Die Verschlusssachen Kommunikation des Bundes reizt mich deshalb besonders.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Kunden schnell und freundlich bekommen, was sie brauchen. Diese Ruhe bringe ich mit, auch in frühen und späten Schichten. Ich wohne in Bonn, der Standort liegt für mich ideal. Ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
