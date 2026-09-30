// Raiffeisen Waren-Zentrale Rhein-Main AG (RWZ) — IT-Support (m/w/d) 1st und 2nd Level
// Köln, Gaedestraße 9, 50968 Köln (Adresse aus JSON-LD der Anzeige). Vollzeit,
// BEFRISTET AUF 2 JAHRE mit Übernahmemöglichkeit. Start laut Anzeige 01.09.2026.
// Referenz: 1406P17983 / con_1-17983. Quelle: karriere.rwz.ag (via xing.com), datePosted 2026-08-18.
// Agrarhandelshaus, ~1.500 Mitarbeitende, ~180 Standorte, 100 Außenstandorte im Support-Scope.
// KEIN Ansprechpartner in der Anzeige und auf der concludis-Landingpage -> "Sehr geehrte Damen und Herren,"
// Bewerbung NUR über das Portal rwz.concludis.de (prj=1406P17983).
//
// ⭐ BEREICH-2-BOGEN — VOLLTEXT DES USERS vom 19.08.2026.
// Der User hat die Struktur, die Reihenfolge und die Logik dieses Briefes ausdrücklich
// als verbindlich für Bereich 2 gesetzt. Das Goldmuster Fullstack (5 Absätze) gilt hier NICHT.
// Bogen: P1 Bewerbung + Qualifikation | P2 Support-Stationen und Ticketpraxis |
//        P3 Microsoft-Abgleich inkl. offener Punkte | P4 Entwicklungsseite, Doku, Schulung |
//        P5 aktueller Job, Tourismus, Café, Serviceanspruch, Standort | P6 Abschlusssatz.
// Nicht neu texten. Am Text wurden NUR zwei Dinge gemacht, beide aus stehenden User-Regeln:
//   1. Bindestrich-Komposita aufgelöst (feedback_anschreiben_no_dash):
//      IT-Support -> IT Support, 1st-Level-Support -> 1st Level Support,
//      Windows-Systeme -> Windows Systeme, Windows-11-Clients -> Windows 11 Clients,
//      Microsoft-Office-Anwendungen -> Microsoft Office Anwendungen,
//      UNO-Flüchtlingshilfe -> UNO Flüchtlingshilfe.
//   2. Standortsatz ans Ende von P5 gezogen, damit P6 der reine Abschlusssatz ist
//      (Template setzt Grußformel und Signatur selbst).
// Zwei Sätze in P5 waren Dreier-Aufzählungen (Tricolon = harter Blocker) und wurden
// minimal entzerrt, Inhalt unverändert.
//
// Score 3.3/5:
//   + "abgeschlossene Berufsausbildung im IT-Bereich" -> FAW-Umschulung (AE / Systemintegration)
//   + Aufgaben = Incidents/Service Requests, Doku, Anwenderschulung -> GIS, UNO, EMLAK
//   + Deutsch C1 explizit gefordert -> dokumentierte Stärke
//   + Standort Köln-Bayenthal, von Bonn gut erreichbar
//   - "mehrjährige Erfahrung im 1st Level" = echter Dämpfer
//   - M365 / MS Intune nur "idealerweise" -> in P3 offen benannt, NICHT im CV behauptet
//   - Befristung 2 Jahre
// Run: node generate-bewerbung.mjs companies/rwz-it-support-koeln.mjs

export default {
  slug: 'rwz-it-support-koeln',
  date: '19.08.2026',
  language: 'de',

  recipient: [
    'Raiffeisen Waren-Zentrale Rhein-Main AG',
    'Gaedestraße 9',
    '50968 Köln',
  ],

  subject: 'Bewerbung als IT-Support 1st und 2nd Level',

  narrative: {
    kern: 'Fachinformatiker mit Praxis im 1st Level Support, der Störungen aufnimmt, sauber dokumentiert und den Anwender dabei klar informiert.',
    passung: [
      'Anwender unterstützt, Störungen aufgenommen und Tickets sauber dokumentiert',
      'Windows 11 Clients und Microsoft Office Anwendungen gehören zu meinem Alltag',
      'eigene Webanwendungen mit React und Node.js, dadurch Verständnis für Fachanwendungen',
    ],
  },
  company: {
    mission: 'Agrarhandelshaus aus Köln, das Betriebe aus Landwirtschaft, Weinbau und Forstwirtschaft an rund 180 Standorten versorgt.',
    verbindung: 'Wer Anwender an vielen verteilten Standorten betreut, braucht Support, der Vorgänge nachvollziehbar festhält und andere Standorte direkt damit weiterarbeiten lässt.',
  },
  // Wortlaut der Anzeige: "1st und 2nd Level", "1st Level IT-Support" — genau so matcht ein ATS.
  jobKeywords: ['1st Level', '2nd Level', 'Windows 11', 'Dokumentation', 'Anwenderschulung', 'Rollout', 'Incident', 'Service Request'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      '1st & 2nd Level Support',
      'Incident- & Ticketbearbeitung',
      'IT-Dokumentation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    // Override der 5 Default-Stationen: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie
    // namentlich nennt (belegt in cv.md, 05/2023 – 06/2023). Ohne sie wäre der Brief
    // im CV nicht gedeckt. Reihenfolge und Wortlaut der übrigen Stationen unverändert.
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
      { category: 'Support & Clients', items: 'Windows 11, Software-Rollout, Drucker & Peripherie, Remote-Support, mobile Geräte' },
      { category: 'Ticketing & Prozesse', items: 'Incidents & Service Requests, Jira, Ticket-Dokumentation, Anwenderschulung, Eskalation' },
      { category: 'Netzwerk & Systeme', items: 'Windows-Server-Grundlagen (FAW IT-Systeme), TCP/IP, DNS, DHCP, Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker Anwendungsentwicklung / Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle im IT Support für den 1st und 2nd Level in Köln. Als Fachinformatiker für Anwendungsentwicklung bringe ich praktische Erfahrung im 1st Level Support sowie ein gutes technisches Verständnis für Windows Systeme, Netzwerke und Anwendungen mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG habe ich Anwender unterstützt, Störungen aufgenommen und Tickets sauber dokumentiert. Probleme habe ich entweder direkt gelöst oder mit einer verständlichen und qualifizierten Fehlerbeschreibung an den zuständigen Support weitergegeben. Dabei war mir wichtig, den Anwender klar zu informieren und jeden Vorgang nachvollziehbar festzuhalten.`,

      `Windows 11 Clients und Microsoft Office Anwendungen gehören zu meinem Alltag. Serverdienste und Netzwerke habe ich während meiner Umschulung zum Fachinformatiker für Systemintegration gelernt und durch zwei zertifizierte Module vertieft. Microsoft Intune und Microsoft 365 habe ich bisher noch nicht im laufenden Unternehmensbetrieb administriert. Ich kenne jedoch die grundlegenden Zusammenhänge und arbeite mich schnell und strukturiert in neue Systeme ein.`,

      `Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js. Dadurch verstehe ich, wie Fachanwendungen aufgebaut sind und an welchen Stellen Fehler entstehen können. Bei Rollouts und neuen Softwareständen kann ich Veränderungen gezielt prüfen und Probleme systematisch eingrenzen. Meine Dokumentationen schreibe ich so, dass auch Kolleginnen und Kollegen an anderen Standorten direkt damit weiterarbeiten können. Eine kurze Anwenderschulung ist für mich oft die bessere Lösung, als dasselbe Problem mehrfach zu bearbeiten.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dadurch habe ich meine Kundenorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team. Außerdem habe ich gelernt, Abläufe zu planen und Finanzen zu organisieren. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert. Diesen Serviceanspruch bringe ich in den IT Support ein. Ich wohne in Bonn, und die Gaedestraße in Köln ist für mich gut erreichbar.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
