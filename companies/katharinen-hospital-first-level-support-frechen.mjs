// St. Katharinen-Hospital GmbH — Unterstützung im 1st Level Support (m/w/d), Standort Frechen
// Quelle: Stellenanzeige im Volltext vom User eingefügt (11.09.2026), Bewerbung per E-Mail
// an schneider@khs-frechen.de, "vollständige Bewerbungsunterlagen im PDF-Format".
//
// IMPRESSUM (st-katharinen-hospital.de/impressum, geprüft 11.09.2026):
//   St. Katharinen-Hospital GmbH, Kapellenstrasse 1-5, 50226 Frechen
//   Amtsgericht Köln HRB 42371, USt-ID DE285719592, Tel. +49 2234 50220110
//   Geschäftsführung / stv. Verwaltungsdirektor: Jakob-Josef Schall
//   Aufsichtsratsvorsitzender: Hans-Theo Müller
// DIREKTER ARBEITGEBER, keine Arbeitnehmerüberlassung. Katholisches Krankenhaus,
// über 1.000 Mitarbeitende, Vergütung nach AVR Caritas.
//
// ANSPRECHPARTNER: Die Anzeige nennt nur die Mailadresse schneider@khs-frechen.de.
// Über st-katharinen-hospital.de/ueber-uns/verwaltung verifiziert: "Informationstechnologie —
// E. Schneider, 02234 / 502-20400", dort als "Leiter Informationstechnologie Herr E. Schneider"
// geführt. Deshalb "Sehr geehrter Herr Schneider". Der Vorname steht öffentlich nur als
// Initiale, deshalb im Adressblock "Herrn E. Schneider".
//
// BEREICH 2 (IT-Support), 8-Absatz-Volltext des Users vom 29.08.2026 aus
// companies/yer-junior-it-systemadministrator-bonn.mjs. Nicht neu getextet, nur auf
// diese Anzeige gemappt:
//   P1 Bewerbung + Qualifikation | P2 Support-Stationen, Hotline und Fernwartung |
//   P3 Dokumentation und Übergabe | P4 Technik-Abgleich inkl. offener Punkte |
//   P5 "Zusätzlich" — Entwicklungsseite | P6 Tourismus und Café + Verbindung zum
//   Krankenhausbetrieb | P7 Abschluss.
// ENTFERNT auf Wunsch des Users (11.09.2026): der Team- und Anwenderschulungs-Absatz
// (in #85 P6). Damit 7 statt 8 Absätze.
// KEIN Förderzusage-Absatz: die geforderte Ausbildung ist wörtlich erfüllt, hier
// schwächt der Absatz die Position (gleiche Entscheidung wie bei #85).
// Standort-, Verfügbarkeits- und Gehaltssatz bleiben wie seit 20.08.2026 AUS DEM BRIEF.
//
// STANDORT: Frechen, rund 30 km von Bonn, mit dem Auto etwa 35 Minuten. Weit unter der
// 100-km-Schwelle -> kein Umzugsthema, keine Rückfrage. Führerschein Klasse B ist in der
// Anzeige HARTE Anforderung und steht im CV unter Mobilität.
//
// Score 4.3/5:
//   + EINGANGSQUALIFIKATION WÖRTLICH: "Abgeschlossene Ausbildung zum Fachinformatiker
//     für Systemintegration" — genau der Titel der FAW-Umschulung.
//   + Aufgabenblock 1 ist 1:1 die GIS-Praxis: "Entgegennahme, Erfassung und
//     Ersteinschätzung von Supportanfragen über ein Ticketsystem und die Hotline".
//   + "Qualifizierte Weitergabe komplexerer Störungen an den 2nd-Level-Support inklusive
//     Dokumentation der bisherigen Analyse" trifft die dokumentierte eigene Stärke.
//   + "Überwiegend Remote-Support" = Fernwartung, aus GIS belegt; Vor-Ort-Einsatz nur
//     im Ausnahmefall, Führerschein B vorhanden.
//   + "Erste Kenntnisse" in Netzwerktechnik, Microsoft-Umgebungen, Office oder ITSM sind
//     ausdrücklich nur "von Vorteil" — keine Jahre-Erfahrung-Hürde.
//   + DIREKTER ARBEITGEBER, unbefristete Vollzeitstelle, AVR Caritas, geregelte
//     Arbeitszeiten Mo-Do bis 16:30 / Fr bis 15:00, strukturierte Einarbeitung,
//     ITIL-Weiterbildung wird angeboten.
//   + Serviceorientierung und "Freude am Umgang mit Menschen" stehen im Profil ganz oben —
//     Café, Catering und Tourismus zahlen hier direkt ein.
//   - Backup, Firewall und Mobile Device Management werden als Berührungspunkte genannt.
//     Nichts davon ist belegt -> in P4 offen als Einarbeitung benannt, NICHT im CV.
//   - Microsoft-Umgebungen: Office und Windows ja, Microsoft 365 / Exchange / Azure NEIN
//     (feedback_cv_no_overclaim). Im CV wird nur Microsoft Office geführt.
//   - Active Directory und Berechtigungen sind Ausbildungskonzepte, keine Administration
//     im laufenden Betrieb -> im CV als "(Konzepte)" gekennzeichnet.
//   - 1.000 Clients und über 200 Server an mehreren Standorten: deutlich größere Landschaft
//     als alles bisher Betreute. Einarbeitung ist laut Anzeige strukturiert vorgesehen.
//   Fazit: die formale Tür passt exakt, der Aufgabenzuschnitt ist die bisherige Praxis,
//   offen bleibt der Werkzeugkasten der großen Infrastruktur.
// Erwartete Validator-Meldungen (GEWOLLT): "Einleitung sagt nicht, WIE du arbeitest"
// (P1 ist bewusst rein faktisch) und die Absatzzahl.
// Run: node generate-bewerbung.mjs companies/katharinen-hospital-first-level-support-frechen.mjs

export default {
  slug: 'katharinen-hospital-first-level-support-frechen',
  date: '11.09.2026',
  language: 'de',

  // Ursprünglich 8 Absätze wie bei #85, seit dem 11.09.2026 sieben (Team-Absatz gestrichen).
  // Der erste Lauf lief um 38px über; korrigiert über die Unterschriftsbreite (120px -> 100px,
  // reine Layoutstellschraube) plus gestraffte Sätze in P2, P4 und im Schlussabsatz.
  signatureWidth: '100px',

  recipient: [
    'St. Katharinen-Hospital GmbH',
    'Herrn E. Schneider',
    'Kapellenstraße 1-5',
    '50226 Frechen',
  ],

  subject: 'Bewerbung im 1st Level Support am Standort Frechen',

  narrative: {
    kern: 'Fachinformatiker mit Praxis im 1st Level Support, der Anfragen am Telefon und per Fernwartung aufnimmt, einschätzt und seine Analyse so festhält, dass der nächste Bearbeiter ohne Rückfragen weiterarbeiten kann.',
    passung: [
      'Supportanfragen über Hotline und Ticketsystem angenommen, eingeschätzt und dokumentiert',
      'Arbeitsplätze eingerichtet, Hardware in Betrieb genommen, Software installiert',
      'Netzwerkgrundlagen aus der Umschulung: TCP/IP, DNS und DHCP, Benutzer und Berechtigungen',
    ],
  },
  company: {
    mission: 'Katholisches Krankenhaus in Frechen mit über 1.000 Mitarbeitenden, dessen IT neben dem Haus in Frechen weitere Standorte mit rund 1.000 Clients und über 200 Servern betreut.',
    verbindung: 'In einem Haus, das rund um die Uhr versorgt, entscheidet der erste Anruf darüber, wie schnell jemand weiterarbeiten kann; genau dort sitzt diese Stelle, und genau dort liegt meine Praxis.',
  },
  jobKeywords: ['1st Level Support', 'Ticketsystem', 'Hotline', 'Fernwartung', 'Störungsanalyse', 'Netzwerk', 'Benutzerberechtigungen', 'Hardware', 'IT-Dokumentation'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      '1st Level Support',
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
    // BEWUSST NICHT IM CV: Microsoft 365, Exchange, Azure, Intune, Backup-Software,
    // Firewall-Administration, MDM. Alles unbelegt — steht nur in P4 als offener Punkt.
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Arbeitsplätze einrichten, Hardware vorbereiten &amp; austauschen, Drucker &amp; Peripherie, Microsoft Office' },
      { category: 'Ticketing & Prozesse', items: 'Hotline &amp; Fernwartung, Ticketsysteme (Jira), Ersteinschätzung &amp; Störungsanalyse, Eskalation an Second Level, IT-Dokumentation' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Konnektivitätsanalyse, Windows-Server-Grundlagen (FAW IT-Systeme), Benutzerberechtigungen &amp; Active Directory (Konzepte), Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker Systemintegration / Anwendungsentwicklung (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  // ⭐ Struktur und Stimme = Volltext des Users vom 29.08.2026 (#85). Übernommen sind
  // Absatzfolge, Satzbau und Wortwahl; ausgetauscht wurden nur die Stellen, an denen
  // diese Anzeige andere Themen setzt:
  //   P2 — Hotline und Fernwartung ergänzt (Anzeige: "Ticketsystem und die Hotline",
  //        "überwiegend im Remote-Support").
  //   P3 — Übergabe an den Second Level ausformuliert (die Anzeige verlangt die Weitergabe
  //        "inklusive Dokumentation der bisherigen Analyse und Lösungsversuche").
  //   P4 — offene Punkte sind hier Backup, Firewall und MDM statt Entra ID und Intune;
  //        ITIL ergänzt, weil das Haus diese Weiterbildung selbst anbietet.
  //   P6 — Schlusssatz auf den Krankenhausbetrieb bezogen.
  //   Der Team- und Anwenderschulungs-Absatz aus #85 ist auf Wunsch des Users gestrichen.
  // Grußformel und Name setzt das Template selbst, deshalb hier nicht enthalten.
  anschreiben: {
    anrede: 'Sehr geehrter Herr Schneider,',
    paragraphs: [
      `ich bewerbe mich gerne auf Ihre Stelle im 1st Level Support am Standort Frechen. Ich bin ausgebildeter Fachinformatiker für Systemintegration und Anwendungsentwicklung und habe im 1st Level Support bereits praktisch gearbeitet. Windows Arbeitsplätze, Netzwerkdienste und Benutzerberechtigungen sind mir aus dieser Praxis und aus meiner Umschulung vertraut.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und der Emlak AG habe ich Anwender unterstützt und Störungen im Ticketsystem aufgenommen und dokumentiert. Die Anfragen kamen telefonisch und per Fernwartung herein. Ich habe sie eingeschätzt und entweder direkt gelöst oder mit einer verständlichen Fehlerbeschreibung weitergegeben. Arbeitsplätze habe ich eingerichtet, Hardware in Betrieb genommen und Software installiert.`,

      `Dabei war mir immer wichtig, den Anwender verständlich zu informieren und die einzelnen Schritte sauber zu dokumentieren. Wenn ich einen Fall an den Second Level abgebe, steht darin, was ich geprüft und was ich bereits ausgeschlossen habe. So kann der nächste Kollege ohne unnötige Rückfragen weiterarbeiten.`,

      `Mit Windows 11 und Microsoft Office arbeite ich sicher. Benutzerkonten und Berechtigungen im Active Directory sowie die Netzwerkdienste DNS und DHCP habe ich während meiner Umschulung gelernt, Netzwerktechnik war dort ein eigenes zertifiziertes Modul. Mit Backup, Firewall und Mobile Device Management habe ich im laufenden Betrieb bisher nicht gearbeitet. Die grundlegenden Zusammenhänge kenne ich, und an der Weiterbildung in Richtung ITIL bin ich interessiert.`,

      `Zusätzlich entwickle ich eigene Webanwendungen und automatisiere wiederkehrende Aufgaben mit eigenen Skripten. Dadurch habe ich ein gutes Verständnis dafür, wie Anwendungen aufgebaut sind und an welchen Stellen technische Fehler entstehen können. Bei Softwareproblemen hilft mir das, eine Störung einzugrenzen, statt sie nur weiterzureichen.`,

      `Vor meiner Zeit in der IT war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dadurch habe ich viel im Umgang mit Menschen gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Auch wenn es hektisch wird, bleibe ich ruhig und suche eine praktische Lösung. In einem Krankenhaus zählt das.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
