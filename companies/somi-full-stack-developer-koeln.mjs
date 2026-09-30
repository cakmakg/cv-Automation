// SOMI Experts GmbH (IT-Personaldienstleister, Frankfurt) — Full-Stack Developer (m/w/d), Köln.
//   Impressum somi.de/impressum (verifiziert 18.08.2026): SOMI Experts GmbH, Kennedyallee 93,
//   60596 Frankfurt am Main; GF Dipl.-Ing. Maani Nayeri, Dipl.-Inf. Soroosh Sadeghi Fard;
//   HRB 88152 Frankfurt am Main; USt-ID DE 815 197 324. Gegründet 2010, IT-Personaldienstleistung.
//   Ansprechpartnerin in der Anzeige: Sarah Hilbig, 0211 950 756 52, sarah.hilbig@somi.de
//   → Anrede "Sehr geehrte Frau Hilbig". ACHTUNG: Anrede konnte NICHT extern verifiziert werden
//   (keine Team-/Profilseite gefunden), sie folgt der Standardkonvention. Bei Zweifel beim User prüfen.
// Quelle: xing.com/jobs/koeln-full-stack-developer-157031537, vom User als Volltext geliefert 18.08.2026.
// End-Arbeitgeber anonym: "Tochtergesellschaft eines Partnerunternehmens aus der Dienstleistungsbranche".
// BEREICH 1 (Tech/Full-Stack). ANSCHREIBEN NACH GOLDMUSTER FULLSTACK (bewerbung.md, freigegeben
//   17.08.2026): 5 Absätze mit fester Funktion, P3 = Substanzabsatz, P5 = nur Abschlusssatz.
//
// ANSCHREIBEN = UMBAU EINES USER-ENTWURFS (18.08.2026, zweite Fassung). Der User hat einen eigenen
//   Volltext geliefert; jeder seiner Sätze ist erhalten, aufgelöst wurden nur die Regelverstöße:
//   - 7 Bindestrich-Wörter (KI-Lösungen, REST-Schnittstellen, Echtzeit-Funktionen, Docker-Containern,
//     Vitest-Test-Suite, LLM-APIs, Fullstack-Webentwicklung) plus ein Gedankenstrich "–" → umformuliert.
//   - 1 Dreier-Aufzählung ("Monorepo vor, Gateway und Frontend …, was die Zusammenarbeit und das
//     Deployment vereinfacht") → in zwei Sätze getrennt. Zweite Falle im Agenten-Satz vorab entschärft.
//   - KEIN Ergebnis-Signal (Validator-Pflicht): "So fallen Fehler beim Commit auf" → "Dadurch fallen
//     Fehler beim Commit auf". Einziges geändertes Wort in diesem Satz.
//   - P1 enthielt einen Wunschsatz ("möchte meine Erfahrung in einem Team einbringen") → gestrichen
//     (Regel: P1 keine Begründung). Sein Satz zu Tests/Doku aus P2 nach P1 gezogen, damit P1 das
//     geforderte Arbeitsweise-Signal trägt; dort auch der fehlende Satzpunkt ergänzt ("… dazu ich").
//   - 7 Absätze → auf die 5 des Goldmusters verdichtet, ohne einen Satz zu streichen:
//     Stack + REST/WebSockets/Docker zusammen in P2, GuestMatrix + Monorepo + Agenten zusammen in P3,
//     Fundament + Café + Standort zusammen in P4, P5 nur der Abschlusssatz.
//   - "Mit freundlichen Grüßen" stand im Fließtext → entfernt, das Template setzt es selbst.
//   - "und GuestMatrix" in der Agentenliste → "GuestMatrix Automation", sonst liest es sich, als sei
//     die zuvor beschriebene Plattform selbst das Agentensystem.
//   ÜBERNOMMEN aus seinem Entwurf: Supabase und MongoDB im Backend-Satz, GuestMatrix "auf Next.js und
//   Supabase" statt PostgreSQL, "lerne es gerade" statt "arbeite mich ein" bei GraphQL, der Nutzen-Satz
//   zum Monorepo, "immer ein Mensch entscheidet", der volle Soft-Skill-Satz in P4.
//
// PASSUNG ~3.8/5 — bester Tech-Match bisher. Was TRÄGT (fast alles wörtlich aus der Anzeige):
//   - React + TypeScript + Tailwind CSS im Frontend = Kern des Users.
//   - Node.js + PostgreSQL + REST im Backend = Kern des Users.
//   - Vitest UND Playwright namentlich gefordert → beide im Profil, Vitest-Suite in GuestMatrix.
//   - Monorepo namentlich gefordert → Travelagency IST ein Monorepo (Gateway + Service + Frontend).
//   - Docker, WebSockets, relationale Datenmodellierung → belegt.
//   - "Erste Erfahrungen mit KI-gestützten Entwicklungsansätzen, Prompt Engineering oder der
//     Integration von LLMs bzw. Agentensystemen" → hier liegt der User WEIT über "erste Erfahrungen".
//     Das ist der stärkste Differenzierer und gehört deshalb prominent in P3.
//   - "Grundlegendes Verständnis betriebswirtschaftlicher Abläufe, insbesondere Buchhaltung" →
//     eigenes Café mit Catering, Finanzen in eigener Verantwortung (cv.md: full operational
//     ownership incl. finance). Echter Beleg, kein Konstrukt → P4.
//   - "Studium willkommen, ENTSCHEIDEND ist nachweisbare Praxiserfahrung" → kein Formalblocker.
//   - Standort Köln: User arbeitet bereits in Köln, wohnt in Bonn. Kein Distanzthema (vgl. #55).
// Was DÄMPFT (ehrlich, ohne Gap-Negation):
//   (1) GraphQL steht in den AUFGABEN und im Profil (plus urql/tada) und fehlt komplett →
//       im Brief EIN Satz als offene Einarbeitung (Tool-Lücke, erlaubt). NICHT in jobKeywords
//       hochgewichten und NICHT in die CV-Skills (kein ATS-Stuffing).
//   (2) Prisma, Vite, OAuth2/OIDC fehlen → bewusst NICHT einzeln aufgezählt (Honesty-Regel:
//       nicht genutzte Tools auf einen souveränen Satz kürzen statt einzeln zu verneinen).
//   (3) "Mehrjährige praktische Erfahrung" → eigene Projekte + Praktika, keine Jahre als
//       angestellter Entwickler. Positiv über gebaute Systeme erzählt.
//   (4) "Gute Englischkenntnisse" gefordert, User B1 → CV-Zeile transparent, im Brief nicht
//       thematisiert (keine Gap-Negation).
// CV: Tech-Default (tagline leer, kein Profil), 1 Projekt → 1 Seite A4. Skills auf DIESEN Stack
//   getrimmt: WebSockets in Backend, Monorepo in Methoden (beide namentlich gefordert).
//   GraphQL/Prisma/Vite bewusst NICHT in den Skills. Education-Override = Systemintegration.
// Run: node generate-bewerbung.mjs companies/somi-full-stack-developer-koeln.mjs

export default {
  slug: 'somi-full-stack-developer-koeln',
  date: '18.08.2026',
  language: 'de',

  recipient: [
    'SOMI Experts GmbH',
    'Frau Sarah Hilbig',
    'Kennedyallee 93',
    '60596 Frankfurt am Main',
  ],

  subject: 'Bewerbung als Full Stack Developer',

  narrative: {
    kern: 'Full Stack Entwickler mit React, TypeScript und Node.js, der Webanwendungen selbst baut und daneben Systeme aus mehreren Agenten für automatisierte Prozesse entwickelt.',
    passung: [
      'React, TypeScript und Tailwind im Frontend, Node.js und PostgreSQL im Backend',
      'GuestMatrix auf PostgreSQL mit Vitest Suite, Reiseplattform als Monorepo',
      'Systeme aus mehreren Agenten mit LangGraph und LLM APIs, dazu Docker und Playwright',
    ],
  },
  company: {
    mission: 'SOMI Experts vermittelt als IT Personaldienstleister aus Frankfurt Entwickler an Unternehmen und besetzt hier eine Full Stack Stelle in Köln, bei der jemand Webanwendungen von der Benutzeroberfläche bis zu den Backend Services baut.',
    verbindung: 'Genau diese Spannweite baue ich in meinen eigenen Projekten selbst, vom Frontend mit React und Tailwind über die REST Schnittstellen bis zum Datenmodell auf PostgreSQL, und ich sichere das Ergebnis mit denselben Werkzeugen ab, die in der Anzeige stehen.',
  },
  jobKeywords: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'REST', 'GraphQL', 'Docker', 'Vitest', 'Playwright', 'Monorepo', 'WebSockets', 'LLM'],

  cv: {
    // Tech-Default: tagline leer (reboot-Struktur), Schwerpunkte-Zeile trägt die Rollenklammer.
    tagline: '',
    // Bewusst anders formuliert als die Skill-Liste (keine Dopplung-Warnung).
    competencies: [
      'Webanwendungen im Full Stack',
      'Analyse & Umsetzung',
      'Tests & Codequalität',
    ],
    // "Gute Englischkenntnisse" gefordert, User B1 → ehrlich, nicht als bare B1 (user_language_levels).
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Genau 1 Projekt → 1 Seite A4. GuestMatrix belegt PostgreSQL, REST und die Vitest-Suite
    // wörtlich aus der Anzeige und ist dasselbe System, das im Anschreiben ausgeführt wird.
    projects: [
      {
        title: 'GuestMatrix — Multi-Tenant B2B-Plattform',
        stack: 'Next.js 15 · TypeScript · PostgreSQL · Vercel',
        desc: 'Mandantentrennung per Row-Level-Security in der Datenbank, REST-Endpunkte mit Zod validiert, Vitest-Suite, DSGVO-Löschkonzept und Magic-Byte-Prüfung für Uploads.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'TypeScript, JavaScript, React.js, Next.js 15, TailwindCSS, HTML5/CSS3, Responsive Design' },
      { category: 'Backend & APIs', items: 'Node.js, Express.js, REST-APIs, WebSockets, FastAPI (Python), Zod-Validierung' },
      { category: 'Datenbanken & DevOps', items: 'PostgreSQL, Supabase, SQL, MongoDB, Docker, CI/CD, Git/GitHub, Linux' },
      { category: 'Methoden & KI', items: 'Scrum/Agile, Monorepo, Vitest/Playwright, LangGraph, LLM-APIs (Claude, Gemini, OpenAI)' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Hilbig,',
    paragraphs: [
      `über SOMI bewerbe ich mich auf die Stelle als Full Stack Developer in Köln. Ich entwickle Webanwendungen im Frontend und im Backend, von der Oberfläche bis zum Datenmodell. Tests und Dokumentation schreibe ich von Anfang an mit, nicht erst am Ende. Zurzeit bin ich im Frontend und Marketing eines Reisebüros in Köln tätig.`,

      `Im Frontend arbeite ich mit React, TypeScript und Tailwind CSS. Im Backend nutze ich Node.js mit PostgreSQL, Supabase und MongoDB. GraphQL habe ich bisher nicht in Kundenprojekten eingesetzt, ich lerne es gerade und werde damit schnell produktiv. REST Schnittstellen baue ich seit meinen ersten Projekten, das Datenmodell liegt bei mir meist in PostgreSQL. Für Funktionen in Echtzeit nutze ich WebSockets, für die Sicherheit Rollen und Mandantentrennung auf Datenbankebene. Meine Anwendungen laufen in Docker Containern, getestet wird mit Vitest und Playwright.`,

      `Ein Beispiel ist GuestMatrix, eine mandantenfähige Plattform auf Next.js und Supabase. Die Mandantentrennung erfolgt über Row Level Security direkt in der Datenbank. Eingaben validiere ich mit Zod, abgesichert ist alles über eine Vitest Suite. Dadurch fallen Fehler beim Commit auf und nicht erst im laufenden Betrieb. Meine Reiseplattform liegt als Monorepo vor, Gateway und Frontend teilen sich ein Repository. Das vereinfacht die Zusammenarbeit und das Deployment. Daneben baue ich Systeme aus mehreren Agenten für Prozesse im B2B. Dazu gehören AI Orchestra, eine autonome Travel Agency und GuestMatrix Automation. Dafür nutze ich LangGraph, verschiedene LLM APIs und n8n für ereignisgesteuerte Workflows. Die Qualität sichere ich über feste Freigabepunkte, an denen immer ein Mensch entscheidet, bevor das System weiterläuft.`,

      `Mein Fundament sind zwei Jahre Umschulung zum Fachinformatiker, zuerst Systemintegration in Köln, danach Anwendungsentwicklung mit Schwerpunkt Webentwicklung im Fullstack. Bevor ich in die IT gewechselt bin, war ich im Tourismus tätig und habe ein eigenes Café mit Catering geführt. Angebote, Rechnungen und Buchhaltung liefen dort über meinen Schreibtisch, betriebswirtschaftliche Abläufe sind mir vertraut. Das prägt meine Arbeit heute: ich denke vom Kunden her, bleibe auch in stressigen Situationen ruhig und baue Software, die im Alltag wirklich funktioniert. Ich wohne in Bonn, Köln ist für mich Alltag. Hybrides Arbeiten und Reisen zu Workshops passen gut zu mir.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
