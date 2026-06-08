// MARKETING-VORLAGE — kopieren zu companies/[firma].mjs und anpassen.
// Anschreiben-Bausteine kommen aus bewerbung-marketing.md (NICHT bewerbung.md).
// Lebenslauf (cv) bleibt IDENTISCH zur Tech-Bewerbung (Quelle: cv.md).
// Run: node generate-bewerbung.mjs companies/[firma].mjs
//
// Block-Auswahl je Rolle (siehe bewerbung-marketing.md Anpassungs-Workflow):
//   Online/Performance · Content/Social · GEO-AEO
// Dieses Beispiel ist Online/Performance + GEO-AEO gemischt — Blöcke nach JD tauschen.

export default {
  slug: 'marketing-beispiel',
  date: '02.06.2026',
  language: 'de',

  recipient: [
    '[Firmenname GmbH]',
    '[Straße und Hausnummer]',
    '[PLZ Ort]',
  ],

  subject: 'Bewerbung als [Online Marketing Manager]',

  // --- CV: MARKETING-Variante (Tech-trifft-Marketing). Der Tech-CV (cv.md) bleibt unberührt.
  //     Diese Variante stellt AI-Marketing, Freelance-Praxis und Web/Tech in den Vordergrund. ---
  cv: {
    tagline: 'Fullstack Web Developer · AI-Marketing & Automation · Performance Marketing · SEO/GEO/AEO',
    competencies: [
      'AI-Marketing · Agentic Systems',
      'SEO · GEO · AEO',
      'Facebook & Google Ads',
      'Performance Marketing · KPIs',
      'Fullstack Web · React · Next.js',
      'Content- & Web-Automation',
      'CorelDRAW · Photoshop',
      'Analytics · Tracking',
    ],
    projects: [
      {
        title: 'AI-Marketing-System — Agentische Marketing-Automatisierung',
        stack: 'Agentic AI · LangGraph · Claude · n8n · SEO/GEO/AEO',
        desc: 'Agentisches System, das komplette Marketingprozesse übernimmt: Website-Erstellung, Analyse und Sichtbarkeit über SEO, GEO und AEO — in klassischen Suchmaschinen und in KI-Antwortmaschinen. KI-Tools gezielt für Content, Kampagnen und Reporting.',
      },
      {
        title: 'Freelance — Marketingbetreuung Supermärkte',
        stack: 'Facebook Ads · Google Ads · CorelDRAW · Photoshop',
        desc: 'Gestaltung wöchentlicher Prospekte und Steuerung der Kampagnen über Facebook und Google Ads: Zielgruppen ansprechen, Werbemittel gestalten, KPIs (Klickrate, Conversion) auswerten und laufend optimieren.',
      },
      {
        title: 'werbung-otomation — KI-Werbe-Pipeline',
        stack: 'KI-Agenten · fal.ai · React · FastAPI',
        desc: 'Pipeline, die Werbe-Assets per KI in Volumen erzeugt und über Policy- und Compliance-Regeln markenkonform hält; Bild- und Video-Generierung über fal.ai.',
      },
    ],
    skills: [
      { category: 'Online-Marketing', items: 'Performance Marketing, Facebook Ads, Google Ads, SEO, GEO/AEO, Affiliate-/Leadstrecken-Logik, A/B-Testing' },
      { category: 'Analytics & Tracking', items: 'KPI-Analyse (CTR, CPC, CPA, ROAS, Conversion), Reporting-Automatisierung, datengetriebene Optimierung' },
      { category: 'AI & Automation', items: 'KI-Tools für Content/Bild/Video, agentische Systeme (LangGraph), n8n-Workflow-Automatisierung, Claude/Anthropic' },
      { category: 'Web & Tech', items: 'React, Next.js, TypeScript, Node.js, REST APIs, MongoDB, PostgreSQL, Git, CI/CD' },
      { category: 'Design & Tools', items: 'CorelDRAW, Photoshop, Prospekt-/Werbemittelgestaltung, Layout, Werbetext' },
    ],
  },

  // --- Anschreiben: AUS bewerbung-marketing.md zusammengesetzt ---
  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung (Online/Performance)
      `ich bewerbe mich auf Ihre ausgeschriebene Position als [Online Marketing Manager]. Marketing funktioniert für mich dann, wenn Kampagnen messbar wirken und sich kontinuierlich verbessern lassen — Daten rein, Erkenntnis raus, nächste Iteration besser. Aus meiner Arbeit mit datengetriebenen Systemen und Automatisierung bringe ich genau dieses Denken mit.`,

      // Block 2 — Fachkompetenz (Online/Performance) + GEO/AEO-Hebel
      `Ich arbeite datengetrieben: Zielgruppen segmentieren, Inhalte und Varianten testen, Ergebnisse entlang klarer KPIs (CTR, CPC, CPA, ROAS) auswerten und Prozesse iterativ verbessern. Tracking, Reporting und Analytics setze ich technisch sauber auf, statt mich auf Bauchgefühl zu verlassen. Ein zusätzlicher Hebel, den nur wenige mitbringen: Ich verstehe, wie KI-Antwortmaschinen wie ChatGPT, Perplexity oder Google AI Overviews Inhalte abrufen und zitieren — weil ich selbst RAG- und Retrieval-Systeme baue, die genau so funktionieren. Damit lässt sich Sichtbarkeit gezielt auch für diese neuen Kanäle aufbauen (GEO/AEO).`,

      // Block 3 — Showcase (werbung-otomation)
      `Mein direkt einschlägiges Projekt ist werbung-otomation, eine produktive Multi-Tenant-KI-Werbe-Pipeline. Pro Kunde erzeugt eine Kette spezialisierter KI-Agenten (Scraper, Analyzer, Ad-Copy, Compliance, Creative, Orchestrator) aus Rohdaten fertige Werbe-Assets; Bild- und Video-Generierung laufen über fal.ai. Eine Policy-Engine mit kundenspezifischen Regeln und ein Compliance-Schritt halten die Ausspielung markenkonform und rechtlich sauber. Das System zeigt genau das, was modernes Marketing braucht: Inhalte in Volumen, aber kontrolliert, konsistent und messbar.`,

      // Block 4 — Value Proposition
      `In Ihrem Marketing sehe ich die Möglichkeit, meine Fähigkeiten gezielt einzubringen — insbesondere beim datengetriebenen Aufsetzen und Optimieren von Kampagnen, beim Automatisieren von Reporting und Datenzusammenführung sowie beim Aufbau von Sichtbarkeit in KI-Antwortmaschinen. Dabei ist es mir wichtig, dass Maßnahmen nicht nur kreativ, sondern auch messbar, wiederholbar und effizient skalierbar sind.`,

      // Block 5 — Persönlichkeit (Marketing-Framing)
      `Vor meinen Umschulungen zum Fachinformatiker und Full-Stack-Developer war ich in der Tourismusbranche tätig und habe danach ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Im eigenen Betrieb habe ich Marketing aus der Praxis gelernt: Angebote positionieren, Kunden ansprechen, auf Feedback reagieren und sehen, was tatsächlich Umsatz bringt. Dieses Gespür dafür, was bei Menschen ankommt, verbinde ich heute mit datengetriebener, technischer Umsetzung.`,
    ],
  },
};
