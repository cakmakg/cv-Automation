// ============================================================================
//  VORLAGE für eine neue Bewerbung. Nicht direkt kopieren, sondern anlegen lassen:
//      node new-bewerbung.mjs <firma>-<rolle>-<ort> <profil> [jds/<datei>.md]
//  Regeln zum Schreiben: kurzkarten/_alle.md + kurzkarten/<profil>.md
//
//  Profil wählen: 'bereich1' | 'it-support' | 'quereinstieg' (siehe profiles.mjs).
//  Das Profil liefert CV-Block, Ausbildung, Sprachen, Projekte und die festen Schlussabsätze.
//  Hier steht NUR, was sich pro Stelle ändert. Analyse und Score gehören in den Report.
//
//  Ablauf:  node generate-bewerbung.mjs companies/X.mjs --check   → bis grün
//           node generate-bewerbung.mjs companies/X.mjs           → genau 1 Lauf
// ============================================================================
// <Firma> — <Rolle>, <Ort>. Report: reports/NNN-<slug>-<datum>.md

import { BLOCKS } from '../profiles.mjs';

export default {
  profile: 'it-support',
  slug: 'FIRMA-ROLLE-ORT',
  // date weglassen = heutiges Datum aus der Systemuhr.

  recipient: [
    'Firma GmbH',
    'Straße 1',
    '00000 Stadt',
  ],

  subject: 'Bewerbung als ROLLE',

  narrative: {
    kern: 'Ein Satz: wer du fachlich bist, unabhängig von dieser Stelle.',
    passung: ['Passungspunkt 1', 'Passungspunkt 2', 'Passungspunkt 3'],
  },
  company: {
    mission: 'Was macht diese Firma konkret — recherchiert, nicht geraten.',
    verbindung: 'Wie hängt dein Narrativ mit dieser Mission zusammen.',
  },
  jobKeywords: ['aus der Anzeige'],

  // Nur Abweichungen vom Profil, z. B. skills-Reihenfolge, tagline oder competencies.
  // cv.experience NIE setzen (Stationen sind fix).
  cv: {},

  anschreiben: {
    anrede: 'Sehr geehrte Damen und Herren,',
    // Nur die stellenspezifischen Absätze. Die festen Schlussabsätze hängt das Profil an:
    //   bereich1      → Umschulung, Café, Schlusssatz des Users
    //   it-support    → "Über die Einladung …"
    //   quereinstieg  → "Über die Einladung …"
    // Bausteine für die Mitte: BLOCKS.foerderTech, BLOCKS.foerderQuereinstieg,
    // BLOCKS.zusaetzlichSupport, BLOCKS.cafeSupport, BLOCKS.cafeQuereinstieg.
    // Ein stellenbezogener Satz darf angehängt werden: `${BLOCKS.cafeSupport} In einem Krankenhaus zählt das.`
    paragraphs: [
      `ich bewerbe mich gerne auf Ihre Stelle als ROLLE …`,
    ],
  },

  // Begleitmail → output/mail-<slug>-<datum>.txt. Kopf (An/Betreff/Anhang), Anrede, Grußformel
  // und Signatur (aus cv.md) setzt der Generator. Weglassen, wenn es keine Mail gibt.
  // [PLATZHALTER] in eckigen Klammern meldet der Generator als "vor dem Versand ausfüllen".
  mail: {
    to: 'bewerbung@firma.de',            // leer lassen bei Portal/Formular
    // hinweis: 'Text über dem Mailkopf, z. B. Upload-Weg oder was vor dem Versand fehlt',
    paragraphs: [
      `anbei sende ich Ihnen meine Bewerbung als ROLLE.`,
      `Lebenslauf und Anschreiben finden Sie im angehängten PDF. Zeugnisse und Zertifikate sind im Lebenslauf verlinkt.`,
      `Für Rückfragen erreichen Sie mich unter +49 163 9734475.`,
    ],
  },
};
