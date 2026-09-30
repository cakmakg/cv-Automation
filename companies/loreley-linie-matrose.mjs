// Loreley-Linie / Lux-Werft und Schifffahrt GmbH — Matrose/Matrosin (m/w/d), Voll- oder Teilzeit
// PROFIL: TOURISMUS (bewerbung-tourismus.md). Tourismus fuehrt. Marketing spielt hier KEINE Rolle
//         (Anzeige verlangt Gaestekontakt, Ticketverkauf, Pflege/Instandhaltung, Materialverwaltung).
//         KEINE Social-Media-/Ads-Argumentation in den Brief pressen, das waere Profil-Autopilot.
//
// ADRESSEN (beide verifiziert):
//   - Impressum lux-werft.de: Lux-Werft und Schifffahrt GmbH, Moselstrasse 10, 53859 Niederkassel
//     (Werft-Sitz bei Bonn, Geschaeftsfuehrer Elmar Miebach-Oedekoven, Petra Lux, Dr. Rainer Miebach,
//      Dagmar Wilken).
//   - loreley-linie.de: Lux-Werft und Schifffahrt GmbH, Rheinuferstr. 55-56, 56341 Kamp-Bornhofen,
//     Tel. 06773 341. Das ist der SCHIFFFAHRTS-Betrieb und die Vorwahl der Ansprechpartnerin
//     (Ana Kustura, 06773 / 6989006). -> Bewerbung geht nach KAMP-BORNHOFEN, nicht Niederkassel.
// Ansprechpartnerin namentlich genannt -> "Sehr geehrte Frau Kustura,".
// Quelle: lux-werft.de/stellenangebote/
//
// FORMALPUNKT (im Report Abschnitt C ausfuehrlich): Die Anzeige verlangt "Eintrag als Matrose im
// Schifferdienstbuch". Recherche ELWIS/WSA: Das Schifferdienstbuch selbst ist als Einsteiger machbar
// (Mindestalter 16, grundlegende Sicherheitsausbildung, aerztliche Tauglichkeit, Antrag beim WSA)
// und wird dann mit der Qualifikation "Decksmann" eingetragen. Der Eintrag "MATROSE" verlangt
// zusaetzlich die IHK-Matrosenpruefung plus Fahrzeit. Das ist kurzfristig NICHT erreichbar.
// -> Im Brief wird NICHT behauptet, den Matrosen-Eintrag zu haben. P3 benennt konkret den Weg
//    (Sicherheitsausbildung, Tauglichkeit, Antrag beim Amt). Das ist ehrlich und zeigt zugleich,
//    dass er sich informiert hat. KEINE Gap-Negation ("habe ich nicht").
//
// STANDORT: Bonn -> Kamp-Bornhofen sind rund 100 km ueber die B9, etwa 1:15 h je Weg.
// Kein Standortsatz im Brief (User-Entscheidung 20.08.2026). Steht als Vorab-Klaerung im Report.
//
// Score 3.2/5. Gaesteseite stark belegt, Formalpunkt offen, Distanz erheblich.
//   + "Check-in und Ticketverkauf, erster Ansprechpartner fuer Gaeste" = exakt die Reisefuehrer-
//     und Reisebuero-Praxis (Touren direkt an Gaeste verkauft, abgerechnet).
//   + "Menschen aus aller Welt" -> DE C1, TR Muttersprache, ES gut, EN B1 verstaendigungssicher.
//   + "Verwaltung von Material und Geraeten" + "Pflege und Instandhaltung" -> drei Jahre mobile
//     Kaffeebar mit Catering: taeglicher Auf- und Abbau, Geraete, Bestaende. Direkter Beleg.
//   + "Flexible Arbeitszeiten", Wochenend- und Saisonbetrieb -> aus eigener Gastronomie vertraut.
//   + Fuehrerschein Klasse B vorhanden.
//   - Eintrag als Matrose im Schifferdienstbuch fehlt (siehe oben). Haerteste Huerde.
//   - Keine Praxis in der Personenschifffahrt. Anzeige sagt dazu selbst "kein Muss".
//   - Rund 100 km Anfahrt, taeglich nicht pendelbar.
// Run: node generate-bewerbung.mjs companies/loreley-linie-matrose.mjs

export default {
  slug: 'loreley-linie-matrose',
  date: '24.08.2026',
  language: 'de',

  recipient: [
    'Lux-Werft und Schifffahrt GmbH',
    'Frau Ana Kustura',
    'Rheinuferstraße 55–56',
    '56341 Kamp-Bornhofen',
  ],

  subject: 'Bewerbung als Matrose',

  narrative: {
    kern: 'Ich komme aus dem Tourismus und arbeite dort, wo Gäste ankommen: Empfang, Ticketverkauf und Betreuung, dazu die Erfahrung, einen eigenen Betrieb jeden Tag einsatzbereit zu halten.',
    passung: [
      'Gäste empfangen und Tickets verkaufen, aus Reiseführung und Reisebüro',
      'ein Jahr Bordbetrieb auf einer privaten Motoryacht als Schiffsmann',
      'Material und Geräte im eigenen mobilen Betrieb täglich verwaltet und instand gehalten',
    ],
  },
  company: {
    name: 'Loreley-Linie',
    mission: 'Familiengeführtes Unternehmen, das mit eigenen Fahrgastschiffen auf dem Rhein fährt und Gäste aus aller Welt an Bord nimmt.',
    verbindung: 'Ob eine Schifffahrt in Erinnerung bleibt, entscheidet sich an dem Menschen, der die Gäste am Anleger empfängt und an Bord ansprechbar bleibt.',
  },
  // "Personenschifffahrt" bewusst NICHT als Keyword: der Begriff liesse sich im CV nur durch
  // eine Dehnung unterbringen. "Fahrgastschiff" steht im Anschreiben, dort beschreibt es die Firma
  // und nicht seine Erfahrung.
  jobKeywords: ['Ticketverkauf', 'Gästebetreuung', 'Fahrgastschiff', 'Instandhaltung', 'Materialverwaltung', 'Tourismus', 'Kundenkontakt'],

  cv: {
    tagline: 'Gästebetreuung & Ticketverkauf · Tourismus',
    competencies: [
      'Direkter Gästekontakt',
      'Bordpraxis & Tourismus',
      'Eigener Betrieb geführt',
    ],
    projects: [],
    // Tourismus-Override: Vidinli und UNO raus, sie tragen für eine Rolle an Bord nichts bei.
    // GIS und EMLAK bleiben — EMLAK ist Pflichtstation (User-Regel 2026-07-08), GIS belegt den
    // aktuellen Abschnitt vor dem Reisebüro.
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Reiseberatung &amp; Marketing',
        bullets: ['Reiseberatung im direkten Kundenkontakt und Social-Media-Content für ein Reisebüro'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['Anfragen per Telefon und E-Mail aufgenommen und gelöst, Personalplanung und Zeiterfassung'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung in IT-Systemen und Netzwerken im laufenden Betrieb'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer',
        bullets: ['Mobiler Betrieb: täglicher Auf- und Abbau, Geräte und Material, Kunden, Team, Abrechnung'] },
      { company: 'Tourismusbranche — Türkei', period: '2009 – 2014', role: 'Reiseführer &amp; Tourenverkauf',
        bullets: ['Reiseführungen, Verkauf und Abrechnung von Touren, mehrsprachige Gästebetreuung'] },
      { company: 'Private Motoryacht — Türkei', period: '2009', role: 'Schiffsmann',
        bullets: ['Ein Jahr Bordbetrieb: Bordroutine, einfache Instandhaltung, Pflege von Schiff und Gerät'] },
    ],
    skills: [
      { category: 'Gäste & Verkauf', items: 'Gästeempfang, Ticketverkauf und Tourenverkauf, Kassenabrechnung, Reiseberatung, Reklamationen, Upselling' },
      { category: 'Betrieb & Instandhaltung', items: 'Bordroutine, Pflege und Instandhaltung, Materialverwaltung, Geräte und Bestände, Arbeit im Freien' },
      { category: 'Service & Organisation', items: 'mehrsprachige Gästebetreuung, Teamarbeit im Schicht- und Wochenendbetrieb, Eigenverantwortung aus eigener Selbstständigkeit' },
      { category: 'Mobilität & Verfügbarkeit', items: 'Führerschein Klasse B, flexible Arbeitszeiten, Wochenend- und Saisonbetrieb aus der Gastronomie vertraut' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
  },

  anschreiben: {
    anrede: 'Sehr geehrte Frau Kustura,',
    // Text vom User (24.08.2026). Uebernommen bis auf vier Eingriffe, alle wegen bestehender Regeln:
    //  1. P1-Motivationssatz ("Die Kombination ... spricht mich sehr an") gestrichen — P1 rein
    //     faktisch (Regel 23.07.2026). Der Gedanke steht ohnehin im vorletzten Absatz.
    //     Dadurch P1+P2 des Users zu einem Absatz verschmolzen -> 6 Absaetze, User-Bogen.
    //  2. "Ich bin zudem kein kompletter Quereinsteiger an Bord" -> "An Bord bin ich nicht zum
    //     ersten Mal." Kein Quereinsteiger-Label, auch nicht verneint (Regel).
    //  3. Gedankenstrich in "dass alles seinen Platz hat – am naechsten Morgen" aufgeloest
    //     (Regel: kein "-"/"—" im Fliesstext) + "Dadurch" als Ergebnis-Signal gesetzt.
    //  4. Tricolon "Heute arbeite ich ..., berate ..., verkaufe ... und betreue ..." in zwei
    //     Saetze geteilt und "Gaeste aus aller Welt, Arbeit ... und ein starkes Team" entzerrt.
    //     Beides waren Dreier-Aufzaehlungen (harter Blocker).
    // Reihenfolge geaendert: Motoryacht-Absatz VOR den Schifferdienstbuch-Absatz. Der Bordbezug
    // ist das staerkste neue Argument; danach liest sich das Schifferdienstbuch als Formalie
    // statt als Mangel.
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als Matrose an Bord der Fahrgastschiffe der Loreley-Linie. Ich komme aus dem Tourismus. In der Türkei habe ich mehrere Jahre als Reiseführer gearbeitet und Touren direkt an Gäste verkauft. Heute arbeite ich in einem Reisebüro in Köln. Ich berate Reisende, verkaufe Tickets und betreue Gäste vor und nach der Reise. Gästebetreuung, Check-in und Ticketverkauf sind für mich vertraute Aufgaben.`,

      `An Bord bin ich nicht zum ersten Mal. 2009 habe ich ein Jahr auf einer privaten Motoryacht als Schiffsmann gearbeitet und besitze einen entsprechenden Schein. Aus dieser Zeit kenne ich die Bordroutine, einfache Instandhaltungsarbeiten und den respektvollen Umgang mit Schiff und Ausrüstung.`,

      `Zum Schifferdienstbuch habe ich mich bereits informiert. Die notwendige Sicherheitsausbildung und die ärztliche Tauglichkeitsuntersuchung gehe ich sofort an, den Antrag beim zuständigen Amt reiche ich unmittelbar ein. Körperliche Arbeit im Freien bin ich gewohnt. In meinem eigenen Betrieb war das täglicher Alltag.`,

      `Drei Jahre lang habe ich in Bonn eine mobile Kaffeebar mit Catering geführt. Auf- und Abbau gehörten jeden Tag dazu, ebenso die Wartung der Geräte und die Kontrolle der Bestände. Ich habe mir feste Abläufe geschaffen und dafür gesorgt, dass alles seinen Platz hat. Dadurch war am nächsten Morgen das Material vollständig und einsatzbereit. Diese Erfahrung passt gut zu Ihren Aufgaben in Pflege, Instandhaltung und Materialverwaltung an Bord.`,

      `Unregelmäßige Arbeitszeiten, Wochenenden und Tage, an denen nichts nach Plan läuft, kenne ich aus Gastronomie und Tourismus. Ich arbeite gerne im Team und packe an, ohne auf eine genaue Einteilung zu warten. An Bord kommt für mich zusammen, was ich suche: Gäste aus aller Welt und die Arbeit draußen auf dem Rhein, dazu ein Team, das zusammenhält.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
