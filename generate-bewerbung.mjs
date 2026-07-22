#!/usr/bin/env node
/**
 * generate-bewerbung.mjs — End-to-end Bewerbungspaket generator
 *
 * Reads a company config file, renders CV + Anschreiben HTMLs from base templates,
 * injects the photo as base64, and produces three PDFs:
 *   - cv-{slug}-{date}.pdf
 *   - anschreiben-{slug}-{date}.pdf
 *   - bewerbungspaket-{slug}-{date}.pdf  (CV + Anschreiben merged)
 *
 * Usage:
 *   node generate-bewerbung.mjs companies/skr-reisen.mjs
 */

import { readFileSync, writeFileSync, existsSync, rmSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { spawnSync } from 'child_process';
import { PDFDocument } from 'pdf-lib';
import { validateAnschreiben } from './validate-anschreiben.mjs';
import { validateCV } from './validate-cv.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CAREER_OPS = __dirname;

// --- args ---
const configArg = process.argv[2];
if (!configArg) {
  console.error('Usage: node generate-bewerbung.mjs <config-file.mjs>');
  console.error('Example: node generate-bewerbung.mjs companies/skr-reisen.mjs');
  process.exit(1);
}

const configPath = resolve(CAREER_OPS, configArg);
if (!existsSync(configPath)) {
  console.error(`❌ Config not found: ${configPath}`);
  process.exit(1);
}

// --- load config ---
const config = (await import(pathToFileURL(configPath).href)).default;
const { slug, date, recipient, subject, cv, anschreiben, language = 'de', signatureWidth = '150px' } = config;
const cvTemplateFile = { en: 'templates/cv-base-en.html', tr: 'templates/cv-base-tr.html' }[language] || 'templates/cv-base.html';
const asTemplateFile = { en: 'templates/anschreiben-base-en.html', tr: 'templates/anschreiben-base-tr.html' }[language] || 'templates/anschreiben-base.html';

// Derive ISO date for filenames from German DD.MM.YYYY
const isoDate = (() => {
  const m = date.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : date;
})();

console.log(`\n📦 Generating Bewerbungspaket: ${slug} (${date})`);

// --- pre-flight: validate CV content rules ---
const { errors: cvErrors, warnings: cvWarnings } = await validateCV(config);
if (cvErrors.length > 0) {
  console.warn('\n⚠️  CV validation ERRORS (fix before sending):');
  cvErrors.forEach((e) => console.warn(`  ✗ ${e}`));
}
if (cvWarnings.length > 0) {
  console.warn('\n⚠️  CV validation warnings:');
  cvWarnings.forEach((w) => console.warn(`  • ${w}`));
}
if (cvErrors.length === 0 && cvWarnings.length === 0) {
  console.log('  ✓ CV validation passed');
} else {
  console.warn('  (continuing — review before sending)\n');
}

// --- pre-flight: validate Anschreiben content rules ---
const { errors: asErrors, warnings: asWarnings } = await validateAnschreiben(config);
if (asErrors.length > 0) {
  console.warn('\n⚠️  Anschreiben validation ERRORS (fix before sending):');
  asErrors.forEach((e) => console.warn(`  ✗ ${e}`));
}
if (asWarnings.length > 0) {
  console.warn('\n⚠️  Anschreiben validation warnings:');
  asWarnings.forEach((w) => console.warn(`  • ${w}`));
}
if (asErrors.length === 0 && asWarnings.length === 0) {
  console.log('  ✓ Anschreiben validation passed');
} else {
  console.warn('  (continuing PDF generation — review warnings before sending)\n');
};

// --- load photo as base64 ---
const photoPath = resolve(CAREER_OPS, 'data/1000090042.JPG');
if (!existsSync(photoPath)) {
  console.error(`❌ Photo not found: ${photoPath}`);
  process.exit(1);
}
const photoDataURI = `data:image/jpeg;base64,${readFileSync(photoPath).toString('base64')}`;

// --- load signature as base64 (used in Anschreiben above the name) ---
const signaturePath = resolve(CAREER_OPS, 'data/image2.png');
const signatureDataURI = existsSync(signaturePath)
  ? `data:image/png;base64,${readFileSync(signaturePath).toString('base64')}`
  : '';

// --- render CV HTML ---
const cvTemplate = readFileSync(resolve(CAREER_OPS, cvTemplateFile), 'utf-8');

// --- Profil: Fließtext, der die Person vorstellt (Recruiter-Feedback Juli 2026) ---
// Ersetzt die frühere Kernkompetenzen-Tagreihe, die eine Dopplung der Skills unten war.
// Fallback für Altkonfigs ohne cv.profil: die Kompetenzen als eine Schwerpunkte-Zeile.
const profilBody = cv.profil
  ? `<div class="profil">${cv.profil}</div>`
  : (cv.competencies?.length
      ? `<div class="profil"><strong>Schwerpunkte:</strong> ${cv.competencies.join(' · ')}</div>`
      : '');

const profilSection = profilBody
  ? `<div class="section avoid-break">
    <div class="section-title">Profil</div>
    ${profilBody}
  </div>`
  : '';

const projectsHtml = (cv.projects || [])
  .map(
    (p) => `<div class="project">
      <div class="project-head"><span class="project-title">${p.title}</span> <span class="project-stack">${p.stack}</span></div>
      <div class="project-desc">${p.desc}</div>
    </div>`
  )
  .join('\n\n    ');

// Ganze Projekte-Sektion nur rendern, wenn Projekte vorhanden (DE-Template nutzt {{PROJECTS_SECTION}}).
const projectsSection = projectsHtml.trim()
  ? `<div class="section avoid-break">
    <div class="section-title">Projekte</div>
    ${projectsHtml}
  </div>`
  : '';

const skillsHtml = cv.skills
  .map((s) => `<div class="skill-line"><strong>${s.category}:</strong> ${s.items}</div>`)
  .join('\n    ');

// --- Berufserfahrung: configurable via cv.experience, else default (Tech-CV) ---
// UNVERÄNDERLICHE REGELN (User 22.07.2026):
//   1. Reisegesucht.com (aktuell) steht IMMER drin — die Anschreiben sagen „Zurzeit arbeite ich
//      in einem Reisebüro", der CV muss das zeigen (Konsistenz-Lücke bis 22.07. behoben).
//   2. Jede Bullet-Beschreibung ist EINZEILIG im PDF (kurz und klar, kein Umbruch) —
//      wird nach der PDF-Erzeugung per pdftotext hart geprüft (checkAtsExtraction).
const defaultExperience = [
  { company: 'Reisegesucht.com — Köln', period: '03/2026 – heute', role: 'Frontend &amp; Marketing',
    bullets: ['Frontend-Design und Marketing für ein Reisebüro: Webseiten, Content, Kampagnen'] },
  { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
    bullets: ['1st Level IT Support, Personalplanung und Zeiterfassung im Enterprise-Umfeld'] },
  { company: 'Vidinli Software — Bonn', period: '09/2025 – 10/2025', role: 'Frontend Developer (Praktikum)',
    bullets: ['Entwicklung des Frontends einer Shopping-Plattform mit <strong>React.js</strong> und <strong>TypeScript</strong>'] },
  { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
    bullets: ['Unterstützung in IT-Systemen und Netzwerken — erste Praxis in IT-Infrastruktur'] },
  { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer (Selbstständiger Unternehmer)',
    bullets: ['Gründung und Leitung eines Catering-Unternehmens: Kunden, Finanzen, Logistik, Team'] },
];

// --- Sprachen: configurable via cv.languages, else default (generisch, alle Profile) ---
const defaultLanguages = 'Deutsch (fließend, C1) · Englisch (B1, sichere Verständigung) · Spanisch (gut) · Türkisch (Muttersprache)';
const languagesHtml = cv.languages || defaultLanguages;

// --- Zertifikate: FIXE LISTE (User-Regel 2026-07-10) — Configs dürfen sie NICHT überschreiben. ---
// Kein React-Eintrag (User 2026-07-10: "frontend zaten react"). `url` macht den Namen im PDF klickbar
// und öffnet das Zertifikat-PDF auf Google Drive (Chromium print-to-PDF übernimmt <a href> als
// Link-Annotation). `url2`/`url2Label` = optionaler Zweitlink in derselben Zeile (Full-Stack →
// zusätzlich Teilnahmebescheinigung). Drive-Ordner: 1BQ6Js3oXh0Uyh1sYgIy-MYNRs4BRJ_AV
// FAW-Zuordnung per PDF-Inhalt verifiziert: TQ1 = Grundlagen IT-Systeme (02–06/2023),
// Modul 2 = IT-Netzwerke (06–10/2023).
const FIXED_CERTIFICATES = [
  { name: 'Clarusway Full-Stack Developer', date: 'Aug 2025',
    url: 'https://drive.google.com/file/d/10fLH_HgUOGxnPRfje1O5OXpsW-w4DpRb/view',
    url2: 'https://drive.google.com/file/d/1xal7qwOSFA9uidU231C4UV1eU_2bGz0b/view', url2Label: 'Teilnahmebescheinigung' },
  { name: 'Clarusway Backend Developer', date: 'Mai 2025',
    url: 'https://drive.google.com/file/d/15Pyy4QBP8KtsM9-kWUK80XpI5DvzHadL/view' },
  { name: 'Clarusway Frontend Developer', date: 'Okt 2024',
    url: 'https://drive.google.com/file/d/1ikd4m-hYY_O26zkAFzrHQUwUWeTb53Cq/view' },
  { name: 'FAW Köln — IT-NETZWERKE', date: 'Okt 2023',
    url: 'https://drive.google.com/file/d/1LEuhcjcknBYtWZz0gBByTnzBnEL3S7Cs/view' },
  { name: 'FAW Köln — IT-SYSTEME', date: 'Jun 2023',
    url: 'https://drive.google.com/file/d/13JpdgdimzfU0HGgPvhHiaDTcbkMpPWyJ/view' },
];
if (cv.certificates) {
  console.warn('  ⚠ cv.certificates im Config wird IGNORIERT — Zertifikate sind fix (User-Regel 2026-07-10).');
}
// Datum LINKS vor dem Eintrag, im selben Textlauf (siehe Kommentar in cv-base.html).
const certificatesHtml = FIXED_CERTIFICATES
  .map((c) => {
    const nameHtml = c.url
      ? `<a class="cert-link" href="${c.url}">${c.name}</a>`
      : c.name;
    const extraHtml = c.url2
      ? ` <span style="color:#bbb;font-size:11px;">·</span> <a class="cert-link" href="${c.url2}">${c.url2Label || 'Anhang'}</a>`
      : '';
    return `<div class="entry-line"><span class="entry-date">${c.date}</span> <span class="entry-sep">·</span> ${nameHtml}${extraHtml}</div>`;
  })
  .join('\n      ');

// --- Ausbildung: configurable via cv.education, else default. Nur DE-Template hat {{EDUCATION}}. ---
const defaultEducation = [
  { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
  { school: 'FAW', program: 'Fachinformatiker AE/SI (Umschulung)', date: '02/2023 – 01/2024' },
  { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
];
const educationHtml = (cv.education || defaultEducation)
  .map((e) => `<div class="entry-line"><span class="entry-date">${e.date}</span> <span class="entry-sep">·</span> <strong>${e.school}</strong> — <em>${e.program}</em></div>`)
  .join('\n      ');

// Zeitraum zuerst und linksbündig (Recruiter-Feedback Juli 2026), aber inline
// im selben Textfluss wie der Eintrag — siehe Begründung in cv-base.html.
const experienceHtml = (cv.experience || defaultExperience)
  .map((j) => `<div class="entry">
      <div class="entry-head"><span class="entry-date">${j.period}</span> <span class="entry-sep">·</span> <span class="entry-title">${j.company}</span></div>
      <div class="entry-sub">${j.role}</div>
      <ul>${j.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
    </div>`)
  .join('\n\n    ');

const tagline = cv.tagline ?? '';
const cvHtml = cvTemplate
  .replace(
    '<div class="tagline">{{TAGLINE}}</div>',
    tagline ? `<div class="tagline">${tagline}</div>` : ''
  )
  .replace('{{PHOTO}}', photoDataURI)
  .replace('{{PROFIL_SECTION}}', profilSection)
  .replace('{{COMPETENCIES}}', '')
  .replace('{{EXPERIENCE}}', experienceHtml)
  .replace('{{PROJECTS}}', projectsHtml)
  .replace('{{PROJECTS_SECTION}}', projectsSection)
  .replace('{{SKILLS}}', skillsHtml)
  .replace('{{CERTIFICATES}}', certificatesHtml)
  .replace('{{EDUCATION}}', educationHtml)
  .replace('{{LANGUAGES}}', languagesHtml);

// Fix font paths from ../fonts/ to absolute (generate-pdf.mjs rewrites ./fonts/, not ../fonts/)
const cvHtmlFixed = cvHtml.replace(/url\(['"]?\.\.\/fonts\//g, "url('./fonts/");

const cvHtmlPath = resolve(CAREER_OPS, `output/cv-${slug}.html`);
writeFileSync(cvHtmlPath, cvHtmlFixed);
console.log(`  ✓ CV HTML rendered: output/cv-${slug}.html`);

// --- render Anschreiben HTML ---
const asTemplate = readFileSync(resolve(CAREER_OPS, asTemplateFile), 'utf-8');

const recipientHtml = recipient.map((line, i) =>
  i === 0 ? `<strong>${line}</strong>` : line
).join('<br>');

const paragraphsHtml = anschreiben.paragraphs
  .map((p) => `<p>${p}</p>`)
  .join('\n    ');

const defaultAnrede = { en: 'Dear Hiring Team,', tr: 'Sayın Yetkili,' }[language] || 'Sehr geehrte Damen und Herren,';
const anredeText = anschreiben.anrede || defaultAnrede;

const asHtml = asTemplate
  .replace('{{RECIPIENT}}', recipientHtml)
  .replace('{{DATE}}', date)
  .replace('{{SUBJECT}}', subject)
  .replace('{{ANREDE}}', anredeText)
  .replace('{{PARAGRAPHS}}', paragraphsHtml)
  .replace('{{SIGNATURE}}', signatureDataURI)
  .replace('{{SIGNATURE_WIDTH}}', signatureWidth);

const asHtmlFixed = asHtml.replace(/url\(['"]?\.\.\/fonts\//g, "url('./fonts/");

const asHtmlPath = resolve(CAREER_OPS, `output/anschreiben-${slug}.html`);
writeFileSync(asHtmlPath, asHtmlFixed);
console.log(`  ✓ Anschreiben HTML rendered: output/anschreiben-${slug}.html`);

// --- generate PDFs ---
function runPdf(htmlPath, pdfPath) {
  const res = spawnSync('node', [
    resolve(CAREER_OPS, 'generate-pdf.mjs'),
    htmlPath,
    pdfPath,
    '--format=a4',
  ], { encoding: 'utf-8', cwd: CAREER_OPS });
  if (res.status !== 0) {
    console.error(`❌ PDF generation failed for ${htmlPath}`);
    console.error(res.stderr || res.stdout);
    process.exit(1);
  }
}

/**
 * Liest den fertigen PDF-Text so aus, wie ein ATS-Parser ihn sieht, und prüft die
 * zwei Fehler, die vor dem Umbau Juli 2026 unbemerkt durchgingen:
 *   - Sektionsüberschriften, die durch letter-spacing zu „Z E R T I F I K AT E"
 *     zerfallen und dadurch für die Bewerbungssoftware unsichtbar werden
 *   - Zeiträume, die beim Extrahieren von ihrem Eintrag getrennt werden
 *
 * Weicher Check: ohne pdftotext im PATH wird er übersprungen, nicht erzwungen.
 *
 * Zusätzlich (User-Regel 22.07.2026, unveränderlich): `oneLiners` sind Texte, die im
 * gerenderten PDF auf GENAU EINER Zeile stehen müssen — die Schwerpunkte-Zeile und jede
 * Berufserfahrungs-Beschreibung. Bricht eine um, ist das ein Verstoß.
 */
function checkAtsExtraction(pdfPath, { headings, pairs, oneLiners = [] }) {
  const res = spawnSync('pdftotext', ['-enc', 'UTF-8', '-f', '1', '-l', '1', pdfPath, '-'], { encoding: 'utf-8' });
  if (res.error || res.status !== 0) {
    console.log('  ○ ATS-Extraktionsprüfung übersprungen (pdftotext nicht verfügbar)');
    return;
  }

  const norm = (s) => s.replace(/[‐-―−]/g, '-').replace(/\s+/g, ' ').trim();
  const text = norm(res.stdout);
  const lines = res.stdout.split('\n').map(norm).filter(Boolean);
  const problems = [];

  for (const h of headings) {
    if (text.toLowerCase().includes(h.toLowerCase())) continue;
    // Gesperrt gesetzt? Dann steht zwischen allen Buchstaben ein Leerzeichen.
    const spaced = h.split('').join('\\s*');
    problems.push(
      new RegExp(spaced, 'i').test(text)
        ? `Überschrift "${h}" wird gesperrt extrahiert (letter-spacing) — für ATS unlesbar`
        : `Überschrift "${h}" fehlt im extrahierten Text`
    );
  }

  for (const { date, entry, label } of pairs) {
    const d = norm(date);
    const e = norm(entry);
    if (!lines.some((l) => l.includes(d) && l.includes(e))) {
      problems.push(`"${label}": Zeitraum "${date}" steht nicht in derselben Zeile wie der Eintrag — ATS ordnet das Datum nicht zu`);
    }
  }

  // Einzeiligkeit: HTML-Tags/Entities raus, dann muss der komplette Text in EINER Zeile stehen.
  for (const { label, text } of oneLiners) {
    const plain = norm(text.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&'));
    if (!lines.some((l) => l.includes(plain))) {
      problems.push(`${label} bricht im PDF auf mehrere Zeilen um — muss einzeilig sein (kürzen!): "${plain.slice(0, 60)}…"`);
    }
  }

  if (problems.length === 0) {
    console.log(`  ✓ ATS-Extraktion: Überschriften intakt, alle ${pairs.length} Zeiträume korrekt zugeordnet`);
  } else {
    console.warn('  ⚠️  ATS-Extraktionsprobleme:');
    problems.forEach((p) => console.warn(`     ✗ ${p}`));
  }
}

const cvPdfPath = resolve(CAREER_OPS, `output/cv-${slug}-${isoDate}.pdf`);
const asPdfPath = resolve(CAREER_OPS, `output/anschreiben-${slug}-${isoDate}.pdf`);
const paketPdfPath = resolve(CAREER_OPS, `output/bewerbungspaket-${slug}-${isoDate}.pdf`);

runPdf(cvHtmlPath, cvPdfPath);
console.log(`  ✓ CV PDF: output/cv-${slug}-${isoDate}.pdf`);

// --- 1-page rule: verify CV fits on exactly 1 page ---
const cvDoc = await PDFDocument.load(readFileSync(cvPdfPath));
const cvPageCount = cvDoc.getPageCount();
if (cvPageCount > 1) {
  console.warn(`  ⚠️  CV is ${cvPageCount} pages — MUST be exactly 1 page A4! Reduce content (remove projects, shorten skill items, reduce experience entries).`);
} else {
  console.log(`  ✓ CV page count: 1 page`);
}

checkAtsExtraction(cvPdfPath, {
  headings: [
    ...(profilSection ? ['PROFIL'] : []),
    'BERUFSERFAHRUNG',
    ...(projectsSection ? ['PROJEKTE'] : []),
    'AUSBILDUNG', 'ZERTIFIKATE', 'KENNTNISSE',
  ],
  pairs: [
    ...(cv.experience || defaultExperience).map((j) => ({ date: j.period, entry: j.company.replace(/&amp;/g, '&'), label: j.company.replace(/&amp;/g, '&') })),
    ...(cv.education || defaultEducation).map((e) => ({ date: e.date, entry: e.school, label: e.school })),
    ...FIXED_CERTIFICATES.map((c) => ({ date: c.date, entry: c.name, label: c.name })),
  ],
  // Unveränderliche Einzeiligkeits-Regel (User 22.07.2026):
  // Schwerpunkte-Zeile + jede Berufserfahrungs-Bullet dürfen nicht umbrechen.
  oneLiners: [
    ...(!cv.profil && cv.competencies?.length
      ? [{ label: 'Schwerpunkte-Zeile', text: `Schwerpunkte: ${cv.competencies.join(' · ')}` }]
      : []),
    ...(cv.experience || defaultExperience).flatMap((j) =>
      (j.bullets ?? []).map((b) => ({ label: `Bullet "${j.company.replace(/&amp;/g, '&')}"`, text: b }))),
  ],
});

runPdf(asHtmlPath, asPdfPath);
console.log(`  ✓ Anschreiben PDF: output/anschreiben-${slug}-${isoDate}.pdf`);

// --- merge into Bewerbungspaket (CV first, then Anschreiben) ---
const merged = await PDFDocument.create();
for (const inPath of [cvPdfPath, asPdfPath]) {
  const doc = await PDFDocument.load(readFileSync(inPath));
  const pages = await merged.copyPages(doc, doc.getPageIndices());
  pages.forEach((p) => merged.addPage(p));
}
const out = await merged.save();
writeFileSync(paketPdfPath, out);
console.log(`  ✓ Bewerbungspaket: output/bewerbungspaket-${slug}-${isoDate}.pdf (${(out.length / 1024).toFixed(0)} KB, ${merged.getPageCount()} pages)`);

// --- cleanup: remove intermediate HTML render files, keep only the 3 PDFs ---
for (const tmp of [cvHtmlPath, asHtmlPath]) {
  try { if (existsSync(tmp)) rmSync(tmp); } catch { /* non-fatal */ }
}

console.log(`\n✅ Done! Bewerbungspaket bereit für ${slug}.\n`);
