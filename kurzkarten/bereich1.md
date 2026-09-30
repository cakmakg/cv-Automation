# Kurzkarte — `bereich1` (Fullstack / Frontend / Web / Software Engineer)

Vorlage seit 29.09.2026: Wortlaut des Users aus #95 OBI. Referenz-Config:
`companies/obi-senior-software-engineer-koeln.mjs`. Allgemeine Regeln: `_alle.md`.
Die älteren Bereich-1-Briefe (#82, #86, #93, Goldmuster grinnberg) sind NICHT mehr Vorlage.

## CV (kommt aus dem Preset)

Profil-Zeile „Full Stack Web Developer" (bei klarer Frontend-Stelle z. B. „Frontend Developer",
bleibt 1 Zeile), keine Tagline, keine Schwerpunkte-Zeile, zwei Projekte fest (GuestMatrix,
Reisegesucht-TravelAgency), vier Skill-Kategorien. **Pro Stelle anpassen:** nur `cv.skills`
(Kategorienamen und Reihenfolge so, dass die ATS-Begriffe der Anzeige vorkommen). Nicht belegte
Technik (C#, .NET, Java/JVM, Angular, Vue, Svelte, Kubernetes, MySQL …) NICHT in den CV.

## Anschreiben — fast alles Baustein, nur zwei Stellen pro Anzeige

```js
paragraphs: [
  `Ihre Ausschreibung als <STELLENTITEL> hat direkt mein Interesse geweckt. ${BLOCKS.b1Stack}`,
  BLOCKS.b1Praxis,
  BLOCKS.b1AiEngineering,
  `${BLOCKS.b1AiTools} Mit <TECHNIK A> und <TECHNIK B> habe ich bisher noch nicht so viel gearbeitet, sehe das aber als etwas, in das ich mich mit meiner bisherigen Erfahrung gut einarbeiten kann.`,
  // BLOCKS.foerderTech  ← NUR nach Rückfrage beim User
],
```

| # | Inhalt | variabel? |
|---|---|---|
| P1 | Einstieg mit Stellentitel + Stack (JS/TS, Node.js, React, Next.js) + Interesse an Aufbau, Tests, Betrieb | **Stellentitel** (ohne Gendertag) |
| P2 | Praktische Arbeit (React, TypeScript, REST APIs) + Git, Docker, CI/CD, frühe Tests + verständlicher Code | fix |
| P3 | AI Engineering: LLMs, Agentensysteme, LangGraph, Claude API; Kontrolle, Tests, zuverlässige Abläufe; GitHub-Verweis | fix |
| P4 | Claude Code nutzen, erzeugten Code selbst prüfen + **Lückensatz** | **Technik aus der Anzeige**, die nicht belegt ist. Keine Lücke → Satz weglassen |
| P5 | `BLOCKS.foerderTech` | **nur nach Rückfrage** beim User |
| auto | Umschulung · Café · „Ich würde mich freuen, Ihnen im persönlichen Gespräch …" | fix, nie kürzen |

- Lückensatz: nur echte Muss-Technik der Anzeige (max. 2), nie Soft-Anforderungen wie „Senior" oder „mehrjährige Praxis" (keine Gap-Negation).
- Die Bausteine sind freigegeben. Sie NICHT umformulieren, auch wenn der Brief zu lang wird. Dann zuerst fragen.
- Firmenbezug hat die Vorlage bewusst nicht. `company.mission` trotzdem recherchieren (Report); der Validator verlangt sie für `bereich1` nicht im Brieftext.
- Spanne 7 Absätze (8 mit Förderzusage). `--check` misst die Seite.
