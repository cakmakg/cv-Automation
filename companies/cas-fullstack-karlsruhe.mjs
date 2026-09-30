// CAS Software AG — Full Stack Developer (w/m/d), Karlsruhe.
//   Impressum cas.de (verifiziert 18.08.2026): CAS Software AG, CAS-Weg 1-5, 76131 Karlsruhe;
//   Vorstand Martin Hubschneider; HRB 108751 Amtsgericht Mannheim; USt-ID DE143593148.
//   DIREKTER ARBEITGEBER, etablierter deutscher CRM-Hersteller. Bewerbung über jobs@cas.de bzw. Portal.
//   KEIN Ansprechpartner genannt → Anrede "Sehr geehrte Damen und Herren".
// Quelle: cas-mitgestalter.de/jobs/full-stack-developer-w-m-d/ (abgerufen 18.08.2026, deutscher
//   Originaltext verifiziert — die englische Zusammenfassung las sich deutlich strenger).
// Produkt: CRM und CPQ + AIA®, also Beziehungsmanagement und Produktkonfiguration.
// BEREICH 1 (Tech/Full-Stack). Anschreiben nach GOLDMUSTER FULLSTACK (bewerbung.md).
//
// PASSUNG ~2.2/5 — schwächster Treffer der Serie #55–#58. User-Entscheidung 18.08.2026: trotzdem
//   bauen, Standort über hybrides Arbeiten plus Präsenztage (KEIN Umzugsversprechen).
//
// WICHTIGE NUANCE aus dem deutschen Original: Java und Angular stehen nur in den AUFGABEN
//   ("Mit Java entwickelst du das Backend, mit Angular das Frontend"), NICHT in den Anforderungen.
//   Die Skills-Liste verlangt lediglich: informatikorientiertes Studium, OOP mit Berufserfahrung
//   > 2 Jahre, und "Gute Kenntnisse in Angular und / oder JavaScript / TypeScript sind EIN PLUS".
//   TypeScript allein zählt also, und selbst das ist nur ein Plus. Die Tech-Lücken sind damit
//   WEICHER als der Stellentitel vermuten lässt — sie sind on the job lernbar.
// Was WIRKLICH BLOCKIERT sind die formalen Hürden:
//   (1) "Du hast einen Abschluss in einem informatikorientierten Studiengang" — flach formuliert,
//       OHNE Ausweichklausel "oder vergleichbare Ausbildung" (anders als grinnberg #55). Dazu
//       verlangen die Unterlagen ausdrücklich Zeugnisse → die Lücke fällt im Unterlagen-Check auf.
//       IM BRIEF NICHT VERNEINEN (User-Regel keine Gap-Negation bei Studium/Formalem):
//       stattdessen zwei Jahre Umschulung positiv erzählen.
//   (2) "Berufserfahrung > 2 Jahre" in objektorientierter Entwicklung — formal nicht belegbar.
//   (3) Karlsruhe ~280 km von Bonn, weiteste Distanz bisher.
// Was TRÄGT: TypeScript (in der Anzeige gleichrangig neben Angular genannt); objektorientierte
//   Entwicklung aus TypeScript/Node; Scrum; Lernbereitschaft und Wissensweitergabe; Docker/CI-CD;
//   Vitest/Playwright. Fachlicher Brückenschlag: GuestMatrix liefert dieselbe Plattform über eine
//   Konfigurationsschicht je Branche unterschiedlich aus — das ist konzeptionell nah an CPQ
//   (Produktkonfiguration) und wird in P3 ausdrücklich verknüpft.
// JAVA/ANGULAR-BEHANDLUNG: als Tool-Lücke mit Einarbeitung, exakt nach dem freigegebenen
//   bitech-Muster (#45). NICHT in jobKeywords hochgewichtet, NICHT in die CV-Skills.
// P4: Wortlaut ab "Bevor ich in die IT gewechselt bin …" ist der vom User am 18.08.2026
//   freigegebene Text (zuerst für bimanu #57). Enthält EINE Dreier-Aufzählung und verbraucht
//   damit das Tricolon-Budget des Briefes — P1 bis P3 daher bewusst listenfrei gehalten.
// Run: node generate-bewerbung.mjs companies/cas-fullstack-karlsruhe.mjs

export default {
  slug: 'cas-fullstack-karlsruhe',
  date: '18.08.2026',
  language: 'de',

  recipient: [
    'CAS Software AG',
    'CAS-Weg 1-5',
    '76131 Karlsruhe',
  ],

  subject: 'Bewerbung als Full Stack Developer',

  narrative: {
    kern: 'Full Stack Entwickler mit TypeScript und Node.js, der objektorientiert arbeitet und seine Anwendungen von der Architekturentscheidung bis zum Deployment selbst verantwortet.',
    passung: [
      'Objektorientierte Entwicklung im Frontend und Backend mit TypeScript und Node.js',
      'Eine Plattform, die über eine Konfigurationsschicht je Branche anders ausgeliefert wird',
      'Scrum, Tests mit Vitest und Playwright, Auslieferung über Docker und CI/CD',
    ],
  },
  company: {
    mission: 'CAS entwickelt in Karlsruhe Lösungen für Beziehungsmanagement und Produktkonfiguration, bei denen Frontend und Backend aus einer Hand kommen und die Qualitätssicherung Teil der Entwicklung ist.',
    verbindung: 'Genau so arbeite ich: Ich baue meine Anwendungen im Frontend und im Backend selbst und sichere sie ab, und mit einer Konfigurationsschicht je Branche habe ich das Prinzip hinter Produktkonfiguration bereits umgesetzt.',
  },
  jobKeywords: ['Java', 'Angular', 'TypeScript', 'objektorientiert', 'Scrum', 'Frontend', 'Backend', 'Fullstack'],

  cv: {
    tagline: '',
    competencies: [
      'Webanwendungen im Fullstack',
      'Architektur & Umsetzung',
      'Tests & Codequalität',
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Genau 1 Projekt → 1 Seite A4. desc hebt die Konfigurationsschicht hervor (Brücke zu CPQ).
    projects: [
      {
        title: 'GuestMatrix — Multi-Tenant B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · PostgreSQL · Vercel',
        desc: 'Mandantentrennung per Row-Level-Security, sektorbasierte Konfiguration je Kunde, REST-Endpunkte mit Zod validiert, Vitest-Suite, DSGVO-Löschkonzept.',
      },
    ],
    // Java und Angular bewusst NICHT gelistet — nicht im Profil vorhanden (CV No Overclaim).
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

// ANSCHREIBEN = UMBAU EINES USER-ENTWURFS (18.08.2026). Volltext vom User, jeder Satz erhalten.
//   Aufgeloest wurden nur die Regelverstoesse (gemessen):
//   - 2 Gedankenstriche ("Frontend und Backend – von der Architekturentscheidung", "ausgeliefert –
//     das kommt Ihrer Produktkonfiguration") -> durch Komma ersetzt.
//   - 1 Bindestrich-Wort "Fullstack-Webentwicklung" -> "Webentwicklung im Fullstack".
//   - KEIN Arbeitsweise-Signal in P1 (Validator-Pflicht "Einleitung zeigt Arbeitsweise"):
//     "Ich entwickle Webanwendungen" -> "Webanwendungen entwickle ich". Loest zugleich den Dash.
//   - 6 Absaetze -> auf die 5 des Goldmusters verdichtet, ohne einen Satz zu streichen:
//     Tests/Scrum/GuestMatrix + Agenten zusammen in P3, Fundament + Cafe + Standort zusammen in P4.
//   - "Mit freundlichen Gruessen" stand im Fliesstext -> entfernt, das Template setzt es.
//   UEBERNOMMEN aus seinem Entwurf: Supabase statt PostgreSQL bei GuestMatrix, "noch nicht produktiv
//   eingesetzt ... sind aber dieselben", "In neue Sprachen und Frameworks", "sehr nahe" bei der
//   Produktkonfiguration, "vereinbarten Praesenztage", Doppelpunkt nach "Fachinformatiker".
//   ABWEICHUNG VOM GOLDMUSTER, bewusst so belassen: P1 enthaelt weder den Tests-Satz noch den
//   aktuellen Job im Reisebuero; der User hat beide gestrichen. Bei Bedarf wieder aufnehmen.
//   Tricolon-Budget: 1 von 1 (der freigegebene P4-Satz "Finanzen zu steuern, Verkaeufe zu
//   gestalten und ..."). P1 bis P3 daher listenfrei.
  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `bei CAS bewerbe ich mich als Full Stack Developer in Karlsruhe. Webanwendungen entwickle ich im Frontend und Backend, von der Architekturentscheidung bis zum Deployment.`,

      `Objektorientiert arbeite ich seit meinen ersten eigenen Projekten, im Frontend und Backend mit TypeScript und Node.js. Klassen, Interfaces und klar geschnittene Schichten sind für mich Alltag. Java und Angular habe ich noch nicht produktiv eingesetzt, die Konzepte dahinter sind aber dieselben. In neue Sprachen und Frameworks arbeite ich mich zügig ein.`,

      `Getestet wird bei mir mit Vitest und Playwright, ausgeliefert über Docker und CI/CD. In meinen Projekten arbeite ich mit Scrum. Ein Beispiel ist GuestMatrix, eine mandantenfähige Plattform auf Next.js und Supabase. Die Mandantentrennung erfolgt über Row Level Security direkt in der Datenbank, Eingaben validiere ich mit Zod. Dadurch fallen Fehler beim Commit auf und nicht erst im laufenden Betrieb. Über eine Konfigurationsschicht wird dieselbe Plattform je Branche unterschiedlich ausgeliefert, das kommt Ihrer Produktkonfiguration sehr nahe. Daneben baue ich Systeme aus mehreren Agenten für Prozesse im B2B, unter anderem AI Orchestra. Dafür nutze ich LangGraph und RAG über Vector Search. Die Qualität sichere ich über feste Freigabepunkte, an denen immer ein Mensch entscheidet, bevor das System weiterläuft.`,

      `Mein Fundament sind zwei Jahre Umschulung zum Fachinformatiker: zuerst Systemintegration in Köln, danach Anwendungsentwicklung mit Schwerpunkt Webentwicklung im Fullstack. Bevor ich in die IT gewechselt bin, war ich im Tourismus tätig und habe ein eigenes Café mit Catering geführt. In dieser Zeit habe ich meine Kundenorientierung, Kommunikationsfähigkeit und meine Fähigkeit zur Planung und Organisation entwickelt. Ich habe gelernt, Finanzen zu steuern, Verkäufe zu gestalten und in stressigen Situationen den Überblick zu behalten. Diese Erfahrungen prägen meine Arbeit bis heute: Ich denke konsequent vom Kunden her, bleibe auch unter Druck ruhig und baue Software, die im Alltag wirklich funktioniert. Die Anzeige nennt hybrides Arbeiten und flexible Wochenstunden. Auf dieser Basis passt der Standort für mich, ich wohne in Bonn und komme für die vereinbarten Präsenztage nach Karlsruhe.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
