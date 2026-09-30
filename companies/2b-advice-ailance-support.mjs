// 2B Advice GmbH — Junior Ailance Application Support Specialist (m/w/d), Bonn
// Adresse: Joseph-Schumpeter-Allee 25, 53227 Bonn (Impressum verifiziert, HRB Bonn 12713,
// GF Marcus Belke / Hajo Bickenbach). Produkt: Ailance — SaaS-Plattform für Datenschutz,
// Governance, Risk & Compliance. Festanstellung, Vollzeit, Bonn + Remote nach Einarbeitung,
// 30 Tage Urlaub, 42–48 T€ (Anzeige NENNT das Gehalt, fragt NICHT nach Vorstellung → keine
// Gehaltszeile im Brief). Kein Ansprechpartner genannt → "Sehr geehrte Damen und Herren".
// Quelle: LinkedIn Job 4443638334 (aktiv 28.07.2026), Bereich 2 (Goldmuster).
//
// Score 4.6/5 (Tracker #13, 16.07.2026 als Scan-Treffer geflaggt, nie gebaut → jetzt gebaut).
// PASSUNG: IT-Ausbildung = FiSi ✓; First-Level-Praxis (Ticket/Telefon/Remote/Doku/Eskalation)
// = GIS 1:1 ✓; DIFFERENZIERER = Full-Stack-Entwickler, der SaaS-Webanwendungen mit genau den
// JD-"helpful skills" baut (Rollen/Rechte, Workflows, Formulare/Views, Reports, Datenmodelle);
// systematisches Analysieren/Reproduzieren/Kategorisieren (Bedienungsfrage/Konfiguration/Fehler)
// = Kernaufgabe gespiegelt; Bonn = Wohnort. GAP ehrlich: Englisch (Kundenanfragen/Doku) → CV
// "technisches Lesen sicher, Verständigung gut"; Datenschutz/Compliance-Domäne → "einarbeiten,
// das sage ich offen" (keine Gap-Negation).
// Regeln: Fakten nur belegt, P1 faktisch, kein Dash im Fließtext, Tricolon-Budget 0,
// Einzeiligkeit CV, keine CV-Wiederholung im Brief.
// Run: node generate-bewerbung.mjs companies/2b-advice-ailance-support.mjs

export default {
  slug: '2b-advice-ailance-support',
  date: '29.07.2026',
  language: 'de',

  // Kein HR-Kontakt auffindbar; ~50 MA, GF ist laut Karriereseite bei Gesprächen dabei
  // → Anrede an Geschäftsführer Marcus Belke (Entscheidung aus Erstbewertung, Tracker #13).
  recipient: [
    '2B Advice GmbH',
    'Herrn Marcus Belke',
    'Joseph-Schumpeter-Allee 25',
    '53227 Bonn',
  ],

  subject: 'Bewerbung als Application Support Specialist für Ailance',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration und Full Stack Entwickler, der Anwender ruhig unterstützt, Probleme systematisch analysiert und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Als Full Stack Entwickler kenne ich Webanwendungen mit Rollen, Rechten und Workflows von innen',
      'Störungen im Ticketsystem aufnehmen, sauber dokumentieren und lösen oder qualifiziert weitergeben',
    ],
  },
  company: {
    mission: 'Bonner Softwarehaus, das mit der SaaS Plattform Ailance Unternehmen bei Datenschutz und Compliance unterstützt.',
    verbindung: 'Damit Ihre Kunden Ailance im Alltag sicher nutzen können, braucht es jemanden, der Anwenderfragen versteht und die technische Seite dahinter kennt; genau das bringe ich mit.',
  },
  jobKeywords: ['Application Support', 'Ticket', 'SaaS', 'Rollen', 'Workflows', 'Dokumentation', 'Webanwendung'],

  cv: {
    tagline: 'Application Support · Web & SaaS',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen → max 3 kurze Tags, keine Skill-Dopplung.
    competencies: [
      '1st Level Anwendersupport',
      'Analyse & Dokumentation',
      'Web- & SaaS-Verständnis',
    ],
    // 1-Seiten-Regel: keine Projekte im Support-CV.
    projects: [],
    skills: [
      { category: 'Support & Anwender', items: 'Ticketbearbeitung, Fehleranalyse & Reproduktion, Dokumentation, Wissensartikel & FAQ, Eskalation' },
      { category: 'SaaS & Webanwendungen', items: 'Rollen- und Rechtekonzepte, Workflows, Formulare & Views, Reports, Datenmodelle' },
      { category: 'Clients & Tools', items: 'Windows 11, Microsoft 365 (Anwender), Jira, Remote-Support' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    // Englisch bewusst als Tech-Formulierung (Rolle verlangt englische Doku + Kundenanfragen).
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Belke,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Application Support Specialist für Ailance. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Als Full Stack Entwickler baue ich außerdem selbst Webanwendungen. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing.`,

      `Anwendern per Ticket, E Mail und Telefon zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Bevor ich eine Lösung anbiete, reproduziere ich das Problem und stelle die passenden Rückfragen. Mit Windows und den Microsoft Office Komponenten arbeite ich täglich.`,

      `Was mich von vielen im Support unterscheidet, ist meine Entwicklungsseite. Als Full Stack Entwickler baue ich selbst SaaS Webanwendungen, mit genau den Bausteinen, um die es bei Ailance geht. Rollen und Rechte, Formulare und Workflows sind für mich tägliches Handwerk. Dadurch erkenne ich schnell, ob hinter einer Anfrage eine Bedienungsfrage, eine Konfiguration oder ein echter Fehler steckt. Wiederkehrende Fälle halte ich so in der Dokumentation fest, dass das Team direkt weiterarbeiten kann. In die Datenschutz und Compliance Themen von Ailance arbeite ich mich gründlich ein, das sage ich offen.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass Menschen schnell und freundlich bekommen, was sie brauchen, auch wenn viel los war. Diese Ruhe bringe ich in Ihren Support mit. Ich wohne in Bonn, Ihr Standort liegt für mich direkt vor der Tür, einsteigen kann ich ab sofort.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
