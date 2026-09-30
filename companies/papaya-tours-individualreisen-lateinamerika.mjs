// Papaya Tours GmbH — Touristikfachkraft & Kundenberater (m/w/d) Lateinamerika Individualreisen, Köln
// Rolle: Kundenberatung und Verkauf per Telefon/Mail, Angebotserstellung und Kalkulation von
//        Individualreisen, Buchung mit Zielgebietsagenturen, Flugleistungen, operative Abwicklung
//        (Rechnungsstellung, Reiseunterlagen), Produktentwicklung, Datenpflege. Hybrid, ab sofort.
// PROFIL: TOURISMUS (bewerbung-tourismus.md) — Tourismus führt. Differenzierer hier: SPANISCH
//        (Studium Uni Istanbul) + Deutsch C1 (Anzeige fordert exakt „mind. C1") + Beratungspraxis.
//        Marketing bewusst NICHT als Differenzierer, die Anzeige verlangt es nicht.
//        KEINE Buchungssystem-/CRS-Behauptung (Ehrlichkeits-Regel Tourismus-Profil).
// Adresse (Impressum papayatours.de, verifiziert): Josef-Lammerting-Allee 25, 50933 Köln.
//        Geschäftsführer Ingo Nösse, HRB 54113 AG Köln.
// Ansprechpartnerin: In der Anzeige wörtlich als „Frau Susanne Blunk" genannt (s.blunk@papayatours.de)
//        → Anrede belegt, nicht aus dem Vornamen abgeleitet. Bewerbung laut Anzeige per Mail an sie.
// Quelle: xing.com/jobs/...-155918203 (Abruf blockiert) → Volltext über remotely.de + papayatours.de/stellenangebote.
//        Xing-Slug nennt „lateinamerika-asien"; Papaya schreibt beide Regionen GETRENNT aus.
//        Gewählt: Lateinamerika (Spanisch ist der Passungspunkt), Kontakt Susanne Blunk gehört zu dieser Anzeige.
//
// ⚠️ OFFENE ANFORDERUNG (dem User gemeldet): „Sehr gute Lateinamerika-Destinationskenntnisse".
//    Nicht vorhanden. Im Brief ehrlich als Aufbau formuliert, NICHT behauptet und NICHT negiert
//    (feedback_anschreiben_keine_gap_negation).
//
// Run: node generate-bewerbung.mjs companies/papaya-tours-individualreisen-lateinamerika.mjs

export default {
  slug: 'papaya-tours-individualreisen-lateinamerika',
  date: '05.08.2026',
  language: 'de',

  recipient: [
    'Papaya Tours GmbH',
    'Frau Susanne Blunk',
    'Josef-Lammerting-Allee 25',
    '50933 Köln',
  ],

  subject: 'Bewerbung als Touristikfachkraft und Kundenberater für Individualreisen Lateinamerika',

  jobKeywords: [
    'Individualreisen',
    'Kundenberatung',
    'Angebotserstellung',
    'Reiseveranstalter',
    'Lateinamerika',
    'Spanisch',
    'Telefon',
  ],

  narrative: {
    kern: 'Ich berate und verkaufe Reisen im direkten Gespräch, mit Spanisch als zweiter Sprache und einem Blick für die Abwicklung dahinter.',
    passung: [
      'Spanisch aus dem Studium an der Universität Istanbul, dazu mehrjährige Praxis als Reiseführer im direkten Gästekontakt',
      'Kundenberatung und Verkauf am Telefon und per Mail bei Reisegesucht.com in Köln, inklusive Angebotserstellung',
      'Kalkulation und operative Abwicklung aus drei Jahren eigener Selbstständigkeit, Rechnungen und Termine inbegriffen',
    ],
  },

  company: {
    name: 'Papaya Tours',
    mission: 'Papaya Tours baut als Reiseveranstalter Erlebnisreisen nach Lateinamerika individuell für den einzelnen Gast und arbeitet dafür mit eigenen Agenturen in den Zielgebieten.',
    verbindung: 'Individuell zugeschnittene Reisen entstehen im Gespräch mit dem Gast, und genau dort arbeite ich seit Jahren.',
  },

  cv: {
    tagline: 'Individualreisen & Reiseberatung · Spanisch & Gästebetreuung',
    // Wie tui-tourismuskaufmann-koeln / tourlane: kein Profil-Block, competencies=[] entfernt auch
    // die "Schwerpunkte:"-Fallback-Zeile → validate-cv meldet erwartet "Competencies array is empty".
    competencies: [],
    projects: [],
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Reiseberatung &amp; Verkauf',
        bullets: ['Kundenberatung und Verkauf am Telefon und per Mail, Angebote von Reiseveranstaltern'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['Kundenanfragen per Telefon und Mail aufgenommen, priorisiert und dokumentiert'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung bei IT-Systemen und Netzwerken, Praxis im Umgang mit Software'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer',
        bullets: ['Eigenes Café und Catering geführt: Kalkulation, Rechnungen, Einkauf und Team'] },
      { company: 'Tourismusbranche — Türkei', period: '2009 – 2014', role: 'Reiseführer &amp; Tourenverkauf',
        bullets: ['Reiseführungen und Verkauf von Touren an Gäste, mehrsprachige Gästebetreuung'] },
    ],
    skills: [
      { category: 'Individualreisen & Beratung', items: 'Kundenberatung und Verkauf am Telefon und per Mail, Angebotserstellung, Kalkulation, Reklamationsmanagement, Cross- und Upselling' },
      { category: 'Zielgebiete & Sprachen', items: 'Spanisch aus dem Studium, Destinationswissen Türkei, Lateinamerika im Aufbau, mehrsprachige Gästebetreuung' },
      { category: 'Organisation & Digitales', items: 'Rechnungsstellung und Kundenpflege aus eigener Selbstständigkeit, sicherer Umgang mit Office- und Webanwendungen, schnelle Einarbeitung in neue Systeme' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Blunk,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Touristikfachkraft und Kundenberater für Individualreisen Lateinamerika. Bei Reisegesucht.com in Köln arbeite ich in der Reiseberatung und im Verkauf. Davor war ich in der Türkei mehrere Jahre als Reiseführer tätig. Spanisch habe ich an der Universität Istanbul studiert.`,

      `Als Reiseveranstalter stellen Sie Erlebnisreisen nach Lateinamerika individuell für den einzelnen Gast zusammen und arbeiten dafür mit eigenen Agenturen in den Zielgebieten. Kundenberatung und Verkauf laufen bei mir heute genauso. Ich nehme die Anfrage am Telefon oder per Mail auf und baue daraus ein Angebot, das zu dem passt, was der Gast wirklich sucht. Als Reiseführer habe ich Touren direkt an Gäste verkauft und dabei gesehen, wie unterschiedlich Reisende dasselbe Ziel erleben. Dadurch stelle ich in der Beratung heute andere Fragen.`,

      `Lateinamerika erarbeite ich mir gerade als Zielgebiet, so wie ich mir die Türkei damals erarbeitet habe. Ein Ziel kenne ich dann, wenn ich weiß, für welchen Gast es passt. Spanisch hilft mir dabei, weil ich Quellen und Partner vor Ort in ihrer Sprache lesen kann. Ihre drei Tage Sonderurlaub für Portfolioreisen wären für mich genau der richtige Weg, das schneller zu vertiefen.`,

      `Angebotserstellung und Kalkulation gehören für mich zusammen. Drei Jahre lang habe ich in Bonn ein eigenes Café mit Catering geführt und dort Rechnungen, Einkauf und Termine selbst verantwortet. Gepflegte Daten und nachvollziehbare Vorgänge sind für mich deshalb kein lästiger Anhang, sondern Teil der Beratung. Sie bekommen jemanden, der verkauft und die Abwicklung dahinter zuverlässig mitträgt.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
