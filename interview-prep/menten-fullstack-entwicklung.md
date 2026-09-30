# Interview-Prep: menten GmbH — Fullstack-Entwicklung (Angular & Node.js)

**Stelle:** Fullstack Developer Angular & Node.js (m/w/d), Bergisch Gladbach
**Bewertung:** [Report 063](../reports/063-menten-fullstack-angular-node-bergisch-gladbach-2026-08-19.md), Score 3.9/5
**Gehaltsband laut Anzeige:** 38.000 – 56.000 € brutto / Jahr
**Prozess:** Bewerbung → 10 Min. Kennenlernen → 30 Min. Fachgespräch → 2 h Vor-Ort-Besuch mit Case Study → Entscheidung am selben Tag

---

## „Warum bewerben Sie sich bei uns?"

### Kurzfassung (Formularfeld oder Gesprächseinstieg)

> Ihre Anzeige beschreibt ziemlich genau, wie ich ohnehin arbeite. TypeScript vorne wie hinten ist bei mir kein Vorsatz, sondern der Stack, mit dem ich meine eigenen Anwendungen baue. Claude Code nutze ich täglich, bei Ihnen ist das Standard und nicht die Ausnahme. So offen habe ich das in keiner anderen Anzeige gelesen. Dazu kommt der Umbau eines Produkts, das seit Jahren bei über 250 Kunden läuft. Bisher baue ich meine Systeme allein und von Grund auf. Ich möchte lernen, wie gewachsene Software Schritt für Schritt weiterentwickelt wird, und zwar im Team mit Reviews.

### Die vier Punkte dahinter

1. **Claude Code als Hausstandard.** Der ehrlichste Grund. Überall sonst müsste die Arbeit mit LLM-Tooling und Agenten erklärt werden. Hier ist sie die Arbeitsweise des Hauses. Die LangGraph-Systeme sind damit kein Sonderweg, sondern Vorsprung.
2. **„Vorne wie hinten TypeScript, ein Denkmodell statt zwei."** Ihr Leitsatz aus der Anzeige, und wörtlich die Bauweise von GuestMatrix.
3. **Produkt statt nur Projekte.** i-effect® läuft bei über 250 Kunden. Bisher eigene Systeme, lauffähig und getestet, aber ohne Live-Kunden. Das ist der nächste Schritt und lässt sich benennen, ohne sich kleinzumachen.
4. **25 Leute, flache Hierarchie, Code Reviews als Standard.** Nach Umschulung und Eigenprojekten ist Feedback am eigenen Code der schnellste Hebel. Ein Grund, der etwas über den Bewerber sagt und nicht nur über die Firma.

### Nicht sagen

„Ihr Unternehmen ist innovativ", „ich suche eine neue Herausforderung", „die Stelle passt perfekt zu meinem Profil".

---

## Angular selbst ansprechen, bevor sie fragen

> Angular fehlt mir aus der Praxis, das sage ich offen. Komponenten und zentrales State Management sind mir aus React mit Redux und Zustand vertraut, das Denkmodell ist dasselbe. Bis zum Fachgespräch bringe ich eine kleine Angular-Anwendung mit NgRx zum Laufen, dann müssen Sie mir das nicht glauben.

⚠️ **Wer das sagt, muss es bauen.** Kleine Angular-App mit NgRx SignalStore, eine Liste, ein Detail, ein Store, eine REST-Anbindung. Der Prozess sieht ohnehin eine Case Study vor Ort vor. Das ist der einzige Hebel, der die Bewerbung real über 3.9 hebt.

---

## Fachfragen, die kommen werden

- Wie hältst du eine Anwendung bei komplexen Masken nachvollziehbar? (→ zentraler Store, unidirektionaler Datenfluss, keine Logik in der Komponente)
- Wie schneidest du REST-Endpunkte? (→ GuestMatrix: Zod-Validierung an der Grenze, Fehlerkontrakt einheitlich)
- SQL auf Join- und Index-Niveau (→ PostgreSQL aus GuestMatrix, Row-Level-Security als Mandantentrennung)
- Wie sicherst du Qualität ab? (→ Vitest-Suite, Code Reviews, bei den Agentensystemen feste menschliche Freigabepunkte)
- Wie nutzt du Claude Code konkret? (→ ehrlich und konkret bleiben: Refactoring, Tests, Code lesen; nicht als Wunderwaffe verkaufen)

## Eigene Fragen

- Wie ist der i-effect-Umbau geschnitten: Strangler-Ansatz neben dem Bestand oder Modul für Modul?
- Wie groß ist das Entwicklungsteam innerhalb der 25 Mitarbeitenden?
- Wie sieht der Einsatz von Claude Code konkret aus, und gibt es Regeln dafür?
- Verhältnis i-effect-Modernisierung zu Kundenprojekten über das Jahr?
- Wie viel Einarbeitungszeit ist für Angular und NgRx eingeplant?

## Gehalt

Band 38–56k, Einstufung nach Berufserfahrung und Kenntnissen. Mit FiSi-Umschulung plus eigenen Projekten, ohne Angular-Praxis: **~45.000 €** ist begründbar und lässt Luft nach unten.

## Offener Punkt

Firma duzt ab Tag 1, Anzeige durchgehend im Du. Anschreiben wurde bewusst im Sie gehalten. Im Gespräch ist Duzen selbstverständlich.
