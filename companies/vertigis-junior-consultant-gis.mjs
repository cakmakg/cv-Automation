// VertiGIS GmbH — Junior Consultant (m/w/x) GIS / Softwareentwicklung, Bonn (hybrid, max. 2 Präsenztage).
// Quelle: vertigis.recruitee.com/o/junior-consultant-mwx-gis-softwareentwicklung (aktiv 16.08.2026).
// Adresse (Impressum/HR): VertiGIS GmbH, Mallwitzstr. 1-3, 53177 Bonn (HRB 23497 AG Bonn) — Bonner Standort
// ist das frühere AED-SICAD. KEIN namentlicher Ansprechpartner auf der Anzeige oder im Recruitee-Portal
// auffindbar (16.08.2026 geprüft) -> Anrede bleibt "Sehr geehrte Damen und Herren".
// ROLLE = FDSE-Schiene auf Deutsch: kundenspezifische Erweiterungen bauen (Fachschalen im LM Editor),
// Installation/Konfiguration/Inbetriebnahme beim Kunden, Workshops und technische Beratung.
// TRÄGT: relationale Datenbanken (PostgreSQL/Supabase, Datenmodell zuerst), kundenspezifische Konfiguration
// statt Sonderlösung (GuestMatrix Config-Registry = Fachschalen-Muster), Beratungs-/Supportpraxis,
// Deutsch C1 (Pflicht), Wohnort Bonn = Standort der Stelle.
// DÄMPFER (ehrlich): Stack ist Python + Java/C#, NICHT Node/TS -> Python nur Grundlagen (LangGraph/FastAPI),
// Java/C# gar nicht (Anzeige verlangt nur "Interesse", OOP über TypeScript belegt); GIS/Land-Management-Domäne
// (Liegenschaftskataster, Flurneuordnung) komplett neu; Englisch B2 gefordert, User B1 -> CV bleibt bei
// "technisches Lesen sicher, Verständigung gut", im Brief nicht thematisiert.
// BEREICH 1 (Tech). Projekte: GuestMatrix (Datenmodell/Konfiguration) + Otonom-Travelagency (Python + Integration).
// Run: node generate-bewerbung.mjs companies/vertigis-junior-consultant-gis.mjs

export default {
  slug: 'vertigis-junior-consultant-gis',
  date: '16.08.2026',
  language: 'de',

  recipient: [
    'VertiGIS GmbH',
    'Mallwitzstr. 1-3',
    '53177 Bonn',
  ],

  subject: 'Bewerbung als Junior Consultant GIS und Softwareentwicklung',

  narrative: {
    kern: 'Baut Software entlang des Datenmodells und übersetzt fachliche Anforderungen in Erweiterungen, die pro Kunde konfiguriert werden, mit Beratungs- und Supportpraxis aus dem direkten Kundenkontakt.',
    passung: [
      'Relationale Datenbanken und Datenmodelle: PostgreSQL, Row Level Security, Datenmodell vor Oberfläche',
      'Erweiterung über eine zentrale Konfiguration je Sektor statt Sonderlösung (GuestMatrix)',
      'Beratung und Kundenprojekte: Anforderungen aufnehmen, Systeme in Betrieb nehmen, Fachlogik erklären',
    ],
  },

  company: {
    mission: 'VertiGIS entwickelt in Bonn die Land Management Software, mit der Vermessungsverwaltungen das Liegenschaftskataster nach dem ALKIS Standard führen, also amtliche Daten, die über Jahrzehnte belastbar bleiben müssen.',
    verbindung: 'Ich arbeite am liebsten an Software, deren eigentliche Leistung im sauberen Datenmodell liegt und deren Erweiterungen pro Kunde konfiguriert werden. Genau so ist die Land Management Linie aufgebaut.',
  },

  jobKeywords: ['Softwareentwicklung', 'Python', 'Datenbanken', 'SQL', 'Konfiguration', 'Beratung', 'Kundenprojekte', 'Anforderungen'],

  cv: {
    tagline: 'Softwareentwicklung & Consulting · Full Stack · Datenbanken',
    competencies: [
      'Full Stack mit TypeScript',
      'Relationale Datenbanken & SQL',
      'Kundennahe Umsetzung',
    ],
    projects: [
      {
        title: 'GuestMatrix — mandantenfähige B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · Supabase/PostgreSQL · Vercel',
        desc: 'Multi-Tenant-Isolation per Row-Level-Security (PostgreSQL), sektorbasierte Config-Registry, Zod, Vitest-Test-Suite.',
      },
      {
        title: 'Otonom-Travelagency — autonome Buchungs-Pipeline',
        stack: 'Node.js/TypeScript · Python (FastAPI) · LangGraph · ChromaDB',
        desc: 'Node.js-Gateway plus Python-Service, externe Fachsysteme (Amadeus, Hotelbeds, Stripe), HITL-Freigabe, PII-Masking, AES-256.',
      },
    ],
    skills: [
      { category: 'Softwareentwicklung', items: 'TypeScript, JavaScript, Node.js, Express.js, React/Next.js, objektorientierte Modellierung, Git/GitHub' },
      { category: 'Skripting & Automatisierung', items: 'Python (Grundlagen: FastAPI, LangGraph), n8n, API-Orchestrierung, Webhooks' },
      { category: 'Datenbanken & Datenmodelle', items: 'PostgreSQL, SQL, Supabase (Row-Level-Security), MongoDB, Datenmodellierung' },
      { category: 'Beratung & Kundenprojekte', items: 'Anforderungen aufnehmen, 1st Level IT Support, Konfiguration und Inbetriebnahme' },
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
      `ich bewerbe mich als Junior Consultant für GIS und Softwareentwicklung. Ich entwickle mit TypeScript und Node.js und gehe dabei zuerst an das Datenmodell, bevor ich Oberflächen baue. Meine Grundlage sind zwei Jahre Umschulung zum Fachinformatiker und ein Vollzeitkurs zum Full Stack Web Developer, dazu mehrere eigene Projekte. Zurzeit arbeite ich in einem Reisebüro in Bonn im Bereich Frontend und Marketing.`,

      `Fachliche Anforderungen in eine technische Erweiterung zu übersetzen, ist genau die Arbeit, die ich in meinen Projekten mache. In meiner Plattform GuestMatrix liegt die Mandantentrennung direkt in der Datenbank über Row Level Security. Jeder Sektor bekommt seine eigene Konfiguration aus einer zentralen Registry. Dadurch konnte ich einen neuen Sektor allein über eine Konfigurationsdatei anlegen, ohne die Anwendung selbst anzufassen. Mit relationalen Datenbanken arbeite ich seit dem ersten Projekt, PostgreSQL und das Datenmodell dahinter sind mein Ausgangspunkt. Diese Systeme sind lauffähig und getestet, im Kundenbetrieb laufen sie noch nicht.`,

      `VertiGIS entwickelt in Bonn die Land Management Software, mit der Vermessungsverwaltungen das Liegenschaftskataster nach dem ALKIS Standard führen. Das sind amtliche Daten, die über Jahrzehnte belastbar bleiben müssen. Diese Art von Software interessiert mich, weil die eigentliche Leistung im sauberen Datenmodell liegt und nicht im schnellsten Feature. Liegenschaftskataster und Flurneuordnung sind für mich neue Fachgebiete. In fremde Fachlogik einzuarbeiten ist allerdings mein Alltag, im Tourismus wie im IT Support.`,

      `Beratung und Umsetzung gehören für mich zusammen. Ich habe in Bonn ein eigenes Café mit Catering gegründet und geführt, im 1st Level Support Anfragen aufgenommen und Störungen dokumentiert. Was ich daraus mitnehme, trägt auch in Kundenprojekten: zuhören und Anforderungen so sortieren, dass beide Seiten sie verstehen. Python nutze ich in meinen KI Projekten mit LangGraph und FastAPI. Das ist Grundlagenniveau und ich baue es gezielt aus. Objektorientiert arbeite ich bisher in TypeScript, der Schritt zu C# oder Java ist für mich ein Lernthema und keine Hürde. Ich wohne in Bonn. Die zwei Präsenztage pro Woche sind für mich unkompliziert und ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
