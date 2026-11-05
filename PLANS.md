# Uitbreidingen die klaarliggen 🧩

Deze opties zijn al **gebouwd en getest** (op iPhone 13-formaat), elk op een eigen *branch* in GitHub, maar staan **nog niet aan** in de app.
Wil je er een? Stuur Claude de zin uit "Activeren". Omdat het werk al gedaan is, kost dat maar weinig tokens (alleen samenvoegen, testen en live zetten).

| | Optie | Wat het doet | Kosten | Status | Activeren |
|---|---|---|---|---|---|
| 📊 | **Statistieken** | Pagina met XP per week en per maand (grafiekjes), voortgang per niveau (lessen/verhalen/gesprekken), je sterkste lessen en waar winst te halen valt | €0 | ✅ klaar & getest | *"Activeer optie statistieken"* |
| 🔔 | **Herinnering** | Kies dagen + tijd in je profiel. Eén tik zet een terugkerende afspraak **met melding** in je iPhone-agenda (werkt ook als de app dicht is). Plus een "Tijd voor je Frans!"-kaart in de app als je die dag nog niet geleerd hebt | €0 | ✅ klaar & getest | *"Activeer optie herinnering"* |

## Details per optie

### 📊 Statistieken — branch `optie/statistieken`
- **Voordelen:** motiverend overzicht; laat zien welke lessen je beter nog eens herhaalt (met directe link).
- **Nadelen:** geen; alleen een extra pagina (via Profiel → Statistieken).
- **Technisch:** nieuwe pagina `js/views/stats.js`, route `#/statistieken`, tegel in het profiel. Gebruikt alleen gegevens die al bewaard worden.

### 🔔 Herinnering — branch `optie/herinnering`
- **Voordelen:** helpt je ritme vast te houden (een paar keer per week). De agenda-melding werkt op elke telefoon, ook als de app dicht is.
- **Nadelen / eerlijk:** échte pushmeldingen vanuit de app zelf (zoals Duolingo) vereisen een server met pushdienst — dat kost geld en onderhoud, dus bewust niet gedaan. Daarom de agenda-afspraak.
- **Technisch:** `js/reminder.js` (banner + `.ics`-bestand met `RRULE` en melding), instellingen in het profiel, banner op de startpagina.

---
*Meer opties (sync tussen telefoon en pc, AI-gesprekspartner) worden vannacht nog toegevoegd als het budget het toelaat.*
