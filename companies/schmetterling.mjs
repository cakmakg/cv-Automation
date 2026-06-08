// Schmetterling International — INITIATIVBEWERBUNG
// Reisespezialist + Marketing, mit Developer-/KI-Skills als Differenzierer.
// Schmetterling = größte unabhängige Reisevertriebs-Kooperation Europas MIT eigener
// Technologie (CRS, NEO, ARGUS) + aktuelle KI-/Automatisierungslösungen für den Reisevertrieb.
// Touristik-CV-Variante: echte Reise-Berufserfahrung steht vorne (cv.experience-Override).
// Run: node generate-bewerbung.mjs companies/schmetterling.mjs

export default {
  slug: 'schmetterling',
  date: '08.06.2026',
  language: 'de',

  recipient: [
    'Schmetterling International GmbH & Co. KG',
    'Geschwand 131',
    '91286 Obertrubach-Geschwand',
  ],

  subject: 'Initiativbewerbung als Reisespezialist mit Marketing- und Tech-Profil',

  cv: {
    tagline: 'Reisespezialist · Beratung & Verkauf · Touristik-Marketing · Reise-Tech & KI-Automatisierung',
    competencies: [
      'Reiseberatung & -verkauf',
      'Gruppen- & Individualreisen',
      'Touristik-Marketing & Social Media',
      'Reise-Tech & Buchungssysteme',
      'KI-Automatisierung für Touristik',
      'Mehrsprachige Gästebetreuung',
    ],

    // Touristik-Berufserfahrung VORNE (überschreibt den Tech-Default)
    experience: [
      {
        company: 'Reisegesucht.de (Schmetterling-Partner)',
        period: '02/2026 – heute',
        role: 'Reisebüro-Mitarbeiter',
        bullets: [
          'Reiseberatung und -verkauf im direkten Kundenkontakt; tägliche Arbeit mit der Schmetterling-Kooperation und ihren Systemen; Social-Media-Content sowie IT-/Netzwerk- und Marketing-Betreuung',
        ],
      },
      {
        company: 'Tourismusbranche — Türkei',
        period: '2009 – 2014',
        role: 'Reiseführer & Tourenverkauf',
        bullets: [
          'Reiseführungen und Verkauf von Touren/Ausflügen direkt an Gäste; mehrsprachige Gästebetreuung (Deutsch, Spanisch, Türkisch)',
        ],
      },
      {
        company: 'Mobile Coffee Bar &amp; Catering — Bonn',
        period: '2020 – 2023',
        role: 'Gründer &amp; Geschäftsführer (Selbstständiger Unternehmer)',
        bullets: [
          'Gründung und Leitung eines Gastronomie-/Catering-Unternehmens — volle Verantwortung für Kundenbetreuung, Finanzen, Logistik und Team',
        ],
      },
      {
        company: 'IT-Praktika — GIS GmbH &amp; Vidinli Software, Bonn',
        period: '2025 – 2026',
        role: 'IT-Support & Frontend-Entwicklung (im Rahmen der Umschulung)',
        bullets: [
          '1st-Level-IT-Support sowie Frontend-Entwicklung mit <strong>React.js</strong> / <strong>TypeScript</strong>',
        ],
      },
    ],

    projects: [
      {
        title: 'Otonom-Travelagency — Autonome KI-Reiseagentur',
        stack: 'Amadeus · Hotelbeds · Stripe · KI-Automatisierung',
        desc: 'Selbst entwickelte KI-Reiseplattform mit echten Anbindungen an Flug-, Hotel- und Zahlungssysteme (Amadeus, Hotelbeds, Stripe) — automatisiert Beratung, Angebot und Buchung. Genau die Themen der Schmetterling Technology.',
      },
      {
        title: 'werbung-otomation — KI-Marketing-Pipeline (Tourismus)',
        stack: 'KI-Agenten · fal.ai · Social Media',
        desc: 'KI-Pipeline, die Werbe- und Social-Media-Assets in Volumen, aber markenkonform erzeugt — aktiv u. a. im Tourismus-Sektor.',
      },
      {
        title: 'Freelance — Social Media & Performance Marketing',
        stack: 'Facebook Ads · Google Ads · Content',
        desc: 'Kampagnen über Facebook und Google Ads plus Content-Erstellung; Auswertung von Reichweite und Conversion und laufende Optimierung.',
      },
    ],

    skills: [
      { category: 'Touristik & Vertrieb', items: 'Reiseberatung und -verkauf, Gruppen-/Individualreisen, Reiseführung, Gästebetreuung, Reklamationsmanagement, Cross- und Upselling' },
      { category: 'Marketing & Social Media', items: 'Social-Media-Content, Facebook & Google Ads, Content-Erstellung, KPI-Auswertung (Reichweite, Conversion), KI-gestütztes Marketing' },
      { category: 'Reise-Tech & Entwicklung', items: 'Reise-/Buchungssysteme & APIs (Amadeus, Hotelbeds, Stripe), KI-Automatisierung, React/TypeScript, n8n Workflow-Automatisierung, IT-/Netzwerk-Support' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung (Initiativ + authentischer Partner-Bezug)
      `über meine Arbeit im Reisebüro Reisegesucht.de, einem Schmetterling-Partner, kenne ich Ihr Haus bereits aus der täglichen Praxis — und genau deshalb bewerbe ich mich initiativ bei Ihnen. Schmetterling verbindet unter einem Dach, was auch bei mir zusammengehört: Touristik, Vertrieb, Marketing und eigene Technologie. Diese Kombination möchte ich gerne direkt bei Ihnen einbringen, idealerweise im Reisevertrieb, im Marketing oder an der Schnittstelle zur Schmetterling Technology.`,

      // Block 2 — Touristik-Fachkompetenz
      `Die Tourismusbranche ist für mich kein Neuland. Während und nach meinem Studium der spanisch-türkischen Übersetzung habe ich mehrere Jahre als Reiseführer gearbeitet und Touren direkt an Gäste verkauft — mehrsprachig, im persönlichen Kundenkontakt und mit klarem Gespür dafür, was Reisende wirklich suchen. Aktuell bin ich im Reisebüro bei Reisegesucht.de tätig, wo ich berate und verkaufe und parallel die Social-Media-Inhalte sowie IT- und Marketing-Themen betreue. Reiseberatung, Angebotslogik und der Umgang mit Buchungs- und Reisevertriebssystemen gehören damit zu meinem Alltag.`,

      // Block 3 — Marketing + Tech-Showcase
      `Was mich von einem klassischen Reiseverkäufer unterscheidet, ist die technische und die Marketing-Seite. Im Marketing steuere ich Kampagnen über Facebook und Google Ads und erstelle Social-Media-Content, den ich an Kennzahlen wie Reichweite und Conversion ausrichte. Auf der Technikseite entwickle ich eigene Reise-Software, unter anderem eine autonome, KI-gestützte Reiseagentur mit echten Anbindungen an Flug-, Hotel- und Zahlungssysteme (Amadeus, Hotelbeds, Stripe), die Beratung, Angebot und Buchung automatisiert. Das ist genau die Richtung — digitale Entlastung im Reisevertrieb durch Automatisierung und KI —, die Schmetterling Technology derzeit vorantreibt.`,

      // Block 4 — Value Proposition
      `Für Schmetterling sehe ich darin einen doppelten Nutzen: Ich kann sofort im Reisevertrieb und im Marketing mitarbeiten — beraten, verkaufen, Inhalte erstellen — und gleichzeitig die Brücke zur Technik schlagen, also Prozesse automatisieren, Buchungs- und Marketing-Tools verbessern und KI sinnvoll in den touristischen Alltag bringen. Weil ich beide Welten aus eigener Praxis kenne, kann ich zwischen Touristik, Marketing und Entwicklung übersetzen, statt nur in einer davon zu denken.`,

      // Block 5 — Persönlichkeit + Abschluss-Einladung
      `Mein Weg ist nicht klassisch verlaufen: vom Tourismus über eine eigene Selbstständigkeit in Bonn bis zu den Umschulungen zum Fachinformatiker und Full-Stack-Developer. Was sich durchzieht, ist der direkte Kundenkontakt und die Lust, Dinge selbst aufzubauen und zu verbessern. In neue Systeme arbeite ich mich schnell ein und übernehme gerne Verantwortung. Über die Gelegenheit, meine Mischung aus Touristik, Marketing und Technologie bei Schmetterling persönlich vorzustellen, freue ich mich sehr.`,
    ],
  },
};
