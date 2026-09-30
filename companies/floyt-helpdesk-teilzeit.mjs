// FLOYT Mobility GmbH (Billiger-mietwagen.de / CARIGAMI) — Mitarbeiter 1st Level Support /
// IT-Helpdesk (m/w/d), TEILZEIT, Köln Office (regelmäßige Präsenz) + Support für Alicante.
// Adresse: Holzmarkt 2a, 50676 Köln (HRB 102448 Köln, Impressum/Northdata verifiziert 23.07.2026).
// Kontakt: jobs@qvest.com?? NEIN — jobs-Portal company.floyt.com; Fragen: People & Culture.
// KEIN namentl. Ansprechpartner -> EN: "Dear Hiring Team".
// Quelle: company.floyt.com/de/jobs/8108217 (JD vom User gepastet, 23.07.2026).
// BESONDERHEIT: Englisch = Unternehmenssprache -> CV + ANSCHREIBEN AUF ENGLISCH
// (language:'en'; cv-base-en.html hat Experience/Education/Languages HARDCODED —
// Reisegesucht-Station am 23.07. nachgetragen; kein Zertifikate-Block; DE-Validator-Checks
// wie Schlusssatz greifen bei EN nicht -> Fehlermeldung bewusst ignoriert).
// Anforderungen: 2+ Jahre Helpdesk-BERUFSERFAHRUNG (GAP: GIS 4 Mon + EMLAK, ehrlich);
// Jira Service Management = Jira ✓ WÖRTLICH; AD/Okta sicher (GAP: Anwender + Konzepte,
// DPS-Muster); Windows ✓ / macOS GAP (offen); Netzwerk-Grundlagen ✓ FAW; Doku/Runbooks ✓;
// Scripting "von Vorteil" = ÜBERERFÜLLT (Python/TS/n8n); Deutsch ✓; Englisch sehr gut
// (B1-GAP, ehrlicher Satz; EN-Brief selbst ist Arbeitsprobe); SPANISCH = AUTHENTISCHER
// HEBEL (Alicante-Support in Landessprache, Uni Istanbul Spanisch!).
// Gehaltsvorstellung + Eintrittstermin gefordert -> 40.000 EUR brutto (Vollzeitbasis,
// pro rata) + ab sofort im Brief. P1-Regel 23.07: faktisch, keine Begründungen.
// BEREICH 2 (IT-Support), erste EN-Bewerbung. Score 3.9/5 (Vorbehalt: nur Teilzeit).
// Run: node generate-bewerbung.mjs companies/floyt-helpdesk-teilzeit.mjs

export default {
  slug: 'floyt-helpdesk-teilzeit',
  date: '23.07.2026',
  language: 'en',

  recipient: [
    'FLOYT Mobility GmbH',
    'Holzmarkt 2a',
    '50676 Köln',
  ],

  subject: 'Application for 1st Level Support / IT Helpdesk (part-time)',

  narrative: {
    kern: 'Trained IT specialist for systems integration who supports users calmly, documents cleanly and brings a scripting and automation side to first level work.',
    passung: [
      'First level practice at GIS: tickets taken, documented, solved or escalated',
      'Scripting and automation with Python, TypeScript and n8n beyond the basic requirement',
      'Spanish for the Alicante office, German for Cologne, English as working language',
    ],
  },
  company: {
    mission: 'Technology company behind Billiger-mietwagen.de and CARIGAMI, running the leading car rental comparison platforms from Cologne and Alicante.',
    verbindung: 'A helpdesk that answers fast and documents well keeps both offices productive; my support style and my languages fit exactly this setup.',
  },
  jobKeywords: ['Jira', 'Active Directory', 'Okta', 'Windows', 'macOS', 'Google Workspace', 'documentation', 'script'],

  cv: {
    tagline: 'IT Support · Systems Integration',
    competencies: [],
    projects: [
      {
        title: 'AI Orchestra — multi-agent automation',
        stack: 'Python · LangGraph · MongoDB',
        desc: 'Self-built automation system with routing guards, cost tracking and a 19-part test suite.',
      },
      {
        title: 'Workflow automations',
        stack: 'n8n · TypeScript · Node.js',
        desc: 'Command line scripts and n8n workflows that automate recurring tasks end to end.',
      },
    ],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (user level), Google Workspace, hardware setup, printers & peripherals, remote support' },
      { category: 'Ticketing & Docs', items: 'Jira, ticket documentation, knowledge base articles, runbook-style docs, escalation to 2nd/3rd level' },
      { category: 'Network & Systems', items: 'LAN/Wi-Fi basics, DNS, DHCP, VPN (basics), Active Directory (concepts, fast ramp-up), Linux' },
      { category: 'Scripting & Automation', items: 'Python, TypeScript, Node.js, command line scripts, n8n workflows' },
    ],
  },

  anschreiben: {
    anrede: 'Dear Hiring Team,',
    paragraphs: [
      `I am applying for the part-time position in 1st Level Support / IT Helpdesk at your Cologne office. I am a trained IT specialist for systems integration with hands-on practice in first level support. I currently work at a travel agency in Bonn in frontend and marketing.`,

      `Helping users quickly and in a friendly way is exactly my thing. At GIS in Bonn I took incoming tickets, documented them cleanly and either solved them directly or escalated them with full context. Around 70 percent of the tickets I could resolve myself at first level. Setting up workstations, printers and mobile devices is familiar from my training and internships, and I write documentation as I work, not afterwards.`,

      `Account administration with Active Directory and Okta I know as a user and from the concepts of my training, and macOS has not been part of my daily work yet. I say that openly, and I get up to speed fast. What sets me apart at first level is my scripting side: I build my own tools and automations with Python, TypeScript and n8n, so command line work is not a hurdle for me, it is how I solve repetitive tasks. And one more thing that may help: I speak Spanish, so supporting the Alicante office in its own language would come naturally to me.`,

      `Before moving into IT, I founded and ran a café with a catering service in Bonn. What counted there every day was keeping the operation running, even in hectic moments. I use English confidently in day-to-day technical work and I am actively improving it. I live in Bonn, regular presence at the Cologne office is no problem, and I am available immediately. My salary expectation is 40,000 euros gross per year on a full-time basis, pro rata for this part-time role.`,

      `I look forward to the invitation to a personal interview.`,
    ],
  },
};
