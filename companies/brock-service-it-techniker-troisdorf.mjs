// Brock Service GmbH & Co. KG — IT-Techniker (m/w/d)
// Impressum (brock-service.com, geprüft 24.08.2026): Brock Service GmbH & Co. KG,
// Kirchstr. 24, 53840 Troisdorf. Amtsgericht Siegburg HRA 7042, USt-ID DE323436447,
// vertreten durch Bianka Zadeh. Hotline 0800 988 6004, info@brock-service.com.
// Zertifiziert nach DIN EN ISO 9001:2015 und DIN 77200 (Sicherheitsdienstleistungen).
// BEWERBUNGSADRESSE laut Anzeige (davon abweichend, deshalb im Brief verwendet):
// Arnold-Janssen-Str. 13, 53757 Sankt Augustin. Ansprechpartner: Herr Aaron Jordan,
// bewerbung@brock-service.com, Tel. 02241 89541-20.
//
// ⚠️ PERSONALDIENSTLEISTER, KEIN DIREKTER ARBEITGEBER. Die Stelle wird ausdrücklich
// "im Auftrag renommierter Großkunden im Rahmen der Arbeitnehmerüberlassung" besetzt.
// Der Endkunde wird nicht genannt. Quelle: stepstone.de/…14120545, datePosted 2026-08-08.
//
// ⚠️ EINSATZORT WIDERSPRÜCHLICH — die Anzeige nennt DREI verschiedene Orte:
//   Titel:            "IT-Techniker (m/w/d) in Hildesheim"  (~250 km von Bonn)
//   JSON-LD Ortsfeld: Troisdorf                              (~20 km von Bonn)
//   Fließtext:        "…IT-Techniker (m/w/d) in Kaiserslautern", Arbeitsort
//                     "Denisstraße 8, Kaiserslautern"        (~180 km von Bonn)
// Dazu "Dauer der Anstellung: befristet bis 2024" und Startdatum 15.03.2024 auf der
// Firmenseite -> die Anzeige ist eine mehrfach recycelte Massenschaltung.
// USER-ENTSCHEIDUNG 24.08.2026: Ausrichtung auf REGION BONN/TROISDORF. Der Betreff nennt
// keinen Ort, der Brief enthält KEINEN Standortsatz und KEIN Umzugsversprechen. Der
// Einsatzort wird im Erstgespräch geklärt — das eigene Ortsfeld der Anzeige nennt Troisdorf.
//
// Standortsatz, Führerschein-, Verfügbarkeits- und Gehaltssatz bleiben wie seit 20.08.2026
// AUS DEM ANSCHREIBEN. Führerschein Klasse B ist harte Anforderung der Anzeige und steht
// im CV unter "Mobilität". Gehaltswunsch und Verfügbarkeit gehören in die Begleitmail.
//
// ⭐ ANSCHREIBEN = VOLLTEXT DES USERS vom 24.08.2026, wörtlich übernommen.
// Abweichend vom 6-Absatz-Bogen sind es 8 Absätze: der Technik-Abgleich ist in drei
// Absätze aufgeteilt (P3 Systeme, P4 Englisch + eigene Projekte, P5 Verbindung zur Firma),
// dazu ein neuer P6 mit dem Hinweis auf die Zeugnisse im CV.
// EIN EINGRIFF am User-Text: "unter dem Abschnitt Übersicht Zeugnisse" -> "unter dem
// Abschnitt Zertifikate". Der CV hat keinen Abschnitt "Übersicht Zeugnisse"; die Rubrik
// heißt "ZERTIFIKATE" und enthält die fünf klickbaren Drive-Links (FIXED_CERTIFICATES
// in generate-bewerbung.mjs). Ein falscher Abschnittsname würde den Leser ins Leere schicken.
// Ausserdem ein doppeltes Leerzeichen in "Meine Unterlagen  finden Sie" entfernt.
// BEWUSST STEHENGELASSEN entgegen der No-Dash-Regel, weil vom User so geschrieben:
// "IT-Techniker" (P1) und "Office-Anwendungen" (P3). Der Validator meldet sie als Warnung.
//
// Score 3.4/5:
//   + Anforderungsprofil trifft fast vollständig: abgeschlossene IT-Ausbildung (FiSi),
//     PC-Kenntnisse Software und Hardware, Netzwerk- und Office-Anwendungen,
//     Führerschein Klasse B, Service- und Kundenorientierung.
//   + Aufgaben = Installation/Konfiguration von Servern und Clients, 1st und 2nd Level
//     Support, Störungsannahme und -behebung. Genau die GIS-Praxis plus zwei zertifizierte
//     FAW-Module (IT-Systeme, IT-Netzwerke).
//   + Anzeige ist ausdrücklich quereinsteigerfreundlich ("geben wir Ihnen gerne eine Chance").
//   + Kein Studium, keine Jahresanforderung, kein Zertifikatszwang.
//   + Bewerbungsanschrift Sankt Augustin und Firmensitz Troisdorf liegen beide vor der Haustür.
//   - ARBEITNEHMERÜBERLASSUNG: Endkunde unbekannt, tarifliche Entlohnung (iGZ/BAP-Niveau
//     liegt unter dem IT-Zielkorridor), Einsatzort und Vertragsdauer nicht belastbar.
//   - Einsatzort ist der eigentliche Blocker, siehe oben. Muss vor dem Absenden geklärt sein.
//   - "Benutzer- und Gruppenadministration" im laufenden Kundenbetrieb: nur aus der
//     Umschulung, keine Betriebsverantwortung -> in P3 offen benannt, NICHT im CV behauptet.
//   - "Tätigkeiten im Bereich der IT-Sicherheit": nicht aus dem IT-Betrieb belegt,
//     wird bewusst nicht behauptet.
//   - "Gute Kenntnisse der englischen Sprache in Wort und Schrift": B1, funktional.
//     In P4 ehrlich eingeordnet, nicht überzeichnet.
// Run: node generate-bewerbung.mjs companies/brock-service-it-techniker-troisdorf.mjs

export default {
  slug: 'brock-service-it-techniker-troisdorf',
  date: '24.08.2026',
  language: 'de',

  recipient: [
    'Brock Service GmbH &amp; Co. KG',
    'Herrn Aaron Jordan',
    'Arnold-Janssen-Str. 13',
    '53757 Sankt Augustin',
  ],

  subject: 'Bewerbung als IT-Techniker',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration und Anwendungsentwicklung mit Praxis im 1st Level Support, der Arbeitsplätze einrichtet, Störungen sauber analysiert und seine Dokumentation so schreibt, dass Kunde und Team direkt damit weiterarbeiten können.',
    passung: [
      'Anwender im Support betreut, Störungen analysiert und qualifiziert weitergegeben',
      'Server und Clients installieren und konfigurieren, zwei zertifizierte Module zu Netzwerken',
      'Findet sich in fremden Systemen schnell zurecht, was bei wechselnden Kundeneinsätzen zählt',
    ],
  },
  company: {
    mission: 'Personaldienstleister aus Troisdorf, der Fachkräfte an Großkunden vermittelt und deren laufenden Betrieb vor Ort absichert, daneben Sicherheit, Facility Management und Technik.',
    verbindung: 'Wer Techniker in fremde Kundenumgebungen schickt, braucht Leute, die sich dort schnell zurechtfinden und ihre Arbeit so festhalten, dass der Kunde damit weiterarbeiten kann.',
  },
  jobKeywords: ['Systemintegration', 'Support', 'Clients', 'Server', 'Störungen', 'Netzwerk', 'Windows', 'Benutzer'],

  cv: {
    tagline: 'Systemintegration · IT-Support',
    // Schwerpunkte-Zeile bleibt einzeilig (≤100 Zeichen inkl. Label).
    competencies: [
      'Systemintegration',
      'Client- & Serverbetreuung',
      'Kunden- & Serviceorientierung',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // UNO-Flüchtlingshilfe bleibt drin, weil der Brief die Station namentlich nennt.
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
    // KEINE IT-Sicherheits-Behauptung, KEINE Benutzerverwaltung im Kundenbetrieb —
    // beides steht nur im Brief als offener Punkt.
    skills: [
      { category: 'Clients & Server', items: 'Windows 11, Windows Server (FAW), Arbeitsplätze einrichten, Softwareinstallation' },
      { category: 'Netzwerk & Office', items: 'Netzwerke aufbauen & betreuen, TCP/IP, DNS, DHCP, Microsoft Office, Linux' },
      { category: 'Support & Prozesse', items: '1st & 2nd Level Support, Störungen aufnehmen & beheben, Fernwartung, IT-Dokumentation' },
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
    anrede: 'Sehr geehrter Herr Jordan,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als IT-Techniker. Als Fachinformatiker für Systemintegration und Anwendungsentwicklung bringe ich Erfahrung im 1st Level Support, bei der Einrichtung von Arbeitsplätzen und in der Betreuung von Anwendern mit.`,

      `Bei GIS in Bonn habe ich im 1st Level Support gearbeitet. Ich habe Anfragen am Telefon und über Fernwartung angenommen, nach einer ersten Analyse Störungen selbst gelöst oder qualifiziert an den 2nd Level weitergegeben. Bei der UNO Flüchtlingshilfe und bei der Emlak AG habe ich Arbeitsplätze eingerichtet, Software installiert und Anwender vor Ort unterstützt. Mir war dabei immer wichtig, dem Nutzer verständlich zu erklären, was passiert ist. Dadurch kamen viele Rückfragen gar nicht erst auf.`,

      `Server und Clients zu installieren und zu konfigurieren habe ich in der Umschulung gelernt und über zwei zertifizierte Module vertieft, eines davon zu Netzwerken. Windows Server gehörte dazu, ebenso das Anlegen von Benutzern und Gruppen und das Vergeben von Rechten. Mit Netzwerken und den gängigen Office-Anwendungen arbeite ich sicher. Die Benutzerverwaltung im laufenden Kundenbetrieb habe ich bisher nicht hauptverantwortlich gemacht, die Zusammenhänge kenne ich aber und arbeite mich zügig ein.`,

      `Englisch lese ich technisch sicher, in der mündlichen Verständigung komme ich gut zurecht. Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js und automatisiere wiederkehrende Abläufe. Dadurch verstehe ich, wie Anwendungen und ihre Schnittstellen aufgebaut sind und an welchen Stellen Fehler entstehen. In fremden Systemen finde ich mich deshalb schnell zurecht.`,

      `Das ist mir bei Ihnen wichtig, weil Sie als Personaldienstleister Fachkräfte zu Großkunden vermitteln und die Umgebung dort jedes Mal eine andere ist. Meine Dokumentation schreibe ich so, dass der Kunde und das Team direkt damit weiterarbeiten können.`,

      `Meine Unterlagen finden Sie in meinem Lebenslauf unter dem Abschnitt Zertifikate. Dort können Sie die entsprechenden Dokumente über die hinterlegten Links als PDF herunterladen.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros in Köln. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. In beiden Jobs hatte ich täglich mit Kunden zu tun, und Zuverlässigkeit hat über den Tag entschieden. Auf neue Menschen und neue Umgebungen stelle ich mich schnell ein. Auch wenn es hektisch wird, bleibe ich ruhig und lösungsorientiert.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
