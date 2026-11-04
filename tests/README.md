# Testscripts (Playwright)

Start eerst een lokale server in de repo-map:

```bash
python3 -m http.server 8765
```

Draai daarna vanuit de map `tests/`:

| Script | Wat het test |
|---|---|
| `test.js` | Alle hoofdschermen laden zonder fouten (screenshots in `shots/`) |
| `test3.js` | Ontbrekende vertalingen in verhalen + opgegeven routes (bv. `node test3.js /verhalen,/profiel shots`) |
| `test4.js` | Alle gesprekken automatisch doorspelen |
| `test5.js` | Elke lesoefening krijgt het juiste antwoord en moet goedgekeurd worden |

```bash
mkdir -p shots && node test5.js
```
