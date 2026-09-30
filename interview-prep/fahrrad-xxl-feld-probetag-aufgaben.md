# Probetag Fahrrad XXL Feld GmbH — womit du rechnen musst

**Stelle laut aktueller Anzeige (Personio, Stand 10.09.2026):**
**Fachinformatiker Systemintegration/Anwendungsentwicklung im First-, Second- und Third-Level-Support (m/w/d)**, St. Augustin, Vollzeit, befristet.
**URL:** https://fxxl-feld-gmbh.jobs.personio.de/job/2692754?language=de
**Ansprechpartner in der Anzeige:** Philipp Schneider, Tel. 02241 9773-113, bewerbung.sa@fahrrad-xxl.de
**Bezug:** [Interview-Intel](fahrrad-xxl-feld-anwendungsentwicklung.md) · [Report 080](../reports/080-fahrrad-xxl-feld-anwendungsentwicklung-sankt-augustin-2026-08-26.md)

> ⚠️ **Der Zuschnitt hat sich verschoben.** Dieselbe Personio-ID trug im August den Titel
> *IT Applikations- und Prozessmanager*. Heute steht dort Support in drei Leveln plus
> Systemintegration, Entwicklung ist der zweite Block. **Für den Probetag heißt das:
> Der Tag findet überwiegend an Windows-Server, M365 und am Ticketsystem statt,
> nicht an deinem Code.** Die Entwicklungs- und KI-Aufgaben kommen als Zusatz,
> und genau dort holst du deinen Vorsprung.

**Stack laut Anzeige:** Windows Server (AD, DNS, DHCP, Printserver, GPO, Fileserver), M365 mit Entra und SharePoint, MDM Intune, TeamViewer, Jira, Zendesk, Melibo, VPN Forti und Fortigate, Veeam, Navision, Dahua (Kameras), Zeiterfassung, Cycle, Jeegy.

---

## 1. Wie so ein Tag in einem 200-Mann-Familienbetrieb abläuft

Erwartungsrahmen, abgeleitet aus Größe und Struktur, nicht aus Kandidatenberichten:

| Zeit | Was passiert |
|---|---|
| Ankunft | Rundgang, Vorstellung im Team, Besucherausweis, evtl. Gastzugang |
| Vormittag | Du sitzt neben jemandem im Ticketsystem und übernimmst 2–4 echte Vorgänge |
| Mittag | Café Velo, informeller Teil, wird trotzdem bewertet |
| Nachmittag | Eine abgegrenzte Aufgabe allein: Arbeitsplatzaufbau, Benutzeranlage oder eine kleine Auswertung |
| Abschluss | 20–30 Minuten Gespräch: „Was ist dir aufgefallen? Was würdest du zuerst angehen?" |

**Bewertet wird nicht, ob du ihre Systeme kennst.** Bewertet wird: Wie gehst du an ein unbekanntes System heran, fragst du bevor du klickst, wie sprichst du mit einem Verkäufer, der gerade Kundschaft hat, und schreibst du auf, was du getan hast.

---

## 2. Die wahrscheinlichen Aufgaben

### A — Arbeitsplatz aufbauen und übergeben · sehr wahrscheinlich
Steht wörtlich in der Anzeige („On- und Offboardings sowie Arbeitsplatzaufbau").

**Wie es kommt:** „Der neue Kollege im Verkauf fängt Montag an. Bau ihm den Platz auf."

**Dein Ablauf, laut aussprechen während du arbeitest:**
1. Was gehört zum Standard-Arbeitsplatz hier? Gibt es ein Image oder eine Checkliste?
2. Hardware prüfen, Gerät benennen nach eurer Namenskonvention
3. In die Domäne aufnehmen, richtige OU, damit die GPOs greifen
4. Standardsoftware, Drucker verbinden, Netzlaufwerke prüfen
5. M365-Anmeldung testen, Outlook-Profil, ggf. Intune-Enrollment
6. **Abschlusstest mit dem Benutzerkonto, nicht mit dem Adminkonto**
7. Inventar und Doku aktualisieren

**Der Satz, der zählt:** „Gibt es hier eine Checkliste für den Standard-Arbeitsplatz? Wenn nicht, schreibe ich mit, was ich gemacht habe, dann habt ihr sie danach."

### B — Benutzer anlegen: AD, Entra, Rechte · sehr wahrscheinlich
**Wie es kommt:** „Leg mal den neuen Mitarbeiter an."

**Ablauf:** AD-Benutzer nach eurer Namenskonvention, dann in die richtigen Gruppen (Rechte über Gruppen, nie direkt am Benutzer), M365-Lizenz in Entra, Mailbox und Verteiler, Fileserver- und SharePoint-Zugriff, Zeiterfassung, Übergabe des Passworts über einen sicheren Weg mit Änderung bei der ersten Anmeldung.

**Fallstrick:** Kein Kopieren eines bestehenden Benutzers ohne Prüfung. „Ich kopiere ungern einen bestehenden Benutzer, weil man sich damit alte Rechte mit einkauft. Ich gehe lieber über die Rollengruppe."

**Offboarding-Gegenstück:** Konto deaktivieren statt löschen, Anmeldung sperren, Mail-Weiterleitung oder Postfach-Freigabe an die Führungskraft, Lizenz erst nach Fristablauf abziehen, Hardware zurück, alles dokumentiert.

### C — Echte Tickets aus Jira oder Zendesk · sehr wahrscheinlich
Rechne mit dem üblichen Retail-Repertoire:

| Meldung des Anwenders | Die eigentliche Ursache, die du prüfst |
|---|---|
| „Der Drucker geht nicht" | Warteschlange hängt, Spooler, Treiber, Papier, falscher Standarddrucker, Printserver-Freigabe |
| „Ich komme nicht ins Laufwerk" | Gruppenmitgliedschaft, Anmeldeskript, GPO nicht gezogen, DNS |
| „Outlook fragt dauernd nach dem Passwort" | Zwischengespeicherte Anmeldedaten, MFA-Registrierung, Lizenz abgelaufen |
| „Die Kasse hängt" | Netzwerk, Serverdienst, Bondrucker, Kartenterminal, Datenbanksperre |
| „Der Handscanner verbindet nicht" | WLAN-Zelle, Pairing, Akku, MDM-Profil |
| „Der Kunde kommt nicht ins Gäste-WLAN" | Gäste-SSID, Portal, Firewall-Regel |

**Dein Ablauf** (Abschnitt 7 der Interview-Intel, hier praktisch angewendet):
Auswirkung feststellen, wer ist betroffen (einer oder alle), reproduzieren, letzte Änderungen prüfen, Übergangslösung bereitstellen damit weitergearbeitet werden kann, Ursache suchen, sauber dokumentieren.

**Was dich vom Durchschnitt trennt:** Du fragst zuerst „seit wann?" und „bei allen oder nur bei dir?", bevor du irgendetwas anfasst. Und du gibst dem Verkäufer eine Zwischenlösung, damit er weiter kassieren kann, während du die Ursache suchst. Im Laden zählt Verkaufsfähigkeit vor der eleganten Lösung.

### D — Remote-Support über TeamViewer · wahrscheinlich
Steht in der Anzeige, wahrscheinlich auf eine andere Fläche oder Filiale.

**Regeln, die du zeigst:** Ankündigen bevor du übernimmst, sagen was du gerade tust, keine privaten Fenster durchsuchen, Sitzung sauber beenden, danach kurz zusammenfassen was geändert wurde.

### E — Drucker, Printserver, Freigaben, GPO · wahrscheinlich
Klassische Nachmittagsaufgabe: einen Drucker am Printserver bereitstellen und per GPO an eine Abteilung verteilen, oder eine Ordnerfreigabe einrichten.

**Merksatz für die Rechtevergabe:** Benutzer in Gruppe, Gruppe auf Ordner, Rechte nie direkt an Personen. Freigabe- und NTFS-Rechte greifen zusammen, das restriktivere gewinnt.

### F — Netzwerk-Kleinigkeit · mittel
DHCP-Bereich prüfen, einen DNS-Eintrag anlegen, ein Gerät ins richtige VLAN, WLAN-Abdeckung in der Halle. Große Verkaufsfläche mit Scannern und Kassen ist hier ein reales Thema.

**Handgriffe, die sitzen müssen:** `ipconfig /all`, `ipconfig /flushdns`, `nslookup`, `ping`, `tracert`, `gpupdate /force`, `gpresult /r`, `net use`, Ereignisanzeige.

### G — Fortigate und Veeam · mittel, eher erklären als anfassen
Erwarte hier keine Konfiguration am ersten Tag, sondern Fragen: Wie funktioniert VPN grundsätzlich, was ist der Unterschied zwischen Firewall-Regel und NAT, warum reicht ein Backup allein nicht.

**Antwort, die trägt:** „Ein Backup ist erst dann ein Backup, wenn eine Rückspielung getestet wurde. Sonst ist es eine Hoffnung." Dazu 3-2-1 nennen und fragen, ob Restores regelmäßig getestet werden.

**Wenn dir jemand die Fortigate-Konsole hinschiebt:** „Bevor ich hier eine Regel ändere, würde ich gerne wissen, ob es einen Änderungsprozess gibt und ob wir einen Zeitpunkt außerhalb der Öffnungszeiten wählen sollten."

### H — Warenwirtschaft, Kasse, Werkstatt · mittel
`Navision` ist Microsoft Dynamics NAV, die Warenwirtschaft dahinter. `Cycle` ist mit hoher Wahrscheinlichkeit die Branchenlösung für den Fahrradhandel (FullSystem „Cycle"), **das bleibt eine Vermutung, also Frage statt Behauptung.** `Jeegy` ist öffentlich nicht auffindbar, wahrscheinlich ein kleines internes oder Nischenwerkzeug.

**Die beste Frage des Tages:** „Wo liegt bei euch die führende Datenhaltung für den Artikelbestand, in Navision oder in Cycle, und wie synchronisieren sich die beiden?" Wer das fragt, hat verstanden, wo in einem Handelsbetrieb die Fehler entstehen.

**Kasse und Recht:** TSE, KassenSichV und GoBD nicht vergessen. An einer Kasse wird nichts ausprobiert. Details in Abschnitt 8 der Interview-Intel.

### I — Kameras und Zeiterfassung · niedrig bis mittel
Dahua-Kameras und Zeiterfassung stehen in der Anzeige unter „hauseigene Systeme". Möglich: einen Kamera-Stream prüfen, einen Zeiterfassungs-Datensatz korrigieren.

**Rote Linie:** Kameraaufnahmen und Zeitdaten sind personenbezogene Daten mit Mitbestimmungsbezug. „Ich schaue mir Aufnahmen nur an, wenn es dafür einen Anlass und eine Freigabe gibt." Dieser Satz ist an dieser Stelle mehr wert als jede technische Antwort.

### J — Deine Heimaufgabe: Auswertung, Skript, Schnittstelle · mittel bis hoch
Der Anzeigenblock „Schaffung neuer Schnittstellen und Software-Weiterentwicklung" muss am Probetag vorkommen, sonst könnten sie den Entwicklungsteil nicht beurteilen.

**Womit du rechnest:**
- Ein CSV- oder Excel-Export aus Navision, daraus eine Auswertung oder eine Bereinigung
- „Wir pflegen das hier zweimal, in System A und in Liste B. Wie würdest du das lösen?"
- Ein kleines Formular oder eine Liste, die heute auf Papier läuft
- Eine Skizze: welches System liefert welche Daten an welches, per Datei, per API, in welchem Takt

**Deine Reihenfolge, und das ist der Unterschied zu jedem Bewerber vor dir:**
1. Erst der Prozess: Wer macht das heute, wie oft, wie lange dauert es, was passiert wenn es fehlt?
2. Dann prüfen, ob das Standardsystem es schon kann. Ein ungenutztes Modul schlägt jede Eigenentwicklung.
3. Erst dann bauen, und dann so klein wie möglich.
4. Vorher und Nachher messbar machen: Minuten pro Vorgang, Vorgänge pro Woche.

**Fallstrick:** Nicht am ersten Tag ein neues Werkzeug vorschlagen. Wenn du sagst „das mache ich mit n8n", frag zuerst, ob n8n hier laufen darf und wo. In einem Haus mit Fortigate und Veeam ist die Frage „wo läuft das und wer betreibt es" berechtigt.

### K — Melibo und KI · mittel, und dein stärkster Moment
**Melibo steht in ihrer Tool-Liste.** Das ist eine deutsche Plattform für Customer-Service-Automatisierung: KI-Chatbot, Live-Chat und Ticket-Automatisierung auf einer Oberfläche, DSGVO-konform, mit einem „Knowledge Hub", in den Texte, FAQs, Links und Dateien als Wissensbasis eingespeist werden.

**Technisch ist das genau das, was du selbst gebaut hast:** eine Wissensbasis, aus der ein Sprachmodell antwortet, mit Übergabe an einen Menschen, wenn es unsicher wird. Nur als fertiges Produkt statt selbst gebaut.

**Wenn das Thema kommt:**
> Der Erfolg so eines Systems hängt weniger am Modell als an der Wissensbasis. Wenn Öffnungszeiten, Liefer- und Reparaturauskünfte dort veraltet sind, antwortet es zuverlässig falsch. Ich würde deshalb zuerst klären, wer die Inhalte pflegt und in welchem Rhythmus. Und ich würde eine feste Übergabe an einen Menschen einbauen, sobald es um Termine, Preise oder Reklamationen geht.

**Nicht verkaufen, einordnen.** Kein „da könnte man KI einsetzen". Details in Abschnitt 10 der Interview-Intel.

### L — Dokumentation · wird immer mitbewertet
Jede erledigte Aufgabe endet bei dir mit drei Zeilen: Was war gemeldet, was war die Ursache, was habe ich getan. Das ist deine Geschichte B aus dem Story-Bank, hier machst du sie sichtbar statt sie zu erzählen.

### M — Das Abschlussgespräch
Die Frage kommt fast sicher: **„Was ist dir heute aufgefallen?"**

**Format der Antwort:** zwei Beobachtungen, ein Vorschlag, eine Frage. Nichts kritisieren, was du nur eine Stunde gesehen hast.
> Mir ist aufgefallen, dass X heute von Hand läuft und dabei zweimal erfasst wird. Das würde ich mir zuerst genauer ansehen, weil es täglich anfällt. Was mich noch interessieren würde: Wie oft passiert das pro Woche?

---

## 3. Die drei Regeln des Tages

1. **Nichts anfassen, was im Betrieb läuft, ohne Freigabe.** Kasse, Firewall, Server, Kameras. Fragen kostet zwei Sekunden, ein Ausfall im Verkauf kostet Umsatz.
2. **Laut denken.** Sie können nicht sehen, was du kannst, sie sehen nur, was du sagst und tust. Sprich deine Prüfschritte aus.
3. **Anwender vor Technik.** Der Verkäufer mit Kundschaft bekommt zuerst eine Übergangslösung, dann suchst du die Ursache.

---

## 4. Was du nicht behauptest

| Nicht behaupten | So sagst du es stattdessen |
|---|---|
| Praxiserfahrung mit M365, Entra, SharePoint, Intune im laufenden Betrieb | „Aus der Umschulung und aus eigenen Umgebungen kenne ich das, im laufenden Betrieb habe ich es noch nicht verantwortet. Ich arbeite mich schnell ein, und ich frage lieber einmal, bevor ich in einer Produktivumgebung klicke." |
| Python als Stärke | Node.js und TypeScript sind dein Stack. Python nur so weit, wie es in den KI-Projekten über LangGraph vorkommt. |
| Fortigate-, Veeam- oder Navision-Erfahrung | Konzepte erklären, Produkt offen lassen: „Das Prinzip ist mir klar, das Produkt kenne ich noch nicht." |
| Kenntnis ihrer Kassen- und Lagerlandschaft | Fragen stellen, siehe Abschnitt H |

**Der Rahmen, in den das gehört:** Zwei Jahre Umschulung, zuerst Systemintegration, danach Anwendungsentwicklung, dazu IT-Praxis im Support und eigene, laufende Projekte. Genau diese Kombination steht im Titel der Anzeige.

---

## 5. Am Abend davor auffrischen

- [ ] AD: Benutzer anlegen, Gruppenmitgliedschaften, OU-Logik, Konto deaktivieren
- [ ] GPO: was ist eine Richtlinie, wie prüfe ich ob sie greift (`gpresult /r`)
- [ ] DNS und DHCP: A-Record, Reservierung, Bereich, Lease
- [ ] Freigabe- gegen NTFS-Rechte, das restriktivere gewinnt
- [ ] Drucker: Spooler neu starten, Warteschlange leeren, Treiber am Printserver
- [ ] Windows-Bordmittel: Ereignisanzeige, Dienste, Task-Manager, `net use`
- [ ] M365: Lizenz zuweisen, MFA, gemeinsames Postfach, SharePoint-Berechtigung
- [ ] Backup-Prinzip 3-2-1 und warum ein ungetesteter Restore keiner ist
- [ ] VPN und Firewall in je einem Satz erklären können
- [ ] Deine acht Schritte der Prozessanalyse (Interview-Intel, Abschnitt 5)
- [ ] Melibo in zwei Sätzen einordnen können, siehe Abschnitt K
- [ ] Ein eigenes Projekt in drei Minuten erklären, ohne Fachjargon

## 6. Was du mitnimmst

- [ ] Notizbuch und Stift. **Sichtbar mitschreiben, das ist die halbe Bewertung.**
- [ ] Ausweis für den Besucherzugang
- [ ] Eigener Laptop geladen, falls sie den Entwicklungsteil sehen wollen, aber ungefragt nicht aufklappen
- [ ] Zeugnisse und Zertifikate ausgedruckt, falls noch nicht übergeben
- [ ] Unterlagen zur Förderzusage, falls das Gespräch auf den Vertrag kommt
- [ ] Kleidung: sauber und praktisch, kein Anzug. Du wirst unter Tische kriechen und Kartons tragen.
- [ ] Anfahrt Einsteinstraße 35, 53757 Sankt Augustin, rund 12 km von Bonn, früh da sein
- [ ] Telefonnummer aus der Anzeige gespeichert: 02241 9773-113 (Philipp Schneider)

## 7. Deine Fragen am Probetag

1. Wo liegt die führende Datenhaltung für Artikel und Bestand, Navision oder Cycle, und wie synchronisiert sich das?
2. Wie viele Tickets laufen pro Tag auf, und wie sind sie zwischen First, Second und Third Level aufgeteilt?
3. Warum Jira **und** Zendesk, wo liegt die Grenze zwischen beiden?
4. Wer betreibt die Server, ihr selbst oder ein Dienstleister, und wo hört eure Verantwortung auf?
5. Wie groß ist das IT-Team, und wer vertritt wen im Urlaub?
6. Wird Melibo schon eingesetzt oder ist das noch in Evaluation?
7. **Die Stelle ist befristet. Für welchen Zeitraum, und woran entscheidet sich eine Übernahme?** Das bleibt der wichtigste offene Punkt, siehe Interview-Intel Abschnitt 15.

## 8. Umgangsform

Die Anzeige duzt durchgehend, im Team duzen am Probetag alle. **Das Duzen anbieten lassen und dann mitgehen**, bei der Geschäftsführung beim Sie bleiben, bis es angeboten wird.

---

## Der Maßstab für den Tag

> Am Ende soll jemand sagen können: der hat gefragt, bevor er geklickt hat, er hat den Kollegen im Verkauf weiterarbeiten lassen, und er hat aufgeschrieben, was er gemacht hat.
