// grinnberg GmbH (IT-Personalberatung, Stuttgart) — IT Job als Fullstack-Entwickler (m/w/d), Darmstadt.
//   Impressum grinnberg.de/impressum (verifiziert 17.08.2026): grinnberg GmbH, Taubenheimstraße 14,
//   70372 Stuttgart; GF Michael Weber; HRB 755712 Amtsgericht Stuttgart; USt-ID DE304913596.
//   Anzeige nennt KEINEN Ansprechpartner → Anrede "Sehr geehrte Damen und Herren".
// Quelle: xing.com/jobs/darmstadt-it-job-fullstack-entwickler-157272581 (Job ID 2011534),
//   vom User als Volltext geliefert am 17.08.2026.
// BEREICH 1 (Tech/Full-Stack, bewerbung.md). Gold-Voice, hyphenfrei im Fließtext, Tricolon-Budget 0.
//
// ANSCHREIBEN = UMBAU EINES USER-ENTWURFS (17.08.2026). Der User hat einen eigenen Volltext geliefert;
//   Inhalt, Reihenfolge und Stimme stammen von ihm, aufgelöst wurden nur die Regelverstöße:
//   - 10 Bindestrich-Wörter im Fließtext (Fullstack-Entwickler, QR-Codes, Human-in-the-Loop-Prozesse,
//     KI-System, Cyber-Security-Logs, event-getriebene, CI/CD-Pipelines …) → umformuliert.
//   - 3 Dreier-Aufzählungen (Git/Docker/CI-CD · Fotos/Videos/Bewertungen · AI Orchestra/Travel Agency/
//     GuestMatrix Automation) → auf zwei Glieder gekürzt oder in zwei Sätze getrennt. Jetzt 0.
//   - "Mit freundlichen Grüßen" stand im Fließtext → entfernt, das Template setzt Grußformel + Signatur.
//   - P1 enthielt einen Wunschsatz ("Ich möchte moderne Webanwendungen … mitgestalten") → gestrichen,
//     P1 ist jetzt rein faktisch (User-Regel P1 keine Begründung) und trägt ein Arbeitsweise-Signal.
//   - Kein Ergebnis-Signal im Entwurf (Validator-Pflicht) → "Dadurch bleibt jeder Schritt
//     nachvollziehbar." an die Freigabepunkte gehängt.
//   - ATS-Deckung des Entwurfs lag bei 50% → Frontend, REST, relationale Datenbanken, Tests und agile
//     Abläufe ergänzt, ohne neue Behauptungen aufzustellen.
//   INHALTLICH NEU gegenüber v1 (alles aus dem User-Entwurf): GuestMatrix fachlich erklärt
//   (Tourismus/Hospitality, QR-Codes, Gästeinhalte), KI-Projekte namentlich (AI Orchestra, autonome
//   Travel Agency, GuestMatrix Automation), LangGraph + MongoDB Vector Search + n8n, SecOps-Projekt,
//   Herkunft Tourismus/Café als eigener Arbeitsweise-Absatz.
// STANDORT: Der User schreibt in seinem Entwurf selbst "bereit, mich an den Standort Darmstadt zu
//   binden". Das ersetzt die Vorentscheidung vom selben Tag (nur mobiles Arbeiten + Präsenztage).
//   Übernommen, weil es seine eigene Aussage ist und nicht von mir erfunden.
//
// PASSUNG ~3.4/5. Was TRÄGT:
//   - "Studium der Informatik ODER vergleichbare IT-Ausbildung" → FiSi-Umschulung + Full-Stack-Kurs
//     erfüllt die Formalanforderung. KEIN Formalblocker (anders als EG-12-Behördenrollen).
//   - "Frontend z. B. Angular ODER VERGLEICHBARE Frameworks" → React/Next.js zählt laut Anzeige selbst
//     als vergleichbar. Angular-Lücke bleibt als Tool-Lücke/Einarbeitung stehen, das ist erlaubt.
//   - REST, relationale DBs, Versionsverwaltung, Container/Cloud/CI-CD, automatisierte Tests,
//     agiles Umfeld, gute Deutschkenntnisse (C1) = alles belegt.
// Was DÄMPFT: (1) "Berufserfahrung im Fullstack-Umfeld" → nur eigene Projekte + Praktika, im Brief
//   positiv über Umschulung + gebaute Systeme erzählt, nie verneint. (2) End-Arbeitgeber anonym,
//   Anzeige nennt außer Angular keine Technologie → Restrisiko Java/.NET-Shop, nur im Gespräch klärbar.
// CV: Tech-Default (tagline leer, kein Profil), 1 Projekt (2 ergaben 2 Seiten), Skills Fullstack-first,
//   Education-Override = Systemintegration. 1-Seiten-Regel nach Generate per pdftotext prüfen.
// Run: node generate-bewerbung.mjs companies/grinnberg-fullstack-darmstadt.mjs

export default {
  slug: 'grinnberg-fullstack-darmstadt',
  date: '17.08.2026',
  language: 'de',

  recipient: [
    'grinnberg GmbH',
    'Taubenheimstraße 14',
    '70372 Stuttgart',
  ],

  subject: 'Bewerbung als Fullstack-Entwickler',

  narrative: {
    kern: 'Full Stack Entwickler mit TypeScript, der Webanwendungen selbst baut und daneben Systeme aus mehreren Agenten für automatisierte Prozesse im B2B entwickelt.',
    passung: [
      'Webanwendungen im Frontend und Backend mit React, Next.js, TypeScript und Node.js',
      'GuestMatrix als mandantenfähige Plattform auf PostgreSQL, dazu Agenten mit LangGraph und n8n',
      'Docker, CI/CD und Tests gehören für mich zum Alltag',
    ],
  },
  company: {
    mission: 'grinnberg vermittelt als IT Personalberatung aus Stuttgart Entwickler an Unternehmen und besetzt hier eine Fullstack Stelle in Darmstadt, bei der jemand Webanwendungen im agilen Team über den gesamten Entwicklungsprozess begleitet.',
    verbindung: 'Wer über den gesamten Entwicklungsprozess hinweg verantwortlich ist, muss Anforderungen klären, selbst bauen und das Ergebnis absichern können; genau diesen Weg gehe ich in meinen eigenen Projekten von der ersten Zeile bis zum Deployment.',
  },
  jobKeywords: ['Fullstack', 'Frontend', 'Backend', 'Webanwendungen', 'REST', 'Datenbanken', 'Docker', 'CI/CD', 'agil', 'Tests'],

  cv: {
    // Tech-Default: tagline leer (reboot-Struktur), Schwerpunkte-Zeile trägt die Rollenklammer.
    tagline: '',
    // Bewusst anders formuliert als die Skill-Liste (keine Dopplung-Warnung); trägt zugleich die
    // beiden ATS-Begriffe der Anzeige, die sonst nur im Anschreiben stünden.
    competencies: [
      'Webanwendungen im Fullstack',
      'Analyse & Umsetzung',
      'Tests & Codequalität',
    ],
    // Anzeige verlangt "gute Deutschkenntnisse" → Deutsch zuerst; Englisch ehrlich, nicht als bare B1.
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Genau 1 Projekt → 1 Seite A4 (2 Projekte ergaben im Testlauf 2 Seiten und rissen zusätzlich die
    // ATS-Extraktion der Überschrift "KENNTNISSE"). GuestMatrix belegt relationale DB + REST +
    // automatisierte Tests wörtlich aus der Anzeige und ist dasselbe System wie im Anschreiben.
    projects: [
      {
        title: 'GuestMatrix — Multi-Tenant B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · PostgreSQL · Vercel',
        desc: 'Mandantentrennung per Row-Level-Security in der Datenbank, REST-Endpunkte mit Zod validiert, Vitest-Suite, DSGVO-Löschkonzept und Magic-Byte-Prüfung für Uploads.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'TypeScript, JavaScript, React.js, Next.js 15, HTML5/CSS3, TailwindCSS, Responsive Design' },
      { category: 'Backend & APIs', items: 'Node.js, Express.js, REST-APIs, FastAPI (Python), Zod-Validierung, OOP-Design' },
      { category: 'Datenbanken & DevOps', items: 'PostgreSQL, Supabase, SQL, MongoDB, Docker, CI/CD, Git/GitHub, Linux' },
      { category: 'Methoden & KI', items: 'Scrum/Agile, Jira, Vitest/Playwright, LangGraph, LLM-APIs (Claude, Gemini, OpenAI)' },
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
      `über grinnberg bewerbe ich mich auf die Stelle als Fullstack Entwickler in Darmstadt. Ich baue Webanwendungen im Frontend und im Backend. Mein Stack ist React.js und Next.js mit TypeScript, im Backend Node.js. Tests und Dokumentation schreibe ich von Anfang an mit. Zurzeit bin ich im Frontend und Marketing eines Reisebüros in Köln tätig.`,

      `Angular kenne ich noch nicht im Detail und arbeite mich zügig ein. Im Backend baue ich REST Schnittstellen und arbeite mit relationalen Datenbanken, vor allem PostgreSQL. Git, Docker und Pipelines für CI/CD gehören für mich zum Alltag. Mit agilen Abläufen arbeite ich in meinen Projekten.`,

      `GuestMatrix ist eine mandantenfähige Plattform für Tourismus und Hospitality auf Basis von Next.js und PostgreSQL. Unternehmen sammeln dort über QR Codes Fotos und Videos ihrer Gäste, dazu Bewertungen und Feedback. Daneben baue ich Systeme aus mehreren Agenten für Prozesse im B2B. Dazu gehören AI Orchestra, eine autonome Travel Agency und GuestMatrix Automation. Ich nutze dafür LangGraph und MongoDB Vector Search, dazu n8n als digitales Nervensystem für ereignisgesteuerte Workflows. Die Qualität sichere ich über feste Freigabepunkte, an denen ein Mensch entscheidet, bevor das System weiterläuft. Dadurch bleibt jeder Schritt nachvollziehbar. Parallel baue ich gerade ein KI System, das Logs aus der Cyber Security auswertet.`,

      `Mein Fundament sind zwei Jahre Umschulung zum Fachinformatiker, zuerst Systemintegration in Köln, danach Anwendungsentwicklung mit Schwerpunkt Webentwicklung im Fullstack. Bevor ich in die IT gewechselt bin, war ich im Tourismus tätig und habe ein eigenes Café mit Catering geführt. Das prägt meine Arbeitsweise bis heute: ich denke vom Kunden her und bleibe auch in stressigen Situationen ruhig. Software soll im Alltag wirklich helfen, daran messe ich meine Arbeit. Flexible Arbeitszeiten und mobiles Arbeiten passen gut zu mir, und ich bin bereit, mich an den Standort Darmstadt zu binden.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
