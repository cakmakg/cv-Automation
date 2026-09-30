// newsoul (New Soul Studio) — Rezeption im Massagestudio (m/w/d), Köln-Lindenthal, Vollzeit, Einstieg
// Rolle: Empfang/Hospitality/Service (Gäste empfangen & beraten, Terminbuchungen, Studio-Abläufe,
//   Öffnen/Schließen, Support für Therapeuten). Anforderung: Erfahrung an Rezeption in Spa/Wellness ODER
//   Hospitality → über eigenes Café/Catering + Tourismus ehrlich erfüllbar (Hospitality-Setting).
// PROFIL: TOURISMUS/HOSPITALITY, EMPFANG-fokussiert. Gastgeber-Story (Café), Gästebetreuung, mehrsprachig.
//   Kein Reisebüro-/Buchungssystem-Overclaim; Terminsystem "arbeite ich mich schnell ein".
// Adresse (newsoul.de, Studio Köln-Lindenthal): Classen-Kappelmann-Straße 32, 50931 Köln. Kein Ansprechpartner.
// Quelle: linkedin.com/jobs/view/4444141027 (tourismus-Suche). Run:
//   node generate-bewerbung.mjs companies/newsoul-rezeption-massagestudio.mjs

export default {
  slug: 'newsoul-rezeption-massagestudio',
  date: '30.07.2026',
  language: 'de',

  recipient: [
    'New Soul Studio',
    'Classen-Kappelmann-Straße 32',
    '50931 Köln',
  ],

  subject: 'Bewerbung für die Rezeption im Massagestudio',

  jobKeywords: ['Rezeption', 'Empfang', 'Gäste', 'Buchungen', 'mehrsprachig'],

  narrative: {
    kern: 'Ich komme aus Gastronomie und Tourismus und bin ein aufmerksamer Gastgeber am Empfang.',
    passung: [
      'Empfang und Gästebetreuung aus eigenem Café und aus dem Tourismus',
      'Laden geführt: geöffnet und geschlossen, Bestände und Abläufe organisiert',
      'Termine und Buchungen verwaltet, mehrsprachig betreut',
    ],
  },

  company: {
    name: 'newsoul',
    mission: 'newsoul ist ein Massagestudio in Köln, in dem Gäste in ruhiger und angenehmer Atmosphäre entspannen.',
    verbindung: 'Ich komme aus Gastronomie und Tourismus, wo Empfang und Gästewohl an erster Stelle stehen, und genau das bringe ich an die Rezeption mit.',
  },

  cv: {
    tagline: 'Empfang & Rezeption · Gastgeber aus Gastronomie & Tourismus',
    competencies: [],
    projects: [],
    experience: [
      { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Kundenkontakt &amp; Marketing',
        bullets: ['Kundenkontakt, Beratung und Social-Media-Content für ein Reisebüro'] },
      { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
        bullets: ['Anfragen von Nutzern aufgenommen und bearbeitet, Support per Telefon und E-Mail'] },
      { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
        bullets: ['Unterstützung bei IT-Systemen und Netzwerken'] },
      { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer',
        bullets: ['Eigenes Café und Catering geführt: Empfang, Beratung, Kasse und Organisation'] },
      { company: 'Tourismusbranche — Türkei', period: '2009 – 2014', role: 'Reiseführer &amp; Tourenverkauf',
        bullets: ['Gäste betreut und Programme koordiniert, mehrsprachige Gästebetreuung'] },
    ],
    skills: [
      { category: 'Empfang & Service', items: 'Empfang und Gästebetreuung, Kundenberatung, Terminbuchungen, Kassenführung, freundlicher und ruhiger Umgang mit Gästen' },
      { category: 'Organisation & Abläufe', items: 'Öffnen und Schließen, Bestandspflege und Nachbestellung, Abläufe organisieren, Eigenverantwortung' },
      { category: 'Persönlich & Sprachen', items: 'Zuverlässigkeit, Teamarbeit, Belastbarkeit, mehrsprachig (DE/EN/ES/TR)' },
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
      `ich bewerbe mich auf die Stelle an der Rezeption in Ihrem Massagestudio. Ich komme aus der Gastronomie und dem Tourismus. In beiden Bereichen zählen der erste Eindruck und ein guter Empfang. An der Rezeption gehe ich freundlich und aufmerksam auf jeden Gast zu und sorge dafür, dass er sich von der ersten Minute an gut aufgehoben fühlt.`,

      `In Bonn habe ich mehrere Jahre mein eigenes Café und Catering geführt. Ich habe Gäste empfangen und beraten, den Laden morgens geöffnet und abends geschlossen und dabei Bestände und Abläufe organisiert. Dadurch weiß ich, wie man einen Empfang ruhig und freundlich steuert, auch wenn viel los ist.`,

      `Auch im Tourismus stand der Gast im Mittelpunkt. Als Reiseführer und im Reisebüro habe ich Menschen betreut, Termine und Buchungen verwaltet und auf Wünsche reagiert. Mit internationalen Gästen komme ich mehrsprachig klar, auf Deutsch, Englisch, Spanisch und Türkisch. In ein Buchungssystem für Termine arbeite ich mich schnell ein.`,

      `Ein Massagestudio lebt von einer ruhigen und angenehmen Atmosphäre, und die beginnt am Empfang. Dort möchte ich für einen herzlichen und reibungslosen Ablauf sorgen. Ich bin zuverlässig, behalte auch bei vielen Anfragen den Überblick und unterstütze das Team gern im Hintergrund.`,

      `Über die Einladung zu einem persönlichen Gespräch freue ich mich.`,
    ],
  },
};
