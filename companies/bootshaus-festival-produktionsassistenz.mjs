// Bootshaus Cologne GmbH — Festival Produktionsassistenz (m/w/d), Köln (Büro Rudolfplatz), Festanstellung
// Rolle: Eventproduktion/Festivalorganisation (Planung, Koordination, eigenständige Bereiche vor Ort).
// PROFIL: TOURISMUS/HOSPITALITY → aber EVENT-fokussiert. User (30.07.2026): "turizm alanımdan dolayı
//   başvuruyorum" + Entscheidung "neuer, event-fokussierter Brief". KEIN Reisebüro-/Buchungssystem-Inhalt.
//   Ehrliche Bausteine: eigenes Café/Catering (Veranstaltungen organisiert), Reiseführer (Koordination
//   Gruppen/Hotels/Anbieter), schnelle Tool-/Office-Einarbeitung (Softwareentwickler), Eigenverantwortung.
//   Kein Event-Management-Abschluss → NICHT negieren, Praxis positiv führen (keine Gap-Negation).
// Adresse (Impressum bootshaus.tv, verifiziert): Auenweg 173, 51063 Köln. AG Köln HRB 77545. GF Tom Thomas.
// Ansprechpartner: Daniel Busenthuer (Recruiting). Bewerbungsfrist: 15.08. Quelle: join.com/companies/bootshaus
// Run: node generate-bewerbung.mjs companies/bootshaus-festival-produktionsassistenz.mjs

export default {
  slug: 'bootshaus-festival-produktionsassistenz',
  date: '30.07.2026',
  language: 'de',

  recipient: [
    'Bootshaus Cologne GmbH',
    'Herrn Daniel Busenthuer',
    'Auenweg 173',
    '51063 Köln',
  ],

  subject: 'Bewerbung als Festival Produktionsassistenz',

  jobKeywords: ['Organisation', 'Koordination', 'Veranstaltungen', 'Event', 'Office', 'Eigenverantwortung'],

  narrative: {
    kern: 'Ich verbinde Organisations- und Serviceerfahrung aus Gastronomie und Tourismus mit digitalem Handwerk.',
    passung: [
      'Events organisiert und vor Ort umgesetzt (eigenes Café und Catering)',
      'Koordination mit vielen Beteiligten aus der Reiseführung (Gruppen, Hotels, Anbieter)',
      'Office sicher, neue Programme schnell gelernt (als Softwareentwickler)',
    ],
  },

  company: {
    name: 'Bootshaus',
    mission: 'Das Bootshaus ist ein Kölner Club für elektronische Musik und veranstaltet ein großes Festival, das jährlich Hunderttausende Besucher anzieht.',
    verbindung: 'Hinter einem großen Festival steckt viel Organisation, und genau diese Arbeit im Hintergrund kenne ich aus Gastronomie und Tourismus.',
  },

  cv: {
    tagline: 'Organisation & Koordination · Events, Gastronomie, Tourismus',
    competencies: [],
    projects: [],
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Marketing &amp; Webentwicklung',
        bullets: ['Marketing, Social-Media-Content und Web für ein Reisebüro'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['1st Level Support: Anfragen per Telefon und E-Mail bearbeitet und gelöst'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung bei IT-Systemen und Netzwerken, erste Praxis in der IT-Infrastruktur'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer',
        bullets: ['Eigenes Café und Catering aufgebaut und geführt, Veranstaltungen eigenständig organisiert'] },
      { company: 'Tourismusbranche — Türkei', period: '2009 – 2014', role: 'Reiseführer &amp; Tourenverkauf',
        bullets: ['Gruppen betreut und Programme koordiniert, mehrsprachige Gästebetreuung'] },
    ],
    skills: [
      { category: 'Organisation & Produktion', items: 'Eventorganisation, Ablauf- und Terminkoordination, Aufbau und Logistik vor Ort, Eigenverantwortung, Arbeit unter Zeitdruck' },
      { category: 'Koordination & Kommunikation', items: 'Abstimmung mit Dienstleistern und Gästen, Gruppen- und Gästebetreuung, mehrsprachig (DE/EN/ES/TR), Reklamationsmanagement' },
      { category: 'Digital & Tools', items: 'MS Office, schnelle Einarbeitung in Projekt- und Planungstools, Social-Media-Content, sicherer Umgang mit Software (Webentwickler)' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Busenthuer,',
    paragraphs: [
      `ich bewerbe mich auf die Stelle als Festival Produktionsassistenz. Mein Hintergrund liegt im Tourismus und in der Gastronomie. Das sind zwei Bereiche, in denen Organisation und ein gutes Gästeerlebnis zusammenkommen. An größere Aufgaben gehe ich strukturiert heran und behalte auch dann den Überblick, wenn viele Dinge gleichzeitig laufen.`,

      `In Bonn habe ich mehrere Jahre mein eigenes Café und Catering aufgebaut und geführt. Für Veranstaltungen habe ich die Abläufe geplant, Termine abgestimmt und alles vor Ort umgesetzt. Dadurch weiß ich, wie man ein Event von der Planung bis zur Umsetzung trägt und unter Zeitdruck ruhig bleibt.`,

      `Auch aus dem Tourismus bringe ich Koordination mit. Als Reiseführer habe ich Gruppen betreut, Programme abgestimmt und eng mit Hotels und Anbietern zusammengearbeitet. Der Austausch mit vielen verschiedenen Beteiligten ist für mich Alltag. Mit internationalen Gästen komme ich mehrsprachig klar, auf Deutsch, Englisch, Spanisch und Türkisch.`,

      `Bootshaus zieht mit seinem Festival jedes Jahr Hunderttausende Menschen an, und hinter so einem Erlebnis steckt viel Organisation im Hintergrund. Genau dort möchte ich unterstützen. Mit Office und gängiger Planungssoftware arbeite ich sicher, und weil ich beruflich Software entwickle, finde ich mich in neuen Programmen sehr schnell zurecht. Einen eigenen Bereich in Eigenverantwortung zu führen, liegt mir.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
