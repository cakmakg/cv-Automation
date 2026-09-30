// Kosche Holzwerkstoffe GmbH & Co. KG (häussermann Gruppe: häussermann, Kosche, Kovalex,
// Maier Holztec — Technologiegruppe, 300+ MA, 4 Standorte, nachhaltige Massivholzprodukte
// für Fassade, Terrasse, Innenausbau). Stelle: Junior ERP Support / IT-Mitarbeiter (m/w/d),
// Standort Much bei Köln/Bonn — Bövingen 100, 53804 Much.
// Ansprechpartnerin: Personalabteilung, Frau Daniela Ritz (bewerbung@haeussermann-gruppe.de).
// Anzeige VERLANGT Gehaltsvorstellung + frühestmöglichen Eintrittstermin → 40.000 € / ab sofort
// (etablierte User-Linie KZVK/NetCologne/DATAGROUP). Quelle: jobware.de 2011246735 (18.07.2026,
// via Playwright-iframe extrahiert). Bereich 2 (Goldmuster).
//
// PASSUNG: Anzeige NENNT FiSi Systemintegration/AE als Zielprofil ✓; First-Level-Support +
// Störungsanalyse + Anwenderschulung + Dokumentation = GIS 1:1; ERP-System NICHT vorausgesetzt
// (sie arbeiten Schritt für Schritt ein) → ehrlich "einarbeiten", vom Inserat eingeladen.
// DIFFERENZIERER 1: Full-Stack-Dev kennt Softwareprojekte Konzeption→Umsetzung→Tests→Doku und
// übersetzt zwischen Fachabteilung + externem Dienstleister (JD-Aufgabe). DIFFERENZIERER 2:
// eigenes Café/Catering geführt → "gute betriebswirtschaftliche Kenntnisse" (JD-Anforderung),
// ERP bildet genau solche Abläufe ab. Rural onsite → Mobilität (Führerschein Klasse B) im Brief.
// Englisch NICHT gefordert → Default-Sprachzeile (kein Override).
// Regeln: Fakten nur belegt, P1 faktisch, kein Dash im Fließtext, Tricolon-Budget 0, Einzeiligkeit.
// Run: node generate-bewerbung.mjs companies/kosche-junior-erp-support.mjs

export default {
  slug: 'kosche-junior-erp-support',
  date: '29.07.2026',
  language: 'de',

  recipient: [
    'Kosche Holzwerkstoffe GmbH & Co. KG',
    'Personalabteilung, Frau Daniela Ritz',
    'Bövingen 100',
    '53804 Much',
  ],

  subject: 'Bewerbung als ERP Support und IT-Mitarbeiter',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration und Full Stack Entwickler, der Anwender im First Level unterstützt, Störungen analysiert und die Geschäftsprozesse hinter der Software versteht.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Als Full Stack Entwickler kenne ich Softwareprojekte von der Konzeption über Tests bis zur Dokumentation',
      'Eigenes Café geführt, daher sind mir betriebswirtschaftliche Abläufe und die Anwendersicht vertraut',
    ],
  },
  company: {
    mission: 'Wachsende häussermann Gruppe mit der Marke Kosche, die nachhaltige Massivholzprodukte für Fassade, Terrasse und Innenausbau herstellt.',
    verbindung: 'Ein ERP ist im Alltag der Fachabteilungen zentral; mir geht es darum, dass die Anwender ohne Umwege damit arbeiten können.',
  },
  jobKeywords: ['ERP', 'Anwender', 'Störung', 'Dokumentation', 'Schulung', 'Support', 'Test'],

  cv: {
    tagline: 'ERP-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen → max 3 kurze Tags, keine Skill-Dopplung.
    competencies: [
      '1st Level Anwendersupport',
      'Analyse & Dokumentation',
      'Prozessverständnis',
    ],
    // 1-Seiten-Regel: keine Projekte im Support-CV.
    projects: [],
    skills: [
      { category: 'ERP & Anwender', items: 'ERP-Anwendersupport (Einarbeitung), Anwenderschulung, Störungsanalyse, Dokumentation, Tests' },
      { category: 'Support & Prozesse', items: 'First Level Support, Ticketbearbeitung, Eskalation, Prozessdokumentation, Anwenderbetreuung' },
      { category: 'Clients & Systeme', items: 'Windows 11, Microsoft 365 (Anwender), Active Directory (Grundlagen), Jira, Remote-Support' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    // Englisch nicht gefordert → Default-Sprachzeile (kein languages-Override).
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Ritz,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als ERP Support und IT Mitarbeiter am Standort Much. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Als Full Stack Entwickler baue ich außerdem selbst Software und kenne Projekte von der Konzeption bis zum Test. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing.`,

      `Anwendern bei Störungen schnell und verständlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Anfragen aufgenommen, im Ticketsystem dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. In Ihr ERP System arbeite ich mich zügig ein, die Einarbeitung durch Ihre erfahrenen Kollegen kommt mir dabei sehr entgegen. Die Schulung der Anwender und die saubere Dokumentation der Lösungen sind für mich fester Teil der Arbeit.`,

      `Was mich von vielen im Support unterscheidet, sind zwei Dinge. Als Full Stack Entwickler kenne ich Softwareprojekte von innen, von der Konzeption über die Umsetzung bis zu Tests und Dokumentation. Dadurch kann ich zwischen Fachabteilung und externem Dienstleister übersetzen und Anforderungen so aufnehmen, dass am Ende die richtige Lösung steht. Dazu kommt: Ich habe in Bonn ein eigenes Café mit Cateringservice geführt und kenne betriebswirtschaftliche Abläufe aus eigener Verantwortung. Ein ERP bildet genau diese Abläufe ab, deshalb verstehe ich schnell, worum es den Anwendern geht.`,

      `Dass Kosche nachhaltige Produkte aus Holz herstellt, spricht mich an. Im Support geht es mir darum, dass die Anwender im Alltag gut mit ihrem ERP zurechtkommen. Ich wohne in Bonn und habe Führerschein Klasse B, Much ist für mich gut erreichbar. Einsteigen kann ich ab sofort, meine Gehaltsvorstellung liegt bei 40.000 Euro brutto im Jahr.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
