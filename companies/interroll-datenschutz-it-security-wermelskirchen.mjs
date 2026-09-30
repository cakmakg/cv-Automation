// Interroll — Specialist Data Protection and IT Security (m/w/d), Wermelskirchen, Vollzeit.
// Quelle: stepstone.de/stellenangebote--Specialist-Data-Protection-and-IT-Security-m-w-d-
//   Wermelskirchen-Interroll-Holding-GmbH--14408944-inline.html
//   (datePosted 18.08.2026, abgerufen 31.08.2026; WebFetch wird von StepStone geblockt,
//   HTML per curl geholt und das JSON-LD JobPosting ausgelesen).
//
// ADRESSE — Achtung, zwei Gesellschaften unter derselben Anschrift:
//   StepStone führt als Arbeitgeber die "Interroll Holding GmbH", der Kontaktblock der
//   Anzeige nennt als Empfänger aber wörtlich "Interroll Fördertechnik GmbH, Höferhof 16,
//   42929 Wermelskirchen". Der Kontaktblock gewinnt, weil er die Bewerbungsanschrift ist.
//   Höferhof 16, 42929 Wermelskirchen per Handelsregister/Branchenbuch bestätigt
//   (Interroll Holding GmbH, AG Köln HRB 53272, gleiche Anschrift).
// ANSPRECHPARTNER laut Anzeige: Jürgen Todt, Tel. +49-6262-9277-491, j.todt@interroll.com
//   -> Anrede "Sehr geehrter Herr Todt," ([[feedback-anschreiben-recipient]]).
// Anzeige verlangt ausdrücklich die Angabe des frühestmöglichen Eintrittstermins.
//
// ⚠️ HARTE FORMALBLOCKER — dem User im Report offen benannt, Entscheidung liegt bei ihm:
//   1. "Erfolgreich abgeschlossenes Master-Studium in z.B. Wirtschaftsrecht,
//      Wirtschaftsinformatik, oder vergleichbar". Kein Bachelor, kein Master vorhanden.
//      Härter als der Bachelor-Blocker bei SVLFG #54 ([[feedback-oeffentlicher-dienst-eg-grenze]]).
//   2. "Fundierte Erfahrung im Datenschutz nach DSGVO sind zwingend erforderlich" —
//      die Anzeige markiert diesen Punkt selbst als Muss. Vorhanden ist Datenschutz auf
//      der UMSETZUNGSSEITE (Art. 25 DSGVO, Technikgestaltung), nicht als Berufsfeld:
//      keine Verarbeitungsverzeichnisse für einen Konzern, keine DSFA, keine AVV-Verhandlung.
//   3. "Deutsch und Englisch min. C1". Deutsch C1 ja, Englisch B1
//      ([[user-language-levels]]) — wird NICHT überzeichnet, die CV-Sprachzeile bleibt
//      bei der etablierten, ehrlichen Formulierung.
//   Zusätzlich fehlen die "von Vorteil"-Punkte DSB-Zertifizierung und ISO 27001 Auditor.
//
// WAS TRÄGT (und warum die Bewerbung überhaupt Sinn ergeben kann):
//   Die Anzeige verlangt "Hohe IT-Affinität, speziell im Hinblick auf KI und
//   Informationssicherheit" und listet als Aufgaben die Bewertung neuer IT-Tools,
//   EU AI Act / NIS-2 / EU Data Act sowie weltweite Schulungen "mit Fokus auf Datenschutz
//   und dem verantwortungsvollen Umgang mit künstlicher Intelligenz". Genau dieser Teil
//   ist echte Substanz: GuestMatrix (Mandantentrennung per Row Level Security,
//   Einwilligungs-Zeitstempel, Soft Deletion, presigned URLs) und die Maskierung
//   personenbezogener Daten vor Modellaufrufen in den KI-Projekten.
//
// BEREICH 2, 6-Absatz-Bogen in der Quereinstiegs-Fassung des Users
// ([[feedback-anschreiben-struktur-quereinstieg]], Vorlage Haeger #74 / H.G.S. #75):
//   P1 Opener + Qualifikation + Quereinstiegs-Ansage + Arbeitsweise |
//   P2 Substanz: Datenschutz aus der Umsetzung (GuestMatrix, Maskierung, Art. 25) |
//   P3 KI, Bewertung von IT Tools, EU AI Act, Informationssicherheit, Schulungen,
//      Interroll-Bezug | P4 Förderzusage | P5 Herkunft Tourismus/Café + weltweite
//      Standorte | P6 Abschlusssatz.
// FÖRDERZUSAGE-ABSATZ IST GESETZT ([[user-foerderzusage-arbeitsagentur]]): das ist eine
// Quereinstiegs-Bewerbung mit Formalblocker, dort ist er das stärkste harte Argument.
//
// BEWUSST NICHT IM BRIEF:
//   - Sprachniveau. [[feedback-anschreiben-no-filler]] verbietet die Wiederholung der
//     CV-Sprachzeile im Brief; Englisch steht deshalb nur im CV, ehrlich und ungeschönt.
//   - Standortsatz. Bonn -> Wermelskirchen sind rund 55 km, also unter der 100-km-Grenze
//     ([[feedback-standort-weite-distanz]]) und kein Thema für den Brief.
//   - Gehaltsvorstellung und Eintrittstermin. Die Anzeige fordert nur den Eintrittstermin;
//     der gehört in die Mail bzw. das Formular, nicht in den Brieftext.
//   - Reisegesucht.com. Die Station ist seit 07/2026 beendet, darf also nicht mehr als
//     aktueller Job formuliert werden (Generator-Stand 28.08.2026). Steht im CV.
//
// Erwartete Validator-Meldungen (GEWOLLT, nicht wegschreiben):
//   "Paragraph count is 6" ([[feedback-anschreiben-bereich2-bogen]]).
// Score 2.0/5 — Details in reports/088-interroll-datenschutz-it-security-wermelskirchen-2026-08-31.md
// Run: node generate-bewerbung.mjs companies/interroll-datenschutz-it-security-wermelskirchen.mjs

export default {
  slug: 'interroll-datenschutz-it-security-wermelskirchen',
  date: '31.08.2026',
  language: 'de',

  recipient: [
    'Interroll Fördertechnik GmbH',
    'Herrn Jürgen Todt',
    'Höferhof 16',
    '42929 Wermelskirchen',
  ],

  // Betreff sachlich, ohne (m/w/d) ([[feedback-anschreiben-subject-clean]]).
  subject: 'Bewerbung als Specialist Data Protection and IT Security',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration, der Datenschutz von der Umsetzungsseite kennt: Zugriffsrechte, Einwilligungen und Löschwege werden bei ihm mit dem System gebaut und dokumentiert, nicht nachträglich geprüft.',
    passung: [
      'Mandantentrennung, Einwilligungs-Zeitstempel und Löschkonzepte in einer eigenen Plattform umgesetzt',
      'Maskierung personenbezogener Daten vor Aufrufen von Sprachmodellen, dazu Einordnung eigener Systeme unter den EU AI Act',
      'technische Bewertung neuer IT-Tools und verständliche Schulung von Anwendern aus der Support-Praxis',
    ],
  },
  company: {
    mission: 'Weltweit führender Anbieter von Lösungen für den Materialfluss, Förderrollen und Antriebe für Logistik und Industrie, mit 36 Gesellschaften weltweit und Hauptsitz in der Schweiz.',
    verbindung: 'Eine Gruppe, die an 36 Standorten das Schweizer nDSG und die DSGVO gleichzeitig einhalten muss, braucht jemanden, der technisch beurteilen kann, was ein neues IT-Tool mit personenbezogenen Daten tatsächlich macht.',
  },
  // Nur Begriffe, die BEIDE Dokumente ehrlich tragen. NICHT drin: ISO 27001, NIS-2,
  // Datenschutzfolgenabschätzung, Verarbeitungsverzeichnis — das wären Behauptungen
  // ohne Beleg ([[feedback-cv-no-overclaim]]).
  jobKeywords: ['Datenschutz', 'DSGVO', 'Informationssicherheit', 'EU AI Act', 'IT Tools', 'Dokumentation', 'Schulungen'],

  cv: {
    tagline: 'Datenschutz &amp; IT-Sicherheit · Systemintegration',
    // Schwerpunkte-Zeile einzeilig ([[feedback-cv-kernkompetenzen-oneline]]).
    competencies: [
      'DSGVO-Umsetzung',
      'IT-Sicherheit',
      'KI &amp; EU AI Act',
    ],
    // Ausnahme von der Projekt-Streichung im Bereich-2-CV: GuestMatrix ist der EINZIGE
    // Beleg für die Datenschutz-Aussagen in P2 des Briefes. Jede Brief-Aussage muss im
    // CV gedeckt sein, deshalb steht das Projekt hier. Ein Projekt, nicht mehr —
    // die 1-Seiten-Regel bleibt bindend ([[feedback-cv-one-page]]).
    projects: [
      {
        title: 'GuestMatrix',
        stack: 'Next.js 15 · TypeScript · Supabase/PostgreSQL',
        desc: 'Mandantenfähige B2B-Plattform: Trennung per Row-Level-Security, Einwilligungen mit Zeitstempel, Soft Deletion, Vitest-Test-Suite.',
      },
    ],
    // Override der Default-Stationen: UNO-Flüchtlingshilfe (05–06/2023, zwei Monate)
    // gestrichen, damit CV und Projekt zusammen auf EINE Seite passen. Der Brief nennt
    // die Station nicht, also entsteht keine Deckungslücke. Alle übrigen fünf Stationen
    // stehen unverändert wie im Default ([[feedback-cv-fixed-experience]]).
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – 07/2026', role: 'Frontend &amp; Marketing',
        bullets: ['Frontend-Design und Marketing für ein Reisebüro: Webseiten, Content, Kampagnen'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['1st Level IT Support, Personalplanung und Zeiterfassung im Enterprise-Umfeld'] },
      { company: 'Vidinli Software — Bonn', period: '09/2025 – 10/2025', role: 'Frontend Developer (Praktikum)',
        bullets: ['Entwicklung des Frontends einer Shopping-Plattform mit <strong>React.js</strong> und <strong>TypeScript</strong>'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: [] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer (Selbstständiger Unternehmer)',
        bullets: ['Gründung und Leitung eines Catering-Unternehmens: Kunden, Finanzen, Logistik, Team'] },
    ],
    // 5 Kategorien, jede Items-Zeile kurz gehalten — der CV muss auf EINE Seite
    // ([[feedback-cv-one-page]]). "IT Tools" und "Schulungen" stehen bewusst OHNE
    // Bindestrich im Text, sonst greift die ATS-Keyword-Prüfung des CV nicht.
    skills: [
      { category: 'Datenschutz &amp; Informationssicherheit', items: 'Technikgestaltung (Art. 25 DSGVO), Einwilligungs- &amp; Löschkonzepte, Rechte- &amp; Rollenkonzepte, Mandantentrennung' },
      { category: 'KI &amp; Regulierung', items: 'EU AI Act, Maskierung personenbezogener Daten vor Modellaufrufen, Human-in-the-Loop-Kontrollpunkte' },
      { category: 'IT-Systeme &amp; Support', items: 'Windows 11, Microsoft 365, TCP/IP, DNS, DHCP, Active Directory, 1st Level Support, Bewertung neuer IT Tools' },
      { category: 'Entwicklung &amp; Doku', items: 'TypeScript, Next.js, Node.js, Supabase, Dokumentation, Schulungen für Anwender' },
      { category: 'Mobilität', items: 'Führerschein Klasse B, internationale Reisebereitschaft' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    // Englisch bleibt ungeschönt. Die Anzeige verlangt C1 — das wird NICHT behauptet
    // ([[user-language-levels]], [[feedback-cv-no-overclaim]]).
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrter Herr Todt,',
    paragraphs: [
      'mit großem Interesse habe ich Ihre Ausschreibung als Specialist Data Protection and IT Security gelesen. Ich bin gelernter Fachinformatiker für Systemintegration und bewerbe mich als motivierter Quereinsteiger von der technischen Seite des Datenschutzes. Bevor ich in einer eigenen Anwendung die erste Zeile Code schreibe, halte ich fest, welche personenbezogenen Daten dort verarbeitet werden. Dazu gehört, wer darauf zugreifen darf und wann die Daten wieder verschwinden. Diese Dokumentation entsteht bei mir mit dem System und nicht erst danach.',

      'Meine Praxis im Datenschutz kommt aus dem Bau von Software. Für GuestMatrix, eine Plattform für mehrere Mandanten, liegt die Trennung der Kundendaten in der Datenbank selbst und nicht in der Anwendung. Einwilligungen werden mit Zeitstempel festgehalten, Löschungen laufen nachvollziehbar ab und hochgeladene Dateien sind nur über befristete Links erreichbar. In meinen KI Projekten maskiere ich personenbezogene Daten, bevor sie an ein Sprachmodell gehen. Das ist Datenschutz durch Technikgestaltung, so wie Artikel 25 DSGVO ihn verlangt.',

      'Der Teil Ihrer Ausschreibung, in dem es um künstliche Intelligenz geht, ist genau mein Feld. Seit anderthalb Jahren baue ich Systeme mit Sprachmodellen und kenne die Fragen, die dabei aufkommen. Welche Daten verlassen das Haus, wo werden sie gespeichert, welcher Zweck rechtfertigt den Einsatz. Den EU AI Act verfolge ich, weil er meine eigenen Projekte betrifft. Wenn Sie weltweit neue IT Tools einführen, kann ich technisch prüfen, was ein Anbieter mit den Daten tatsächlich macht. Interroll arbeitet mit 36 Gesellschaften weltweit an Lösungen für den Materialfluss. Datenschutz heißt dort, das Schweizer nDSG und die DSGVO gleichzeitig im Blick zu behalten. Schulungen zu Datenschutz und Informationssicherheit übernehme ich gerne, denn im Support habe ich gelernt, dass eine kurze verständliche Erklärung mehr bewirkt als eine Richtlinie, die niemand liest.',

      'Für meine berufliche Neuorientierung liegt mir eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung übernimmt der Träger für bis zu zwei Jahre bis zu 50 Prozent meines Gehalts. Die Unterlagen dazu reiche ich Ihnen gerne ein.',

      'Vor meiner Umschulung war ich im Tourismus tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Der Umgang mit sehr unterschiedlichen Menschen kommt von dort, ebenso die Ruhe, wenn es eng wird. Projekte an Ihren Standorten weltweit reizen mich, Reisen war jahrelang mein Beruf.',

      'Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.',
    ],
  },
};
