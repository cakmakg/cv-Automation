// thor consulting GmbH (Personalberatung) — IT Support (m/w/d), Einsatzort REMSCHEID
// NICHT zu verwechseln mit #25 (thor consulting, IT Support Spezialist, Langenfeld, 22.07.2026):
// anderer Einsatzort, anderer Endkunde, andere Anforderungen. Gleicher Vermittler, gleicher Recruiter.
// Echter Arbeitgeber ANONYM: "regional verankertes IT-Dienstleistungsunternehmen, betreibt
// europaweit umfangreiche Client-/Server-Infrastrukturen". Personalberatung mit namentlichem
// Kontakt (kein anonymer Aggregator) -> Präzedenz #25/akkodis: Bewerbung ok, Skepsis-Notiz im Tracker.
// thor consulting GmbH: HQ Campusallee 2, 51379 Leverkusen (HRB 99587 Köln); IT-Branch
// DÜSSELDORF: Graf-Adolf-Str. 70, 40210 Düsseldorf (in #25 am 22.07.2026 verifiziert).
// Ansprechpartner (vom User im Volltext geliefert): Sami Sengül, Senior Recruiter,
// Tel. +49 211 877445 27, Mobil +49 151 402 691 05, sami.senguel@thor-consulting.de.
// Bewerbungsweg: direkt per E-Mail an ihn ("Alternativ ... direkt per E-Mail").
// Quelle: xing.com/jobs/remscheid-it-support-157325166
//
// ⭐ BEREICH-2-BOGEN (6 Absätze, User-Volltext-Logik vom 19.08.2026, siehe rwz-it-support-koeln).
// P1 Bewerbung + Qualifikation | P2 Support-Stationen, Tickets und Service Requests |
// P3 Microsoft-Abgleich inkl. offener Punkte | P4 Entwicklungsseite, Prozesse, Wissensaufbereitung |
// P5 aktueller Job, Tourismus, Café, Standort + Führerschein + Entfernung | P6 Abschlusssatz.
//
// Score 4.2/5 — bester Bereich-2-Treffer bisher:
//   + "IT-Ausbildung als Fachinformatiker Systemintegration" = wörtlich seine Fachrichtung
//   + KEINE Jahresanforderung irgendwo; die Anzeige nennt ausdrücklich
//     "Berufseinsteiger:innen mit solider technischer Basis und hoher Lernbereitschaft" als Zielgruppe
//   + "Mitwirkung an der Optimierung interner und externer Prozesse" + "Dokumentation technischer
//     Vorgänge und Wissensaufbereitung" = genau seine beiden Differenzierungsmerkmale, hier als AUFGABE
//   + Führerschein Klasse B = Muss, vorhanden; "sehr gute Deutschkenntnisse" = dokumentierte Stärke
//   + namentlicher Ansprechpartner, Bewerbung per E-Mail möglich
//   - REMSCHEID liegt rund 75 km von Bonn -> echte Pendelfrage. KEIN Umzugsversprechen erfunden
//     (feedback_standort_weite_distanz); P5 nennt Führerschein, Kundentermine, mobiles Arbeiten
//     und benennt die Entfernung offen. Remote-Quote = Frage fürs Erstgespräch.
//   - Azure und M365 = keine Betriebspraxis, laut Anzeige nur "vorteilhaft" -> in P3 offen benannt,
//     NICHT in die CV-Skills geschrieben (feedback_cv_no_overclaim)
//   - "gute Englischkenntnisse" bei B1 -> cv.languages-Override wie in #25, kein Overclaim
// Run: node generate-bewerbung.mjs companies/thor-consulting-it-support-remscheid.mjs

export default {
  slug: 'thor-consulting-it-support-remscheid',
  date: '19.08.2026',
  language: 'de',

  recipient: [
    'thor consulting GmbH',
    'Herrn Sami Sengül',
    'Graf-Adolf-Straße 70',
    '40210 Düsseldorf',
  ],

  subject: 'Bewerbung als IT Support in Remscheid',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration mit Support-Praxis, der Tickets selbstständig bearbeitet, sauber dokumentiert und wiederkehrende Abläufe vereinfacht.',
    passung: [
      'Anwender unterstützt, Störungen aufgenommen und Tickets sauber dokumentiert',
      'Tickets und Service Requests am Telefon und über Remote Zugriff selbstständig bearbeitet',
      'eigene Webanwendungen und Automatisierungen, dadurch Blick für wiederkehrende Muster',
    ],
  },
  company: {
    mission: 'Regional verankertes IT Dienstleistungsunternehmen, das europaweit Client und Server Infrastrukturen betreibt und seine Kunden im laufenden Betrieb begleitet.',
    verbindung: 'Ein stabiler Betrieb beim Kunden braucht Support, der Störungen selbstständig bearbeitet und jeden Vorgang so festhält, dass die Wissensbasis mitwächst.',
  },
  jobKeywords: ['Support', 'Tickets', 'Störungen', 'Service Requests', 'Remote', 'Windows', 'Dokumentation', 'Hardware'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      'Störungen & Service Requests',
      'Remote- & Telefon-Support',
      'IT-Dokumentation',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // Wie #60/#61: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie namentlich nennt
    // (belegt in cv.md, 05/2023 – 06/2023).
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
    // KEIN Azure / M365 — keine Betriebspraxis, steht nur im Brief als offener Punkt.
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, MS Office (Anwender), Softwareinstallation, Hardware & Peripherie, Remote-Support' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Tickets & Eskalation, Ticket-Dokumentation, Anwenderbetreuung, Wissensaufbereitung' },
      { category: 'Systeme & Netzwerk', items: 'Windows Server (FAW IT-Systeme), TCP/IP, DNS, DHCP, Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker Systemintegration / Anwendungsentwicklung (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    // Anzeige fordert "gute Englischkenntnisse" -> ehrliche Formulierung statt B1-Etikett (wie #25).
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Sengül,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle im IT Support in Remscheid. Als Fachinformatiker für Systemintegration bringe ich praktische Erfahrung im Anwendersupport sowie ein gutes technisches Verständnis für Microsoft Betriebssysteme, Netzwerke und Anwendungen mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG habe ich Anwender unterstützt, Störungen aufgenommen und Tickets sauber dokumentiert. Tickets und Service Requests habe ich am Telefon und über Remote Zugriff selbstständig bearbeitet und entweder direkt gelöst oder mit einer verständlichen und qualifizierten Beschreibung weitergegeben. Dabei war mir wichtig, den Anwender klar zu informieren und jeden Vorgang nachvollziehbar festzuhalten.`,

      `Windows Clients und Windows Server habe ich während meiner Umschulung gelernt und durch zwei zertifizierte Module vertieft. Auch den Aufbau und die Wartung von Clients und Hardware kenne ich aus dieser Ausbildung. Mit Microsoft Azure und Microsoft 365 habe ich bisher noch nicht im laufenden Unternehmensbetrieb gearbeitet. Ich kenne jedoch die grundlegenden Zusammenhänge und arbeite mich schnell und strukturiert in neue Systeme ein.`,

      `Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js und automatisiere wiederkehrende Abläufe. Dadurch verstehe ich, wie Fachanwendungen aufgebaut sind und an welchen Stellen Fehler entstehen können. Wenn dasselbe Ticket immer wieder auftaucht, sehe ich das Muster dahinter und sage, wie sich der Ablauf vereinfachen lässt. Meine Dokumentationen schreibe ich so, dass auch Kolleginnen und Kollegen direkt damit weiterarbeiten können. Dadurch wächst eine Wissensbasis, die im Alltag wirklich benutzt wird.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dadurch habe ich meine Kundenorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team. Außerdem habe ich gelernt, Abläufe zu planen und Finanzen zu organisieren. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert. Diesen Serviceanspruch bringe ich in die Betreuung Ihrer Kunden ein. Ich wohne in Bonn und habe Führerschein Klasse B, für Kundentermine bin ich gerne unterwegs. Die Entfernung nach Remscheid ist mir bewusst, mit flexiblen Arbeitszeiten und mobilem Arbeiten lässt sie sich gut einrichten.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
