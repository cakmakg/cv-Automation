// PRODATIC-EDV-Konzepte GmbH — IT-Systemadministrator / Fachinformatiker für
// Systemintegration (m/w/d), Vollzeit, Wermelskirchen (Raum Köln)
// Bandwirkerstr. 1, 42929 Wermelskirchen. HRB 36247 Amtsgericht Köln, USt-ID DE 189 066 665.
// Geschäftsführung Anja Heyer und Andreas Zahn. Tel. +49 2196 88759-0, prodatic@prodatic.com.
// Impressum prodatic.com am 22.08.2026 geprüft (prodatic.de leitet per 301 dorthin um).
// DIREKTER ARBEITGEBER. Die Anzeige läuft über das Portal meinestadt.de, der Arbeitgeber ist
// aber namentlich genannt -> kein anonymes Posting, kein Vermittler.
// GESCHÄFT: Prodatic entwickelt und vertreibt eine eigene integrierte ERP-Software für Handel
// und Industrie (Module Verkauf, Einkauf, Lagerverwaltung, CRM). Das ist der Aufhänger für P4/P5.
// KEIN namentlicher Ansprechpartner (auch nicht auf prodatic.com/karriere)
// -> "Sehr geehrte Damen und Herren,". Quelle: stepstone.de/…14246057 (vor 7 Stunden veröffentlicht).
//
// ECKDATEN: unbefristet, Vollzeit, HYBRID mit bis zu 2 Tagen Homeoffice pro Woche.
// 30 Urlaubstage, Urlaubs- und Weihnachtsgeld, VWL, Gleitzeit, Weiterbildung, Getränke, Obst,
// kostenlose Parkplätze. KEIN Gehalt genannt.
//
// ⭐ USER-BOGEN, 6 ABSÄTZE (Volltext-Logik des Users vom 19.08.2026, gilt für ALLE Anschreiben).
// KEIN Standort-, Führerschein-, Verfügbarkeits- oder Gehaltssatz im Brief (User 20.08.2026).
// Führerschein ist hier "von Vorteil" für Kundeneinsätze -> steht im CV (Kategorie Mobilität).
//
// Score 3.6/5:
//   + Stellentitel nennt "Fachinformatiker für Systemintegration" wörtlich
//   + TCP/IP, DNS, DHCP und VLAN stehen namentlich in den Aufgaben -> FAW-Modul IT-NETZWERKE
//     mit Zertifikat deckt das ab
//   + Diagnose und Behebung von Hardware- und Softwareproblemen -> GIS-Praxis
//   + ERP-Softwarehaus: die Entwicklungsseite (Fachanwendungen, relationale Datenbanken) UND
//     die kaufmännische Erfahrung aus dem eigenen Café greifen hier beide -> P4 und P5
//   + Führerschein "von Vorteil", vorhanden; unbefristet, 30 Tage, Urlaubs-/Weihnachtsgeld, VWL
//   + hybrid mit bis zu 2 Tagen Homeoffice; Anzeige erst 7 Stunden alt
//   - VMWARE UND HYPER V stehen DOPPELT: in den Aufgaben ("Betreuung von VMware, Hyper-V …")
//     UND in den Anforderungen ("Virtualisierungskenntnisse"). Keine Betriebspraxis.
//     Das ist der härteste Dämpfer, härter als bei SYSTEM AG (#61), wo VMware nur "idealerweise" war.
//   - "Erfahrung in der Administration von Windows Servern und Netzwerken" ist gefordert;
//     belegt ist Modulwissen aus der Umschulung plus First-Level-Praxis, keine Betriebsjahre.
//   - Benutzerkonten und Zugriffsrechte = Active-Directory-Umfeld, keine Praxis
//     -> in P3 zusammen mit VMware offen benannt, NICHT im CV behauptet.
//   - IT-Sicherheit nicht aus dem Betrieb belegt, wird nicht behauptet.
//   - WERMELSKIRCHEN liegt rund 60 km von Bonn. Kein Umzugsversprechen erfunden
//     (feedback_standort_weite_distanz); Brief enthält ohnehin keinen Standortsatz.
//     Remote-Anteil und Präsenzerwartung sind Frage fürs Erstgespräch.
//   - Kein Gehaltsband genannt.
// Run: node generate-bewerbung.mjs companies/prodatic-it-systemadministrator-wermelskirchen.mjs

export default {
  slug: 'prodatic-it-systemadministrator-wermelskirchen',
  date: '22.08.2026',
  language: 'de',

  recipient: [
    'PRODATIC-EDV-Konzepte GmbH',
    'Bandwirkerstraße 1',
    '42929 Wermelskirchen',
  ],

  subject: 'Bewerbung als IT-Systemadministrator',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration, der Hardware und Softwareprobleme eingrenzt, Netzwerke aus der Ausbildung kennt und Fachanwendungen auch von innen versteht.',
    passung: [
      'Anwender unterstützt, Störungen aufgenommen und nachvollziehbar dokumentiert',
      'Netzwerkgrundlagen von TCP/IP bis VLAN aus der Umschulung, mit eigenem Modul abgeschlossen',
      'eigene Webanwendungen und relationale Datenbanken, dadurch Verständnis für Fachanwendungen',
    ],
  },
  company: {
    mission: 'Softwarehaus aus Wermelskirchen, das eine eigene integrierte ERP Lösung für Handel und Industrie entwickelt und die Systeme seiner Kunden betreut.',
    verbindung: 'Wer eine eigene ERP Software betreibt, braucht im Support jemanden, der unterscheiden kann, ob ein Problem am System, am Netz oder an der Anwendung liegt.',
  },
  jobKeywords: ['Systemadministration', 'Server', 'Netzwerke', 'Windows Server', 'TCP/IP', 'Störungen', 'Hardware', 'Dokumentation'],

  cv: {
    tagline: 'Systemadministration · IT-Support',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      'Systemadministration',
      'Hardware- & Softwarediagnose',
      'IT-Dokumentation',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // Wie #60–#62, #64–#68: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie namentlich nennt
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
    // KEIN VMware, KEIN Hyper-V, KEIN Active Directory — keine Betriebspraxis, stehen nur im
    // Brief als offene Punkte. Keine IT-Sicherheits-Behauptung.
    // PostgreSQL/SQL bewusst drin: Prodatic ist ein ERP- und Datenbankhaus.
    skills: [
      { category: 'Server & Systeme', items: 'Windows 11, Windows Server (FAW IT-Systeme), Systeminstallation & Wartung, Linux' },
      { category: 'Netzwerk', items: 'TCP/IP, DNS, DHCP, VLAN, Netzwerke aufbauen & betreuen (FAW IT-Netzwerke)' },
      { category: 'Support & Prozesse', items: 'Störungen eingrenzen & beheben, Hardware & Peripherie, Ticket-Dokumentation, Anwenderbetreuung' },
      { category: 'Web & Datenbanken', items: 'TypeScript, React, Node.js, PostgreSQL & SQL, n8n Workflows' },
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
      `ich bewerbe mich auf Ihre Stelle als IT Systemadministrator in Wermelskirchen. Als Fachinformatiker für Systemintegration bringe ich praktische Erfahrung im IT Support sowie ein gutes technisches Verständnis für Server, Netzwerke und Betriebssysteme mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG habe ich Anwender unterstützt und Störungen aufgenommen. Probleme an Hardware und Software habe ich eingegrenzt und entweder direkt behoben oder mit einer verständlichen und qualifizierten Beschreibung weitergegeben. Dabei war mir wichtig, den Anwender klar zu informieren und jeden Vorgang nachvollziehbar festzuhalten.`,

      `Die Netzwerkgrundlagen dieser Stelle habe ich während meiner Umschulung gelernt und mit einem eigenen Modul abgeschlossen, von TCP/IP über DNS und DHCP bis zu VLAN. Windows Server und die Grundlagen der Systemadministration kommen aus einem zweiten Modul zu IT Systemen. Mit VMware und Hyper V habe ich bisher noch nicht im laufenden Betrieb gearbeitet, ebenso wenig mit der Benutzerverwaltung im Active Directory. Ich kenne jedoch die grundlegenden Zusammenhänge von Virtualisierung und Berechtigungen und arbeite mich schnell und strukturiert in neue Systeme ein.`,

      `Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js und arbeite dabei mit relationalen Datenbanken. Dadurch verstehe ich, wie eine Fachanwendung aufgebaut ist und wo sie im Alltag klemmt. Bei einem Haus mit eigener ERP Software hilft mir das im Support. Ich sehe schneller, ob ein Problem am System, am Netz oder an der Anwendung liegt. Meine Dokumentation schreibe ich so, dass Kolleginnen und Kollegen direkt damit weiterarbeiten können.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dort habe ich Angebote kalkuliert und Rechnungen geschrieben, dazu Lieferanten und Termine koordiniert. Wie ein Betrieb kaufmännisch läuft, kenne ich also aus eigener Verantwortung. Genau darum geht es in einer ERP Software. Dadurch habe ich meine Kundenorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
