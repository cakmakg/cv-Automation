// Bunte & Klein GmbH — IT-Techniker Systemintegration, Client, Netzwerk & Support (m/w/d)
// Campusallee 9, 51379 Leverkusen. HRB 49250 Amtsgericht Köln, USt-ID DE180360153.
// Geschäftsführer Peter Bunte und Sebastian Bunte. Tel. 02171 9049100.
// Impressum bunte-klein.de am 19.08.2026 geprüft. Systemhaus für die Digitalisierung von
// Handwerk und Industrie ("Wir digitalisieren das Handwerk"), Mittelstandskunden.
// DIREKTER ARBEITGEBER, kein Vermittler. Quelle: stepstone.de/…14167246 (vor 21 Std. veröffentlicht).
// KEIN namentlicher Ansprechpartner -> "Sehr geehrte Damen und Herren,".
// Bewerbungsweg: online über stepstone/Website ODER per E-Mail an karriere@bunte-klein.de.
//
// ECKDATEN: feste Anstellung, Vollzeit. Kein Gehaltsband genannt ("leistungsgerechtes Gehalt,
// Erfolgsbeteiligung"). 30 Urlaubstage, flexible Arbeitszeiten und Homeoffice-Optionen laut
// Karriereseite, professionelle Einarbeitung, Unterstützung bei der privaten Altersversorgung,
// moderne Arbeitsgeräte, NUTZUNG EINES FIRMENWAGENS.
// ANZEIGE VERLANGT AUSDRÜCKLICH: "Bitte sende deinen Lebenslauf, Gehaltswunsch und Verfügbarkeit
// per Mail oder bewirb dich direkt online."
// USER-ENTSCHEIDUNG 20.08.2026: Standort-, Führerschein-, Verfügbarkeits- und Gehaltssatz sind
// AUS DEM ANSCHREIBEN ENTFERNT. P5 endet mit "Auch in stressigen Situationen bleibe ich ruhig
// und lösungsorientiert." Gehaltswunsch und Verfügbarkeit gehören damit in die Begleitmail,
// nicht in den Brief. Führerschein Klasse B steht weiterhin im CV (cv.skills, Kategorie Mobilität).
// Firma duzt in der Anzeige, Anschreiben bleibt im Sie (keine Abweichung ohne Rückfrage).
// Die Firma betreibt selbst "branchenspezifische ERP-Softwarelösungen" -> ERP ist Kerngeschäft,
// nicht Randthema. Die ERP-Lücke wiegt dadurch schwerer, bleibt aber ehrlich in P3 benannt.
//
// ⭐ USER-BOGEN, 6 ABSÄTZE (Volltext-Logik des Users vom 19.08.2026, gilt für ALLE Anschreiben).
// P1 Bewerbung + Qualifikation, rein faktisch | P2 konkrete Stationen und Support-Praxis |
// P3 Technik-Abgleich inkl. offener Punkte + Einarbeitungszusage | P4 "Zusätzlich" = was mich
// unterscheidet | P5 aktueller Job, Herkunft, Soft Skills, Standort | P6 Abschlusssatz.
//
// Score 4.0/5:
//   + Stellentitel nennt "Systemintegration" wörtlich = seine Fachrichtung
//   + Aufgaben Windows-Clients, Arbeitsplätze, Netzwerke, Softwareinstallation, Kundensupport,
//     Vor-Ort-Service und Fernwartung = GIS-Praxis plus FAW-Module IT-Systeme und IT-Netzwerke
//   + "KAUFMÄNNISCHES VERSTÄNDNIS" steht im Profil und ist über drei Jahre eigenes Café mit
//     Catering echt belegt. Seltene Anforderung, die er ohne Dehnung erfüllt -> P5.
//   + FIRMENWAGEN wird gestellt, Führerschein B vorhanden -> Vor-Ort-Service abgedeckt
//   + Leverkusen ~40 km von Bonn, dazu Homeoffice-Optionen
//   + Kein Studium, keine Jahresanforderung ("Ausbildung & Erfahrung")
//   - MDM (mobile Geräteverwaltung) und ERP-Systeme stehen in den AUFGABEN, nicht unter
//     "idealerweise". Keine Betriebspraxis -> in P3 offen benannt, NICHT im CV behauptet.
//   - "IT-Sicherheit im Alltag" ist nicht belegt (Security nur aus eigenen Projekten,
//     nicht aus dem IT-Betrieb) -> bewusst nicht behauptet.
//   - Kein Gehaltsband. Anzeige ist sehr knapp gehalten (nur Schlagzeilen-Bullets),
//     Tiefe der Rolle im Gespräch zu klären.
// Run: node generate-bewerbung.mjs companies/bunte-klein-it-techniker-systemintegration-leverkusen.mjs

export default {
  slug: 'bunte-klein-it-techniker-systemintegration-leverkusen',
  date: '19.08.2026',
  language: 'de',

  recipient: [
    'Bunte & Klein GmbH',
    'Campusallee 9',
    '51379 Leverkusen',
  ],

  subject: 'Bewerbung als IT-Techniker Systemintegration',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration mit Support-Praxis, der Arbeitsplätze einrichtet, Störungen sauber dokumentiert und kaufmännische Abläufe aus eigener Erfahrung kennt.',
    passung: [
      'Anwender unterstützt, Störungen aufgenommen und sauber dokumentiert',
      'Arbeitsplätze eingerichtet, Softwareinstallation und Fernwartung',
      'Netzwerke und Windows Server aus der Umschulung, zwei zertifizierte Module',
    ],
  },
  company: {
    mission: 'Systemhaus aus Leverkusen, das mittelständische Handwerks und Industriebetriebe mit moderner IT und Software digitalisiert.',
    verbindung: 'Wer Handwerksbetriebe digitalisiert, braucht jemanden, der die Technik zum Laufen bringt und zugleich versteht, wie ein Betrieb kaufmännisch arbeitet.',
  },
  jobKeywords: ['Systemintegration', 'Windows', 'Netzwerke', 'Hardware', 'Softwareinstallation', 'Kundensupport', 'Fernwartung', 'Arbeitsplätze'],

  cv: {
    tagline: 'Systemintegration · IT-Support',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    // Bewusst anders formuliert als die Skill-Liste; "Kaufmännisches Verständnis" steht
    // wörtlich im Anforderungsprofil der Anzeige und ist über das eigene Café belegt.
    competencies: [
      'Systemintegration',
      'Client- & Netzwerkbetreuung',
      'Kaufmännisches Verständnis',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // Wie #60–#62 und #64: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie namentlich nennt
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
    // KEIN MDM / Intune / ERP — keine Betriebspraxis, steht nur im Brief als offener Punkt.
    // KEINE IT-Sicherheits-Behauptung — Security nur aus eigenen Projekten, nicht aus dem Betrieb.
    skills: [
      { category: 'Clients & Arbeitsplätze', items: 'Windows 11, Arbeitsplätze einrichten, Softwareinstallation, Hardware & Peripherie' },
      { category: 'Netzwerk & Systeme', items: 'Netzwerke aufbauen & betreuen, TCP/IP, DNS, DHCP, Windows Server (FAW), Linux' },
      { category: 'Support & Prozesse', items: 'Technischer Kundensupport, Fernwartung, Ticket-Dokumentation, IT-Dokumentation' },
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
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als IT Techniker im Bereich Systemintegration in Leverkusen. Als Fachinformatiker für Systemintegration bringe ich praktische Erfahrung im Anwendersupport sowie ein gutes technisches Verständnis für Windows Systeme, Netzwerke und Anwendungen mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG habe ich Anwender unterstützt, Störungen aufgenommen und sauber dokumentiert. Arbeitsplätze habe ich eingerichtet, die Softwareinstallation gehörte dazu. Den technischen Kundensupport habe ich am Telefon und über Fernwartung geleistet und Anfragen nach einer Erstanalyse entweder direkt gelöst oder mit einer verständlichen und qualifizierten Beschreibung weitergegeben. Dabei war mir wichtig, den Anwender klar zu informieren und jeden Vorgang nachvollziehbar festzuhalten.`,

      `Windows Clients und Windows Server habe ich während meiner Umschulung gelernt und durch zwei zertifizierte Module vertieft, eines davon zu Netzwerken. Netzwerke aufzubauen und zu betreuen ist für mich deshalb kein Neuland, ebenso der Umgang mit Hardware und Peripherie. Mit der zentralen Verwaltung mobiler Geräte und mit ERP Systemen habe ich bisher noch nicht im laufenden Kundenbetrieb gearbeitet. Ich kenne jedoch die grundlegenden Zusammenhänge und arbeite mich schnell und strukturiert in neue Systeme ein.`,

      `Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js und automatisiere wiederkehrende Abläufe. Dadurch verstehe ich, wie Fachanwendungen und ihre Schnittstellen aufgebaut sind und an welchen Stellen Fehler entstehen. Gerade bei kaufmännischer Software hilft mir das, weil ich die Prozesse dahinter kenne und nicht nur die Oberfläche. Meine Dokumentation schreibe ich so, dass Kolleginnen und Kollegen direkt damit weiterarbeiten können. Aus einer einmaligen Lösung wird dadurch ein wiederholbarer Ablauf.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dort habe ich Angebote kalkuliert und Rechnungen geschrieben, dazu Lieferanten und Termine koordiniert. Kaufmännisch zu denken ist mir daher vertraut, und ich weiß, wie ein Betrieb tickt, der jeden Tag liefern muss. Dadurch habe ich meine Kundenorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
