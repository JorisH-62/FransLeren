# FransLeren 🐌

Een web-app om Frans te leren, met uitleg in het Nederlands. Het doel: meepraten met je (schoon)familie, op een niveau net boven de basis.

**Live:** https://jorish-62.github.io/FransLeren/

## Op je telefoon installeren

1. Open de link hierboven in Chrome (Android) of Safari (iPhone).
2. **Android:** menu (⋮) → *Toevoegen aan startscherm*.
   **iPhone:** deelknop (□↑) → *Zet op beginscherm*.
3. De app opent dan als een gewone app en werkt ook offline.

Je voortgang wordt per apparaat bewaard. Via **Profiel → Back-up** zet je hem over naar een ander apparaat.

## Wat zit erin?

| Onderdeel | Inhoud |
|---|---|
| 🗺️ **Leerpad** | 39 grammaticalessen (A1 → A2 → B1) met uitleg, voorbeelden om te beluisteren en ±540 oefeningen (8 soorten), plus een eindtoets per niveau |
| 🃏 **Woorden** | Flashcards met slim herhalen en 28 woordensets (±720 woorden) |
| 📚 **Verhalen** | 33 originele, grappige verhalen + 6 traditionele kinderliedjes, met tik-om-te-vertalen, voorlezen en quiz |
| 💬 **Gesprekken** | 23 oefengesprekken met de (schoon)familie, met keuzes en spreekoefeningen |
| 🎤 **Spreektrainer** | Zinnen hardop zeggen met spraakherkenning |
| 🎧 **Luisteren** | Luistertraining op drie snelheden |
| 👨‍👩‍👧 **Mijn familie** | Voer je eigen familie in en oefen zinnen over hen |
| 📖 **Zinnenboek** | Kant-en-klare zinnen per situatie |
| 🔤 **Werkwoorden** | Vervoegingstabellen (6 tijden) en een trainer |
| 🤪 **Uitdrukkingen** | 40 grappige Franse gezegdes |
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
