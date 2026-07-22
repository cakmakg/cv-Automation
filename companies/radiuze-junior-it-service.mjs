// RADIUZE GmbH — Junior IT Service Specialist OnSite Support (m|w|d), Einsatzort ZÜLPICH
// Managed-Services-Provider (Microsoft 365/Azure, Cloud, Security, IT-Betrieb; radiuze.de
// verifiziert 22.07.2026). Juristisch: RADIUZE GmbH, Talstraße 78, 52531 Übach-Palenberg
// (Adresse von der eigenen Karriereseite). Ansprechpartnerin: Ana Raquel Antunes dos Santos
// (people@radiuze.de) -> Anrede "Frau Antunes dos Santos". Bewerbung über Jobportal
// (verlangt CV, Zeugnisse, FRÜHESTER EINTRITTSTERMIN -> "ab sofort" im Brief; kein Gehalt).
// Quelle: radiuze.de/de/karriere/jobportal (via XING, 22.07.2026).
// BEREICH 2 (Goldmuster). Score 3.8/5 — BEWUSSTER STRETCH-BUILD (User 22.07.2026:
// "ingilizcem b1 ama gelistiririm"). GAPS ehrlich, im Brief NICHT übertüncht:
// (1) Englisch B2+ gefordert, Ist B1 -> KEIN Overclaim: Brief "im technischen Kontext sicher,
//     entwickle es gezielt weiter" (hamacher-Präzedenz), CV-Zeile transparent B1;
// (2) AD/M365-Verwaltung + Autopilot -> Anwender + Ausbildungskonzepte + Einarbeitung
//     (DPS/WBITVP-Muster, "das sage ich offen");
// (3) Zülpich täglich OnSite -> neutral "gut erreichbar" (KEIN Auto-Claim, nicht belegt).
// TRÄGT: Junior + "abgeschlossene IT-Ausbildung" = FiSi; GIS-Ticketmechanik; Hardware/
// Endgeräte (akkodis-Formulierungen); Netzwerkanschlüsse patchen/dokumentieren = FAW
// IT-NETZWERKE; Knowledge Base = Entwicklungsseite.
// Regeln: Fakten nur belegt, keine Gap-Negation, Einzeiligkeit, Tricolon-Budget (Gold-P1=1).
// Run: node generate-bewerbung.mjs companies/radiuze-junior-it-service.mjs

export default {
  slug: 'radiuze-junior-it-service',
  date: '22.07.2026',
  language: 'de',

  recipient: [
    'RADIUZE GmbH',
    'Frau Ana Raquel Antunes dos Santos',
    'Talstraße 78',
    '52531 Übach-Palenberg',
  ],

  subject: 'Bewerbung als Junior IT Service Specialist OnSite Support',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig und strukturiert unterstützt und sauber dokumentiert.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Hardware einrichten, Windows installieren, Netzwerkanschlüsse patchen und dokumentieren',
      'Benutzerkonten in Active Directory und Microsoft 365 als zügige Einarbeitung',
    ],
  },
  company: {
    mission: 'Dienstleister, der für seine Kunden den sicheren IT Betrieb übernimmt, von Microsoft 365 und Cloud bis zum Support vor Ort.',
    verbindung: 'OnSite Support ist das Gesicht dieses Betriebs beim Kunden; ruhige, dokumentierte Arbeit direkt am Arbeitsplatz ist genau meine Stärke.',
  },
  jobKeywords: ['Ticket', 'Windows', 'Active Directory', 'Microsoft 365', 'Hardware', 'Netzwerk', 'Anwendersupport', 'Dokumentation'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      '1st Level Anwendersupport',
      'Windows & Hardware',
      'Ticketbearbeitung & Eskalation',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Hardware-Einrichtung, Drucker & Peripherie, Softwareinstallation' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Eskalation an Second Level, Knowledge-Base-Pflege' },
      { category: 'Netzwerk & Systeme', items: 'TCP/IP, DNS, DHCP, Netzwerkverkabelung & Patchfelder (Ausbildung), Active Directory (Konzepte, Einarbeitung), Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (B1, sichere Verständigung, in aktiver Weiterentwicklung) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Antunes dos Santos,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Junior IT Service Specialist im OnSite Support in Zülpich. Ich bin gelernter Fachinformatiker für Systemintegration und habe im First Level Support Anwender und Systeme betreut. Zurzeit arbeite ich in einem Reisebüro im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und meine Stärken liegen. Der OnSite Support bei einem Dienstleister für den sicheren IT Betrieb passt genau zu dem, was ich kann und machen möchte.`,

      `Anwendern direkt am Arbeitsplatz zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Auch Hardware gehört für mich dazu: Ich installiere und konfiguriere Windows, richte Drucker und weitere Peripherie ein und bereite Endgeräte für die Auslieferung vor. Netzwerkanschlüsse patchen und sauber dokumentieren kenne ich aus meiner Ausbildung zum Fachinformatiker.`,

      `Die Verwaltung von Benutzerkonten in Active Directory und Microsoft 365 kenne ich bisher als Anwender und aus den Konzepten meiner Ausbildung, mit Autopilot habe ich noch nicht gearbeitet. Das sage ich offen. In beides arbeite ich mich zügig ein. Englisch nutze ich im technischen Kontext sicher und entwickle es gerade gezielt weiter.`,

      `Was mir dabei hilft, ist meine Entwicklungsseite: In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n. Dadurch fällt es mir leicht, eine Knowledge Base strukturiert zu pflegen und Dokumentation aktuell zu halten. Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Service und Ruhe an vollen Tagen sind mir vertraut. Zülpich ist für mich gut erreichbar, ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
