# Bewerbung Master-Template — Gökhan Cakmak

<!--
  Diese Datei ist die ZENTRALE Vorlage für alle Anschreiben:
  - Software Engineer
  - Fullstack Web Developer
  - AI Engineer
  - AI Automation Engineer
  - Agentic AI Consultant (Public Sector / Enterprise)

  Struktur (6 Blöcke) und Value Propositions werden hier gepflegt.
  career-ops + generate-bewerbung.mjs nutzen diese Bausteine,
  um pro Stelle ein angepasstes Anschreiben zu erzeugen.

  Source-of-Truth Projekte (4): AI Orchestra · Autonomous SecOps Agent ·
  werbung-otomation · Otonom-Travelagency. Diese spiegeln lebenslauf.md / cv.md.

  Stil-Regeln (aus auto-memory):
  - Café/Catering UND Tourismus-Hintergrund als Soft-Skill-Quelle nutzen
  - Header: nur Name, Adresse, Telefon, E-Mail (kein LinkedIn/GitHub/Tagline)
  - KEIN Foto im Anschreiben
  - Natürlicher Stil, AI-detection-proof, kein Bold
  - Einleitung sade ve direkt, keine Recherche-Übertreibung
  - Substantielle Tiefe (Mobivendition-Referenz), keine 2-Satz-Paragraphen
-->

---

## ⚠️ NARRATIV-PFLICHT — RECRUITER-FEEDBACK (Juli 2026)

> **Wörtliches Feedback, Teil 1:**
> „Das Anschreiben hat leider sehr offensichtliche Claude-Formulierungen und inhaltlich
> orientiert es sich nur am Stellenprofil gematcht auf deinen Lebenslauf, aber es stellt
> dich nicht vor oder wie du arbeitest."
>
> **Wörtliches Feedback, Teil 2:**
> „Mein Hinweis ging eher in die Richtung das es inhaltlich wenig ansprechend ist und daher
> an Überzeugung fehlen könnte. Es geht ja nicht nur darum Formulierungen aus einer
> Stellenanzeige aufzugreifen sondern darzulegen: was ist das (dein) Narrativ, was sind deine
> Passungspunkte. Was zeichnet das Unternehmen aus und ist deren Mission. Wie lässt sich das
> verbinden. Was hast du bisher konkret getan und welches Ergebnis damit produziert."

**Die schärfste Aussage darin ist „nur am Stellenprofil gematcht auf deinen Lebenslauf".**
Das ist eine Kritik an der Arbeitsweise, nicht an einzelnen Sätzen: Ein Brief, der aus den
Blöcken weiter unten zusammengesetzt wird, ist genau das — ein Abgleich. Die Blöcke sind
Rohmaterial und Gedächtnisstütze. Der Brief wird für diese eine Firma geschrieben, nicht montiert.

**Pflichtfelder im Config** (werden von `validate-anschreiben.mjs` geprüft):

```js
narrative: {
  kern: '…',          // Wer bin ich fachlich — unabhängig von dieser Stelle
  passung: ['…'],     // 2–3 konkrete Passungspunkte Profil ↔ Rolle
},
company: {
  mission: '…',       // Was die Firma tut / wofür sie steht, in EIGENEN Worten
  verbindung: '…',    // Warum mein Narrativ zu GENAU dieser Mission passt
},
jobKeywords: ['…'],   // 5–8 Muss-Begriffe aus der Anzeige (ATS, CV + Brief)
```

`company.mission` und `company.verbindung` sind Errors, wenn sie fehlen. `mission` muss außerdem
im Brieftext wiederauftauchen — sonst ist sie nur eine Recherche-Notiz.

Jedes Anschreiben muss DREI DINGE leisten — neben Stil und Struktur:

### 1. WER BIN ICH + WIE ARBEITE ICH (Block 1 + Block 4)
Nicht nur „ich bewerbe mich" — sondern eine Aussage darüber, WIE du arbeitest.
Konkretes Beispiel was erlaubt ist:
> „Ich baue Systeme, die ich auch selbst betreiben und verantworten will — kein Prototyp,
> sondern etwas, das wirklich läuft. Das bedeutet: Monitoring, Fehlerbehandlung und klare
> Übergabepunkte sind für mich von Anfang an dabei, nicht als Nachgedanke."

Was verboten ist: Einleitung nur als Keyword-Match auf die Stellenanzeige.
> ✗ „Als jemand mit Erfahrung in LangGraph bewerbe ich mich auf Ihre Stelle als AI Engineer"
> ✓ „Seit anderthalb Jahren baue ich KI-Systeme, die produktiv laufen. Chaos in geordnete
>    Pipelines zu übersetzen, ist genau die Arbeit, bei der ich morgens aufwache."

### 2. KONKRETES ERGEBNIS — MINDESTENS EINMAL (Block 2 oder Block 3)
Nicht nur WAS du getan hast, sondern WAS DADURCH passiert ist.

| Schlecht (Aktivität) | Gut (Ergebnis) |
|---|---|
| „Ich baue Multi-Agent-Systeme" | „Das System läuft seit 4 Monaten produktiv, kein manueller Eingriff seither" |
| „Ich habe einen IT-Support-Praktikum absolviert" | „70% der Tickets konnte ich direkt lösen, ohne Weiterleitung" |
| „Ich automatisiere Workflows" | „Damit habe ich 3 Stunden manuelle Arbeit pro Tag eingespart" |

Ergebnis-Signalwörter: „dadurch", „seitdem", „Ergebnis:", „konnte ich", „reduziert", „gespart",
„verbessert", „läuft produktiv", „ohne Nacharbeit", „in X Wochen", „X% weniger".

### 3. FIRMA — WARUM GENAU DIESE (Block 1 oder Block 4)
Nicht nur Firmenname einsetzen — eine konkrete Aussage, was die Firma interessant macht.
Minimalanforderung: 1 Satz mit echtem Firmen-Bezug (Produkt / Mission / Markt / Besonderheit).

> ✗ „Ich bewerbe mich bei medfacilities, weil die Stelle zu meinen Fähigkeiten passt."
> ✓ „Ein Unternehmen, das Immobilien für Gesundheitsversorgung baut, hat ein klares Ziel —
>    und genau diese Zielorientierung schätze ich in einem Umfeld."

Hierfür: Vor dem Schreiben 2 Minuten die Firmen-Website lesen. Produkt / Mission / Besonderheit notieren.

---

## ⚠️ STIL & STIMME — VERBINDLICH, VOR ALLEM ANDEREN LESEN

> **Die maßgebliche Stilreferenz sind die zuletzt FREIGEGEBENEN Briefe (Juli 2026):
> `anschreiben-akkodis-servicetechniker`, `anschreiben-medfacilities`, `hamacher-hotels`.
> NICHT die Blocktexte weiter unten wortwörtlich kopieren — die Blöcke liefern nur Inhalt/Reihenfolge.
> Die STIMME kommt aus diesen freigegebenen Briefen.**

Jeder neue Brief muss diese fünf Regeln erfüllen, sonst ist er falsch:

1. **Warme, konkrete Ich-Stimme.** Signaturphrasen wie „das ist genau mein Ding", „damit bin ich zu Hause",
   „ich packe an". KEINE steifen Floskeln wie „In Ihren Projekten sehe ich die Möglichkeit, meine
   Fähigkeiten gezielt einzubringen, insbesondere bei …" — das ist verboten (Bewerbungsdeutsch, kalt).

2. **Jeder inhaltliche Absatz endet mit konkretem Nutzen — aber NICHT immer im selben Satzbau.**
   Der Nutzen für die Firma bleibt Pflicht ([[feedback-anschreiben-value-prop]]). Die Formel
   „Für Sie heißt das:" ist ab Juli 2026 **maximal einmal pro Brief** erlaubt, oft besser gar nicht.

   > **Warum die Regel gedreht wurde:** Bis Juli 2026 stand hier „in JEDEM mittleren Absatz".
   > Genau diese Gleichförmigkeit hat ein Recruiter als maschinengeschrieben erkannt
   > („sehr offensichtliche Claude-Formulierungen"). Dieselbe Konstruktion zwei- oder dreimal
   > auf einer Seite ist ein Schablonen-Signal, egal wie gut der Inhalt ist.
   > `validate-anschreiben.mjs` wirft bei 2× einen Error.

   Der Nutzen wird stattdessen als normaler Satz formuliert:
   > ✗ „… Für Sie heißt das: In TypeScript und Node.js brauchen Sie mich nicht einzuarbeiten."
   > ✓ „Angular müsste ich lernen, TypeScript und Node.js nicht. Das verkürzt Ihre Einarbeitung
   >    auf ein Framework."

3. **Ehrlicher aktueller Status in der Einleitung — je nach Tech-Bereich.** Das Tech-Profil deckt ZWEI
   Bewerbungsbereiche ab (User 2026-07-10):
   - **(1) Software / Fullstack Web Developer / AI / KI:** Einleitung führt mit den gebauten, produktiv
     laufenden Systemen („Seit anderthalb Jahren baue ich KI Systeme …, drei laufen produktiv"). Reisebüro
     NICHT als Opener (würde die Entwickler-Identität untergraben). KEIN „Quereinsteiger"-Label
     ([[feedback-anschreiben-no-quereinsteiger-label]]).
   - **(2) IT Support / IT Spezialist:** Einleitung nach dem Goldmuster mit ehrlichem Status:
     „Ich bin gelernter Fachinformatiker für Systemintegration … Zurzeit arbeite ich in einem Reisebüro
     im Bereich Frontend und Marketing, möchte aber zurück in die IT, weil dort meine Ausbildung und
     meine Stärken liegen." (Referenz: akkodis-servicetechniker, medfacilities.)
   In beiden Fällen: aktuellen Job nicht verstecken, aber den Opener zum Bereich passend wählen.

4. **KEINE Bindestriche im Fließtext** — auch nicht in Komposita ([[feedback-anschreiben-no-dash]]).
   „First Level Support", „Full Stack Entwickler", „Café und Cateringservice", nicht „First-Level-Support".

5. **Abschluss-Satz gehört in den LETZTEN config-Absatz:**
   „Über die Einladung zu einem persönlichen Gespräch freue ich mich." Das Template ergänzt danach nur
   „Mit freundlichen Grüßen" + Name + Unterschrift, also NICHT doppelt. (Korrigiert die alte Notiz in
   [[feedback-anschreiben-template-closing]]: der Gesprächssatz IST gewünscht, wie in den Juli-Briefen.)

Kurze, klare Sätze ([[feedback-anschreiben-kurz]]), kein Filler / keine CV-Wiederholung
([[feedback-anschreiben-no-filler]]), natürlicher Stil ([[feedback-anschreiben-natural]]).

---

## ⚠️ AI-TELLS — Formulierungen, die als maschinengeschrieben gelesen werden

Recruiter Juli 2026: „sehr offensichtliche Claude-Formulierungen". Diese Muster sind der Grund.
Sie sind grammatisch einwandfrei — genau das ist das Problem: der Rhythmus ist zu gleichförmig.
`validate-anschreiben.mjs` prüft sie automatisch.

| Muster | Ebene | Warum es auffällt | Ersatz |
|---|---|---|---|
| „nicht nur X, sondern auch Y" | **Error** | Die klassischste LLM-Konstruktion überhaupt | Zweite Hälfte als eigener Satz |
| „in der heutigen Arbeitswelt", „in einer Welt, in der …" | **Error** | Leerformel-Einstieg | Ersatzlos streichen |
| dieselbe Konstruktion 2× im Brief (z. B. „Für Sie heißt das:") | **Error** | Schablonen-Signal | Variieren oder auflösen |
| „sowohl … als auch" | Warnung | Gleiche Familie | In zwei Aussagen trennen |
| „Das ist ein anderer X als Y" als Absatz-Pointe | Warnung | Kontrast-Schluss, sehr wiedererkennbar | Absatz endet mit der Sache selbst |
| „genau hier setze ich an" | Warnung | Übergangsformel | Satz beginnt direkt |
| „es geht nicht (nur) um …" | Warnung | Rhetorische Vorwegnahme | Direkt sagen, worum es geht |
| „Leidenschaft", „ich brenne für" | Warnung | Behauptete Emotion ohne Beleg | Zeigen, was gebaut wurde |
| Dreier-Aufzählungen „A, B und C" (≥2 pro Brief) | Warnung | Gehäuft ein starker Generierungs-Marker | Eine auf zwei Glieder kürzen |

Ebenfalls generisch und deshalb wertlos, weil sie „was zeichnet das Unternehmen aus" gerade
NICHT beantworten: „innovatives Unternehmen", „spannende Projekte", „dynamisches Team",
„Marktführer", „zukunftsorientiert", „Ihr hervorragender Ruf".

> **Achtung, Regelumkehr:** „nicht nur … sondern auch" stand bis Juli 2026 in `HOW_SIGNALS`
> und war damit ein *gefordertes* Signal. Der Validator hat den Tell aktiv belohnt.
> Jetzt steht das Muster in `AI_TELLS`.

---

## STIMME-REFERENZ — Freigegebene Absätze (Juli 2026)

> Diese Absätze stammen aus tatsächlich freigegebenen und versendeten Briefen.
> Sie zeigen die richtige Stimme. Neue Briefe müssen sich an diesen Mustern orientieren,
> nicht an den Blocktexten weiter unten (die liefern nur Inhalt und Reihenfolge).

> ⚠️ **Diese Absätze sind Stimm-Referenz, keine Satzbau-Vorlage.** Sie stammen aus der Zeit
> vor dem Recruiter-Feedback und enthalten selbst zwei Muster, die inzwischen als AI-Tell
> gelten: „Für Sie heißt das:" in fast jedem Beispiel und „nicht nur … sondern auch" in zweien.
> Zu übernehmen ist die **Wärme und Konkretheit** („ist genau mein Ding", „mein Zuhause",
> konkrete Geräte und Zahlen statt Abstraktionen), nicht die Konstruktion.
> Historisch belassen, weil die Briefe so tatsächlich rausgingen.

### IT Support — Kompetenz-Absatz mit „Für heißt das:" (medfacilities Juli 2026)

> Anwendern schnell und freundlich zu helfen, ist genau mein Ding. Ich nehme Störungen
> auf, grenze Fehler ein und löse sie, verwalte Geräte wie PCs, Laptops, Drucker, Scanner
> und Smartphones und installiere Hardware und Software. Für medfacilities heißt das:
> Ihre rund 100 Anwender bekommen zuverlässigen Support im First und Second Level,
> und Ihre Technik läuft stabil.

### IT Support — Differenzierungs-Absatz mit „Für Sie heißt das:" (thinkgroup Juli 2026)

> Was mich von vielen im First Level unterscheidet, ist meine Entwicklungsseite.
> In meiner Freizeit baue ich eigene Anwendungen und Automatisierungen mit Python und n8n.
> Für Sie heißt das: Ich pflege nicht nur das Asset Management und schreibe Artikel für
> die Knowledge Base, ich erkenne auch wiederkehrende Muster in Tickets und mache
> konkrete Vorschläge, wie sich Abläufe verbessern und automatisieren lassen.
> In die Tools aus Ihrer Wunschliste arbeite ich mich erfahrungsgemäß schnell ein.

### Soft Skills — kurz und konkret (thinkgroup Juli 2026)

> Bevor ich in die IT gewechselt bin, habe ich ein eigenes Café und einen Cateringservice
> in Bonn geführt, dort zählte jeden Tag, dass der Betrieb läuft und die Kunden schnell
> bekommen, was sie brauchen. Diese Serviceorientierung bringe ich in Ihren Service Desk mit.

### Admin/Systemintegration — Kompetenz + „Für Sie heißt das:" (medfacilities Juli 2026)

> Als Fachinformatiker für Systemintegration sind Windows, Server, Netzwerke und Migrationen
> mein Zuhause. Ich vergebe Zugriffsrechte sauber, halte Systeme mit Updates aktuell und
> dokumentiere nachvollziehbar. Für Sie heißt das: Ich übernehme nicht nur den
> Anwendersupport, sondern auch die Administration dahinter, von der Geräteverwaltung
> bis zur Migration.

---

## Aufbau (Absätze)

Jedes Anschreiben folgt diesem Schema. Jeder Absatz hat eine klare Funktion:

| # | Block | Funktion | Länge |
|---|-------|----------|-------|
| 1 | **Narrativ** | Wer bin ich + **wie arbeite ich** + aktueller Status | 3–4 Sätze |
| 2 | **Passung + Nutzen** | Kernkönnen konkret → was die Firma dadurch spart/bekommt | 3–4 Sätze |
| 3 | **Beleg + Ergebnis** | 1 Hauptprojekt oder Station → **was dabei herausgekommen ist** | 3–5 Sätze |
| 4 | **Verbindung** | Mission der Firma ↔ mein Narrativ + was mich unterscheidet | 2–3 Sätze |
| 5 | **Abschluss** | „Über die Einladung zu einem persönlichen Gespräch freue ich mich." | 1 Satz |

Blöcke 2 und 3 tragen beide einen Nutzen bzw. ein Ergebnis — aber in **unterschiedlichem Satzbau**.
Wenn beide gleich gebaut sind, ist es eine Schablone (siehe AI-Tells oben).
Block 4 ist der Block, der vor Juli 2026 gefehlt hat: dort wird die Mission der Firma mit dem
eigenen Narrativ verknüpft, statt nur Stellenprofil und Lebenslauf abzugleichen.

---

## Block 1 — Einleitung (rollenspezifisch)

### Fullstack Web Developer

Als Fullstack Developer beschäftige ich mich intensiv mit der Entwicklung moderner Webanwendungen und skalierbarer Softwaresysteme. Dabei arbeite ich sowohl im Frontend als auch im Backend und lege großen Wert auf stabile, wartbare und technisch saubere Lösungen. Daher bewerbe ich mich auf die ausgeschriebene Position als [POSITION].

### Software Engineer

Als Softwareentwickler beschäftige ich mich mit dem Bau robuster, wartbarer Systeme, von Architekturen für APIs über Datenverarbeitungspipelines bis hin zu Weboberflächen. Mein Fokus liegt auf sauberem Code, klaren Schnittstellen und Lösungen, die im Produktivbetrieb verlässlich funktionieren. Auf diese Grundlage hin bewerbe ich mich auf die Position als [POSITION].

### AI Engineer

Als Entwickler mit Schwerpunkt auf agentischen KI Systemen baue ich produktionsreife Pipelines, die LLMs, Architekturen mit mehreren Agenten und reale Geschäftsprozesse miteinander verbinden. In den letzten anderthalb Jahren habe ich drei produktiv laufende Systeme dieser Art umgesetzt. Mir ist wichtig, dass solche Systeme nicht nur prototypisch funktionieren, sondern stabil, nachvollziehbar und frei von Halluzinationen laufen. Genau diese Anforderungen sehe ich in der ausgeschriebenen Position als [POSITION].

### AI Automation Engineer

Als Entwickler mit Fokus auf KI gestützter Prozessautomatisierung verbinde ich klassische Workflow Orchestrierung (n8n, Webhooks, APIs) mit modernen LLM Architekturen mit mehreren Agenten (LangGraph). Mein Anspruch ist, automatisierte Abläufe zu bauen, die in der Praxis zuverlässig laufen und gleichzeitig flexibel anpassbar bleiben. Daher bewerbe ich mich auf die ausgeschriebene Position als [POSITION].

### Agentic AI Consultant (Public Sector / Enterprise)

Systeme mit mehreren Agenten und autonome Workflows bilden den Kern meiner aktuellen Projektarbeit. In den letzten anderthalb Jahren habe ich drei produktiv laufende agentische KI Systeme konzipiert und umgesetzt, darunter ein Zentrum für Cybersicherheit und eine vollautonome Reiseagentur mit echten Buchungen. KI Lösungen mit messbarem Mehrwert in regulierten und sicherheitskritischen Kontexten zu gestalten, ist genau die Richtung, in die ich meine Praxis als nächstes ausrichten möchte. Daher bewerbe ich mich auf die Position als [POSITION].

---

## Block 2 — Technische Kompetenz (rollenspezifisch)

### Fullstack Web Developer

In meinen Projekten entwickle ich komplexe Weboberflächen mit modernen Technologien wie TypeScript, React, Next.js und Node.js, ergänzt um Systeme auf Basis von APIs und um Automatisierungsprozesse. Besonders interessieren mich Anwendungen, bei denen technische Prozesse transparent visualisiert, überwacht und gesteuert werden können. Themen wie State Management, die Integration von APIs, Fehlerhandling, Logging sowie die strukturierte Verarbeitung großer Datenmengen gehören zu meinem Arbeitsalltag.

### Software Engineer

Meine technische Basis bilden Node.js, TypeScript, React/Next.js, FastAPI sowie ein solides Verständnis für API Design, ereignisgesteuerte Architektur und Datenbanken (MongoDB, SQL). Ich arbeite regelmäßig mit Docker und CI/CD Workflows und lege Wert auf Themen wie sauberes Error Handling, Logging, Observability und nachvollziehbare Strukturen, also genau die Dinge, die im Produktivbetrieb über Stabilität entscheiden.

### AI Engineer

Mein technischer Schwerpunkt umfasst LangGraph zur Orchestrierung mehrerer Agenten, RAG Architekturen über MongoDB Vector Search und ChromaDB, Anthropic Managed Agents sowie die APIs von Claude, Gemini und OpenAI. Im Cloud Bereich arbeite ich mit AWS (Bedrock, SageMaker, WAF). Mir ist wichtig, KI Systeme so zu bauen, dass sie nicht nur funktionieren, sondern auch erklärbar, prüfbar und produktionstauglich sind, Stichworte dafür sind menschliche Kontrolle im Loop, Critic Agents, Anbindung von Tools über MCP und DSGVO konforme Maskierung personenbezogener Daten.

### AI Automation Engineer

Technisch arbeite ich mit n8n als Orchestrierungsschicht, kombiniert mit Node.js, Webhooks und APIs für die Anbindung externer Systeme. Ergänzt wird das durch LLM Integrationen (Claude, Gemini, OpenAI), RAG Architekturen und Workflows mit mehreren Agenten auf Basis von LangGraph. Themen wie Pipeline Design, die Orchestrierung von APIs, Monitoring, Queueing Strukturen und stabile Fehlerbehandlung sind dabei tägliche Praxis.

### Agentic AI Consultant

Mein technischer Schwerpunkt umfasst LangGraph zur Orchestrierung mehrerer Agenten, RAG Architekturen über MongoDB Vector Search und ChromaDB, Anthropic Managed Agents sowie die APIs von Claude, Gemini und OpenAI. Im Cloud Bereich arbeite ich produktiv mit AWS, unter anderem Bedrock, SageMaker für Anomalie Scoring auf RCF Basis und WAF für automatisierte Gegenmaßnahmen. Sauberes Error Handling, Logging, Monitoring und Kontrollpunkte mit menschlicher Freigabe sind in meinen Systemen Standard, denn gerade in regulierten Kontexten entscheiden diese Themen über Vertrauen und Akzeptanz.

---

## Block 3 — Showcase-Projekt(e)

Quelle of Truth: 4 produktive Projekte (siehe lebenslauf.md). Je nach Rolle: **1 Hauptprojekt** wählen ODER **Multi-Projekt-Showcase** verwenden.

### Variante A — AI Orchestra (für allgemeine AI / Automation / Fullstack mit AI-Bezug)

Mein Hauptprojekt AI Orchestra ist ein agentisches System mit mehreren Agenten auf Basis von LangGraph, das mehrere LLM Anbieter (Claude, Gemini, OpenAI) orchestriert. Über MongoDB Vector Search greift es als RAG Ebene auf eigene Daten zu, n8n dient als digitales Nervensystem zur Anbindung externer Dienste (Gmail, Twitter, Instagram, TikTok). Um Halluzinationen zu vermeiden, sichere ich die Qualität durch Critic Agents und strikte Kontrollpunkte mit menschlicher Freigabe ab.

### Variante B — Autonomous SecOps Agent (für Security / KI in regulierten Kontexten / Anomalie-Erkennung)

Ein weiteres Projekt ist Autonomous SecOps Agent, ein KI gestütztes Zentrum für Cybersicherheit. Die Pipeline auf LangGraph Basis (ThreatAnalyzer, InputGuardrail, HITLGate, AutoMitigator/Strategist, IncidentWriter, QACritic) verarbeitet Sicherheitslogs, scort Anomalien über AWS SageMaker RCF und kann verdächtige IPs automatisch über AWS WAF sperren, mit menschlicher Freigabe und einem Zeitfenster von 15 Minuten. Das System ist mandantenfähig mit RBAC, mit AES 256 GCM verschlüsselten Mandanten Secrets und Threat Enrichment über VirusTotal, AbuseIPDB und Shodan.

### Variante C — werbung-otomation (für Marketing-Tech / Multi-Tenant SaaS / KI-Werbe-Pipelines)

In einem weiteren Projekt, werbung-otomation, habe ich eine mandantenfähige KI Werbe Pipeline aufgebaut. Pro Mandant läuft eine Pipeline aus 8 Anthropic Managed Agents (Scraper, Analyzer, Ad Copy, Compliance, Creative, Orchestrator), Bild und Video Generierung erfolgen über fal.ai (Nano Banana 2, Veo 3, Kling v3). Eine YAML Policy Engine mit mandantenspezifischen Overrides und ein Smart Mode mit Plausibilitätsprüfungen und Opus Eskalation sorgen für robusten Produktivbetrieb.

### Variante D — Otonom-Travelagency (für Travel-Tech / autonome Booking / GDPR-kritische Systeme)

Ein weiteres produktives System ist Otonom-Travelagency, eine vollautonome KI Reiseagentur auf Basis von LangGraph. Die Pipeline aus 8 Schritten (front_desk, guardrail, itinerary, qa_critic, booking, approval_gate, upsell) führt echte Buchungen über Amadeus, Hotelbeds und Stripe aus, mit ChromaDB als RAG Ebene für Destinationsdaten. Bei kritischen Zahlungen greift ein Freigabepunkt mit menschlicher Kontrolle, DSGVO konforme Maskierung schützt personenbezogene Daten wie E-Mail, IBAN, Kreditkarten und Passdaten vor LLM Aufrufen.

### Variante E — Multi-Projekt-Showcase (für Senior / Consultant / Enterprise-Rollen)

Aktuell betreibe ich drei produktive agentische KI Systeme. AI Orchestra orchestriert mehrere LLM Anbieter über LangGraph mit Critic Agents und Kontrollpunkten mit menschlicher Freigabe. Autonomous SecOps Agent ist ein Zentrum für Cybersicherheit mit KI Unterstützung, mit AWS SageMaker RCF Scoring, automatisierten WAF Gegenmaßnahmen und einem Zeitfenster von 15 Minuten für die menschliche Freigabe, ergänzt um mandantenfähiges RBAC und Threat Enrichment via VirusTotal, AbuseIPDB und Shodan. Otonom-Travelagency ist eine vollautonome Reiseagentur mit echten Buchungen über Amadeus, Hotelbeds und Stripe, mit DSGVO konformer Maskierung personenbezogener Daten und menschlicher Freigabe bei kritischen Zahlungen. Damit decke ich technisch genau die Felder ab, die in Ihrer Anzeige beschrieben werden: autonome Analyse, Entscheidungs und Workflow Agents in regulierten, sicherheitskritischen Kontexten.

---

## Block 4 — Value Proposition (Was bringe ich der Firma)

Das ist der wichtigste Block. Hier wird konkret, **was die Firma von mir hat**.

### Gemeinsamer Rahmen — Nutzen ja, Formel nein

Value Proposition NICHT als steifer Sammelsatz, sondern als konkreter Nutzen am Ende jedes mittleren
Absatzes. Muster: erst WAS ich tue/kann, dann der Nutzen für die Firma — **im Satzbau variiert**.

> „Ich [konkretes Können / konkrete Tätigkeit]. [Konkreter Nutzen, den die Firma davon hat —
> was wird leichter, schneller, stabiler, sichtbarer.]"

Vier Varianten, damit kein Absatz wie der vorherige klingt:
> a) direkt: „Das verkürzt Ihre Einarbeitung auf ein Framework."
> b) aus Firmensicht: „Ihre Anwender merken davon nur, dass der Rollout durchläuft."
> c) als Folge: „Damit fällt die Nacharbeit weg, die sonst beim Gerätetausch anfällt."
> d) einmal pro Brief erlaubt: „Für Sie heißt das: …"

Beispiele aus freigegebenen Briefen (Stimme übernehmen, Formel nicht wiederholen):
> „Endgeräte einzurichten und ans Laufen zu bringen, ist genau mein Ding. … Für die Anwender vor Ort
> heißt das: Rollout und Gerätetausch laufen sauber, und alle können ohne Reibungsverluste weiterarbeiten."
> „Als Fachinformatiker für Systemintegration sind Windows, Server, Netzwerke und Migrationen mein
> Zuhause. Den Anwendersupport übernehme ich genauso wie die Administration dahinter."

VERBOTEN als Rahmen: „In Ihren Projekten sehe ich die Möglichkeit, meine Fähigkeiten gezielt
einzubringen, insbesondere bei …" — kalt, generisch, kein konkreter Nutzen. Nicht verwenden.

### Bausteine für [KONKRETE 2 bis 3 PUNKTE] — nach Rolle

**Fullstack Web Developer:**
- der Entwicklung übersichtlicher und zuverlässiger Benutzeroberflächen
- der strukturierten Verarbeitung und Visualisierung von Prozessdaten
- der technischen Optimierung interner Abläufe und Tools
- dem Zusammenführen von Frontend, API und Datenbank zu einem stabilen Gesamtsystem
- dem Ausbau von Monitoring, Logging und Fehlerbehandlung in bestehenden Webanwendungen

**Software Engineer:**
- der Verbesserung bestehender Systemarchitekturen hinsichtlich Stabilität und Wartbarkeit
- dem Aufbau sauber strukturierter APIs und Backend Dienste
- der Integration und Orchestrierung verschiedener interner und externer Dienste
- der Einführung von Observability (Logging, Metrics, Alerting) in produktive Systeme

**AI Engineer:**
- dem Aufbau zuverlässiger LLM Workflows mit klaren Qualitätsgates
- der Integration von RAG Komponenten und Vektordatenbanken in bestehende Produkte
- dem Design von Architekturen mit mehreren Agenten für komplexere Aufgaben
- der Etablierung von Prozessen mit menschlicher Kontrolle und Critic Agents, um Halluzinationen produktiv abzufangen
- der praktischen Brücke zwischen KI Prototyp und produktivem Betrieb

**AI Automation Engineer:**
- dem Design automatisierter Workflows von Anfang bis Ende mit n8n und externen APIs
- der Verbindung klassischer Geschäftsprozesse mit KI gestützter Bewertung und Klassifikation
- der Reduktion manueller Routinearbeit durch klar definierte Automatisierungsbausteine
- dem Aufbau stabiler Strategien für Monitoring, Queueing und Fehlerbehandlung rund um automatisierte Pipelines

**Agentic AI Consultant (Public Sector / Enterprise):**
- dem Aufbau autonomer Analyse, Entscheidungs und Workflow Agents in regulierten Kontexten
- der Konzeption von Architekturen mit mehreren Agenten, Critic Agents und Freigabepunkten mit menschlicher Kontrolle für sicherheitskritische Anwendungsfälle
- dem Design DSGVO konformer Datenflüsse mit Maskierung personenbezogener Daten und AES 256 GCM Verschlüsselung
- der Übersetzung fachlicher Anforderungen in skalierbare, regulatorisch konforme KI Architekturen
- dem Brückenschlag zwischen Stakeholder Sicht und produktiver technischer Umsetzung

---

## Block 5 — Persönlichkeit / Soft Skills

Standardformulierung (Café/Catering + Tourismus als Quelle der Soft Skills):

> "Vor meinen Umschulungen zum Fachinformatiker und Full Stack Developer war ich in der Tourismusbranche tätig und habe danach ein eigenes Café und einen Cateringservice in Bonn geführt. Diese Jahre als Selbstständiger haben mir Verantwortungsbewusstsein, eine strukturierte Arbeitsweise und Belastbarkeit beigebracht. Der tägliche Kontakt mit Menschen hat meine Kommunikationsfähigkeit und meine serviceorientierte Arbeitsweise stark geprägt.
>
> Ich arbeite mich schnell in komplexe fachliche Themen ein, schätze die Zusammenarbeit mit unterschiedlichen Bereichen und übernehme gerne Verantwortung."

**Consultant-Variante** (für Senior / Consultant / Public-Sector-Rollen):

> "Vor meinen Umschulungen zum Fachinformatiker und Full Stack Developer war ich in der Tourismusbranche tätig und habe danach ein eigenes Café und einen Cateringservice in Bonn geführt. Diese Jahre als Selbstständiger haben mir den Blick für Stakeholder und Geschäft geschult: fachliche Anforderungen aufnehmen, Wirkung und Prioritäten kommunizieren, technische Lösungen verständlich übersetzen. Genau diese Mischung aus praktischem Engineering und Geschäftssicht möchte ich in Ihre Projekte einbringen."

**Hinweis:** Tourismus wird hier nur als Quelle für Soft Skills genannt (Kommunikation, Stressresistenz, Kundenkontakt), nicht als fachlicher Hintergrund oder Karriere-Story. Der technische Fokus bleibt klar.

---

## Block 6 — Abschluss

Der LETZTE config-Absatz enthält den Gesprächssatz:

> „Über die Einladung zu einem persönlichen Gespräch freue ich mich."

Das Template ergänzt danach automatisch „Mit freundlichen Grüßen" + Name + Unterschrift. Also den
Gesprächssatz genau EINMAL im Config setzen, nicht „Mit freundlichen Grüßen" selbst schreiben (sonst
doppelt). So ist es in den freigegebenen Juli-2026-Briefen gelöst. (Die ältere Notiz „kein Gesprächssatz"
in [[feedback-anschreiben-template-closing]] ist überholt.)

---

## Header-Format (immer gleich, minimal)

```
Gökhan Cakmak
53121 Bonn
+49 163 9734475 | gokhan.cakmak@web.de

[Firmenname als juristische Person, z. B. "ALFRED TALKE GmbH & Co. KG"]
[Straße und Hausnummer]
[PLZ Ort]

Bonn, [DATUM]

Bewerbung als [POSITION]

Sehr geehrter Herr [Nachname], / Sehr geehrte Frau [Nachname],
```

**Betreff-Regel:** `Bewerbung als [POSITION]` — [POSITION] ist der SAUBERE Job-Titel. KEINE `(m/w/d)`, keine Portal-/Tech-Tags (`.NET`, `100% Remote`, `Vollzeit`), keine Klammern wie `(Junior)` (ausschreiben). Siehe [[feedback-anschreiben-subject-clean]].

**Pflichtregeln für Recipient + Anrede** (siehe [[feedback-anschreiben-recipient]]):
- **Recipient-Block ist die offizielle Firmenadresse** (juristischer Name + Straße + PLZ Ort, KEIN Land) — NICHT der Recruiter-Name, NICHT die Abteilung
- **Anrede mit Nachname**, wenn die Kontaktperson bekannt ist: "Sehr geehrter Herr Müller," / "Sehr geehrte Frau Schmidt,"
- Nur als Fallback, wenn keine Kontaktperson genannt ist: "Sehr geehrte Damen und Herren,"
- KEIN LinkedIn, GitHub, Portfolio, Tagline im Header (siehe [[feedback-anschreiben-contact-minimal]])
- KEIN Foto im Anschreiben (siehe [[feedback-anschreiben-no-photo]])

---

## Skill-Katalog — Was Gökhan einbringt (Quelle für Block 4)

Dieser Katalog ist die zentrale Wertbibliothek. Pro Bewerbung 2 bis 3 Punkte auswählen, die zur Stelle passen.
Diese Stichpunkte sind bereits ohne Bindestrich formuliert, weil sie oft direkt in Anschreiben-Sätze
einfließen, siehe [[feedback-anschreiben-no-dash]]. Im CV (`cv.skills`) dürfen Bindestriche dagegen bleiben.

### Agentische KI Praxis

- Produktionsreife Systeme mit mehreren Agenten bauen (LangGraph, Critic Agents, Kontrollpunkte mit menschlicher Freigabe)
- Orchestrierung mehrerer LLMs über Claude, Gemini, OpenAI und Anthropic Managed Agents
- RAG Architekturen mit MongoDB Vector Search und ChromaDB aufsetzen
- Model Context Protocol (MCP) zur Anbindung von Tools nutzen
- Autonome Analyse, Entscheidungs und Workflow Agents in regulierten Kontexten konzipieren

### Cloud & ML

- AWS Stack produktiv nutzen: Bedrock, SageMaker (Anomalie Scoring auf RCF Basis), WAF (automatisierte Gegenmaßnahmen)
- fal.ai für KI Bild und Video Generierung (Nano Banana 2, Veo 3, Kling v3) integrieren
- Echte APIs von Drittsystemen anbinden (Amadeus, Hotelbeds, Stripe, Twilio, VirusTotal, AbuseIPDB, Shodan, Modash)

### Web-Engineering

- Sauber strukturierte REST APIs mit Node.js, Express und FastAPI bauen
- React, Next.js und TypeScript Frontends mit klarer Komponentenarchitektur entwickeln
- Full Stack Anwendungen von Anfang bis Ende (Frontend, API, Datenbank, Auth, Payment) liefern
- Ereignisgesteuerte Architekturen entwerfen und implementieren
- Echtzeitschicht mit WebSocket und SSE umsetzen

### Workflow & Automatisierung

- Workflow Automatisierung über n8n und Webhooks orchestrieren
- Datenpipelines für strukturierte Verarbeitung großer Datenmengen aufsetzen
- Queueing Strukturen, Background Jobs und API Orchestrierung konzipieren

### Sicherheit, Compliance & Mandantenfähigkeit

- Mandantenfähige Architekturen mit RBAC (super_admin / admin / analyst) bauen
- AES 256 GCM Verschlüsselung für Mandanten Secrets implementieren
- DSGVO konforme Maskierung personenbezogener Daten (E-Mail, IBAN, Kreditkarte, Pass) vor LLM Aufrufen
- Audit Logging und Compliance Trails in produktiven Systemen verankern

### Engineering-Haltung / Qualität

- Lösungen denken, die nicht nur funktionieren, sondern lange wartbar bleiben
- Frühzeitig Qualitätsgates (menschliche Kontrolle im Loop, Critic Agents, Reviews, Tests) einbauen, statt später zu fixen
- Komplexe Anforderungen in klare technische Schritte zerlegen
- Monitoring, Logging und Observability in bestehende Systeme einziehen
- Pragmatisch zwischen schnell liefern und sauber bauen abwägen können

### Unternehmerischer Hintergrund (Brücke zwischen Business und IT)

- Stakeholder Kommunikation und Anforderungsanalyse aus eigener Selbstständigkeit
- Kundenorientiertes Denken: Software muss im echten Einsatz funktionieren
- Belastbarkeit und Überblick in stressigen Situationen
- Schnelles Einarbeiten in fremde Domänen und neue Tools (n8n, LangGraph, Claude API, AWS SageMaker, MCP, jeweils nach wenigen Wochen produktiv)
- Direkte, klare Kommunikation mit unterschiedlichen Zielgruppen

---

## Referenz-Beispiel: Mobivendition GmbH — Fullstack mit AI Fokus

Dieses Beispiel zeigt, wie die Bausteine zusammenkommen. Es dient als Stilreferenz für
Länge und Substanz (4 Absätze + Abschluss, jeder Inhaltsabsatz mit „Für heißt das:").

```
Gökhan Cakmak
53121 Bonn
+49 163 9734475 | gokhan.cakmak@web.de

Mobivendition GmbH
Am Bahnhof 132
51147 Köln

Bonn, [DATUM]

Bewerbung als Fullstack Entwickler mit AI Fokus

Sehr geehrte Damen und Herren,

als Fullstack Developer beschäftige ich mich intensiv mit der Entwicklung
moderner Webanwendungen und skalierbarer Softwaresysteme. Dabei arbeite
ich sowohl im Frontend als auch im Backend und lege großen Wert auf
stabile, wartbare und technisch saubere Lösungen. Daher bewerbe ich mich
auf die ausgeschriebene Position als Fullstack Developer im Bereich
SCADA und Web UI.

In meinen Projekten entwickle ich komplexe Weboberflächen mit TypeScript,
React und Node.js, ergänzt um API Integrationen und Automatisierungsprozesse.
Besonders interessieren mich Anwendungen, bei denen technische Prozesse
transparent visualisiert, überwacht und gesteuert werden können. Themen
wie State Management, API Integration, Fehlerhandling und Logging gehören
zu meinem Arbeitsalltag. Für Mobivendition heißt das: Ihre SCADA
Oberflächen bekommen stabile Datenströme, klare Statusanzeigen und robuste
Fehlerbehandlung, die auch im Schichtbetrieb zuverlässig funktionieren.

Mein Hauptprojekt AI Orchestra ist ein agentisches System mit mehreren
Agenten auf Basis von LangGraph, das mehrere LLM Anbieter (Claude,
Gemini, OpenAI) orchestriert. Über MongoDB Vector Search greift es als
RAG Ebene auf eigene Daten zu, n8n dient als digitales Nervensystem zur
Anbindung externer Dienste. Critic Agents und Kontrollpunkte mit
menschlicher Freigabe sichern die Qualität. Für Sie heißt das: Ich bringe
nicht nur Frontend Know how mit, sondern auch Erfahrung mit Event Systemen,
externen APIs und stabilen automatisierten Pipelines.

Vor meinen Umschulungen zum Fachinformatiker und Full Stack Developer
war ich in der Tourismusbranche tätig und habe danach ein eigenes Café
und einen Cateringservice in Bonn geführt. Diese Jahre als Selbstständiger
haben mir Verantwortungsbewusstsein, strukturiertes Arbeiten und
Belastbarkeit beigebracht. Pragmatisch zu priorisieren und trotzdem
sauber zu bauen, ist mein Anspruch.

Über die Einladung zu einem persönlichen Gespräch freue ich mich.

Mit freundlichen Grüßen
Gökhan Cakmak
```

---

## Anpassungs-Workflow für neue Bewerbungen

1. **Rolle bestimmen** → Fullstack / Software / AI / AI Automation / Agentic AI Consultant
2. **Block 1 wählen** (rollenspezifische Einleitung)
3. **Block 2 wählen** (rollenspezifische Tech-Kompetenz)
4. **Block 3 wählen:**
   - 1 Hauptprojekt-Variante (A / B / C / D) für Junior bis Mid-Level
   - Multi-Projekt-Showcase (Variante E) für Senior / Consultant / Enterprise
5. **Block 4 bauen** → Rahmenformel + 2–3 Bausteine aus dem Skill-Katalog, die auf die JD passen
6. **Block 5** Standard (oder Consultant-Variante bei Senior-/Beratungsrollen)
7. **Block 6** unverändert
8. **Header** auf Firma / Datum anpassen (offizielle Firmenadresse, Anrede mit Nachname)

Generierung über `node generate-bewerbung.mjs companies/[firma].mjs`
(siehe [[feedback-template-automation]]).

---

## Showcase-Auswahl-Matrix (welches Projekt zu welcher Rolle)

| Rolle | Primäre Variante | Alternative |
|-------|------------------|-------------|
| Fullstack Web Developer | A (AI Orchestra) | — |
| Software Engineer | A (AI Orchestra) | B (SecOps für sicherheits-/präzisionsorientierte Rollen) |
| AI Engineer | A (AI Orchestra) | E (Multi-Projekt) bei stark agentischem JD |
| AI Automation Engineer | A (AI Orchestra) | C (werbung-otomation) bei Marketing-Tech |
| Marketing / Adtech | C (werbung-otomation) | A (AI Orchestra) |
| Travel-Tech | D (Otonom-Travelagency) | A (AI Orchestra) |
| Security / SecOps | B (Autonomous SecOps) | A (AI Orchestra) |
| Public Sector / Regulierte Industrien | E (Multi-Projekt) | B (SecOps) bei Defense/Verteidigung |
| Agentic AI Consultant (Senior) | E (Multi-Projekt) | — |
