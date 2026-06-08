// RKG Rheinische Kraftwagengesellschaft mbH & Co. KG — Mitarbeiter IT-Helpdesk (First-/Second-Level), Bonn
// Tech-/Support-Bewerbung. Standard-Tech-CV (Default-Berufserfahrung: GIS 1st-Level-Support).
// Interner Helpdesk für ~650 Mitarbeitende an mehreren Autohaus-Standorten. Lokal (Bonn).
// Run: node generate-bewerbung.mjs companies/rkg-helpdesk.mjs

export default {
  slug: 'rkg-helpdesk',
  date: '08.06.2026',
  language: 'de',

  recipient: [
    'RKG Rheinische Kraftwagengesellschaft mbH & Co. KG',
    'Bornheimer Straße 200',
    '53119 Bonn',
  ],

  subject: 'Bewerbung als Mitarbeiter im IT-Helpdesk',

  cv: {
    tagline: 'IT-Helpdesk & Support · First-/Second-Level · Fachinformatiker · Serviceorientiert',
    competencies: [
      'First- & Second-Level-Support',
      'Helpdesk & Ticketing',
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
        desc: 'Selbst entwickelte Web-Anwendungen und Automatisierungen — Beleg für Eigeninitiative, schnelle Einarbeitung in neue Technologien und technischen Tiefgang über den First-Level hinaus.',
      },
    ],
    skills: [
      { category: 'IT-Support & Helpdesk', items: 'First- und Second-Level-Support, Ticketsysteme, Incident- und Problemmanagement, Anwenderbetreuung, Hard- und Softwareeinrichtung, Dokumentation' },
      { category: 'Systeme & IT-Infrastruktur', items: 'Windows-Umgebungen, Netzwerk-Grundlagen, IT-Infrastruktur, Systemintegration (Fachinformatiker), Benutzer- und Geräteverwaltung' },
      { category: 'Entwicklung & Automatisierung (Plus)', items: 'React/TypeScript, Python, Git/GitHub, Automatisierung wiederkehrender Aufgaben — technischer Tiefgang und hohe Lernbereitschaft' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung (Bonn-Bezug)
      `die Stelle im IT-Helpdesk mit First- und Second-Level-Support passt genau zu dem, was ich gut kann und gerne mache: technische Probleme schnell lösen und dabei den direkten Kontakt zu den Kolleginnen und Kollegen halten, die auf funktionierende IT angewiesen sind. Als ausgebildeter Fachinformatiker mit Support-Erfahrung und als Bonner bewerbe ich mich daher gerne bei der RKG.`,

      // Block 2 — Fachkompetenz (Support / Ticketing / Incident)
      `Den Helpdesk-Alltag kenne ich aus der Praxis: Während meines Praktikums bei der GIS GmbH war ich im First-Level-Support tätig, habe Anfragen aufgenommen, qualifiziert und entweder direkt gelöst oder strukturiert weitergeleitet. Mit Ticketsystemen, der Bearbeitung von Störungen im Incident- und Problemmanagement und einer sauberen Dokumentation gehe ich entsprechend vertraut um. Meine Ausbildung zum Fachinformatiker für Systemintegration und Anwendungsentwicklung gibt mir das Fundament, um auch über die reine Erstannahme hinaus an Lösungen mitzuarbeiten.`,

      // Block 3 — Technikaffinität / Dev-Tiefgang (Second Level)
      `Was mich von vielen im First-Level unterscheidet, ist meine Entwicklungs-Seite. In meiner Freizeit baue ich eigene Anwendungen — vom Full-Stack-Web-Projekt bis zu einem KI-gestützten Sicherheits- und Incident-Response-System. Dadurch verstehe ich Systeme nicht nur an der Oberfläche, sondern auch dahinter: Ich kann Fehler tiefer eingrenzen, wiederkehrende Probleme automatisieren und mich schnell in neue Tools und Umgebungen einarbeiten. Genau diese Mischung aus Support-Mentalität und technischem Tiefgang möchte ich in Ihren Helpdesk einbringen.`,

      // Block 4 — Value Proposition / Service (Standorte)
      `Für die RKG heißt das ein Mitarbeiter, der zwei Seiten verbindet: solide IT-Grundlagen und ein gutes Gespür für Menschen. Bevor ich in die IT gewechselt bin, habe ich im Kundenkontakt gearbeitet und ein eigenes Café- und Catering-Unternehmen in Bonn geführt — überall zählte, dass der Betrieb läuft und die Leute schnell bekommen, was sie brauchen. Diese Serviceorientierung bringe ich an den Helpdesk: Ihre Kolleginnen und Kollegen an den verschiedenen Standorten sollen sich gut betreut fühlen und schnell wieder arbeitsfähig sein.`,

      // Block 5 — Persönlichkeit + Abschluss
      `Ich arbeite gerne im Team, packe an und sehe es als Erfolg, wenn am Ende des Tages Probleme gelöst und Abläufe ein Stück stabiler sind. Deutsch spreche ich fließend, Englisch sicher im Arbeitskontext. Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
