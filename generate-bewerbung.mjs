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

const competenciesHtml = cv.competencies
  .map((c) => `<span class="competency-tag">${c}</span>`)
  .join('\n      ');

const projectsHtml = (cv.projects || [])
  .map(
    (p) => `<div class="project">
      <div class="project-row">
        <span class="project-title">${p.title}</span>
        <span class="project-stack">${p.stack}</span>
      </div>
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
const defaultExperience = [
  { company: 'GIS GmbH — Bonn', period: '11/2025 – 02/2026', role: '1st Level IT Support (Praktikum)',
    bullets: ['1st Level IT Support, Personalplanung und Zeiterfassung in strukturiertem Enterprise-Umfeld'] },
  { company: 'Vidinli Software — Bonn', period: '09/2025 – 10/2025', role: 'Frontend Developer (Praktikum)',
    bullets: ['Entwicklung des Frontends einer Shopping-Plattform mit <strong>React.js</strong> und <strong>TypeScript</strong> — Komponentenarchitektur, responsive UI, State-Management'] },
  { company: 'EMLAK AG — Köln', period: '11/2023 – 05/2024', role: 'IT-Praktikum (im Rahmen der Umschulung)',
    bullets: ['Unterstützung in IT-Systemen und Netzwerken — erste praktische Erfahrungen in IT-Infrastruktur'] },
  { company: 'Mobile Coffee Bar &amp; Catering — Bonn', period: '2020 – 2023', role: 'Gründer &amp; Geschäftsführer (Selbstständiger Unternehmer)',
    bullets: ['Gründung und Leitung eines Gastronomie-/Catering-Unternehmens — volle operative Verantwortung: Kundenbetreuung, Finanzen, Logistik, Team'] },
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
const certificatesHtml = FIXED_CERTIFICATES
  .map((c) => {
    const nameHtml = c.url
      ? `<a class="cert-link" href="${c.url}">${c.name}</a>`
      : c.name;
    const extraHtml = c.url2
      ? ` <span style="color:#bbb;font-size:11px;">·</span> <a class="cert-link" href="${c.url2}">${c.url2Label || 'Anhang'}</a>`
      : '';
    return `<div class="item-row"><span class="left">${nameHtml}${extraHtml}</span><span class="right">${c.date}</span></div>`;
  })
  .join('\n      ');

// --- Ausbildung: configurable via cv.education, else default. Nur DE-Template hat {{EDUCATION}}. ---
const defaultEducation = [
  { school: 'Clarusway', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
  { school: 'FAW', program: 'Fachinformatiker AE/SI (Umschulung)', date: '02/2023 – 01/2024' },
  { school: 'Universität Istanbul', program: 'Spanisch-Türkisch', date: '2009 – 2012' },
];
const educationHtml = (cv.education || defaultEducation)
  .map((e) => `<div class="item-row"><span class="left"><strong>${e.school}</strong> — <em>${e.program}</em></span><span class="right">${e.date}</span></div>`)
  .join('\n      ');

const experienceHtml = (cv.experience || defaultExperience)
  .map((j) => `<div class="job">
      <div class="job-company">${j.company}</div>
      <div class="job-meta">
        <span class="job-period">${j.period}</span>
        <span class="job-meta-sep">·</span>
        <span class="job-role">${j.role}</span>
      </div>
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
  .replace('{{COMPETENCIES}}', competenciesHtml)
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
