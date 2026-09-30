/**
 * profiles.mjs — Profil-Presets für generate-bewerbung.mjs
 *
 * Warum: Bis 29.09.2026 hat jede Config den kompletten CV-Block und die festen Absätze aus der
 * letzten Bewerbung kopiert. Dadurch lebten überholte Stände weiter: Reisegesucht.com stand nach
 * der Korrektur vom 28.08.2026 („beendet 07/2026") noch in #85, #90 und #92 als „heute", und die
 * Förderzusage stand in zwei Briefen mit „sechs Monate" statt „zwei Jahre".
 * Jetzt steht alles, was pro Profil gleich bleibt, NUR hier. Eine Config setzt `profile: '<key>'`
 * und schreibt nur noch, was sich pro Stelle ändert.
 *
 * Config-Regeln mit Profil:
 *   - cv: nur Abweichungen angeben (z. B. skills, tagline, competencies); wird flach über das
 *     Preset gelegt. cv.experience NICHT setzen, die Stationen kommen aus defaultExperience.
 *   - anschreiben.paragraphs: nur die stellenspezifischen Absätze. Die festen Schlussabsätze
 *     (profile.tail) hängt resolveConfig selbst an.
 *   - date weglassen → heutiges Datum aus der Systemuhr.
 *
 * Tourismus, Marketing und Vertrieb (TR) haben noch KEIN Preset: für sie gibt es keinen vom User
 * freigegebenen Stand nach dem 28.08.2026. Diese Configs laufen weiter ohne `profile`.
 */

// ─── Feste Textbausteine ─────────────────────────────────────────────────────
// Wörtlich aus freigegebenen Briefen. Nicht umformulieren. Die Validatoren prüfen diese Texte
// nicht auf Stilregeln (AI-Tells, Dreier-Aufzählungen, Bindestriche), weil der User sie so
// abgenommen hat. Inhaltliche Prüfungen (Ergebnis, Mission, Keywords) sehen sie weiterhin.

export const BLOCKS = {
  // Schlussabsatz der Bereich-2-Briefe (#85, #90, #92, #94).
  schluss: `Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,

  // Bereich 1: P1–P4, Wortlaut des Users vom 29.09.2026 (OBI #95), seitdem die Bereich-1-Vorlage.
  // Pro Stelle variabel sind nur der Einstiegssatz vor b1Stack und der Lückensatz nach b1AiTools
  // (siehe kurzkarten/bereich1.md). Bindestriche nach stehender Regel aufgelöst (KI Chat,
  // AI Coding Tools). "nicht nur … sondern auch" ist die Stimme des Users, kein Fehler.
  b1Stack: `Ich entwickle Webanwendungen mit JavaScript und TypeScript, im Backend vor allem mit Node.js und im Frontend mit React und Next.js. Dabei interessiere ich mich nicht nur für die eigentliche Entwicklung, sondern auch dafür, wie eine Anwendung aufgebaut ist, getestet wird und am Ende zuverlässig in Betrieb läuft.`,
  b1Praxis: `In meiner bisherigen praktischen Arbeit habe ich unter anderem mit React und TypeScript gearbeitet, REST APIs angebunden und bestehende Anwendungen weiterentwickelt. Bei meinen eigenen Projekten arbeite ich mit Git, Docker und CI/CD und schreibe Tests möglichst früh im Entwicklungsprozess. Mir ist wichtig, dass der Code verständlich bleibt und Änderungen nicht jedes Mal neue Probleme verursachen.`,
  b1AiEngineering: `In letzter Zeit beschäftige ich mich außerdem sehr intensiv mit AI Engineering. Ich entwickle eigene Anwendungen mit LLMs und Agentensystemen und arbeite dabei unter anderem mit LangGraph und der Claude API. Dabei geht es für mich nicht einfach darum, einen KI Chat einzubauen, sondern darum, wie man AI sinnvoll in Software integriert und dabei Kontrolle, Tests und zuverlässige Abläufe sicherstellt. Meine eigenen Projekte und den dazugehörigen Code können Sie sich gerne auf meinem GitHub ansehen.`,
  b1AiTools: `AI Coding Tools wie Claude Code nutze ich inzwischen regelmäßig in meiner Entwicklung. Den erzeugten Code übernehme ich aber nicht einfach, sondern prüfe selbst, was passiert, warum es funktioniert und ob die Lösung wirklich sinnvoll ist.`,

  // Bereich 1: die letzten drei Absätze, Wortlaut des Users vom 28.08.2026. Nie kürzen,
  // gekürzt wird oben ([[feedback-anschreiben-bereich1-schluss-fix]]).
  b1Umschulung: `Mein technisches Fundament ist eine zweijährige Umschulung zum Fachinformatiker. Zuerst habe ich den Schwerpunkt Systemintegration absolviert und mich danach im Bereich Anwendungsentwicklung mit Schwerpunkt Webentwicklung weitergebildet.`,
  b1Cafe: `Vor meiner Zeit in der IT war ich mehrere Jahre im Tourismus tätig und habe in Bonn ein eigenes Café geführt. Dadurch habe ich viel im Umgang mit Kunden gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Ich musste dort selbstständig planen, Entscheidungen treffen und Verantwortung übernehmen. Diese Erfahrung hilft mir auch heute bei der Entwicklung, weil ich nicht nur auf den Code schaue, sondern auch darauf, ob eine Lösung für den Nutzer wirklich sinnvoll ist.`,
  b1Schluss: `Ich würde mich freuen, Ihnen im persönlichen Gespräch mehr über meine Erfahrungen und meine Projekte zu erzählen.`,

  // Förderzusage, Tech-Fassung (#86 greenpocket, #93 hp-infomedia). Ein Standortsatz darf
  // angehängt werden: `${BLOCKS.foerderTech} Ich wohne in Bonn und …`
  foerderTech: `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu zwei Jahre eine Förderung von bis zu 50 % meines Gehalts erhalten.`,
  // Förderzusage, Quereinstiegs-Fassung (#75 H.G.S., #77 GIG, #94 dtm).
  foerderQuereinstieg: `Für meine berufliche Neuorientierung liegt mir eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung übernimmt der Träger für bis zu zwei Jahre bis zu 50 Prozent meines Gehalts. Die Unterlagen dazu reiche ich Ihnen gerne ein. Damit tragen Sie das Risiko der Einarbeitung nur zur Hälfte.`,

  // IT-Support: "Zusätzlich"-Absatz (#85, #90). Ein Satz mit Bezug zur Stelle darf folgen.
  zusaetzlichSupport: `Zusätzlich entwickle ich eigene Webanwendungen und automatisiere wiederkehrende Aufgaben mit eigenen Skripten. Dadurch habe ich ein gutes Verständnis dafür, wie Anwendungen aufgebaut sind und an welchen Stellen technische Fehler entstehen können.`,
  // IT-Support: Herkunftsabsatz (#90, #92). Ein Satz mit Bezug zur Stelle darf folgen.
  cafeSupport: `Vor meiner Zeit in der IT war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Dadurch habe ich viel im Umgang mit Menschen gelernt und meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt. Auch wenn es hektisch wird, bleibe ich ruhig und suche eine praktische Lösung.`,
  // Quereinstieg: Anfang des Herkunftsabsatzes (#75, #94). Region/Führerschein folgen pro Stelle.
  cafeQuereinstieg: `Vor meiner Umschulung als Fachinformatiker war ich im Tourismus tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt.`,
};

const FIXED_TEXTS = Object.values(BLOCKS);

// ─── Gemeinsame CV-Teile ─────────────────────────────────────────────────────

const LANG_TECH = 'Deutsch (fließend, C1) · Englisch (B1, technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)';
const LANG_SUPPORT = 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)';

const educationWith = (fawProgram) => [
  { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
  { school: 'FAW', program: fawProgram, date: '02/2023 – 01/2024' },
  { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
];

// ─── Profile ─────────────────────────────────────────────────────────────────
// rules steuern die Validatoren:
//   paragraphs      erlaubte Gesamtzahl der Absätze (inkl. tail)
//   closing         Pflichttext des letzten Absatzes
//   howSignal       Einleitung muss ein Arbeitsweise-Signal tragen (Bereich 2: P1 ist bewusst faktisch)
//   expectedCv      CV-Meldungen, die für dieses Profil gewollt sind und ausgeblendet werden

export const PROFILES = {
  // Software-/Web-Entwicklung. Struktur des Users vom 28.08.2026 (vorher _bereich1-template.mjs).
  bereich1: {
    label: 'Bereich 1 — Fullstack / Frontend / Web',
    cv: {
      tagline: '',
      competencies: [],
      // Bei Frontend- oder Backend-lastigen Stellen per Config anpassen, bleibt EINE Zeile.
      profil: 'Full Stack Web Developer',
      languages: LANG_TECH,
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
      education: educationWith('Fachinformatiker für Systemintegration (Umschulung)'),
    },
    tail: [BLOCKS.b1Umschulung, BLOCKS.b1Cafe, BLOCKS.b1Schluss],
    rules: {
      // 4 eigene (P1–P4 aus BLOCKS) + 3 tail = 7; 8 nur mit Förderzusage (User fragen).
      paragraphs: [7, 8],
      closing: BLOCKS.b1Schluss,
      // Vorlage des Users (29.09.2026) eröffnet ohne Arbeitsweise-Signal; die Arbeitsweise steht in P2/P4.
      howSignal: false,
      // Die Vorlage hat bewusst keinen Firmenabsatz; company.mission bleibt Recherche für den Report.
      missionInBrief: false,
      expectedCv: ['taglineEmpty', 'projectsInfo', 'projectMaturity'],
    },
  },

  // IT-Support, Service Desk, Systemintegration, Administration (#85 yer, #90, #92).
  'it-support': {
    label: 'Bereich 2 — IT-Support / Systemintegration',
    cv: {
      tagline: 'IT-Support · Systemintegration',
      competencies: ['1st Level Support', 'Windows & Netzwerk', 'IT-Dokumentation'],
      projects: [],
      skills: [
        { category: 'Support & Clients', items: 'Windows 11, Arbeitsplätze einrichten, Hardware vorbereiten &amp; austauschen, Drucker &amp; Peripherie, Microsoft Office' },
        { category: 'Ticketing & Prozesse', items: 'Hotline &amp; Fernwartung, Ticketsysteme (Jira), Ersteinschätzung &amp; Störungsanalyse, Eskalation an Second Level, IT-Dokumentation' },
        { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Konnektivitätsanalyse, Windows-Server-Grundlagen (FAW IT-Systeme), Benutzerberechtigungen &amp; Active Directory (Konzepte), Linux' },
        { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
        { category: 'Mobilität', items: 'Führerschein Klasse B' },
      ],
      education: educationWith('Fachinformatiker Systemintegration / Anwendungsentwicklung (Umschulung)'),
      languages: LANG_SUPPORT,
    },
    tail: [BLOCKS.schluss],
    rules: {
      paragraphs: [6, 8],
      closing: BLOCKS.schluss,
      howSignal: false,
      // "IT-Dokumentation" steht in Schwerpunkten und Skills — so vom User abgenommen (#90).
      expectedCv: ['profilMissing', 'kompetenzDopplung'],
    },
  },

  // Quereinstieg in Elektro-, Service- und Netzwerktechnik (#75 H.G.S., #77 GIG, #94 dtm).
  quereinstieg: {
    label: 'Bereich 2 — Quereinstieg Service-/Elektro-/Netzwerktechnik',
    cv: {
      tagline: 'Servicetechnik · IT-Infrastruktur',
      competencies: ['Technische Fehleranalyse', 'Netzwerktechnik', 'Kundenservice vor Ort'],
      projects: [],
      // KEINE Elektro-, VDE-, DGUV- oder Messgeräte-Behauptung. Alles hier ist belegt.
      skills: [
        { category: 'Fehlersuche &amp; Instandhaltung', items: 'Systematische Störungsanalyse, Auswerten von Systemparametern &amp; Protokollen, Fernwartung' },
        { category: 'Netzwerk &amp; Verkabelung', items: 'Netzwerke aufbauen &amp; betreuen, strukturierte Verkabelung, Switches, TCP/IP, DNS, DHCP' },
        { category: 'Systeme &amp; Inbetriebnahme', items: 'Arbeitsplätze einrichten, Installation von Hardware &amp; Software, Windows 11, Windows Server' },
        { category: 'Kunden &amp; Dokumentation', items: '1st Level Support, Anwender vor Ort betreuen, technische Dokumentation, Übergaben' },
        { category: 'Mobilität', items: 'Führerschein Klasse B' },
      ],
      education: educationWith('Fachinformatiker Systemintegration / Anwendungsentwicklung (Umschulung)'),
      languages: LANG_SUPPORT,
    },
    tail: [BLOCKS.schluss],
    rules: {
      paragraphs: [5, 7],
      closing: BLOCKS.schluss,
      howSignal: false,
      expectedCv: ['profilMissing'],
    },
  },
};

/** Heutiges Datum im Briefformat TT.MM.JJJJ, aus der Systemuhr. */
export function todayDE() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
}

/**
 * Macht aus einer Roh-Config die Config, die Generator und Validatoren verarbeiten.
 * Ohne `profile` ändert sich nur das Datum (falls leer); alte Configs laufen unverändert.
 */
export function resolveConfig(raw) {
  const date = raw.date || todayDE();
  if (!raw.profile) return { ...raw, date };

  const profile = PROFILES[raw.profile];
  if (!profile) {
    throw new Error(`Unbekanntes Profil "${raw.profile}". Verfügbar: ${Object.keys(PROFILES).join(', ')}`);
  }
  if (raw.cv?.experience) {
    throw new Error('cv.experience im Profil-Config gesetzt — die Stationen sind fix (defaultExperience in generate-bewerbung.mjs).');
  }

  return {
    ...raw,
    date,
    cv: { ...profile.cv, ...raw.cv },
    anschreiben: {
      ...raw.anschreiben,
      paragraphs: [...(raw.anschreiben?.paragraphs ?? []), ...profile.tail],
    },
    _profile: { key: raw.profile, label: profile.label, ...profile.rules },
  };
}

/** Entfernt freigegebene Textbausteine, damit Stilregeln nur den neu geschriebenen Text prüfen. */
export function stripFixedTexts(text) {
  return FIXED_TEXTS.reduce((t, block) => t.split(block).join(' '), text);
}
