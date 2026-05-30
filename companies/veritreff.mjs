// VeriTreff GmbH — Junior Frontend Entwickler (m/w/d), Wermelskirchen / Homeoffice möglich
// Run: node generate-bewerbung.mjs companies/veritreff.mjs

export default {
  slug: 'veritreff',
  date: '30.05.2026',

  recipient: [
    'VeriTreff GmbH',
    'Herr Jan Magnus Bleek',
    'Dabringhauser Str. 33 A',
    '42929 Wermelskirchen',
  ],

  subject: 'Bewerbung als Junior Frontend Entwickler (m/w/d)',

  cv: {
    tagline: 'Frontend Developer · React · TypeScript · KI-gestützte Entwicklung',
    competencies: [
      'HTML · CSS · JavaScript',
      'TypeScript',
      'React.js · Redux',
      'Node.js · Express',
      'REST · JSON · APIs',
      'SQL · MongoDB',
      'Git / GitHub',
      'KI-Tools (Claude Code · Claude API)',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent System mit Claude API',
        stack: 'LangGraph · Claude · Gemini · Groq · MongoDB',
        desc: 'Eigenes Multi-Agent-System mit Claude Code und Claude API in der täglichen Entwicklung. KI als Werkzeug, nicht als Autopilot — mit Quality Gates und Critic-Agents gegen Halluzinationen.',
      },
      {
        title: 'Full-Stack SaaS — Stock Management',
        stack: 'React · TypeScript · Node.js · MongoDB',
        desc: 'End-to-end Web-Anwendung mit React-Frontend, komponentenbasierter Architektur, State-Management, REST-API-Anbindung und Dashboard-Analytics.',
      },
      {
        title: 'Vidinli Shopping-Platform — Frontend Praktikum',
        stack: 'React · TypeScript · Component Architecture',
        desc: 'Frontend einer Shopping-Plattform mit React und TypeScript: Komponentenstruktur, responsive Layouts, UI/UX-Flows, API-Integration.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'HTML, CSS, JavaScript (ES6+), TypeScript, React.js, Redux, TailwindCSS, SASS, Material-UI' },
      { category: 'Backend', items: 'Node.js, Express.js, Next.js, REST-APIs, Event-Driven Architecture' },
      { category: 'KI-gestützte Entwicklung', items: 'Claude Code im Daily-Workflow, Claude API, LangGraph, RAG, Multi-Agent Systems' },
      { category: 'Datenbanken', items: 'MongoDB, MongoDB Vector Search, SQL, Firebase' },
      { category: 'DevOps & Tools', items: 'Git/GitHub, Docker, CI/CD, Linux, Agile/SCRUM, Jira' },
    ],
  },

  anschreiben: {
    paragraphs: [
      `mit großem Interesse bewerbe ich mich auf Ihre Stellenanzeige als Junior Frontend Entwickler. Als Quereinsteiger arbeite ich seit meiner Umschulung zum Full-Stack-Developer täglich mit HTML, CSS, JavaScript und TypeScript und lege großen Wert auf saubere, wartbare Frontend-Lösungen. Besonders angesprochen hat mich an Ihrer Anzeige die Verbindung von Webportalen rund um Online-Recruiting und dem ausdrücklich gewünschten Einsatz moderner KI-Tools im Entwicklungsalltag.`,

      `Mein technischer Schwerpunkt liegt aktuell auf React und TypeScript, ergänzt durch klassisches HTML/CSS/JavaScript sowie praktische Erfahrung mit Node.js, REST-APIs, JSON und Git. Im Praktikum bei Vidinli Software habe ich produktive Frontends mit React und TypeScript entwickelt, in eigenen Projekten arbeite ich regelmäßig mit komponentenbasierter Architektur, State-Management, responsiven Layouts und der strukturierten Anbindung an APIs. Angular kenne ich bisher nicht aus der Praxis — der Schritt von React zu Angular ist mir aber bewusst (beides komponentenbasiert, TypeScript-first), und ich plane, mich vor Einstieg gezielt einzuarbeiten.`,

      `Was mich von vielen Junior-Bewerbern unterscheidet, ist meine praktische Erfahrung mit KI-gestützter Entwicklung. In meinem eigenen Projekt AI Orchestra arbeite ich täglich mit Tools wie Claude Code und der Claude API, um Multi-Agent-Systeme zu bauen. KI ist für mich Werkzeug, nicht Autopilot — Ergebnisse prüfe ich kritisch, baue Quality Gates und Critic-Agents ein und übernehme Code nie blind. Genau diese Haltung lese ich auch aus Ihrer Anzeige heraus.`,

      `In Ihren Projekten sehe ich die Möglichkeit, meine Fähigkeiten gezielt einzubringen — insbesondere bei der Weiterentwicklung übersichtlicher und zuverlässiger Benutzeroberflächen Ihrer Recruiting-Portale, bei der strukturierten Verarbeitung und Visualisierung von Stellendaten sowie bei der Mitarbeit an neuen Frontend-Komponenten und kleineren Automatisierungen. Dabei ist es mir wichtig, Lösungen nicht nur funktional, sondern auch langfristig wartbar, performant und nachvollziehbar umzusetzen.`,

      `Mein Weg in die IT verläuft nicht linear: Vor meinen beiden Umschulungen zum Fachinformatiker und Full-Stack-Developer war ich in der Tourismusbranche tätig und habe danach ein eigenes Café- und Catering-Unternehmen in Bonn geführt. Aus dieser Zeit nehme ich Verantwortungsbewusstsein, strukturierte Arbeitsweise und den Überblick auch in stressigen Situationen mit. Ich arbeite mich schnell in neue Themen ein und schätze Teams, in denen man nachfragen, lernen und sich fachlich weiterentwickeln kann.`,
    ],
  },
};
