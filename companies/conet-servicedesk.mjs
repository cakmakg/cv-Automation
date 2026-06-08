// CONET — IT Operations Engineer / Service Desk Mitarbeiter (Teilzeit 50 %), Bonn
// Tech-Bewerbung, Support-getrimmt. Standard-Tech-CV (Default-Berufserfahrung: GIS 1st-Level-Support).
// Quereinsteiger ausdrücklich willkommen; Anforderung: IT-Ausbildung, Serviceorientierung, DE C1 / EN B2.
// Run: node generate-bewerbung.mjs companies/conet-servicedesk.mjs

export default {
  slug: 'conet-servicedesk',
  date: '08.06.2026',
  language: 'de',

  recipient: [
    'CONET Technologies Holding GmbH',
    'Bundeskanzlerplatz 2',
    '53113 Bonn',
  ],

  subject: 'Bewerbung als IT Operations Engineer im Service Desk',

  cv: {
    tagline: 'IT Operations & Service Desk · 1st-Level-Support · Fachinformatiker · Serviceorientiert',
    competencies: [
      '1st-Level-IT-Support',
      'Service Desk & Ticketing',
      'Hard- & Software-Setup',
      'Netzwerk- & Systembasics',
      'Serviceorientierte Kommunikation',
      'Technikaffinität & Lernbereitschaft',
    ],
    projects: [
      {
        title: 'Autonomous SecOps Agent — KI-gestütztes IT-Security- & Incident-Response-System',
        stack: 'IT-Security · Monitoring · Automatisierung',
        desc: 'Eigenes System zur Erkennung und Bearbeitung von Sicherheitsvorfällen — mit Monitoring, Anomalie-Erkennung und automatisierter Reaktion mit menschlicher Freigabe. Zeigt mein Interesse an IT-Betrieb, Sicherheit und sauberen Prozessen.',
      },
      {
        title: 'Full-Stack- & Automatisierungs-Projekte (Eigeninitiative)',
        stack: 'React · TypeScript · Python · n8n',
        desc: 'Selbst entwickelte Web-Anwendungen und Automatisierungen — Beleg für Eigeninitiative, schnelle Einarbeitung in neue Technologien und Freude am Lösen technischer Aufgaben.',
      },
    ],
    skills: [
      { category: 'IT-Support & Service Desk', items: '1st-Level-Support, Ticketannahme und -bearbeitung, Anwenderbetreuung, Hard- und Softwareeinrichtung, Fehleranalyse und -behebung, Weiterleitung an Fachbereiche' },
      { category: 'Systeme & IT-Infrastruktur', items: 'Windows-Umgebungen, Netzwerk-Grundlagen, IT-Infrastruktur, Systemintegration (Fachinformatiker), Benutzer- und Geräteverwaltung' },
      { category: 'Entwicklung & Automatisierung (Plus)', items: 'React/TypeScript, Python, Git/GitHub, Grundverständnis für Automatisierung und KI — hohe Technikaffinität und Lernbereitschaft' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      // Block 1 — Einleitung
      `die Stelle als IT Operations Engineer im Service Desk passt genau zu dem, was ich gut kann und gerne mache: technische Probleme lösen und dabei den direkten Kontakt zu den Menschen halten, die Unterstützung brauchen. Als ausgebildeter Fachinformatiker mit Erfahrung im 1st-Level-Support bewerbe ich mich daher gerne bei CONET in Bonn — die Teilzeit mit 50 Prozent passt für mich dabei gut.`,

      // Block 2 — Fachkompetenz (Support)
      `Den Service-Desk-Alltag kenne ich aus der Praxis: Während meines Praktikums bei der GIS GmbH war ich im 1st-Level-IT-Support tätig, habe Anfragen der internen Mitarbeitenden aufgenommen, Probleme direkt gelöst oder gezielt weitergeleitet und mich um Themen wie Benutzerverwaltung und Zeiterfassung gekümmert. Der Umgang mit Anwenderinnen und Anwendern liegt mir, auch wenn es einmal hektisch wird — freundlich bleiben, zuhören, das Problem schnell einordnen und eine Lösung finden. Meine Ausbildung zum Fachinformatiker für Systemintegration und Anwendungsentwicklung gibt mir das technische Fundament dazu.`,

      // Block 3 — Technikaffinität / Lernbereitschaft
      `Was mich auszeichnet, ist eine echte Begeisterung für IT, die über das Tagesgeschäft hinausgeht. In meiner Freizeit entwickle ich eigene Anwendungen — vom Full-Stack-Web-Projekt bis zu einem KI-gestützten Sicherheits- und Incident-Response-System. Dabei arbeite ich mich selbstständig in neue Tools und Technologien ein, und genau das hilft mir im Support: Ich verstehe Systeme schnell, finde mich in neuen Oberflächen zügig zurecht und schrecke vor unbekannten Problemen nicht zurück. Diese Lernbereitschaft und Technikaffinität möchte ich in Ihren Group-IT-Service-Desk einbringen.`,

      // Block 4 — Value Proposition / Serviceorientierung
      `Für CONET heißt das ein Mitarbeiter, der zwei Seiten verbindet: solide IT-Grundlagen und ein gutes Gespür für Menschen. Bevor ich in die IT gewechselt bin, habe ich im Kundenkontakt gearbeitet und ein eigenes Café- und Catering-Unternehmen in Bonn geführt — überall stand der Service am Menschen im Mittelpunkt. Diese Serviceorientierung bringe ich direkt an den Service Desk: Die Kolleginnen und Kollegen sollen sich gut aufgehoben fühlen und schnell wieder arbeitsfähig sein.`,

      // Block 5 — Persönlichkeit + Abschluss
      `Ich arbeite gerne im Team, packe an und sehe es als Erfolg, wenn am Ende des Tages Probleme gelöst und Abläufe ein Stück besser sind. Deutsch spreche ich fließend, Englisch sicher im Arbeitskontext. Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
