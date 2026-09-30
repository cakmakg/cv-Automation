// Staatliche Zentralstelle für Fernunterricht (ZFU) — IT-Fachkraft (m/w/d), Köln
// Peter-Welter-Platz 2, 50676 Köln. poststelle@zfu.nrw.de, Tel. +49 221 921207-0.
// Gemeinsame Einrichtung der Länder, zuständig für die Zulassung und Überwachung von
// Fernlehrgängen nach dem Fernunterrichtsschutzgesetz. Behörde, DIREKTER ARBEITGEBER.
// Quelle: stepstone.de/…14363746. KEIN namentlicher Ansprechpartner in der Anzeige und auf
// zfu.de auffindbar -> "Sehr geehrte Damen und Herren,".
//
// ECKDATEN: UNBEFRISTET, aber nur 75 % TEILZEIT (29,87 Std./Woche). Entgeltgruppe 9b der
// Entgeltordnung zum TV-L, Jahressonderzahlung, betriebliche Altersvorsorge, flexible
// Arbeitszeiten, mobiles Arbeiten möglich, Fortbildungsangebote.
// EG 9b liegt GENAU im Zielkorridor EG 9–11 (feedback_oeffentlicher_dienst_eg_grenze):
// dort ist die IT-Ausbildung die Eingangsqualifikation, KEIN Bachelor-Formalblocker.
// Die Anzeige bestätigt das wörtlich: "Abgeschlossene einschlägige Berufsausbildung
// (oder höherwertiger abgeschlossener einschlägiger Abschluss) im Bereich IT" — das Studium
// ist ausdrücklich nur die höherwertige Alternative, nicht die Voraussetzung.
// Deutsche Staatsangehörigkeit vorhanden -> Behördenkontext unproblematisch.
//
// ⭐ USER-BOGEN, 6 ABSÄTZE (Volltext-Logik des Users vom 19.08.2026, gilt für ALLE Anschreiben).
// P1 Bewerbung + Qualifikation | P2 Stationen und Support-Praxis | P3 Technik-Abgleich inkl.
// offener Punkte | P4 "Zusätzlich" = was mich unterscheidet | P5 aktueller Job, Herkunft,
// Soft Skills | P6 Abschlusssatz.
// KEIN Standort-, Führerschein-, Verfügbarkeits- oder Gehaltssatz im Brief
// (User-Entscheidung 20.08.2026, siehe bunte-klein-Config).
//
// Score 4.2/5 — inhaltlich der breiteste Treffer bisher, VIER Stärken gleichzeitig bedient:
//   + Ausbildung wörtlich als Eingangsqualifikation, EG 9b = kein Studienblocker
//   + "relationale Datenbanksysteme (z. B. MariaDB/MySQL ODER VERGLEICHBAR)" -> PostgreSQL und
//     SQL aus GuestMatrix zählen; "Abfragen, Auswertungen, Berichte, Statistiken" ist SQL-Arbeit
//   + WLAN- und Netzwerkinfrastruktur -> FAW-Modul IT-NETZWERKE mit Zertifikat
//   + "Mitwirkung am behördlichen INTERNETAUFTRITT" -> Frontend ist sein Kerngeschäft
//     (Reisegesucht.com macht genau das)
//   + WUNSCH "Grundkenntnisse Low-Code-Entwicklung" -> n8n ist exakt das, echter Volltreffer
//   + IT-Service für die Beschäftigten -> GIS-Praxis
//   + Koordination externer IT-Dienstleister -> Café/Catering-Koordination als echter Beleg
//   + Deutsch sicher = C1; Köln ~30 km; mobiles Arbeiten; unbefristet
//   - MICROSOFT ACCESS steht als erstes System in Aufgabe 1, keine Praxis. In P3 offen benannt,
//     NICHT im CV behauptet. Access steht aber NUR in den Aufgaben, NICHT im Profil -> kein Muss.
//   - "Fundierte Kenntnisse in der Administration von Windows-Systemen" ist Modulwissen aus der
//     Umschulung, keine Betriebsjahre -> im Brief ehrlich als Ausbildungsinhalt formuliert.
//   - 75 % TEILZEIT ist der praktische Dämpfer: EG 9b in Vollzeit liegt grob bei 43–46k,
//     bei 75 % also grob 33–35k. Entscheidung des Users, ob das reicht.
//   - Erfahrung im öffentlichen Dienst fehlt (nur Wunsch).
// Run: node generate-bewerbung.mjs companies/zfu-it-fachkraft-koeln.mjs

export default {
  slug: 'zfu-it-fachkraft-koeln',
  date: '20.08.2026',
  language: 'de',

  recipient: [
    'Staatliche Zentralstelle für Fernunterricht (ZFU)',
    'Peter-Welter-Platz 2',
    '50676 Köln',
  ],

  subject: 'Bewerbung als IT-Fachkraft',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration, der Anwender im IT Service betreut, Datenbankabfragen selbst schreibt und Abläufe sauber dokumentiert.',
    passung: [
      'Beschäftigte im IT Service unterstützt, Störungen aufgenommen und dokumentiert',
      'relationale Datenbanken aus eigenen Projekten, Abfragen und Auswertungen selbst geschrieben',
      'Netzwerke aus der Umschulung mit Zertifikat, dazu Webentwicklung für den Internetauftritt',
    ],
  },
  company: {
    mission: 'Gemeinsame Einrichtung der Länder in Köln, die Fernlehrgänge prüft und zulässt und damit Teilnehmende im Fernunterricht schützt.',
    verbindung: 'Eine Behörde, die Verfahren prüft und Entscheidungen begründen muss, braucht IT, die verlässlich läuft und deren Abfragen und Auswertungen nachvollziehbar sind.',
  },
  jobKeywords: ['Windows', 'Netzwerk', 'Datenbanken', 'Abfragen', 'Auswertungen', 'Störungen', 'Dokumentation', 'Internetauftritt'],

  cv: {
    tagline: 'IT-Service · Datenbanken · Netzwerk',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      'Datenbankabfragen & Auswertungen',
      'IT-Infrastruktur',
      'Digitalisierung von Abläufen',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // Wie #60–#62, #64, #65: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie namentlich nennt
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
    // KEIN Access, KEIN MariaDB/MySQL — keine Praxis. Die Anzeige lässt "oder vergleichbar" zu,
    // deshalb steht PostgreSQL als das, was belegt ist. Keine Lizenzverwaltung behauptet.
    skills: [
      { category: 'Datenbanken', items: 'PostgreSQL, SQL (Abfragen, Auswertungen, Berichte), MongoDB, Supabase' },
      { category: 'Systeme & Netzwerk', items: 'Windows 11, Windows Server (FAW IT-Systeme), WLAN, TCP/IP, DNS, DHCP, Linux' },
      { category: 'Support & Prozesse', items: 'IT-Service für Anwender, Störungen analysieren & beheben, Ticket-Dokumentation, Anwenderbetreuung' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Internetauftritt & Webseiten, n8n (Low-Code)' },
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
      `ich bewerbe mich auf Ihre Stelle als IT Fachkraft in Köln. Als Fachinformatiker für Systemintegration bringe ich praktische Erfahrung im IT Service sowie ein gutes technisches Verständnis für Windows Systeme und Netzwerke sowie für relationale Datenbanken mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG habe ich die Beschäftigten im IT Service unterstützt, Störungen aufgenommen und sauber dokumentiert. Anfragen habe ich am Telefon und über Fernzugriff bearbeitet und entweder direkt gelöst oder mit einer verständlichen Beschreibung an den zuständigen Dienstleister weitergegeben. Dabei war mir wichtig, die Anwender klar zu informieren und jeden Vorgang nachvollziehbar festzuhalten.`,

      `Windows Systeme und Netzwerke habe ich während meiner Umschulung gelernt und durch zwei zertifizierte Module vertieft, eines davon zu Netzwerken. Mit relationalen Datenbanken arbeite ich regelmäßig, vor allem mit PostgreSQL. Abfragen und Auswertungen schreibe ich selbst, dazu Berichte für die jeweilige Fachseite. Dabei achte ich auf saubere Struktur und auf die Laufzeit. Mit Microsoft Access habe ich bisher noch nicht gearbeitet. Ich kenne jedoch die grundlegenden Zusammenhänge relationaler Datenbanken und arbeite mich schnell und strukturiert in neue Systeme ein.`,

      `Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js und automatisiere wiederkehrende Abläufe mit n8n, einer Plattform für Workflows ohne großen Programmieraufwand. An Ihrem Internetauftritt kann ich deshalb inhaltlich und technisch mitarbeiten und muss nicht jede Änderung nach außen vergeben. Dadurch verstehe ich auch, wie Fachverfahren aufgebaut sind und an welcher Stelle sich ein Ablauf vereinfachen lässt. Meine Dokumentation schreibe ich so, dass Kolleginnen und Kollegen direkt damit weiterarbeiten können. Aus einer einmaligen Lösung wird dadurch ein wiederholbarer Ablauf.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dort habe ich Angebote kalkuliert und Rechnungen geschrieben, dazu Lieferanten und Dienstleister koordiniert. Dadurch habe ich meine Serviceorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
