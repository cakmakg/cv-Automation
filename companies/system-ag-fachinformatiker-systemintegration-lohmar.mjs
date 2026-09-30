// SYSTEM AG für IT-Lösungen — Fachinformatiker Systemintegration / Windows / VMware (m/w/d)
// Auelsweg 16, 53797 Lohmar. Vollzeit oder Teilzeit (20–40 Std.), bis zu 2 Tage Homeoffice.
// Quelle: job24.de/…b836083 (via xing.com). Die Anzeige ist ANONYM, sie nennt nur die
// Bewerbungsplattform "Workwise" als Arbeitgeber. Echter Arbeitgeber über die wörtliche
// Selbstbeschreibung ("Beratungs- und IT-Serviceleistungen … Individualprogrammierung sowie
// Server- u. Netzwerktechnik") und die identische Anzeige auf stepstone (Job 13009323)
// aufgelöst: SYSTEM AG für IT-Lösungen, Lohmar.
// Impressum system.ag geprüft 19.08.2026: Auelsweg 16, 53797 Lohmar, Vorstand Peter Wisser,
// Prokuristen Silke Meinert und Jürgen Kuss, HRB 6226 Amtsgericht Siegburg, USt-ID DE 123116064,
// IHK Bonn/Rhein-Sieg. KEIN namentlicher Ansprechpartner für Bewerbungen -> "Sehr geehrte Damen und Herren,".
// Eigene Karriereseite nennt als Bewerbungskontakt nur personal@atdata.de (Gruppen-HR).
// Bewerbungsweg laut Anzeige: über Workwise, "ohne Anschreiben". Paket trotzdem vollständig
// erzeugt (feedback_deliverable_immer_pdf) — das Anschreiben ist dann der Zusatz, der auffällt.
//
// ⭐ BEREICH-2-BOGEN (6 Absätze, User-Volltext-Logik vom 19.08.2026, siehe rwz-it-support-koeln).
// P1 Bewerbung + Qualifikation | P2 Support-Stationen und Störungspraxis |
// P3 Microsoft- und Netzwerk-Abgleich inkl. offener Punkte | P4 Entwicklungsseite, Doku |
// P5 aktueller Job, Tourismus, Café, Serviceanspruch, Standort + Führerschein | P6 Abschlusssatz.
//
// Score 3.8/5 — bisher bester formaler Treffer im Bereich 2:
//   + "abgeschlossene Ausbildung im IT-Bereich, z. B. als Fachinformatiker für Systemintegration"
//     = wörtlich seine Fachrichtung, keine Übersetzungsleistung nötig
//   + gefordert ist ausdrücklich nur "ERSTE praktische Erfahrung" (nicht mehrjährig wie bei RWZ #60)
//   + Deutsch C1 = Muss und dokumentierte Stärke
//   + Führerschein Klasse B = Muss, vorhanden (User 23.07.2026); Firmenwagen wird gestellt
//   + Lohmar liegt im Rhein-Sieg-Kreis, von Bonn aus gut erreichbar
//   - VMware, Veeam, Sophos, Kaspersky, Barracuda = keine Betriebspraxis -> in P3 offen benannt,
//     NICHT in die CV-Skills geschrieben (feedback_cv_no_overclaim)
//   - Hardware (Server Lenovo, Storage Synology, Router, Switches) ist Ausbildungsinhalt,
//     nicht Kundenbetrieb -> ehrlich als Ausbildung ausgewiesen
//   - "idealerweise gute Englischkenntnisse" bei B1; nur Wunsch, kein Muss, im Brief nicht thematisiert
// Run: node generate-bewerbung.mjs companies/system-ag-fachinformatiker-systemintegration-lohmar.mjs

export default {
  slug: 'system-ag-fachinformatiker-systemintegration-lohmar',
  date: '19.08.2026',
  language: 'de',

  recipient: [
    'SYSTEM AG für IT-Lösungen',
    'Auelsweg 16',
    '53797 Lohmar',
  ],

  subject: 'Bewerbung als Fachinformatiker Systemintegration',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration mit Support-Praxis, der Störungen systematisch eingrenzt, sauber dokumentiert und sich zügig in neue Systeme einarbeitet.',
    passung: [
      'Anwender unterstützt, Störungen aufgenommen und Tickets sauber dokumentiert',
      'Windows Clients und Windows Server sowie TCP/IP Netzwerke aus der Umschulung, zwei zertifizierte Module',
      'eigene Webanwendungen mit React und Node.js, dadurch Verständnis für Fachanwendungen',
    ],
  },
  company: {
    mission: 'IT Systemhaus aus Lohmar, das mittelständische Unternehmen mit Beratung, Individualprogrammierung sowie Server und Netzwerktechnik betreut.',
    verbindung: 'Wer die IT Landschaften seiner Kunden am Laufen hält, braucht jemanden, der Störungen systematisch eingrenzt und jeden Vorgang nachvollziehbar festhält.',
  },
  jobKeywords: ['Systemintegration', 'Windows', 'Windows Server', 'Server', 'Netzwerke', 'TCP/IP', 'Hardware', 'Störungen'],
  // VMware und Virtualisierung bewusst NICHT in der Keyword-Liste: der Brief nennt sie offen als
  // Lücke, der CV darf sie nicht behaupten. Das ist eine echte ATS-Schwäche dieser Bewerbung.
  // Siehe Report 061 Abschnitt C.
  cv: {
    tagline: 'Systemintegration · IT-Support',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      'Systemintegration & IT-Betrieb',
      'Störungen analysieren & beheben',
      'Anwendersupport',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // Wie bei #60: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie namentlich nennt
    // (belegt in cv.md, 05/2023 – 06/2023). Sonst nennt der Brief eine Station, die im CV fehlt.
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
    // KEIN VMware / Veeam / Sophos / Kaspersky — keine Betriebspraxis, steht nur im Brief als offener Punkt.
    skills: [
      { category: 'Systeme & Server', items: 'Windows 11, Windows Server (FAW IT-Systeme), Hardware & Peripherie, Softwareinstallation' },
      { category: 'Netzwerk', items: 'TCP/IP, DNS, DHCP, Router & Switches (FAW IT-Netzwerke), Linux' },
      { category: 'Support & Prozesse', items: 'Fehleranalyse & Entstörung, Ticket-Dokumentation, Anwenderbetreuung, IT-Dokumentation' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
    ],
    // Systemintegration steht hier vorn, weil der Brief damit eröffnet und die Anzeige genau
    // diese Fachrichtung nennt. Beide Fachrichtungen stehen so in cv.md.
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker Systemintegration / Anwendungsentwicklung (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Fachinformatiker für Systemintegration in Lohmar. Meine Umschulung habe ich genau in dieser Fachrichtung gemacht und bringe praktische Erfahrung im IT Support sowie ein gutes technisches Verständnis für Windows Systeme, Netzwerke und Anwendungen mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG habe ich Anwender unterstützt, Störungen aufgenommen und Tickets sauber dokumentiert. Fehler grenze ich systematisch ein und behebe sie oder gebe sie mit einer verständlichen und qualifizierten Beschreibung weiter. Dabei war mir wichtig, den Anwender klar zu informieren und jeden Vorgang nachvollziehbar festzuhalten.`,

      `Windows Clients und Windows Server sowie TCP/IP Netzwerke habe ich während meiner Umschulung gelernt und durch zwei zertifizierte Module vertieft. Auch den Einbau und die Wartung von Hardware wie Servern, Storages und Switches kenne ich aus dieser Ausbildung. Mit VMware und mit Backup Lösungen wie Veeam habe ich bisher noch nicht im laufenden Kundenbetrieb gearbeitet. Ich kenne jedoch die grundlegenden Zusammenhänge der Virtualisierung und arbeite mich schnell und strukturiert in neue Systeme ein.`,

      `Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js. Dadurch verstehe ich, wie Fachanwendungen aufgebaut sind und an welchen Stellen Fehler entstehen können. Bei Rollouts und neuen Softwareständen kann ich Veränderungen gezielt prüfen und Probleme systematisch eingrenzen. Meine Dokumentationen schreibe ich so, dass auch Kolleginnen und Kollegen direkt damit weiterarbeiten können. Gerade in Kundenprojekten bleibt dadurch jederzeit nachvollziehbar, auf welchem Stand eine Umsetzung ist.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dadurch habe ich meine Kundenorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team. Außerdem habe ich gelernt, Abläufe zu planen und Finanzen zu organisieren. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert. Diesen Serviceanspruch bringe ich in die Betreuung Ihrer Kunden ein. Ich wohne in Bonn und habe Führerschein Klasse B, Lohmar ist für mich gut erreichbar.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
