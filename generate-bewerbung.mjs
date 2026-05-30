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

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { spawnSync } from 'child_process';
import { PDFDocument } from 'pdf-lib';

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
const { slug, date, recipient, subject, cv, anschreiben, language = 'de' } = config;
const cvTemplateFile = language === 'en' ? 'templates/cv-base-en.html' : 'templates/cv-base.html';
const asTemplateFile = language === 'en' ? 'templates/anschreiben-base-en.html' : 'templates/anschreiben-base.html';

// Derive ISO date for filenames from German DD.MM.YYYY
const isoDate = (() => {
  const m = date.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : date;
})();

console.log(`\n📦 Generating Bewerbungspaket: ${slug} (${date})`);

// --- load photo as base64 ---
const photoPath = resolve(CAREER_OPS, 'data/1000090042.JPG');
if (!existsSync(photoPath)) {
  console.error(`❌ Photo not found: ${photoPath}`);
  process.exit(1);
}
const photoDataURI = `data:image/jpeg;base64,${readFileSync(photoPath).toString('base64')}`;

// --- render CV HTML ---
const cvTemplate = readFileSync(resolve(CAREER_OPS, cvTemplateFile), 'utf-8');

const competenciesHtml = cv.competencies
  .map((c) => `<span class="competency-tag">${c}</span>`)
  .join('\n      ');

const projectsHtml = cv.projects
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

const skillsHtml = cv.skills
  .map((s) => `<div class="skill-line"><strong>${s.category}:</strong> ${s.items}</div>`)
  .join('\n    ');

const cvHtml = cvTemplate
  .replace('{{TAGLINE}}', cv.tagline)
  .replace('{{PHOTO}}', photoDataURI)
  .replace('{{COMPETENCIES}}', competenciesHtml)
  .replace('{{PROJECTS}}', projectsHtml)
  .replace('{{SKILLS}}', skillsHtml);

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

const defaultAnrede = language === 'en' ? 'Dear Hiring Team,' : 'Sehr geehrte Damen und Herren,';
const anredeText = anschreiben.anrede || defaultAnrede;

const asHtml = asTemplate
  .replace('{{RECIPIENT}}', recipientHtml)
  .replace('{{DATE}}', date)
  .replace('{{SUBJECT}}', subject)
  .replace('{{ANREDE}}', anredeText)
  .replace('{{PARAGRAPHS}}', paragraphsHtml);

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

console.log(`\n✅ Done! Bewerbungspaket bereit für ${slug}.\n`);
