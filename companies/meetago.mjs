// meetago — Sales Development Representative (SDR)
// Troisdorf / Hybrid / Remote · Region Köln-Bonn · Deutsch
// Profil-Mix: Tourismus/Gastronomie (Kundenkontakt) + Marketing (Lead-Gen/Ads) + Tech (SaaS-/KI-Verständnis)
// meetago = "Agentic Operating System for Meetings & Groups" (Geschäftsreise/MICE/Gruppen)
// Run: node generate-bewerbung.mjs companies/meetago.mjs

export default {
  slug: 'meetago',
  date: '06.06.2026',
  language: 'de',

  recipient: [
    'meetago GmbH',
    'Junkersring 5',
    '53844 Troisdorf',
  ],

  subject: 'Bewerbung als Sales Development Representative',

  // --- CV: SALES-Variante — Kundenkontakt, Lead-Gen und SaaS-/KI-Verständnis im Vordergrund.
  //     Berufserfahrung (Café/Catering-Gründung, Praktika) ist im Template fest verdrahtet. ---
  cv: {
    tagline: 'Sales Development · Kundenkontakt & Outbound · SaaS- & KI-Verständnis · Datengetriebenes Marketing',
    competencies: [
      'Lead-Generierung · Outbound',
      'Kundenkontakt · Akquise',
      'SaaS- & Plattform-Verständnis',
      'Facebook & Google Ads',
      'KPI- & Funnel-Denken',
      'CRM & KI-Tools im Vertrieb',
    ],
    projects: [
      {
        title: 'Otonom-Travelagency — Autonome KI-Reiseagentur (B2B SaaS)',
        stack: 'Reise · Gruppen · Buchung · Stripe · Multi-API',
        desc: 'KI-gestützte Reiseplattform mit echten Anbindungen an Flug-, Hotel- und Zahlungssysteme — genau das Umfeld aus Reise, Gruppen und Buchung, in dem auch meetago arbeitet.',
      },
      {
        title: 'AI Orchestra — Automatisierte Outreach- & Recherche-Pipeline',
        stack: 'Multi-Agent · E-Mail · Social · Datenrecherche',
        desc: 'Mehrere KI-Agenten automatisieren Recherche und Ansprache über E-Mail und weitere Kanäle — datengetriebenes Outbound: aus vielen Signalen die relevanten Kontakte herausfiltern.',
      },
      {
        title: 'Freelance — Marketing & Lead-Generierung für Supermärkte',
        stack: 'Facebook Ads · Google Ads · KPI-Auswertung',
        desc: 'Kampagnensteuerung über Facebook und Google Ads: Zielgruppen ansprechen, Kennzahlen wie Klickrate und Conversion auswerten und laufend optimieren.',
      },
    ],
    skills: [
      { category: 'Vertrieb & Kundenkontakt', items: 'Outbound, Lead-Generierung, Akquise, Kundenansprache, Beziehungsaufbau, Einwandbehandlung, Belastbarkeit' },
      { category: 'Marketing & Daten', items: 'Facebook Ads, Google Ads, Funnel- und KPI-Denken (CTR, Conversion), A/B-Tests, Reporting' },
      { category: 'SaaS, Tech & Tools', items: 'SaaS-/Plattform-Geschäftsmodelle, KI- und Automatisierungssysteme, CRM-/Sales-Systeme, n8n, schnelle Einarbeitung' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung
      `ich habe Ihre Ausschreibung für die Position als Sales Development Representative gelesen und bewerbe mich gerne darauf. Mit dem agentischen Betriebssystem für Meetings und Gruppen entwickelt meetago ein Produkt, das ich aus zwei Richtungen verstehe: als jemand, der seit Jahren im direkten Kundenkontakt steht, und als jemand, der heute selbst KI- und Automatisierungssysteme baut. Genau diese Kombination möchte ich in den Aufbau qualifizierter Vertriebschancen für Ihr Team einbringen.`,

      // Block 2 — Fachliche Kompetenz (Sales/Outbound)
      `Vertrieb bedeutet für mich, die richtigen Gesprächspartner zu finden, ihr Geschäft zu verstehen und einen guten Grund zu liefern, warum sich ein Gespräch lohnt — nicht möglichst viele Anrufe, sondern die relevanten. Aus meiner Selbstständigkeit und aus der Freelance-Betreuung mehrerer Supermärkte kenne ich Akquise und Kundenansprache aus der Praxis: Zielgruppen ansprechen, Angebote positionieren, mit Einwänden und Absagen umgehen und trotzdem dranbleiben. Dabei arbeite ich strukturiert und datengetrieben — Kampagnen über Facebook und Google Ads habe ich entlang klarer Kennzahlen ausgewertet und Schritt für Schritt verbessert. Dieses Denken in Funnel, Qualifizierung und sauberer Dokumentation übertrage ich direkt auf CRM- und Sales-Systeme.`,

      // Block 3 — Showcase (SaaS-/Produktverständnis)
      `Einen Vorteil bringe ich mit, den nur wenige im Vertrieb haben: Ich verstehe das Produkt, über das ich spreche, von innen. Ich baue selbst SaaS- und KI-Anwendungen, unter anderem eine autonome KI-Reiseagentur mit echten Anbindungen an Flug-, Hotel- und Zahlungssysteme — also genau das Umfeld aus Reise, Gruppen und Buchung, in dem meetago unterwegs ist. In einem weiteren System orchestriere ich mehrere KI-Agenten, die Recherche und Ansprache über mehrere Kanäle automatisieren. Dadurch kann ich mit Entscheidern auf Augenhöhe über Plattformen, Automatisierung und konkreten Nutzen sprechen, statt nur ein Skript abzulesen — gerade bei einem erklärungsbedürftigen, agentischen Produkt ein echter Hebel.`,

      // Block 4 — Value Proposition
      `Für Ihr Sales-Team bringe ich damit drei Dinge zusammen: den belastbaren Kundenkontakt aus Gastronomie und Tourismus, das datengetriebene Vorgehen aus dem Online-Marketing und ein echtes Verständnis für SaaS- und Plattformgeschäft. Mir ist wichtig, dass Outbound nicht nach Kaltakquise von der Stange klingt, sondern relevant und vorbereitet ist — qualifizierte Termine, die für Ihre Kolleginnen und Kollegen im Vertrieb wirklich Wert haben.`,

      // Block 5 — Persönlichkeit + Abschluss-Einladung
      `Vor meinen Umschulungen zum Fachinformatiker und Full-Stack-Developer war ich in der Tourismusbranche tätig und habe anschließend ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Dort habe ich gelernt, wie man Menschen gewinnt, auf Feedback reagiert und auch nach einem Nein weitermacht. Ich arbeite mich schnell in neue Tools ein und würde als erste Stimme von meetago gerne neue Kundenbeziehungen aufbauen. Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
