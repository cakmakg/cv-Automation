#!/usr/bin/env node
/**
 * fetch-jd.mjs — Stellenanzeige in EINEM Aufruf holen und als jds/<slug>.md ablegen
 *
 * Warum: Pro Bewerbung lief das bisher als Handarbeit — WebFetch, bei Sperre (StepStone,
 * stellenanzeigen.de, Glassdoor) Invoke-WebRequest mit Browser-UA, dann JSON-LD bzw. die
 * LinkedIn-Klassen per Hand herausziehen, oft in mehreren Anläufen.
 *
 * Reihenfolge der Quellen:
 *   1. JSON-LD JobPosting (StepStone, Indeed, die meisten Karriereseiten)
 *   2. LinkedIn-Gastansicht (show-more-less-html__markup, topcard__org-name-link, Ort)
 *   3. Fallback: sichtbarer Seitentext
 *
 * Usage:
 *   node fetch-jd.mjs <url> [slug]
 *   → jds/<slug>.md  (ohne slug: aus Firma + Titel abgeleitet)
 */

import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const CAREER_OPS = dirname(fileURLToPath(import.meta.url));
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

const [url, slugArg] = process.argv.slice(2);
if (!url || !/^https?:\/\//.test(url)) {
  console.error('Usage: node fetch-jd.mjs <url> [slug]');
  process.exit(1);
}

const decodeEntities = (s) => s
  .replace(/&nbsp;/g, ' ')
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

function htmlToText(html) {
  return decodeEntities(
    html
      .replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/gi, '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<li[^>]*>/gi, '\n- ')
      .replace(/<\/(p|div|li|ul|ol|h[1-6]|section|tr)>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .split('\n').map((l) => l.replace(/[ \t]+/g, ' ').trim()).join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function findJobPosting(node) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (const n of node) { const hit = findJobPosting(n); if (hit) return hit; }
    return null;
  }
  const type = node['@type'];
  if (type === 'JobPosting' || (Array.isArray(type) && type.includes('JobPosting'))) return node;
  return findJobPosting(node['@graph']);
}

function fromJsonLd(html) {
  const blocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [, raw] of blocks) {
    let data;
    try { data = JSON.parse(raw.trim()); } catch { continue; }
    const job = findJobPosting(data);
    if (!job) continue;
    const org = job.hiringOrganization ?? {};
    const locs = [job.jobLocation].flat().filter(Boolean);
    const addr = (l) => {
      const a = l.address ?? {};
      return [a.streetAddress, [a.postalCode, a.addressLocality].filter(Boolean).join(' '), a.addressCountry?.name ?? a.addressCountry]
        .filter((x) => x && typeof x === 'string').join(', ');
    };
    const salary = job.baseSalary?.value;
    return {
      source: 'JSON-LD',
      title: job.title,
      company: typeof org === 'string' ? org : org.name,
      companyUrl: org.sameAs ?? org.url,
      location: locs.map(addr).filter(Boolean).join(' | ') || (job.jobLocationType ?? ''),
      datePosted: job.datePosted,
      validThrough: job.validThrough,
      employmentType: [job.employmentType].flat().filter(Boolean).join(', '),
      salary: salary ? `${salary.minValue ?? salary.value ?? ''}${salary.maxValue ? `–${salary.maxValue}` : ''} ${job.baseSalary.currency ?? ''} ${salary.unitText ?? ''}`.trim() : '',
      text: htmlToText(decodeEntities(job.description ?? '')),
    };
  }
  return null;
}

function fromLinkedIn(html) {
  const pick = (re) => { const m = html.match(re); return m ? htmlToText(m[1]) : ''; };
  const text = pick(/class="show-more-less-html__markup[^"]*"[^>]*>([\s\S]*?)<\/div>/);
  if (!text) return null;
  return {
    source: 'LinkedIn',
    title: pick(/class="top-card-layout__title[^"]*"[^>]*>([\s\S]*?)<\/h[12]>/) || pick(/<title>([\s\S]*?)<\/title>/),
    company: pick(/class="topcard__org-name-link[^"]*"[^>]*>([\s\S]*?)<\/a>/),
    location: pick(/class="topcard__flavor topcard__flavor--bullet"[^>]*>([\s\S]*?)<\/span>/),
    text,
  };
}

function fromPage(html) {
  // <main>/<article> tragen auf Karriereseiten die Anzeige; Menüs und Footer liegen in eigenen
  // Landmark-Elementen. Cookie-Banner stehen oft davor → ab der ersten <h1> (Stellentitel) lesen.
  let body = (
    html.match(/<main[^>]*>([\s\S]*)<\/main>/i)?.[1]
    ?? html.match(/<article[^>]*>([\s\S]*)<\/article>/i)?.[1]
    ?? html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1]
    ?? html
  ).replace(/<(header|nav|footer|aside|dialog|form)[\s\S]*?<\/\1>/gi, '');
  const h1 = body.search(/<h1[\s>]/i);
  if (h1 > 0) body = body.slice(h1);
  return {
    source: 'Seitentext (kein JSON-LD gefunden, bitte prüfen)',
    title: htmlToText(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? ''),
    text: htmlToText(body).slice(0, 20000),
  };
}

const slugify = (s) => s.toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
  .replace(/\((m|w|d|x|\/)+\)/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  .split('-').slice(0, 7).join('-');

/** Wählt die beste Quelle, schreibt jds/<slug>.md und gibt den Kopf aus. */
function save(html) {
  const jd = fromJsonLd(html) ?? (/linkedin\.com/.test(url) ? fromLinkedIn(html) : null) ?? fromPage(html);
  const slug = slugArg || slugify([jd.company, jd.title].filter(Boolean).join(' ')) || 'anzeige';
  const header = [
    `# ${jd.title ?? 'Stellenanzeige'}${jd.company ? ` — ${jd.company}` : ''}`,
    '',
    `**URL:** ${url}`,
    `**Abgerufen:** ${new Date().toISOString().slice(0, 10)} (Quelle: ${jd.source})`,
    ...[
      ['Firma', jd.company], ['Firmen-Website', jd.companyUrl], ['Ort', jd.location],
      ['Veröffentlicht', jd.datePosted], ['Gültig bis', jd.validThrough],
      ['Anstellung', jd.employmentType], ['Gehalt', jd.salary],
    ].filter(([, v]) => v).map(([k, v]) => `**${k}:** ${v}`),
    '',
    '---',
    '',
  ];

  mkdirSync(resolve(CAREER_OPS, 'jds'), { recursive: true });
  writeFileSync(resolve(CAREER_OPS, `jds/${slug}.md`), header.join('\n') + jd.text + '\n');

  console.log(header.slice(0, -3).join('\n'));
  console.log(`\n✓ jds/${slug}.md (${jd.text.length} Zeichen Anzeigentext)`);
  if (jd.datePosted) console.log('  Hinweis: datePosted ist NICHT das Briefdatum — das kommt aus der Systemuhr.');
}

// Kein process.exit nach fetch: unter Windows reißt das einen libuv-Assert (Node 22).
// Ungelesene Bodies halten die Verbindung offen und den Prozess am Leben → immer verwerfen.
const res = await fetch(url, {
  headers: { 'User-Agent': UA, 'Accept-Language': 'de-DE,de;q=0.9' },
  redirect: 'follow',
  signal: AbortSignal.timeout(20000),
});
if (!res.ok) {
  await res.body?.cancel();
  console.error(`❌ HTTP ${res.status} für ${url} — Anzeige offline (410/404) oder blockiert (403). Text per Hand in jds/ ablegen.`);
  process.exitCode = 1;
} else {
  save(await res.text());
}
