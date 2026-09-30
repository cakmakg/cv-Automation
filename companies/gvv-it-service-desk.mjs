// GVV Versicherungen (Marke für GVV Kommunalversicherung VVaG + GVV Direktversicherung AG)
// Stelle: IT-Service Desk / IT-Support (m/w/d), Köln, Vollzeit, Homeoffice möglich.
// Quelle: Stepstone (Anzeige vom User geliefert, 08.08.2026). Gehaltsangabe 55–75k ist die
// Stepstone-SCHÄTZUNG, nicht vom Arbeitgeber genannt → keine Gehaltsvorstellung im Brief
// (Anzeige verlangt auch keine).
// Juristisch: GVV Kommunalversicherung VVaG, Aachener Str. 952-958, 50933 Köln (Impressum
// gvv-kommunal.de, verifiziert 08.08.2026; GVV Direktversicherung AG teilt dieselbe Adresse).
// KEIN namentlicher Ansprechpartner auffindbar (Karriereseite läuft über Umantis-Portal,
// Stepstone-Anzeige nennt keinen) → „Sehr geehrte Damen und Herren".
// BEREICH 2 (IT-Support, Goldmuster-Skelett). Score 4.2/5.
//
// PASSUNG: Anzeige NENNT „Fachinformatiker für Systemintegration" WÖRTLICH als Zielausbildung ✓
// (stärkster Ausbildungs-Match im Tracker); 1st Level + Anwenderbetreuung telefonisch/persönlich
// + Ticket-Doku = GIS 1:1; Windows/Microsoft-Produktpalette = täglich; Deutsch C1 = Anforderung
// erfüllt; Köln ab Bonn erreichbar + Führerschein B; Homeoffice-Anteil entlastet den Weg.
// GAPS ehrlich in P3, gebündelt in EINEM Satz ([[feedback-anschreiben-honesty-lauffaehig]]):
// Active Directory (Benutzer-/Rechteverwaltung produktiv), iOS-Clients/MDM, Patch-Management.
// ITIL: Foundation-Zertifikat nicht vorhanden → positiv als „mache ich kurzfristig nach"
// (keine Gap-Negation). 2nd Level + Server-/Backup-Monitoring = Dämpfer (Anzeige will
// „fundierte Kenntnisse", er hat ~4 Monate 1st Level) → im CV NICHT als Kompetenz behaupten.
// DIFFERENZIERER: Entwicklerseite (TypeScript/Node.js, Automatisierung) → wiederkehrende
// Anfragen früh erkennen statt jedes Ticket einzeln abarbeiten.
// Regeln: P1 rein faktisch, kein Dash im Fließtext, Tricolon-Budget 0, „Für Sie heißt das" 0×,
// Einzeiligkeit im CV, keine Projekte (1-Seiten-Regel), Zertifikate fix.
// Run: node generate-bewerbung.mjs companies/gvv-it-service-desk.mjs

export default {
  slug: 'gvv-it-service-desk',
  date: '08.08.2026',
  language: 'de',

  recipient: [
    'GVV Kommunalversicherung VVaG',
    'Aachener Straße 952-958',
    '50933 Köln',
  ],

  subject: 'Bewerbung im IT-Service Desk und IT-Support',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig unterstützt, sauber dokumentiert und die Software dahinter selbst bauen kann.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Serviceanfragen aufgenommen, im Ticketsystem dokumentiert und SLAs im Blick',
      'Entwicklerseite: eigene Anwendungen mit TypeScript und Node.js, dadurch wiederkehrende Anfragen früh erkennen',
    ],
  },
  company: {
    mission: 'Spezialversicherer für Kommunen wie Städte und Gemeinden, über GVV Direkt zusätzlich für Privatkunden, rund 330 Mitarbeitende in Köln und Wiesbaden.',
    verbindung: 'Kommunale Versicherung lebt von Verlässlichkeit im Alltag; ein Service Desk, der seine Anwender persönlich kennt, gehört für mich dazu.',
  },
  jobKeywords: ['Service Desk', 'Störung', 'SLA', 'Windows', 'Active Directory', 'Patch', 'ITIL', 'Dokument'],

  cv: {
    tagline: 'IT-Service Desk · Systemintegration',
    // Einzeiligkeits-Regel: „Schwerpunkte:"-Zeile ≤100 Zeichen → 3 kurze Tags, kein Overclaim
    // (kein „2nd Level", keine AD-Administration — beides steht nur als Grundlage in den Skills).
    competencies: [
      '1st Level Anwendersupport',
      'Windows & Endgeräte',
      'Ticketing & Dokumentation',
    ],
    // 1-Seiten-Regel: keine Projekte im Support-CV.
    projects: [],
    // ITIL / Patch-Management / Datensicherung tragen bewusst den Grundlagen-Qualifier —
    // ATS braucht die Begriffe, das Profil deckt sie nur aus der Ausbildung ([[feedback-cv-no-overclaim]]).
    skills: [
      { category: 'Service Desk & Prozesse', items: 'First Level Support, Ticketbearbeitung nach SLA, Störungsanalyse, Eskalation, ITIL (Grundlagen)' },
      { category: 'Clients & Microsoft', items: 'Windows 11, Microsoft 365 (Anwender), Outlook, Hardware-Einrichtung, Softwareinstallation, Peripherie' },
      { category: 'Systeme & Netzwerk', items: 'Active Directory, Patch-Management, Datensicherung (Grundlagen aus der Ausbildung), TCP/IP, DNS, Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    // Englisch nicht gefordert (Anzeige verlangt nur fließendes Deutsch) → Default-Sprachzeile.
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle im IT Service Desk in Köln. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing.`,

      `Anwendern bei Störungen schnell zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Serviceanfragen telefonisch und persönlich aufgenommen, im Ticketsystem dokumentiert und entweder selbst gelöst oder qualifiziert weitergegeben. Mit Windows und den Microsoft Anwendungen arbeite ich täglich. Arbeitsplätze einrichten, Hardware tauschen und Software installieren kenne ich aus meiner Ausbildung. Zugesagte Reaktionszeiten sind der Maßstab, an dem Anwender einen Service Desk messen. Ich halte SLAs im Blick und melde mich auch dann, wenn eine Lösung länger dauert.`,

      `Was ich zusätzlich mitbringe, ist die Entwicklerseite. Ich baue eigene Anwendungen mit TypeScript und Node.js und automatisiere wiederkehrende Abläufe. Dadurch fällt mir früh auf, wenn sich dieselbe Anfrage häuft. Dann gehe ich die Ursache an statt jedes Mal nur das Symptom. Active Directory, iOS Clients und Patch Management kenne ich aus der Ausbildung, die Praxis darin hole ich mir bei Ihnen. Die ITIL Foundation mache ich kurzfristig nach.`,

      `GVV versichert Kommunen wie Städte und Gemeinden, über GVV Direkt kommen Privatkunden dazu. Ein Haus mit rund 330 Mitarbeitenden bedeutet für mich, dass der Service Desk seine Anwender persönlich kennt. So arbeite ich gern. Ich wohne in Bonn und habe Führerschein Klasse B, Köln erreiche ich zuverlässig. Anfangen kann ich ab sofort.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
