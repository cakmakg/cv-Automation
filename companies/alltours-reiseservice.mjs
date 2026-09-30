// alltours flugreisen gmbh — Kundenberater im 24h-Reiseservice / Schichtdienst (m/w/d), Düsseldorf
// Rolle: Inbound-Reiseservice (Kundenkontakt zu gebuchten Reisen + Notfällen per Telefon/E-Mail,
//        Umbuchungen Hin-/Rückflug, Schichtdienst) — "für Quereinsteiger geeignet", mehrwöchige Schulung.
// PROFIL: TOURISMUS (bewerbung-tourismus.md) — Tourismus/Kundenkontakt führt, Marketing/Tech nur als
//        leichter Differenzierer ("lerne neue Systeme schnell"). KEINE Buchungssystem-Behauptung.
// Adresse (Impressum alltours.de, verifiziert): Berger Allee 15, 40213 Düsseldorf. GF: Willi Verhuven.
//        Kein namentlicher Ansprechpartner für DIESE Stelle ausgeschrieben (Portal-Bewerbung) → neutral.
// Quelle: jobblitz.de/jobad/REG29112265 (via Xing), Stellentitel auch auf StepStone/alltours-Karriere.
// Run: node generate-bewerbung.mjs companies/alltours-reiseservice.mjs
//
// HINWEIS: 1 erwarteter CV-Validator-ERROR ("EMLAK fehlt") — bewusste Abweichung für das
// Tourismus-Profil (EMLAK = IT-Praktikum, für eine Reiseservice-Rolle irrelevant). GIS bleibt drin,
// weil 1st-Level-Support (Telefon/E-Mail) direkt auf die Reiseservice-Hotline einzahlt.

export default {
  slug: 'alltours-reiseservice',
  date: '30.07.2026',
  language: 'de',

  recipient: [
    'alltours flugreisen gmbh',
    'Personalabteilung',
    'Berger Allee 15',
    '40213 Düsseldorf',
  ],

  subject: 'Bewerbung als Kundenberater im 24h-Reiseservice',

  jobKeywords: ['Reiseservice', 'Reiseberatung', 'Kundenbetreuung', 'Telefon', 'Schichtdienst', 'mehrsprachig'],

  narrative: {
    kern: 'Ich verbinde langjährige Tourismus-Praxis mit meiner heutigen Arbeit als Webentwickler.',
    passung: [
      'Tourismus aus der Praxis: als Reiseführer in der Türkei und heute in der Reiseberatung',
      'Nähe zur Reisebranche über Reisegesucht und Amondo, Produkte der Reiseveranstalter vertraut',
      'Technik trifft Service: als Webentwickler neue Buchungssysteme schnell gelernt',
    ],
  },

  company: {
    name: 'alltours',
    mission: 'alltours ist einer der großen europäischen Reiseveranstalter und steht für hochwertige Urlaubsreisen zu einem fairen Preis.',
    verbindung: 'Ich betreue Reisende an dem Punkt, an dem aus einer gebuchten Reise ein guter Urlaub wird: im direkten Kontakt, wenn Fragen oder Notfälle auftauchen.',
  },

  cv: {
    tagline: 'Reiseberatung & Reiseservice · Mehrsprachige Gästebetreuung',
    // Kein Profil-Block (User 30.07.2026: "profil bölümünü kaldir"). competencies=[] entfernt auch
    // die "Schwerpunkte:"-Fallback-Zeile → validate-cv meldet erwartet "Competencies array is empty"
    // (gleiches akzeptiertes Muster wie EN-Profil). ATS-Keywords sind über Tagline/Skills abgedeckt.
    competencies: [],
    projects: [],
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Reiseberatung & Marketing',
        bullets: ['Reiseberatung im direkten Kundenkontakt und Social-Media-Content für ein Reisebüro'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['1st Level Support: Anfragen per Telefon und E-Mail bearbeitet und gelöst'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung bei IT-Systemen und Netzwerken, erste Praxis in der IT-Infrastruktur'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer',
        bullets: ['Eigenes Café und Catering über drei Jahre geführt, volle Verantwortung für Kunden und Team'] },
      { company: 'Tourismusbranche — Türkei', period: '2009 – 2014', role: 'Reiseführer &amp; Tourenverkauf',
        bullets: ['Reiseführungen und Verkauf von Touren an Gäste, mehrsprachige Gästebetreuung'] },
    ],
    skills: [
      { category: 'Reiseservice & Beratung', items: 'Reiseberatung, Reisevertrieb, Angebotserstellung, Gästebetreuung, Reklamationsmanagement, Cross- und Upselling' },
      { category: 'Kundenkontakt & Service', items: 'Kundenbetreuung am Telefon und per E-Mail, 1st-Level-Support, Deeskalation, Servicequalität, Bereitschaft zum Schichtdienst' },
      { category: 'Sprachen & Digitales', items: 'mehrsprachige Gästebetreuung, Social-Media-Content, sicherer Umgang mit digitalen Tools, schnelle Einarbeitung in neue Systeme' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    // Vom User wörtlich vorgegebener Text (30.07.2026) — NICHT umformulieren.
    // Entfernt: Betreff/Anrede (eigene Felder), "Mit freundlichen Grüßen" + Name (Template ergänzt
    // Grußformel + Signatur automatisch) sowie die **fett**-Markierungen.
    paragraphs: [
      `mit großem Interesse bewerbe ich mich auf die Stelle als Kundenberater im 24h-Reiseservice.`,

      `Ich verbinde langjährige Erfahrung in der Tourismusbranche mit technischem Know-how als Webentwickler. Seit vielen Jahren bin ich im Tourismus tätig und kenne die Anforderungen der Branche aus der Praxis. In der Türkei war ich mehrere Jahre in einem Reisebüro beschäftigt und habe Reisende persönlich betreut sowie touristische Dienstleistungen verkauft. Dadurch habe ich gelernt, die Bedürfnisse von Gästen schnell zu erkennen und auch in anspruchsvollen Situationen serviceorientierte Lösungen zu finden.`,

      `Heute arbeite ich bei Reisegesucht.de im Bereich Marketing und Webentwicklung. Gleichzeitig bin ich als selbstständiger Reiseberater im Netzwerk von Amodo tätig. Dadurch stehe ich täglich im Austausch mit Kunden und nehme regelmäßig an Reiseveranstaltungen und Branchenevents im Raum Köln, Bonn und Düsseldorf teil. Die aktuellen Entwicklungen der Tourismusbranche sowie die Produkte verschiedener Reiseveranstalter sind mir daher bestens vertraut.`,

      `Neben meiner touristischen Erfahrung bringe ich auch unternehmerisches Denken mit. In Bonn habe ich mehrere Jahre erfolgreich mein eigenes Café- und Cateringunternehmen aufgebaut und geführt. Dort standen Kundenservice, Beratung und ein professioneller Umgang mit unterschiedlichsten Menschen jeden Tag im Mittelpunkt. Diese Erfahrung hat meine Kommunikationsstärke, meine Belastbarkeit und meine Serviceorientierung nachhaltig geprägt.`,

      `Als Webentwickler arbeite ich täglich mit modernen Softwarelösungen und digitalen Prozessen. Neue Programme und Buchungssysteme lerne ich schnell und arbeite mich zügig in neue Anwendungen ein. Ich verbinde technisches Verständnis mit einer ausgeprägten Kundenorientierung und sehe darin einen großen Vorteil für den modernen Reiseservice.`,

      `ich kommuniziere gerne mit Menschen unterschiedlicher Kulturen. Freundlichkeit, Zuverlässigkeit und eine lösungsorientierte Arbeitsweise sind für mich selbstverständlich.`,

      `Ich freue mich darauf, meine Erfahrungen im Tourismus, im Kundenservice und in der digitalen Arbeitswelt in Ihr Unternehmen einzubringen und Sie in einem persönlichen Gespräch kennenzulernen.`,
    ],
  },
};
