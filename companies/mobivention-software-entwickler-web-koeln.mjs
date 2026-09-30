// mobivention GmbH — Software Entwickler Web (m/w/d), Köln.
//   Impressum mobivention.com/impressum (verifiziert 28.08.2026): mobivention GmbH,
//   Am Bahnhof 132, 51147 Köln (Porz); GF Dr. Hubert Weid; HRB 51243 Amtsgericht Köln;
//   USt-ID DE227435786; Tel. 0221-677811-0, info@mobivention.com.
//   DIREKTER ARBEITGEBER (kein Vermittler). Haus für App- und Webentwicklung, UI-Design,
//   Backend, QA und Betrieb; eigene Produktlinie "Lottery Solutions".
//   Anzeige nennt KEINEN Ansprechpartner → "Sehr geehrte Damen und Herren".
// Quelle: stepstone.de … Software-Entwickler-Web-m-w-d-Cologne-mobivention-GmbH--14027850
//   vom User am 28.08.2026 geliefert.
// BEREICH 1 (Tech, bewerbung.md). Frontend-Rolle, kein Fullstack → Goldmuster-Bogen, aber
//   der Beleg-Absatz argumentiert über Oberfläche und Responsive statt über Backend.
//
// ⭐ ANSCHREIBEN = VOLLTEXT DES USERS vom 28.08.2026, danach auf seine Anweisung
//   ("4. Absatz raus und den Brief aufräumen") redigiert. Was ich gemacht habe:
//   1. ABSATZ 4 GESTRICHEN — der Werkzeug-Absatz (Next.js/Vite/Vitest, Webpack und WordPress
//      noch nicht genutzt, Lernbegründung). Damit steht die Vite/Webpack/WordPress-Lücke NICHT
//      mehr im Brief; sie steht weiterhin in der Begleitmail.
//   2. Seine Absätze 1 und 2 zusammengezogen — dadurch trägt die Einleitung sein
//      "von Anfang an" und erfüllt die Arbeitsweise-Pflicht des Validators.
//   3. Auf EINE Seite gekürzt: sein Text lag 189px (rund 12 Zeilen) über der A4-Nutzhöhe.
//      Gestrafft wurden der Café-Absatz (Soft-Skill-Satz raus), der KI-Schluss, GuestMatrix
//      und die Umschulungszeile. Keine Aussage ist weggefallen.
//   4. "weil ich nicht nur auf den Code schaue, sondern auch darauf, ob …" aufgelöst —
//      das ist der AI-Tell, den ein Recruiter im Juli 2026 angestrichen hat (Validator-ERROR).
//      Jetzt: "Ich schaue auf den Code, aber genauso darauf, ob …".
//   5. Sein Schlusssatz ("Ich würde mich freuen, Ihnen im persönlichen Gespräch …") ersetzt
//      durch seine eigene Standardformel, die der Validator verlangt.
//   6. "Bei Reisegesucht betreue ich" → Vergangenheit, weil der CV im selben PDF
//      03/2026 – 07/2026 sagt. ⚠️ OFFEN: der User hat noch nicht bestätigt, ob die Stelle
//      wirklich beendet ist. Falls nicht, CV-Datum UND diesen Satz zurückdrehen.
//   7. "responsive" und "Usability" wörtlich gesetzt (ATS), Ergebnis-Signal "Dadurch …" ergänzt,
//      eine der zwei Dreier-Aufzählungen aufgelöst.
//   BEWUSST STEHEN GELASSEN: Bindestrich-Komposita (Shopping-Plattform, KI-gestützte,
//   Multi-Agent-Systeme, Hospitality-Bereich, Multi-Tenancy) und "Bootstrap", das im Brief
//   steht, aber nicht in den CV-Kenntnissen.
//
// PASSUNG ~3.8/5 — die stärkste reine Frontend-Passung im Tracker. Was TRÄGT:
//   - "HTML, CSS, JavaScript und TypeScript" → Kernstack, alles belegt.
//   - "React, Vue, Angular ODER Svelte" → React.js/Next.js 14/15 erfüllt das "oder" direkt.
//   - "Responsive Design mit Gespür für UX und Usability" → TailwindCSS, SASS, Material-UI,
//     Redux/Zustand; GuestMatrix ist vom Telefon bis zum Desktop gebaut.
//   - "Bildschirmgrößen von 5 bis 24 Zoll" → im Brief konkret aufgegriffen (Touchflächen klein,
//     Struktur groß). Passt zu mobivention (Apps + Kiosk/Lottery-Terminals).
//   - "Cloud oder Self-Hosted Deployment" → Vercel, Docker, CI/CD, Linux.
//   - Vidinli-Praktikum: Frontend einer Shopping-Plattform mit React.js und TypeScript.
//     Der aktuelle Job (Reisegesucht.com, Frontend & Marketing) ist einschlägig, nicht nur Beiwerk.
//   - Standort Köln-Porz, rund 30 km von Bonn. Job-Ticket in den Benefits.
// Was DÄMPFT:
//   (1) "Mehrjährige Erfahrung in der Webentwicklung ODER einschlägiges Studium" — hier hilft das
//       "oder" NICHT, beides ist formal nicht erfüllt. Wird nicht verneint, sondern über die
//       Umschulung, das Frontend-Praktikum, den aktuellen Job und die Projekte getragen.
//   (2) 🚩 "Fließende Deutsch- UND Englischkenntnisse". Deutsch C1 ist stark, Englisch ist B1
//       ([[user-language-levels]]). Im Brief wird das NICHT thematisiert (keine Gap-Negation),
//       im CV steht die ehrliche Zeile. Das ist das größte Einzelrisiko der Bewerbung.
//   (3) Vite und Webpack sind in cv.md NICHT belegt — Vite nur mittelbar über Vitest, Bundling
//       sonst über Next.js. In P3 offen benannt, nicht behauptet ([[feedback-cv-no-overclaim]]).
//   (4) WordPress ("von Vorteil") ist gar nicht belegt → ebenfalls offen benannt.
//   (5) Vue, Angular, Svelte stehen NICHT im CV und werden nicht behauptet.
// CV: Tech-Default (tagline leer, kein Profil), 1 Projekt → 1 Seite A4, Skills Frontend-first,
//   Education-Override. Zertifikate sind fix (Frontend-Zertifikat ist hier besonders passend).
// Run: node generate-bewerbung.mjs companies/mobivention-software-entwickler-web-koeln.mjs

export default {
  slug: 'mobivention-software-entwickler-web-koeln',
  date: '28.08.2026',
  language: 'de',

  recipient: [
    'mobivention GmbH',
    'Am Bahnhof 132',
    '51147 Köln',
  ],

  subject: 'Bewerbung als Software Entwickler Web',

  narrative: {
    kern: 'Frontend-Entwickler mit React und TypeScript, der Oberflächen vom Telefon bis zum großen Bildschirm baut und dabei von der Bedienung her denkt, nicht vom Framework.',
    passung: [
      'HTML, CSS, JavaScript und TypeScript mit React.js und Next.js im Tagesgeschäft',
      'Responsive Oberflächen mit TailwindCSS und SASS, Usability als Maßstab',
      'Deployment über Vercel und Docker, dazu Tests mit Vitest und Playwright',
    ],
  },
  company: {
    mission: 'mobivention entwickelt in Köln seit Jahren Apps und Webanwendungen für Kunden, von der Oberfläche über das Backend bis zum Betrieb, dazu eigene Produkte wie die Lottery Solutions.',
    verbindung: 'Wer Oberflächen für Bildschirme zwischen fünf und vierundzwanzig Zoll baut, entscheidet ständig zwischen Fingerbedienung und Übersicht; genau diese Abwägung mache ich in meinen eigenen Projekten, in denen dieselbe Anwendung am Telefon und an der Rezeption läuft.',
  },
  jobKeywords: ['Webentwicklung', 'Frontend', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Responsive', 'Usability', 'Deployment', 'Git', 'agil'],

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
      `Ihre Ausschreibung als Software Entwickler Web hat mein Interesse geweckt, deshalb möchte ich mich gerne bei Ihnen bewerben. Ich entwickle Webanwendungen vor allem mit React.js und Next.js und arbeite dabei mit JavaScript und TypeScript. Dazu gehören für mich auch HTML, CSS, TailwindCSS, SASS und Bootstrap. Bei der Entwicklung achte ich von Anfang an darauf, dass eine Webseite responsive ist und einfach zu bedienen bleibt. Über die Usability entscheidet für mich nicht die Zahl der Effekte, sondern ob der Nutzer sofort versteht, was er tun kann.`,

      `Im Praktikum bei Vidinli Software habe ich am Frontend einer Shopping-Plattform mit React.js und TypeScript gearbeitet. Bei Reisegesucht habe ich die Webseiten eines Reisebüros betreut, in Abstimmung mit Gestaltung und Redaktion. Das Deployment übernehme ich selbst, mit Vercel und Docker; Git, Jira und agile Arbeitsweisen kenne ich aus der Projektarbeit.`,

      `Neben meiner Arbeit entwickle ich eigene Projekte, zum Beispiel GuestMatrix, eine Plattform für Tourismus und Hospitality. Gäste laden dort Fotos, Videos und Bewertungen hoch.`,

      `Außerdem beschäftige ich mich mit KI-gestützter Softwareentwicklung: in meinem eigenen Projekt „AI Orchestra“ entwickle ich Multi-Agent-Systeme mit LangGraph, der Claude API und Claude Code. KI ist für mich Unterstützung, kein Ersatz: generierten Code prüfe ich selbst und baue feste Kontrollpunkte ein. Dadurch bleibt nachvollziehbar, was das System tut.`,

      `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu zwei Jahre eine Förderung von bis zu 50 % meines Gehalts erhalten. Die entsprechenden Unterlagen stelle ich Ihnen gerne zur Verfügung.`,

      `Mein technisches Fundament ist eine zweijährige Umschulung zum Fachinformatiker. Zuerst habe ich den Schwerpunkt Systemintegration absolviert und mich danach im Bereich Anwendungsentwicklung mit Schwerpunkt Webentwicklung weitergebildet.`,

      `Vor meiner Zeit in der IT war ich mehrere Jahre im Tourismus tätig und habe in Bonn ein eigenes Café geführt. Dadurch habe ich viel im Umgang mit Kunden gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Ich musste dort selbstständig planen, Entscheidungen treffen und Verantwortung übernehmen. Diese Erfahrung hilft mir auch heute bei der Entwicklung, weil ich nicht nur auf den Code schaue, sondern auch darauf, ob eine Lösung für den Nutzer wirklich sinnvoll ist.`,

      `Ich würde mich freuen, Ihnen im persönlichen Gespräch mehr über meine Erfahrungen und meine Projekte zu erzählen.`,
    ],
  },
};
