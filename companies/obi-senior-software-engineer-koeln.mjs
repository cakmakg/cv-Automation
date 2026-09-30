// OBI Group Holding SE & Co. KGaA — Senior Software Engineer (alle Geschlechter), Köln
// Analyse, Score, Adresse und Quellen: reports/095-obi-senior-software-engineer-koeln-2026-09-29.md  |  Anzeige: jds/obi-senior-software-engineer-koeln.md
// Run: node generate-bewerbung.mjs companies/obi-senior-software-engineer-koeln.mjs --check
import { BLOCKS } from '../profiles.mjs';

export default {
  profile: 'bereich1',
  slug: 'obi-senior-software-engineer-koeln',

  // Anzeige nennt nur "Alexander Schmidt-Blacha, Expert Talent Acquisition" → neutrale Anrede,
  // kein Herr/Frau aus dem Vornamen abgeleitet.
  recipient: [
    'OBI Group Holding SE &amp; Co. KGaA',
    'Alexander Schmidt-Blacha',
    'Albert-Einstein-Straße 7-9',
    '42929 Wermelskirchen',
  ],

  subject: 'Bewerbung als Senior Software Engineer',

  narrative: {
    kern: 'Webentwickler mit Node.js, React und TypeScript, der Anwendungen vom Datenmodell bis zur Oberfläche selbst baut, Tests von Anfang an mitschreibt und KI Werkzeuge im Alltag mit eigener Prüfung einsetzt.',
    passung: [
      'Node.js im Backend und React mit TypeScript im Frontend als Kernstack',
      'Docker, CI/CD und automatisierte Tests mit Vitest und Playwright',
      'Agentensysteme mit LangGraph und der Claude API, Claude Code im Entwicklungsalltag',
    ],
  },
  company: {
    mission: 'OBI baut in Köln seine IT Plattform neu auf, mit AI Driven Development, Microservices auf Basis von JVM Technologien und Node.js, Frontends mit VueJS und messbar besseren Engineering Prozessen.',
    verbindung: 'KI beschleunigt die Entwicklung nur dann, wenn Tests und Reviews die Qualität absichern; genau so setze ich KI Werkzeuge in meinen eigenen Projekten ein.',
  },
  // Nur Begriffe, die CV UND Brief ehrlich tragen. JVM, VueJS, Kanban, Microservices bewusst NICHT.
  jobKeywords: ['Node.js', 'JavaScript', 'TypeScript', 'CI/CD', 'Git', 'Code Reviews', 'Tests', 'Scrum', 'Webanwendungen'],

  cv: {
    skills: [
      { category: 'Webanwendungen', items: 'JavaScript, TypeScript, React.js, Next.js 15, HTML5/CSS3, TailwindCSS, Redux, Zustand' },
      { category: 'Backend & APIs', items: 'Node.js, Express.js, REST-APIs, PostgreSQL/Supabase, SQL, MongoDB, Zod-Validierung' },
      { category: 'Qualität & Delivery', items: 'Automatisierte Tests (Vitest/Playwright), Code Reviews, CI/CD, Docker, Git/GitHub, Vercel' },
      { category: 'KI & Methoden', items: 'Claude Code, Claude API, LangGraph, Multi-Agent-Systeme, Agile/Scrum, Jira' },
    ],
  },

  anschreiben: {
    anrede: 'Guten Tag Alexander Schmidt-Blacha,',
    // ⭐ P1–P4 = Wortlaut des Users vom 29.09.2026, seitdem die Bereich-1-Vorlage (BLOCKS b1*).
    // Variabel nur: Stellentitel in P1 und der Lückensatz in P4. Förderzusage auf Wunsch entfernt.
    paragraphs: [
      `Ihre Ausschreibung als Senior Software Engineer hat direkt mein Interesse geweckt. ${BLOCKS.b1Stack}`,
      BLOCKS.b1Praxis,
      BLOCKS.b1AiEngineering,
      `${BLOCKS.b1AiTools} Mit JVM Technologien und VueJS habe ich bisher noch nicht so viel gearbeitet, sehe das aber als etwas, in das ich mich mit meiner bisherigen Erfahrung gut einarbeiten kann.`,
    ],
  },

  // StepStone-Anzeige ohne Mailadresse → Versand über das Bewerbungsformular.
  mail: {
    hinweis: 'Bewerbung über den "Jetzt bewerben"-Button der StepStone-Anzeige (leitet ins OBI-Karriereportal).\nUpload: bewerbungspaket-PDF. Der Text unten passt ins Nachrichtenfeld, falls es eines gibt.',
    paragraphs: [
      `anbei sende ich Ihnen meine Bewerbung als Senior Software Engineer in Köln.`,
      `Ich entwickle Webanwendungen mit Node.js, React und TypeScript und setze KI Werkzeuge wie Claude Code im Entwicklungsalltag ein. Lebenslauf und Anschreiben finden Sie im angehängten PDF, Zeugnisse und Zertifikate sind im Lebenslauf verlinkt.`,
      `Für Rückfragen erreichen Sie mich unter +49 163 9734475.`,
    ],
  },
};
