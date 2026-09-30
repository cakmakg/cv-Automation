// CODARI (IT & Engineering Recruiting, DACH) — Full-Stack Entwickler (m/w/d), Düsseldorf.
//   Impressum codari.de/impressum (verifiziert 28.08.2026): CODARI GbR, Eichendorffstraße 38,
//   47800 Krefeld; Gesellschafter Antonia Kruck und Adam Rupaszov; USt-ID DE369759837;
//   zweiter Standort Breite Straße 3, 40213 Düsseldorf. KEIN HRB (GbR).
//   Anzeige nennt KEINEN Ansprechpartner, nur info@codari.de → "Sehr geehrte Damen und Herren".
// Quelle: careers.codari.de/job/32053/full-stack-entwickler-m-w-d/dusseldorf (Job ID 32053),
//   vom User am 28.08.2026 geliefert.
// BEREICH 1 (Tech/Full-Stack, bewerbung.md) → GOLDMUSTER-Linie (grinnberg) war die v1-Fassung.
//
// ⭐ ANSCHREIBEN = VOLLTEXT DES USERS vom 28.08.2026, WÖRTLICH übernommen (9 Absätze).
//   Der User hat die generierte Fassung überarbeitet und zurückgegeben. Genau DREI Eingriffe,
//   alle angekündigt, keine stilistischen:
//   1. P1 begann mit einer Lücke (" bewerbe ich mich auf die Stelle …") → "über CODARI" eingesetzt,
//      wie im Goldmuster ("über grinnberg bewerbe ich mich …").
//   2. Der Umschulungs-Absatz war grammatisch gebrochen ("bildet eine zweijährige Umschulung zum
//      Fachinformatiker in Köln absolviert und mich anschließend …") → in zwei Sätze aufgelöst,
//      ohne ein einziges Wort zu ersetzen.
//   3. "Mit freundlichen Grüßen" + Namenszeile entfernt: Template setzt Grußformel und Signatur
//      selbst, sonst doppelt ([[feedback-anschreiben-template-closing]]).
//   BEWUSST STEHEN GELASSEN, obwohl der Validator meckert: die Bindestrich-Komposita
//   (REST-Schnittstellen, CI/CD-Pipelines, KI-Agenten, B2B-Prozesse), "sowohl … als auch" in P1
//   und die 9 Absätze. Der Text des Users hat Vorrang vor den Stilregeln
//   ([[feedback-sent-applications-immutable]]-Logik: seine Stimme, nicht meine).
//   "50 %" mit Prozentzeichen ist seine Schreibweise, nicht ausgeschrieben.
//
// ACHTUNG PERSONALVERMITTLUNG: CODARI ist nicht der Arbeitgeber, sondern vermittelt an ein
//   "führendes Medizinunternehmen". Der Endkunde wird nicht genannt. Die Anzeige nennt im Titel
//   Düsseldorf, im Benefit-Block aber "ein moderner Arbeitsplatz im Herzen von Köln".
//   Beides steht so in der Anzeige; P6 spricht den Widerspruch offen an, statt ihn zu raten.
//
// PASSUNG ~3.6/5. Was TRÄGT:
//   - "PHP, Node.js ODER Python" → das "oder" macht Node.js ausreichend. Kein Blocker.
//   - "MySQL, PostgreSQL ODER NoSQL" → PostgreSQL/Supabase + MongoDB, beides belegt.
//   - HTML, CSS, JavaScript + modernes Framework → React.js/Next.js wörtlich in der Anzeige genannt.
//   - Git, Tests/Debugging, eigenverantwortliche Arbeitsweise → belegt.
//   - "Verhandlungssichere Deutschkenntnisse (mind. C1)" → C1, steht im CV.
//   - "Verständnis für die besonderen Anforderungen im medizinischen Bereich (Datenschutz)" →
//     ehrlich belegbar über GuestMatrix: Mandantentrennung per Row Level Security IN der Datenbank,
//     DSGVO-Löschkonzept, Magic-Byte-Prüfung für Uploads. Kein Medizin-Claim, nur Datenschutz-Praxis.
// Was DÄMPFT: (1) "Tiefgehende Erfahrung in der Backend-Entwicklung" → belegte Berufspraxis reicht
//   dafür nicht; wird NICHT verneint, sondern durch gebaute Systeme + Förderzusage-Absatz getragen.
//   (2) PHP nicht im Einsatz gehabt — offen als Einarbeitung benannt, erlaubt (Tool-Lücke).
//   (3) Endkunde anonym → Stack des Hauses unbekannt (PHP-Shop möglich), nur im Gespräch klärbar.
//   (4) Kein Gehalt genannt.
// MySQL steht bewusst NICHT im CV: in cv.md nicht belegt ([[feedback-cv-no-overclaim]]).
//   PostgreSQL erfüllt die Anforderung ohnehin ("oder").
// FÖRDERZUSAGE-ABSATZ: bewusst gesetzt, weil die Anzeige "tiefgehende Erfahrung" verlangt und ein
//   Vermittler ein zusätzliches Argument gegenüber seinem Kunden gut gebrauchen kann.
// CV: Tech-Default (tagline leer, kein Profil), 1 Projekt → 1 Seite A4, Education-Override.
// Run: node generate-bewerbung.mjs companies/codari-fullstack-duesseldorf.mjs

export default {
  slug: 'codari-fullstack-duesseldorf',
  date: '28.08.2026',
  language: 'de',

  recipient: [
    'CODARI GbR',
    'Eichendorffstraße 38',
    '47800 Krefeld',
  ],

  subject: 'Bewerbung als Full Stack Entwickler',

  narrative: {
    kern: 'Full Stack Entwickler mit TypeScript, der Webanwendungen im Frontend und Backend selbst baut und Datenschutz dabei in die Architektur legt statt hinterher darauf zu prüfen.',
    passung: [
      'Frontend mit React.js und Next.js, Backend mit Node.js und REST auf PostgreSQL',
      'GuestMatrix als mandantenfähige Plattform mit Row Level Security und Löschkonzept nach DSGVO',
      'Tests, Git und Auslieferung über Pipelines gehören für mich zum Alltag',
    ],
  },
  company: {
    mission: 'CODARI vermittelt aus Krefeld und Düsseldorf Entwicklerinnen und Entwickler an Unternehmen in der DACH-Region und besetzt hier eine Full Stack Stelle bei einem Medizinunternehmen, dessen Webanwendungen medizinische Prozesse tragen.',
    verbindung: 'Software im medizinischen Umfeld muss nachvollziehbar bleiben und Daten sauber trennen, sonst hilft sie niemandem; genau so baue ich meine eigenen Projekte, von der Mandantentrennung in der Datenbank bis zum Löschkonzept.',
  },
  jobKeywords: ['Full Stack', 'Frontend', 'Backend', 'Webanwendungen', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Git', 'Tests', 'Datenschutz'],

  cv: {
    // Bereich-1-Struktur des Users (28.08.2026), siehe companies/_bereich1-template.mjs:
    // Rollenklammer im Profil, KEINE Schwerpunkte-Zeile, zwei feste Projekte.
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
      { category: 'Frontend', items: 'HTML5/CSS3, JavaScript, TypeScript, React.js, Next.js 15, TailwindCSS, SASS, Responsive Design' },
      { category: 'UI & Usability', items: 'Material-UI, Redux, Zustand, React Flow, Komponenten-Design, Vitest/Playwright' },
      { category: 'Backend & APIs', items: 'Node.js, Express.js, REST-APIs, PostgreSQL/Supabase, MongoDB, Zod-Validierung' },
      { category: 'Deployment & Methoden', items: 'Vercel, Docker, CI/CD, Git/GitHub, Linux, Agile/Scrum, Jira' },
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
      `über CODARI bewerbe ich mich auf die Stelle als Full Stack Entwickler. Ich entwickle Webanwendungen sowohl im Frontend als auch im Backend und arbeite dabei hauptsächlich mit JavaScript und TypeScript. Im Frontend nutze ich React.js und Next.js, im Backend Node.js mit Express.`,

      `Als relationale Datenbank arbeite ich mit PostgreSQL, außerdem habe ich Erfahrung mit MongoDB. Ich entwickle REST-Schnittstellen und validiere Eingaben mit Zod. Für die Qualität meiner Anwendungen setze ich automatisierte Tests ein. Git nutze ich täglich, ebenso Docker und CI/CD-Pipelines für die Auslieferung.`,

      `PHP habe ich bisher noch nicht eingesetzt. Wenn es für die Position beziehungsweise den Kunden erforderlich ist, arbeite ich mich gerne in die Sprache und die bestehenden Strukturen ein. Neue Technologien lerne ich in der Regel schnell, wenn ich sie direkt in einem konkreten Projekt anwenden kann.`,

      `Datenschutz und Sicherheit berücksichtige ich bei meinen Projekten bereits bei der Architektur. Ein Beispiel dafür ist GuestMatrix, eine mandantenfähige Plattform auf Basis von Next.js und PostgreSQL. Die Trennung der Mandanten erfolgt dabei direkt auf Datenbankebene über Row Level Security. Zusätzlich habe ich ein Löschkonzept nach DSGVO umgesetzt und eine Prüfung für hochgeladene Dateien integriert, die nicht nur auf die Dateiendung, sondern auf den tatsächlichen Dateityp schaut.`,

      `Daneben beschäftige ich mich mit Systemen aus mehreren KI-Agenten für B2B-Prozesse und arbeite dabei unter anderem mit LangGraph und MongoDB Vector Search. Bei solchen Systemen ist mir wichtig, dass nicht alles automatisch abläuft. Deshalb baue ich feste Freigabepunkte ein, an denen ein Mensch den nächsten Schritt kontrollieren und freigeben kann. So bleiben die Abläufe nachvollziehbar und kontrollierbar.`,

      `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu zwei Jahre eine Förderung von bis zu 50 % meines Gehalts erhalten. Die entsprechenden Unterlagen reiche ich Ihnen gerne ein.`,

      `Mein technisches Fundament bildet eine zweijährige Umschulung zum Fachinformatiker. Den Teil Systemintegration habe ich in Köln absolviert und mich anschließend im Bereich Anwendungsentwicklung mit Schwerpunkt Full Stack Web Development weitergebildet.`,

      `Vor meinem Wechsel in die IT war ich mehrere Jahre im Tourismus tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dadurch habe ich gelernt, Software und technische Lösungen auch aus der Sicht der Menschen zu betrachten, die sie später tatsächlich nutzen. Für mich sollte Software nicht nur technisch funktionieren, sondern im Alltag einen konkreten Nutzen bringen und Probleme möglichst einfach lösen.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
