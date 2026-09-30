// Theater der Bundesstadt Bonn — Assistenz der Technischen Direktion (m/w/d), Elternzeitvertretung 1 Jahr
// ab 01.10.2026, NV-Bühne, ~3.095–3.310 € brutto. Frist 31.08.2026. Bewerbung über karriere.bonn.de.
// PROFIL: TECH + ORGANISATION (User-Entscheidung 30.07.2026 "Neu bauen, IT+Organisation").
//   Ehrliche Bausteine: Fachinformatiker Systemintegration (technische Qualifikation), starke IT/MS-Office,
//   schnelle Tool-Einarbeitung (auch CAD), Organisation/Budget/Projekte aus eigenem Catering, Koordination.
//   GEFORDERT: abgeschlossenes Studium im technischen Bereich + CAD + Bühnentechnik → LÜCKE NICHT negieren,
//   technische Qualifikation + IT-Stärke + schnelle Einarbeitung positiv führen (keine Gap-Negation).
// Adresse (theater-bonn.de/impressum, verifiziert): Am Boeselagerhof 1, 53111 Bonn (Opernhaus).
// Ansprechpartner: Tim Jablonski-Böhm (Technischer Direktor). Quelle: bonn.de/stellenanzeigen jobs.import.5403
// Run: node generate-bewerbung.mjs companies/theater-bonn-assistenz-technische-direktion.mjs

export default {
  slug: 'theater-bonn-assistenz-technische-direktion',
  date: '30.07.2026',
  language: 'de',

  recipient: [
    'Theater der Bundesstadt Bonn',
    'Herrn Tim Jablonski-Böhm',
    'Am Boeselagerhof 1',
    '53111 Bonn',
  ],

  subject: 'Bewerbung als Assistenz der Technischen Direktion',

  jobKeywords: ['MS Office', 'CAD', 'Organisation', 'Budget', 'Projektmanagement'],

  narrative: {
    kern: 'Ich bin technisch ausgebildet (Fachinformatiker Systemintegration) und organisiere gern im Hintergrund.',
    passung: [
      'Technische Ausbildung und starke IT- und Office-Kenntnisse, schnelle Einarbeitung in neue Programme',
      'Organisation, Budget und Projektarbeit aus dem eigenen Catering-Unternehmen',
      'Teamfähig, flexibel, neugierig; Englisch im Arbeitsalltag',
    ],
  },

  company: {
    name: 'Theater Bonn',
    mission: 'Das Theater Bonn ist das große Stadttheater und verbindet auf und hinter der Bühne Technik und Kunst.',
    verbindung: 'Ich bin technisch ausgebildet und organisiere gern im Hintergrund, das passt zu einer Rolle, die Technik und Ablauf am Theater zusammenhält.',
  },

  cv: {
    tagline: 'Technische Affinität & IT · Organisation & Projektkoordination',
    competencies: [],
    projects: [],
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Marketing &amp; Webentwicklung',
        bullets: ['Web, Content und digitale Tools für ein Reisebüro'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['IT-Support, Systeme und Nutzeranfragen im Enterprise-Umfeld'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung bei IT-Systemen und Netzwerken, erste Praxis in der IT-Infrastruktur'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer',
        bullets: ['Eigenes Unternehmen aufgebaut und geführt: Planung, Budget, Logistik und Personal'] },
      { company: 'Tourismusbranche — Türkei', period: '2009 – 2014', role: 'Reiseführer &amp; Tourenverkauf',
        bullets: ['Gruppen betreut und Programme koordiniert, mehrsprachige Gästebetreuung'] },
    ],
    skills: [
      { category: 'IT & Technik', items: 'MS Office (Word, Excel, PowerPoint), Fachinformatiker Systemintegration, Hard- und Software, Netzwerke, schnelle Einarbeitung in neue Programme (z. B. CAD)' },
      { category: 'Organisation & Projekte', items: 'Projektmanagement, Termin- und Ablaufplanung, Budget- und Ressourcenplanung, Aufbau und Logistik vor Ort, Eigenverantwortung' },
      { category: 'Persönlich & Sprachen', items: 'Teamarbeit, Flexibilität, Eigeninitiative, Neugier über den eigenen Bereich hinaus, mehrsprachig (DE/EN/ES/TR)' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Jablonski-Böhm,',
    paragraphs: [
      `ich bewerbe mich auf die Stelle als Assistenz der Technischen Direktion. Mein Hintergrund ist technisch und organisatorisch zugleich: Ich bin Fachinformatiker für Systemintegration und habe daneben ein eigenes Unternehmen mit vielen Veranstaltungen geführt. An Aufgaben gehe ich strukturiert heran und behalte auch bei vielen parallelen Vorgängen den Überblick.`,

      `Mit IT und Software arbeite ich täglich. MS Office nutze ich sicher, und weil ich beruflich Software entwickle, arbeite ich mich in neue Programme sehr schnell ein. In die Arbeit mit CAD für Grundrisse und Bestuhlungspläne würde ich mich daher zügig einfinden.`,

      `Organisation und Projektmanagement kenne ich aus der Praxis. Über mehrere Jahre habe ich mein eigenes Café und Catering geführt, Veranstaltungen geplant und dabei Budget und Termine im Blick behalten. Dadurch weiß ich, wie man ein Projekt von der Planung bis zur Umsetzung koordiniert und dabei ruhig bleibt.`,

      `Das Theater Bonn verbindet Technik und Kunst, und diese Mischung finde ich spannend. Ich arbeite gern im Team, bin flexibel und neugierig über meinen eigenen Bereich hinaus. Auf Englisch kann ich mich im Arbeitsalltag verständigen. Eine Assistenz, die der Technischen Direktion den Rücken freihält und zuverlässig organisiert, liegt mir.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
