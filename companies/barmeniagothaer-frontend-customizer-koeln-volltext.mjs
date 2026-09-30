// VOLLTEXT-FASSUNG (2 Seiten) — Anschreiben-Text des Users vom 29.08.2026 WOERTLICH,
//   ungekuerzt, nur Tippfehler "FullStacj" -> "Full Stack Web Developer" korrigiert.
//   Die Ein-Seiten-Fassung liegt in barmeniagothaer-frontend-customizer-koeln.mjs.
//   Gemessen: 1286px statt 1007px, also rund 14 Zeilen ueber einer A4-Seite.
// BarmeniaGothaer AG — Front End Entwickler*in / Customizer*in, Köln, Start 01.09.2026.
//   ⚠️ TITEL-FALLE (zweiter Fall an einem Tag): Der Link des Users heißt
//   /customizerin-fuer-das-individuelle-unternehmerkundengeschaeft-koeln-01092026/,
//   die H1 der Anzeige lautet aber "Front End Entwickler*in / Customizer*in"
//   (am 29.08.2026 zweifach gegengeprüft). "Individuelles Unternehmerkundengeschäft" ist
//   der FACHKONTEXT im Fließtext, nicht der Stellentitel. Betreff folgt der H1.
//   Impressum karriere.barmeniagothaer.de/impressum (verifiziert 29.08.2026):
//   BarmeniaGothaer AG, Arnoldiplatz 1, 50969 Köln; HRB 62211 Amtsgericht Köln;
//   USt-ID DE193330903; Vorstandsvorsitzende Dr. Andreas Eurich und Oliver Schoeller;
//   Aufsichtsratsvorsitz Prof. Dr. Werner Görg; Tel. 0221 308-00.
//   DIREKTER ARBEITGEBER (Konzern, kein Vermittler). Das Programm läuft laut Anzeige in der
//   Gothaer Allgemeine: "Im strategischen Programm zur Neuaufstellung des Underwriting treiben
//   wir die Modernisierung der IT-Landschaft für das individuelle Unternehmerkundengeschäft
//   in der Gothaer Allgemeine voran."
//   Ansprechpartnerin laut Anzeige: Theresa Bechmann, theresa.bechmann@gothaer.de,
//   0221 30822671. ⚠️ Die Anzeige nennt WEDER Titel NOCH "Ansprechpartnerin". Die Anrede
//   "Sehr geehrte Frau Bechmann" ist daher eine Annahme. Wenn der User das nicht mittragen
//   will, hier auf "Sehr geehrte Damen und Herren," zurückstellen und neu generieren.
// BEREICH 1 (Tech, bewerbung.md) — Front-End-Rolle, deshalb Profil "Frontend Developer".
//
// PASSUNG 3.7/5. Was TRÄGT:
//   - "Abgeschlossene Berufsausbildung ODER Studium" ist das einzige Formalkriterium, und das
//     "oder" trägt: die zweijährige Fachinformatiker-Umschulung erfüllt es. KEIN Formalblocker
//     (anders als bei Behördenstellen ab EG 12, [[feedback-oeffentlicher-dienst-eg-grenze]]).
//   - "Entwicklung neuer, generischer Lösungsmodelle" ist der stärkste Einzelbeleg:
//     GuestMatrix ist über eine Konfiguration je Branche gebaut, nicht als Sonderentwicklung
//     je Kunde ([[project-guestmatrix]]). Genau dieses Prinzip verlangt die Rolle.
//   - "Modellierung von Produkten, Workflows und Benutzeroberflächen (UI/UX)" → React,
//     Next.js, Komponenten-Design, React Flow.
//   - "Programmierst einfache Sachverhalte inklusive Testing" liegt deutlich UNTER dem, was
//     er kann. Vitest und Playwright sind belegt.
//   - "Freude an agiler Projektarbeit mit praktischer Erfahrung" → Scrum und Jira belegt.
//   - KEIN Englisch-Kriterium in der Anzeige. Anders als bei GreenPocket (#86) fällt das
//     größte Standardrisiko hier komplett weg ([[user-language-levels]]).
//   - Köln, rund 35 km von Bonn, bis zu 60 % mobiles Arbeiten, Deutschland-Ticket,
//     30 Urlaubstage, bAV ab Tag 1. Großkonzern nach der Fusion Barmenia + Gothaer.
// Was DÄMPFT:
//   (1) 🚩 VERSICHERUNGSDOMÄNE FEHLT KOMPLETT. Schaden-/Unfallprodukte, Underwriting,
//       Unternehmerkundengeschäft, Versicherungskernanwendungen: null Berührung. Alles davon
//       ist "idealerweise", also kein Muss, aber es ist die halbe Anzeige. Im Brief NICHT
//       verneint ([[feedback-anschreiben-keine-gap-negation]]), im Gespräch ehrlich einordnen.
//   (2) 🚩 LOW-CODE-PLATTFORM ist das Werkzeug der Rolle und nicht belegt. Im Brief offen
//       benannt und über das Prinzip getragen (Konfiguration statt Sonderentwicklung), nicht
//       behauptet ([[feedback-cv-no-overclaim]]).
//   (3) ⚠️ CPRE Foundation Level fehlt. Kann-Kriterium; im Brief als "steht noch aus"
//       benannt, die Praxis (Anforderungen klären, in Tickets überführen) steht daneben.
//   (4) ⚠️ ALM als Testtool ist nicht belegt; Testmethodik über Vitest/Playwright schon.
//   (5) ⚠️ ROLLENPROFIL: "Customizer" heißt konfigurieren, nicht bauen. Für jemanden, der
//       ganze Anwendungen selbst entwickelt, ist das fachlich schmaler als der Titel
//       "Front End Entwickler" verspricht. Gehört in die Erstgesprächs-Fragen, nicht in den Brief.
// CV: Bereich-1-Struktur (Profil-Zeile, keine Schwerpunkte, zwei feste Projekte),
//   Skills auf UI/UX-Modellierung und Testing ausgerichtet, Zertifikate fix, 1 Seite A4.
// Run: node generate-bewerbung.mjs companies/barmeniagothaer-frontend-customizer-koeln.mjs

export default {
  slug: 'barmeniagothaer-frontend-customizer-koeln-volltext',
  date: '29.08.2026',
  language: 'de',

  recipient: [
    'BarmeniaGothaer AG',
    'Arnoldiplatz 1',
    '50969 Köln',
  ],

  subject: 'Bewerbung als Front End Entwickler / Customizer',

  narrative: {
    kern: 'Webentwickler, der Oberflächen und Abläufe aus einer Konfiguration erzeugt statt jeden Kundenfall einzeln zu bauen.',
    passung: [
      'React und TypeScript für Benutzeroberflächen, gebaut in wiederverwendbaren Komponenten',
      'GuestMatrix als generisches Lösungsmodell: eine Konfiguration je Branche statt einer Anwendung je Kunde',
      'Agile Projektarbeit mit Jira, eigene Testfälle mit Vitest und Playwright',
    ],
  },
  company: {
    mission: 'Die BarmeniaGothaer modernisiert im Programm zur Neuaufstellung des Underwriting die IT-Landschaft für das individuelle Unternehmerkundengeschäft der Gothaer Allgemeine.',
    verbindung: 'Individuelle Unternehmerkunden brauchen Produkte, die in jedem Fall anders aussehen und trotzdem nicht jedes Mal neu gebaut werden dürfen; genau diese Trennung zwischen Konfiguration und Anwendung ist das Prinzip, nach dem ich meine eigene Plattform gebaut habe.',
  },
  jobKeywords: ['TypeScript', 'React', 'UI/UX', 'Benutzeroberflächen', 'Testing', 'agil', 'Jira', 'Workflows', 'REST', 'Prototyping', 'Requirement Engineering', 'Low-Code'],

  cv: {
    tagline: '',
    competencies: [],
    profil: 'Frontend Developer',
    languages: 'Deutsch (fließend, C1) · Englisch (B1, technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    projects: [
      {
        title: 'GuestMatrix',
        stack: 'Next.js 15 · TypeScript · Supabase/PostgreSQL',
        desc: 'Mandantenfähige Plattform für Gästeinhalte, je Branche über eine eigene Konfiguration statt eigener Anwendung.',
      },
      {
        title: 'Reisegesucht-TravelAgency',
        stack: 'Full-Stack-Reiseportal',
        desc: 'Reiseportal für den deutschen Markt: Pauschalreisen, Hotels, Flüge und Kreuzfahrten.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'JavaScript, TypeScript, React.js, Next.js 15, HTML5/CSS3, SASS, Responsive Design' },
      { category: 'UI/UX & Modellierung', items: 'Benutzeroberflächen, Komponenten-Design, Workflows, React Flow, Prototyping' },
      { category: 'Testing & APIs', items: 'Vitest/Playwright, Testfälle, REST-APIs, Node.js, PostgreSQL/Supabase, Zod-Validierung' },
      { category: 'Methoden & Tools', items: 'Agile/Scrum, Jira, Git/GitHub, Docker, Vercel, CI/CD, Linux' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Bechmann,',
    paragraphs: [
      `Ihre Ausschreibung als Frontend Entwickler und Customizer hat mein Interesse geweckt. Deshalb möchte ich mich gerne bei Ihnen bewerben.`,

      `Ich entwickle Webanwendungen mit JavaScript und TypeScript, vor allem mit React und Next.js. Bei meinen Projekten achte ich darauf, Benutzeroberflächen übersichtlich aufzubauen und Komponenten so zu entwickeln, dass sie wiederverwendbar sind. Auch Tests gehören für mich zur Entwicklung dazu und nicht erst an das Ende eines Projekts.`,

      `Während meines Praktikums bei Vidinli Software habe ich am Frontend einer Shopping-Plattform mit React und TypeScript gearbeitet. Bei Reisegesucht.com war ich sowohl in der Webentwicklung als auch im Marketing tätig. Dadurch hatte ich nicht nur mit der technischen Umsetzung zu tun, sondern auch mit den Anforderungen und Wünschen der Nutzer. Agile Projektarbeit mit Jira kenne ich aus dieser Zeit. Meine Tests schreibe ich unter anderem mit Vitest und Playwright.`,

      `Anforderungen kläre ich gerne direkt mit den Nutzern und versuche, daraus klare und umsetzbare Aufgaben zu machen. Im Bereich Requirement Engineering habe ich praktische Erfahrung, die entsprechende Zertifizierung steht bei mir noch aus.`,

      `Neben meiner bisherigen Arbeit entwickle ich eigene Projekte, die ich auch auf GitHub zeige. Eines meiner aktuellen Projekte ist GuestMatrix, eine mandantenfähige Plattform für Unternehmen aus Tourismus und Hospitality. Die Idee dahinter ist, dass nicht für jeden Kunden eine komplett neue Anwendung entwickelt werden muss. Stattdessen lässt sich die Plattform konfigurieren, sodass je nach Kundentyp unterschiedliche Oberflächen und Workflows entstehen. So kann ein neuer Kundentyp hinzukommen, ohne die Anwendung jedes Mal grundlegend neu entwickeln zu müssen. Die Plattform ist bereits lauffähig und getestet, wird aber derzeit noch nicht von Kunden eingesetzt.`,

      `Mit einer klassischen Low-Code-Plattform habe ich bisher noch nicht gearbeitet. Das Prinzip, mit wiederverwendbaren Bausteinen und Konfigurationen unterschiedliche Lösungen abzubilden, kenne ich jedoch aus meiner eigenen Entwicklung und finde es sehr interessant.`,

      `Daneben beschäftige ich mich mit KI-gestützter Softwareentwicklung. In meinem Projekt „AI Orchestra“ entwickle ich Multi-Agent-Systeme und arbeite dabei unter anderem mit LangGraph und der Claude API. Auch hier geht es für mich darum, komplexe Abläufe in einzelne, nachvollziehbare Schritte zu zerlegen und sinnvoll zu automatisieren.`,

      `Mein technisches Fundament ist eine zweijährige Umschulung zum Fachinformatiker. Zuerst habe ich den Schwerpunkt Systemintegration absolviert und mich danach im Bereich Anwendungsentwicklung als Full Stack Web Developer abgeschlossen.`,

      `Vor meiner Zeit in der IT war ich mehrere Jahre im Tourismus tätig und habe in Bonn ein eigenes Café geführt. Dadurch habe ich viel im Umgang mit Kunden gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Ich musste dort selbstständig planen, Entscheidungen treffen und Verantwortung übernehmen. Diese Erfahrung hilft mir auch heute bei der Entwicklung, weil ich nicht nur darauf achte, dass der Code funktioniert, sondern auch darauf, ob eine Lösung für den Nutzer wirklich sinnvoll ist.`,

      `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu zwei Jahre eine Förderung von bis zu 50 % meines Gehalts erhalten. Die entsprechenden Unterlagen reiche ich Ihnen gerne ein.`,

      `Ich würde mich freuen, Ihnen im persönlichen Gespräch mehr über meine Erfahrungen und meine Projekte zu erzählen.`,
    ],
  },
};
