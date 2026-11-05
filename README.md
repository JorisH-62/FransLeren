# FransLeren 🐌

Een web-app om Frans te leren, met uitleg in het Nederlands. Het doel: meepraten met je (schoon)familie, op een niveau net boven de basis.

**Live:** https://jorish-62.github.io/FransLeren/

📘 **Volledig overzicht met screenshots, demovideo en uitleg:** [docs/OVERZICHT.md](docs/OVERZICHT.md)
🧩 **Uitbreidingen die klaarliggen:** [PLANS.md](PLANS.md)

## Op je telefoon installeren

1. Open de link hierboven in Chrome (Android) of Safari (iPhone).
2. **Android:** menu (⋮) → *Toevoegen aan startscherm*.
   **iPhone:** deelknop (□↑) → *Zet op beginscherm*.
3. De app opent dan als een gewone app en werkt ook offline.

Je voortgang wordt per apparaat bewaard. Via **Profiel → Back-up** zet je hem over naar een ander apparaat.

## Wat zit erin?

| Onderdeel | Inhoud |
|---|---|
| 📅 **6-maandenplan** | 26 weken met vaste taken, herhalingsweken en eindtoetsen; plus een ⚡ 5-minutenmodus |
| 🗺️ **Leerpad** | 39 grammaticalessen (A1 → A2 → B1) met uitleg, voorbeelden om te beluisteren en ±560 oefeningen (8 soorten), plus een eindtoets per niveau |
| 🃏 **Woorden** | Flashcards met slim herhalen en 28 woordensets (±720 woorden) |
| 📚 **Verhalen** | 35 originele, grappige verhalen + 6 traditionele kinderliedjes, met tik-om-te-vertalen, voorlezen en quiz |
| 💬 **Gesprekken** | 25 oefengesprekken met de (schoon)familie, met keuzes en spreekoefeningen |
| 🎤 **Spreektrainer** | Zinnen hardop zeggen met spraakherkenning |
| 🎧 **Luisteren** | Luistertraining op drie snelheden |
| 👨‍👩‍👧 **Mijn familie** | Voer je eigen familie in en oefen zinnen over hen |
| 📖 **Zinnenboek** | Kant-en-klare zinnen per situatie |
| 🔤 **Werkwoorden** | Vervoegingstabellen (6 tijden) en een trainer |
| 🤪 **Uitdrukkingen** | 58 grappige Franse gezegdes |
| 👄 **Uitspraak** | Klanken, minimale paren en tongbrekers |
| 📝 **Spiekbriefje** | Alle belangrijke regels op één pagina |
| 🎯 **Fouten oefenen** | Alles wat je fout had komt terug |

Verder: XP, niveaus, badges, een dagdoel, een "plan voor vandaag", een plaatsingstest, donkere modus en offline gebruik.

## Techniek

Puur HTML, CSS en JavaScript (ES-modules), zonder build-stap. Spraak via de Web Speech API van de browser.

Lokaal draaien:

```bash
python3 -m http.server 8000
```

Open daarna http://localhost:8000.
