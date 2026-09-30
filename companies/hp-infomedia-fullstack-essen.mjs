// H&P Infomedia GmbH — Fullstack Web Developer (m/w/d) (Mid-/Senior-Level), Essen.
//   Quelle: StepStone 14066529, JSON-LD datePosted 2026-09-12. Kein Ansprechpartner, kein
//   Gehalt, kein Hinweis auf Remote oder Hybrid.
//   Adresse laut Northdata/Handelsregister: H&P Infomedia GmbH, Am Lichtbogen 39, 45141 Essen;
//   HRB 19874 Amtsgericht Essen; GF Christian Hauke, André Linde; Tel. +49 201 565800.
//   DIREKTER ARBEITGEBER. HR-Software seit über 20 Jahren: Zeugnis-Generator (28.000+
//   Textbausteine) und Abmahnungs-Generator; laut Website 50.000+ Anwender, Kunden u. a.
//   450+ Städte und Gemeinden, 1.500+ Krankenhäuser und Pflegeeinrichtungen, 375+ Banken
//   und Sparkassen.
// BEREICH 1 (Tech, `_bereich1-template.mjs`) — vom User am 12.09.2026 bestätigt
//   (Auftrag lautete „bereich 2", Rückfrage: Bereich 1).
// STANDORT: Essen rund 100 km von Bonn, Anzeige ohne Remote-Angabe → User-Entscheidung
//   12.09.2026: mobiles Arbeiten plus Präsenztage, KEIN Umzugs- oder Pendelversprechen
//   ([[feedback-standort-weite-distanz]]). Remote-Quote ist Erstgesprächs-Frage.
//
// PASSUNG 2.7/5. Was TRÄGT:
//   - React, Next.js, HTML, CSS, JavaScript/TypeScript: der Frontend-Teil des Muss-Stacks ist
//     wörtlich der eigene Kernstack.
//   - RESTful APIs, relationale Datenbanken (PostgreSQL/Supabase), Docker, CI/CD belegt.
//   - „Qualitätssicherung, Testing, automatisierte Tests" → Vitest-Suite und Playwright in
//     GuestMatrix, Zod-Validierung serverseitig.
//   - „Studium der Informatik ODER vergleichbare Qualifikation" → das „oder" trägt die
//     zweijährige Fachinformatiker-Umschulung; Brief schweigt dazu (keine Gap-Negation).
//   - Deutsch C1 ist gefordert und erfüllt; „gute Englischkenntnisse" ist mit B1 vertretbar.
//   - Kunden sind Kommunen, Kliniken, Banken: sensible Personaldaten. Mandantentrennung in
//     der Datenbank und DSGVO-Umsetzung aus GuestMatrix sind hier ein echtes Argument.
// Was DÄMPFT:
//   (1) 🚩 MID-/SENIOR-LEVEL mit „fundierter Berufserfahrung". Belegt sind Praktika und eigene
//       Projekte, keine Festanstellung als Entwickler. Größtes Einzelrisiko.
//   (2) 🚩 C#/.NET und ASP.NET sind Muss und Hälfte des Backends. NICHT belegt → im Brief offen
//       als Einarbeitung benannt, nicht behauptet ([[feedback-cv-no-overclaim]]).
//   (3) „Sehr gute Kenntnisse in Kubernetes" nicht belegt → ebenfalls als Einarbeitung benannt.
//   (4) „Umfangreiche Kenntnisse … performante SQL-Abfragen" → SQL/PostgreSQL belegt, das
//       Niveau „umfangreich" wird nicht behauptet.
//   (5) Rund 100 km Distanz ohne Remote-Angabe.
// 1-SEITEN-KÜRZUNGEN am Brief (Erstfassung 1037px von 1007px). Gekürzt nur oben, die drei
//   fixen Schlussabsätze unangetastet: P3-Auftakt „Daneben entwickle ich eigene Projekte"
//   zusammengezogen, Zod/Vitest in einen Satz; P4 „Systeme aus mehreren KI Agenten" →
//   „Agentensysteme", Freigabe-Nebensatz gestrichen, Schlusssatz verkürzt.
// Run: node generate-bewerbung.mjs companies/hp-infomedia-fullstack-essen.mjs

export default {
  slug: 'hp-infomedia-fullstack-essen',
  date: '13.09.2026',
  language: 'de',

  recipient: [
    'H&P Infomedia GmbH',
    'Am Lichtbogen 39',
    '45141 Essen',
  ],

  subject: 'Bewerbung als Fullstack Web Developer',

  narrative: {
    kern: 'Webentwickler mit React, Next.js und TypeScript, der Anwendungen vom Datenmodell bis zur Oberfläche selbst baut und Tests von Anfang an mitschreibt.',
    passung: [
      'React, Next.js und TypeScript als Kernstack, REST APIs mit Node.js im Backend',
      'Relationale Datenbank mit PostgreSQL und Mandantentrennung per Row Level Security selbst modelliert',
      'Docker, CI/CD und automatisierte Tests mit Vitest und Playwright',
    ],
  },
  company: {
    mission: 'H&P Infomedia entwickelt seit über 20 Jahren HR-Software in Essen, vor allem den Zeugnis-Generator und den Abmahnungs-Generator, mit denen Personalabteilungen in Kommunen, Kliniken und Banken aus geprüften Textbausteinen rechtssichere Dokumente erstellen.',
    verbindung: 'Anwendungen, bei denen klare Regeln und sauber getrennte, sensible Daten zu einem verlässlichen Ergebnis führen, sind genau das, was ich in GuestMatrix und in meinen Agentensystemen mit festen Kontrollpunkten baue.',
  },
  jobKeywords: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'C#', '.NET', 'REST', 'PostgreSQL', 'Docker', 'Kubernetes', 'CI/CD', 'Tests', 'Webanwendungen'],

  cv: {
    tagline: '',
    competencies: [],
    profil: 'Full Stack Web Developer',
    languages: 'Deutsch (fließend, C1) · Englisch (B1, technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    projects: [
      {
        title: 'GuestMatrix',
        stack: 'Next.js 15 · TypeScript · Supabase/PostgreSQL',
        desc: 'Mandantenfähige B2B-Plattform für Gästeinhalte (Fotos, Videos, Bewertungen), per QR-Code erfasst.',
      },
      {
        title: 'Reisegesucht-TravelAgency',
        stack: 'Full-Stack-Reiseportal',
        desc: 'Reiseportal für den deutschen Markt: Pauschalreisen, Hotels, Flüge und Kreuzfahrten.',
      },
    ],
    skills: [
      // Kategorie trägt "Webanwendungen", Testing-Zeile "Tests": ATS-Abdeckung 10/13. C#, .NET und
      // Kubernetes fehlen im CV bewusst (nicht belegt, kein Overclaim).
      { category: 'Webanwendungen', items: 'JavaScript, TypeScript, React.js, Next.js 15, HTML5/CSS3, TailwindCSS, SASS, Responsive Design' },
      { category: 'Testing & Qualität', items: 'Automatisierte Tests (Vitest/Playwright), Zod-Validierung, Code Reviews, Redux, Zustand' },
      { category: 'Backend & Datenbanken', items: 'Node.js, Express.js, REST-APIs, PostgreSQL/Supabase, SQL, MongoDB' },
      { category: 'DevOps & Methoden', items: 'Docker, CI/CD, Git/GitHub, Vercel, Linux, Agile/Scrum, Jira' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `Ihre Ausschreibung als Fullstack Web Developer hat mein Interesse geweckt, deshalb möchte ich mich gerne bei Ihnen bewerben. Ich entwickle Webanwendungen mit JavaScript und TypeScript, vor allem mit React und Next.js. Im Backend arbeite ich mit Node.js und relationalen Datenbanken wie PostgreSQL. Tests schreibe ich von Anfang an mit, damit eine Anwendung auch nach der nächsten Änderung verlässlich läuft.`,

      `Im Praktikum bei Vidinli Software habe ich am Frontend einer Plattform für Onlineshopping mit React und TypeScript gearbeitet, angebunden über REST APIs. Meine eigenen Anwendungen stelle ich mit Docker und CI/CD Pipelines bereit. C# mit ASP.NET und Kubernetes müsste ich mir erarbeiten. Statische Typisierung aus TypeScript und Container aus Docker sind dafür eine gute Grundlage.`,

      `Mein eigenes Projekt GuestMatrix ist eine mandantenfähige Plattform für Gästeinhalte, gebaut mit Next.js 15 und Supabase auf PostgreSQL. Die Trennung der Kunden liegt per Row Level Security in der Datenbank, nicht im Frontend. Dadurch sieht jeder Betrieb nur seine eigenen Daten. Eingaben prüfe ich serverseitig mit Zod, Tests laufen mit Vitest. Die Plattform ist lauffähig und getestet, Kunden nutzen sie noch nicht.`,

      `Außerdem entwickle ich in meinem Projekt „AI Orchestra“ Agentensysteme mit LangGraph, der Claude API und Claude Code. Generierten Code prüfe ich selbst und baue feste Kontrollpunkte ein. Ihre Generatoren setzen aus geprüften Textbausteinen Zeugnisse und Abmahnungen zusammen, auf die sich Personalabteilungen in Kommunen und Kliniken verlassen. Daran würde ich gerne mitarbeiten.`,

      `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu zwei Jahre eine Förderung von bis zu 50 % meines Gehalts erhalten. Ich wohne in Bonn und kann mir mobiles Arbeiten mit festen Präsenztagen in Essen gut vorstellen.`,

      `Mein technisches Fundament ist eine zweijährige Umschulung zum Fachinformatiker. Zuerst habe ich den Schwerpunkt Systemintegration absolviert und mich danach im Bereich Anwendungsentwicklung mit Schwerpunkt Webentwicklung weitergebildet.`,

      `Vor meiner Zeit in der IT war ich mehrere Jahre im Tourismus tätig und habe in Bonn ein eigenes Café geführt. Dadurch habe ich viel im Umgang mit Kunden gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Ich musste dort selbstständig planen, Entscheidungen treffen und Verantwortung übernehmen. Diese Erfahrung hilft mir auch heute bei der Entwicklung, weil ich nicht nur auf den Code schaue, sondern auch darauf, ob eine Lösung für den Nutzer wirklich sinnvoll ist.`,

      `Ich würde mich freuen, Ihnen im persönlichen Gespräch mehr über meine Erfahrungen und meine Projekte zu erzählen.`,
    ],
  },
};
