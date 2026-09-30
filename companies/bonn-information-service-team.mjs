// Bundesstadt Bonn, Amt für Wirtschaftsförderung — Mitarbeiter*innen für das Service-Team der Bonn-Information
// Rolle: Beratung von Touristen persönlich, per Mail, Telefon und Brief; Verkauf von Merchandising
//        und Tickets; Aktualisierung von Hotel- und Restaurantlisten; Kassenabrechnungen;
//        repräsentative Außenauftritte. Schicht zwischen 9:00 und 18:30 Uhr.
// ⚠️ PROFILWAHL: User sagte „bereich 2" (= IT-Support/Goldmuster). Nach Sichtung des Volltextes ist das
//        eine TOURISTENINFORMATION, keine IT-Support-Stelle → bewerbung-tourismus.md ist maßgeblich
//        (Regel „Es entscheidet die ROLLE"). Der Goldmuster-Opener „gelernter Fachinformatiker …
//        zurück in die IT" wäre hier falsch. IT/FiSi kommt trotzdem vor, weil die Anzeige
//        „gute IT-Kenntnisse, insbesondere MS Office" ausdrücklich VORAUSSETZT — dort ist es ein
//        echter Pluspunkt, nicht die Fach-Story. Dem User gemeldet.
// Adresse (bonn.de verifiziert): Bonn-Information, Windeckstraße 1, 53111 Bonn (am Münsterplatz).
//        Bewerbung läuft ausschließlich über karriere.bonn.de. Kontakt für Rückfragen laut Anzeige:
//        Lena Faramaz, 0228-775005. Keine Anrede mit Nachname, weil die Anzeige keine Anrede-Form
//        („Frau"/„Herr") nennt und die Bewerbung über das Portal geht → „Sehr geehrte Damen und Herren".
// Konditionen: 2 Teilzeitstellen (max. 19,5 bzw. 20,5 Wochenstunden), eine befristet bis 31.12.2028,
//        eine unbefristet. A 7 LBesG bzw. bis EG 7 TVöD. Bewerbungsfrist 23.08.2026.
// Quelle: recruitingapp-5327.de.umantis.com/Vacancies/5142 (Xing-Link führte dorthin; Xing selbst nicht abrufbar).
//
// ⚠️ FORMALE HÜRDE (dem User gemeldet): Vorausgesetzt werden Tourismuskauffrau*kaufmann ODER
//    Verwaltungslaufbahn ODER Verwaltungsfachangestellte*r. Alternativpfad laut Anzeige:
//    „erfolgreicher Abschluss in einem verwaltungsnahen anerkannten Ausbildungsberuf mit
//    Berufserfahrung im Tourismus". Gökhan bringt anerkannten Ausbildungsberuf (FiSi) +
//    Tourismus-Berufserfahrung mit; „verwaltungsnah" ist die Dehnung. Im Brief werden BEIDE
//    Bestandteile des Alternativpfads positiv benannt, die Lücke wird nicht negiert.
//
// HINWEIS Bindestriche: „Bonn-Information" ist der amtliche Eigenname und steht so im Fließtext.
//    validate-anschreiben meldet dafür erwartete compound-hyphen-WARNUNGEN (kein Error).
//    Gleiche Ausnahmelogik wie bei der Postadresse in feedback_anschreiben_no_dash.
//
// Run: node generate-bewerbung.mjs companies/bonn-information-service-team.mjs

export default {
  slug: 'bonn-information-service-team',
  date: '05.08.2026',
  language: 'de',

  recipient: [
    'Bundesstadt Bonn',
    'Bonn-Information',
    'Windeckstraße 1',
    '53111 Bonn',
  ],

  subject: 'Bewerbung für das Service-Team der Bonn-Information',

  jobKeywords: [
    'Bonn-Information',
    'Beratung',
    'Tickets',
    'Merchandising',
    'Kassenabrechnung',
    'Tourismus',
    'Fremdsprache',
  ],

  narrative: {
    kern: 'Ich berate und verkaufe im direkten Gästekontakt, mehrsprachig, und halte die Abrechnung dahinter sauber.',
    passung: [
      'Reiseberatung und Verkauf bei Reisegesucht.com, davor Reiseführungen und Tourenverkauf in der Türkei',
      'Spanisch aus dem Studium und Türkisch als Muttersprache, dazu Englisch für die Verständigung am Tresen',
      'Kassenabrechnung und Listenpflege aus dem eigenen Café in Bonn, dazu abgeschlossene Ausbildung mit Office im Alltag',
    ],
  },

  company: {
    name: 'Bonn-Information',
    mission: 'Die Bonn-Information ist für Gäste der erste Anlaufpunkt in der Stadt und gibt dort Auskunft, verkauft Tickets und Merchandising.',
    verbindung: 'Ich lebe in Bonn und berate beruflich Reisende; die eigene Stadt aus Gästesicht zu erklären, verbindet beides.',
  },

  cv: {
    tagline: 'Gästeberatung & Verkauf · Mehrsprachige Touristenbetreuung',
    // Wie tui / tourlane / papaya: kein Profil-Block, competencies=[] entfernt die
    // "Schwerpunkte:"-Fallback-Zeile → validate-cv meldet erwartet "Competencies array is empty".
    competencies: [],
    projects: [],
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Reiseberatung &amp; Verkauf',
        bullets: ['Beratung von Reisenden am Telefon und per Mail, Angebote und Verkauf'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['Anfragen per Telefon und Mail aufgenommen, priorisiert und dokumentiert'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung bei IT-Systemen und Netzwerken, Praxis im Umgang mit Software'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer',
        bullets: ['Eigenes Café und Catering geführt: Verkauf, Kassenabrechnung, Einkauf und Team'] },
      { company: 'Tourismusbranche — Türkei', period: '2009 – 2014', role: 'Reiseführer &amp; Tourenverkauf',
        bullets: ['Reiseführungen und Verkauf von Touren an Gäste, mehrsprachige Gästebetreuung'] },
    ],
    skills: [
      { category: 'Gästeberatung & Verkauf', items: 'Beratung persönlich, am Telefon und per Mail, Verkauf von Tickets und Merchandising, Kassenabrechnung, Reklamationsmanagement' },
      { category: 'Tourismus & Gästebetreuung', items: 'Reiseführung, Touristeninformation, Auskunft zu Angeboten und Veranstaltungen, Fremdsprachen im Gästekontakt, Außenauftritte' },
      { category: 'Verwaltung & Digitales', items: 'MS Office mit Outlook, Excel und Word, Pflege von Listen und Infomaterialien, Abrechnung aus eigener Selbstständigkeit' },
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
      `ich bewerbe mich auf Ihre Stelle im Service-Team der Bonn-Information. Ich wohne in Bonn. Bei Reisegesucht.com in Köln arbeite ich in der Reiseberatung und im Verkauf, davor war ich in der Türkei mehrere Jahre als Reiseführer tätig.`,

      `Die Bonn-Information ist für Gäste der erste Anlaufpunkt in der Stadt. Beraten und verkaufen am Tresen mache ich seit Jahren. Als Reiseführer habe ich Gruppen vor Ort betreut und Touren direkt an die Gäste verkauft, heute berate ich Reisende am Telefon und per Mail. Der Verkauf von Tickets und Merchandising und die Kassenabrechnung am Tagesende sind mir aus meinem eigenen Café vertraut, das ich drei Jahre lang in Bonn geführt habe. Dadurch weiß ich, wie eine Kasse am Abend stimmen muss.`,

      `Sie erwarten neben Deutsch mindestens eine weitere gängige Fremdsprache. Spanisch habe ich an der Universität Istanbul studiert, Türkisch ist meine Muttersprache, auf Englisch verständige ich mich im Gespräch. In einer Stadt mit UN Campus und internationalem Besuch ist das am Tresen täglich nutzbar.`,

      `Gute Kenntnisse in der EDV setzen Sie voraus. Ich habe eine Ausbildung als Fachinformatiker für Systemintegration abgeschlossen und bringe dazu die Berufserfahrung im Tourismus mit. Mit Outlook, Excel und Word arbeite ich täglich. Ihre Hotel- und Restaurantlisten aktuell zu halten, ist genau die Sorgfaltsarbeit, die mir liegt. Sie bekommen jemanden aus der Stadt, der mehrsprachig berät und die Pflege im Hintergrund zuverlässig übernimmt.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
