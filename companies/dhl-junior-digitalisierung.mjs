// Deutsche Post AG (DHL Group) — Junior Experte (m/w/d) Digitalisierung & Prozesse,
// Unternehmensbereich Post & Paket Deutschland, BONN (= Wohnort!), ab sofort, Voll-/Teilzeit.
// Adresse: Charles-de-Gaulle-Straße 20, 53113 Bonn (HRB 6792 Bonn, Impressum via WebSearch
// verifiziert 23.07.2026). KEIN namentl. Ansprechpartner -> Damen und Herren.
// Quelle: careers.dhl.com DPDHGLOBALAV360066 (JD vom User gepastet, 23.07.2026).
// Rolle: Product Owner für Vertriebssysteme, Digitalisierungsprojekte, Anforderungsmanagement,
// Schnittstelle Fachbereich<->IT, Abnahmetests, Analysen, Anwendertrainings, User-Support.
// Anforderungen: Studium ODER "durch Berufserfahrung erworbene vergleichbare Qualifikation"
// (= weich, nicht negieren); Berufserfahrung Digitalisierung/Automatisierung/BA/PM (GAP:
// nur eigene Projekte -> offen als "im Kleinen"); Scrum von Vorteil (vorhanden);
// Datenanalyse/Reporting (teilweise: SQL + eigene Auswertungen); ENGLISCH SEHR GUT (GAP:
// B1 -> thinkGROUP-Satz + cv.languages-Override, kein Overclaim).
// BEREICH 1-Variante (Digitalisierung/Prozesse, eigene Projekte als Fach-Story). Score 3.4/5.
// Product Owner bewusst NICHT im CV (kein Overclaim) -> ATS-Warning akzeptiert.
// Run: node generate-bewerbung.mjs companies/dhl-junior-digitalisierung.mjs

export default {
  slug: 'dhl-junior-digitalisierung',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'Deutsche Post AG',
    'Post & Paket Deutschland',
    'Charles-de-Gaulle-Straße 20',
    '53113 Bonn',
  ],

  subject: 'Bewerbung als Junior Experte Digitalisierung und Prozesse',

  narrative: {
    kern: 'Baut eigene Systeme, die Geschäftsprozesse digitalisieren und automatisieren, und übersetzt dabei laufend zwischen Fachseite und IT.',
    passung: [
      'Eigene Digitalisierungsprojekte: Werbepipeline, digitale Reiseagentur, n8n Workflows',
      'Anwenderseite vertraut aus IT Support bei GIS und eigenem Betrieb',
      'Vertriebsnähe durch aktuelle Arbeit in Frontend und Marketing im Reisebüro',
    ],
  },
  company: {
    mission: 'Die Abteilung Digitalisierung und Prozesse digitalisiert und automatisiert die Geschäftsprozesse des Geschäftskundenvertriebs von Post und Paket Deutschland und entwickelt die vertriebsspezifischen IT Systeme weiter.',
    verbindung: 'Genau diese Übersetzung zwischen Vertrieb und IT mache ich in meinen eigenen Projekten täglich, nur im kleineren Maßstab.',
  },
  jobKeywords: ['Digitalisierung', 'Automatisierung', 'Geschäftsprozess', 'Product Owner', 'Scrum', 'Stakeholder', 'Reporting', 'Anwenderschulung'],

  cv: {
    tagline: 'Digitalisierung & Prozessautomatisierung',
    competencies: [
      'Prozessdigitalisierung',
      'Anforderungen & Stakeholder',
      'Automatisierung (n8n, KI)',
    ],
    // 1-Seiten-Regel: KENNTNISSE-Block lief auf Seite 2 → Projekte raus (persona-Präzedenz),
    // die Projekt-Story trägt der Brief (P1/P2 nennen Werbepipeline + Reiseagentur konkret).
    projects: [],
    skills: [
      { category: 'Prozesse & Projekt', items: 'Geschäftsprozessanalyse, Anforderungsaufnahme, Agile/Scrum, Jira, Stakeholder-Kommunikation, Anwenderschulung' },
      { category: 'Automatisierung & AI', items: 'n8n Workflow Automation, API-Orchestrierung, LLM-APIs (Claude, Gemini, OpenAI)' },
      { category: 'Daten & Auswertung', items: 'SQL, MongoDB, Reporting & Auswertungen, Cost-Tracking' },
      { category: 'Entwicklung', items: 'TypeScript, React, Node.js, FastAPI (Python), REST-APIs, Docker' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf die Stelle als Junior Experte Digitalisierung und Prozesse in Bonn. Ich baue eigene Systeme für die Digitalisierung und Automatisierung von Geschäftsprozessen. Dazu gehören eine Werbepipeline für Immobilien und Tourismus, eine digitale Reiseagentur mit echter Buchung und Zahlung sowie mehrere n8n Workflows. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, ich kenne also auch die Vertriebsseite aus dem Alltag. Die Schnittstelle zwischen Fachbereich und IT ist genau der Punkt, an dem ich arbeiten möchte.`,

      `In meinen Projekten mache ich im Kleinen, was die Stelle beschreibt. Ich nehme Anforderungen auf und priorisiere sie, danach stimme ich die Umsetzung mit den Beteiligten ab und teste am Ende gegen die Anforderung. Die Reiseagentur zum Beispiel bildet eine komplette Vertriebsstrecke digital ab, von der Anfrage über die Buchung bis zur Zahlung, mit einer Freigabe durch den Menschen vor jeder kritischen Aktion. Meine Systeme sind lauffähig und getestet, mit klaren Abnahmeschritten vor jedem Release.`,

      `Die Anwenderseite kenne ich aus der Praxis: Im IT Support bei GIS in Bonn habe ich Nutzer im First Level betreut, 70 Prozent der Tickets konnte ich direkt lösen. Anwenderschulungen habe ich dort ebenfalls begleitet. Vorher habe ich ein eigenes Café mit Cateringservice geführt und weiß deshalb, wie Geschäftsprozesse aus Sicht des Betreibers aussehen. Mein Unterbau sind zwei Jahre Umschulung zum Fachinformatiker und ein Jahr Vollzeitkurs zum Full Stack Web Developer, gearbeitet haben wir dort in Scrum Sprints mit Jira.`,

      `Die formale Rolle des Product Owners in einem Konzernumfeld habe ich noch nicht ausgefüllt, die Arbeit dahinter kenne ich aus meinen eigenen Produkten. Das sage ich offen. Englisch nutze ich im technischen Kontext sicher und entwickle es gezielt weiter. Ich wohne in Bonn, ein Einstieg ist ab sofort möglich, in Vollzeit oder Teilzeit.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
