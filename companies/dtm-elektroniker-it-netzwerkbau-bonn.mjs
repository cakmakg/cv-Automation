// dtm Datentechnik Moll GmbH (dtm group), Elektroniker für IT-Netzwerkbau bei
// Geschäftskunden (m/w/d), Standort Bonn.
// Anzeige: dtm-group.de/jobs/elektroniker-netzwerkbau (abgerufen 19.09.2026).
//   Standorte laut Anzeige: Berlin, Bonn, Meckenbeuren, München. Bewerbung per Mail an
//   personal@dtm-group.de oder per Anruf, ohne Formular.
// Firmendaten (Impressum dtm-group.de/impressum, northdata, 19.09.2026):
//   dtm Datentechnik Moll GmbH, Benzstraße 1, 88074 Meckenbeuren; HRB 630934 AG Ulm;
//   GF Hedwig Moll, Jan Moll. Mittelständisch, Sitz am Bodensee, Datennetze aller Art
//   für Bürokommunikation, Produktion und Rechenzentren. Adressiert wird der Sitz, weil die
//   Ansprechpartnerin dort sitzt; eine Bonner Adresse nennt die Anzeige nicht.
//   Ansprechpartnerin: Jasmin Horn, HR & Ausbildung, Tel. 07542 9403-63.
//
// BEREICH 2, QUEREINSTIEG. Struktur = H.G.S. #75 / GIG #77 (freigegebener Stand):
//   P1 Opener + Quereinstieg + Aufgaben + Arbeitsweise | P2 Praxis | P3 Netzwerk |
//   P4 Förderzusage | P5 Herkunft + Bonn + Führerschein | P6 Schlusssatz.
//   KEIN Normen/EFKffT-Absatz (vom User bei #75 gestrichen).
//   User 19.09.2026: "ganz klar, sauber, ohne komplexe Erklärung" → kurze Sätze,
//   keine Begründungsketten; die Videoüberwachungs-Sätze aus #74/#77 sind raus.
//
// PASSUNG ~3.2/5, der inhaltlich beste Elektro-Treffer bisher:
//   + Kern der Stelle sind DATENNETZE (installieren, in Betrieb nehmen, prüfen, warten),
//     nicht Starkstrom. Das deckt das FAW-Modul IT Netzwerke und die Praktika ab.
//   + Die Ausbildung steht nur unter "Idealvoraussetzungen" ("z.B."), kein Muss.
//   + Standort Bonn, Führerschein Klasse B, Windows und Office vorhanden.
//   + Dokumentation und Kundenbetreuung vor Ort sind ausgeschriebene Aufgaben.
//   + Förderzusage der Agentur für Arbeit.
//   - Keine Elektroausbildung. "Elektrotechnische Messungen z.B. DGUV V3" setzen eine
//     Elektrofachkraft voraus (oder Arbeit unter deren Aufsicht). Wird nicht behauptet.
//   - Keine Erfahrung mit Messgeräten belegt. Wird nicht behauptet.
//   - Quereinsteiger werden in der Anzeige nicht erwähnt.
//   - Aufmaß für Abrechnungen: nicht belegt, im Brief nicht behauptet.
// Run: node generate-bewerbung.mjs companies/dtm-elektroniker-it-netzwerkbau-bonn.mjs

export default {
  slug: 'dtm-elektroniker-it-netzwerkbau-bonn',
  date: '19.09.2026',
  language: 'de',

  recipient: [
    'dtm Datentechnik Moll GmbH',
    'Benzstraße 1',
    '88074 Meckenbeuren',
  ],

  subject: 'Bewerbung als Elektroniker für IT-Netzwerkbau in Bonn – Quereinstieg aus der IT',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration, der Netzwerke verkabelt, Geräte in Betrieb nimmt und seine Arbeit so dokumentiert, dass der nächste Kollege ohne Rückfragen weitermacht.',
    passung: [
      'Netzwerktechnik und strukturierte Verkabelung aus Umschulung und Praktika',
      'Störungen aufnehmen und beheben aus dem 1st Level Support',
      'Kundenbetreuung vor Ort aus Support, Tourismus und eigenem Café',
    ],
  },
  company: {
    mission: 'Die dtm group baut als mittelständisches Unternehmen vom Bodensee aus Datennetze für Büro, Produktion und Rechenzentren, mit Standorten in Berlin, Bonn und München.',
    verbindung: 'Wer Datennetze bei Geschäftskunden installiert und in Betrieb nimmt, braucht saubere Verkabelung und eine Dokumentation, mit der der nächste Techniker sofort weiterarbeiten kann.',
  },
  // Nur Begriffe, die Brief UND CV ehrlich tragen ([[feedback-cv-no-overclaim]]).
  // "Messung", "DGUV" und "Aufmaß" bewusst NICHT: kein Beleg.
  jobKeywords: ['Netzwerk', 'Verkabelung', 'Inbetriebnahme', 'Störung', 'Kunden', 'Dokumentation', 'Windows', 'Führerschein'],

  cv: {
    tagline: 'IT-Netzwerkbau · Servicetechnik',
    // Nicht wortgleich mit der Skill-Liste, sonst meldet validate-cv die Dopplung.
    competencies: [
      'Netzwerkinstallation',
      'Technische Fehleranalyse',
      'Kundenservice vor Ort',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV. cv.experience fehlt bewusst → Default.
    projects: [],
    // KEINE Elektro-, VDE-, DGUV- oder Messgeräte-Behauptung. Alles hier ist belegt.
    skills: [
      { category: 'Netzwerk &amp; Verkabelung', items: 'Netzwerke aufbauen &amp; betreuen, strukturierte Verkabelung, Switches, TCP/IP, DNS, DHCP' },
      { category: 'Endgeräte &amp; Inbetriebnahme', items: 'Arbeitsplätze einrichten, Hardware &amp; Software installieren, Geräte in Betrieb nehmen' },
      { category: 'Störungsdienst', items: 'Systematische Fehleranalyse und Störungsbeseitigung, Auswerten von Protokollen, Fernwartung' },
      { category: 'Kunden &amp; Dokumentation', items: '1st Level Support, Kunden vor Ort betreuen, digitale Dokumentation, Windows &amp; MS Office' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      // Passend zu P1, wo der User beide Fachrichtungen nennt ([[user-ausbildung-systemintegration]]).
      { school: 'FAW', program: 'Fachinformatiker Anwendungsentwicklung / Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Horn,',
    paragraphs: [
      // P1 = Wortlaut des Users (19.09.2026). Nur korrigiert: "Anweunfdsentwickler" ->
      // "Anwendungsentwicklung", "technischen" -> "technischem", doppelte Leerzeichen.
      // Ohne Arbeitsweise-Satz: Validator-ERROR "Einleitung zeigt Arbeitsweise" ist GEWOLLT.
      `mit großem Interesse habe ich Ihre Stellenausschreibung als Elektroniker für IT Netzwerkbau am Standort Bonn gelesen. Ich bin gelernter Fachinformatiker für Anwendungsentwicklung und auch Systemintegration und möchte mich als motivierter Quereinsteiger mit technischem Hintergrund bei Ihnen bewerben. Besonders angesprochen haben mich die Aufgaben: Datennetze in Gebäuden installieren und in Betrieb nehmen, Störungen beseitigen und Kunden vor Ort betreuen.`,

      `Bei der Emlak AG und der UNO Flüchtlingshilfe habe ich Arbeitsplätze eingerichtet, Hardware angeschlossen und Netzwerke verkabelt. Dazu gehörten die Inbetriebnahme der Geräte und eine saubere Beschriftung der Verkabelung. Bei der GIS GmbH in Bonn habe ich im 1st Level Support Störungen am Telefon und vor Ort aufgenommen, dokumentiert und behoben. Dadurch fand der nächste Techniker den Fehler ohne langes Suchen.`,

      `Netzwerktechnik ist der Kern meiner Ausbildung. Zwei zertifizierte Module meiner Umschulung behandeln IT Systeme und IT Netzwerke. Mit strukturierter Verkabelung und der Konfiguration von Switches arbeite ich routiniert. Windows und Office gehören für mich zum Alltag.`,

      `Für meine berufliche Neuorientierung liegt mir eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung übernimmt der Träger für bis zu zwei Jahre bis zu 50 Prozent meines Gehalts. Die Unterlagen dazu reiche ich Ihnen gerne ein. Damit tragen Sie das Risiko der Einarbeitung nur zur Hälfte.`,

      `Vor meiner Umschulung als Fachinformatiker war ich im Tourismus tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Im direkten Umgang mit Kunden bin ich zu Hause. Ich wohne in Bonn und habe einen Führerschein der Klasse B.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
