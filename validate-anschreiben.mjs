#!/usr/bin/env node
/**
 * validate-anschreiben.mjs — Content quality checker for Anschreiben configs
 *
 * Checks all established style rules against a company config before PDF generation.
 * Can be used standalone or imported as a function by generate-bewerbung.mjs.
 *
 * Usage (standalone):
 *   node validate-anschreiben.mjs companies/thinkgroup-servicedesk.mjs
 *
 * Usage (imported):
 *   import { validateAnschreiben } from './validate-anschreiben.mjs';
 *   const result = await validateAnschreiben(config);
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * UMBAU Juli 2026 — Recruiter-Feedback (Methodik-Framework)
 *
 * Wörtliches Feedback:
 *   „Das Anschreiben hat leider sehr offensichtliche Claude-Formulierungen und
 *    inhaltlich orientiert es sich nur am Stellenprofil gematcht auf deinen
 *    Lebenslauf, aber es stellt dich nicht vor oder wie du arbeitest."
 *   „Es geht ja nicht nur darum Formulierungen aus einer Stellenanzeige
 *    aufzugreifen sondern darzulegen: was ist das (dein) Narrativ, was sind
 *    deine Passungspunkte. Was zeichnet das Unternehmen aus und ist deren
 *    Mission. Wie lässt sich das verbinden. Was hast du bisher konkret getan
 *    und welches Ergebnis damit produziert."
 *
 * Konsequenz für diesen Validator:
 *   1. Die frühere PFLICHT zu „Für Sie heißt das:" in JEDEM mittleren Absatz
 *      war selbst der Schablonen-Verdacht. Wiederholung ist jetzt ein ERROR,
 *      einmalige Verwendung erlaubt, gar keine Verwendung völlig in Ordnung.
 *   2. Neuer Block: AI-Tell-Erkennung (Abschnitt B). „nicht nur … sondern auch"
 *      war vorher sogar ein GEFORDERTES Signal — jetzt ist es ein Tell.
 *   3. Neuer Block: Framework-Checks (Abschnitt C). Der Brief muss Narrativ,
 *      Passungspunkte, Unternehmensmission und deren Verbindung tragen —
 *      nicht nur Stellenprofil-Vokabular spiegeln.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── A. Rule definitions — Phrasen & Form ────────────────────────────────────

const FORBIDDEN_PHRASES = [
  { phrase: 'sehe ich die Möglichkeit',           msg: 'Classic cold Bewerbungsdeutsch opener' },
  { phrase: 'meine Fähigkeiten gezielt einzubringen', msg: 'Generic skill-offer phrase (Bewerbungsdeutsch)' },
  { phrase: 'insbesondere bei der Entwicklung',   msg: 'Filler phrase — be specific about what you bring' },
  { phrase: 'In Ihren Projekten sehe ich',        msg: 'Forbidden cold opener — start with what you DO, not what you see' },
  { phrase: 'diese Mischung bringe ich mit',      msg: 'Generic filler summary — every sentence must carry new information' },
  { phrase: 'Ich freue mich darauf,',             msg: 'Weak closing — use "Über die Einladung zu einem persönlichen Gespräch freue ich mich."' },
  { phrase: 'Als Quereinsteiger',                 msg: 'Do NOT use Quereinsteiger label — open with what you build and deliver' },
  { phrase: 'als Quereinsteiger',                 msg: 'Do NOT use Quereinsteiger label — open with what you build and deliver' },
];

// Compound-hyphen word pattern (word-word) — signals a dash used as connector
// Exempt: pure numbers (2020-2023), URLs, email addresses
const DASH_IN_BODY = /\b[a-zA-ZäöüÄÖÜß]+-[a-zA-ZäöüÄÖÜß]+\b/g;

// "Für X heißt das:" in any form
const FUER_SIE_REGEX = /für\s+\S+(?:\s+\S+)?\s+heißt\s+das\s*:/gi;

// Known CV-repetition phrases — these are already in the CV, don't repeat in Anschreiben
const CV_REPEAT_PHRASES = [
  'Deutsch fließend',
  'Englisch sicher',
  'Türkisch Muttersprache',
  'Spanisch gut',
  'Deutsch (fließend',
  'Englisch (B1',
];

// Bad subject line patterns
const BAD_SUBJECT_PATTERNS = [
  { re: /\(m\/w\/d\)/i,          msg: 'Remove (m/w/d) from subject line' },
  { re: /\(m\/w\/d\/x\)/i,       msg: 'Remove (m/w/d/x) from subject line' },
  { re: /\(Junior\)/i,           msg: 'Remove (Junior) — spell it out instead' },
  { re: /100%\s*Remote/i,        msg: 'Remove "100% Remote" portal tag from subject' },
  { re: /\.NET\b/,               msg: 'Remove ".NET" portal tag from subject' },
  { re: /Vollzeit/i,             msg: 'Remove "Vollzeit" from subject line' },
  { re: /Teilzeit/i,             msg: 'Remove "Teilzeit" from subject line' },
];

// ─── B. AI-Tells — Formulierungen, die als maschinengeschrieben gelesen werden ─
// Recruiter Juli 2026: „sehr offensichtliche Claude-Formulierungen".
// Diese Muster sind der Grund. Sie sind grammatisch sauber, aber rhythmisch
// so gleichförmig, dass sie auffallen — besonders mehrfach in einem Brief.

const AI_TELLS = [
  {
    re: /nicht\s+nur\b[^.!?]{0,120}?\bsondern\s+auch\b/gi,
    label: '"nicht nur … sondern auch"',
    msg: 'Klassischste LLM-Konstruktion. Auflösen: die zweite Hälfte als eigener Satz.',
    level: 'error',
  },
  {
    re: /\bsowohl\b[^.!?]{0,120}?\bals\s+auch\b/gi,
    label: '"sowohl … als auch"',
    msg: 'Gleiche Familie wie "nicht nur … sondern auch". In zwei Aussagen trennen.',
    level: 'warning',
  },
  {
    re: /\bes\s+geht\s+(?:mir\s+)?nicht\s+(?:nur\s+)?(?:um|darum)\b/gi,
    label: '"es geht nicht (nur) um …"',
    msg: 'Rhetorische Vorwegnahme, typisch generiert. Direkt sagen, worum es geht.',
    level: 'warning',
  },
  {
    re: /\bdas\s+ist\s+(?:ein|etwas)\s+(?:anderer|andere|anderes)\s+[^.!?]{0,60}\bals\b/gi,
    label: '"Das ist ein anderer X als Y"',
    msg: 'Kontrast-Schlusssatz als Absatz-Pointe — sehr wiedererkennbares LLM-Muster.',
    level: 'warning',
  },
  {
    re: /\bgenau\s+(?:hier|das|dort)\s+(?:setze|setzt|liegt|kommt)\b/gi,
    label: '"genau hier setze ich an" / "genau das kommt …"',
    msg: 'Übergangsformel aus generierten Texten. Streichen, Satz beginnt direkt.',
    level: 'warning',
  },
  {
    re: /\bin\s+der\s+heutigen\s+(?:zeit|welt|arbeitswelt)\b|\bin\s+einer\s+welt,\s+in\s+der\b/gi,
    label: '"in der heutigen Arbeitswelt" / "in einer Welt, in der …"',
    msg: 'Leerformel-Einstieg. Ersatzlos streichen.',
    level: 'error',
  },
  {
    re: /\b(?:mit\s+)?leidenschaft\b|\bbrenne\s+für\b|\bbegeisterung\s+für\b/gi,
    label: '"Leidenschaft" / "ich brenne für"',
    msg: 'Behauptete Emotion ohne Beleg. Stattdessen zeigen, was du gebaut hast.',
    level: 'warning',
  },
];

// Generisches Firmenlob — Feedback: „was zeichnet das Unternehmen aus".
// Diese Wörter beantworten das gerade NICHT.
const GENERIC_COMPANY_PRAISE = [
  'innovatives Unternehmen', 'spannende Projekte', 'dynamisches Team',
  'renommiert', 'Marktführer', 'Ihr hervorragender Ruf', 'beeindruckt mich',
  'zukunftsorientiert', 'Ihre spannende', 'Ihr spannendes',
];

/**
 * Zählt Dreier-Aufzählungen ("A, B und C") — als Stilmittel unauffällig,
 * gehäuft aber ein starker Generierungs-Marker.
 * Konservativ: verlangt zwei Kommata vor dem "und" innerhalb eines Satzes.
 */
function countTricolons(text) {
  const sentences = text.split(/(?<=[.!?])\s+/);
  return sentences.filter((s) => /[^,.]+,[^,.]+,[^,.]+\s+und\s+/.test(s)).length;
}

// ─── C. Framework-Checks — Recruiter-Methodik ────────────────────────────────
// „was ist das (dein) Narrativ, was sind deine Passungspunkte. Was zeichnet das
//  Unternehmen aus und ist deren Mission. Wie lässt sich das verbinden.
//  Was hast du bisher konkret getan und welches Ergebnis damit produziert."

// Ergebnis-Signale: mindestens ein konkretes Resultat muss belegt sein.
const ERGEBNIS_SIGNALS = [
  'dadurch', 'seitdem', 'Ergebnis:', 'konnte ich', 'konnten wir',
  'reduziert', 'gespart', 'verbessert', 'gesteigert', 'eingespart',
  'läuft produktiv', 'läuft seit', 'läuft stabil', 'ohne Nacharbeit', 'ohne manuellen',
  'in weniger als', 'binnen', '% weniger', '% mehr', 'Stunden gespart',
  'Wochen fertig', 'Wochen gebaut', 'ohne weiteren Eingriff', 'Prozent',
];

// „wie du arbeitest" — Arbeitsweise, nicht Rollenbeschreibung.
// Hinweis: 'nicht nur' / 'sondern auch' standen hier früher als GEFORDERTE
// Signale. Sie sind jetzt in AI_TELLS und hier bewusst entfernt.
const HOW_SIGNALS = [
  'baue ich', 'entwickle ich', 'setze ich', 'halte ich', 'sorge ich',
  'dokumentiere ich', 'teste ich', 'gehe ich', 'arbeite ich',
  'bedeutet für mich', 'heißt für mich', 'mein ansatz', 'meine arbeitsweise',
  'läuft bei mir', 'von anfang an', 'zuerst', 'bevor ich',
];

/** Inhaltswörter aus einem Satz ziehen (für Mission/Verbindung-Abgleich). */
function contentTokens(str) {
  const STOP = new Set([
    'und', 'oder', 'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen',
    'einem', 'einer', 'für', 'von', 'mit', 'auf', 'aus', 'bei', 'zum', 'zur', 'ist',
    'sind', 'wird', 'werden', 'nicht', 'auch', 'sich', 'ihre', 'ihren', 'ihrem',
    'dass', 'sie', 'wir', 'ich', 'als', 'wie', 'sehr', 'mehr', 'über', 'durch',
  ]);
  return [...new Set(
    (str.toLowerCase().match(/[a-zäöüß][a-zäöüß0-9.-]{3,}/g) ?? []).filter((w) => !STOP.has(w))
  )];
}

// ─── Core validation function (exported for use in generate-bewerbung.mjs) ──

/**
 * @param {object} config - The company config object
 * @returns {{ errors: string[], warnings: string[], slug: string }}
 */
export async function validateAnschreiben(config) {
  const { slug, subject, anschreiben, company, narrative } = config;
  const paragraphs = anschreiben?.paragraphs ?? [];
  const fullText = paragraphs.join('\n');
  const lowerText = fullText.toLowerCase();
  const errors = [];
  const warnings = [];

  // ── 1. Paragraph count (4–5) ───────────────────────────────────────────────
  if (paragraphs.length < 4) {
    errors.push(`Paragraph count is ${paragraphs.length} — need at least 4 (Narrativ / Passung / Beleg+Ergebnis / Verbindung + Abschluss)`);
  } else if (paragraphs.length > 5) {
    warnings.push(`Paragraph count is ${paragraphs.length} — 4–5 recommended (shorter is better)`);
  }

  // ── 2. "Für X heißt das:" — Wiederholung ist der Schablonen-Verdacht ──────
  // Bis Juli 2026 war das in JEDEM mittleren Absatz Pflicht. Genau diese
  // Gleichförmigkeit hat der Recruiter als "Claude-Formulierung" erkannt.
  const fuerSieCount = (fullText.match(FUER_SIE_REGEX) ?? []).length;
  if (fuerSieCount >= 2) {
    errors.push(
      `"Für … heißt das:" ${fuerSieCount}× verwendet — identische Konstruktion mehrfach im selben Brief ` +
      `liest sich als Schablone (Recruiter-Feedback Juli 2026: "sehr offensichtliche Claude-Formulierungen"). ` +
      `Maximal 1× — den Rest als normalen Satz formulieren, der Nutzen bleibt trotzdem konkret.`
    );
  }

  // ── 3. No compound-hyphen words in body text ─────────────────────────────
  const dashViolations = [];
  paragraphs.forEach((p, i) => {
    const matches = [...p.matchAll(DASH_IN_BODY)];
    if (matches.length > 0) {
      dashViolations.push({ para: i + 1, words: matches.map((m) => m[0]).slice(0, 4) });
    }
  });
  dashViolations.forEach((v) => {
    warnings.push(`Paragraph ${v.para}: compound-hyphen words found: ${v.words.join(', ')} — use space or rephrase`);
  });

  // ── 4. Forbidden phrases ─────────────────────────────────────────────────
  FORBIDDEN_PHRASES.forEach(({ phrase, msg }) => {
    if (fullText.includes(phrase)) {
      errors.push(`Forbidden phrase: "${phrase}" — ${msg}`);
    }
  });

  // ── 5. AI-Tells ──────────────────────────────────────────────────────────
  AI_TELLS.forEach(({ re, label, msg, level }) => {
    const hits = fullText.match(re);
    if (hits) {
      const entry = `AI-Tell ${label} (${hits.length}×): ${msg}`;
      (level === 'error' ? errors : warnings).push(entry);
    }
  });

  const tricolons = countTricolons(fullText);
  if (tricolons >= 2) {
    warnings.push(
      `${tricolons} Dreier-Aufzählungen ("A, B und C") im Brief — gehäuft ein starker Generierungs-Marker. ` +
      `Mindestens eine auf zwei Glieder kürzen.`
    );
  }

  // ── 6. Closing sentence format ───────────────────────────────────────────
  const lastPara = (paragraphs[paragraphs.length - 1] ?? '').trim();
  if (!lastPara.includes('Über die Einladung')) {
    errors.push(`Closing sentence missing — last paragraph must be exactly: "Über die Einladung zu einem persönlichen Gespräch freue ich mich." (found: "${lastPara.slice(0, 50)}…")`);
  }

  // ── 7. "Mit freundlichen Grüßen" must NOT be in paragraphs ───────────────
  if (fullText.includes('Mit freundlichen Grüßen')) {
    errors.push(`"Mit freundlichen Grüßen" found in paragraphs — the template adds it automatically. Remove from config to avoid duplication.`);
  }

  // ── 8. Subject line cleanliness ──────────────────────────────────────────
  BAD_SUBJECT_PATTERNS.forEach(({ re, msg }) => {
    if (re.test(subject ?? '')) errors.push(`Subject line: ${msg}`);
  });

  // ── 9. CV language repetition ────────────────────────────────────────────
  CV_REPEAT_PHRASES.forEach((phrase) => {
    if (fullText.includes(phrase)) {
      warnings.push(`CV language repetition: "${phrase}" is already on the CV — every Anschreiben sentence must carry new information`);
    }
  });

  // ── 10. Narrativ — "es stellt dich nicht vor oder wie du arbeitest" ──────
  const firstPara = (paragraphs[0] ?? '').toLowerCase();
  if (!HOW_SIGNALS.some((s) => firstPara.includes(s))) {
    errors.push(
      `Einleitung sagt nicht, WIE du arbeitest — nur WAS du bist oder worauf du dich bewirbst. ` +
      `(Recruiter: "es stellt dich nicht vor oder wie du arbeitest"). ` +
      `Signale: "baue ich", "bevor ich", "zuerst", "dokumentiere ich", "von Anfang an".`
    );
  }

  if (!narrative?.kern) {
    warnings.push(
      `config.narrative.kern fehlt — ein Satz, wer du fachlich bist, unabhängig von dieser Stelle. ` +
      `Zwingt dazu, das Narrativ zu formulieren statt das Stellenprofil zu spiegeln.`
    );
  }

  // ── 11. Passungspunkte ───────────────────────────────────────────────────
  const passung = narrative?.passung ?? [];
  if (passung.length === 0) {
    warnings.push(`config.narrative.passung fehlt — 2 bis 3 konkrete Passungspunkte zwischen deinem Profil und dieser Rolle.`);
  } else {
    const unused = passung.filter((p) => {
      const toks = contentTokens(p);
      const hit = toks.filter((t) => lowerText.includes(t)).length;
      return toks.length > 0 && hit / toks.length < 0.3;
    });
    if (unused.length > 0) {
      warnings.push(`Passungspunkt(e) im Brieftext nicht wiederzufinden: ${unused.map((u) => `"${u.slice(0, 45)}…"`).join(', ')}`);
    }
  }

  // ── 12. Unternehmen: Mission & Verbindung ────────────────────────────────
  // "Was zeichnet das Unternehmen aus und ist deren Mission. Wie lässt sich das verbinden."
  if (!company?.mission) {
    errors.push(
      `config.company.mission fehlt — was das Unternehmen konkret tut bzw. wofür es steht, in EIGENEN Worten. ` +
      `Ohne das bleibt der Brief ein Abgleich von Stellenprofil und Lebenslauf (Recruiter-Feedback Juli 2026).`
    );
  } else {
    const missionToks = contentTokens(company.mission);
    const hits = missionToks.filter((t) => lowerText.includes(t));
    if (missionToks.length > 0 && hits.length < 2) {
      errors.push(
        `company.mission taucht im Brieftext praktisch nicht auf (${hits.length} Treffer). ` +
        `Die Mission muss im Brief vorkommen, sonst ist sie nur Recherche-Notiz.`
      );
    }
  }

  if (!company?.verbindung) {
    errors.push(
      `config.company.verbindung fehlt — ein Satz: warum passt DEIN Narrativ zu GENAU dieser Mission. ` +
      `Das ist der Kern des Recruiter-Frameworks ("Wie lässt sich das verbinden").`
    );
  }

  GENERIC_COMPANY_PRAISE.forEach((phrase) => {
    if (lowerText.includes(phrase.toLowerCase())) {
      warnings.push(`Generisches Firmenlob: "${phrase}" — sagt nichts über DIESES Unternehmen. Konkret werden oder streichen.`);
    }
  });

  // ── 13. Konkrete Tat + Ergebnis ──────────────────────────────────────────
  if (!ERGEBNIS_SIGNALS.some((s) => lowerText.includes(s.toLowerCase()))) {
    errors.push(
      `Kein konkretes Ergebnis belegt — Pflicht laut Recruiter-Framework ` +
      `("Was hast du bisher konkret getan und welches Ergebnis damit produziert"). ` +
      `Signale: "dadurch", "konnte ich", "läuft produktiv", "70 Prozent", "gespart".`
    );
  }

  // ── 14. ATS keyword coverage ─────────────────────────────────────────────
  const jobKeywords = Array.isArray(config.jobKeywords) ? config.jobKeywords : [];
  if (jobKeywords.length === 0) {
    warnings.push(
      `config.jobKeywords fehlt — ohne die Muss-Begriffe der Stellenanzeige läuft keine ATS-Prüfung. ` +
      `5 bis 8 Pflichtbegriffe aus der Anzeige eintragen.`
    );
  } else {
    const missing = jobKeywords.filter((kw) => !lowerText.includes(kw.toLowerCase()));
    const coverage = (jobKeywords.length - missing.length) / jobKeywords.length;
    if (coverage < 0.6) {
      errors.push(`ATS coverage ${Math.round(coverage * 100)}% (< 60%) — fehlend: ${missing.join(', ')}`);
    } else if (missing.length > 0) {
      warnings.push(`ATS keywords not in Anschreiben (${Math.round(coverage * 100)}% coverage): ${missing.join(', ')}`);
    }
  }

  return { errors, warnings, slug };
}

// ─── CLI mode (run directly as a script) ────────────────────────────────────

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);

if (isMain) {
  const configArg = process.argv[2];
  if (!configArg) {
    console.error('Usage: node validate-anschreiben.mjs <config-file.mjs>');
    console.error('Example: node validate-anschreiben.mjs companies/thinkgroup-servicedesk.mjs');
    process.exit(1);
  }

  const configPath = resolve(__dirname, configArg);
  if (!existsSync(configPath)) {
    console.error(`❌ Config not found: ${configPath}`);
    process.exit(1);
  }

  const config = (await import(pathToFileURL(configPath).href)).default;
  const { slug, anschreiben } = config;
  const paragraphs = anschreiben?.paragraphs ?? [];
  const fullText = paragraphs.join('\n');

  console.log(`\n🔍 Validating Anschreiben: ${slug}`);
  console.log(`   Paragraphs: ${paragraphs.length}  |  Subject: ${config.subject ?? '—'}\n`);

  const { errors, warnings } = await validateAnschreiben(config);

  const paraCount = paragraphs.length;
  if (paraCount >= 4 && paraCount <= 5) console.log(`  ✓ Paragraph count: ${paraCount}`);

  const fuerSieCount = (fullText.match(FUER_SIE_REGEX) ?? []).length;
  console.log(`  ${fuerSieCount >= 2 ? '✗' : '✓'} "Für … heißt das:" ${fuerSieCount}× (max 1 erlaubt, 0 ist auch gut)`);

  // .match() statt .test() — die Muster tragen das g-Flag, test() würde lastIndex fortschreiben.
  const tellHits = AI_TELLS.filter(({ re }) => fullText.match(re)).length;
  console.log(`  ${tellHits === 0 ? '✓' : '✗'} AI-Tells: ${tellHits} Muster getroffen  |  Dreier-Aufzählungen: ${countTricolons(fullText)}`);

  if (!errors.some((e) => e.includes('compound-hyphen')) && !warnings.some((w) => w.includes('compound-hyphen'))) {
    console.log(`  ✓ No compound-hyphen words in body text`);
  }
  if (!errors.some((e) => e.startsWith('Forbidden'))) console.log(`  ✓ No forbidden phrases`);
  if (!errors.some((e) => e.includes('Closing')))    console.log(`  ✓ Closing sentence correct`);
  if (!errors.some((e) => e.includes('Subject')))    console.log(`  ✓ Subject line clean`);
  if (!warnings.some((w) => w.includes('CV language'))) console.log(`  ✓ No CV language repetition`);

  console.log('\n  — Recruiter-Framework —');
  console.log(`  ${config.narrative?.kern ? '✓' : '○'} Narrativ (config.narrative.kern)`);
  console.log(`  ${(config.narrative?.passung ?? []).length > 0 ? '✓' : '○'} Passungspunkte (config.narrative.passung)`);
  console.log(`  ${config.company?.mission ? '✓' : '✗'} Unternehmensmission (config.company.mission)`);
  console.log(`  ${config.company?.verbindung ? '✓' : '✗'} Verbindung Narrativ ↔ Mission (config.company.verbindung)`);
  console.log(`  ${!errors.some((e) => e.includes('Kein konkretes Ergebnis')) ? '✓' : '✗'} Konkretes Ergebnis belegt`);
  console.log(`  ${!errors.some((e) => e.includes('WIE du arbeitest')) ? '✓' : '✗'} Einleitung zeigt Arbeitsweise`);

  const jobKeywords = Array.isArray(config.jobKeywords) ? config.jobKeywords : [];
  if (jobKeywords.length > 0) {
    const missing = jobKeywords.filter((kw) => !fullText.toLowerCase().includes(kw.toLowerCase()));
    console.log(`  ${missing.length === 0 ? '✓' : '○'} ATS keywords: ${jobKeywords.length - missing.length}/${jobKeywords.length} found`);
  } else {
    console.log(`  ○ ATS keywords: none configured (add jobKeywords: [...] to config)`);
  }

  console.log('');

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All checks passed!\n');
    process.exit(0);
  }

  if (errors.length > 0) {
    console.log('❌ Errors (fix before sending):');
    errors.forEach((e) => console.log(`  • ${e}`));
    console.log('');
  }
  if (warnings.length > 0) {
    console.log('⚠️  Warnings (review before sending):');
    warnings.forEach((w) => console.log(`  • ${w}`));
    console.log('');
  }

  process.exit(errors.length > 0 ? 1 : 0);
}
