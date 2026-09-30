// menten GmbH — Fullstack Developer Angular & Node.js (m/w/d), Bergisch Gladbach
// An der Gohrsmühle 25, 51465 Bergisch Gladbach. HRB 47762 Amtsgericht Köln.
// Inhabergeführt seit 1989, 25 Mitarbeitende, 250+ Kunden. Eigenprodukt: EDI-Software i-effect®.
// GF Ralph Menten und Marcel Menten. Tel. +49 2202 23990.
// Quelle: xing.com/jobs/…157315664, datePosted 2026-08-19 (heute). Gegengeprüft auf der
// eigenen Karriereseite menten.com/jobs/fullstack-entwickler (identische Eckdaten).
// DIREKTER ARBEITGEBER, kein Vermittler.
// Ansprechpartner nur als "Christoph, People & Office Management" ohne Nachname auffindbar
// -> "Sehr geehrte Damen und Herren,". Bewerbung über das Onlineformular auf der Karriereseite.
// Firma duzt ("Du ab Tag 1"), Anschreiben bleibt trotzdem im Sie (keine Abweichung ohne Rückfrage).
//
// HARTE ECKDATEN: 38.000 – 56.000 € brutto/Jahr (Band steht in der Anzeige), Vollzeit,
// hybrid mit 2–4 Tagen Home-Office, 30 Urlaubstage, Start ab sofort.
// Prozess laut Karriereseite: Bewerbung -> 10 Min. Kennenlernen -> 30 Min. Fachgespräch
// -> 2 h Vor-Ort-Besuch mit Case Study -> Entscheidung am selben Tag.
//
// ⭐ USER-BOGEN, 6 ABSÄTZE (User-Volltext-Logik vom 19.08.2026, siehe rwz-it-support-koeln).
// KORREKTUR 19.08.2026: Erste Fassung war nach dem 5-Absatz-Goldmuster (grinnberg) gebaut.
// Der User hat das verworfen. Sein Bogen gilt für ALLE Anschreiben, nicht nur für Bereich 2.
// P1 Bewerbung + Qualifikation, rein faktisch | P2 konkrete Stationen und gebaute Systeme
// | P3 Technik-Abgleich inkl. offener Punkte + Einarbeitungszusage | P4 "Zusätzlich" = das,
// was mich unterscheidet | P5 aktueller Job, Herkunft, Soft Skills, Standort | P6 Abschlusssatz.
// Auf Bereich 1 gemappt: P2 trägt Vidinli und GuestMatrix statt Support-Stationen,
// P3 den Stack-Abgleich mit Angular/NgRx/NestJS als offenem Punkt, P4 die Agentensysteme
// und Claude Code als Differenzierung.
//
// Score 3.9/5:
//   + "IT-Ausbildung, Studium ODER erste Berufsjahre. Ein bis drei Jahre Praxis reichen,
//     BERUFSEINSTIEG NACH GUTER AUSBILDUNG EBENFALLS." -> kein Formalblocker, kein Studium nötig
//   + Gehaltsband offen ausgeschrieben, Prozess transparent, direkter Arbeitgeber
//   + TypeScript auf beiden Seiten ist genau seine Arbeitsweise ("ein Denkmodell statt zwei")
//   + "Mit CLAUDE CODE als Sparring-Partner arbeiten, bei uns Standard im Alltag" -> sein
//     Alleinstellungsmerkmal; LLM- und Agenten-Praxis trifft hier auf gelebte Firmenpraxis
//   + Node.js, REST, SQL/PostgreSQL, Git im Team, Docker, CI/CD, Linux, Jira = alles belegt
//   + Bergisch Gladbach ~40 km von Bonn, dazu 2–4 Tage Home-Office
//   - ANGULAR steht unter Must-have und ausdrücklich "aus der Praxis. Du bekommst eine
//     Oberfläche allein zum Laufen." Das ist die echte Lücke und der Grund für 3.9 statt 4.3.
//     Dazu NgRx (SignalStore) und NestJS. In P2 offen benannt, Brücke über React/Redux/Zustand
//     bzw. Node/Express — NICHT als Angular-Kenntnis im CV behauptet (feedback_cv_no_overclaim).
//   - MSSQL unbekannt; Anzeige lässt "PostgreSQL, MSSQL oder vergleichbar" zu -> gedeckt.
//   - EDI/ZUGFeRD/XRechnung, IBM i, Java/Spring Boot = nur nice-to-have, Anzeige sagt selbst
//     "Kennt kaum jemand, lernst du hier" -> nicht thematisiert, kein Aufzählen ungenutzter Tools.
// Run: node generate-bewerbung.mjs companies/menten-fullstack-angular-node-bergisch-gladbach.mjs

export default {
  slug: 'menten-fullstack-angular-node-bergisch-gladbach',
  date: '19.08.2026',
  language: 'de',

  recipient: [
    'menten GmbH',
    'An der Gohrsmühle 25',
    '51465 Bergisch Gladbach',
  ],

  subject: 'Bewerbung als Fullstack Entwickler',

  narrative: {
    kern: 'Entwickler, der Webanwendungen im Frontend und im Backend mit TypeScript baut und Tests und Dokumentation von Anfang an mitschreibt.',
    passung: [
      'Webanwendungen im Frontend und im Backend, TypeScript auf beiden Seiten',
      'REST Schnittstellen mit Node.js, relationale Datenbanken vor allem PostgreSQL',
      'Git im Team mit Branches und Reviews, Docker und Pipelines für CI/CD',
    ],
  },
  company: {
    mission: 'Inhabergeführtes Softwarehaus aus Bergisch Gladbach, dessen EDI Plattform den elektronischen Datenaustausch zwischen Unternehmen trägt.',
    verbindung: 'Eine gewachsene Plattform Schritt für Schritt zu modernisieren, statt sie neu zu bauen, entspricht meiner Arbeitsweise: erst lesen, was da ist, dann ersetzen.',
  },
  jobKeywords: ['TypeScript', 'Angular', 'Node.js', 'NestJS', 'REST', 'SQL', 'PostgreSQL', 'Git'],

  cv: {
    // Tech-Default: tagline leer (reboot-Struktur), Schwerpunkte-Zeile trägt die Rollenklammer.
    tagline: '',
    // Bewusst anders formuliert als die Skill-Liste (keine Dopplung-Warnung).
    competencies: [
      'Webanwendungen im Fullstack',
      'REST-Schnittstellen & SQL',
      'Code-Reviews & Tests',
    ],
    // Anzeige: "Solides Deutsch für Kundengespräche und Doku, Englisch zum Lesen von Fachtexten"
    // -> die ehrliche Formulierung trifft die Anforderung exakt, kein bare B1.
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Genau 1 Projekt -> 1 Seite A4 (Regel aus grinnberg). GuestMatrix belegt TypeScript,
    // relationale DB, REST und automatisierte Tests wörtlich aus der Anzeige.
    projects: [
      {
        title: 'GuestMatrix — Multi-Tenant B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · PostgreSQL · Vercel',
        desc: 'Mandantentrennung per Row-Level-Security in der Datenbank, REST-Endpunkte mit Zod validiert, Vitest-Suite, DSGVO-Löschkonzept und Magic-Byte-Prüfung für Uploads.',
      },
    ],
    // KEIN Angular / NgRx / NestJS — keine Praxis, steht nur im Anschreiben als offener Punkt.
    skills: [
      { category: 'Frontend', items: 'TypeScript, JavaScript, React.js, Next.js 15, HTML5/CSS3, SASS/SCSS, Redux/Zustand' },
      { category: 'Backend & APIs', items: 'Node.js, Express.js, REST-APIs, Zod-Validierung, OOP-Design, FastAPI (Python)' },
      { category: 'Datenbanken & DevOps', items: 'PostgreSQL, SQL (Joins/Indizes), Supabase, MongoDB, Docker, CI/CD, Git/GitHub, Linux' },
      { category: 'Methoden & KI', items: 'Scrum/Agile, Jira, Code-Reviews, Vitest/Playwright, LangGraph, LLM-APIs (Claude, Gemini)' },
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
      `ich bewerbe mich auf Ihre Stelle in der Fullstack Entwicklung in Bergisch Gladbach. Als Fachinformatiker für Anwendungsentwicklung bringe ich praktische Erfahrung in der Webentwicklung mit TypeScript sowie ein gutes technisches Verständnis für Frontend, Backend und Schnittstellen mit.`,

      `Bei Vidinli Software in Bonn habe ich das Frontend einer Shopping Plattform mit React und TypeScript entwickelt. Daneben baue ich eigene Anwendungen von der Datenbank bis zur Oberfläche. GuestMatrix ist eine mandantenfähige Plattform auf Basis von Next.js und PostgreSQL. Die Mandantentrennung liegt per Row Level Security in der Datenbank, die REST Endpunkte sind mit Zod validiert und über eine Vitest Suite abgesichert. Dabei war mir wichtig, Tests und Dokumentation von Anfang an mitzuschreiben und meinen Code so zu hinterlassen, dass andere ihn lesen können.`,

      `TypeScript gehört zu meinem Alltag, im Frontend mit React und Next.js und im Backend mit Node.js. REST Schnittstellen entwerfe ich selbst und binde sie an. Relationale Datenbanken nutze ich vor allem mit PostgreSQL, SQL auf Join und Index Niveau gehört dazu. Git im Team mit Branches und Reviews ist mir vertraut, ebenso Docker und Pipelines für CI/CD. Angular mit NgRx und NestJS habe ich bisher noch nicht im Projekt eingesetzt. Ich kenne jedoch die grundlegenden Zusammenhänge von komponentenbasierten Oberflächen und zentralem State Management aus React mit Redux und arbeite mich schnell und strukturiert in neue Frameworks ein.`,

      `Zusätzlich baue ich Systeme aus mehreren Agenten für Prozesse im B2B, mit LangGraph und MongoDB Vector Search, dazu n8n für ereignisgesteuerte Workflows. Die Qualität sichere ich über feste Freigabepunkte, an denen ein Mensch entscheidet, bevor das System weiterläuft. Dadurch bleibt jeder Schritt nachvollziehbar. Die Systeme sind lauffähig und getestet, nicht nur Prototyp. Claude Code gehört bei mir selbst zum Alltag, meine Projekte entstehen damit. Eine gewachsene Plattform Schritt für Schritt weiterzuentwickeln, statt sie neu zu bauen, liegt mir dabei näher als der Neubau auf der grünen Wiese.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dadurch habe ich meine Kundenorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team. Außerdem habe ich gelernt, Abläufe zu planen und Finanzen zu organisieren. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert. Software soll im Alltag wirklich helfen, daran messe ich meine Arbeit. Ich wohne in Bonn, Bergisch Gladbach ist für mich gut erreichbar. Das hybride Modell mit zwei bis vier Tagen Home Office passt gut zu mir.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
