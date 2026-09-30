// WIRECLOUD (Betreiber: DALASON GmbH) — First Level IT-Support / Kundenberatung (m/w/d), Köln
// Lindenstraße 82, 50674 Köln (Neustadt-Süd, deckt sich mit der Standortangabe der Anzeige).
// HRB 60929 Amtsgericht Köln, USt-ID DE255749627, GF Andreas Damek und Chung-U Son.
// Tel. +49 221 999 999 36, beratung@wirecloud.de. Impressum wirecloud.de am 20.08.2026 geprüft.
// Anbieter von CLOUD-TELEFONANLAGEN (VoIP) für den Mittelstand, Rechenzentren in Köln und
// Düsseldorf. DIREKTER ARBEITGEBER, kein Vermittler.
// KEIN namentlicher Ansprechpartner; zwei Geschäftsführer, also keiner eindeutig zuständig
// -> "Sehr geehrte Damen und Herren,". Quelle: stepstone.de/…13803072 (vor 8 Stunden veröffentlicht).
//
// ECKDATEN: unbefristet, Vollzeit AB 30 STUNDEN. ÜBERWIEGEND REMOTE, wöchentlich ein Tag
// gemeinsam im Büro in Köln. Ausstattung wird gestellt (Laptop, Headset). Strukturiertes
// Onboarding mit schrittweise wachsender Verantwortung. Flache Hierarchien, familiäre Atmosphäre.
// KEIN GEHALT genannt.
//
// ⚠️ TONFALL: Die Anzeige sagt ausdrücklich, dass "steife Standard-Anschreiben" NICHT gewünscht
// sind und man wissen will, wer man als Mensch ist. Der User-Bogen bleibt als STRUKTUR erhalten,
// aber P2 und P5 sind bewusst persönlicher formuliert als in #60–#67 (Zuhören statt Fachbegriffe,
// Tresen-Satz). Kein JD-Echo, die Anzeige wird nicht zitiert.
//
// ⭐ USER-BOGEN, 6 ABSÄTZE (Volltext-Logik des Users vom 19.08.2026, gilt für ALLE Anschreiben).
// KEIN Standort-, Führerschein-, Verfügbarkeits- oder Gehaltssatz im Brief (User 20.08.2026).
//
// Score 4.0/5:
//   + Niedrigste Anforderungshürde neben navacom (#64): "technischer Hintergrund durch Ausbildung
//     oder Studium ODER ambitionierter Quereinsteiger mit IT-Affinität". Mit FiSi liegt er ÜBER
//     der Latte. KEIN Quereinsteiger-Label im Brief (feedback_anschreiben_no_quereinsteiger_label).
//   + "Technisches Interesse, IDEALERWEISE Berührung mit Netzwerkstrukturen oder VoIP/SIP"
//     -> Netzwerkstrukturen sind über das FAW-Modul IT-NETZWERKE zertifiziert belegt
//   + Aufgabe = erster Ansprechpartner für Bestandskunden per Telefon und Mail, KEIN Vertrieb
//     -> deckt sich 1:1 mit der GIS-Praxis
//   + "Zuhören, technische Anliegen analysieren, geduldig helfen" -> Café- und Tourismusprägung
//     ist hier keine Soft-Skill-Floskel, sondern genau die gesuchte Haltung
//   + ÜBERWIEGEND REMOTE bei nur einem Bürotag pro Woche, Köln ~30 km -> beste Standortsituation
//     zusammen mit navacom
//   + unbefristet, ab 30 Stunden (Flexibilität), Ausstattung gestellt, strukturiertes Onboarding
//   + Anzeige erst 8 Stunden alt -> früh im Bewerberfeld
//   - VoIP und SIP ohne Praxis. Steht nur unter "idealerweise" -> in P3 offen benannt,
//     NICHT im CV behauptet.
//   - Cloud-Telefonanlagen als Fachdomäne komplett neu.
//   - Rolle ist eng geschnitten: ein Produkt, First Level, kein 2nd Level und keine Projektarbeit.
//     Wenig Raum für die Entwicklungsseite. Gleicher Dämpfer wie navacom.
//   - KEIN Gehalt genannt, kleines Unternehmen.
// Run: node generate-bewerbung.mjs companies/wirecloud-first-level-support-koeln.mjs

export default {
  slug: 'wirecloud-first-level-support-koeln',
  date: '22.08.2026',
  language: 'de',

  recipient: [
    'DALASON GmbH',
    'WIRECLOUD',
    'Lindenstraße 82',
    '50674 Köln',
  ],

  subject: 'Bewerbung als First Level IT-Support',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration, der am Telefon zuhört, Störungen ruhig eingrenzt und so erklärt, dass der Anwender es versteht.',
    passung: [
      'erster Ansprechpartner für Anwender, Anfragen am Telefon und per Mail bearbeitet',
      'Störungen aufgenommen, eingegrenzt und gelöst oder verständlich weitergegeben',
      'Netzwerkstrukturen aus der Umschulung, mit eigenem Modul abgeschlossen',
    ],
  },
  company: {
    mission: 'Anbieter von Cloud Telefonanlagen aus Köln, der mittelständische Unternehmen mit Telefonie aus deutschen Rechenzentren versorgt.',
    verbindung: 'Wenn bei einem Kunden das Telefon nicht läuft, steht sein Geschäft still; dann zählt jemand, der ruhig zuhört und den Fehler eingrenzt, statt Fachbegriffe zu verteilen.',
  },
  jobKeywords: ['First Level', 'Support', 'Netzwerk', 'Telefon', 'Störungen', 'Anwender', 'Kunden', 'Systeme'],

  cv: {
    tagline: 'First Level Support · Systemintegration',
    // Einzeiligkeits-Regel: Schwerpunkte-Zeile ≤100 Zeichen -> max 3 kurze Tags.
    competencies: [
      'First Level Support',
      'Kundenberatung am Telefon',
      'Störungsanalyse',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // Wie #60–#62, #64–#67: UNO-Flüchtlingshilfe ergänzt, weil der Brief sie namentlich nennt
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
    // KEIN VoIP / SIP / Telefonanlagen — keine Praxis, steht nur im Brief als offener Punkt.
    skills: [
      { category: 'Support & Anwender', items: 'Telefon- & Remote-Support, Störungen eingrenzen & beheben, Ticket-Dokumentation, Anwenderbetreuung' },
      { category: 'Systeme & Netzwerk', items: 'Windows 11, IT-Systeme (FAW), Netzwerkstrukturen, TCP/IP, DNS, DHCP, Linux' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
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
      `ich bewerbe mich auf Ihre Stelle im First Level IT Support in Köln. Als Fachinformatiker für Systemintegration bringe ich praktische Erfahrung im Anwendersupport sowie ein gutes technisches Verständnis für Netzwerke und Systeme mit.`,

      `Bei GIS in Bonn, der UNO Flüchtlingshilfe und Emlak AG war ich erster Ansprechpartner für Anwender und habe Anfragen am Telefon und per Mail bearbeitet. Störungen habe ich aufgenommen und eingegrenzt und entweder direkt gelöst oder mit einer verständlichen Beschreibung weitergegeben. Dabei war mir wichtig, erst zuzuhören und dann zu erklären, ohne den Anwender mit Fachbegriffen zu überfahren.`,

      `Netzwerkstrukturen habe ich während meiner Umschulung gelernt und mit einem eigenen Modul abgeschlossen, ein zweites Modul zu IT Systemen kommt dazu. Mit VoIP und SIP habe ich bisher noch nicht gearbeitet. Ich weiß aber, wie ein Gespräch technisch durch ein Netz läuft. In neue Systeme arbeite ich mich schnell und strukturiert ein. Cloud Telefonanlagen sind für mich ein neues Feld. Dort treffen Netzwerk und Anwendung direkt aufeinander. Genau diese Schnittstelle liegt mir.`,

      `Zusätzlich entwickle ich eigene Webanwendungen mit React und Node.js und automatisiere wiederkehrende Abläufe. Dadurch verstehe ich, wie Anwendungen aufgebaut sind und an welchen Stellen Fehler entstehen. Wenn dieselbe Frage immer wieder kommt, sehe ich das Muster dahinter. Die Antwort schreibe ich so auf, dass Kolleginnen und Kollegen sie direkt verwenden können. Aus einer einmaligen Lösung wird dadurch ein wiederholbarer Ablauf.`,

      `Zurzeit arbeite ich im Frontend und Marketing eines Reisebüros. Zuvor war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Hinter dem Tresen merkt der Gast sofort, ob jemand wirklich zuhört. Im Support ist das nicht anders. Dadurch habe ich meine Kundenorientierung weiterentwickelt, dazu meine Kommunikationsfähigkeit und die Zusammenarbeit im Team. Auch in stressigen Situationen bleibe ich ruhig und lösungsorientiert.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
