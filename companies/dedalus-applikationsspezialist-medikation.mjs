// Dedalus HealthCare GmbH — Applikationsspezialist:in / Consultant (m/w/d),
//   klinische Arbeitsplatzsysteme / Medikationsprozess (ORBIS Medication).
//   Standort Bonn / bundesweit / Home-Office, Vollzeit, Bewerbungsfrist 31.08.2026.
//   Juristische Firma/Anschrift (Handelsregister HRB 9069 Amtsgericht Bonn, verifiziert 31.07.2026):
//   Dedalus HealthCare GmbH, Konrad-Zuse-Platz 1-3, 53227 Bonn (= Firmensitz, User wohnt in Bonn).
//   Anzeige nennt KEINEN Ansprechpartner und duzt → Anrede "Sehr geehrte Damen und Herren".
// Quelle: stepstone.de/…-14281466 (aktiv, 31.07.2026, JD per WebFetch gezogen).
// BEREICH 1 (Tech), aber als APPLIKATIONS-/CONSULTANT-Rolle geframed (nicht reiner Dev):
//   Software einführen, konfigurieren, Anwender schulen, Prozesse analysieren.
// Gold-Voice, hyphenfrei im Fließtext, Tricolon-Budget 0.
//
// PASSUNG (Stretch, aber besser als BITech beim Formalen): Score ~2.8/5.
//   STÄRKEN: (1) Formalanforderung erfüllt — Anzeige akzeptiert ausdrücklich "IT-Ausbildung"
//     ODER Studium ODER medizin. Ausbildung → FiSi des Users passt. (2) Firmensitz Bonn = Wohnort
//     → Reisebereitschaft (bis 80% DACH) + Führerschein B glaubwürdig. (3) Einführung/Konfiguration/
//     Inbetriebnahme + Anwenderschulung + Ist-Analyse/Soll-Konzeption = IT-Support (GIS) + eigener
//     End-to-End-Bau + kundennahe Praxis (Tourismus/Café/Support, 70% Ticketlösung).
//   ECHTE LÜCKEN (ehrlich, keine Gap-Negation): (a) "Gute Kenntnisse der Medikationsprozesse im
//     Krankenhaus" = Kernanforderung, NICHT im Profil → im Brief offen als Einarbeitung, klinisches
//     Umfeld NICHT überclaimen (kein ORBIS/KIS in Skills). (b) Englisch "fließend" gefordert, User B1
//     → CV-Zeile transparent, im Brief nicht thematisiert.
// CV: Tech-Default (tagline leer), Skills Anwendungs-/Beratungs-first + Dev als Fundament, 1 Projekt
//   (Integration/Konfiguration), Education-Override = Systemintegration. 1-Seiten-Regel nach Generate.
// Run: node generate-bewerbung.mjs companies/dedalus-applikationsspezialist-medikation.mjs

export default {
  slug: 'dedalus-applikationsspezialist-medikation',
  date: '31.07.2026',
  language: 'de',

  recipient: [
    'Dedalus HealthCare GmbH',
    'Konrad-Zuse-Platz 1-3',
    '53227 Bonn',
  ],

  subject: 'Bewerbung als Applikationsspezialist / Consultant für klinische Arbeitsplatzsysteme',

  narrative: {
    kern: 'Gelernter Fachinformatiker mit Support- und Full-Stack-Praxis, der Software einführt, konfiguriert und die Anwender dabei begleitet.',
    passung: [
      'IT-Ausbildung als Fachinformatiker, wie die Stelle sie akzeptiert',
      'Software einführen und konfigurieren, Anwender im Support begleiten',
      'Technische Themen verständlich erklären, aus dem IT Support',
    ],
  },
  company: {
    mission: 'Dedalus baut mit ORBIS klinische Software, mit der Krankenhäuser ihre Abläufe und den Medikationsprozess digital steuern.',
    verbindung: 'Wer klinische Software beim Kunden einführt, braucht jemanden, der Technik und Anwender zusammenbringt; genau an dieser Schnittstelle arbeite ich.',
  },
  jobKeywords: ['Support', 'Konfiguration', 'Schulung', 'Analyse', 'Projekt', 'Anwender'],

  cv: {
    // Tech-Default: tagline leer, Schwerpunkte-Zeile trägt die Rollenklammer (Applikations-/Consultant).
    tagline: '',
    // Bewusst anders formuliert als die Skill-Liste (keine Dopplung), Schwerpunkte-Zeile ≤100.
    competencies: [
      'Anwendungsbetreuung',
      'Analyse & Konzeption',
      'Schulung & Kundenkontakt',
    ],
    // "Fließend Englisch" gefordert, User B1: ehrlich, nicht überclaimen (user_language_levels).
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
    // Genau 1 Projekt → 1 Seite A4. Zeigt Einführung/Konfiguration/Integration mehrerer Systeme —
    // die technische Entsprechung zu "Installation, Konfiguration, Inbetriebnahme" der Anzeige.
    projects: [
      {
        title: 'Travelagency — Integrations-Monorepo',
        stack: 'TypeScript · Node.js · FastAPI · Docker · MongoDB',
        desc: 'Selbst gebautes System, das mehrere Dienste und externe Anbieter (Amadeus, Hotelbeds, Stripe) über REST anbindet und konfiguriert. Betrieb in Docker-Containern, mit eigener Test-Suite abgesichert, AES-256-GCM-Verschlüsselung.',
      },
    ],
    skills: [
      { category: 'Anwendungen & Betrieb', items: 'Installation, Konfiguration, Inbetriebnahme, Anwendersupport, Ticketing, Fehleranalyse' },
      { category: 'Beratung & Projekt', items: 'Anforderungsanalyse, Anwenderschulung, Präsentation, Projektarbeit, Kundenkommunikation' },
      { category: 'Entwicklung & Daten', items: 'TypeScript, JavaScript, Node.js, React, REST-APIs, SQL, MongoDB' },
      { category: 'Werkzeuge & Methoden', items: 'Scrum/Agile, Git/GitHub, Docker, Linux, Windows 11, Jira' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker für Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich als Applikationsspezialist und Consultant bei Dedalus. Ich bin gelernter Fachinformatiker und habe im IT Support Anwender und Systeme betreut, Anfragen aufgenommen und Störungen gelöst. Daneben baue ich seit rund zwei Jahren eigene Anwendungen und richte sie von der Installation bis zum Betrieb selbst ein. Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros in Köln.`,

      `Genau diese Verbindung aus Technik und Anwendern ist die Stelle. Ich führe Software ein und konfiguriere sie. Danach übernehme ich die Schulung der Anwender, die damit arbeiten. Im IT Support Praktikum habe ich rund 70 Prozent der Anfragen selbst gelöst und dabei gelernt, technische Dinge einfach zu erklären. Die Medikationsprozesse im Krankenhaus bringe ich noch nicht mit, das sage ich offen. In ein neues Fachgebiet arbeite ich mich schnell und gründlich ein, das gehört für mich zum Alltag.`,

      `Mein Fundament sind zwei Jahre Umschulung zum Fachinformatiker. Das erste Jahr Systemintegration bei der FAW in Köln habe ich mit den Modulen IT Systeme und IT Netzwerke abgeschlossen, dazu ein Praktikum. Das zweite Jahr gehörte der Anwendungsentwicklung. Seitdem baue ich fortlaufend eigene Projekte, beginne bei der Analyse der Anforderungen und setze sie dann technisch um. So entstand eine Reiseplattform mit angebundenen Buchungssystemen und ein Multi Agenten System zur Orchestrierung mehrerer Sprachmodelle. Über 40 dieser Repositories liegen öffentlich auf GitHub.`,

      `Dedalus baut mit ORBIS klinische Software, mit der Krankenhäuser ihre Abläufe und den Medikationsprozess digital steuern. Dazu passe ich, weil ich an der Schnittstelle von Technik und Anwender zu Hause bin und ein System von der Analyse über die Konfiguration bis zur Kundenübergabe begleiten kann. Die geforderte Reisebereitschaft im DACH Raum bringe ich mit. Ich wohne in Bonn direkt am Standort und habe Führerschein Klasse B.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
