// YER — Junior IT-Systemadministrator (m/w/d), Bonn, Vollzeit, hybrid.
// Personaldienstleister, besetzt die Stelle IN FESTANSTELLUNG bei einem Kunden aus
// Industrie und Maschinenbau in Bonn ("Für unseren Kunden besetzen wir ab sofort
// folgende Position in Festanstellung"). Kunde in der Anzeige NICHT genannt.
// Quelle: xing.com/jobs/bonn-junior-it-systemadministrator-156865106 (datePosted 31.07.2026,
// abgerufen 29.08.2026; WebFetch blockt XING, HTML per curl geholt und Text extrahiert).
// XING-Gehaltsschätzung 46.000–56.000 € (Schätzung von XING, nicht aus der Anzeige).
// Adresse: YER Deutschland GmbH, Birketweg 21, 80639 München (HRB 300341 AG München,
// bereits bei #37 verifiziert). Nächste Niederlassung wäre Köln (YER Experts GmbH,
// Lichtstraße 43g, 50825 Köln, Standortleiter Herr Veli Kaygusuz) — welches Büro das
// Bonner Mandat führt, steht NICHT in der Anzeige, deshalb die geprüfte Hauptadresse.
// KEIN Ansprechpartner in der Anzeige, Bewerbung über das Onlineportal -> "Damen und Herren".
//
// GEHALT: Anzeige verlangt Gehaltsvorstellung. User-Entscheidung 29.08.2026: KEINE Zahl
// nennen, Satz "bespreche ich gern direkt mit Ihnen" in P5. Eintrittstermin = ab sofort.
//
// BEREICH 2 (IT-Support/Administration), 6-Absatz-Bogen des Users nach dem Volltext in
// companies/rwz-it-support-koeln.mjs. Nicht neu texten, nur auf diese Anzeige gemappt:
//   P1 Bewerbung + Qualifikation | P2 Support-Stationen und Ticketpraxis |
//   P3 Microsoft- und Netzwerk-Abgleich inkl. offener Punkte | P4 Entwicklungsseite,
//   Doku, Anwenderschulung | P5 aktueller Job, Tourismus, Café, Standort, Dienstreisen,
//   Gehalt, Eintritt | P6 Abschlusssatz.
// KEIN Förderzusage-Absatz: das Profil passt fachlich, dort schwächt er die Position.
//
// Score 4.2/5:
//   + "Abgeschlossene Ausbildung als Fachinformatiker für Systemintegration" = WÖRTLICH erfüllt
//   + "Die Position eignet sich ideal für Berufseinsteiger nach Ausbildungsabschluss" —
//     genau die Zielgruppe, kein Jahre-Erfahrung-Dämpfer
//   + Aufgaben 1st Level mit Perspektive 2nd Level, Ticketdoku, Störungsanalyse, Hard- und
//     Softwareeinrichtung, Rollouts, Arbeitsplatzbereitstellung = GIS, UNO, EMLAK 1:1
//   + DNS, DHCP, TCP/IP und AD-Grundlagen = FAW-Module
//   + Standort Bonn = Wohnort, hybrid
//   + Dienstreisen nach Shanghai: Tourismus-Vorgeschichte + deutsche Staatsangehörigkeit
//   - Entra ID, Intune, Azure nur "von Vorteil", aber nicht vorhanden -> in P3 offen benannt,
//     NICHT im CV behauptet (kein Overclaim, Cloud-Praxis ist AWS, nicht Azure)
//   - AD/Gruppenrichtlinien bisher Konzepte aus der Ausbildung, nicht produktiv administriert
//   - Englisch gefordert: B1, funktional -> etablierte Sprachzeile, kein Overclaim
//   - Personaldienstleister als Zwischenschritt, Kunde unbekannt
// Erwartete Validator-Meldungen (GEWOLLT, nicht wegschreiben): "Einleitung sagt nicht, WIE du
// arbeitest" (P1 ist bewusst rein faktisch) und "Paragraph count is 6".
// Run: node generate-bewerbung.mjs companies/yer-junior-it-systemadministrator-bonn.mjs

export default {
  slug: 'yer-junior-it-systemadministrator-bonn',
  date: '29.08.2026',
  language: 'de',

  // Der User-Volltext (8 Absätze) lief um 9px über die Seite. Gekürzt wird sein Text NICHT,
  // stattdessen die Unterschrift von 150px auf 120px verkleinert — reine Layoutstellschraube.
  signatureWidth: '120px',

  recipient: [
    'YER Deutschland GmbH',
    'Birketweg 21',
    '80639 München',
  ],

  // Betreff wörtlich aus der Fassung des Users vom 29.08.2026.
  subject: 'Bewerbung als Junior IT Systemadministrator in Bonn',

  narrative: {
    kern: 'Fachinformatiker mit Praxis im 1st Level Support, der Störungen aufnimmt, sauber dokumentiert und in die Administration von Benutzern und Systemen hineinwächst.',
    passung: [
      'Anwender unterstützt und Störungen im Ticketsystem dokumentiert',
      'Active Directory, DNS und DHCP aus der Umschulung im Bereich Systemintegration',
      'eigene Webanwendungen und Skripte, dadurch Verständnis für den Aufbau von Anwendungen',
    ],
  },
  company: {
    mission: 'Personaldienstleister, der für einen Kunden aus Industrie und Maschinenbau in Bonn einen Junior IT Systemadministrator in Festanstellung besetzt.',
    verbindung: 'In einem Industriebetrieb müssen Konten, Rechte und Endgeräte verlässlich verwaltet sein; genau diese Vorgänge halte ich nachvollziehbar fest, damit auch Kollegen ohne Rückfragen weiterarbeiten können.',
  },
  // Wortlaut der Anzeige, so matcht ein ATS. Entra ID und Intune stehen bewusst drin und
  // werden im Brief als offener Punkt benannt, nicht als Kenntnis behauptet.
  jobKeywords: ['Active Directory', 'Microsoft Entra ID', 'Microsoft Intune', 'Windows', 'Microsoft 365', 'DNS', 'DHCP', 'Ticketsystem', 'Rollout'],

  cv: {
    tagline: 'IT-Administration · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      '1st & 2nd Level Support',
      'Windows & Netzwerk',
      'IT-Dokumentation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    // Override der Default-Stationen: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie
    // namentlich nennt und jede Brief-Aussage im CV gedeckt sein muss.
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Frontend &amp; Marketing',
        bullets: ['Frontend-Design und Marketing für ein Reisebüro: Webseiten, Content, Kampagnen'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['1st Level IT Support, Personalplanung und Zeiterfassung im Enterprise-Umfeld'] },
      { company: 'Vidinli Software — Bonn', period: '09/2025 – 10/2025', role: 'Frontend Developer (Praktikum)',
        bullets: ['Entwicklung des Frontends einer Shopping-Plattform mit <strong>React.js</strong> und <strong>TypeScript</strong>'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung in IT-Systemen und Netzwerken — erste Praxis in IT-Infrastruktur'] },
      { company: 'UNO-Flüchtlingshilfe — Bonn', period: '05/2023 – 06/2023', role: 'IT-Support (Praktikum im Rahmen der Umschulung)',
        bullets: ['Unterstützung IT-gestützter Abläufe und Datenpflege, Mitarbeit an digitalen Workflows'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer (Selbstständiger Unternehmer)',
        bullets: ['Gründung und Leitung eines Catering-Unternehmens: Kunden, Finanzen, Logistik, Team'] },
    ],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Arbeitsplatzeinrichtung, Software-Rollout, Drucker & Peripherie, mobile Geräte' },
      { category: 'Ticketing & Prozesse', items: 'Incidents & Service Requests, Jira, Ticketsysteme & Dokumentation, Anwenderschulung, Eskalation an Second Level' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Windows-Server-Grundlagen (FAW IT-Systeme), Active Directory & Gruppenrichtlinien (Konzepte, Einarbeitung), Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
      { category: 'Mobilität', items: 'Führerschein Klasse B, Reisebereitschaft' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      // Angeglichen an den Brieftext des Users (29.08.2026): "ausgebildeter Fachinformatiker
      // für Anwendungsentwicklung", Systemintegration im Rahmen der Umschulung. Sonst würde
      // der CV dem ersten Absatz des Anschreibens widersprechen.
      { school: 'FAW', program: 'Fachinformatiker Anwendungsentwicklung / Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  // ⭐ VOLLTEXT DES USERS vom 29.08.2026. Nicht neu texten, nicht kürzen.
  // Geändert wurden NUR zwei Dinge, beide aus stehenden Regeln:
  //   1. Bindestrich-Komposita aufgelöst (feedback_anschreiben_no_dash):
  //      Windows-Systeme -> Windows Systeme, UNO-Flüchtlingshilfe -> UNO Flüchtlingshilfe,
  //      Microsoft-365-Anwendungen -> Microsoft 365 Anwendungen.
  //      "Kommunikations- und Organisationsfähigkeiten" BLEIBT (Ergänzungsstrich, kein
  //      Kompositum; der Check greift nur bei Buchstabe-Bindestrich-Buchstabe).
  //   2. "Mit freundlichen Grüßen" und der Name entfernt — das Template setzt Grußformel
  //      und Signatur selbst, sonst steht beides doppelt im PDF.
  // NICHT MEHR IM BRIEF (bewusst, weil der User-Text sie nicht enthält): aktueller Job,
  // Verfügbarkeit ab sofort, Gehaltsvorstellung und die Reisebereitschaft nach Shanghai.
  // Die Anzeige verlangt Gehaltsvorstellung und Eintrittstermin -> im Onlineportal angeben.
  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich gerne auf Ihre Stelle als Junior IT Systemadministrator in Bonn. Ich bin ausgebildeter Fachinformatiker für Anwendungsentwicklung und habe zusätzlich im Rahmen meiner Umschulung den Bereich Systemintegration kennengelernt. Dadurch bringe ich praktische Erfahrung im 1st Level Support sowie ein gutes technisches Verständnis für Windows Systeme, Netzwerkdienste und Benutzerverwaltung mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und der Emlak AG habe ich Anwender unterstützt und Störungen im Ticketsystem aufgenommen und dokumentiert. Ich habe Arbeitsplätze eingerichtet, Hardware in Betrieb genommen und Software installiert. Probleme habe ich entweder direkt gelöst oder mit einer verständlichen Fehlerbeschreibung an den zuständigen Support weitergegeben.`,

      `Dabei war mir immer wichtig, den Anwender verständlich zu informieren und die einzelnen Schritte sauber zu dokumentieren. So kann der nächste Kollege direkt sehen, was bereits geprüft wurde und ohne unnötige Rückfragen weiterarbeiten.`,

      `Mit Windows 11 und Microsoft 365 Anwendungen bin ich vertraut. Active Directory, Benutzerkonten und Berechtigungen sowie die Netzwerkdienste DNS und DHCP habe ich während meiner Umschulung im Bereich Systemintegration gelernt. Microsoft Entra ID und Microsoft Intune habe ich bisher noch nicht im laufenden Unternehmensbetrieb administriert. Die grundlegenden Zusammenhänge kenne ich aber und arbeite mich gerne in neue Systeme ein.`,

      `Zusätzlich entwickle ich eigene Webanwendungen und automatisiere wiederkehrende Aufgaben mit eigenen Skripten. Dadurch habe ich ein gutes Verständnis dafür, wie Anwendungen aufgebaut sind und an welchen Stellen technische Fehler entstehen können.`,

      `Ich arbeite gerne im Team und habe auch Erfahrung mit agilen Arbeitsweisen. Wenn ich merke, dass ein Problem bei einem Anwender immer wieder auftritt, versuche ich nicht nur den einzelnen Fall zu lösen. Eine kurze Erklärung oder Anwenderschulung ist für mich oft die bessere Lösung, damit das gleiche Problem nicht immer wieder entsteht.`,

      `Vor meiner Zeit in der IT war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dadurch habe ich viel im Umgang mit Kunden gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Auch in stressigen Situationen bleibe ich ruhig und versuche, eine passende Lösung zu finden. Diesen Servicegedanken möchte ich auch in meine Arbeit als Systemadministrator einbringen.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
