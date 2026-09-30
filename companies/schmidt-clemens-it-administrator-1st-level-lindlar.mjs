// Schmidt + Clemens GmbH + Co. KG — IT Administrator* 1st Level Support, Standort Kaiserau/Lindlar
// Quelle: xing.com/jobs/lindlar-it-administrator-1st-level-support-157143911
// (XING blockt WebFetch — JD vom User im Volltext eingefügt, 26.08.2026)
//
// IMPRESSUM (schmidt-clemens.com/imprint, geprüft 26.08.2026):
//   Schmidt + Clemens GmbH + Co. KG, Kaiserau 2, 51789 Lindlar
//   Amtsgericht Köln HRA 16421, USt-ID DE123243075, Tel. +49 2266 92-0
//   Persönlich haftende Gesellschafterin: Schmidt + Clemens Verwaltungs-GmbH, Lindlar (HRB 38191)
//   Geschäftsführung: Jan Schmidt-Krayer
// DIREKTER ARBEITGEBER, keine Arbeitnehmerüberlassung. Familienunternehmen, Edelstahlwerk
// (Schleuderguss, Hochleistungslegierungen), Tarifvertrag Metall- und Elektroindustrie.
//
// ANSPRECHPARTNERIN steht namentlich in der Anzeige: Betül Ankara, +49 2266 92-450.
// Deshalb "Sehr geehrte Frau Ankara". Bewerbungsmail der Personalabteilung:
// personal@schmidt-clemens.com (HR: Caroline Wirth -570, Frank Beckhäuser -250).
// Die Anzeige sagt "online oder per E-Mail" und nennt KEINE Mailadresse, nur die Rufnummer
// von Frau Ankara -> Begleitmail an personal@schmidt-clemens.com, Frau Ankara im Betreff
// genannt, damit die Bewerbung im Haus richtig landet.
//
// ANSCHREIBEN = STRUKTUR DES USER-BRIEFS vom 26.08.2026 (BFI, #78), 9 Absätze,
// auf Wunsch des Users 1:1 übernommen. UNVERÄNDERT aus dem User-Brief:
//   P1 Opener + Berufsbezeichnung, P2 GIS/UNO/Emlak, P5 Englisch, P6 Förderzusage,
//   P7 Zertifikate, P8 Tourismus und Café, P9 Abschluss.
// Nur zwei Absätze mussten auf DIESE Stelle umgeschrieben werden:
//   P3 — zusätzlich Windows Server und Active Directory mit Benutzern, Gruppen und Rechten.
//        Das verlangt die Anzeige wörtlich ("File Services, Active Directory,
//        Gruppenrichtlinien, DNS und DHCP").
//   P4 — der offene Punkt ist hier NICHT der 2nd Level (wie bei BFI), sondern der
//        TOOL-STACK: Intune, Empirum, Microsoft 365, Softwarepaketierung, PowerShell.
//        Nach [[feedback-anschreiben-keine-gap-negation]] sind Tool-Lücken als
//        Einarbeitung weiterhin erlaubt, formale Lücken nicht.
// Die Bindestrich-Komposita des Users ("Windows- und Linux-Clients", "UNO-Flüchtlingshilfe",
// "IT-Bereich") bleiben stehen, weil er sie so geschrieben hat. Validator meldet sie.
// Ebenso bleiben stehen: Dreier-Aufzählung in P8, fehlendes Ergebnis-Signal, 9 Absätze,
// "gelernte Fachinformatiker" in P1 (Grammatik, beim User angefragt, keine Antwort).
//
// ⚠️ FÖRDERZUSAGE P6 unverändert mit "bis zu sechs Monate". Die Notiz vom 25.08.2026 sagt
// "bis zu 50 % für bis zu 2 Jahre". Weiterhin offen, weiterhin vor dem Absenden abzugleichen.
//
// STANDORT: Kaiserau 2, 51789 Lindlar — rund 55 km von Bonn, gut eine Stunde mit dem Auto.
// Unter der 100-km-Schwelle aus [[feedback-standort-weite-distanz]], deshalb KEINE Rückfrage
// und KEIN Umzugsthema. Führerschein Klasse B steht im CV unter Mobilität; der ÖPNV nach
// Kaiserau ist dünn, die Stelle setzt faktisch ein Auto voraus -> im Erstgespräch klären.
// Standort-, Verfügbarkeits- und Gehaltssatz bleiben wie seit 20.08.2026 AUS DEM ANSCHREIBEN.
//
// Score 3.5/5:
//   + EINGANGSQUALIFIKATION WÖRTLICH GETROFFEN: "Abgeschlossene IT-Berufsausbildung, zum
//     Fachinformatiker für Systemintegration". Genau das ist die FAW-Umschulung.
//   + Aufgabenblock 1 und 2 sitzen: "Annahme und Bearbeitung von Supportanfragen sowie
//     Analyse und Behebung von Störungen" plus "Dokumentation ... im Ticketsystem" ist
//     wörtlich die GIS-Praxis und die dokumentierte eigene Stärke.
//   + Windows Server (File Services, Active Directory, Gruppenrichtlinien, DNS, DHCP)
//     ist aus der Umschulung belegt, DNS und DHCP stehen im CV.
//   + "Grundlegende Englischkenntnisse" — hier reicht B1 locker, anders als bei BFI (#78),
//     wo "gute Kenntnisse in Wort und Schrift" verlangt waren.
//   + DIREKTER ARBEITGEBER mit Tarifvertrag M+E, Urlaubs- und Weihnachtsgeld, 6 Wochen
//     Urlaub, 1.500 EUR Antrittsprämie. Deutlich belastbarer als Arbeitnehmerüberlassung.
//   - TOOL-STACK IST DIE HAUPTLUECKE. Vier der fünf Profil-Punkte sind werkzeugspezifisch:
//     Softwarepaketierung, Client-Management, Microsoft Intune / Configuration Manager,
//     PowerShell. Dazu Empirum (Matrix42) in den Aufgaben. Nichts davon ist belegt.
//   - MICROSOFT 365 (Exchange, SharePoint) steht im Profil UND in den Aufgaben.
//     Nach [[feedback-cv-no-overclaim]] ist M365/SharePoint/Azure ausdrücklich NICHT im
//     Profil -> wird im CV NICHT behauptet und in P4 offen als Lücke benannt.
//   - PowerShell: nicht belegt. Im CV steht "Skript-Automatisierung", in P4 ehrlich als
//     Einarbeitung formuliert. NICHT als Kenntnis behauptet.
//   - Anfahrt 55 km ohne belastbaren ÖPNV.
//   Fazit: die formale Eingangstür passt exakt, der Werkzeugkasten dahinter noch nicht.
// Run: node generate-bewerbung.mjs companies/schmidt-clemens-it-administrator-1st-level-lindlar.mjs

export default {
  slug: 'schmidt-clemens-it-administrator-1st-level-lindlar',
  date: '26.08.2026',
  language: 'de',

  // Wie bei #78: 9-Absatz-Brief des Users, schmalere Unterschriftsgrafik hält ihn auf 1 Seite.
  signatureWidth: '100px',

  recipient: [
    'Schmidt + Clemens GmbH + Co. KG',
    'Frau Betül Ankara',
    'Kaiserau 2',
    '51789 Lindlar',
  ],

  subject: 'Bewerbung als IT Administrator im 1st Level Support',

  narrative: {
    kern: 'Fachinformatiker für Systemintegration mit Praxis im 1st Level Support, der Störungen aufnimmt und analysiert, Arbeitsplätze einrichtet und seine Dokumentation so schreibt, dass der nächste Bearbeiter ohne Rückfragen weiterarbeiten kann.',
    passung: [
      'Supportanfragen angenommen, Störungen analysiert und gelöst oder gezielt weitergegeben',
      'Windows Clients und Windows Server aus der Umschulung, Benutzer und Gruppen, DNS und DHCP',
      'Dokumentiert Supportfälle so, dass der nächste Bearbeiter ohne Rückfragen weiterarbeiten kann',
    ],
  },
  company: {
    mission: 'Familiengeführtes Edelstahlwerk in Lindlar, seit 1879, das Schleuderguss und Hochleistungslegierungen für Kunden weltweit fertigt und dafür eine gruppenweit einheitliche IT betreibt.',
    verbindung: 'Eine gruppenweit standardisierte Client- und Serverlandschaft lebt davon, dass Supportfälle und Softwarestände sauber dokumentiert sind, sonst trägt die Standardisierung nicht.',
  },
  jobKeywords: ['Systemintegration', '1st Level Support', 'Windows Server', 'Active Directory', 'Netzwerk', 'Standardsoftware', 'Dokumentation', 'Client'],

  cv: {
    tagline: 'Systemintegration · IT-Support',
    // Schwerpunkte-Zeile bleibt einzeilig (≤100 Zeichen inkl. Label).
    competencies: [
      'Systemintegration',
      'Client- & Serverbetreuung',
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
    // BEWUSST NICHT IM CV: Microsoft 365, Exchange, SharePoint, Intune, Configuration Manager,
    // Empirum, Softwarepaketierung, PowerShell. Alles nicht belegt — steht nur in P4 als
    // offene Lücke. "Active Directory" ist on-prem aus der FAW-Umschulung (Benutzer, Gruppen,
    // Rechte) und damit gedeckt, "Azure AD" wäre es NICHT.
    skills: [
      { category: 'Clients & Server', items: 'Windows 11, Windows Server, Active Directory, Benutzer &amp; Gruppen, Linux, Arbeitsplätze einrichten' },
      { category: 'Netzwerk & Office', items: 'Netzwerke aufbauen &amp; betreuen, TCP/IP, DNS, DHCP, Microsoft Office, Standardsoftware installieren' },
      { category: 'Support & Prozesse', items: '1st Level Support, Anwenderbetreuung, Störungsanalyse, Fernwartung, Ticketsysteme (Jira), IT-Dokumentation' },
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
    anrede: 'Sehr geehrte Frau Ankara,',
    paragraphs: [
      `ich bewerbe mich auf Ihre Stelle als IT Administrator im 1st Level Support. Ich bin gelernte Fachinformatiker Anwendungsentwickler. Als Fachinformatiker mit Schwerpunkt Systemintegration bringe ich praktische Erfahrung im 1st Level Support, in der Einrichtung von Arbeitsplätzen und in der Betreuung von Anwendern mit.`,

      `Bei GIS in Bonn war ich im 1st Level Support tätig. Ich habe Anfragen telefonisch und per Fernwartung angenommen, die Probleme zunächst analysiert und sie entweder direkt selbst gelöst oder gezielt an die zuständige Stelle weitergegeben. Bei der UNO-Flüchtlingshilfe und bei der Emlak AG habe ich Arbeitsplätze eingerichtet, Software installiert und Anwender direkt vor Ort unterstützt. Dabei war mir immer wichtig, technische Zusammenhänge verständlich zu erklären und nicht einfach nur eine schnelle Lösung zu liefern.`,

      `Die Installation und Betreuung von Windows- und Linux-Clients gehörte ebenso zu meiner Umschulung wie der Umgang mit Standardsoftware und die Einrichtung von Netzwerken. Netzwerktechnik war dabei ein eigenes zertifiziertes Modul. Mit TCP/IP, DNS und DHCP bin ich daher vertraut. Windows Server und Active Directory gehörten ebenfalls dazu.`,

      `Bei Supportanfragen achte ich auf eine nachvollziehbare Dokumentation, damit der nächste Bearbeiter ohne unnötige Rückfragen weiterarbeiten kann. Mit Jira habe ich bereits im Rahmen meiner Projektarbeit gearbeitet. Mit Intune, Empirum und Microsoft 365 habe ich bisher nicht gearbeitet, ebenso wenig mit der Softwarepaketierung. PowerShell und die Werkzeuge eigne ich mir zügig an, die Abläufe dahinter kenne ich.`,

      `Englische technische Dokumentationen kann ich sicher lesen und auch in der mündlichen Kommunikation kann ich mich gut verständigen.`,

      `Für meine berufliche Neuorientierung liegt mir außerdem eine Förderzusage der Agentur für Arbeit vor. Bei einer Einstellung kann der Arbeitgeber für bis zu sechs Monate eine Förderung von bis zu 50 % des Gehalts erhalten. Die entsprechenden Unterlagen reiche ich Ihnen gerne ein.`,

      `Meine Zeugnisse und Zertifikate finden Sie im Lebenslauf im Abschnitt „Zertifikate“. Über die dort hinterlegten Links können die Dokumente direkt als PDF geöffnet werden.`,

      `Vor meiner Tätigkeit im IT-Bereich war ich mehrere Jahre in der Tourismusbranche tätig und habe in Bonn ein eigenes Café mit Cateringservice geführt. Der tägliche Umgang mit Kunden hat mir dabei gezeigt, wie wichtig Zuverlässigkeit, Geduld und eine klare Kommunikation sind. Auch wenn es einmal hektisch wird, bleibe ich ruhig und versuche, eine praktische Lösung zu finden.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.`,
    ],
  },
};
