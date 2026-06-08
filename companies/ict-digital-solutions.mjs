// ICT Digital Solutions GmbH (cis-solutions, Teil der ICT Group) — Fullstack Entwickler (m/w/d)
// München / St.-Martin-Str. 72, 81541 München — hybrid oder vollständig remote
// Stack: React/Angular/Vue, Node.js (Express/NestJS), Python, Postgres/MongoDB, Docker/K8s, REST/GraphQL, Clean Code/Testing
// TECH-Profil → Anschreiben aus bewerbung.md (Fullstack). Tech-CV.
// Run: node generate-bewerbung.mjs companies/ict-digital-solutions.mjs

export default {
  slug: 'ict-digital-solutions',
  date: '02.06.2026',
  language: 'de',

  recipient: [
    'ICT Digital Solutions GmbH',
    'St.-Martin-Str. 72',
    '81541 München',
  ],

  subject: 'Bewerbung als Fullstack Entwickler',

  cv: {
    tagline: 'Fullstack Web Developer · React · Next.js · Node.js · TypeScript',
    competencies: [
      'TypeScript · JavaScript',
      'React · Next.js · Redux',
      'Node.js · Express',
      'Python · FastAPI',
      'REST APIs · Event-Driven',
      'MongoDB · PostgreSQL',
      'Docker · CI/CD · Git',
      'Clean Code · Tests',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent B2B-System',
        stack: 'LangGraph · Node.js · MongoDB · REST · n8n',
        desc: 'Multi-Agent-System, das mehrere LLM-Anbieter über eine REST-Schicht orchestriert; MongoDB als Datenebene, n8n zur Anbindung externer APIs, Quality-Gates und Critic-Komponenten zur Output-Sicherung.',
      },
      {
        title: 'werbung-otomation — Multi-Tenant SaaS',
        stack: 'React · FastAPI · Multi-Tenant · fal.ai',
        desc: 'Mandantenfähige Web-Anwendung: React-Frontend, FastAPI-Backend, saubere Tenant-Trennung über Config/Policy, Anbindung externer Generierungs-APIs (fal.ai).',
      },
      {
        title: 'Autonomous SecOps Agent — Realtime-Dashboard',
        stack: 'Next.js 14 · Node · WebSocket/SSE · AWS',
        desc: 'End-to-end-System mit Next.js-14-Frontend und Echtzeit-Layer (WebSocket/SSE), rollenbasierter Zugriffskontrolle (RBAC) und sauberer API-Anbindung an Cloud-Dienste.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'React.js, Next.js, TypeScript, JavaScript (ES6+), Redux, Zustand, HTML, CSS, TailwindCSS' },
      { category: 'Backend', items: 'Node.js, Express, Python (FastAPI), REST-APIs, Event-Driven Architecture' },
      { category: 'Datenbanken', items: 'MongoDB, PostgreSQL, MongoDB Vector Search' },
      { category: 'DevOps & Cloud', items: 'Docker, Git/GitHub, CI/CD, Linux, AWS, Playwright, Agile/Scrum, Jira' },
      { category: 'Qualität', items: 'Clean Code, Code-Reviews, Refactoring, automatisierte Tests, sauberer Architekturentwurf' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung Fullstack + remote
      `ich bewerbe mich auf Ihre Position als Fullstack Entwickler. Seit anderthalb Jahren arbeite ich produktiv mit React, TypeScript und Node.js — also genau dem Stack Ihrer Anzeige. Dass Sie hybrides oder vollständig remotes Arbeiten anbieten, passt für mich gut, da ich von Bonn aus arbeite.`,

      // Block 2 — Technische Kompetenz
      `Mein Schwerpunkt liegt auf React und Next.js mit TypeScript im Frontend sowie Node.js/Express und Python/FastAPI im Backend, ergänzt um REST-API-Design, MongoDB und PostgreSQL, Docker und CI/CD. API-Design, Event-Driven-Strukturen, sauberes Error-Handling und Logging gehören zu meinem Arbeitsalltag — also die Themen, die im Produktivbetrieb über Stabilität entscheiden.`,

      // Block 3 — Showcase (Fullstack end-to-end)
      `Mein Hauptprojekt AI Orchestra ist ein Multi-Agent-System auf LangGraph-Basis, das mehrere LLM-Anbieter über eine REST-Schicht orchestriert und MongoDB als Datenebene nutzt. In einem weiteren System, Autonomous SecOps Agent, habe ich ein Next.js-14-Frontend mit Echtzeit-Layer (WebSocket/SSE), rollenbasierter Zugriffskontrolle und sauberer API-Anbindung gebaut. Solche End-to-End-Architekturen — Frontend, API, Datenbank und Realtime — sind genau die Art von Full-Stack-Arbeit, die Sie beschreiben.`,

      // Block — Ehrliche Lücken (NestJS, GraphQL, Kubernetes)
      `NestJS habe ich noch nicht produktiv eingesetzt; da es auf Express aufsetzt, mit dem ich täglich arbeite, ist der Einstieg überschaubar. Mit GraphQL und Kubernetes habe ich bislang nur am Rande gearbeitet, während REST-APIs und Docker fester Teil meines Alltags sind — ich vertiefe mich hier also schnell. Clean Code, Code-Reviews und automatisierte Tests sind mir aus eigenen Projekten ohnehin wichtig.`,

      // Block 4 — Value Proposition
      `Bei Ihnen reizt mich die Arbeit an Webapplikationen im Full-Stack-Bereich, das Design sauberer APIs und die Mitarbeit an Architekturentscheidungen in einem agilen, cross-funktionalen Team. Dass Sie im Bereich IoT und digitaler Geschäftsprozesse arbeiten, finde ich besonders spannend, weil dort saubere, skalierbare Architektur wirklich zählt.`,

      // Block 5 — Persönlichkeit
      `Vor meinen Umschulungen zum Fachinformatiker und Full-Stack-Developer war ich in der Tourismusbranche tätig und habe ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Daraus nehme ich Verantwortungsbewusstsein, strukturierte Arbeitsweise und Belastbarkeit mit; ich arbeite mich schnell in neue Technologien ein und übernehme gerne Verantwortung.`,
    ],
  },
};
