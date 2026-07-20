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
 */

import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Rule definitions ────────────────────────────────────────────────────────

const FORBIDDEN_PHRASES = [
  { phrase: 'sehe ich die Möglichkeit',           msg: 'Classic cold Bewerbungsdeutsch opener — use "Für Sie heißt das:" instead' },
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
const FUER_SIE_REGEX = /für\s+\S+(?:\s+\S+)?\s+heißt\s+das\s*:/i;

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

// ─── Core validation function (exported for use in generate-bewerbung.mjs) ──

/**
 * @param {object} config - The company config object
 * @returns {{ errors: string[], warnings: string[], slug: string }}
 */
export async function validateAnschreiben(config) {
  const { slug, subject, anschreiben } = config;
  const paragraphs = anschreiben?.paragraphs ?? [];
  const fullText = paragraphs.join('\n');
  const errors = [];
  const warnings = [];

  // 1. Paragraph count (4–5)
  if (paragraphs.length < 4) {
    errors.push(`Paragraph count is ${paragraphs.length} — need at least 4 (Einleitung / Kompetenz / Showcase / Persönlichkeit + Abschluss)`);
  } else if (paragraphs.length > 5) {
    warnings.push(`Paragraph count is ${paragraphs.length} — 4–5 recommended (shorter is better)`);
  }

  // 2. "Für Sie/[Company] heißt das:" in middle paragraphs (all except first and last)
  const middleParas = paragraphs.slice(1, -1);
  const fuerSieFound = middleParas
    .map((p, i) => ({ idx: i + 2, has: FUER_SIE_REGEX.test(p) }))
    .filter(x => x.has)
    .map(x => x.idx);

  if (middleParas.length > 0 && fuerSieFound.length === 0) {
    errors.push(`Missing "Für Sie/[Company] heißt das:" in ALL middle paragraphs — this is the most important rule. Every substantive paragraph needs a concrete benefit statement.`);
  } else if (middleParas.length >= 2 && fuerSieFound.length < 2) {
    warnings.push(`"Für Sie heißt das:" found only in paragraph(s) ${fuerSieFound.join(', ')} — should appear in paragraphs 2 AND 3`);
  }

  // 3. No compound-hyphen words in body text
  const dashViolations = [];
  paragraphs.forEach((p, i) => {
    const matches = [...p.matchAll(DASH_IN_BODY)];
    if (matches.length > 0) {
      dashViolations.push({ para: i + 1, words: matches.map(m => m[0]).slice(0, 4) });
    }
  });
  if (dashViolations.length > 0) {
    dashViolations.forEach(v => {
      warnings.push(`Paragraph ${v.para}: compound-hyphen words found: ${v.words.join(', ')} — use space or rephrase`);
    });
  }

  // 4. Forbidden phrases
  FORBIDDEN_PHRASES.forEach(({ phrase, msg }) => {
    if (fullText.includes(phrase)) {
      errors.push(`Forbidden phrase: "${phrase}" — ${msg}`);
    }
  });

  // 5. Closing sentence format
  const lastPara = (paragraphs[paragraphs.length - 1] ?? '').trim();
  if (!lastPara.includes('Über die Einladung')) {
    errors.push(`Closing sentence missing — last paragraph must be exactly: "Über die Einladung zu einem persönlichen Gespräch freue ich mich." (found: "${lastPara.slice(0, 50)}…")`);
  }

  // 6. "Mit freundlichen Grüßen" must NOT be in paragraphs (template adds it)
  if (fullText.includes('Mit freundlichen Grüßen')) {
    errors.push(`"Mit freundlichen Grüßen" found in paragraphs — the template adds it automatically. Remove from config to avoid duplication.`);
  }

  // 7. Subject line cleanliness
  BAD_SUBJECT_PATTERNS.forEach(({ re, msg }) => {
    if (re.test(subject ?? '')) errors.push(`Subject line: ${msg}`);
  });

  // 8. CV language repetition
  CV_REPEAT_PHRASES.forEach(phrase => {
    if (fullText.includes(phrase)) {
      warnings.push(`CV language repetition: "${phrase}" is already on the CV — every Anschreiben sentence must carry new information`);
    }
  });

  // 9. ATS keyword check (optional — only if config defines jobKeywords)
  if (Array.isArray(config.jobKeywords) && config.jobKeywords.length > 0) {
    const missing = config.jobKeywords.filter(
      kw => !fullText.toLowerCase().includes(kw.toLowerCase())
    );
    if (missing.length > 0) {
      warnings.push(`ATS keywords not found in Anschreiben text: ${missing.join(', ')}`);
    }
  }

  // 10. Ergebnis check — at least one concrete outcome signal (Recruiter Feedback Juli 2026)
  // Recruiter feedback: "Was hast du konkret getan und welches Ergebnis damit produziert?"
  const ERGEBNIS_SIGNALS = [
    'dadurch', 'seitdem', 'Ergebnis:', 'konnte ich', 'konnten wir',
    'reduziert', 'gespart', 'verbessert', 'gesteigert', 'eingespart',
    'läuft produktiv', 'läuft seit', 'läuft stabil', 'ohne Nacharbeit', 'ohne manuellen',
    'in weniger als', 'binnen', '% weniger', '% mehr', 'Stunden gespart',
    'Wochen fertig', 'Wochen gebaut', 'ohne weiteren Eingriff',
  ];
  const hasErgebnis = ERGEBNIS_SIGNALS.some(s => fullText.toLowerCase().includes(s.toLowerCase()));
  if (!hasErgebnis) {
    warnings.push(
      `Missing concrete outcome/result language — add at least one Ergebnis-Signal: ` +
      `"dadurch", "konnte ich", "läuft produktiv", "gespart", "verbessert", etc. ` +
      `(Recruiter feedback: "Was hast du konkret getan und welches Ergebnis damit produziert?")`
    );
  }

  // 11. Wie-ich-arbeite check — first paragraph should say HOW you work, not just WHAT you do
  const firstPara = (paragraphs[0] ?? '').toLowerCase();
  const HOW_SIGNALS = [
    'baue ich', 'entwickle ich', 'setze ich', 'halte ich', 'sorge ich',
    'bedeutet für mich', 'heißt für mich', 'mein ansatz', 'meine arbeitsweise',
    'läuft bei mir', 'von anfang an', 'nicht nur', 'sondern auch',
  ];
  const hasHowSignal = HOW_SIGNALS.some(s => firstPara.includes(s));
  if (!hasHowSignal) {
    warnings.push(
      `Opening paragraph may lack "Wie ich arbeite" framing — ` +
      `the first paragraph should convey HOW you work (your approach/mindset), ` +
      `not just WHAT role you apply for. ` +
      `Signals: "baue ich", "bedeutet für mich", "von Anfang an dabei", "nicht nur PoC, sondern…"`
    );
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

  console.log(`\n🔍 Validating Anschreiben: ${slug}`);
  console.log(`   Paragraphs: ${paragraphs.length}  |  Subject: ${config.subject ?? '—'}\n`);

  const { errors, warnings } = await validateAnschreiben(config);

  // Print passed checks
  const paraCount = paragraphs.length;
  if (paraCount >= 4 && paraCount <= 5) console.log(`  ✓ Paragraph count: ${paraCount}`);

  const fullText = paragraphs.join('\n');
  const FUER_SIE_REGEX = /für\s+\S+(?:\s+\S+)?\s+heißt\s+das\s*:/i;
  const middleParas = paragraphs.slice(1, -1);
  const fuerSieFound = middleParas.map((p, i) => ({ idx: i + 2, has: FUER_SIE_REGEX.test(p) })).filter(x => x.has).map(x => x.idx);
  if (fuerSieFound.length >= 2 || (middleParas.length === 1 && fuerSieFound.length === 1)) {
    console.log(`  ✓ "Für Sie heißt das:" in paragraph(s) ${fuerSieFound.join(', ')}`);
  }
  if (!errors.some(e => e.includes('compound-hyphen')) && !warnings.some(w => w.includes('compound-hyphen'))) {
    console.log(`  ✓ No compound-hyphen words in body text`);
  }
  if (!errors.some(e => e.startsWith('Forbidden'))) {
    console.log(`  ✓ No forbidden phrases`);
  }
  if (!errors.some(e => e.includes('Closing'))) {
    console.log(`  ✓ Closing sentence correct`);
  }
  if (!errors.some(e => e.includes('Subject'))) {
    console.log(`  ✓ Subject line clean`);
  }
  if (!warnings.some(w => w.includes('CV language'))) {
    console.log(`  ✓ No CV language repetition`);
  }
  if (!warnings.some(w => w.includes('Missing concrete outcome'))) {
    console.log(`  ✓ Ergebnis-Signal found (concrete outcome language present)`);
  }
  if (!warnings.some(w => w.includes('Wie ich arbeite'))) {
    console.log(`  ✓ Opening paragraph has "Wie ich arbeite" framing`);
  }
  if (Array.isArray(config.jobKeywords) && config.jobKeywords.length > 0) {
    const missing = config.jobKeywords.filter(kw => !fullText.toLowerCase().includes(kw.toLowerCase()));
    if (missing.length === 0) {
      console.log(`  ✓ ATS keywords: ${config.jobKeywords.length}/${config.jobKeywords.length} found`);
    }
  } else {
    console.log(`  ○ ATS keywords: none configured (add jobKeywords: [...] to config for keyword check)`);
  }

  console.log('');

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All checks passed!\n');
    process.exit(0);
  }

  if (errors.length > 0) {
    console.log('❌ Errors (fix before sending):');
    errors.forEach(e => console.log(`  • ${e}`));
    console.log('');
  }
  if (warnings.length > 0) {
    console.log('⚠️  Warnings (review before sending):');
    warnings.forEach(w => console.log(`  • ${w}`));
    console.log('');
  }

  process.exit(errors.length > 0 ? 1 : 0);
}
