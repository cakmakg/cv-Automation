// navacom IT Solutions GmbH & Co. KG — IT-Mitarbeiter First Level Support (m/w/d)
// Argeles-Sur-Mer-Straße 2, 50354 Hürth. HRA 27973 Amtsgericht Köln, USt-ID DE274745119.
// Geschäftsführung: Daniel Kuhn, Dennis Engel, Stephan Harms. Tel. +49 2233 8084-0.
// Impressum navacom.de am 19.08.2026 geprüft. ISO 27001 und ISO 9001 zertifiziert.
// Selbstbeschreibung: "Wir konzeptionieren und bauen betriebsfähige IT-Infrastrukturen."
// DIREKTER ARBEITGEBER, kein Vermittler. Quelle: stepstone.de/…14413880
// KEIN namentlicher Ansprechpartner (weder Anzeige noch Karriereseite) -> "Sehr geehrte Damen und Herren,"
// Bewerbungsweg: eigenes Jobportal jobs.navacom.de
//
// HARTE ECKDATEN: unbefristet, Vollzeit (8 Std., Mo–Fr), Gehalt "ab 35.000 Euro/Jahr",
// flexible Homeoffice-Regelung, PRÄSENZ NUR MONTAGS. 20 % Zuschuss zur Altersvorsorge,
// JobRad und Tech-Leasing per Gehaltsumwandlung, Kantine, Bürohunde erlaubt.
//
// ⭐ BEREICH-2-BOGEN (6 Absätze, User-Volltext-Logik vom 19.08.2026, siehe rwz-it-support-koeln).
// P1 Bewerbung + Qualifikation | P2 Support-Stationen, Kunden, Erstanalyse |
// P3 technisches Fundament aus der Umschulung | P4 Entwicklungsseite + Prozessbeschreibungen |
// P5 aktueller Job, Tourismus, Café, Standort | P6 Abschlusssatz.
// P3 hat hier KEINEN Lücken-Satz: die Anzeige nennt keine konkrete Technologie als Muss
// ("techniknaher Beruf, IT-affin"), also gibt es nichts ehrlich zu verneinen. Stattdessen
// eine knappe Einarbeitungszusage auf die Kundensysteme.
//
// Score 4.0/5:
//   + Niedrigste formale Hürde aller bisherigen Stellen: "abgeschlossene Ausbildung in einem
//     techniknahen Beruf, IT-affin" -> FiSi übererfüllt das deutlich
//   + Deutsch C1 ausdrücklich gefordert = dokumentierte Stärke
//   + "Erstellung und Pflege von Arbeits- und Prozessbeschreibungen" ist eigene Aufgabenzeile
//     -> seine Dokumentationsstärke ist hier Kernaufgabe, nicht Beiwerk. Passt zu ISO 9001/27001.
//   + PRÄSENZ NUR MONTAGS bei ~30 km Entfernung -> Pendelfrage praktisch gelöst
//   + unbefristet, direkter Arbeitgeber, zertifiziertes Systemhaus
//   - GEHALT "ab 35.000 €" ist die niedrigste Untergrenze bisher und liegt unter dem
//     bisherigen Bereich-2-Wunsch von 40.000 € (#60). Verhandlungsspielraum unklar.
//   - Rolle ist eng geschnitten: "klar beschriebene Konfigurations- und Serviceanfragen".
//     Wenig Raum für die Entwicklungsseite, geringere Entwicklungshöhe als #61/#62.
//   - Anzeige nennt keinen Tech-Stack -> im Gespräch klären, womit tatsächlich gearbeitet wird.
// Run: node generate-bewerbung.mjs companies/navacom-first-level-support-huerth.mjs

export default {
  slug: 'navacom-first-level-support-huerth',
  date: '19.08.2026',
  language: 'de',

  recipient: [
    'navacom IT Solutions GmbH & Co. KG',
    'Argeles-Sur-Mer-Straße 2',
    '50354 Hürth',
  ],

  subject: 'Bewerbung als IT-Mitarbeiter First Level Support',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration mit Support-Praxis, der Anfragen ruhig aufnimmt, sauber löst und Abläufe so beschreibt, dass andere damit arbeiten können.',
    passung: [
      'erster Ansprechpartner für Anwender und Kunden, Störungen aufnehmen und dokumentieren',
      'Erstanalyse und Fehlerbehebung, lösen oder qualifiziert weitergeben',
      'Arbeits- und Prozessbeschreibungen schreiben und aktuell halten',
    ],
  },
  company: {
    mission: 'Zertifiziertes Systemhaus aus Hürth, das betriebsfähige IT Infrastrukturen für seine Kunden konzipiert, aufbaut und betreibt.',
    verbindung: 'Ein Betrieb, der nach ISO Norm arbeitet, lebt davon, dass Abläufe beschrieben und nachvollziehbar sind; genau daran arbeite ich gern mit.',
  },
  jobKeywords: ['First Level Support', 'Erstanalyse', 'Fehlerbehebung', 'Serviceanfragen', 'Konfiguration', 'Prozessbeschreibungen', 'Dokumentation', 'Kunden'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      'First Level Support',
      'Erstanalyse & Fehlerbehebung',
      'Prozessbeschreibungen',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // Wie #60–#62: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie namentlich nennt
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
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, MS Office (Anwender), Softwareinstallation & Konfiguration, Remote-Support' },
      { category: 'Ticketing & Prozesse', items: 'Serviceanfragen & Tickets, Ticket-Dokumentation, Eskalation, Kundenbetreuung, Wissensdatenbank' },
      { category: 'Systeme & Netzwerk', items: 'Windows Server (FAW IT-Systeme), TCP/IP, DNS, DHCP, Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker Systemintegration / Anwendungsentwicklung (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle im First Level Support in Hürth. Als Fachinformatiker für Systemintegration bringe ich praktische Erfahrung im Anwendersupport sowie ein gutes technisches Verständnis für Windows Systeme, Netzwerke und Anwendungen mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG war ich erster Ansprechpartner für Anwender und habe Störungen aufgenommen und sauber dokumentiert. Serviceanfragen und Fragen zur Konfiguration habe ich am Telefon und über Remote Zugriff bearbeitet. Nach einer Erstanalyse habe ich sie entweder direkt gelöst oder mit einer verständlichen und qualifizierten Beschreibung weitergegeben. Dabei war mir wichtig, den Anwender klar zu informieren und jeden Vorgang nachvollziehbar festzuhalten.`,

      `Windows Clients und Windows Server habe ich während meiner Umschulung gelernt und durch zwei zertifizierte Module vertieft. Auch Netzwerke und die Fehlerbehebung darin gehören dazu. In die Systemlandschaften Ihrer Kunden arbeite ich mich zügig ein, denn jede Umgebung hat ihre eigenen Besonderheiten.`,

      `Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js und automatisiere wiederkehrende Abläufe. Dadurch verstehe ich, wie Anwendungen aufgebaut sind und an welchen Stellen Fehler entstehen können. Arbeits- und Prozessbeschreibungen schreibe ich gern, weil sie aus einer einmaligen Lösung einen wiederholbaren Ablauf machen. Meine Dokumentation ist so aufgebaut, dass Kolleginnen und Kollegen direkt damit weiterarbeiten können. Für ein Haus, das nach ISO Norm zertifiziert ist, ist das kein Nebenschauplatz.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dadurch habe ich meine Kundenorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team. Außerdem habe ich gelernt, Abläufe zu planen und Finanzen zu organisieren. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert. Diesen Serviceanspruch bringe ich in die Betreuung Ihrer Kunden ein. Ich wohne in Bonn, Hürth ist für mich gut erreichbar, und der feste Bürotag am Montag passt gut in meine Woche.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
