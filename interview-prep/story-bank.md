# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

<!-- Stories will be added here as you evaluate offers -->
<!-- Format:
### [Theme] Story Title
**Source:** Report #NNN — Company — Role
**S (Situation):** ...
**T (Task):** ...
**A (Action):** ...
**R (Result):** ...
**Reflection:** What I learned / what I'd do differently
**Best for questions about:** [list of question types this story answers]
-->

---

### [Betrieb & Prozesse] Wo im Tagesgeschaeft die Zeit verlorengeht
**Source:** Report #080 — Fahrrad XXL Feld GmbH — Fachinformatiker Anwendungsentwicklung / IT-Support
**S:** Eigenes Cafe mit Cateringservice in Bonn, drei Jahre. Wareneinkauf, Kasse und Personalplanung in einer Hand.
**T:** Der Laden musste laufen, waehrend parallel Catering-Auftraege geplant, eingekauft und abgerechnet wurden.
**A:** Bestellungen, Schichten und Abrechnung selbst strukturiert statt jede Woche neu zu improvisieren; wiederkehrende Ablaeufe in feste Routinen ueberfuehrt.
**R:** Der Betrieb lief planbar, auch an Tagen mit parallelem Catering.
**Reflection:** Der Zeitfresser war nie die Arbeit selbst, sondern Doppelerfassung und Nachfragen. Das war der Ausloeser fuer die Umschulung.
**Best for questions about:** fehlende IT-Berufsjahre · Retail-, Kassen- und Werkstattprozesse · Belastbarkeit · "Warum IT?" · Eigenverantwortung

### [Support] Anwender melden Symptome, nicht Ursachen
**Source:** Report #080 — Fahrrad XXL Feld GmbH — Fachinformatiker Anwendungsentwicklung / IT-Support
**S:** 1st Level IT Support bei der GIS GmbH in Bonn, dazu Personalplanung und Zeiterfassung im Enterprise-Umfeld.
**T:** Stoerungen aufnehmen, loesen oder sauber weitergeben.
**A:** Jeden Vorgang so dokumentiert, dass der Naechste sieht, was bereits geprueft wurde. Bei wiederkehrenden Faellen kurz erklaert statt nur repariert.
**R:** Weniger Rueckfragen zum selben Thema.
**Reflection:** Zuhoeren ist der erste Diagnoseschritt; die gemeldete Stoerung ist selten die eigentliche.
**Best for questions about:** Systeme am Laufen halten · Umgang mit Kollegen ohne IT-Hintergrund · Dokumentation · Eskalation

### [Technik & Qualitaet] Trennung gehoert in die Datenbank, nicht in die Anwendung
**Source:** Report #080 — Fahrrad XXL Feld GmbH — Fachinformatiker Anwendungsentwicklung / IT-Support
**S:** GuestMatrix, eine Plattform, auf der mehrere Kunden getrennt voneinander arbeiten.
**T:** Kundendaten muessen technisch getrennt sein, nicht nur nach Absprache.
**A:** Mandantentrennung per Row-Level-Security in die Datenbank gelegt, Eingaben an der Systemgrenze validiert (Zod), Testsuite (Vitest) dazu.
**R:** Lauffaehig und getestet, oeffentlich auf GitHub einsehbar.
**Reflection:** Sicherheit, die von der Disziplin der Entwickler abhaengt, ist keine.
**Best for questions about:** "Was hast du gebaut?" · Datenschutz/DSGVO · Qualitaetssicherung · Architekturentscheidungen

### [KI & Automatisierung] Das System bereitet vor, ein Mensch entscheidet
**Source:** Report #080 — Fahrrad XXL Feld GmbH — Fachinformatiker Anwendungsentwicklung / IT-Support
**S:** Automatisierte Systeme, die Aufgaben bis zur Buchung bzw. bis zur Sperrung einer IP-Adresse vorbereiten (Otonom-Travelagency, Autonomous SecOps Agent).
**T:** Automatisierung sollte Arbeit abnehmen, ohne Kontrolle abzugeben.
**A:** Feste Freigabepunkte eingebaut: das System bereitet vor, ein Mensch gibt frei, jeder Schritt bleibt protokolliert.
**R:** Nachvollziehbar, wer was ausgeloest hat.
**Reflection:** Vertrauen in Automatisierung entsteht nicht durch Genauigkeit, sondern durch Nachvollziehbarkeit.
**Best for questions about:** "Was sind diese KI-Anwendungen?" · "Was, wenn das System Mist baut?" · Bestell- und Nachbestellautomatik · Verantwortung fuer automatisierte Entscheidungen
