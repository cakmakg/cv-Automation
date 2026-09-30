// Tourlane GmbH — Vertriebsmitarbeiter Tourismus (f/m/x), Home Office / remote (Vollzeit)
// Rolle: Travel Expert im Direktvertrieb — maßgeschneiderte Reisen zusammenstellen, kompletter
//        Verkaufsprozess per Telefon und Video (Qualifizierung bis Vertragsabschluss), Destinations-
//        wissen aufbauen, unternehmenseigene Planungs-/Buchungstools nutzen, monatliche Vertriebsziele.
// PROFIL: TOURISMUS (bewerbung-tourismus.md) — Tourismus/Vertrieb führt. Differenzierer für DIESE
//        Rolle ist NICHT Marketing, sondern die von der Anzeige geforderte "technische Affinität"
//        + Home-Office-Eigenorganisation. KEINE Buchungssystem-Behauptung (Ehrlichkeits-Regel).
// Adresse (Impressum tourlane.de, verifiziert): Prinzessinnenstraße 20, 10969 Berlin.
//        Kein namentlicher Ansprechpartner in der Anzeige → "Sehr geehrte Damen und Herren".
// Quelle: de.indeed.com/viewjob?jk=3d3be0631c741cd1 (Volltext gegengeprüft über remotely.de).
// Gehalt laut Anzeige: 50.000–60.000 €/Jahr. Start: Oktober 2026.
//
// ⚠️ OFFENE ANFORDERUNG (dem User gemeldet): "fließend Englisch (schriftlich und mündlich)".
//    Gökhan = B1. Im Brief bewusst NICHT thematisiert (weder behauptet noch negiert,
//    siehe feedback_anschreiben_keine_gap_negation + user_language_levels).
//
// Run: node generate-bewerbung.mjs companies/tourlane-vertrieb-tourismus.mjs

export default {
  slug: 'tourlane-vertrieb-tourismus',
  date: '05.08.2026',
  language: 'de',

  recipient: [
    'Tourlane GmbH',
    'Personalabteilung',
    'Prinzessinnenstraße 20',
    '10969 Berlin',
  ],

  subject: 'Bewerbung als Vertriebsmitarbeiter Tourismus',

  jobKeywords: [
    'Reiseberatung',
    'Verkaufsprozess',
    'Destinationswissen',
    'Vertriebsziele',
    'Telefon',
    'Video',
    'Homeoffice',
  ],

  narrative: {
    kern: 'Ich verkaufe Reisen im direkten Gespräch und organisiere meine Arbeit selbstständig; Software ist für mich Werkzeug, keine Hürde.',
    passung: [
      'Reisevertrieb aus der Praxis: Tourenverkauf als Reiseführer in der Türkei, heute Reiseberatung und Verkauf im Reisebüro',
      'Technische Affinität über dem Anforderungsprofil: entwickelt selbst Webanwendungen, arbeitet sich in neue Tools schnell ein',
      'Eigenverantwortung im Homeoffice, belegt durch drei Jahre eigene Selbstständigkeit und freie Reiseberatung über Amondo',
    ],
  },

  company: {
    name: 'Tourlane',
    mission: 'Tourlane stellt individuelle Reisen für rund 35 Ziele zusammen und verkauft sie persönlich über Telefon und Video statt von der Stange.',
    verbindung: 'Genau so habe ich Reisen immer verkauft: im Gespräch, zugeschnitten auf den Gast, nicht über einen Katalogpreis.',
  },

  cv: {
    tagline: 'Reisevertrieb & Reiseberatung · Mehrsprachige Gästebetreuung',
    // Wie tui-tourismuskaufmann-koeln: kein Profil-Block. competencies=[] entfernt auch die
    // "Schwerpunkte:"-Fallback-Zeile → validate-cv meldet erwartet "Competencies array is empty".
    competencies: [],
    projects: [],
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Reiseberatung &amp; Verkauf',
        bullets: ['Reiseberatung und Verkauf im direkten Kundenkontakt, dazu Social-Media-Content'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['Kundenanfragen per Telefon und Mail aufgenommen, priorisiert und gelöst'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung bei IT-Systemen und Netzwerken, Praxis im Umgang mit Software'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer',
        bullets: ['Eigenes Café und Catering geführt, volle Verantwortung für Kunden, Zahlen und Team'] },
      { company: 'Tourismusbranche — Türkei', period: '2009 – 2014', role: 'Reiseführer &amp; Tourenverkauf',
        bullets: ['Reiseführungen und Verkauf von Touren an Gäste, mehrsprachige Gästebetreuung'] },
    ],
    skills: [
      { category: 'Reisevertrieb & Beratung', items: 'Reiseberatung, Angebotserstellung, Verkaufsprozess von der Anfrage bis zum Abschluss, Vertriebsziele, Cross- und Upselling' },
      { category: 'Kundenkontakt & Organisation', items: 'Gästebetreuung, Destinationswissen, Beratung am Telefon und im Videocall, Reklamationsmanagement, Arbeiten im Homeoffice' },
      { category: 'Digitales & Sprachen', items: 'schnelle Einarbeitung in neue Software, Webentwicklung, Social-Media-Content, mehrsprachige Gästebetreuung' },
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
      `ich bewerbe mich auf Ihre Stelle als Vertriebsmitarbeiter Tourismus. Bei Reisegesucht.com in Köln arbeite ich in der Reiseberatung und im Verkauf. Davor war ich in der Türkei mehrere Jahre als Reiseführer tätig und habe Touren direkt an die Gäste verkauft. Nebenberuflich berate ich als freier Reiseberater über Amondo.`,

      `Sie stellen Reisen individuell zusammen und verkaufen sie persönlich über Telefon und Video. Den Verkaufsprozess kenne ich genau in dieser Form. Ich qualifiziere die Anfrage im Gespräch, baue daraus ein passendes Angebot und begleite den Gast bis zum Abschluss. Als Reiseführer habe ich Ausflüge direkt an Gäste verkauft und dabei je nach Gruppe Deutsch, Spanisch oder Türkisch gesprochen. Dadurch habe ich früh gelernt, ein Reiseangebot so zu erklären, dass der Gast sich sicher entscheiden kann.`,

      `Destinationswissen baue ich mir gern selbst auf. Die Türkei kenne ich aus jahrelanger Arbeit vor Ort, die aktuellen Reiseziele über den täglichen Vertrieb im Reisebüro. Dazu kommt die technische Seite: Ich entwickle selbst Webanwendungen und arbeite jeden Tag mit Software. In Ihre eigenen Tools zur Planung und Buchung finde ich mich deshalb schnell hinein.`,

      `Eigenverantwortlich zu arbeiten bin ich gewohnt. Drei Jahre lang habe ich in Bonn ein eigenes Café mit Catering geführt und dort Kunden, Zahlen und Termine allein verantwortet. Im Homeoffice teile ich mir den Tag entsprechend selbst ein und komme mit monatlichen Vertriebszielen gut zurecht. Sie bekommen jemanden, der am Telefon verkauft und sich in Ihre Technik ohne lange Einarbeitung einfindet.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
