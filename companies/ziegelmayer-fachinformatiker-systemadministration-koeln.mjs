// IT-Infrastruktur Inh. Thomas Ziegelmayer (ziegelmayer.net)
// — Fachinformatiker Systemadministration (m/w/d), Köln
// Gottfried-Hagen-Str. 60-62, 51105 Köln (= RTZ Köln, Rechtsrheinisches Technologie- und
// Gründerzentrum; die Anzeige läuft über den "Jobhub des BioCampus Cologne & RTZ Köln").
// Tel. +49 221 715 008 95, mail@ziegelmayer.net. Adresse und Kontakt am 20.08.2026 über das
// BioCampus-Cologne-Firmenprofil verifiziert (ziegelmayer.net/impressum lieferte HTTP 500).
// EINZELUNTERNEHMEN, DIREKTER ARBEITGEBER, kein Vermittler. IT-Dienstleister für KMU.
// ANREDE: Der Inhaber steht im juristischen Firmennamen ("Inh. Thomas Ziegelmayer"), bei einem
// Einzelunternehmen ist die persönliche Anrede damit belegt -> "Sehr geehrter Herr Ziegelmayer,".
// Quelle: stepstone.de/…14179550. Bewerbungsweg: Schnellbewerbung über StepStone.
//
// ECKDATEN: feste Anstellung, Vollzeit, Homeoffice möglich.
// GEHALT 33.800 – 55.000 € Grundgehalt PLUS Urlaubs- und Weihnachtsgeld (Band steht in der Anzeige).
// 30 Urlaubstage plus Rosenmontag, Silvester und Weihnachten. Persönliches Weiterbildungsbudget,
// Fahrgeld oder Jobticket oder Jobbike zur Auswahl, ergonomischer Arbeitsplatz.
//
// ⭐ USER-BOGEN, 6 ABSÄTZE (Volltext-Logik des Users vom 19.08.2026, gilt für ALLE Anschreiben).
// KEIN Standort-, Führerschein-, Verfügbarkeits- oder Gehaltssatz im Brief (User 20.08.2026).
// Führerschein Klasse B ist hier ANFORDERUNG -> er steht deshalb im CV (Kategorie Mobilität),
// nicht im Brief. Damit ist die Anforderung belegt, ohne die Briefregel zu brechen.
//
// Score 3.7/5:
//   + "Abgeschlossene Berufsausbildung als Fachinformatiker/in, Studium ODER vergleichbare
//     Qualifikation" -> wörtlich seine Ausbildung, Studium nur Alternative
//   + 1st und 2nd Level Support, Netzwerktechnologien, Betriebssysteme, Störungsbehebung
//     -> GIS-Praxis plus FAW-Module IT-SYSTEME und IT-NETZWERKE
//   + "Aktualisierung und Wartung der SYSTEMDOKUMENTATION" ist eigene Aufgabenzeile
//     -> seine Dokumentationsstärke ist hier Aufgabe, nicht Beiwerk
//   + "Interesse an innovativen Technologien" -> KI- und Automatisierungspraxis, echter Treffer
//   + Führerschein Klasse B gefordert und vorhanden
//   + Gehaltsband OFFEN ausgeschrieben, bis 55.000 € plus Sonderzahlungen; Homeoffice möglich
//   + Köln-Poll rund 25 km von Bonn
//   + KMU-Kundschaft: er hat selbst ein kleines Unternehmen geführt -> ehrlicher Zugang (P5)
//   - ACTIVE DIRECTORY und OFFICE 365 stehen in den AUFGABEN (Benutzer- und Zugriffsrechte),
//     keine Betriebspraxis. In P3 offen benannt, NICHT im CV behauptet.
//   - VMware nur "ideal", ebenfalls keine Praxis -> im selben Satz mitgenannt, nicht einzeln verneint.
//   - "Erfahrung in Systemadministration und 2nd-Level-Support" ist als Anforderung formuliert.
//     Belegt sind 1st Level und Ausbildung. NICHT verneint (keine Gap-Negation), stattdessen
//     positiv die vorhandene Mechanik benannt. Das ist der Hauptgrund für 3.7 statt 4.0+.
//   - "Deutsch- und Englischkenntnisse": Deutsch C1 stark, Englisch B1 -> cv.languages-Override.
//   - Einzelunternehmen, kleines Team: wenig Struktur, Einarbeitung läuft nebenher.
// Run: node generate-bewerbung.mjs companies/ziegelmayer-fachinformatiker-systemadministration-koeln.mjs

export default {
  slug: 'ziegelmayer-fachinformatiker-systemadministration-koeln',
  date: '20.08.2026',
  language: 'de',

  recipient: [
    'IT-Infrastruktur Inh. Thomas Ziegelmayer',
    'Herrn Thomas Ziegelmayer',
    'Gottfried-Hagen-Straße 60-62',
    '51105 Köln',
  ],

  subject: 'Bewerbung als Fachinformatiker Systemadministration',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration mit Support-Praxis, der Störungen eingrenzt, sauber übergibt und die Systemdokumentation aktuell hält.',
    passung: [
      'Anwender unterstützt, Störungen aufgenommen und sauber dokumentiert',
      'Netzwerktechnologien und Betriebssysteme aus der Umschulung, zwei zertifizierte Module',
      'eigene Webanwendungen und Automatisierungen, dazu Praxis mit neuen Technologien',
    ],
  },
  company: {
    mission: 'IT Dienstleister aus Köln, der kleine und mittlere Unternehmen mit maßgeschneiderten Lösungen betreut und Technologie zugänglich machen will.',
    verbindung: 'Wer kleine und mittlere Unternehmen betreut, braucht jemanden, der Störungen ruhig eingrenzt und dem Kunden verständlich erklärt, woran es liegt.',
  },
  jobKeywords: ['Systemadministration', 'Netzwerk', 'Support', 'Systemdokumentation', 'Betriebssysteme', 'Störungen', 'Windows', 'Kunden'],

  cv: {
    tagline: 'Systemadministration · IT-Support',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      'Systemadministration',
      'Störungsanalyse & Entstörung',
      'Systemdokumentation',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // Wie #60–#62, #64–#66: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie namentlich nennt
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
    // KEIN Active Directory, KEIN Office 365, KEIN VMware — keine Betriebspraxis,
    // stehen nur im Brief als offene Punkte.
    skills: [
      { category: 'Systeme & Netzwerk', items: 'Windows 11, Windows Server (FAW IT-Systeme), Betriebssysteme, TCP/IP, DNS, DHCP, Linux' },
      { category: 'Support & Prozesse', items: '1st & 2nd Level Support, Störungen eingrenzen & beheben, Ticket-Dokumentation, Kundenbetreuung' },
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

  anschreiben: {
    anrede: 'Sehr geehrter Herr Ziegelmayer,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Fachinformatiker in der Systemadministration in Köln. Als Fachinformatiker für Systemintegration bringe ich praktische Erfahrung im Anwendersupport sowie ein gutes technisches Verständnis für Windows Systeme und Netzwerke mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG habe ich Anwender unterstützt, Störungen aufgenommen und sauber dokumentiert. Probleme an System und Netzwerk habe ich eingegrenzt und entweder direkt gelöst oder mit einer verständlichen und qualifizierten Beschreibung weitergegeben. Dabei war mir wichtig, den Anwender klar zu informieren und jeden Vorgang nachvollziehbar festzuhalten.`,

      `Netzwerktechnologien und Betriebssysteme habe ich während meiner Umschulung gelernt und durch zwei zertifizierte Module vertieft, eines davon zu Netzwerken. Aus dem First Level kenne ich die Mechanik dahinter, also einen Fehler sauber eingrenzen, bevor er weitergegeben wird. Mit Active Directory und Office 365 habe ich bisher noch nicht im laufenden Betrieb gearbeitet, mit VMware ebenfalls nicht. Ich kenne jedoch die grundlegenden Zusammenhänge von Benutzerkonten und Berechtigungen und arbeite mich schnell und strukturiert in neue Systeme ein.`,

      `Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js und automatisiere wiederkehrende Abläufe. Dadurch verstehe ich, wie Anwendungen aufgebaut sind und an welchen Stellen Fehler entstehen. Neue Technologien probiere ich aus, statt auf den nächsten Schulungstermin zu warten, zuletzt Systeme aus mehreren KI Agenten. Die Systemdokumentation halte ich so aktuell, dass Kolleginnen und Kollegen direkt damit weiterarbeiten können. Aus einer einmaligen Lösung wird dadurch ein wiederholbarer Ablauf.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Ihre Kunden sind kleine und mittlere Unternehmen, ich war selbst eines und weiß, wie schnell dort alles steht, wenn die Technik ausfällt. Dadurch habe ich meine Kundenorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
