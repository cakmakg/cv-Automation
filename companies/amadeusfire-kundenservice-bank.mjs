// Amadeus Fire AG (Personalvermittlung) — Mitarbeiter Kundenservice Bank (m/w/d), Köln, Vollzeit
// Rolle: digitaler Kundenservice einer Bank (Telefon/Chat/E-Mail), Beratung zu Bankprodukten, Bedarf
//   erkennen & weiterleiten, Termine koordinieren, Vertrieb/Outbound unterstützen, Servicequalität.
// PROFIL: KUNDENSERVICE + DIGITAL (User-Entscheidung 30.07.2026). Kein Tourismus-Lead.
//   Ehrliche Bausteine: Kundenkontakt Telefon/schriftlich (GIS-Support), Beratung & Verkauf (Reiseberatung,
//   Café), Serviceorientierung, Digitalaffinität (Entwickler). GEFORDERT: kaufm. Ausbildung (Bank/Versich./
//   Dienstleistung) → NICHT behaupten, NICHT negieren; Bankwissen "einarbeiten".
// Adresse (Niederlassung Köln, Telefon der Anzeige passt): Im Mediapark 5, 50670 Köln.
// Ansprechpartner: Christopher Schulz. Referenz 16-242548. Quelle: linkedin.com/jobs/view/4446813448
// Run: node generate-bewerbung.mjs companies/amadeusfire-kundenservice-bank.mjs

export default {
  slug: 'amadeusfire-kundenservice-bank',
  date: '30.07.2026',
  language: 'de',

  recipient: [
    'Amadeus Fire AG',
    'Herrn Christopher Schulz',
    'Im Mediapark 5',
    '50670 Köln',
  ],

  subject: 'Bewerbung als Mitarbeiter im Kundenservice Bank (Referenz 16-242548)',

  jobKeywords: ['Kundenservice', 'Beratung', 'Telefon', 'Verkauf', 'Servicequalität'],

  narrative: {
    kern: 'Ich bin seit Jahren im Kundenkontakt und verbinde Service und Beratung mit Digitalaffinität.',
    passung: [
      'Kundenkontakt am Telefon und schriftlich (Support, Reiseberatung, Café)',
      'Beratung und Verkauf, Bedarf erkennen und weiterleiten',
      'Digitale Kanäle sicher, neue Systeme schnell gelernt',
    ],
  },

  company: {
    name: 'Kundenservice Bank',
    mission: 'Im digitalen Kundenservice einer Bank zählen schnelle Erreichbarkeit, gute Beratung und Servicequalität.',
    verbindung: 'Ich komme aus dem Service und dem direkten Kundenkontakt, und genau das braucht ein guter Kundenservice in der Bank.',
  },

  cv: {
    tagline: 'Kundenservice & Beratung · Telefon, digital, persönlich',
    competencies: [],
    projects: [],
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Kundenkontakt &amp; Marketing',
        bullets: ['Kundenkontakt und Beratung, Content für ein Reisebüro'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['Anfragen am Telefon und schriftlich aufgenommen und gelöst, hohe Servicequalität'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung bei IT-Systemen und Netzwerken'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer',
        bullets: ['Eigenes Café und Catering geführt: Kundenberatung, Verkauf und Kasse'] },
      { company: 'Tourismusbranche — Türkei', period: '2009 – 2014', role: 'Reiseführer &amp; Tourenverkauf',
        bullets: ['Gäste beraten und Touren verkauft, mehrsprachige Betreuung'] },
    ],
    skills: [
      { category: 'Kundenservice & Beratung', items: 'Kundenkontakt am Telefon und schriftlich, Beratung und Verkauf, Bedarfsanalyse, Reklamationsmanagement, Servicequalität' },
      { category: 'Digital & Tools', items: 'sicherer Umgang mit digitalen Kanälen, MS Office, schnelle Einarbeitung in neue Systeme (Softwareentwickler)' },
      { category: 'Persönlich & Sprachen', items: 'Zuverlässigkeit, Kommunikationsstärke, Teamarbeit, Belastbarkeit, mehrsprachig (DE/EN/ES/TR)' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Schulz,',
    paragraphs: [
      `ich bewerbe mich auf die Stelle im Kundenservice. Kundenkontakt am Telefon und schriftlich ist für mich seit Jahren Alltag. An jede Anfrage gehe ich ruhig und lösungsorientiert heran und höre zuerst zu, bevor ich berate.`,

      `Zuletzt habe ich im technischen Support gearbeitet und dort Anfragen von Nutzern am Telefon und schriftlich aufgenommen und gelöst. Davor habe ich in der Reiseberatung und in meinem eigenen Café Kunden beraten und verkauft. Dadurch weiß ich, wie man auch bei hohem Aufkommen freundlich bleibt und Anliegen zügig klärt.`,

      `Beratung und Verkauf gehören für mich zusammen. Ich erkenne, was ein Kunde wirklich braucht, und leite ihn bei Bedarf an die richtige Stelle weiter. Mit digitalen Kanälen und Tools arbeite ich sicher, denn ich entwickle beruflich selbst Software. Neue Systeme lerne ich dadurch schnell.`,

      `Im Kundenservice einer Bank kommt es auf schnelle Erreichbarkeit und gute Beratung an. Darauf lege ich Wert. Ich bin zuverlässig, behalte auch bei vielen Anfragen den Überblick und arbeite gern in einem Team, das Servicequalität ernst nimmt. In die Bankprodukte arbeite ich mich gründlich ein.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
