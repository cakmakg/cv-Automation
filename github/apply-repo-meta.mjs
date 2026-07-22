#!/usr/bin/env node
/**
 * apply-repo-meta.mjs — Push descriptions, topics and homepage URLs to GitHub
 *
 * Dry run by default. Nothing is written without --apply.
 *
 *   node github/apply-repo-meta.mjs                  # preview every change
 *   node github/apply-repo-meta.mjs --flagship       # preview only the 13 real projects
 *   node github/apply-repo-meta.mjs --flagship --apply
 *   node github/apply-repo-meta.mjs --apply          # write everything
 *
 * Needs a token with `repo` scope (classic) or "Administration: read and write"
 * (fine-grained) in GITHUB_TOKEN:
 *
 *   $env:GITHUB_TOKEN = "ghp_..."      # PowerShell, current session only
 */

import { FLAGSHIP, PRACTICE, NEEDS_DECISION } from './repo-meta.mjs';

const OWNER = 'cakmakg';
const API = 'https://api.github.com';

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const FLAGSHIP_ONLY = args.includes('--flagship');

const targets = FLAGSHIP_ONLY ? FLAGSHIP : [...FLAGSHIP, ...PRACTICE];
const token = process.env.GITHUB_TOKEN;

if (APPLY && !token) {
  console.error('\n❌ GITHUB_TOKEN is not set — cannot write.\n');
  console.error('   PowerShell:  $env:GITHUB_TOKEN = "ghp_..."');
  console.error('   Scope needed: `repo` (classic) or Administration:write (fine-grained)\n');
  process.exit(1);
}

const headers = {
  'User-Agent': 'career-ops',
  Accept: 'application/vnd.github+json',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

console.log(`\n${APPLY ? '🚀 APPLYING' : '🔍 DRY RUN'} — ${targets.length} repo(s)${FLAGSHIP_ONLY ? ' (flagship only)' : ''}\n`);

let ok = 0;
let failed = 0;

for (const item of targets) {
  const { repo, description, topics, homepage, confidence, note } = item;
  const flag = confidence === 'low' ? ' ⚠ VERIFY' : '';

  console.log(`\n── ${repo}${flag}`);
  console.log(`   desc:  ${description}`);
  if (homepage) console.log(`   home:  ${homepage}`);
  if (topics) console.log(`   tags:  ${topics.join(', ')}`);
  if (note) console.log(`   note:  ${note}`);

  if (!APPLY) continue;

  try {
    // Description + homepage
    const patch = await fetch(`${API}/repos/${OWNER}/${repo}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ description, ...(homepage ? { homepage } : {}) }),
    });
    if (!patch.ok) throw new Error(`PATCH ${patch.status}: ${(await patch.json()).message}`);

    // Topics (separate endpoint, replaces the whole list)
    if (topics?.length) {
      const put = await fetch(`${API}/repos/${OWNER}/${repo}/topics`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ names: topics }),
      });
      if (!put.ok) throw new Error(`PUT topics ${put.status}: ${(await put.json()).message}`);
    }

    console.log('   ✓ updated');
    ok++;
  } catch (err) {
    console.log(`   ✗ ${err.message}`);
    failed++;
  }
}

console.log('\n' + '─'.repeat(70));

if (APPLY) {
  console.log(`\n✅ ${ok} updated${failed ? `, ❌ ${failed} failed` : ''}\n`);
} else {
  console.log('\nNothing was written. Re-run with --apply once GITHUB_TOKEN is set.\n');
}

if (NEEDS_DECISION.length) {
  console.log('⚠️  These need a decision, not just a description:\n');
  for (const d of NEEDS_DECISION) {
    console.log(`   ${d.repo}: ${d.issue}`);
    d.options.forEach((o) => console.log(`      → ${o}`));
    console.log('');
  }
}
