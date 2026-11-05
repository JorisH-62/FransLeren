# Uitbreidingen die klaarliggen 🧩

Deze opties zijn al **gebouwd en getest** (op iPhone 13-formaat), elk op een eigen *branch* in GitHub, maar staan **nog niet aan** in de app.
Wil je er een? Stuur Claude de zin uit "Activeren". Omdat het werk al gedaan is, kost dat maar weinig tokens (alleen samenvoegen, testen en live zetten).

| | Optie | Wat het doet | Kosten | Status | Activeren |
|---|---|---|---|---|---|
| 📊 | **Statistieken** | Pagina met XP per week en per maand (grafiekjes), voortgang per niveau (lessen/verhalen/gesprekken), je sterkste lessen en waar winst te halen valt | €0 | ✅ klaar & getest | *"Activeer optie statistieken"* |
| 🔄 | **Overzetten (sync)** | Maak op je telefoon een "overzetcode" en plak die op je pc (of andersom): al je voortgang gaat mee. Zonder server, zonder account | €0 | ✅ klaar & getest | *"Activeer optie sync"* |
| 🤖 | **Vrij gesprek met AI** | Praat écht vrij in het Frans met een AI-familielid (schoonmoeder, oma, nicht…), op jouw niveau, met korte tips bij fouten en voorlezen | ±€0,01 per gesprek (eigen API-sleutel) | ✅ klaar & getest (met nep-API) | *"Activeer optie AI-gesprek"* |
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

### 🔄 Overzetten (sync) — branch `optie/sync`
- **Voordelen:** makkelijker dan de huidige back-up met bestanden; werkt via kopiëren/plakken of de deelknop (WhatsApp, mail naar jezelf…).
- **Nadelen / eerlijk:** het is een éénmalige overdracht, geen automatische synchronisatie (dat vereist een server/account). De code is ±3–4.000 tekens; een QR-code is daarvoor te groot, dus die zit er niet in.
- **Technisch:** `js/sync.js` (JSON → deflate-compressie → base64-code), nieuw blok in het profiel. Getest: 300 kaarten + voortgang van "telefoon" naar "pc" overgezet zonder verlies.

### 🤖 Vrij gesprek met AI — branch `optie/ai-gesprek`
- **Voordelen:** het enige wat de vaste gesprekken niet kunnen: écht vrij praten, over wat jij wilt. Met spraak (🎤 inspreken, 🔊 voorlezen).
- **Kosten:** je hebt een eigen Anthropic API-sleutel nodig (console.anthropic.com, tegoed vanaf ±€5). Het goedkope model **Claude Haiku** kost ±1 cent per gesprek van 10 beurten. Wie de app deelt: iedereen gebruikt zijn eigen sleutel, jij betaalt niets voor anderen.
- **Nadelen / eerlijk:** zonder sleutel werkt deze pagina niet; de sleutel staat (alleen) in de browser van dat apparaat. De AI kan af en toe een foutje maken.
- **Technisch:** `js/views/ai.js`, route `#/ai-gesprek`, link bovenaan *Gesprekken*. Getest met een nagebootste API (geen echte kosten gemaakt).

---
*Overwogen maar niet gebouwd (om het budget te sparen): een extra contentpakket. Dat kan later altijd nog: "Maak een contentpakket met 10 extra B1-verhalen".*
