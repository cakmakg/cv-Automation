#!/usr/bin/env node
/**
 * generate-cv-2page.mjs — Standalone 2-page CV generator for Gökhan Cakmak
 *
 * Creates a comprehensive 2-page A4 PDF with all projects, skills, and current data.
 * One-time use — NOT part of the Bewerbungspaket pipeline.
 *
 * Usage: node generate-cv-2page.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CAREER_OPS = __dirname;

const TODAY = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
const OUTPUT = resolve(CAREER_OPS, 'output/cv-gokhan-cakmak-2page.pdf');
const FONT_DIR = resolve(CAREER_OPS, 'fonts');

// --- Fonts as base64 ---
const fonts = {
  spaceGroteskLatin: readFileSync(resolve(FONT_DIR, 'space-grotesk-latin.woff2')).toString('base64'),
  spaceGroteskExt:   readFileSync(resolve(FONT_DIR, 'space-grotesk-latin-ext.woff2')).toString('base64'),
  dmSansLatin:       readFileSync(resolve(FONT_DIR, 'dm-sans-latin.woff2')).toString('base64'),
  dmSansExt:         readFileSync(resolve(FONT_DIR, 'dm-sans-latin-ext.woff2')).toString('base64'),
};

// --- Photo as base64 ---
const photoPath = resolve(CAREER_OPS, 'data/1000090042.JPG');
const photoDataURI = `data:image/jpeg;base64,${readFileSync(photoPath).toString('base64')}`;

// ─── CV CONTENT ──────────────────────────────────────────────────────────────

const SUMMARY = `<p>Ich baue Full-Stack-Anwendungen mit React, Node.js und TypeScript und entwerfe darauf aufbauend KI-Systeme, die eigenständig arbeiten. Der Schwerpunkt liegt auf Multi-Agent-Architekturen, ereignisgesteuerten LLM-Workflows und Multi-Tenant-SaaS-Plattformen für Geschäftsprozesse.</p>
<p>KI nutze ich dabei nicht nur als Anwender. Ich baue deterministische State Machines mit LangGraph, verteile Aufgaben je nach Anforderung auf Claude, Gemini oder OpenAI und verbinde die Agenten über n8n und Webhooks mit Gmail, Slack und Social-Media-Kanälen.</p>
<p>Damit die Ergebnisse verlässlich bleiben, arbeite ich mit RAG über MongoDB Atlas Vector Search, mit Critic-Agents für die automatische Qualitätsprüfung und mit Human-in-the-Loop-Freigaben an kritischen Stellen. Kostenkontrolle gehört dazu: Der Token-Verbrauch wird pro Mandant erfasst und über Stripe abgerechnet.</p>`;

const EXPERIENCE = [
  {
    company: 'Reisegesucht.com — Bonn',
    period: '01/2026 – heute',
    role: 'Frontend-Design &amp; Marketing (Reisebüro)',
    bullets: [
      'Web-Content-Gestaltung, Social-Media-Betreuung und Kundenkontakt im laufenden Betrieb',
    ],
  },
  {
    company: 'GIS GmbH — Bonn',
    period: '11/2025 – 02/2026',
    role: '1st Level IT Support (Praktikum)',
    bullets: [
      '1st Level IT Support, Personalplanung und Zeiterfassung im Enterprise-Umfeld',
    ],
  },
  {
    company: 'Vidinli Software — Bonn',
    period: '09/2025 – 10/2025',
    role: 'Frontend Developer (Praktikum)',
    bullets: [
      'Frontend-Entwicklung einer Shopping-Plattform mit <strong>React.js</strong> und <strong>TypeScript</strong> — Komponentenarchitektur, responsive UI, State-Management',
    ],
  },
  {
    company: 'Clarusway Akademie — Bonn',
    period: '05/2025 – 08/2025',
    role: 'Full Stack Development (Praktikum)',
    bullets: [
      'Projektarbeit und praktische Full-Stack-Entwicklung im Rahmen der Umschulung',
    ],
  },
  {
    company: 'EMLAK AG — Köln',
    period: '11/2023 – 05/2024',
    role: 'IT-Praktikum (im Rahmen der Umschulung)',
    bullets: [
      'Unterstützung in IT-Systemen und Netzwerken — IT-Infrastruktur und Support-Workflows',
    ],
  },
  {
    company: 'Mobile Coffee Bar &amp; Catering — Bonn',
    period: '2020 – 2023',
    role: 'Gründer &amp; Geschäftsführer (Selbstständig)',
    bullets: [
      'Gründung und vollständige operative Leitung — Kundenbetreuung, Finanzen, Logistik, Team',
    ],
  },
];

const PROJECTS = [
  {
    title: 'AI Orchestra — Multi-Tenant Autonomous Agent Swarm',
    stack: 'LangGraph · Claude 3.5 · Gemini · MongoDB Atlas Vector Search · n8n · Express.js · Stripe · React',
    desc: 'Hub-and-Spoke-System mit 10 spezialisierten, autonomen KI-Agenten (CEO, CTO, Writer, Analyst, CMO u. a.) basierend auf LangGraph State-Machines zur End-to-End-Automatisierung von Unternehmensprozessen (Kunden-Support, R&amp;D, Content Creation). 3072-dim. RAG-Vektordatenbank (MongoDB Atlas Search + Gemini) eliminiert KI-Halluzinationen. n8n-Nervensystem für Echtzeit-Integration von Gmail, Slack, YouTube, Discord. Multi-Tenant-Architektur mit HITL-Freigabeprozess und CFO-Modul: mikroskopische LLM-Token-Kostenkalkulation + automatische Abrechnung via Stripe.',
  },
  {
    title: 'Autonomous SecOps Agent — KI-Cyber-Security-Command-Center',
    stack: 'LangGraph · AWS SageMaker (RCF) · AWS WAF · MCP-Server · Next.js 14 · React Flow · AES-256-GCM',
    desc: 'LangGraph-Pipeline: ThreatAnalyzer → InputGuardrail → HITLGate → AutoMitigator / Strategist → IncidentWriter → QACritic. AWS SageMaker RCF für Anomalie-Scoring auf Security-Logs; AWS WAF Auto-Mitigation (IP-Sperrung) mit 15-min HITL-Approval-Timeout. MCP-Server (stdio) für SageMaker / WAF / CloudTrail-Tools. Threat-Enrichment via VirusTotal, AbuseIPDB, Shodan. Multi-Tenant RBAC (super_admin / admin / analyst), AES-256-GCM Tenant-Secrets, Audit-Log. Real-time-Layer: WebSocket + SSE, React Flow Agent-Graph.',
  },
  {
    title: 'werbung-otomation — Multi-Tenant AI-Werbe-Pipeline',
    stack: 'Anthropic Managed Agents · FastAPI · fal.ai (Veo 3 · Kling v3) · YAML Policy Engine · React',
    desc: 'Multi-Tenant-Architektur (1 Tenant = 1 Konfigurationsordner, B2B-SaaS-ready). Pipeline aus 8 Anthropic-Managed-Agents: Classifier, Scraper, Analyzer, Ad-Copy, Compliance, Creative, Orchestrator. Bild- und Video-Generierung über fal.ai (Nano Banana 2, Veo 3, Kling v3). Smart Mode: Classifier-Agent + Sanity-Checks + Retry-Logik + Opus-Escalation. YAML Policy Engine mit Tenant-Overrides; FastAPI + React Control Panel. Aktive Sektoren: Immobilien Deutschland, Tourismus.',
  },
  {
    title: 'Otonom-Travelagency — Vollautonome KI-Reiseagentur',
    stack: 'LangGraph · Amadeus API · Hotelbeds · ChromaDB · Stripe · Twilio · TypeScript · FastAPI · Next.js',
    desc: 'LangGraph 8-Node-Pipeline mit HITL-Approval-Gate bei kritischen Buchungen. Echte API-Integrationen: Amadeus (Flüge), Hotelbeds (Hotels), Stripe (Payment), Twilio (WhatsApp). ChromaDB RAG für Destinationsdaten (Türkei, Spanien, Griechenland, Zypern). GDPR-konforme PII-Maskierung (E-Mail, IBAN, Kreditkarte, Pass) vor jedem LLM-Aufruf. AES-256-GCM-Verschlüsselung sensibler Tenant-Credentials. Monorepo: TypeScript Node.js Gateway + Python FastAPI Agent-Service + Next.js Frontend.',
  },
];

const EDUCATION = [
  { school: 'Clarusway Akademie Bonn', program: 'Full Stack Web Developer (Umschulung)', date: '07/2024 – 08/2025' },
  { school: 'FAW Fortbildungsakademie Bonn', program: 'Fachinformatiker Systemintegration (Umschulung)', date: '02/2023 – 01/2024' },
  { school: 'Universität Istanbul', program: 'Spanisch-Türkisch Übersetzung', date: '2009 – 2012' },
];

const CERTIFICATES = [
  { name: 'Clarusway Full-Stack Developer', date: 'Aug 2025', url: 'https://drive.google.com/file/d/10fLH_HgUOGxnPRfje1O5OXpsW-w4DpRb/view' },
  { name: 'Clarusway Backend Developer', date: 'Mai 2025', url: 'https://drive.google.com/file/d/15Pyy4QBP8KtsM9-kWUK80XpI5DvzHadL/view' },
  { name: 'Clarusway React Developer', date: 'Jan 2025', url: 'https://drive.google.com/file/d/1q7TW7VDy15WMHtXqhXuuoHvP0BVqx5qe/view' },
  { name: 'Clarusway Frontend Developer', date: 'Okt 2024', url: 'https://drive.google.com/file/d/1ikd4m-hYY_O26zkAFzrHQUwUWeTb53Cq/view' },
  { name: 'FAW Köln — IT-NETZWERKE', date: 'Okt 2023', url: 'https://drive.google.com/file/d/1LEuhcjcknBYtWZz0gBByTnzBnEL3S7Cs/view' },
  { name: 'FAW Köln — IT-SYSTEME', date: 'Jun 2023', url: 'https://drive.google.com/file/d/13JpdgdimzfU0HGgPvhHiaDTcbkMpPWyJ/view' },
];

const SKILLS = [
  { cat: 'AI & Agentic Systems', items: 'LangGraph, Multi-Agent-Orchestrierung (10+ Agenten), Anthropic Managed Agents, RAG, HITL, Critic-Agents, Event-Driven AI, MCP (Model Context Protocol)' },
  { cat: 'LLM-APIs', items: 'Anthropic Claude (claude-opus-4, sonnet-4), Google Gemini, OpenAI GPT — Model Routing, Token-Kostenoptimierung' },
  { cat: 'Cloud & ML', items: 'AWS Bedrock, AWS SageMaker (RCF Anomalie-Scoring), AWS WAF Auto-Mitigation, fal.ai (Veo 3, Kling v3, Nano Banana 2)' },
  { cat: 'Automatisierung', items: 'n8n Workflow Automation, Webhook-Design, API-Orchestrierung, Pipeline-Design, Stripe API (FinOps)' },
  { cat: 'Backend', items: 'Node.js, Express.js, Next.js, FastAPI (Python 3.11+), TypeScript, Event-Driven Architecture, REST & WebSocket' },
  { cat: 'Frontend', items: 'React.js, Next.js 14, TypeScript, Redux, Zustand, React Flow, TailwindCSS, SASS, Material-UI, Responsive Design' },
  { cat: 'Datenbanken', items: 'MongoDB, MongoDB Atlas Vector Search (3072-dim.), ChromaDB (RAG), SQL, Firebase' },
  { cat: 'API-Integrationen', items: 'Amadeus, Hotelbeds, Stripe, Twilio, VirusTotal, AbuseIPDB, Shodan, fal.ai, Gmail, Slack' },
  { cat: 'Sicherheit', items: 'AES-256-GCM Verschlüsselung, GDPR PII-Masking, Multi-Tenant RBAC, Audit-Logging, JWT, OAuth' },
  { cat: 'DevOps & Tools', items: 'Docker, CI/CD-Pipelines, Linux, Git/GitHub, Playwright, npm/pnpm, Agile/Scrum, Jira' },
];

const LANGUAGES = 'Deutsch (C1, fließend) · Englisch (B1, sichere Verständigung) · Spanisch (gut) · Türkisch (Muttersprache)';

// ─── HTML BUILDER ─────────────────────────────────────────────────────────────

const experienceHtml = EXPERIENCE.map(j => `
  <div class="job">
    <div class="job-company">${j.company}</div>
    <div class="job-meta">
      <span class="job-period">${j.period}</span>
      <span class="job-meta-sep">·</span>
      <span class="job-role">${j.role}</span>
    </div>
    <ul>${j.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
  </div>`).join('');

const projectsHtml = PROJECTS.map(p => `
  <div class="project avoid-break">
    <div class="project-row">
      <span class="project-title">${p.title}</span>
    </div>
    <div class="project-stack">${p.stack}</div>
    <div class="project-desc">${p.desc}</div>
  </div>`).join('');

// Stacked layout (not space-between): the narrow two-col column wraps long program
// names badly when date and text compete for the same line.
const educationHtml = EDUCATION.map(e => `
  <div class="edu-item">
    <div class="edu-school">${e.school}</div>
    <div class="edu-program">${e.program}</div>
    <div class="edu-date">${e.date}</div>
  </div>`).join('');

const certsHtml = CERTIFICATES.map(c => `
  <div class="item-row">
    <span class="left"><a class="cert-link" href="${c.url}">${c.name}</a></span>
    <span class="right">${c.date}</span>
  </div>`).join('');

const skillsHtml = SKILLS.map(s => `
  <div class="skill-line"><strong>${s.cat}:</strong> ${s.items}</div>`).join('');

// ─── FULL HTML ────────────────────────────────────────────────────────────────

const html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>Gökhan Cakmak — Lebenslauf</title>
<style>
  @font-face { font-family: 'Space Grotesk'; src: url('data:font/woff2;base64,${fonts.spaceGroteskLatin}') format('woff2'); font-weight: 300 700; }
  @font-face { font-family: 'Space Grotesk'; src: url('data:font/woff2;base64,${fonts.spaceGroteskExt}') format('woff2'); font-weight: 300 700; }
  @font-face { font-family: 'DM Sans'; src: url('data:font/woff2;base64,${fonts.dmSansLatin}') format('woff2'); font-weight: 100 1000; }
  @font-face { font-family: 'DM Sans'; src: url('data:font/woff2;base64,${fonts.dmSansExt}') format('woff2'); font-weight: 100 1000; }

  @page { size: A4; margin: 13mm 15mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: 'DM Sans', sans-serif; font-size: 11.5px; line-height: 1.42; color: #1a1a2e; background: #fff; }

  .header { display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: center; margin-bottom: 9px; }
  .header-left h1 { font-family: 'Space Grotesk', sans-serif; font-size: 29px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; color: #1a1a2e; }
  .header-left .tagline { font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 600; color: hsl(270, 72%, 40%); margin-top: 3px; }
  .header-left .contact-row { display: flex; flex-wrap: wrap; gap: 2px 10px; font-size: 11.5px; color: #333; margin-top: 7px; }
  .header-left .contact-row a { color: #333; text-decoration: none; white-space: nowrap; }
  .header-left .contact-row .sep { color: #aaa; }

  .photo-frame { width: 92px; height: 115px; overflow: hidden; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); border: 2px solid hsl(187, 50%, 88%); flex-shrink: 0; }
  .photo-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }

  .header-gradient { height: 3px; background: linear-gradient(to right, hsl(187, 74%, 32%), hsl(270, 70%, 45%)); border-radius: 2px; margin-bottom: 9px; }

  .section { margin-bottom: 9px; }
  .section-title { font-family: 'Space Grotesk', sans-serif; font-size: 13.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: hsl(187, 80%, 24%); border-bottom: 1.5px solid hsl(187, 45%, 78%); padding-bottom: 3px; margin-bottom: 5px; }

  .summary-text { font-size: 12.5px; color: #1f1f2e; line-height: 1.5; }
  .summary-text p { margin-bottom: 5px; }
  .summary-text p:last-child { margin-bottom: 0; }

  .job { margin-bottom: 7px; }
  .job-company { font-family: 'Space Grotesk', sans-serif; font-size: 13.5px; font-weight: 700; color: hsl(270, 72%, 40%); display: block; }
  .job-meta { display: flex; align-items: baseline; gap: 6px; margin: 1px 0 2px; }
  .job-period { font-size: 11.5px; color: #444; white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 600; }
  .job-meta-sep { color: #999; font-size: 11.5px; }
  .job-role { font-size: 12.5px; font-weight: 600; color: #1f1f2e; }
  .job ul { padding-left: 15px; margin-top: 1px; }
  .job li { font-size: 12px; line-height: 1.45; color: #1f1f2e; margin-bottom: 1px; }
  .job li strong { font-weight: 700; color: #12121e; }

  .page-break { break-before: page; }

  .project { margin-bottom: 8px; }
  .project-row { display: flex; align-items: baseline; }
  .project-title { font-family: 'Space Grotesk', sans-serif; font-size: 13.5px; font-weight: 700; color: hsl(270, 72%, 40%); }
  .project-stack { font-size: 11.5px; color: #555; font-style: italic; margin-top: 1px; }
  .project-desc { font-size: 12px; color: #1f1f2e; margin-top: 2px; line-height: 1.45; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  .item-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; font-size: 12.5px; gap: 8px; }
  .item-row .left { color: #1f1f2e; }
  .item-row .left strong { color: #12121e; font-weight: 700; }
  .item-row .left em { color: hsl(270, 72%, 40%); font-style: normal; font-weight: 600; }
  .item-row .right { font-size: 11.5px; color: #444; white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 600; }
  .cert-link { color: hsl(187, 80%, 26%); text-decoration: underline; text-decoration-thickness: 0.6px; text-underline-offset: 2px; }

  .edu-item { margin-bottom: 6px; }
  .edu-school { font-size: 12.5px; font-weight: 700; color: #12121e; line-height: 1.35; }
  .edu-program { font-size: 12px; color: hsl(270, 72%, 40%); font-weight: 600; line-height: 1.35; }
  .edu-date { font-size: 11.5px; color: #444; font-weight: 600; font-variant-numeric: tabular-nums; line-height: 1.35; }

  .skill-line { font-size: 12px; color: #1f1f2e; margin-bottom: 3px; line-height: 1.5; }
  .skill-line strong { font-weight: 700; color: #12121e; }

  .avoid-break { break-inside: avoid; }
  a { white-space: nowrap; }
</style>
</head>
<body>

<!-- ═══════════════════════════════ PAGE 1 ═══════════════════════════════════ -->

<div class="header">
  <div class="header-left">
    <h1>Gökhan Cakmak</h1>
    <div class="tagline">Full-Stack Developer · AI Systems Builder</div>
    <div class="contact-row">
      <span>53121 Bonn, Deutschland</span>
      <span class="sep">|</span>
      <span>gokhan.cakmak@web.de</span>
      <span class="sep">|</span>
      <span>+49 163 9734475</span>
      <span class="sep">|</span>
      <span>Geb. 1987</span>
    </div>
    <div class="contact-row">
      <a href="https://www.linkedin.com/in/gökhan-cakmak/">linkedin.com/in/gökhan-cakmak</a>
      <span class="sep">|</span>
      <a href="https://github.com/cakmakg">github.com/cakmakg</a>
      <span class="sep">|</span>
      <a href="https://gokhancakmak.vercel.app/">gokhancakmak.vercel.app</a>
    </div>
  </div>
  <div class="photo-frame">
    <img src="${photoDataURI}" alt="Gökhan Cakmak">
  </div>
</div>
<div class="header-gradient"></div>

<div class="section">
  <div class="section-title">Zusammenfassung</div>
  <div class="summary-text">${SUMMARY}</div>
</div>

<div class="section">
  <div class="section-title">Berufserfahrung</div>
  ${experienceHtml}
</div>

<div class="two-col" style="margin-bottom:9px;">
  <div class="section avoid-break">
    <div class="section-title">Ausbildung</div>
    ${educationHtml}
  </div>
  <div class="section avoid-break">
    <div class="section-title">Zertifikate</div>
    ${certsHtml}
  </div>
</div>

<!-- ═══════════════════════════════ PAGE 2 ═══════════════════════════════════ -->

<div class="page-break"></div>

<div class="section">
  <div class="section-title">Projekte</div>
  ${projectsHtml}
</div>

<div class="section avoid-break">
  <div class="section-title">Technische Kenntnisse &amp; Sprachen</div>
  ${skillsHtml}
  <div class="skill-line"><strong>Sprachen:</strong> ${LANGUAGES}</div>
</div>

<div style="font-size:10px; color:#999; margin-top:10px;">Bonn, ${TODAY}</div>

</body>
</html>`;

// ─── PDF GENERATION ───────────────────────────────────────────────────────────

console.log('\n📄 Generating 2-page CV...');

const htmlPath = resolve(CAREER_OPS, 'output/cv-gokhan-cakmak-2page.html');
writeFileSync(htmlPath, html, 'utf-8');
console.log(`  ✓ HTML written: ${htmlPath}`);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

const pdfBuffer = await page.pdf({
  format: 'A4',
  printBackground: true,
  margin: { top: '13mm', bottom: '13mm', left: '15mm', right: '15mm' },
});

await browser.close();

writeFileSync(OUTPUT, pdfBuffer);
console.log(`  ✓ PDF saved: ${OUTPUT}`);
console.log('\n✅ Done!\n');
