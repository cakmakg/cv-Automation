// GreenPocket GmbH — React Developer:in (m/w/d) im Kölner Startup.
//   ⚠️ TITEL-FALLE: Die URL des Users lautet /karriere/full-stack-javascript-typescript-developer-in,
//   die H1 der Seite lautet aber "React Developer:in (m/w/d) im Kölner Startup" (am 29.08.2026
//   auf der Karriere-Übersicht gegengeprüft: derselbe Slug, Titel React Developer:in).
//   Betreff folgt der H1, nicht dem Slug.
//   Impressum greenpocket.com/de/impressum (verifiziert 29.08.2026): GreenPocket GmbH,
//   Labor 3.09, Schanzenstr. 6-20, 51063 Köln; GF Dr. Thomas Goette; HRB 67112 Amtsgericht Köln;
//   USt-ID DE267002509; Tel. +49 221 355095-0, info@greenpocket.de.
//   DIREKTER ARBEITGEBER (kein Vermittler). Green-Tech-Startup, rund 35 Mitarbeiter,
//   Energiemanagement- und Visualisierungssoftware; seit 2025 Teil der Hausheld AG und mit
//   Solandeo und Mako365 Full-Service-Plattform für Smart Metering. kununu Top-Company 2025.
//   Ansprechpartnerin laut Anzeige: Sofiya Kochekyan, jobs@greenpocket.de, +49 221 355095-29.
//   Rolle laut theorg.com und LinkedIn: HR Manager bei GreenPocket seit 2022.
//   ⚠️ Die Anzeige schreibt weder "Ansprechpartnerin" noch einen Titel aus. Die Anrede
//   "Sehr geehrte Frau Kochekyan" stützt sich auf die beiden Profilquellen. Wenn der User das
//   nicht mittragen will, hier auf "Sehr geehrte Damen und Herren," zurückstellen.
// BEREICH 1 (Tech, bewerbung.md) — vom User am 29.08.2026 so vorgegeben.
//
// PASSUNG 3.9/5. Was TRÄGT:
//   - "Umfassendes JavaScript-/TypeScript-Wissen, vorzugsweise mit React-Erfahrung" trifft den
//     Kernstack wörtlich. React, TypeScript, Next.js 15 sind Tagesgeschäft, Redux steht im CV.
//   - Frontend-Stack der Firma deckt sich fast vollständig: TypeScript, React, Redux, SASS,
//     CSS Modules, REST/OpenAPI, PostgreSQL. Nicht belegt sind nur Recoil und TimescaleDB.
//   - "SaaS-Lösungen weiterentwickeln" ist genau GuestMatrix: mandantenfähige B2B-Plattform,
//     Zugriffstrennung über RLS in Supabase/PostgreSQL. Das ist der stärkste Einzelbeleg.
//   - "Design, Testing, Wartung" → Vitest/Playwright belegt; Jest und React Testing Library sind
//     dasselbe Feld, werden aber NICHT behauptet ([[feedback-cv-no-overclaim]]).
//   - "KI-getriebene Software" in der Firmenmission trifft AI Orchestra (LangGraph, Claude API,
//     Claude Code) direkt. Bei GreenPocket ist der KI-Absatz Passung, nicht Beiwerk.
//   - "Vertrautheit mit JIRA und Confluence" → Jira im CV, agile Projektarbeit belegt.
//   - Standort Köln-Mülheim, rund 35 km von Bonn, Home-Office-Option in den Benefits.
//   - "Erfolgreich abgeschlossenes IT-Studium ODER gleichwertige Ausbildung": hier hilft das
//     "oder", die zweijährige Fachinformatiker-Umschulung ist die gleichwertige Ausbildung.
// Was DÄMPFT:
//   (1) 🚩 "Sehr gute Englischkenntnisse" ist Muss-Kriterium. Englisch ist B1
//       ([[user-language-levels]]). Größtes Einzelrisiko. Im Brief NICHT thematisiert
//       (keine Gap-Negation), im CV steht die ehrliche Zeile.
//   (2) "Praktische Erfahrung mit Microservices und Cloud-Infrastrukturen" ist Muss. Belegt sind
//       Docker, CI/CD, Vercel, getrennte Services. Kubernetes, Helm, Kafka, Argo CD und GitOps
//       sind NICHT belegt → in Absatz 2 offen benannt, nicht behauptet.
//   (3) Backend der Firma ist Kotlin/Java/Spring. Das ist Kann-Kriterium, wird nicht behauptet.
//       Node.js/Express bleibt die ehrliche Antwort.
//   (4) Python/Pandas/NumPy stehen im Stack. Python ist nur Grundlagenniveau
//       ([[user-python-grundlagen]]) → im Brief bewusst nicht erwähnt.
//   (5) Anzeige verlangt zusätzlich Starttermin und Gehaltsvorstellung. Beides gehört in die
//       Begleitmail, nicht in den Brief (die letzten drei Absätze sind fix).
// 1-SEITEN-KUERZUNGEN am Brief (der Entwurf lag zwei Seiten). Gekuerzt wurde NUR oben,
//   die drei fixen Schlussabsaetze sind unangetastet:
//   - Reisegesucht ist aus P2 entfallen; die Station steht weiterhin ganz oben im CV.
//   - "Die entsprechenden Unterlagen stelle ich Ihnen gerne zur Verfuegung" ist aus dem
//     Foerderzusage-Absatz raus und steht jetzt in der Begleitmail.
//   Gemessen: Anschreiben 1007px von 1007px, CV 1 Seite, Paket 2 Seiten.
// Gehaltsvorstellung und Starttermin verlangt die Anzeige zusaetzlich -> Begleitmail
//   output/mail-greenpocket-react-developer-koeln-2026-08-29.txt (Zahl noch offen).
// CV: Bereich-1-Struktur (Profil-Zeile, keine Schwerpunkte, zwei feste Projekte), Skills
//   React- und Testing-first sortiert, Zertifikate fix, 1 Seite A4.
// Run: node generate-bewerbung.mjs companies/greenpocket-react-developer-koeln.mjs

export default {
  slug: 'greenpocket-react-developer-koeln',
  date: '07.09.2026',
  language: 'de',

  recipient: [
    'GreenPocket GmbH',
    'Labor 3.09, Schanzenstr. 6-20',
    '51063 Köln',
  ],

  subject: 'Bewerbung als React Developer',

  narrative: {
    kern: 'Webentwickler mit React und TypeScript, der SaaS-Oberflächen baut, in denen viele Kunden auf einer Plattform liegen und trotzdem jeder nur seine eigenen Daten sieht.',
    passung: [
      'React, TypeScript und Next.js als Kernstack, Redux und SASS aus der Projektarbeit',
      'Mandantenfähige SaaS-Anwendung mit Supabase/PostgreSQL selbst gebaut und getestet',
      'Deployment über Docker, Vercel und CI/CD, Git und Jira im agilen Team',
    ],
  },
  company: {
    mission: 'GreenPocket entwickelt in Köln Software, die Energieverbrauch sichtbar und steuerbar macht, und bildet seit 2025 zusammen mit Solandeo und Mako365 unter der Hausheld AG eine Full-Service-Plattform für Smart Metering.',
    verbindung: 'Verbrauchsdaten nützen erst, wenn jemand sie versteht; genau diese Übersetzung von Daten in eine bedienbare Oberfläche ist die Arbeit, die ich in meinen eigenen Projekten mache, und Ihr Anspruch auf KI-getriebene Software trifft den Bereich, in dem ich zurzeit selbst entwickle.',
  },
  jobKeywords: ['React', 'TypeScript', 'JavaScript', 'Redux', 'SaaS', 'Microservices', 'REST', 'Cloud', 'Docker', 'Testing', 'Code Reviews', 'agil', 'Jira', 'PostgreSQL'],

  cv: {
    tagline: '',
    competencies: [],
    profil: 'Full Stack Web Developer',
    languages: 'Deutsch (fließend, C1) · Englisch (B1, technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    projects: [
      {
        title: 'GuestMatrix',
        stack: 'Next.js 15 · TypeScript · Supabase/PostgreSQL',
        desc: 'Mandantenfähige SaaS-Plattform für Gästeinhalte (Fotos, Videos, Bewertungen), per QR-Code erfasst.',
      },
      {
        title: 'Reisegesucht-TravelAgency',
        stack: 'Full-Stack-Reiseportal',
        desc: 'Reiseportal für den deutschen Markt: Pauschalreisen, Hotels, Flüge und Kreuzfahrten.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'JavaScript, TypeScript, React.js, Next.js 15, Redux, HTML5/CSS3, SASS, Responsive Design' },
      { category: 'Testing & UI', items: 'Vitest/Playwright, Code Reviews, Komponenten-Design, TailwindCSS, Material-UI' },
      { category: 'Backend & APIs', items: 'Node.js, Express.js, REST-APIs, Microservices, PostgreSQL/Supabase, MongoDB, Zod' },
      { category: 'Cloud & Methoden', items: 'Docker, Vercel, CI/CD, Git/GitHub, Linux, Agile/Scrum, Jira' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Kochekyan,',
    paragraphs: [
      `Ihre Ausschreibung als React Developer hat mein Interesse geweckt, deshalb möchte ich mich gerne bei Ihnen bewerben. Ich entwickle Webanwendungen mit JavaScript und TypeScript, vor allem mit React, Next.js und Redux. Meine Oberflächen baue ich von Anfang an in Komponenten auf, Testing gehört für mich zur Entwicklung und nicht in einen späteren Schritt.`,

      `Im Praktikum bei Vidinli Software habe ich am Frontend einer Shopping-Plattform mit React und TypeScript gearbeitet, angebunden über REST-Schnittstellen. Git, Jira und Code Reviews kenne ich aus der agilen Projektarbeit. Microservices habe ich als getrennte Dienste in Docker gebaut und über Vercel in die Cloud gebracht; in Kubernetes und Kafka arbeite ich mich ein.`,

      `Daneben entwickle ich eigene Projekte. GuestMatrix ist eine mandantenfähige SaaS-Plattform für Tourismus und Hospitality, gebaut mit Next.js 15 und Supabase auf PostgreSQL. Die Trennung der Kunden liegt in der Datenbank und nicht im Frontend. Dadurch sieht jeder Betrieb nur seine eigenen Daten. Sie ist lauffähig und getestet, Kunden nutzen sie noch nicht.`,

      `Außerdem entwickle ich in meinem eigenen Projekt „AI Orchestra“ Multi-Agent-Systeme mit LangGraph, der Claude API und Claude Code. Generierten Code prüfe ich selbst und baue feste Kontrollpunkte ein. Ihr Anspruch, den Energieverbrauch mit KI-getriebener Software einfacher steuerbar zu machen, trifft genau diesen Bereich.`,

      `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu zwei Jahre eine Förderung von bis zu 50 % meines Gehalts erhalten.`,

      `Mein technisches Fundament ist eine zweijährige Umschulung zum Fachinformatiker. Zuerst habe ich den Schwerpunkt Systemintegration absolviert und mich danach im Bereich Anwendungsentwicklung mit Schwerpunkt Webentwicklung weitergebildet.`,

      `Vor meiner Zeit in der IT war ich mehrere Jahre im Tourismus tätig und habe in Bonn ein eigenes Café geführt. Dadurch habe ich viel im Umgang mit Kunden gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Ich musste dort selbstständig planen, Entscheidungen treffen und Verantwortung übernehmen. Diese Erfahrung hilft mir auch heute bei der Entwicklung, weil ich nicht nur auf den Code schaue, sondern auch darauf, ob eine Lösung für den Nutzer wirklich sinnvoll ist.`,

      `Ich würde mich freuen, Ihnen im persönlichen Gespräch mehr über meine Erfahrungen und meine Projekte zu erzählen.`,
    ],
  },
};
