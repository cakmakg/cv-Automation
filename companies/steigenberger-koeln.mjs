// Steigenberger Hotel Köln — Reservation Supervisor
// Betreiber (juristische Person): SHK Hotel Betriebsgesellschaft mbH, Habsburgerring 9-13, 50674 Köln
// Hotellerie-CV-Variante: Reservierung/Gästeservice + Führung (Gastro-Selbstständigkeit) vorne;
// Reise-Tech (Hotelbeds-Buchung) als Systemaffinitäts-Plus. Tourismus = Fach-Story.
// Run: node generate-bewerbung.mjs companies/steigenberger-koeln.mjs

export default {
  slug: 'steigenberger-koeln',
  date: '08.06.2026',
  language: 'de',

  recipient: [
    'SHK Hotel Betriebsgesellschaft mbH',
    'Steigenberger Hotel Köln',
    'Habsburgerring 9-13',
    '50674 Köln',
  ],

  subject: 'Bewerbung als Reservation Supervisor',

  cv: {
    tagline: 'Hotellerie & Reservierung · Gästebetreuung · Buchungssysteme · Team & Service',
    competencies: [
      'Reservierung & Buchung',
      'Gästebetreuung & Service',
      'Einzel- & Gruppenreservierungen',
      'Buchungs- & PMS-Systeme',
      'Team & Führung (Selbstständigkeit)',
      'Mehrsprachig (DE/EN/ES/TR)',
    ],

    experience: [
      {
        company: 'Reisegesucht.de',
        period: '02/2026 – heute',
        role: 'Reisebüro-Mitarbeiter',
        bullets: [
          'Reservierungen, Buchungen und Beratung im direkten Gästekontakt; tägliche Arbeit mit Buchungssystemen sowie Betreuung von Social-Media- und Marketing-Themen',
        ],
      },
      {
        company: 'Mobile Coffee Bar &amp; Catering — Bonn',
        period: '2020 – 2023',
        role: 'Gründer &amp; Geschäftsführer (Selbstständiger Unternehmer)',
        bullets: [
          'Aufbau und Leitung eines Gastronomie-/Catering-Betriebs — Team- und Ablauforganisation, Gästeservice, Finanzen und Logistik in voller Verantwortung',
        ],
      },
      {
        company: 'Tourismusbranche — Türkei',
        period: '2009 – 2014',
        role: 'Reiseführer & Tourenverkauf',
        bullets: [
          'Mehrsprachige Gästebetreuung (Deutsch, Spanisch, Türkisch) sowie Verkauf von Touren und Ausflügen direkt an Gäste',
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
        title: 'Otonom-Travelagency — KI-gestützte Reise- & Buchungsplattform',
        stack: 'Hotelbeds · Amadeus · Stripe',
        desc: 'Selbst entwickelte Plattform mit echten Anbindungen an Hotel- (Hotelbeds), Flug- (Amadeus) und Zahlungssysteme (Stripe) — automatisiert Anfrage, Angebot und Buchung. Zeigt fundiertes Verständnis für Reservierungs- und Buchungsprozesse.',
      },
      {
        title: 'Prozess- & Marketing-Automatisierung',
        stack: 'KI-Tools · Social Media · n8n',
        desc: 'Automatisierung wiederkehrender Aufgaben (Reporting, Content, Datenpflege) mit KI-Tools — Effizienz-Plus, das sich auf Reservierungs- und Backoffice-Abläufe übertragen lässt.',
      },
    ],

    skills: [
      { category: 'Reservierung & Front Office', items: 'Reservierungsannahme und -bearbeitung, Einzel-/Gruppenbuchungen, Buchungs-/PMS-Affinität (schnelle Einarbeitung, z. B. Opera), Datenpflege, Verkauf & Upselling' },
      { category: 'Gästeservice & Sprachen', items: 'Gästebetreuung, Beschwerde-/Reklamationsmanagement, serviceorientierte Kommunikation; Deutsch (fließend), Englisch (gut), Spanisch (gut), Türkisch (Muttersprache)' },
      { category: 'Führung & Organisation', items: 'Team- und Ablauforganisation aus eigener Gastronomie-Selbstständigkeit, Schicht-/Aufgabenkoordination, Qualitäts- und Serviceorientierung' },
      { category: 'Systeme & Tools', items: 'Buchungs-/Reise-APIs (Hotelbeds, Amadeus), MS Office, Prozess- und KI-gestützte Automatisierung als Effizienz-Plus' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung
      `mit Ihrer Ausschreibung für die Position als Reservation Supervisor sprechen Sie genau die Mischung an, die meinen beruflichen Weg ausmacht: Reservierung und Verkauf, persönlicher Gästeservice und die Verantwortung für reibungslose Abläufe. Deshalb bewerbe ich mich gerne bei Ihnen im Steigenberger Hotel Köln.`,

      // Block 2 — Reservierung & Gästeservice (Fach)
      `Aktuell bin ich im Reisebüro bei Reisegesucht.de tätig, wo ich täglich Reservierungen und Buchungen bearbeite, Gäste berate und mit Buchungssystemen arbeite. Den direkten Gästekontakt und die Hotellerie-Logik kenne ich darüber hinaus aus mehreren Jahren als Reiseführer, in denen ich Gäste mehrsprachig (Deutsch, Spanisch, Türkisch) betreut und Leistungen verkauft habe. Reservierungsanfragen sauber und schnell zu bearbeiten, im Verkaufsgespräch passende Angebote zu finden und auch bei Reklamationen freundlich und lösungsorientiert zu bleiben, gehört für mich selbstverständlich dazu.`,

      // Block 3 — Führung + Systemaffinität
      `Verantwortung und Führung sind für mich nicht neu: Über drei Jahre habe ich ein eigenes Gastronomie- und Catering-Unternehmen in Bonn aufgebaut und geleitet — mit Team, Abläufen, Finanzen und einem klaren Anspruch an Servicequalität. Diese Erfahrung möchte ich als Supervisor in Ihr Reservierungsteam einbringen. Hinzu kommt eine ausgeprägte Affinität zu Systemen: Ich arbeite mich schnell in neue Buchungs- und Reservierungssoftware ein und habe selbst eine KI-gestützte Buchungsplattform mit echten Anbindungen an Hotel- und Zahlungssysteme entwickelt. Wiederkehrende Aufgaben automatisiere ich gerne, damit mehr Zeit für den Gast bleibt.`,

      // Block 4 — Value Proposition
      `Für das Steigenberger Hotel Köln bringe ich damit Gästeorientierung, Verkaufsgespür und Organisationsstärke zusammen — und ein echtes Verständnis dafür, wie Reservierungsprozesse und die dahinterliegenden Systeme funktionieren. Ich packe im Tagesgeschäft mit an, behalte auch bei hohem Aufkommen den Überblick und sorge dafür, dass Buchungen, Daten und Abläufe stimmen.`,

      // Block 5 — Persönlichkeit + Abschluss
      `Mein Weg ist nicht klassisch verlaufen — von der Tourismusbranche über die eigene Selbstständigkeit bis zu Umschulungen im IT-Bereich. Was sich durchzieht, ist die Freude am direkten Kontakt mit Menschen und der Wille, Dinge gut und zuverlässig zu organisieren. Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
