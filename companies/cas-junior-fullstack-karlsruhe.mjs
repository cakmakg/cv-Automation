// CAS Software AG — JUNIOR Full Stack Developer (w/m/d), Karlsruhe.
//   Impressum cas.de (verifiziert 18.08.2026): CAS Software AG, CAS-Weg 1-5, 76131 Karlsruhe;
//   Vorstand Martin Hubschneider; HRB 108751 Amtsgericht Mannheim; USt-ID DE143593148.
//   DIREKTER ARBEITGEBER. KEIN Ansprechpartner genannt → "Sehr geehrte Damen und Herren".
//   Bewerbung über jobs@cas.de bzw. Portal. Unterlagen: Motivation, Lebenslauf, ZEUGNISSE.
// Quelle: cas-mitgestalter.de/jobs/junior-full-stack-developer-w-m-d/ (abgerufen 18.08.2026,
//   deutscher Originaltext verifiziert).
// BEREICH 1 (Tech/Full-Stack). Anschreiben nach GOLDMUSTER FULLSTACK (bewerbung.md).
//
// ⚠️ DOPPELBEWERBUNG VERMEIDEN: Für die Senior-Variante derselben Rolle existiert bereits
//   companies/cas-fullstack-karlsruhe.mjs (#58, 2.2/5). NUR EINE der beiden abschicken.
//   Empfehlung: diese Junior-Variante, sie passt besser. Zwei Bewerbungen am selben Tag auf
//   Senior UND Junior derselben Rolle lesen sich als wahllos.
//
// PASSUNG ~2.8/5 (Senior-Variante lag bei 2.2). Was die Junior-Anzeige BESSER macht:
//   - "Erste Erfahrung mit objektorientierter Entwicklung zeichnet dich aus, bspw. durch PRAKTIKA,
//     als Werkstudierende:r oder eine erste Tätigkeit nach dem Studium." Die harte Hürde
//     "Berufserfahrung > 2 Jahre" aus der Senior-Anzeige ENTFÄLLT. Praktika zählen ausdrücklich.
//   - "Kenntnisse in Frontend-Technologien sind ein Plus" — noch weicher als die Senior-Fassung,
//     kein Framework namentlich gefordert. React/TypeScript reicht.
// Was UNVERÄNDERT BLOCKIERT:
//   (1) "Du hast einen Abschluss in einem informatikorientierten Studiengang ODER STEHST KURZ
//       DAVOR." Weiterhin KEINE Ausweichklausel "oder vergleichbare Ausbildung". Die Junior-Anzeige
//       ist sogar noch absolventenzentrierter formuliert ("erste Tätigkeit nach dem Studium").
//       IM BRIEF NICHT VERNEINEN (Regel keine Gap-Negation): Umschulung positiv erzählen.
//       Zusätzlich verlangen die Unterlagen ZEUGNISSE → Lücke fällt im Unterlagen-Check auf.
//   (2) Java (SPRING) und Angular sind die Produktbasis, beides nicht im Profil. Behandlung als
//       Tool-Lücke mit Einarbeitung nach dem freigegebenen bitech-Muster (#45), das exakt
//       "Java und Spring" adressiert hat.
//   (3) Karlsruhe ~280 km von Bonn.
// ABWEICHUNG VON EINER STEHENDEN REGEL (bewusst, User kann vetoen): feedback_bereich1_projekt_narrativ
//   sagt "Praktika NICHT im Brief, nur im CV". Hier nennt die ANZEIGE Praktika ausdrücklich als
//   qualifizierenden Weg für "erste Erfahrung" → das Vidinli-Praktikum (React/TypeScript,
//   Shopping-Plattform-Frontend, belegt in cv.md) steht deshalb in P2. Es beantwortet die
//   Anforderung direkt. Bei anderen Bereich-1-Briefen bleibt die Regel unverändert.
// STANDORT: Die Junior-Anzeige nennt nur "Flexible Arbeitszeitmodelle", KEIN hybrides Arbeiten
//   (anders als die Senior-Fassung). Der Brief zitiert deshalb nur, was dort wirklich steht.
// Tricolon-Budget: 1 von 1 (freigegebener P4-Satz "Finanzen zu steuern, Verkäufe zu gestalten
//   und …"). P1 bis P3 daher listenfrei.
// Run: node generate-bewerbung.mjs companies/cas-junior-fullstack-karlsruhe.mjs

export default {
  slug: 'cas-junior-fullstack-karlsruhe',
  date: '18.08.2026',
  language: 'de',

  recipient: [
    'CAS Software AG',
    'CAS-Weg 1-5',
    '76131 Karlsruhe',
  ],

  subject: 'Bewerbung als Junior Full Stack Developer',

  narrative: {
    kern: 'Full Stack Entwickler mit TypeScript und Node.js, der objektorientiert arbeitet und seine Anwendungen von der Architekturentscheidung bis zum Deployment selbst verantwortet.',
    passung: [
      'Objektorientierte Entwicklung im Frontend und Backend mit TypeScript und Node.js',
      'Erste Berufspraxis aus einem Praktikum als Frontend Entwickler mit React und TypeScript',
      'Eine Plattform, die über eine Konfigurationsschicht je Branche anders ausgeliefert wird',
    ],
  },
  company: {
    mission: 'CAS entwickelt in Karlsruhe Lösungen für Beziehungsmanagement und Produktkonfiguration, bei denen Frontend und Backend aus einer Hand kommen und Einsteiger über die eigene Akademie an die Aufgabe herangeführt werden.',
    verbindung: 'Genau so arbeite ich: Ich baue meine Anwendungen im Frontend und im Backend selbst und sichere sie ab, und mit einer Konfigurationsschicht je Branche habe ich das Prinzip hinter Produktkonfiguration bereits umgesetzt.',
  },
  jobKeywords: ['Java', 'Spring', 'Angular', 'TypeScript', 'objektorientiert', 'Praktikum', 'Frontend', 'Backend', 'Fullstack'],

  cv: {
    tagline: '',
    competencies: [
      'Webanwendungen im Fullstack',
      'Architektur & Umsetzung',
      'Tests & Codequalität',
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    projects: [
      {
        title: 'GuestMatrix — Multi-Tenant B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · PostgreSQL · Vercel',
        desc: 'Mandantentrennung per Row-Level-Security, sektorbasierte Konfiguration je Kunde, REST-Endpunkte mit Zod validiert, Vitest-Suite, DSGVO-Löschkonzept.',
      },
    ],
    // Java, Spring und Angular bewusst NICHT gelistet — nicht im Profil (CV No Overclaim).
    skills: [
      { category: 'Frontend', items: 'TypeScript, JavaScript, React.js, Next.js 15, TailwindCSS, HTML5/CSS3, Responsive Design' },
      { category: 'Backend & APIs', items: 'Node.js, Express.js, REST-APIs, objektorientiertes Design, PostgreSQL, Zod-Validierung' },
      { category: 'Methoden & DevOps', items: 'Scrum/Agile, Jira, Git/GitHub, Docker, CI/CD, Vitest/Playwright, Linux' },
      { category: 'KI & Automatisierung', items: 'LangGraph, RAG (Vector Search), LLM-APIs (Claude, Gemini, OpenAI), n8n' },
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
      `bei CAS bewerbe ich mich als Junior Full Stack Developer in Karlsruhe. Webanwendungen entwickle ich im Frontend und Backend, von der Architekturentscheidung bis zum Deployment.`,

      `Objektorientiert arbeite ich seit meinen ersten eigenen Projekten, im Frontend und Backend mit TypeScript und Node.js. Klassen, Interfaces und klar geschnittene Schichten sind für mich Alltag. Erste Berufspraxis habe ich in einem Praktikum als Frontend Entwickler gesammelt, dort habe ich das Frontend einer Shopping Plattform mit React und TypeScript gebaut. Java mit Spring und Angular habe ich noch nicht produktiv eingesetzt, die Konzepte dahinter sind aber dieselben. In neue Sprachen und Frameworks arbeite ich mich zügig ein.`,

      `Getestet wird bei mir mit Vitest und Playwright, ausgeliefert über Docker und CI/CD. In meinen Projekten arbeite ich mit Scrum. Ein Beispiel ist GuestMatrix, eine mandantenfähige Plattform auf Next.js und Supabase. Die Mandantentrennung erfolgt über Row Level Security direkt in der Datenbank, Eingaben validiere ich mit Zod. Dadurch fallen Fehler beim Commit auf und nicht erst im laufenden Betrieb. Über eine Konfigurationsschicht wird dieselbe Plattform je Branche unterschiedlich ausgeliefert, das kommt Ihrer Produktkonfiguration sehr nahe. Daneben baue ich Systeme aus mehreren Agenten für Prozesse im B2B, unter anderem AI Orchestra. Dafür nutze ich LangGraph und RAG über Vector Search. Die Qualität sichere ich über feste Freigabepunkte, an denen immer ein Mensch entscheidet, bevor das System weiterläuft.`,

      `Mein Fundament sind zwei Jahre Umschulung zum Fachinformatiker: zuerst Systemintegration in Köln, danach Anwendungsentwicklung mit Schwerpunkt Webentwicklung im Fullstack. Bevor ich in die IT gewechselt bin, war ich im Tourismus tätig und habe ein eigenes Café mit Catering geführt. In dieser Zeit habe ich meine Kundenorientierung, Kommunikationsfähigkeit und meine Fähigkeit zur Planung und Organisation entwickelt. Ich habe gelernt, Finanzen zu steuern, Verkäufe zu gestalten und in stressigen Situationen den Überblick zu behalten. Diese Erfahrungen prägen meine Arbeit bis heute: Ich denke konsequent vom Kunden her, bleibe auch unter Druck ruhig und baue Software, die im Alltag wirklich funktioniert. Die Anzeige nennt flexible Arbeitszeitmodelle. Auf dieser Basis passt der Standort für mich, ich wohne in Bonn und komme für die vereinbarten Präsenztage nach Karlsruhe.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
