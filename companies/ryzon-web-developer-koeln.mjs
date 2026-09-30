// Ryzon GmbH — Web Developer (m/w/d), Köln.
//   Impressum ryzon.net/pages/impressum (verifiziert 28.08.2026): Ryzon GmbH,
//   Lichtstraße 43F, 50825 Köln; GF Mario Konrad; HRB 87124 Amtsgericht Köln;
//   USt-ID DE815625045; Tel. +49 176 82309906, info@ryzon.net.
//   ⚠️ Handelsregister-Portale führen noch ältere Anschriften (Maastrichter Str. 45,
//   Lindenstraße 17). Das Impressum der Marke ist die aktuelle Adresse und wurde genommen.
//   DIREKTER ARBEITGEBER. Premium-Sportbekleidung (Triathlon, Rad, Lauf) seit 2016, D2C
//   über einen eigenen Shopify-Shop. Anzeige nennt KEINEN Ansprechpartner.
// Quelle: stepstone.de … Web-Developer-m-w-d-Koeln-Ryzon-GmbH--14126428
//   vom User am 28.08.2026 geliefert.
// BEREICH 1, CV-Struktur nach companies/_bereich1-template.mjs.
//
// PASSUNG ~3.6/5. Was TRÄGT:
//   - 🟢🟢 "Grundverständnis moderner AI-Tools im Entwickleralltag" — die Anzeige nennt im
//     Stack sogar CLAUDE CODE. Das ist kein Grundverständnis, das ist Tagesgeschäft:
//     Claude Code, Claude API, LangGraph, AI Orchestra. Der stärkste Punkt der Bewerbung und
//     ein echter Unterschied zu anderen Bewerbern ([[feedback-anschreiben-ai-emphasis]]).
//   - "Sehr sicher in HTML, JavaScript, CSS, Sass" → wörtlich der eigene Stack, inkl. SASS.
//   - "Git (Branching, Pull Requests, Commit-Struktur)" → belegt, im Brief wörtlich aufgegriffen.
//   - E-Commerce-Frontend echt belegt: Vidinli = Shopping-Plattform (Produktlisten, Detailseiten,
//     Warenkorb), Reisegesucht = Reiseportal. Der Shop ist der Kern dieser Stelle.
//   - "Zusammenarbeit mit Marketing, Design und Product" → Reisegesucht war ausdrücklich
//     Frontend UND Marketing; das ist genau diese Schnittstelle.
//   - Standort Köln, rund 30 km von Bonn.
// Was DÄMPFT:
//   (1) 🚩 "Mindestens 3 Jahre Erfahrung" — explizit und hart formuliert. Nicht erfüllt.
//       Wird NICHT verneint; getragen über Praktikum, Reisegesucht, Umschulung, eigene
//       Projekte und den Förderzusage-Absatz.
//   (2) SHOPIFY / LIQUID nicht belegt — ABER die Anzeige sagt selbst "oder die Bereitschaft,
//       dich einzuarbeiten". Damit ist es die weichste Lücke aller bisherigen Bewerbungen.
//       Im Brief offen benannt und über Templating/Komponenten überbrückt.
//   (3) A/B-Tests nicht belegt (Anzeige: "Erfahrung ODER gutes Verständnis"). Im Brief NICHT
//       behauptet und NICHT thematisiert, gehört in die Begleitmail und ins Gespräch.
//   (4) Core Web Vitals: LCP/CLS als Kennzahlen sind in cv.md nicht dokumentiert. Der Brief
//       beschreibt die Sache in eigenen Worten ("kurze Ladezeiten", "Layout, das beim Laden
//       nicht springt"), behauptet aber KEINE Metrik-Expertise ([[feedback-cv-no-overclaim]]).
//   (5) 🚩 "Deine Begeisterung für Sport ist ansteckend" steht als Anforderung in der Anzeige.
//       In cv.md ist NICHTS zu Sport dokumentiert → im Brief bewusst NICHT erfunden.
//       Wenn der User Sport treibt, gehört genau EIN ehrlicher Satz in P6. Rückfrage läuft.
// Run: node generate-bewerbung.mjs companies/ryzon-web-developer-koeln.mjs

export default {
  slug: 'ryzon-web-developer-koeln',
  date: '28.08.2026',
  language: 'de',

  recipient: [
    'Ryzon GmbH',
    'Lichtstraße 43F',
    '50825 Köln',
  ],

  subject: 'Bewerbung als Web Developer',

  narrative: {
    kern: 'Web Developer mit JavaScript und TypeScript, der Oberflächen komponentenweise baut und KI-Werkzeuge im Entwickleralltag nicht nur nutzt, sondern eigene Systeme damit baut.',
    passung: [
      'HTML, CSS und Sass mit JavaScript und TypeScript im Tagesgeschäft',
      'Frontend einer Shopping-Plattform im Praktikum, danach die Webseiten eines Reiseportals',
      'Claude Code und Claude API täglich im Einsatz, dazu eigene Agentensysteme mit LangGraph',
    ],
  },
  company: {
    mission: 'Ryzon baut seit 2016 aus Köln Premium-Sportbekleidung für Triathlon, Rad und Lauf und verkauft sie direkt über den eigenen Shopify-Shop; der Shop ist damit nicht Beiwerk, sondern der Vertriebsweg.',
    verbindung: 'Wenn der Shop der Vertriebsweg ist, entscheidet jede Ladesekunde und jeder Klick im Checkout über Umsatz; genau an dieser Art von Oberfläche habe ich gearbeitet, als ich das Frontend einer Shopping-Plattform mitgebaut habe.',
  },
  jobKeywords: ['Frontend', 'HTML', 'JavaScript', 'CSS', 'Sass', 'Git', 'TypeScript', 'Webentwicklung', 'Deployment', 'agil'],

  cv: {
    // Bereich-1-Struktur des Users (28.08.2026), siehe companies/_bereich1-template.mjs.
    tagline: '',
    competencies: [],
    profil: 'Web Developer · Webentwicklung mit TypeScript',
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
      `Ihre Ausschreibung als Web Developer hat mein Interesse geweckt, deshalb möchte ich mich gerne bei Ihnen bewerben. Ich entwickle Weboberflächen mit HTML, CSS und Sass. Dazu kommen JavaScript und TypeScript. Ich arbeite komponentenweise und achte von Anfang an auf Performance: kurze Ladezeiten und ein Layout, das beim Laden nicht springt. Tests schreibe ich mit Vitest und Playwright.`,

      `Mit Shopify und Liquid habe ich bisher nicht gearbeitet, ich arbeite mich aber zügig ein. Liquid ist eine Template Sprache. Mit Templates, Komponenten und Datenbindung habe ich täglich zu tun.`,

      `Im Praktikum bei Vidinli Software habe ich am Frontend einer Shopping Plattform mit React.js und TypeScript gearbeitet, mit Produktlisten, Detailseiten und Warenkorb. Bei Reisegesucht habe ich danach die Webseiten eines Reiseportals betreut und dort eng mit Gestaltung und Marketing zusammengearbeitet. Git gehört zu meiner täglichen Arbeit, von Branches über Pull Requests bis zu sauberen Commits. Das Deployment übernehme ich selbst, mit Vercel und Docker; agile Abläufe und Jira kenne ich aus der Projektarbeit.`,

      `Der Umgang mit KI Werkzeugen in der Entwicklung ist bei mir Tagesgeschäft. Ich arbeite täglich mit Claude Code und der Claude API. In meinem eigenen Projekt „AI Orchestra“ entwickle ich Systeme aus mehreren Agenten mit LangGraph. KI ist für mich Unterstützung, kein Ersatz: generierten Code prüfe ich selbst und baue feste Kontrollpunkte ein. Dadurch bleibt nachvollziehbar, was das System tut.`,

      `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu zwei Jahre eine Förderung von bis zu 50 % meines Gehalts erhalten. Die entsprechenden Unterlagen stelle ich Ihnen gerne zur Verfügung.`,

      `Mein technisches Fundament ist eine zweijährige Umschulung zum Fachinformatiker. Zuerst habe ich den Schwerpunkt Systemintegration absolviert und mich danach im Bereich Anwendungsentwicklung mit Schwerpunkt Webentwicklung weitergebildet.`,

      `Vor meiner Zeit in der IT war ich mehrere Jahre im Tourismus tätig und habe in Bonn ein eigenes Café geführt. Dadurch habe ich viel im Umgang mit Kunden gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Ich musste dort selbstständig planen, Entscheidungen treffen und Verantwortung übernehmen. Diese Erfahrung hilft mir auch heute bei der Entwicklung, weil ich nicht nur auf den Code schaue, sondern auch darauf, ob eine Lösung für den Nutzer wirklich sinnvoll ist.`,

      `Ich würde mich freuen, Ihnen im persönlichen Gespräch mehr über meine Erfahrungen und meine Projekte zu erzählen.`,
    ],
  },
};
