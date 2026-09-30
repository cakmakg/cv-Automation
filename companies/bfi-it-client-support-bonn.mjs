// BFI Unternehmensgruppe — IT Client Support (m/w/d), Standort Bonn
// Referenznummer der Anzeige: 240826-1-BON
// Quelle: xing.com/jobs/bonn-it-client-support-referenznummer-240826-1-bon-157457275
// (in Kooperation mit der Bundesagentur für Arbeit ausgespielt)
//
// IMPRESSUM (bfi-unternehmensgruppe.de, geprüft 26.08.2026): Die "BFI Unternehmensgruppe"
// ist eine Dachmarke ohne eigene Rechtsform. Vier GmbHs unter derselben Adresse
// Ötterichweg 7, 90411 Nürnberg:
//   BFI Informationssysteme GmbH — HRB 15583, GF Helmut Hubrich & Daniel Maier,
//     Prokura Claudia Pickel, USt-ID DE197218566  → IT-PERSONALDIENSTLEISTUNG
//   BFI IT Service GmbH — HRB 27541, GF Helmut Hubrich
//   BFI Software GmbH — HRB 24248, GF Helmut Hubrich
//   BFI Innovation GmbH — HRB 33043, GF Helmut Hubrich & Christoph Hubrich
// Alle: Amtsgericht Nürnberg, Tel. 0911 94576-4.
// ADRESSAT = BFI Informationssysteme GmbH. Belegt über frühere Bonn-Ausschreibungen
// derselben Referenzsystematik auf LinkedIn ("1st Level Support 050124-3-BON",
// "IT-Techniker 120623-2-BON"), beide unter BFI Informationssysteme GmbH gepostet.
//
// KEIN NAMENTLICHER ANSPRECHPARTNER. Die Anzeige zeichnet "Ihr Recruiting-Team der BFI
// Unternehmensgruppe", das Karriereportal bfi-jobs.de nennt keine Person, das Impressum
// nur die Geschäftsführung. Deshalb "Sehr geehrte Damen und Herren" (Standardfall,
// 35 weitere Configs). Die Geschäftsführer NICHT anschreiben — sie sind nicht Recruiting.
//
// REFERENZSYSTEMATIK = DDMMYY-lfd.Nr-Ort. 240826-1-BON heißt: erstellt am 24.08.2026
// für Bonn. Die Anzeige ist damit zwei Tage alt, anders als bei Brock (#72) kein Recycling.
// Gegenprobe: dieselbe Systematik trägt Bonn-Stellen von 2023 und 2024 → BFI besetzt
// dort seit Jahren wiederkehrend IT-Support, spricht für einen laufenden Kundenvertrag
// in Bonn und nicht für ein Dauerinserat zum Kandidatenaufbau.
//
// ⚠️ PERSONALDIENSTLEISTER, KEIN DIREKTER ARBEITGEBER. "Einsatz in namhaften Unternehmen
// in ganz Deutschland" + "Möglichkeiten zur Übernahme beim Kunden" = Arbeitnehmerüberlassung.
// Der Endkunde wird nicht genannt. Anders als bei Brock ist der EINSATZORT aber eindeutig:
// Bonn steht im Titel, im Ortsfeld und in der Referenznummer.
//
// ⚠️ DIE ANZEIGE FORDERT AUSDRÜCKLICH: Verfügbarkeit, Gehaltswunsch, Telefonnummer und
// Stellenbezeichnung mit Arbeitsort. Nach der Regel vom 20.08.2026 bleiben Verfügbarkeits-
// und Gehaltssatz AUS DEM ANSCHREIBEN → sie stehen in der Begleitmail
// (output/mail-bfi-it-client-support-bonn-2026-08-26.txt). Stellenbezeichnung MIT ARBEITSORT
// und Referenznummer stehen im Betreff, damit auch das PDF allein zuordenbar bleibt.
// Ein Anschreiben verlangt die Anzeige nicht — es wird trotzdem geliefert
// ([[feedback-deliverable-immer-pdf]]).
//
// ANSCHREIBEN = VOLLTEXT DES USERS vom 26.08.2026, WOERTLICH UEBERNOMMEN.
// Keine Eingriffe am Text. Der User hat den generierten Bogen durch seine eigene
// 9-Absatz-Fassung ersetzt, inklusive Foerderzusage-Absatz.
//

export default {
  slug: 'bfi-it-client-support-bonn',
  date: '26.08.2026',
  language: 'de',

  // 9-Absatz-Brief des Users passt bis einschliesslich "Gökhan Cakmak" auf Seite 1,
  // nur die Unterschriftsgrafik rutschte auf Seite 2 (Seite 2 enthielt NULL Text).
  // Statt am Text des Users zu kuerzen: Grafik von 150px auf 110px verschmälert
  // (Hoehe 54,7px -> 40,1px). Kein Inhalt geht verloren.
  signatureWidth: '110px',

  recipient: [
    'BFI Informationssysteme GmbH',
    'Recruiting-Team',
    'Ötterichweg 7',
    '90411 Nürnberg',
  ],

  subject: 'Bewerbung als IT Client Support in Bonn, Referenznummer 240826-1-BON',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration und Anwendungsentwicklung mit Praxis im 1st Level Support, der Arbeitsplätze einrichtet, Störungen sauber analysiert und seine Dokumentation so schreibt, dass Kunde und Team direkt damit weiterarbeiten können.',
    passung: [
      'Anwender im Support betreut, Störungen analysiert und qualifiziert weitergegeben',
      'Clients installieren und betreuen, Geräte einrichten, zwei zertifizierte Module zu IT-Systemen und Netzwerken',
      'Dokumentiert Supportanfragen so, dass der nächste Bearbeiter ohne Rückfragen weiterarbeiten kann',
    ],
  },
  company: {
    mission: 'IT-Dienstleister aus Nürnberg, seit 1998 bundesweit tätig, der mit IT-Personaldienstleistung, Field Service, Rollouts und Service Desk den laufenden Betrieb seiner Kunden vor Ort absichert.',
    verbindung: 'Wer Support-Leute in namhafte Unternehmen schickt, braucht Leute, die sich in einer fremden Umgebung schnell zurechtfinden und ihre Arbeit so festhalten, dass der Kunde damit weiterarbeiten kann.',
  },
  jobKeywords: ['Client Support', 'Windows', 'Linux', 'Netzwerk', 'Ticketsystem', 'Fehleranalyse', 'Standardsoftware', 'Anwender'],

  cv: {
    tagline: 'IT-Support · Systemintegration',
    // Schwerpunkte-Zeile bleibt einzeilig (≤100 Zeichen inkl. Label).
    competencies: [
      'Client Support',
      'Systemintegration',
      'Kunden- & Serviceorientierung',
    ],
    // 1-Seiten-Regel: keine Projekte im Bereich-2-CV
    projects: [],
    // UNO-Flüchtlingshilfe bleibt drin, weil der Brief die Station namentlich nennt.
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
    // KEIN 2nd-Level-Anspruch, KEINE Netzwerk-Betriebsverantwortung — beides steht nur
    // im Brief als offener Punkt. Ticketsysteme über Jira belegt (cv.md, Methodology).
    skills: [
      { category: 'Clients & Betriebssysteme', items: 'Windows 11, Windows Server (FAW), Linux, Arbeitsplätze einrichten, Standardsoftware installieren' },
      { category: 'Netzwerk & Office', items: 'Netzwerke aufbauen & betreuen, TCP/IP, DNS, DHCP, Microsoft Office' },
      { category: 'Support & Prozesse', items: '1st Level Support, Anwenderbetreuung, Fehleranalyse & Störungsbehebung, Fernwartung, Ticketsysteme (Jira)' },
      { category: 'Web & Automatisierung', items: 'TypeScript, React, Node.js, Skript-Automatisierung, n8n Workflows' },
      { category: 'Mobilität', items: 'Führerschein Klasse B' },
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
      `ich bewerbe mich auf Ihre Stelle als IT Client Support in Bonn. Ich bin gelernte Fachinformatiker Anwendungsentwickler. Als Fachinformatiker mit Schwerpunkt Systemintegration bringe ich praktische Erfahrung im 1st Level Support, in der Einrichtung von Arbeitsplätzen und in der Betreuung von Anwendern mit.`,

      `Bei GIS in Bonn war ich im 1st Level Support tätig. Ich habe Anfragen telefonisch und per Fernwartung angenommen, die Probleme zunächst analysiert und sie entweder direkt selbst gelöst oder gezielt an die zuständige Stelle weitergegeben. Bei der UNO-Flüchtlingshilfe und bei der Emlak AG habe ich Arbeitsplätze eingerichtet, Software installiert und Anwender direkt vor Ort unterstützt. Dabei war mir immer wichtig, technische Zusammenhänge verständlich zu erklären und nicht einfach nur eine schnelle Lösung zu liefern.`,

      `Die Installation und Betreuung von Windows- und Linux-Clients gehörte ebenso zu meiner Umschulung wie der Umgang mit Standardsoftware und die Einrichtung von Netzwerken. Netzwerktechnik war dabei ein eigenes zertifiziertes Modul. Mit TCP/IP, DNS und DHCP bin ich daher vertraut.`,

      `Bei Supportanfragen achte ich auf eine nachvollziehbare Dokumentation, damit der nächste Bearbeiter ohne unnötige Rückfragen weiterarbeiten kann. Mit Jira habe ich bereits im Rahmen meiner Projektarbeit gearbeitet. Die alleinige Verantwortung für den 2nd Level Support habe ich bisher noch nicht übernommen. Die grundlegenden Abläufe und die Zusammenarbeit mit weiteren Support-Ebenen kenne ich jedoch und arbeite mich in neue Prozesse schnell ein.`,

      `Englische technische Dokumentationen kann ich sicher lesen und auch in der mündlichen Kommunikation kann ich mich gut verständigen.`,

      `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu sechs Monate eine Förderung von bis zu 50 % des Gehalts erhalten. Die entsprechenden Unterlagen reiche ich Ihnen gerne ein.`,

      `Meine Zeugnisse und Zertifikate finden Sie im Lebenslauf im Abschnitt „Zertifikate“. Über die dort hinterlegten Links können die Dokumente direkt als PDF geöffnet werden.`,

      `Vor meiner Tätigkeit im IT-Bereich war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Der tägliche Umgang mit Kunden hat mir dabei gezeigt, wie wichtig Zuverlässigkeit, Geduld und eine klare Kommunikation sind. Auch wenn es einmal hektisch wird, bleibe ich ruhig und versuche, eine praktische Lösung zu finden.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
