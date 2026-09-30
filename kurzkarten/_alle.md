# Kurzkarte — gilt für JEDE Bewerbung

Stand 29.09.2026. Ersetzt beim Schreiben das Lesen von `bewerbung.md` (43 KB, großteils Stand Juli
und in Teilen überholt: „Für Sie heißt das", Goldmuster Fullstack, Block-Katalog). Die Regeln hier
stammen aus den freigegebenen Briefen und den Feedback-Notizen; bei Widerspruch gilt die neuere Notiz.

## Ablauf (Ziel: 1 Generate)

```
node fetch-jd.mjs <url>                                   # → jds/<slug>.md
node new-bewerbung.mjs <slug> <profil> jds/<slug>.md     # → Config + Report-Gerüst + Nr.
# Adresse/HRB: WebSearch "<Firma> Impressum HRB Adresse" (nie Impressum-URLs raten)
# Report A–E + Score + Tracker-Notiz, dann Config füllen
node generate-bewerbung.mjs companies/<slug>.mjs --check  # bis ✅
node generate-bewerbung.mjs companies/<slug>.mjs          # PDFs + Begleitmail (config.mail)
node track-bewerbung.mjs <slug>
```

- Datum nie aus der Anzeige (datePosted), immer Systemuhr — die Skripte machen das selbst.
- Sprache ≠ Deutsch oder andere große Abweichung: VORHER fragen, auch wenn die Anzeige es verlangt.
- Web3/Krypto: SKIP. Öffentlicher Dienst ab EG 12 / gehobener Dienst: Bachelor Pflicht = Blocker.
- Entfernung > 100 km: nie Umzug versprechen; Default „mobiles Arbeiten + Präsenztage", sonst fragen.
- Gesendete Bewerbungen (Config + PDF) nie nachträglich ändern oder neu generieren.

## Anschreiben — harte Regeln

- **Fakten nur aus `cv.md` und freigegebenen Briefen.** Nichts aus der Anzeige als eigene Erfahrung spiegeln.
- **Kein Gedankenstrich/Bindestrich im Fließtext** („Windows Systeme", „UNO Flüchtlingshilfe"). Ergänzungsstrich „Kommunikations- und …" ist ok.
- **Keine Gap-Negation** („Sie suchen X, das bringe ich nicht mit"). Fehlendes Werkzeug einmal offen als Einarbeitung benennen, im Technik-Abgleich, nicht am Anfang.
- **P1 rein faktisch:** Bewerbung + Qualifikation + Praxis. Kein „weil …", kein „reizt mich besonders".
- **Kein Quereinsteiger-Label in Tech-Briefen** (Bereich 1, IT-Support). Nur Quereinstiegs-Profil sagt „motivierter Quereinsteiger".
- **Reisegesucht.com ist beendet (07/2026):** nie „zurzeit arbeite ich …".
- **AI-Tells vermeiden** in eigenem Text: „nicht nur … sondern auch", „genau hier setze ich an", „Leidenschaft", „Für Sie heißt das" max. 1×.
- **Tricolon:** max. 1 Satz mit ≥ 2 Kommas + folgendem „und". Vor dem Check Satz für Satz prüfen.
- Schlicht statt Werbesprache („finde ich ehrlich gut", „Störungen verschwinden" → streichen).
- Projekte: „lauffähig und getestet", nie „läuft produktiv" (keine Live-Kunden).
- Kein „Mit freundlichen Grüßen" in den Absätzen, kein Foto, kein LinkedIn/GitHub im Kopf — Template setzt das.
- Betreff: nur Stellentitel, ohne (m/w/d), „Vollzeit", „(Junior)", „100% Remote".
- Anrede: „Sehr geehrte Frau / Sehr geehrter Herr <Nachname>,", Empfänger = juristische Firmenadresse.
- Seitenlänge: 1 Seite. Gekürzt wird oben, feste Bausteine (`BLOCKS`) nie.

## CV — harte Regeln

- Genau 1 Seite. Stationen fix (`defaultExperience`), Zertifikate fix — nie per Config überschreiben.
- Kein Overclaim: Cloud = AWS; Azure, M365-Admin, SharePoint, Entra ID, Intune nur als „Konzepte/Einarbeitung".
- Python nur Grundlagen, Node.js/TypeScript immer zuerst.
- Englisch nie über B1 („technisches Lesen sicher, Verständigung gut").
- Tagline max. 3 Segmente, eine Zeile; Schwerpunkte-Zeile max. 3 kurze Tags, eine Zeile.

## Profile

| Profil | Karte | Wann |
|---|---|---|
| `bereich1` | `bereich1.md` | Fullstack, Frontend, Web, Software Engineer |
| `it-support` | `it-support.md` | Service Desk, 1st/2nd Level, Systemintegration, Administration |
| `quereinstieg` | `quereinstieg.md` | Elektro-, Service-, Netzwerktechnik ohne Fachausbildung |
| ohne Preset | — | Tourismus, Marketing, Vertrieb (TR): letzte Config dieses Typs + `bewerbung-<typ>.md` |
