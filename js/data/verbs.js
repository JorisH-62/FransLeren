// Werkwoorden + vervoegingsmotor
export const PERSONS = ['je', 'tu', 'il/elle/on', 'nous', 'vous', 'ils/elles'];
export const TENSES = {
  present: 'Présent (nu)',
  pc: 'Passé composé (verleden, afgerond)',
  imparfait: 'Imparfait (verleden, beschrijving)',
  futur: 'Futur simple (toekomst)',
  conditionnel: 'Conditionnel (zou)',
  subjonctif: 'Subjonctif (… que)',
};
export const TENSE_SHORT = { present: 'présent', pc: 'passé composé', imparfait: 'imparfait', futur: 'futur', conditionnel: 'conditionnel', subjonctif: 'subjonctif' };

// group: er | ir (finir) | re (attendre) | irr
// pres: 6 vormen (alleen nodig bij onregelmatig), fut: stam, subj: 6 vormen (alleen als afwijkend), imp: imparfait-stam (alleen être)
export const VERBS = [
  { inf: 'être', nl: 'zijn', group: 'irr', aux: 'avoir', pp: 'été', pres: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], imp: 'ét', fut: 'ser', subj: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'], top: true },
  { inf: 'avoir', nl: 'hebben', group: 'irr', aux: 'avoir', pp: 'eu', pres: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], fut: 'aur', subj: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'], top: true },
  { inf: 'aller', nl: 'gaan', group: 'irr', aux: 'être', pp: 'allé', pres: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], fut: 'ir', subj: ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'], top: true },
  { inf: 'faire', nl: 'doen / maken', group: 'irr', aux: 'avoir', pp: 'fait', pres: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'], fut: 'fer', subj: ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'], top: true },
  { inf: 'dire', nl: 'zeggen', group: 'irr', aux: 'avoir', pp: 'dit', pres: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'], fut: 'dir', top: true },
  { inf: 'pouvoir', nl: 'kunnen', group: 'irr', aux: 'avoir', pp: 'pu', pres: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'], fut: 'pourr', subj: ['puisse', 'puisses', 'puisse', 'puissions', 'puissiez', 'puissent'], top: true },
  { inf: 'vouloir', nl: 'willen', group: 'irr', aux: 'avoir', pp: 'voulu', pres: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'], fut: 'voudr', subj: ['veuille', 'veuilles', 'veuille', 'voulions', 'vouliez', 'veuillent'], top: true },
  { inf: 'savoir', nl: 'weten', group: 'irr', aux: 'avoir', pp: 'su', pres: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'], fut: 'saur', subj: ['sache', 'saches', 'sache', 'sachions', 'sachiez', 'sachent'], top: true },
  { inf: 'devoir', nl: 'moeten', group: 'irr', aux: 'avoir', pp: 'dû', pres: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'], fut: 'devr', top: true },
  { inf: 'venir', nl: 'komen', group: 'irr', aux: 'être', pp: 'venu', pres: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'], fut: 'viendr', top: true },
  { inf: 'prendre', nl: 'nemen', group: 'irr', aux: 'avoir', pp: 'pris', pres: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'], fut: 'prendr', top: true },
  { inf: 'voir', nl: 'zien', group: 'irr', aux: 'avoir', pp: 'vu', pres: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'], fut: 'verr', top: true },
  { inf: 'mettre', nl: 'zetten / leggen', group: 'irr', aux: 'avoir', pp: 'mis', pres: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'], fut: 'mettr' },
  { inf: 'boire', nl: 'drinken', group: 'irr', aux: 'avoir', pp: 'bu', pres: ['bois', 'bois', 'boit', 'buvons', 'buvez', 'boivent'], fut: 'boir' },
  { inf: 'lire', nl: 'lezen', group: 'irr', aux: 'avoir', pp: 'lu', pres: ['lis', 'lis', 'lit', 'lisons', 'lisez', 'lisent'], fut: 'lir' },
  { inf: 'écrire', nl: 'schrijven', group: 'irr', aux: 'avoir', pp: 'écrit', pres: ['écris', 'écris', 'écrit', 'écrivons', 'écrivez', 'écrivent'], fut: 'écrir' },
  { inf: 'partir', nl: 'vertrekken', group: 'irr', aux: 'être', pp: 'parti', pres: ['pars', 'pars', 'part', 'partons', 'partez', 'partent'], fut: 'partir' },
  { inf: 'sortir', nl: 'uitgaan', group: 'irr', aux: 'être', pp: 'sorti', pres: ['sors', 'sors', 'sort', 'sortons', 'sortez', 'sortent'], fut: 'sortir' },
  { inf: 'dormir', nl: 'slapen', group: 'irr', aux: 'avoir', pp: 'dormi', pres: ['dors', 'dors', 'dort', 'dormons', 'dormez', 'dorment'], fut: 'dormir' },
  { inf: 'connaître', nl: 'kennen', group: 'irr', aux: 'avoir', pp: 'connu', pres: ['connais', 'connais', 'connaît', 'connaissons', 'connaissez', 'connaissent'], fut: 'connaîtr' },
  { inf: 'croire', nl: 'geloven / denken', group: 'irr', aux: 'avoir', pp: 'cru', pres: ['crois', 'crois', 'croit', 'croyons', 'croyez', 'croient'], fut: 'croir' },
  { inf: 'ouvrir', nl: 'openen', group: 'irr', aux: 'avoir', pp: 'ouvert', pres: ['ouvre', 'ouvres', 'ouvre', 'ouvrons', 'ouvrez', 'ouvrent'], fut: 'ouvrir' },
  { inf: 'recevoir', nl: 'ontvangen', group: 'irr', aux: 'avoir', pp: 'reçu', pres: ['reçois', 'reçois', 'reçoit', 'recevons', 'recevez', 'reçoivent'], fut: 'recevr' },
  { inf: 'vivre', nl: 'leven', group: 'irr', aux: 'avoir', pp: 'vécu', pres: ['vis', 'vis', 'vit', 'vivons', 'vivez', 'vivent'], fut: 'vivr' },
  { inf: 'courir', nl: 'rennen', group: 'irr', aux: 'avoir', pp: 'couru', pres: ['cours', 'cours', 'court', 'courons', 'courez', 'courent'], fut: 'courr' },
  { inf: 'comprendre', nl: 'begrijpen', group: 'irr', aux: 'avoir', pp: 'compris', pres: ['comprends', 'comprends', 'comprend', 'comprenons', 'comprenez', 'comprennent'], fut: 'comprendr' },
  { inf: 'naître', nl: 'geboren worden', group: 'irr', aux: 'être', pp: 'né', pres: ['nais', 'nais', 'naît', 'naissons', 'naissez', 'naissent'], fut: 'naîtr' },
  { inf: 'mourir', nl: 'sterven', group: 'irr', aux: 'être', pp: 'mort', pres: ['meurs', 'meurs', 'meurt', 'mourons', 'mourez', 'meurent'], fut: 'mourr' },
  // onregelmatig in spelling
  { inf: 'acheter', nl: 'kopen', group: 'irr', aux: 'avoir', pp: 'acheté', pres: ['achète', 'achètes', 'achète', 'achetons', 'achetez', 'achètent'], fut: 'achèter' },
  { inf: 'appeler', nl: 'roepen / bellen', group: 'irr', aux: 'avoir', pp: 'appelé', pres: ['appelle', 'appelles', 'appelle', 'appelons', 'appelez', 'appellent'], fut: 'appeller' },
  { inf: 'préférer', nl: 'verkiezen / liever hebben', group: 'irr', aux: 'avoir', pp: 'préféré', pres: ['préfère', 'préfères', 'préfère', 'préférons', 'préférez', 'préfèrent'], fut: 'préférer' },
  { inf: 'manger', nl: 'eten', group: 'irr', aux: 'avoir', pp: 'mangé', pres: ['mange', 'manges', 'mange', 'mangeons', 'mangez', 'mangent'], fut: 'manger', top: true },
  { inf: 'commencer', nl: 'beginnen', group: 'irr', aux: 'avoir', pp: 'commencé', pres: ['commence', 'commences', 'commence', 'commençons', 'commencez', 'commencent'], fut: 'commencer' },
  // regelmatig -er
  { inf: 'parler', nl: 'praten', group: 'er', aux: 'avoir', top: true },
  { inf: 'aimer', nl: 'houden van', group: 'er', aux: 'avoir', top: true },
  { inf: 'habiter', nl: 'wonen', group: 'er', aux: 'avoir' },
  { inf: 'travailler', nl: 'werken', group: 'er', aux: 'avoir' },
  { inf: 'regarder', nl: 'kijken', group: 'er', aux: 'avoir' },
  { inf: 'écouter', nl: 'luisteren', group: 'er', aux: 'avoir' },
  { inf: 'jouer', nl: 'spelen', group: 'er', aux: 'avoir' },
  { inf: 'chercher', nl: 'zoeken', group: 'er', aux: 'avoir' },
  { inf: 'trouver', nl: 'vinden', group: 'er', aux: 'avoir' },
  { inf: 'penser', nl: 'denken', group: 'er', aux: 'avoir' },
  { inf: 'arriver', nl: 'aankomen', group: 'er', aux: 'être' },
  { inf: 'rester', nl: 'blijven', group: 'er', aux: 'être' },
  { inf: 'tomber', nl: 'vallen', group: 'er', aux: 'être' },
  { inf: 'rentrer', nl: 'naar huis gaan', group: 'er', aux: 'être' },
  { inf: 'donner', nl: 'geven', group: 'er', aux: 'avoir' },
  { inf: 'cuisiner', nl: 'koken', group: 'er', aux: 'avoir' },
  // regelmatig -ir (zoals finir)
  { inf: 'finir', nl: 'afmaken / eindigen', group: 'ir', aux: 'avoir' },
  { inf: 'choisir', nl: 'kiezen', group: 'ir', aux: 'avoir' },
  { inf: 'grandir', nl: 'groeien', group: 'ir', aux: 'avoir' },
  { inf: 'réussir', nl: 'slagen', group: 'ir', aux: 'avoir' },
  // regelmatig -re
  { inf: 'attendre', nl: 'wachten', group: 're', aux: 'avoir' },
  { inf: 'vendre', nl: 'verkopen', group: 're', aux: 'avoir' },
  { inf: 'répondre', nl: 'antwoorden', group: 're', aux: 'avoir' },
  { inf: 'entendre', nl: 'horen', group: 're', aux: 'avoir' },
  { inf: 'perdre', nl: 'verliezen', group: 're', aux: 'avoir' },
  { inf: 'descendre', nl: 'naar beneden gaan', group: 're', aux: 'être' },
];

const E = {
  present: { er: ['e', 'es', 'e', 'ons', 'ez', 'ent'], ir: ['is', 'is', 'it', 'issons', 'issez', 'issent'], re: ['s', 's', '', 'ons', 'ez', 'ent'] },
  imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
  futur: ['ai', 'as', 'a', 'ons', 'ez', 'ont'],
  conditionnel: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
  subjonctif: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
};

const join = (stem, end) => {
  // manger/commencer: g/c zacht houden voor a/o, maar niet voor i
  if (end.startsWith('i')) {
    if (stem.endsWith('ge')) stem = stem.slice(0, -1);
    if (stem.endsWith('ç')) stem = stem.slice(0, -1) + 'c';
  }
  return stem + end;
};

export function present(v) {
  if (v.pres) return v.pres;
  const stem = v.inf.slice(0, -2);
  return E.present[v.group].map(e => stem + e);
}

export function imparfait(v) {
  const stem = v.imp || present(v)[3].replace(/ons$/, '');
  return E.imparfait.map(e => join(stem, e));
}

export function futur(v) {
  const stem = v.fut || (v.inf.endsWith('re') ? v.inf.slice(0, -1) : v.inf);
  return E.futur.map(e => stem + e);
}

export function conditionnel(v) {
  const stem = v.fut || (v.inf.endsWith('re') ? v.inf.slice(0, -1) : v.inf);
  return E.conditionnel.map(e => stem + e);
}

export function subjonctif(v) {
  if (v.subj) return v.subj;
  const p = present(v);
  const stem = p[5].replace(/ent$/, '');
  const imp = imparfait(v);
  return [stem + 'e', stem + 'es', stem + 'e', imp[3], imp[4], stem + 'ent'];
}

export function participle(v) {
  if (v.pp) return v.pp;
  const s = v.inf.slice(0, -2);
  return { er: s + 'é', ir: s + 'i', re: s + 'u' }[v.group];
}

const AUX = { avoir: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], être: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'] };

export function passeCompose(v) {
  const pp = participle(v);
  const aux = AUX[v.aux];
  if (v.aux === 'être') {
    return [`${aux[0]} ${pp}(e)`, `${aux[1]} ${pp}(e)`, `${aux[2]} ${pp}(e)`, `${aux[3]} ${pp}(e)s`, `${aux[4]} ${pp}(e)(s)`, `${aux[5]} ${pp}(e)s`];
  }
  return aux.map(a => `${a} ${pp}`);
}

export function conjugate(v, tense) {
  return { present, pc: passeCompose, imparfait, futur, conditionnel, subjonctif }[tense](v);
}

// Voornaamwoord + vorm, met j' voor klinker
export function withPronoun(i, form, tense) {
  const vowel = /^[aeéèêiîouyhâ]/i.test(form);
  let p = ['je', 'tu', 'il', 'nous', 'vous', 'ils'][i];
  if (i === 0 && vowel) p = "j'";
  const full = p === "j'" ? p + form : `${p} ${form}`;
  return tense === 'subjonctif' ? (i === 2 || i === 5 ? `qu'${full}` : `que ${full}`) : full;
}

export const PRON_LABEL = ['je', 'tu', 'il / elle / on', 'nous', 'vous', 'ils / elles'];

// Voor de trainer: geaccepteerde antwoorden (zonder (e)(s) markering)
export function answersFor(form) {
  const clean = form.replace(/\(e\)\(s\)|\(e\)s|\(e\)/g, '');
  const alts = new Set([clean]);
  if (form.includes('(e)')) {
    alts.add(form.replace(/\(e\)\(s\)/, 'e').replace(/\(e\)s/, 'es').replace(/\(e\)/, 'e'));
    alts.add(form.replace(/\(e\)\(s\)/, 's').replace(/\(e\)s/, 's').replace(/\(e\)/, ''));
    alts.add(form.replace(/\(e\)\(s\)/, 'es').replace(/\(e\)s/, 'es').replace(/\(e\)/, 'e'));
  }
  return [...alts];
}
