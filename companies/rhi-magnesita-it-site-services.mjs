// RHI Magnesita Deutschland AG — IT Site Services Professional (w/m/d),
// Werkstandort NIEDERDOLLENDORF (53639 Königswinter, direkt gegenüber Bonn), Vollzeit,
// Tarifvertrag, 30 Tage Urlaub, mobiles Arbeiten möglich.
// Adresse: Didierstraße, 53639 Königswinter (ehem. Didier-Werke; Branchenbuch/Stadtplan
// verifiziert 23.07.2026 — Eintrag OHNE Hausnummer geführt). Bewerbung NUR ONLINE
// (E-Mail wird aus Datenschutzgründen nicht akzeptiert).
// Kontakt: Verena Peinsipp (Talent Acquisition Partnerin, talent.europe@rhimagnesita.com,
// +43 699 1870 5271) -> Anrede Frau Peinsipp.
// Quelle: careers.rhimagnesita.com Job 1349964657 (aktiv, 23.07.2026).
// Rolle: lokale IT im Werk — 1st/2nd Level mit globalem Ticketsystem, Netzwerk/Client/Server
// planen/installieren/betreiben, Koordination mit zentraler IT + Dienstleistern,
// IMPLEMENTIERUNG NEUER KI- UND DIGITALISIERUNGSTECHNOLOGIEN (= authentischer Hebel!).
// Anforderungen: IT-Ausbildung (FiSi ✓); fundierte Betriebskenntnisse + "umfassende
// einschlägige Berufserfahrung" (GAP: Praktikum + Ausbildung -> nicht überzeichnet);
// WSUS/WDS, VMware/HyperV, Terminal Server nur Konzepte (DPS-Muster offen + Einarbeitung);
// OT-Erfahrung erwünscht (GAP, nicht behauptet; Werks-Hands-on über Café-Anpacken);
// Office ✓ Anwender; LAN = FAW IT-NETZWERKE; Deutsch fließend = C1;
// ENGLISCH NUR MITTELSTUFE = B1 PASST EHRLICH (kein Overclaim nötig);
// FÜHRERSCHEIN ERFORDERLICH = VORHANDEN (CV Mobilität + Brief-Satz).
// JD lädt ausdrücklich ein, auch ohne alle Anforderungen zu bewerben.
// BEREICH 2 (IT-Support/Site-Services, Goldmuster-Skelett). Score 3.8/5.
// Run: node generate-bewerbung.mjs companies/rhi-magnesita-it-site-services.mjs

export default {
  slug: 'rhi-magnesita-it-site-services',
  date: '23.07.2026',
  language: 'de',

  recipient: [
    'RHI Magnesita Deutschland AG',
    'Werk Niederdollendorf',
    'Didierstraße',
    '53639 Königswinter',
  ],

  subject: 'Bewerbung als IT-Site Services Professional, Werk Niederdollendorf',

  narrative: {
    kern: 'Gelernter Fachinformatiker für Systemintegration, der Anwender ruhig unterstützt, sauber dokumentiert und Digitalisierungsideen selbst baut.',
    passung: [
      'Gelernter Fachinformatiker für Systemintegration mit First Level Praxis bei GIS',
      'Netzwerkgrundlagen aus der Ausbildung: Switches, Access Points, Patchfeld',
      'KI und Automatisierung als Entwicklungsseite: eigene Systeme mit Python und n8n',
    ],
  },
  company: {
    mission: 'Weltmarktführer der Feuerfestindustrie; das lokale IT Team am Werkstandort Niederdollendorf verantwortet Support, Infrastruktur und die Einführung neuer KI und Digitalisierungstechnologien im Werk.',
    verbindung: 'Im Werk muss die IT einfach laufen, damit produziert werden kann; mein Support hält dem Team den Rücken frei und meine Automatisierungsseite hilft beim Digitalisierungsauftrag.',
  },
  jobKeywords: ['IT-Support', 'Netzwerk', 'Client/Server', 'Virtualisierung', 'Ticket', 'KI & Digitalisierung', 'Windows', 'Führerschein'],

  cv: {
    tagline: 'IT-Services & Support · Systemintegration',
    competencies: [
      'IT-Support (1st & 2nd Level)',
      'Netzwerk & Client/Server',
      'KI & Digitalisierung',
    ],
    // 1-Seiten-Regel: keine Projekte im IT-Support-CV
    projects: [],
    skills: [
      { category: 'Support & Clients', items: 'Windows 11, Microsoft 365 (Anwender), Hardware-Einrichtung, Drucker & Peripherie, Softwareinstallation' },
      { category: 'Ticketing & Prozesse', items: 'Jira, Ticket-Dokumentation, Eskalation an Second Level, Anwenderschulung' },
      { category: 'Netzwerk & Systeme', items: 'DNS, DHCP, Netzwerkkomponenten (Switches, Access Points), Client/Server-Grundlagen, Virtualisierung (Konzepte, Einarbeitung), Linux' },
      { category: 'KI & Automatisierung', items: 'n8n Workflow Automation, LLM-APIs (Claude, Gemini, OpenAI), API-Orchestrierung, Python-Skripte' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Peinsipp,',
    paragraphs: [
      // P1-Regel 23.07: rein faktisch, keine Rückkehr-Begründung, keine "reizt mich"-Sätze.
      `ich bewerbe mich auf Ihre Stelle als IT Site Services Professional am Werkstandort Niederdollendorf. Ich bin gelernter Fachinformatiker für Systemintegration mit Praxis im First Level Support. Zurzeit arbeite ich in einem Reisebüro in Bonn im Bereich Frontend und Marketing.`,

      `Anwendern schnell und freundlich zu helfen, ist genau mein Ding. Bei GIS in Bonn habe ich Störungen aufgenommen, im Ticketsystem sauber dokumentiert und entweder direkt gelöst oder qualifiziert weitergegeben. Rund 70 Prozent der Störungen konnte ich direkt im First Level lösen. Aus meiner Ausbildung kenne ich die Netzwerkseite: Switches und Access Points konfigurieren und Anschlüsse am Patchfeld auflegen. Mit Windows und den Office Anwendungen arbeite ich täglich, Englisch nutze ich im Arbeitskontext sicher.`,

      `Bereitstellungstools wie Windows Update Server, die Virtualisierung mit VMware oder HyperV und den Terminal Server kenne ich aus den Konzepten meiner Ausbildung, nicht aus dem Betriebsalltag. Das sage ich offen. In diese Werkzeuge arbeite ich mich zügig ein. Dafür bringe ich etwas mit, das in Ihren Aufgaben ausdrücklich steht: die Einführung neuer KI und Digitalisierungstechnologien. In meiner Freizeit baue ich eigene KI Systeme und Automatisierungen mit Python und n8n, die lauffähig und getestet sind. Damit erkenne ich schnell, wo sich Abläufe im Werk digitalisieren lassen.`,

      `Bevor ich in die IT gewechselt bin, habe ich in Bonn ein eigenes Café mit Cateringservice geführt. Dort zählte jeden Tag, dass der Betrieb läuft, auch wenn es hektisch wird. Anpacken ist mir also vertraut. Ich wohne in Bonn, Niederdollendorf erreiche ich gut, ein Führerschein der Klasse B ist vorhanden. Ein Einstieg ist ab sofort möglich.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
