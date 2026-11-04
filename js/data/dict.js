// Algemeen woordenboek voor tik-om-te-vertalen (aangevuld met de woorden per verhaal en uit de woordensets).
export const DICT = {
  // lidwoorden & voornaamwoorden
  "le": "de / het (m)", "la": "de / het (v)", "les": "de (mv)", "l'": "de / het", "un": "een (m)", "une": "een (v)", "des": "(een paar) / van de",
  "du": "van de / wat (m)", "de": "van / uit", "d'": "van / uit", "au": "naar de / in de", "aux": "naar de / aan de (mv)",
  "je": "ik", "j'": "ik", "tu": "jij", "il": "hij / het", "elle": "zij / het", "on": "men / wij", "nous": "wij / ons", "vous": "jullie / u",
  "ils": "zij (mv, m)", "elles": "zij (mv, v)", "me": "mij / me", "m'": "mij / me", "te": "jou / je", "t'": "jou / je", "se": "zich", "s'": "zich / als",
  "moi": "ik / mij", "toi": "jij / jou", "lui": "hem / hij / haar (meew.)", "eux": "hen / zij", "leur": "hun / hen", "leurs": "hun (mv)",
  "y": "er / daar", "en": "in / ervan / er", "ce": "dit / dat / deze", "c'": "het / dat", "cet": "deze / dit (m)", "cette": "deze / dit (v)", "ces": "deze / die (mv)",
  "ça": "dat / het", "cela": "dat", "ceci": "dit", "qui": "wie / die", "que": "dat / die / wat", "qu'": "dat / die / wat", "quoi": "wat", "dont": "waarvan",
  "mon": "mijn (m)", "ma": "mijn (v)", "mes": "mijn (mv)", "ton": "jouw (m)", "ta": "jouw (v)", "tes": "jouw (mv)", "son": "zijn / haar (m)", "sa": "zijn / haar (v)",
  "ses": "zijn / haar (mv)", "notre": "ons / onze", "nos": "onze (mv)", "votre": "jullie / uw", "vos": "jullie / uw (mv)",
  "tout": "alles / helemaal", "toute": "heel / alle (v)", "tous": "allemaal / alle", "toutes": "alle (v mv)", "rien": "niets", "personne": "niemand / persoon",
  "quelqu'un": "iemand", "quelque": "een of ander", "chose": "ding", "autre": "ander", "autres": "andere", "même": "zelfde / zelfs", "chaque": "elk",
  // voorzetsels & voegwoorden
  "à": "naar / in / aan / om", "dans": "in", "sur": "op", "sous": "onder", "avec": "met", "sans": "zonder", "pour": "voor / om te", "par": "door / per",
  "chez": "bij (thuis)", "devant": "voor", "derrière": "achter", "entre": "tussen", "vers": "naar / richting", "près": "dichtbij", "loin": "ver",
  "avant": "voor / eerder", "après": "na / daarna", "pendant": "tijdens", "depuis": "sinds", "jusqu'": "tot", "contre": "tegen",
  "et": "en", "ou": "of", "où": "waar", "mais": "maar", "donc": "dus", "alors": "dus / toen / nou", "car": "want", "si": "als / zo / jawel",
  "quand": "wanneer / toen", "comme": "zoals / als", "parce": "(parce que) omdat", "puis": "daarna", "ensuite": "daarna", "enfin": "eindelijk / tenslotte",
  // bijwoorden
  "ne": "(ontkenning)", "n'": "(ontkenning)", "pas": "niet", "plus": "meer / niet meer", "jamais": "nooit", "toujours": "altijd / nog steeds",
  "très": "heel / erg", "trop": "te (veel)", "assez": "genoeg / nogal", "beaucoup": "veel", "peu": "weinig", "bien": "goed / wel", "mal": "slecht / pijn",
  "aussi": "ook", "encore": "nog / weer", "déjà": "al", "ici": "hier", "là": "daar", "maintenant": "nu", "aujourd'hui": "vandaag", "hier": "gisteren",
  "demain": "morgen", "soudain": "plotseling", "vite": "snel", "lentement": "langzaam", "vraiment": "echt", "peut-être": "misschien", "surtout": "vooral",
  "oui": "ja", "non": "nee", "voici": "hier is / dit is", "voilà": "daar is / ziezo", "comment": "hoe", "pourquoi": "waarom", "combien": "hoeveel",
  "partout": "overal", "dehors": "buiten", "dedans": "binnen", "ensemble": "samen", "seul": "alleen", "seule": "alleen", "presque": "bijna", "tard": "laat", "tôt": "vroeg",
  "bientôt": "binnenkort", "souvent": "vaak", "parfois": "soms", "d'abord": "eerst", "tellement": "zo (erg)", "si bien": "zo goed", "doucement": "zachtjes",
  // être / avoir / aller / faire
  "suis": "ben (ik) / volg", "es": "bent", "est": "is", "sommes": "zijn (wij)", "êtes": "zijn (jullie) / bent (u)", "sont": "zijn (zij)",
  "étais": "was", "était": "was", "étaient": "waren", "été": "geweest / zomer", "sera": "zal zijn", "serait": "zou zijn",
  "ai": "heb", "as": "hebt", "a": "heeft", "avons": "hebben (wij)", "avez": "hebben (jullie)", "ont": "hebben (zij)", "avait": "had", "avaient": "hadden", "eu": "gehad",
  "vais": "ga", "vas": "gaat", "va": "gaat", "allons": "gaan (wij)", "allez": "gaan (jullie) / kom op", "vont": "gaan (zij)", "allé": "gegaan", "allée": "gegaan", "allés": "gegaan",
  "fais": "doe / maak", "fait": "doet / gedaan / gemaakt", "faisons": "doen (wij)", "faites": "doen (jullie)", "font": "doen (zij)", "faisait": "deed / was (weer)",
  "dit": "zegt / gezegd", "dis": "zeg", "disent": "zeggen", "veux": "wil", "veut": "wil", "voulez": "willen (jullie)", "veulent": "willen (zij)", "voulait": "wilde",
  "peux": "kan", "peut": "kan", "pouvez": "kunnen (jullie)", "peuvent": "kunnen (zij)", "pouvait": "kon", "sais": "weet", "sait": "weet", "savait": "wist",
  "dois": "moet", "doit": "moet", "faut": "moet / is nodig", "fallait": "moest", "vient": "komt", "viens": "kom", "viennent": "komen", "venu": "gekomen",
  "prend": "neemt", "prends": "neem", "pris": "genomen", "voit": "ziet", "vois": "zie", "vu": "gezien", "regarde": "kijkt / kijk", "met": "zet / legt",
  "mis": "gezet / gelegd", "dort": "slaapt", "dors": "slaap", "part": "vertrekt", "sort": "gaat uit", "court": "rent", "rit": "lacht", "crie": "roept / schreeuwt",
  // veelvoorkomende naamwoorden
  "monsieur": "meneer", "madame": "mevrouw", "mademoiselle": "juffrouw", "homme": "man", "femme": "vrouw", "enfant": "kind", "enfants": "kinderen",
  "garçon": "jongen / ober", "fille": "meisje / dochter", "ami": "vriend", "amie": "vriendin", "amis": "vrienden", "gens": "mensen", "monde": "wereld / mensen",
  "jour": "dag", "jours": "dagen", "nuit": "nacht", "matin": "ochtend", "soir": "avond", "temps": "tijd / weer", "fois": "keer", "heure": "uur", "heures": "uur",
  "minute": "minuut", "minutes": "minuten", "an": "jaar", "ans": "jaren", "année": "jaar", "semaine": "week", "mois": "maand",
  "maison": "huis", "rue": "straat", "ville": "stad", "village": "dorp", "porte": "deur", "fenêtre": "raam", "table": "tafel", "cuisine": "keuken",
  "eau": "water", "pain": "brood", "gâteau": "taart", "tête": "hoofd", "main": "hand", "mains": "handen", "pied": "voet", "pieds": "voeten", "yeux": "ogen",
  "chose": "ding", "idée": "idee", "problème": "probleem", "fin": "einde", "histoire": "verhaal / geschiedenis",
  // bijvoeglijk
  "grand": "groot", "grande": "groot", "petit": "klein", "petite": "klein", "petits": "kleine", "bon": "goed / lekker", "bonne": "goed / lekker", "mauvais": "slecht",
  "beau": "mooi", "belle": "mooi", "nouveau": "nieuw", "nouvelle": "nieuw", "vieux": "oud", "vieille": "oud", "jeune": "jong", "content": "blij", "contente": "blij",
  "triste": "verdrietig", "fatigué": "moe", "fatiguée": "moe", "drôle": "grappig", "gentil": "aardig", "gentille": "aardig", "premier": "eerste", "première": "eerste",
  "dernier": "laatste", "dernière": "laatste", "long": "lang", "longue": "lang", "chaud": "warm", "froid": "koud", "fort": "sterk / hard", "énorme": "enorm",
  // extra veelvoorkomend
  "être": "zijn", "faire": "doen / maken", "dire": "zeggen", "voir": "zien", "partir": "vertrekken", "aller": "gaan", "avoir": "hebben", "manger": "eten",
  "deux": "twee", "trois": "drie", "quatre": "vier", "cinq": "vijf", "dix": "tien", "quinze": "vijftien", "vingt": "twintig", "cent": "honderd", "moins": "min / minder",
  "famille": "familie", "papa": "papa", "maman": "mama", "mamie": "oma", "papi": "opa", "mère": "moeder", "père": "vader", "frère": "broer", "sœur": "zus",
  "super": "super", "adore": "is dol op", "parfait": "perfect", "français": "Frans", "fromage": "kaas", "chaussettes": "sokken", "croissant": "croissant",
  "chat": "kat", "chien": "hond", "dimanche": "zondag", "samedi": "zaterdag", "baguette": "stokbrood", "crème": "room / pudding", "brûlée": "gebrand",
  "record": "record", "journal": "krant / journaal", "abord": "(d'abord) eerst", "suite": "(tout de suite) meteen", "travers": "(à travers) dwars door",
  "bas": "laag (en bas = beneden)", "rendu": "(se rendre compte) beseffen", "compte": "(se rendre compte) beseffen", "anges": "engelen (aux anges = in de wolken)",
  "inquiète": "(t'inquiète) maak je geen zorgen", "doré": "goudbruin", "saute": "springt", "mangé": "gegeten", "arrivé": "aangekomen", "regardé": "gekeken",
  "avais": "had", "pouvaient": "konden", "claquait": "klapperde", "aurait": "zou hebben", "boulanger": "bakker", "paris": "Parijs", "eiffel": "(tour Eiffel) Eiffeltoren",
  "hmm": "hmm", "mmm": "mmm", "fffff": "(geblaas)", "wouf": "waf", "minou": "Minou (poesje)", "rex": "Rex", "biscotte": "Biscotte (beschuitje!)", "léa": "Léa",
  "josette": "Josette", "sophie": "Sophie", "hugo": "Hugo", "marguerite": "Marguerite (ook: madeliefje)", "dupont": "Dupont", "martin": "Martin",
  // uitroepen
  "oh": "o", "ah": "ah", "aïe": "au!", "zut": "verdorie", "bravo": "bravo", "merci": "dank je", "bonjour": "goedendag", "bonsoir": "goedenavond", "salut": "hoi",
  "pardon": "sorry / pardon", "attention": "pas op", "voyons": "kom nou / eens kijken", "bah": "tja / bah", "eh": "hé", "hein": "hè?", "ben": "nou", "bon": "goed / nou",
};

// Probeer een woord te vinden: exact, dan zonder meervouds-s, dan delen van samengestelde woorden
export function lookup(word, ...extra) {
  const w = word.toLowerCase().replace(/[’]/g, "'");
  const dicts = [...extra.filter(Boolean), DICT];
  const tryKey = k => { for (const d of dicts) if (d[k]) return d[k]; return null; };
  let r = tryKey(w);
  if (r) return r;
  if (w.endsWith('s') || w.endsWith('x')) { r = tryKey(w.slice(0, -1)); if (r) return r; }
  if (w.endsWith('es')) { r = tryKey(w.slice(0, -2)); if (r) return r; }
  if (w.endsWith('e')) { r = tryKey(w.slice(0, -1)); if (r) return r; }
  if (w.endsWith('ée') || w.endsWith('és')) { r = tryKey(w.slice(0, -1)); if (r) return r; }
  if (w.includes('-')) {
    const parts = w.split('-').map(p => tryKey(p)).filter(Boolean);
    if (parts.length) return parts.join(' + ');
  }
  return null;
}
