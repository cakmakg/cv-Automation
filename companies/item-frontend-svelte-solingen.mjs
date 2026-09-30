// item Industrietechnik GmbH — Frontend Entwickler (m/w/d) Svelte / TypeScript, Solingen.
//   Impressum de.item24.com/impressum (verifiziert 28.08.2026): item Industrietechnik GmbH,
//   Friedenstraße 107-109, 42699 Solingen; HRB 14912 Amtsgericht Wuppertal;
//   GF Stephan Buchmann, Dr. Heiner Giese, Thomas Neller, Florian Palatini;
//   USt-ID DE120959471; Tel. +49 212 6580-0, info@item24.com.
//   DIREKTER ARBEITGEBER (kein Vermittler), Hersteller von Systembaukästen für den
//   industriellen Maschinenbau; die Stelle sitzt im hauseigenen E-Commerce/Content-Umfeld.
//   Anzeige nennt KEINEN Ansprechpartner → "Sehr geehrte Damen und Herren".
// Quelle: stepstone.de … Frontend-Entwickler-m-w-d-Svelte-TypeScript-Solingen-item-…--14242267
//   vom User am 28.08.2026 geliefert.
// BEREICH 1, CV-Struktur nach companies/_bereich1-template.mjs (Profil-Zeile, keine
//   Schwerpunkte, zwei feste Projekte). Anschreiben im Duktus der vom User am 28.08.
//   freigegebenen mobivention-Fassung: kurze Absätze, Lücke offen und knapp benannt.
//
// PASSUNG ~3.5/5. Was TRÄGT:
//   - "Sehr gute JavaScript- und TypeScript-Kenntnisse" → Kernstack, belegt.
//   - "UI-Komponenten … auf Basis von Designvorgaben" → React/Next.js, TailwindCSS, SASS,
//     Material-UI, Komponenten-Design; Redux/Zustand für State.
//   - "REST-APIs anbinden" → belegt (Zod-validierte Endpunkte, externe APIs).
//   - 🟢 "E-Commerce- und Content-Plattformen, Produktkataloge, Commerce-Features" → das
//     Vidinli-Praktikum WAR das Frontend einer Shopping-Plattform mit React und TypeScript,
//     Reisegesucht ein Reiseportal mit Buchungsstrecken. Beides ist einschlägig, nicht Beiwerk.
//   - "Performante, wartbare und skalierbare Frontend-Architekturen" → Multi-Tenant-Architektur
//     in GuestMatrix, Tests mit Vitest/Playwright.
//   - Direkter Arbeitgeber, Homeoffice möglich, JobTicket.
// Was DÄMPFT:
//   (1) 🚩 SVELTE steht im STELLENTITEL, ist aber NICHT belegt (React/Next.js). Im Profil-Block
//       heißt es nur "idealerweise Erfahrung mit modernen Frameworks wie Svelte" — also
//       formal kein Muss, aber der Titel sagt etwas anderes. Im Brief EINMAL offen benannt und
//       positiv gewendet (komponentenbasiert wie React), nicht verschwiegen und nicht behauptet.
//   (2) 🚩 GRAPHQL steht im Anforderungsprofil, ist NICHT belegt (nur REST). Ebenfalls in
//       demselben Satz benannt, nicht behauptet ([[feedback-cv-no-overclaim]]).
//   (3) 🚩 "Mehrjährige Erfahrung in der Frontend-Webentwicklung" — wie bei mobivention nicht
//       formal erfüllt. Wird NICHT verneint, sondern über Praktikum, Reisegesucht, Umschulung
//       und eigene Projekte getragen; dazu der Förderzusage-Absatz.
//   (4) Twig, Server-Side-Templating, Pimcore, Symfony = PHP-Welt, gar nicht belegt. Steht in
//       der Anzeige aber ausdrücklich als "von Vorteil" → im Brief bewusst NICHT thematisiert,
//       sonst wird der Brief zur Mängelliste. Gehört in die Begleitmail und ins Gespräch.
//   (5) Build-Tools/Tooling: Vite über Vitest, Webpack nie selbst konfiguriert (wie #82).
//   (6) Standort Solingen, rund 65 km von Bonn — pendelbar, aber kein Katzensprung.
//       Homeoffice ist ausgeschrieben; Quote im Erstgespräch klären.
// Run: node generate-bewerbung.mjs companies/item-frontend-svelte-solingen.mjs

export default {
  slug: 'item-frontend-svelte-solingen',
  date: '28.08.2026',
  language: 'de',

  recipient: [
    'item Industrietechnik GmbH',
    'Friedenstraße 107-109',
    '42699 Solingen',
  ],

  subject: 'Bewerbung als Frontend Entwickler',

  narrative: {
    kern: 'Frontend-Entwickler mit TypeScript, der Oberflächen komponentenweise baut, sie an APIs anbindet und dabei von der Bedienung her denkt.',
    passung: [
      'JavaScript und TypeScript im Tagesgeschäft, Komponenten mit React.js und Next.js',
      'Frontend einer Shopping-Plattform im Praktikum, danach die Webseiten eines Reiseportals',
      'REST-Anbindung, Tests mit Vitest und Playwright, Deployment über Vercel und Docker',
    ],
  },
  company: {
    mission: 'item baut in Solingen Systembaukästen für den industriellen Maschinenbau und verkauft sie über eigene Online-Plattformen; die Stelle entwickelt die Oberflächen dieses Shops und der Content-Plattformen weiter.',
    verbindung: 'Ein Katalog mit tausenden Bauteilen lebt davon, dass der Kunde schnell findet, was er sucht, und die Oberfläche auch bei vielen Daten schnell bleibt; genau daran arbeite ich, seit ich das Frontend einer Shopping-Plattform mitgebaut habe.',
  },
  jobKeywords: ['Frontend', 'JavaScript', 'TypeScript', 'Komponenten', 'REST', 'Performance', 'Git', 'agil', 'Webentwicklung', 'Deployment'],

  cv: {
    // Bereich-1-Struktur des Users (28.08.2026), siehe companies/_bereich1-template.mjs:
    // Rollenklammer im Profil, KEINE Schwerpunkte-Zeile, zwei feste Projekte.
    tagline: '',
    competencies: [],
    // Stelle ist reines Frontend → Profil-Zeile entsprechend geschärft.
    profil: 'Frontend Developer · Webentwicklung mit TypeScript',
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
      `Ihre Ausschreibung als Frontend Entwickler hat mein Interesse geweckt, deshalb möchte ich mich gerne bei Ihnen bewerben. Ich entwickle Weboberflächen mit JavaScript und TypeScript, vor allem mit React.js und Next.js, dazu HTML und CSS mit TailwindCSS und SASS. Ich baue Oberflächen komponentenweise auf und achte von Anfang an auf Performance, auch bei vielen Daten. Tests schreibe ich mit Vitest und Playwright.`,

      `Mit Svelte und GraphQL habe ich bisher nicht gearbeitet. Beides setzt auf dem auf, was ich täglich mache: Oberflächen aus Komponenten bauen und Daten über Schnittstellen holen. Bei REST bin ich zu Hause und arbeite mich zügig ein.`,

      `Während meines Praktikums bei Vidinli Software habe ich am Frontend einer Shopping Plattform mit React.js und TypeScript gearbeitet, mit Produktlisten, Detailseiten und Warenkorb. Bei Reisegesucht habe ich danach die Webseiten eines Reiseportals betreut und regelmäßig mit Gestaltung und Redaktion zusammengearbeitet. Das Deployment übernehme ich selbst, mit Vercel und Docker; Git, Jira und agile Arbeitsweisen kenne ich aus der Projektarbeit.`,

      `Intensiv beschäftige ich mich außerdem mit KI-gestützter Softwareentwicklung. In meinem eigenen Projekt „AI Orchestra“ entwickle ich Multi-Agent-Systeme mit LangGraph, der Claude API und Claude Code. KI ist für mich Unterstützung, kein Ersatz: generierten Code prüfe ich selbst und baue feste Kontrollpunkte in meine Projekte ein. Dadurch bleibt nachvollziehbar, was das System tut.`,

      `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu zwei Jahre eine Förderung von bis zu 50 % meines Gehalts erhalten. Die entsprechenden Unterlagen stelle ich Ihnen gerne zur Verfügung.`,

      `Mein technisches Fundament ist eine zweijährige Umschulung zum Fachinformatiker. Zuerst habe ich den Schwerpunkt Systemintegration absolviert und mich danach im Bereich Anwendungsentwicklung mit Schwerpunkt Webentwicklung weitergebildet.`,

      `Vor meiner Zeit in der IT war ich mehrere Jahre im Tourismus tätig und habe in Bonn ein eigenes Café geführt. Dadurch habe ich viel im Umgang mit Kunden gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Ich musste dort selbstständig planen, Entscheidungen treffen und Verantwortung übernehmen. Diese Erfahrung hilft mir auch heute bei der Entwicklung, weil ich nicht nur auf den Code schaue, sondern auch darauf, ob eine Lösung für den Nutzer wirklich sinnvoll ist.`,

      `Ich würde mich freuen, Ihnen im persönlichen Gespräch mehr über meine Erfahrungen und meine Projekte zu erzählen.`,
    ],
  },
};
