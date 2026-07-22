#!/usr/bin/env node
/**
 * validate-cv.mjs — Static CV content checker for company configs
 *
 * Checks all established CV quality rules before PDF generation:
 *   - Tagline format (max 3 segments, length)
 *   - Competencies (max 4 tags, word count per tag)
 *   - Skills (max 5 categories for 1-page fit, no overclaiming)
 *   - Experience (required companies always present)
 *   - Education (FAW program name correctness)
 *   - Languages (no English overclaim)
 *   - Projects (length, maturity signals)
 *
 * Usage (standalone):
 *   node validate-cv.mjs companies/thinkgroup-servicedesk.mjs
 *
 * Usage (imported):
 *   import { validateCV } from './validate-cv.mjs';
 *   const result = await validateCV(config);
 */

import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Rule definitions ────────────────────────────────────────────────────────

// Skills that are NOT in Gökhan's actual profile — flagged as overclaim
const OVERCLAIM_SKILLS = [
  { phrase: 'Azure Active Directory', msg: 'Azure AD not in profile — user has AWS, not Azure' },
  { phrase: 'SharePoint',             msg: 'SharePoint admin not in profile' },
  { phrase: 'Microsoft Azure',        msg: 'Azure not in profile — user has AWS (Bedrock/SageMaker/WAF)' },
  { phrase: 'Cloud-affin',            msg: 'Vague buzzword — state specific platforms instead' },
  { phrase: 'TensorFlow',             msg: 'TensorFlow not in profile (memory: feedback_anschreiben_honesty_lauffaehig)' },
  { phrase: 'Grafana',                msg: 'Grafana not actively used — condense to one honest sentence if mentioned' },
  { phrase: 'Prometheus',             msg: 'Prometheus not actively used — condense to one honest sentence if mentioned' },
];

// Skills that need "Einarbeitung" / "Anwender" framing (not full admin claims)
const LEARNING_ONLY_SKILLS = [
  { phrase: 'Entra ID',    requiresContext: ['Einarbeitung', 'Anwender', 'Konzept', 'einarbeiten'] },
  { phrase: 'Exchange Online', requiresContext: ['Einarbeitung', 'Anwender', 'Konzept', 'einarbeiten'] },
  { phrase: 'Intune',      requiresContext: ['Einarbeitung', 'Anwender', 'Konzept', 'einarbeiten'] },
];

// These experience entries must ALWAYS be present (User rule 2026-07-08)
const REQUIRED_EXPERIENCE_KEYS = [
  { keys: ['GIS'],               label: 'GIS GmbH (1st-Level IT Support)' },
  { keys: ['EMLAK'],             label: 'EMLAK AG (IT-Praktikum)' },
  { keys: ['Coffee Bar', 'Catering', 'Café'], label: 'Mobile Coffee Bar & Catering (Selbstständigkeit)' },
];

// Engineering maturity signals — at least one should appear per project description
const MATURITY_SIGNALS = [
  'Test-Suite', 'Checkpointer', 'Routing-Guard', 'Kill-Switch', 'Budget-Kill',
  'HITL', 'Human-in-the-Loop', 'RBAC', 'Critic-Agent', 'Critic Agent',
  'Multi-Tenant', 'multi-tenant', 'RAG', 'Audit-Log', 'AES-256',
  'Pause/Resume', 'Cost-Tracking', 'MCP-Server',
];

// Max project description length (chars) — longer risks wrapping/2-page overflow
const MAX_PROJECT_DESC_CHARS = 280;

// ─── Core validation function (exported) ────────────────────────────────────

/**
 * @param {object} config - The company config object
 * @returns {{ errors: string[], warnings: string[], slug: string }}
 */
export async function validateCV(config) {
  const { slug, cv } = config;
  const errors = [];
  const warnings = [];

  if (!cv) {
    errors.push('cv section missing from config');
    return { errors, warnings, slug };
  }

  // ── 1. Tagline: max 3 segments, reasonable length ─────────────────────────
  const tagline = cv.tagline ?? '';
  const taglineSegments = tagline.split('·').map(s => s.trim()).filter(Boolean);
  if (taglineSegments.length > 3) {
    errors.push(`Tagline has ${taglineSegments.length} segments (max 3, use "·" separator): "${tagline}"`);
  }
  if (tagline.length > 70) {
    warnings.push(`Tagline length ${tagline.length} chars — risk of wrapping to 2nd line (keep ≤70)`);
  }
  if (!tagline) {
    warnings.push('Tagline is empty — OK if tech stack already in Kernkompetenzen, else add role context');
  }

  // ── 2. Competencies: max 4 tags, ≤5 words each ───────────────────────────
  const comps = cv.competencies ?? [];
  if (comps.length === 0) {
    errors.push('Competencies array is empty');
  } else if (comps.length > 4) {
    errors.push(`${comps.length} competency tags — max 4 for single-line Kernkompetenzen display`);
  }
  comps.forEach((c, i) => {
    const words = c.trim().split(/\s+/).length;
    if (words > 5) {
      warnings.push(`Competency ${i + 1}: "${c}" is ${words} words — may break across lines (keep ≤5 words)`);
    }
  });

  // ── 2b. UNVERÄNDERLICH (User 22.07.2026): Schwerpunkte-Zeile darf NIE umbrechen. ─
  // Ohne cv.profil rendert das Template "Schwerpunkte: A · B · C" — ab ~100 Zeichen
  // (inkl. Label) bricht die Zeile bei 12px um. Ground-Truth-Prüfung läuft zusätzlich
  // per pdftotext in generate-bewerbung.mjs (checkAtsExtraction oneLiners).
  if (!cv.profil && comps.length > 0) {
    const schwerpunkteLine = `Schwerpunkte: ${comps.join(' · ')}`;
    if (schwerpunkteLine.length > 100) {
      errors.push(`Schwerpunkte-Zeile ${schwerpunkteLine.length} Zeichen (> 100) — bricht auf 2. Zeile um. Tags kürzen oder streichen (Regel: IMMER einzeilig).`);
    }
  }

  // ── 3. Skills: category count ─────────────────────────────────────────────
  const skills = cv.skills ?? [];
  if (skills.length === 0) {
    errors.push('Skills array is empty');
  } else if (skills.length > 5) {
    warnings.push(`${skills.length} skill categories — max 5 recommended for 1-page fit (current: ${skills.map(s => s.category).join(', ')})`);
  }

  // ── 4. No overclaiming in skills ─────────────────────────────────────────
  const allSkillText = skills.map(s => `${s.category} ${s.items}`).join('\n');

  OVERCLAIM_SKILLS.forEach(({ phrase, msg }) => {
    if (allSkillText.includes(phrase)) {
      errors.push(`Skills overclaim: "${phrase}" — ${msg}`);
    }
  });

  LEARNING_ONLY_SKILLS.forEach(({ phrase, requiresContext }) => {
    if (allSkillText.includes(phrase)) {
      const hasContext = requiresContext.some(ctx => allSkillText.includes(ctx));
      if (!hasContext) {
        errors.push(`Skills overclaim: "${phrase}" used without "Einarbeitung/Anwender/Konzept" framing — user only knows it as a learner, not admin`);
      }
    }
  });

  // ── 5. Experience: required companies always present ─────────────────────
  const experience = cv.experience;
  if (experience) {
    // Custom experience override — validate required entries
    const expText = experience.map(j => `${j.company} ${j.role} ${(j.bullets ?? []).join(' ')}`).join('\n');
    REQUIRED_EXPERIENCE_KEYS.forEach(({ keys, label }) => {
      const present = keys.some(k => expText.includes(k));
      if (!present) {
        errors.push(`Required experience missing: ${label} — must always appear (User rule 2026-07-08)`);
      }
    });
    if (experience.length > 5) {
      warnings.push(`${experience.length} experience entries — max 5 recommended for 1-page fit`);
    }

    // UNVERÄNDERLICH (User 22.07.2026): jede Bullet-Beschreibung einzeilig — kurz und klar.
    experience.forEach((j) => {
      (j.bullets ?? []).forEach((b) => {
        const visible = b.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
        if (visible.length > 95) {
          errors.push(`Bullet bei "${j.company}" hat ${visible.length} Zeichen (> 95) — bricht auf 2. Zeile um, muss einzeilig sein: "${visible.slice(0, 50)}…"`);
        }
      });
    });
  }
  // If no experience override, default is used (which always contains required entries) — no error needed

  // ── 6. Education: FAW must say "Systemintegration" ───────────────────────
  const education = cv.education;
  if (education) {
    const eduText = education.map(e => `${e.school} ${e.program}`).join('\n');
    if (eduText.toLowerCase().includes('faw')) {
      const hasSI = eduText.includes('Systemintegration');
      const hasAESI = eduText.includes('AE/SI') || eduText.includes('Anwendungsentwicklung');
      if (hasAESI && !hasSI) {
        errors.push(`Education: FAW program must say "Fachinformatiker für Systemintegration" (not "AE/SI") — see user_ausbildung_systemintegration memory`);
      }
    }
  }

  // ── 7. Languages: no English overclaim ────────────────────────────────────
  const langs = cv.languages ?? '';
  const englishOverclaim = /Englisch\s*\([^)]*(?:fließend|C1|C2|B2|verhandlungssicher|sehr\s+gut)[^)]*\)/i.test(langs);
  if (englishOverclaim) {
    errors.push(`Languages: English overclaim — max "B1, sichere Verständigung" or "technisches Lesen sicher, Verständigung gut" (see user_language_levels memory)`);
  }

  // ── 8. Profil: stellt die Person vor (Recruiter-Feedback Juli 2026) ──────
  // „es gibt oben Kernkompetenzen und unten nochmal Skills" — die Tagreihe oben
  // war eine Dopplung. Ersetzt durch einen Profil-Fließtext; ohne cv.profil
  // fällt das Template auf eine Schwerpunkte-Zeile zurück (schwächer).
  if (!cv.profil) {
    warnings.push(
      `cv.profil fehlt — ohne ihn rendert das Template nur eine "Schwerpunkte"-Zeile aus den Kompetenzen. ` +
      `2 bis 3 Sätze: wer du fachlich bist und wie du arbeitest.`
    );
  } else if (cv.profil.length > 340) {
    warnings.push(`cv.profil ist ${cv.profil.length} Zeichen — ≤340 halten, sonst kippt die 1-Seiten-Regel`);
  }

  // ── 9. Dopplung Kompetenzen ↔ Skills ─────────────────────────────────────
  if (comps.length > 0 && skills.length > 0) {
    const skillTerms = new Set(
      allSkillText.toLowerCase().split(/[,;:·|\s]+/).filter((t) => t.length > 3)
    );
    const duplicated = comps.filter((c) => {
      const terms = c.toLowerCase().split(/[&,·\s]+/).filter((t) => t.length > 3);
      return terms.length > 0 && terms.every((t) => skillTerms.has(t));
    });
    if (duplicated.length > 0) {
      warnings.push(
        `Kompetenz(en) wiederholen nur Skill-Begriffe: ${duplicated.map((d) => `"${d}"`).join(', ')} — ` +
        `genau die Dopplung, die der Recruiter bemängelt hat. Entweder cv.profil als Fließtext setzen ` +
        `oder die Kompetenzen anders formulieren als die Skill-Liste.`
      );
    }
  }

  // ── 10. Datumsformat einheitlich (Designsprache-Konsistenz) ──────────────
  // Recruiter: „Der Lebenslauf ist nicht konsistent (sowohl Designsprache wie Struktur)".
  const MONTH_RANGE = /^\d{2}\/\d{4}\s*[–-]\s*(\d{2}\/\d{4}|heute)$/;
  const YEAR_RANGE  = /^\d{4}\s*[–-]\s*\d{4}$/;
  const isCleanRange = (d) => MONTH_RANGE.test(d.trim()) || YEAR_RANGE.test(d.trim());

  (config.cv.experience ?? []).forEach((j) => {
    if (j.period && !isCleanRange(j.period)) {
      warnings.push(`Experience "${j.company}": Zeitraum "${j.period}" weicht vom Format MM/JJJJ – MM/JJJJ ab`);
    }
  });
  (education ?? []).forEach((e) => {
    if (e.date && !isCleanRange(e.date)) {
      warnings.push(`Education "${e.school}": Zeitraum "${e.date}" weicht vom Format MM/JJJJ – MM/JJJJ ab`);
    }
  });

  // ── 11. ATS keyword coverage über den gesamten CV-Text ───────────────────
  // Der CV ist das Dokument, das die Bewerbungssoftware bewertet — nicht das
  // Anschreiben. Bis Juli 2026 lief hier gar keine Keyword-Prüfung.
  const jobKeywords = Array.isArray(config.jobKeywords) ? config.jobKeywords : [];
  if (jobKeywords.length > 0) {
    const cvCorpus = [
      cv.profil ?? '',
      cv.tagline ?? '',
      comps.join(' '),
      allSkillText,
      (cv.projects ?? []).map((p) => `${p.title} ${p.stack} ${p.desc}`).join(' '),
      (cv.experience ?? []).map((j) => `${j.company} ${j.role} ${(j.bullets ?? []).join(' ')}`).join(' '),
      (education ?? []).map((e) => `${e.school} ${e.program}`).join(' '),
    ].join('\n').toLowerCase();

    const missing = jobKeywords.filter((kw) => !cvCorpus.includes(kw.toLowerCase()));
    const coverage = (jobKeywords.length - missing.length) / jobKeywords.length;
    if (coverage < 0.7) {
      errors.push(
        `ATS coverage im CV ${Math.round(coverage * 100)}% (< 70%) — fehlend: ${missing.join(', ')}. ` +
        `Der CV ist das Dokument, das die Bewerbungssoftware scannt.`
      );
    } else if (missing.length > 0) {
      warnings.push(`ATS keywords nicht im CV (${Math.round(coverage * 100)}% coverage): ${missing.join(', ')}`);
    }
  }

  // ── 12. Projects: length and maturity signals ────────────────────────────
  const projects = cv.projects ?? [];
  if (projects.length > 0) {
    warnings.push(`Projects section: ${projects.length} project(s) — verify 1-page A4 after PDF generation`);
    projects.forEach((p, i) => {
      const desc = p.desc ?? '';
      const title = p.title ?? `Project ${i + 1}`;
      if (desc.length > MAX_PROJECT_DESC_CHARS) {
        warnings.push(`"${title}": description ${desc.length} chars — keep ≤${MAX_PROJECT_DESC_CHARS} for 1-page fit`);
      }
      const hasSignal = MATURITY_SIGNALS.some(s => desc.includes(s) || (p.title ?? '').includes(s));
      if (!hasSignal) {
        warnings.push(`"${title}": description lacks maturity signals (HITL, RBAC, Critic-Agent, Test-Suite, Checkpointer, etc.)`);
      }
    });
  }

  return { errors, warnings, slug };
}

// ─── CLI mode ────────────────────────────────────────────────────────────────

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);

if (isMain) {
  const configArg = process.argv[2];
  if (!configArg) {
    console.error('Usage: node validate-cv.mjs <config-file.mjs>');
    console.error('Example: node validate-cv.mjs companies/thinkgroup-servicedesk.mjs');
    process.exit(1);
  }

  const configPath = resolve(__dirname, configArg);
  if (!existsSync(configPath)) {
    console.error(`❌ Config not found: ${configPath}`);
    process.exit(1);
  }

  const config = (await import(pathToFileURL(configPath).href)).default;
  const { slug, cv } = config;

  console.log(`\n📋 Validating CV: ${slug}`);
  console.log(`   Tagline: ${cv?.tagline ?? '—'}`);
  console.log(`   Competencies: ${(cv?.competencies ?? []).length}  |  Skills: ${(cv?.skills ?? []).length}  |  Projects: ${(cv?.projects ?? []).length}\n`);

  const { errors, warnings } = await validateCV(config);

  // Print passed checks
  const taglineSegs = (cv?.tagline ?? '').split('·').filter(Boolean).length;
  if (taglineSegs <= 3 && (cv?.tagline ?? '').length <= 70) console.log(`  ✓ Tagline: ${taglineSegs} segment(s), ${(cv?.tagline ?? '').length} chars`);
  if ((cv?.competencies ?? []).length <= 4 && (cv?.competencies ?? []).length > 0) console.log(`  ✓ Competencies: ${(cv?.competencies ?? []).length} tags`);
  if ((cv?.skills ?? []).length <= 5 && (cv?.skills ?? []).length > 0) console.log(`  ✓ Skills: ${(cv?.skills ?? []).length} categories`);
  if (!errors.some(e => e.includes('overclaim'))) console.log(`  ✓ No skills overclaiming`);
  if (!errors.some(e => e.includes('Required experience'))) console.log(`  ✓ Required experience entries present`);
  if (!errors.some(e => e.includes('Education'))) console.log(`  ✓ Education format correct`);
  if (!errors.some(e => e.includes('Languages'))) console.log(`  ✓ Languages: no overclaim`);
  if ((cv?.projects ?? []).length === 0) console.log(`  ✓ No projects (1-page safe)`);
  console.log(`  ${cv?.profil ? '✓' : '○'} Profil-Fließtext (cv.profil)`);
  if (!warnings.some(w => w.includes('wiederholen nur Skill-Begriffe'))) console.log(`  ✓ Keine Dopplung Kompetenzen ↔ Skills`);
  if (Array.isArray(config.jobKeywords) && config.jobKeywords.length > 0) {
    if (!errors.some(e => e.includes('ATS coverage')) && !warnings.some(w => w.includes('ATS keywords'))) {
      console.log(`  ✓ ATS keywords: ${config.jobKeywords.length}/${config.jobKeywords.length} im CV gefunden`);
    }
  } else {
    console.log(`  ○ ATS keywords: keine konfiguriert (jobKeywords: [...] im Config setzen)`);
  }

  console.log('');

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All CV checks passed!\n');
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
