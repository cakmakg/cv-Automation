// Gastro-MIS GmbH — Technischer Support Innendienst für Kassensysteme (m/w/d)
// Lohenstr. 8, 82166 Gräfelfing bei München. HRB 123712 Amtsgericht München.
// Geschäftsführer Dr. Mirco Till und Carsten Ripkens. Tel. +49 89 8987869-200.
// Gegründet 1998 als Abrechnungsdienst für die Gastronomie. Produkt: LINA TeamCloud
// (früher Amadeus360) inklusive Kassensystem LINA POS. DIREKTER ARBEITGEBER.
// KEIN namentlicher Ansprechpartner -> "Sehr geehrte Damen und Herren,".
// Quelle: stepstone.de/…14373586
//
// ⚠️ FALLE: Das frühere Produkt heißt "Amadeus360". Das hat NICHTS mit dem Amadeus GDS zu tun,
// das unter API Integrations in cv.md steht (Reise-Vertriebssystem, anderes Unternehmen).
// KEINE Verbindung zwischen beiden herstellen, das wäre eine erfundene Passung.
//
// ECKDATEN: unbefristet, Vollzeit, **100 % HOMEOFFICE / REMOTE** (steht so in der Anzeige und
// in den Benefits). Gräfelfing ist damit KEINE Standortfrage. 30 Urlaubstage, flexible
// Arbeitszeiten, moderne technische Ausstattung, Weiterbildung.
// GEHALT: "Das monatliche Bruttogehalt liegt bei rund 4.000 €, abhängig von Erfahrung und
// Qualifikation" -> rund 48.000 € im Jahr, der höchste konkrete Wert aller Bereich-2-Stellen.
//
// ⭐ USER-BOGEN, 6 ABSÄTZE (Volltext-Logik des Users vom 19.08.2026, gilt für ALLE Anschreiben).
// KEIN Standort-, Führerschein-, Verfügbarkeits- oder Gehaltssatz im Brief (User 20.08.2026).
// Bei 100 % Remote wäre ein Standortsatz ohnehin überflüssig.
//
// Score 4.6/5 — BESTER TREFFER IM GESAMTEN TRACKER. Vier seltene Volltreffer gleichzeitig:
//   1. "Praxiswissen aus GASTRONOMIE oder Hotellerie" steht unter "von Vorteil"
//      -> drei Jahre eigenes Café mit Cateringservice plus Tourismusjahre. Diese Anforderung
//      taucht in IT-Anzeigen praktisch nie auf und er erfüllt sie ohne jede Dehnung.
//   2. "Erfahrung mit KASSENSYSTEMEN, POS-Software" ebenfalls "von Vorteil"
//      -> als Betriebsinhaber täglich bedient, von Bonierung bis Tagesabschluss (Anwenderseite,
//      NICHT Administratorseite - genau so formuliert, kein Overclaim).
//   3. "Freude am Arbeiten mit LOGFILES und komplexen Fehlerbildern" ist Anforderung
//      -> er baut ein KI-System, das Sicherheits-Logs auswertet (SecOps-Agent, belegt in cv.md).
//   4. "Abgeschlossene technische Ausbildung, IDEALERWEISE als Fachinformatiker" -> exakt.
//   + Aufgaben = Telefon, Mail und Ticketsystem, Fehlerbilder nachstellen, Doku und
//     Wissensdatenbank pflegen -> deckt sich mit GIS-Praxis und seiner Dokumentationsstärke
//   + Zusammenarbeit mit Produktmanagement und ENTWICKLUNG -> seine Entwicklungsseite ist Brücke
//   + Sehr gute Deutschkenntnisse = C1; unbefristet; 30 Tage; ~48k
//   + 100 % Remote loest die Standortfrage vollstaendig auf
//   - LINA POS als konkretes Produkt unbekannt -> in P3 offen benannt.
//   - Kassensystem-Erfahrung ist ANWENDER-, keine Support- oder Administrationserfahrung.
//     Im Brief exakt so formuliert, nicht aufgeblasen.
//   - ERP- und Warenwirtschaftskenntnisse nur "von Vorteil", nicht belegt, nicht behauptet.
// Run: node generate-bewerbung.mjs companies/gastro-mis-technischer-support-kassensysteme.mjs

export default {
  slug: 'gastro-mis-technischer-support-kassensysteme',
  date: '22.08.2026',
  language: 'de',

  recipient: [
    'Gastro-MIS GmbH',
    'Lohenstraße 8',
    '82166 Gräfelfing',
  ],

  subject: 'Bewerbung als Technischer Support für Kassensysteme',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration mit Support-Praxis, der Fehlerbilder nachstellt, Logdaten auswertet und aus der Gastronomie weiß, wie ein Kassensystem im Betrieb genutzt wird.',
    passung: [
      'technische Supportanfragen am Telefon, per Mail und im Ticketsystem bearbeitet',
      'Fehlerbild nachstellen, Ursache eingrenzen und die Lösung dokumentieren',
      'Kassensystem als Betriebsinhaber täglich bedient, Gastronomie aus eigener Erfahrung',
    ],
  },
  company: {
    mission: 'Softwarehaus aus Gräfelfing, das seit 1998 Kassensysteme und digitale Komplettlösungen für Gastronomie und Hotellerie entwickelt.',
    verbindung: 'Wenn im Restaurant die Kasse klemmt, stehen Gäste an der Theke; dann zählt ein Support, der die Ursache findet und den Wirt nicht mit Fachbegriffen alleine lässt.',
  },
  jobKeywords: ['Support', 'Kassensysteme', 'Ticket', 'Logfile', 'Störungen', 'Dokumentation', 'Netzwerk', 'Hardware'],

  cv: {
    tagline: 'Technischer Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    // "Gastronomie-Praxis" steht bewusst als Schwerpunkt: die Anzeige führt es unter
    // "von Vorteil" und es ist über den eigenen Betrieb belegt.
    competencies: [
      'Technischer Support & Helpdesk',
      'Fehleranalyse & Logfiles',
      'Gastronomie-Praxis',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // Wie #60–#62, #64–#69: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie namentlich nennt
    // (belegt in cv.md, 05/2023 – 06/2023).
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Frontend &amp; Marketing',
        bullets: ['Frontend-Design und Marketing für ein Reisebüro: Webseiten, Content, Kampagnen'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['1st Level IT Support, Personalplanung und Zeiterfassung im Enterprise-Umfeld'] },
      { company: 'Vidinli Software — Bonn', period: '09/2025 – 10/2025', role: 'Frontend Developer (Praktikum)',
        bullets: ['Entwicklung des Frontends einer Shopping-Plattform mit <strong>React.js</strong> und <strong>TypeScript</strong>'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung in IT-Systemen und Netzwerken — erste Praxis in IT-Infrastruktur'] },
      { company: 'UNO-Flüchtlingshilfe — Bonn', period: '05/2023 – 06/2023', role: 'IT-Support (Praktikum im Rahmen der Umschulung)',
        bullets: ['Unterstützung IT-gestützter Abläufe und Datenpflege, Mitarbeit an digitalen Workflows'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer (Selbstständiger Unternehmer)',
        bullets: ['Gründung und Leitung eines Catering-Unternehmens: Kunden, Finanzen, Logistik, Team'] },
    ],
    // KEIN LINA POS, KEIN Amadeus360, KEINE ERP-/Warenwirtschaftskenntnisse behauptet.
    // Kassensysteme stehen als "(Anwender)" — Bedienerseite, nicht Administration.
    skills: [
      { category: 'Support & Prozesse', items: 'Telefon-, Mail- & Ticketsupport, Störungen eingrenzen, Wissensdatenbank, IT-Dokumentation' },
      { category: 'Systeme & Netzwerk', items: 'Windows 11, Hardware & Peripherie, TCP/IP, DNS, DHCP, Netzwerkgrundlagen (FAW), Linux' },
      { category: 'Analyse & Entwicklung', items: 'Logfile-Auswertung, TypeScript, React, Node.js, PostgreSQL & SQL, n8n Workflows' },
      { category: 'Branchenkenntnis', items: 'Kassensysteme (Anwender), Gastronomie & Catering (eigener Betrieb), Tourismus' },
    ],
    education: [
      { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
      { school: 'FAW', program: 'Fachinformatiker Systemintegration / Anwendungsentwicklung (Umschulung)', date: '02/2023 – 01/2024' },
      { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
    ],
    languages: 'Deutsch (fließend, C1) · Englisch (technisches Lesen sicher, Verständigung gut) · Spanisch (gut) · Türkisch (Muttersprache)',
  },

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle im technischen Support für Kassensysteme. Als Fachinformatiker für Systemintegration bringe ich praktische Erfahrung im technischen Support sowie ein gutes technisches Verständnis für Software, Hardware und Netzwerke mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG habe ich Anwender im technischen Support betreut. Anfragen kamen am Telefon, per Mail und über das Ticketsystem. Störungen habe ich aufgenommen, das Fehlerbild nachgestellt und entweder direkt gelöst oder mit einer verständlichen Beschreibung weitergegeben. Dabei war mir wichtig, den Anwender klar zu informieren und jeden Vorgang nachvollziehbar festzuhalten.`,

      `Software, Hardware und grundlegende Netzwerkthemen habe ich während meiner Umschulung gelernt und mit zwei zertifizierten Modulen abgeschlossen. Mit LINA POS habe ich bisher noch nicht gearbeitet. Schnittstellen, Konfiguration und Updates sind mir aus der Ausbildung und aus eigenen Projekten vertraut. In neue Systeme arbeite ich mich schnell und strukturiert ein.`,

      `Zusätzlich entwickle ich eigene Anwendungen mit React und Node.js und baue Systeme, die Logdaten automatisiert auswerten. Mit Logfiles und Systemmeldungen zu arbeiten ist für mich deshalb nicht der lästige Teil, sondern der interessante. Ich stelle ein Fehlerbild nach, bis ich den Auslöser habe. Die Lösung schreibe ich so auf, dass Kolleginnen und Kollegen sie direkt anwenden können. Diese Dokumentation ist für mich Teil der Lösung und keine Nacharbeit. Dadurch muss dasselbe Fehlerbild nicht zweimal von vorn analysiert werden.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Ein Kassensystem war dort mein tägliches Werkzeug, von der Bonierung über den Tagesabschluss bis zu der Frage, warum der Drucker in der Küche nichts ausgibt. Ich kenne also beide Seiten Ihrer Kunden, die technische und die des Gastgebers, der gerade Gäste im Laden hat. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
