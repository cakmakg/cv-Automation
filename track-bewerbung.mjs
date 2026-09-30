#!/usr/bin/env node
/**
 * track-bewerbung.mjs — trägt eine fertige Bewerbung in den Tracker ein
 *
 * Liest die Kopfzeilen des Reports (Datum, Firma, Rolle, Score, Status, Tracker-Notiz),
 * prüft, ob das Bewerbungspaket-PDF existiert, schreibt die TSV nach
 * batch/tracker-additions/ und ruft merge-tracker.mjs auf.
 *
 * Warum: TSV-Spalten, Reihenfolge (Status VOR Score) und das Linkformat `../reports/…`
 * wurden bisher pro Bewerbung von Hand gebaut; ein falscher Link ließ verify-pipeline
 * "Report not found" melden ([[project-tracker-report-link-format]]).
 *
 * Usage:
 *   node track-bewerbung.mjs <slug> [--dry-run]
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const CAREER_OPS = dirname(fileURLToPath(import.meta.url));
const DRY_RUN = process.argv.includes('--dry-run');
const slug = process.argv.slice(2).find((a) => !a.startsWith('--'));

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

if (!slug) fail('Usage: node track-bewerbung.mjs <slug> [--dry-run]');

const reportFile = readdirSync(resolve(CAREER_OPS, 'reports'))
  .filter((f) => new RegExp(`^\\d{3}-${slug}-\\d{4}-\\d{2}-\\d{2}\\.md$`).test(f))
  .sort()
  .pop();
if (!reportFile) fail(`Kein Report reports/NNN-${slug}-JJJJ-MM-TT.md gefunden (new-bewerbung.mjs legt ihn an).`);

const reportPath = resolve(CAREER_OPS, 'reports', reportFile);
let report = readFileSync(reportPath, 'utf-8');
const field = (k) => report.match(new RegExp(`^\\*\\*${k}:\\*\\* (.+)$`, 'm'))?.[1]?.trim() ?? '';

const num = Number(reportFile.slice(0, 3));
const entry = {
  date: field('Datum'),
  company: field('Firma'),
  role: field('Rolle'),
  status: field('Status') || 'Evaluated',
  score: field('Score').match(/^\d(?:\.\d)?\/5/)?.[0] ?? '',
  note: field('Tracker-Notiz'),
};

// Platzhalter aus dem Gerüst dürfen nicht im Tracker landen.
const missing = Object.entries(entry).filter(([, v]) => !v || /^<.*>$|<X\.X>/.test(v)).map(([k]) => k);
if (missing.length > 0) fail(`Report-Kopf unvollständig (${reportFile}): ${missing.join(', ')} — erst füllen.`);

const STATES = ['Evaluated', 'Applied', 'Responded', 'Interview', 'Offer', 'Rejected', 'Discarded', 'SKIP'];
if (!STATES.includes(entry.status)) fail(`Status "${entry.status}" ist nicht kanonisch (templates/states.yml): ${STATES.join(', ')}`);

// --- PDF: Paket vorhanden? Dann auch die PDF-Zeile im Report setzen. ---
const pdfFile = readdirSync(resolve(CAREER_OPS, 'output'))
  .filter((f) => f.startsWith(`bewerbungspaket-${slug}-`) && f.endsWith('.pdf'))
  .sort()
  .pop();
const pdfMark = pdfFile ? '✅' : '❌';
if (pdfFile && /^\*\*PDF:\*\* ❌/m.test(report)) {
  report = report.replace(/^\*\*PDF:\*\* .*$/m, `**PDF:** ✅ output/${pdfFile}`);
  if (!DRY_RUN) writeFileSync(reportPath, report);
}
if (!pdfFile && entry.status !== 'SKIP') console.warn(`⚠️  Kein output/bewerbungspaket-${slug}-*.pdf — Tracker bekommt ❌.`);

// Pipes würden die Markdown-Tabelle zerschneiden, Tabs die TSV.
const clean = (s) => s.replace(/[|\t\r\n]+/g, ' / ').trim();
// Linkformat ../reports/… (relativ zu data/), sonst meldet verify-pipeline "Report not found".
const tsv = [
  num, entry.date, clean(entry.company), clean(entry.role), entry.status, entry.score,
  pdfMark, `[${reportFile.slice(0, 3)}](../reports/${reportFile})`, clean(entry.note),
].join('\t');

const tsvPath = resolve(CAREER_OPS, `batch/tracker-additions/${num}-${slug}.tsv`);
writeFileSync(tsvPath, tsv + '\n');
console.log(`✓ TSV #${num}: ${entry.company} — ${entry.role} | ${entry.score} | ${entry.status} | PDF ${pdfMark}`);

const merge = spawnSync('node', [resolve(CAREER_OPS, 'merge-tracker.mjs'), ...(DRY_RUN ? ['--dry-run'] : [])],
  { encoding: 'utf-8', cwd: CAREER_OPS });
process.stdout.write(merge.stdout);
if (merge.stderr) process.stderr.write(merge.stderr);

// Im Trockenlauf bleibt nichts liegen, sonst würde der nächste echte Merge sie mitnehmen.
if (DRY_RUN && existsSync(tsvPath)) rmSync(tsvPath);
process.exitCode = merge.status ?? 1;
