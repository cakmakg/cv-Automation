// Majori GmbH (IT-Personalvermittlung Berlin) — IT Support (m/w/d) Bundesbehörde BONN,
// 40.000–55.000 €, unbefristete Festanstellung bei etabliertem IT-Dienstleister (Endkunde =
// Bundesbehörde, vollständig vor Ort Bonn), SÜ2 (vom Arbeitgeber initiiert/finanziert).
// DEUTSCHE STAATSANGEHÖRIGKEIT zwingend -> VORHANDEN (User 23.07.2026, user_staatsangehoerigkeit;
// Juni-Annahme "türk. Staatsbürger" war falsch) -> kein Blocker, Satz im Brief.
// Juristisch: Majori GmbH, Karl-Liebknecht-Straße 5, 10178 Berlin (HRB 220889 B Charlottenburg;
// majori.de/impressum + Northdata verifiziert 23.07.2026).
// Ansprechpartner: Jaime Poch (Senior Teamleader), j.poch@majori.de, +49 30 4397 120-23.
// Prozess: "Ein Lebenslauf genügt, Anschreiben nicht erforderlich" -> Paket trotzdem komplett
// (spod.on-Präzedenz: User will immer ein Anschreiben); Rückmeldung in 24h zugesagt.
// Quelle: stepstone.de 14259061 (JSON-LD, aktiv bis 08.08.2026).
// BEREICH 2 (Goldmuster). Score 4.5/5: FiSi WÖRTLICH als Beispiel-Ausbildung; "erste
// Berufserfahrung" = weich (GIS); Bonn vor Ort = Wohnort; Ticketsysteme ✓; Deutsch sehr gut ✓;
// GAP ehrlich: "gute Kenntnisse AD + M365" -> Anwender + Ausbildungskonzepte + Einarbeitung
// (DPS-Muster, "das sage ich offen"); Aufgabe Benutzer-/Berechtigungsverwaltung AD gespiegelt.
// Kein Gehalt/keine Verfügbarkeit im Formular gefordert -> Band 40-55k, ab sofort im Brief.
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/majori-bundesbehoerde-support.mjs

export default {
  slug: 'majori-bundesbehoerde-support',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'Majori GmbH',
    'Herrn Jaime Poch',
    'Karl-Liebknecht-Straße 5',
    '10178 Berlin',
  ],

  subject: 'Bewerbung als IT Support bei einer Bundesbehörde in Bonn',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Störungen aufnehmen, im Ticketsystem dokumentieren, lösen oder qualifiziert weitergeben',
      'Deutsche Staatsangehörigkeit und Offenheit für die Sicherheitsüberprüfung SÜ2',
    ],
  },
  company: {
    mission: 'Etablierter IT Dienstleister, der den IT Betrieb einer Bundesbehörde in Bonn langfristig und sicher gewährleistet.',
    verbindung: 'In einem sicherheitssensiblen Umfeld zählt ruhige, dokumentierte und verlässliche Arbeit am Anwender; genau das ist meine Arbeitsweise.',
  },
  jobKeywords: ['Ticket', 'Windows', 'Microsoft 365', 'Active Directory', 'Hardware', 'Dokumentation', 'Anwendersupport', 'Installation'],

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
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Active Directory (Konzepte aus der Ausbildung, Einarbeitung), Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Poch,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle im IT Support bei einer Bundesbehörde in Bonn. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der Anwendersupport in einem sicherheitssensiblen Umfeld direkt in Bonn passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich. Installation und Einrichtung von Windows Arbeitsplätzen kenne ich aus Ausbildung und Praxis, beim Hardwaretausch und bei Rollouts packe ich mit an.`,

      `Die Benutzer und Berechtigungsverwaltung über Active Directory und Microsoft 365 kenne ich bisher als Anwender und aus den Konzepten meiner Ausbildung, in die tägliche Verwaltung arbeite ich mich zügig ein. Das sage ich offen. Die deutsche Staatsangehörigkeit bringe ich mit, der Sicherheitsüberprüfung SÜ2 stehe ich offen gegenüber. Was mich zusätzlich trägt, ist meine Entwicklungsseite: In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch erkenne ich wiederkehrende Muster in Anfragen und halte meine Dokumentation so, dass andere direkt weiterarbeiten können.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Menschen schnell und freundlich bekommen, was sie brauchen. Diese Ruhe bringe ich in den Anwenderkontakt mit. Ich wohne in Bonn, die Tätigkeit vollständig vor Ort passt für mich ideal. Ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
