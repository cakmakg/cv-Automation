// YES Investmedia GmbH — Junior Marketing Manager (m/w/d) – Finanzen & digitale Portale
// Bonn (Bornheimer Straße 180, 53119), Financial Publishing (Finanztrends.de u.a.)
// MARKETING-Profil → Anschreiben aus bewerbung-marketing.md (Online/Performance + GEO-AEO)
// CV identisch zur Tech-Bewerbung. Standort Bonn = lokaler Vorteil.
// Run: node generate-bewerbung.mjs companies/yes-investmedia.mjs

export default {
  slug: 'yes-investmedia',
  date: '02.06.2026',
  language: 'de',

  recipient: [
    'YES Investmedia GmbH',
    'Bornheimer Straße 180',
    '53119 Bonn',
  ],

  subject: 'Bewerbung als Junior Marketing Manager – Finanzen & digitale Portale',

  // --- CV: MARKETING-Variante (Tech-trifft-Marketing). cv.md/Tech-CV bleibt unberührt. ---
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

  // --- Anschreiben aus bewerbung-marketing.md (Online/Performance + GEO-AEO) ---
  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung: Fullstack + Freelance-Marketing + Bonn
      `ich bewerbe mich auf Ihre Stelle als Junior Marketing Manager für Finanzen und digitale Portale. Ich bin Fullstack Web Developer und arbeite zusätzlich freelance im Online-Marketing — also genau die Mischung aus Technik und datengetriebener Vermarktung, die Sie für Finanztrends.de und Ihre weiteren Portale suchen. Dass YES Investmedia in Bonn sitzt, passt für mich gut, denn ich wohne hier.`,

      // Block 2 — Konkrete Freelance-Marketing-Praxis (schließt die Erfahrungslücke)
      `Als Freelancer betreue ich aktuell die Marketingprozesse mehrerer Supermärkte: Ich gestalte ihre wöchentlichen Prospekte mit CorelDRAW und Photoshop und steuere die Kampagnen über Facebook und Google Ads. Dabei geht es um genau das, was Ihre Anzeige beschreibt — Zielgruppen ansprechen, Anzeigen und Werbemittel gestalten, Kennzahlen wie Klickrate und Conversion auswerten und die Maßnahmen Schritt für Schritt verbessern.`,

      // Block 3 — AI-Marketing-Projekt (agentisch, managt alle Prozesse), einfach erklärt
      `Parallel entwickle ich eigene Projekte im Bereich AI-Marketing und setze KI-Tools sehr gezielt ein. Mein wichtigstes Projekt ist ein agentisches System, das komplette Marketingprozesse übernimmt: von der Erstellung von Websites über die Analyse bis hin zu SEO, GEO und AEO — also Sichtbarkeit sowohl in klassischen Suchmaschinen als auch in KI-Antwortmaschinen wie ChatGPT oder Google AI Overviews. Damit lassen sich Marketingaufgaben schneller, messbarer und in größerem Volumen erledigen, ohne dass die Qualität leidet.`,

      // Block 4 — Value Proposition (klar, einfach)
      `Für Ihre Portale heißt das konkret: Ich kann Performance-Kampagnen und Leadstrecken datenbasiert aufsetzen und optimieren, Reporting und Analysen automatisieren und Ihre Sichtbarkeit über die klassische Suche und neue KI-Kanäle hinweg ausbauen. Dabei ist mir wichtig, dass Maßnahmen messbar und wiederholbar bleiben.`,

      // Block 5 — Persönlichkeit + Finanz-Interesse + lokal
      `Vor meiner Umschulung zum Fachinformatiker und Full-Stack-Developer habe ich ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Eigenverantwortung und der direkte Draht zum Kunden sind mir daher vertraut. Für Börse, Investments und digitale Geschäftsmodelle interessiere ich mich auch privat. Ich arbeite mich schnell in neue Tools ein und übernehme gerne Verantwortung für Ergebnisse.`,
    ],
  },
};
