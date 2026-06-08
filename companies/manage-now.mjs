// Manage Now GmbH — (Junior) Online-Marketing-Manager (m/w/d)
// München (Gabrielenstraße 9, 80636), deutschlandweit/Home-Office. B2B Managed Service Provider (IT).
// MARKETING-Profil → Anschreiben aus bewerbung-marketing.md (Online/Performance + technisches Website-Marketing)
// USP hier: Fullstack Web Developer betreut WordPress/Tracking/Analytics/E-Mail-Automation selbst + Google Ads + B2B-IT-Verständnis.
// Run: node generate-bewerbung.mjs companies/manage-now.mjs

export default {
  slug: 'manage-now',
  date: '02.06.2026',
  language: 'de',

  recipient: [
    'Manage Now GmbH',
    'Gabrielenstraße 9',
    '80636 München',
  ],

  subject: 'Bewerbung als Junior Online-Marketing-Manager',

  // --- CV: MARKETING-Variante (Tech-trifft-Marketing). Tech-CV (cv.md) bleibt unberührt. ---
  cv: {
    tagline: 'Fullstack Web Developer · AI-Marketing & Automation · Performance Marketing · SEO/GEO/AEO',
    competencies: [
      'AI-Marketing · Agentic Systems',
      'Google & LinkedIn Ads',
      'SEO · SEA · GEO/AEO',
      'WordPress · Tracking · Analytics',
      'Performance Marketing · KPIs',
      'Fullstack Web · Automation',
    ],
    projects: [
      {
        title: 'AI-Marketing-System — Agentische Marketing-Automatisierung',
        stack: 'Agentic AI · LangGraph · Claude · n8n · SEO/GEO/AEO',
        desc: 'Agentisches System für komplette Marketingprozesse: Website-Erstellung, Analyse und Sichtbarkeit über SEO/GEO/AEO — in Suchmaschinen und KI-Antwortmaschinen. KI-Tools gezielt für Content, Kampagnen und Reporting.',
      },
      {
        title: 'Freelance — Marketingbetreuung Supermärkte',
        stack: 'Google Ads · Facebook Ads · CorelDRAW · Photoshop',
        desc: 'Gestaltung wöchentlicher Prospekte und Steuerung der Kampagnen über Google und Facebook Ads: Zielgruppen ansprechen, Werbemittel gestalten, KPIs (Klickrate, Conversion) auswerten und laufend optimieren.',
      },
      {
        title: 'werbung-otomation — KI-Werbe-Pipeline',
        stack: 'KI-Agenten · fal.ai · React · FastAPI',
        desc: 'Pipeline, die Werbe-Assets per KI in Volumen erzeugt und über Policy- und Compliance-Regeln markenkonform hält; Bild- und Video-Generierung über fal.ai.',
      },
    ],
    skills: [
      { category: 'Online-Marketing', items: 'Performance Marketing, Google Ads, LinkedIn/Facebook Ads, SEO/SEA, Content- & E-Mail-Marketing, A/B-Testing' },
      { category: 'Website & Tracking', items: 'WordPress, Tracking-/Conversion-Setup, Google Analytics, E-Mail-Automation, Landingpages, Lead-Management' },
      { category: 'AI & Automation', items: 'KI-Tools für Content/Bild/Video, agentische Systeme (LangGraph), n8n-Automatisierung, Claude/Anthropic' },
      { category: 'Web & Tech', items: 'React, Next.js, TypeScript, Node.js, REST APIs, MongoDB, PostgreSQL, Git, CI/CD' },
      { category: 'Design & Tools', items: 'CorelDRAW, Photoshop, Prospekt-/Werbemittelgestaltung, Werbetext' },
    ],
  },

  // --- Anschreiben aus bewerbung-marketing.md (Online/Performance + technisches Website-Marketing) ---
  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung: Fullstack + Freelance-Marketing + B2B-IT-Verständnis
      `ich bewerbe mich auf Ihre Stelle als (Junior) Online-Marketing-Manager. Ich bin Fullstack Web Developer und arbeite zusätzlich freelance im Online-Marketing — also genau die Kombination aus technischer Umsetzung und datengetriebener Vermarktung, die Sie für den Ausbau Ihrer digitalen Kanäle suchen. Dass es dabei um ein B2B-IT-Umfeld geht, kommt mir entgegen, weil ich Ihre Produkte und Zielgruppe technisch verstehe.`,

      // Block 2 — Technische Verantwortung Website-Marketing = seine Kern-Stärke
      `Ein großer Teil Ihrer Stelle ist die technische Verantwortung für das Website-Marketing — und genau hier liegt meine Stärke. WordPress, Tracking- und Conversion-Setup, Analytics, E-Mail-Automatisierung, Landingpages und Lead-Management sind für mich als Webentwickler vertrautes Terrain: Ich kann diese Dinge nicht nur bedienen, sondern selbst aufsetzen, anpassen und sauber zum Laufen bringen. Damit nehme ich dem Team die technische Abhängigkeit ab und kann Kampagnen-Setups schnell eigenständig umsetzen.`,

      // Block 3 — Performance/Ads-Praxis + AI-Marketing + SEO/GEO/AEO
      `Im Performance-Marketing arbeite ich praktisch: Als Freelancer betreue ich die Marketingprozesse mehrerer Supermärkte, gestalte ihre Werbemittel und steuere die Kampagnen über Google und Facebook Ads — Zielgruppen ansprechen, KPIs wie Klickrate und Conversion auswerten und die Maßnahmen laufend optimieren. Parallel entwickle ich eigene Projekte im Bereich AI-Marketing: ein agentisches System, das komplette Prozesse von der Website-Erstellung über die Analyse bis hin zu SEO und der Sichtbarkeit in KI-Antwortmaschinen (GEO/AEO) übernimmt. KI-Tools setze ich dabei gezielt für Content, Kampagnen und Reporting ein.`,

      // Block 4 — Value Proposition (SEM/SEO, Website/E-Mail technisch, Content/LinkedIn mit KI, KPIs)
      `Für Manage Now heißt das konkret: Ich kann Performance- und Suchmaschinenmarketing über Google Ads und SEO datenbasiert aufsetzen und optimieren, das technische Website- und E-Mail-Marketing eigenständig betreuen und bei Content — auch für LinkedIn — mit KI-Unterstützung schneller und konsistenter werden. Dabei ist mir wichtig, dass Maßnahmen an klaren KPIs gemessen und Schritt für Schritt verbessert werden.`,

      // Block 5 — Persönlichkeit + ehrlicher Tool-Gap (Pardot/Salesforce)
      `Vor meiner Umschulung zum Fachinformatiker und Full-Stack-Developer habe ich ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Eigenverantwortung, proaktives Arbeiten und der direkte Draht zum Kunden sind mir daher vertraut. Mit Pardot oder Salesforce habe ich noch nicht gearbeitet, aber als Entwickler arbeite ich mich erfahrungsgemäß schnell in neue Plattformen ein.`,
    ],
  },
};
