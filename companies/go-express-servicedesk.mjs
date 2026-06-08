// GO! Express & Logistics Deutschland GmbH — IT Service Desk Specialist (m/w/d), Bonn
// Tech-/Support-Bewerbung. Standard-Tech-CV (Default-Berufserfahrung: GIS 1st-Level-Support).
// Rolle: 1st-/2nd-Level, Ticketsystem, Incident-/Problemmanagement, SLAs. Logistik-Bezug (KEP).
// Run: node generate-bewerbung.mjs companies/go-express-servicedesk.mjs

export default {
  slug: 'go-express-servicedesk',
  date: '08.06.2026',
  language: 'de',

  recipient: [
    'GO! Express & Logistics Deutschland GmbH',
    'Brühler Straße 9',
    '53119 Bonn',
  ],

  subject: 'Bewerbung als IT Service Desk Specialist',

  cv: {
    tagline: 'IT Service Desk & Support · 1st-/2nd-Level · Fachinformatiker · Serviceorientiert',
    competencies: [
      '1st- & 2nd-Level-Support',
      'Service Desk & Ticketing',
      'Incident- & Problemmanagement',
      'Hard- & Software-Setup',
      'Serviceorientierte Kommunikation',
      'Technikaffinität & Lernbereitschaft',
    ],
    projects: [
      {
        title: 'Autonomous SecOps Agent — KI-gestütztes IT-Security- & Incident-Response-System',
        stack: 'IT-Security · Monitoring · Automatisierung',
        desc: 'Eigenes System zur Erkennung und Bearbeitung von Sicherheitsvorfällen — mit Monitoring, Anomalie-Erkennung und automatisierter Reaktion mit menschlicher Freigabe. Zeigt mein Interesse an IT-Betrieb, Incident-Handling und sauberen Prozessen.',
      },
      {
        title: 'Full-Stack- & Automatisierungs-Projekte (Eigeninitiative)',
        stack: 'React · TypeScript · Python · n8n',
        desc: 'Selbst entwickelte Web-Anwendungen und Automatisierungen — Beleg für Eigeninitiative, schnelle Einarbeitung in neue Technologien und technischen Tiefgang über den 1st-Level hinaus.',
      },
    ],
    skills: [
      { category: 'IT-Support & Service Desk', items: '1st- und 2nd-Level-Support, Ticketsysteme, Incident- und Problemmanagement, Anwenderbetreuung, Hard- und Softwareeinrichtung, SLA-Bewusstsein, Dokumentation' },
      { category: 'Systeme & IT-Infrastruktur', items: 'Windows-Umgebungen, Netzwerk-Grundlagen, IT-Infrastruktur, Systemintegration (Fachinformatiker), Benutzer- und Geräteverwaltung' },
      { category: 'Entwicklung & Automatisierung (Plus)', items: 'React/TypeScript, Python, Git/GitHub, Automatisierung wiederkehrender Aufgaben — technischer Tiefgang und hohe Lernbereitschaft' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung (mit Logistik-Bezug)
      `die Stelle als IT Service Desk Specialist passt genau zu dem, was ich gut kann und gerne mache: technische Störungen schnell lösen und dabei den direkten Kontakt zu den Menschen halten, die auf funktionierende Systeme angewiesen sind. Gerade in der Express-Logistik, wo Abläufe nicht stillstehen dürfen, ist ein verlässlicher Service Desk entscheidend — als ausgebildeter Fachinformatiker mit Support-Erfahrung bewerbe ich mich daher gerne bei GO! in Bonn.`,

      // Block 2 — Fachkompetenz (Support / Ticketing / Incident)
      `Den Service-Desk-Alltag kenne ich aus der Praxis: Während meines Praktikums bei der GIS GmbH war ich im 1st-Level-Support tätig, habe Anfragen aufgenommen, qualifiziert und entweder direkt gelöst oder strukturiert weitergeleitet. Mit Ticketsystemen, der Bearbeitung von Störungen im Incident- und Problemmanagement und einer sauberen Dokumentation gehe ich entsprechend vertraut um. Meine Ausbildung zum Fachinformatiker für Systemintegration und Anwendungsentwicklung gibt mir das Fundament, um auch über die reine Erstannahme hinaus an Lösungen mitzuarbeiten.`,

      // Block 3 — Technikaffinität / Dev-Tiefgang (2nd Level)
      `Was mich von vielen im 1st-Level unterscheidet, ist meine Entwicklungs-Seite. In meiner Freizeit baue ich eigene Anwendungen — vom Full-Stack-Web-Projekt bis zu einem KI-gestützten Sicherheits- und Incident-Response-System. Dadurch verstehe ich Systeme nicht nur an der Oberfläche, sondern auch dahinter: Ich kann Fehler tiefer eingrenzen, wiederkehrende Probleme automatisieren und mich schnell in neue Tools und Umgebungen einarbeiten. Genau diese Mischung aus Support-Mentalität und technischem Tiefgang möchte ich in Ihren Service Desk einbringen.`,

      // Block 4 — Value Proposition / Service & Verlässlichkeit
      `Für GO! heißt das ein Mitarbeiter, der zwei Seiten verbindet: solide IT-Grundlagen und ein gutes Gespür für Menschen. Bevor ich in die IT gewechselt bin, habe ich im Kundenkontakt gearbeitet und ein eigenes Café- und Catering-Unternehmen in Bonn geführt — überall zählte, dass der Betrieb läuft und die Leute schnell bekommen, was sie brauchen. Diese Service- und Verlässlichkeitsorientierung bringe ich direkt an den Service Desk, damit Störungen Ihre Abläufe so wenig wie möglich aufhalten.`,

      // Block 5 — Persönlichkeit + Abschluss
      `Ich arbeite gerne im Team, packe an und sehe es als Erfolg, wenn am Ende des Tages Probleme gelöst und Abläufe ein Stück stabiler sind. Deutsch spreche ich fließend, Englisch sicher im Arbeitskontext. Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
