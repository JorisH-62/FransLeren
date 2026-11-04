// Hulpjes om lesteksten compact te schrijven
const escA = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Voorbeeldzin met luisterknop
export const ex = (fr, nl) =>
  `<div class="ex"><button class="iconbtn" data-say="${escA(fr)}" aria-label="Uitspreken">🔊</button><div class="t"><span class="fr">${fr}</span><i>${nl}</i></div></div>`;

// Meerdere voorbeelden
export const exs = list => list.map(([fr, nl]) => ex(fr, nl)).join('');

// Tabel; cellen in kolommen uit `frCols` krijgen een luisterfunctie
export const tbl = (head, rows, frCols = []) =>
  `<div class="table-wrap"><table><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows
    .map(r => `<tr>${r.map((c, i) => frCols.includes(i)
      ? `<td><span class="fr" data-say="${escA(c.replace(/<[^>]+>/g, ''))}" style="cursor:pointer">${c}</span></td>`
      : `<td>${c}</td>`).join('')}</tr>`)
    .join('')}</tbody></table></div>`;

export const tip = html => `<div class="tip">${html}</div>`;
export const warn = html => `<div class="warn">⚠️ ${html}</div>`;
export const f = s => `<span class="fr-inline">${s}</span>`;

// Vervoegingstabel: 6 vormen
export const conj = (forms, nl) => tbl(['Frans', 'Nederlands'],
  forms.map((fr, i) => [fr, nl ? nl[i] : '']), [0]);
