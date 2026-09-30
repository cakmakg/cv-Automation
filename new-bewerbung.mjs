#!/usr/bin/env node
/**
 * new-bewerbung.mjs — legt eine neue Bewerbung in EINEM Aufruf an
 *
 * Warum: Pro Bewerbung wurden bisher per Hand die nächste Tracker-Nummer gesucht, das Datum
 * abgelesen, eine alte Config kopiert und ein Report von Grund auf geschrieben. Die
 * Score-Analyse stand dabei doppelt: als 40-Zeilen-Kopfkommentar in der Config UND im Report.
 * Jetzt: Analyse NUR im Report, die Config trägt nur einen Verweis darauf.
 *
 * Usage:
 *   node new-bewerbung.mjs <slug> <profil> [jds/<datei>.md]
 *   Profile: bereich1 | it-support | quereinstieg   (siehe profiles.mjs)
 *   Ohne Preset (Tourismus, Marketing, Vertrieb): Profil "ohne"
 *
 * Legt an:
 *   companies/<slug>.mjs               aus companies/_vorlage.mjs
 *   reports/NNN-<slug>-<datum>.md      Report-Gerüst (A–E + Tracker-Felder)
 * Danach: Config füllen → generate --check → generate → node track-bewerbung.mjs <slug>
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { PROFILES } from './profiles.mjs';

const CAREER_OPS = dirname(fileURLToPath(import.meta.url));
const [slug, profileArg, jdArg] = process.argv.slice(2);

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

if (!slug || !profileArg) {
  fail(`Usage: node new-bewerbung.mjs <slug> <profil> [jds/<datei>.md]\n   Profile: ${Object.keys(PROFILES).join(' | ')} | ohne`);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(`Slug "${slug}" — nur a-z, 0-9 und Bindestriche (firma-rolle-ort).`);
if (profileArg !== 'ohne' && !PROFILES[profileArg]) fail(`Unbekanntes Profil "${profileArg}". Verfügbar: ${Object.keys(PROFILES).join(', ')}, ohne`);

const configPath = resolve(CAREER_OPS, `companies/${slug}.mjs`);
if (existsSync(configPath)) fail(`companies/${slug}.mjs existiert schon — Duplikat? Nichts überschrieben.`);

let jd = null;
if (jdArg) {
  const jdPath = resolve(CAREER_OPS, jdArg);
  if (!existsSync(jdPath)) fail(`${jdArg} nicht gefunden.`);
  jd = readFileSync(jdPath, 'utf-8');
}

// --- Nächste Nummer: Maximum aus Tracker, Reports und noch nicht gemergten TSVs ---
// Nur die Zeilenanfänge lesen, applications.md hat Zeilen mit mehreren KB Notizen.
const nums = [];
const appsPath = resolve(CAREER_OPS, 'data/applications.md');
if (existsSync(appsPath)) {
  for (const m of readFileSync(appsPath, 'utf-8').matchAll(/^\| (\d+) \|/gm)) nums.push(Number(m[1]));
}
for (const f of readdirSync(resolve(CAREER_OPS, 'reports'))) {
  const m = f.match(/^(\d{3})-/);
  if (m) nums.push(Number(m[1]));
}
const additions = resolve(CAREER_OPS, 'batch/tracker-additions');
if (existsSync(additions)) {
  for (const f of readdirSync(additions)) {
    const m = f.match(/^(\d+)-.*\.tsv$/);
    if (m) nums.push(Number(m[1]));
  }
}
const num = Math.max(0, ...nums) + 1;
const nnn = String(num).padStart(3, '0');

// Datum aus der Systemuhr, nie aus datePosted der Anzeige ([[feedback-datum-immer-aus-systemkontext]]).
const now = new Date();
const iso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
const reportRel = `reports/${nnn}-${slug}-${iso}.md`;

// --- Duplikat-Warnung: gleiche Firma schon im Tracker? ---
// Nur die Firmenspalte und nur als ganzes Wort: "obi" traf sonst "mobivention" und die Notizen.
const companyGuess = slug.split('-')[0];
const companyRe = new RegExp(`\\b${companyGuess}\\b`, 'i');
if (existsSync(appsPath)) {
  const hits = readFileSync(appsPath, 'utf-8').split('\n')
    .filter((l) => /^\| \d+ \|/.test(l) && companyRe.test(l.split('|')[3] ?? ''))
    .map((l) => l.split('|').slice(1, 5).map((s) => s.trim()).join(' | '));
  if (hits.length > 0) {
    console.log(`⚠️  "${companyGuess}" steht schon im Tracker — Duplikat prüfen:`);
    hits.slice(0, 5).forEach((h) => console.log(`     ${h}`));
  }
}

// --- Felder aus der Anzeige übernehmen (von fetch-jd.mjs geschrieben) ---
const jdField = (k) => jd?.match(new RegExp(`^\\*\\*${k}:\\*\\* (.+)$`, 'm'))?.[1]?.trim() ?? '';
const jdTitle = jd?.match(/^# (.+?)(?: — .+)?$/m)?.[1] ?? '';
const company = jdField('Firma');
const url = jdField('URL');

// Gendertags gehören nicht in den Betreff: (m/w/d), (w/m/x), (gn*), (alle Geschlechter), (all genders).
const GENDER_TAG = /\s*\((?:[mwdxfgn*]\s*\/?\s*)+\)|\s*\((?:alle Geschlechter|all genders)\)/gi;

// --- Config aus der Vorlage ---
const vorlage = readFileSync(resolve(CAREER_OPS, 'companies/_vorlage.mjs'), 'utf-8');
const configBody = vorlage
  .slice(vorlage.indexOf('import '))
  .replace(/profile: '[^']*',/, profileArg === 'ohne' ? '' : `profile: '${profileArg}',`)
  .replace(/slug: '[^']*',/, `slug: '${slug}',`)
  .replace(/subject: '[^']*',/, `subject: 'Bewerbung als ${(jdTitle || 'ROLLE').replace(GENDER_TAG, '').trim().replace(/'/g, "\\'")}',`);
const configHead = [
  `// ${company || '<Firma>'} — ${jdTitle || '<Rolle>'}`,
  `// Analyse, Score, Adresse und Quellen: ${reportRel}${jdArg ? `  |  Anzeige: ${jdArg}` : ''}`,
  `// Run: node generate-bewerbung.mjs companies/${slug}.mjs --check`,
  '',
].join('\n');
const configText = profileArg === 'ohne'
  // Ohne Preset: Vorlage liefert kein CV, deshalb Hinweis statt stillem Fehler.
  ? configHead + '// OHNE PRESET: cv-Block (skills, education, languages …) aus der letzten Config dieses Typs übernehmen.\n' + configBody
  : configHead + configBody;
writeFileSync(configPath, configText);

// --- Report-Gerüst ---
const report = `# Bewertung: ${company || '<Firma>'} — ${jdTitle || '<Rolle>'}

**Datum:** ${iso}
**Firma:** ${company || '<Firma, wie im Tracker>'}
**Rolle:** ${jdTitle || '<Rolle, wie im Tracker>'}
**Archetyp:** ${profileArg === 'ohne' ? '<Profil>' : PROFILES[profileArg].label}
**Score:** <X.X>/5
**URL:** ${url || '<URL>'}
**Legitimacy:** <✅ Direkter Arbeitgeber / ⚠️ Personaldienstleister> — <juristischer Name, Adresse, HRB>
**PDF:** ❌ (wird nach dem Generate gesetzt)
**Tracker-Notiz:** <eine Zeile: Standort, Arbeitgeber-Typ, was trägt, was fehlt, Ansprechpartner>
**Status:** Evaluated

---

## A) Rollen-Zusammenfassung

| Feld | Wert |
|------|------|
| Aufgaben | |
| Profil | |
| Arbeitgeber | |
| Standort | |
| Vertrag | |
| Gehalt | |
| Kontakt | |

## B) Passung

1. 🟢

## C) Lücken

- ⚠️

## D) Anschreiben-Linie

| # | Inhalt |
|---|---|
| P1 | |

## E) Empfehlung

`;
writeFileSync(resolve(CAREER_OPS, reportRel), report);

console.log(`\n✓ #${num} angelegt (${iso})`);
console.log(`  companies/${slug}.mjs   Profil: ${profileArg}`);
console.log(`  ${reportRel}`);
console.log(`\nNächste Schritte:`);
console.log(`  1. Report A–E + Score + Tracker-Notiz füllen, Config füllen (Kurzkarte: kurzkarten/${profileArg === 'ohne' ? '_alle' : profileArg}.md)`);
console.log(`     Förderzusage-Absatz? → den User FRAGEN, nie von selbst einsetzen (Regel 29.09.2026)`);
console.log(`  2. node generate-bewerbung.mjs companies/${slug}.mjs --check   → bis ✅`);
console.log(`  3. node generate-bewerbung.mjs companies/${slug}.mjs`);
console.log(`  4. node track-bewerbung.mjs ${slug}`);
