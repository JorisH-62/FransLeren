// Woordensets per thema. [Frans, Nederlands]
export const DECKS = [
{
  id: 'basis', name: 'Onmisbare woordjes', emoji: '⭐', level: 'A1',
  words: [
    ['oui', 'ja'], ['non', 'nee'], ['et', 'en'], ['mais', 'maar'], ['ou', 'of'], ['avec', 'met'], ['sans', 'zonder'],
    ['très', 'heel / erg'], ['aussi', 'ook'], ['peut-être', 'misschien'], ['toujours', 'altijd'], ['jamais', 'nooit'],
    ['maintenant', 'nu'], ['ici', 'hier'], ['là', 'daar'], ['beaucoup', 'veel'], ['un peu', 'een beetje'], ['encore', 'nog / weer'],
    ['déjà', 'al'], ['bien sûr', 'natuurlijk'], ['d\'accord', 'oké / akkoord'], ['vraiment', 'echt'], ['tout', 'alles'], ['rien', 'niets'],
    ['quelqu\'un', 'iemand'], ['quelque chose', 'iets'], ['parce que', 'omdat'], ['alors', 'dus / dan'], ['après', 'na / daarna'], ['avant', 'voor / vroeger'],
  ],
},
{
  id: 'familie', name: 'Familie', emoji: '👨‍👩‍👧‍👦', level: 'A1',
  words: [
    ['la famille', 'de familie'], ['les parents', 'de ouders'], ['le père', 'de vader'], ['la mère', 'de moeder'], ['papa', 'papa'], ['maman', 'mama'],
    ['le frère', 'de broer'], ['la sœur', 'de zus'], ['le fils', 'de zoon'], ['la fille', 'de dochter'], ['l\'enfant', 'het kind'], ['le bébé', 'de baby'],
    ['le grand-père', 'de grootvader'], ['la grand-mère', 'de grootmoeder'], ['papi', 'opa'], ['mamie', 'oma'], ['les grands-parents', 'de grootouders'],
    ['l\'oncle', 'de oom'], ['la tante', 'de tante'], ['tonton', 'ome'], ['tata', 'tante (kindertaal)'], ['le cousin', 'de neef'], ['la cousine', 'de nicht'],
    ['le neveu', 'de neef (kind van broer/zus)'], ['la nièce', 'de nicht (kind van broer/zus)'], ['le petit-fils', 'de kleinzoon'], ['la petite-fille', 'de kleindochter'],
    ['le mari', 'de man (echtgenoot)'], ['la femme', 'de vrouw (echtgenote)'], ['le copain', 'het vriendje'], ['la copine', 'het vriendinnetje'],
    ['les beaux-parents', 'de schoonouders'], ['le beau-frère', 'de zwager'], ['la belle-sœur', 'de schoonzus'], ['le gendre', 'de schoonzoon'], ['la belle-fille', 'de schoondochter'],
    ['le parrain', 'de peetoom'], ['la marraine', 'de peettante'], ['être marié', 'getrouwd zijn'], ['ressembler à', 'lijken op'],
  ],
},
{
  id: 'tafel', name: 'Aan tafel', emoji: '🍽️', level: 'A1',
  words: [
    ['le petit-déjeuner', 'het ontbijt'], ['le déjeuner', 'de lunch'], ['le dîner', 'het avondeten'], ['le goûter', 'het vieruurtje'], ['l\'apéro', 'de borrel'],
    ['l\'entrée', 'het voorgerecht'], ['le plat principal', 'het hoofdgerecht'], ['le dessert', 'het nagerecht'],
    ['l\'assiette', 'het bord'], ['le verre', 'het glas'], ['la fourchette', 'de vork'], ['le couteau', 'het mes'], ['la cuillère', 'de lepel'], ['la serviette', 'het servet'],
    ['le pain', 'het brood'], ['le beurre', 'de boter'], ['le fromage', 'de kaas'], ['la viande', 'het vlees'], ['le poulet', 'de kip'], ['le poisson', 'de vis'],
    ['les légumes', 'de groenten'], ['les pommes de terre', 'de aardappelen'], ['la salade', 'de sla / salade'], ['les pâtes', 'de pasta'], ['le riz', 'de rijst'],
    ['le vin', 'de wijn'], ['la bière', 'het bier'], ['l\'eau', 'het water'], ['le jus d\'orange', 'het sinaasappelsap'], ['le café', 'de koffie'], ['le thé', 'de thee'],
    ['Bon appétit !', 'Eet smakelijk!'], ['C\'est délicieux !', 'Het is heerlijk!'], ['J\'ai bien mangé.', 'Ik heb lekker gegeten.'], ['Encore un peu ?', 'Nog een beetje?'],
    ['Non merci, je n\'ai plus faim.', 'Nee dank je, ik zit vol.'], ['Santé !', 'Proost!'], ['Tchin-tchin !', 'Proost! (informeel)'], ['la recette', 'het recept'], ['goûter', 'proeven'],
  ],
},
{
  id: 'huis', name: 'In huis', emoji: '🏡', level: 'A1',
  words: [
    ['la maison', 'het huis'], ['l\'appartement', 'het appartement'], ['la cuisine', 'de keuken'], ['le salon', 'de woonkamer'], ['la chambre', 'de slaapkamer'],
    ['la salle de bains', 'de badkamer'], ['les toilettes', 'de wc'], ['le jardin', 'de tuin'], ['le garage', 'de garage'], ['l\'escalier', 'de trap'],
    ['la porte', 'de deur'], ['la fenêtre', 'het raam'], ['le mur', 'de muur'], ['le toit', 'het dak'], ['la table', 'de tafel'], ['la chaise', 'de stoel'],
    ['le canapé', 'de bank'], ['le lit', 'het bed'], ['le frigo', 'de koelkast'], ['le four', 'de oven'], ['la machine à laver', 'de wasmachine'],
    ['la clé', 'de sleutel'], ['la lampe', 'de lamp'], ['le tapis', 'het tapijt / kleed'], ['ranger', 'opruimen'], ['faire le ménage', 'schoonmaken'], ['faire la vaisselle', 'afwassen'],
  ],
},
{
  id: 'gevoel', name: 'Gevoelens', emoji: '😊', level: 'A2',
  words: [
    ['content', 'blij'], ['heureux / heureuse', 'gelukkig'], ['triste', 'verdrietig'], ['fâché', 'boos'], ['énervé', 'geïrriteerd'], ['fatigué', 'moe'],
    ['stressé', 'gestrest'], ['inquiet / inquiète', 'ongerust'], ['calme', 'rustig'], ['surpris', 'verrast'], ['déçu', 'teleurgesteld'], ['fier / fière', 'trots'],
    ['amoureux', 'verliefd'], ['jaloux', 'jaloers'], ['gêné', 'verlegen / gegeneerd'], ['ravi', 'dolblij'], ['avoir le cafard', 'somber zijn'], ['en avoir marre', 'er genoeg van hebben'],
    ['avoir hâte de', 'niet kunnen wachten om'], ['ça me manque', 'ik mis het'], ['tu me manques', 'ik mis je'], ['ça me fait plaisir', 'dat doet me plezier'],
    ['rire', 'lachen'], ['pleurer', 'huilen'], ['sourire', 'glimlachen'], ['s\'inquiéter', 'zich zorgen maken'],
  ],
},
{
  id: 'lichaam', name: 'Lichaam & gezondheid', emoji: '🩺', level: 'A2',
  words: [
    ['la tête', 'het hoofd'], ['les yeux', 'de ogen'], ['l\'œil', 'het oog'], ['le nez', 'de neus'], ['la bouche', 'de mond'], ['les dents', 'de tanden'],
    ['l\'oreille', 'het oor'], ['les cheveux', 'het haar'], ['le cou', 'de nek'], ['le dos', 'de rug'], ['le ventre', 'de buik'], ['le bras', 'de arm'],
    ['la main', 'de hand'], ['le doigt', 'de vinger'], ['la jambe', 'het been'], ['le pied', 'de voet'], ['le genou', 'de knie'],
    ['J\'ai mal à la tête.', 'Ik heb hoofdpijn.'], ['J\'ai mal au ventre.', 'Ik heb buikpijn.'], ['être malade', 'ziek zijn'], ['le rhume', 'de verkoudheid'],
    ['la fièvre', 'de koorts'], ['le médecin', 'de dokter'], ['la pharmacie', 'de apotheek'], ['le médicament', 'het medicijn'], ['Guéris vite !', 'Beterschap!'], ['À tes souhaits !', 'Gezondheid! (na niezen)'],
  ],
},
{
  id: 'tijd', name: 'Tijd & weer', emoji: '⛅', level: 'A1',
  words: [
    ['le jour', 'de dag'], ['la semaine', 'de week'], ['le mois', 'de maand'], ['l\'an / l\'année', 'het jaar'], ['le matin', 'de ochtend'], ['l\'après-midi', 'de middag'],
    ['le soir', 'de avond'], ['la nuit', 'de nacht'], ['aujourd\'hui', 'vandaag'], ['hier', 'gisteren'], ['demain', 'morgen'], ['le week-end', 'het weekend'],
    ['le printemps', 'de lente'], ['l\'été', 'de zomer'], ['l\'automne', 'de herfst'], ['l\'hiver', 'de winter'],
    ['Quel temps fait-il ?', 'Wat voor weer is het?'], ['Il fait beau.', 'Het is mooi weer.'], ['Il fait chaud.', 'Het is warm.'], ['Il fait froid.', 'Het is koud.'],
    ['Il pleut.', 'Het regent.'], ['Il neige.', 'Het sneeuwt.'], ['Il y a du vent.', 'Het waait.'], ['Il y a du soleil.', 'De zon schijnt.'], ['l\'orage', 'het onweer'], ['le nuage', 'de wolk'],
  ],
},
{
  id: 'vrijetijd', name: 'Vrije tijd & hobby\'s', emoji: '⚽', level: 'A1',
  words: [
    ['le sport', 'de sport'], ['le foot', 'het voetbal'], ['le vélo', 'de fiets / het fietsen'], ['la natation', 'het zwemmen'], ['la randonnée', 'de wandeltocht'],
    ['la pêche', 'het vissen'], ['le jardinage', 'het tuinieren'], ['la cuisine', 'het koken'], ['la lecture', 'het lezen'], ['la musique', 'de muziek'],
    ['le cinéma', 'de bioscoop'], ['le film', 'de film'], ['la série', 'de serie'], ['le jeu de société', 'het gezelschapsspel'], ['les cartes', 'de kaarten'],
    ['la pétanque', 'jeu de boules'], ['faire du vélo', 'fietsen'], ['jouer au foot', 'voetballen'], ['jouer de la guitare', 'gitaar spelen'], ['se promener', 'wandelen'],
    ['aller à la plage', 'naar het strand gaan'], ['faire la sieste', 'een middagdutje doen'], ['Qu\'est-ce que tu aimes faire ?', 'Wat doe je graag?'], ['J\'adore…', 'Ik ben dol op…'],
  ],
},
{
  id: 'werk', name: 'Werk & school', emoji: '💼', level: 'A2',
  words: [
    ['le travail', 'het werk'], ['le boulot', 'het werk (informeel)'], ['le bureau', 'het kantoor / bureau'], ['le collègue', 'de collega'], ['le patron', 'de baas'],
    ['la réunion', 'de vergadering'], ['l\'entreprise', 'het bedrijf'], ['le salaire', 'het salaris'], ['les vacances', 'de vakantie'], ['être en congé', 'vrij hebben'],
    ['l\'école', 'de school'], ['le collège', 'de middelbare school (11-15 j)'], ['le lycée', 'de bovenbouw (15-18 j)'], ['la fac', 'de universiteit'], ['le prof', 'de leraar'],
    ['l\'élève', 'de leerling'], ['les devoirs', 'het huiswerk'], ['l\'examen', 'het examen'], ['Qu\'est-ce que tu fais dans la vie ?', 'Wat doe je voor werk?'],
    ['Je travaille dans…', 'Ik werk in…'], ['Je suis ingénieur.', 'Ik ben ingenieur.'], ['à la retraite', 'met pensioen'], ['travailler à domicile', 'thuiswerken'],
  ],
},
{
  id: 'reizen', name: 'Reizen & vervoer', emoji: '🚗', level: 'A2',
  words: [
    ['la voiture', 'de auto'], ['le train', 'de trein'], ['l\'avion', 'het vliegtuig'], ['le bus', 'de bus'], ['le vélo', 'de fiets'], ['à pied', 'te voet'],
    ['la gare', 'het station'], ['l\'aéroport', 'het vliegveld'], ['le billet', 'het kaartje'], ['la valise', 'de koffer'], ['le passeport', 'het paspoort'],
    ['l\'autoroute', 'de snelweg'], ['le péage', 'de tol'], ['l\'essence', 'de benzine'], ['les bouchons', 'de files'], ['la route', 'de weg'],
    ['à gauche', 'links'], ['à droite', 'rechts'], ['tout droit', 'rechtdoor'], ['Où est… ?', 'Waar is…?'], ['C\'est loin ?', 'Is het ver?'],
    ['Bon voyage !', 'Goede reis!'], ['Bonne route !', 'Goede reis! (met de auto)'], ['Vous avez fait bon voyage ?', 'Hebben jullie een goede reis gehad?'], ['arriver', 'aankomen'], ['partir', 'vertrekken'],
  ],
},
{
  id: 'dieren', name: 'Dieren', emoji: '🐾', level: 'A1',
  words: [
    ['le chien', 'de hond'], ['le chat', 'de kat'], ['l\'oiseau', 'de vogel'], ['le poisson', 'de vis'], ['le lapin', 'het konijn'], ['la souris', 'de muis'],
    ['le cheval', 'het paard'], ['la vache', 'de koe'], ['le cochon', 'het varken'], ['le mouton', 'het schaap'], ['la poule', 'de kip'], ['le canard', 'de eend'],
    ['l\'escargot', 'de slak'], ['la grenouille', 'de kikker'], ['l\'ours', 'de beer'], ['le loup', 'de wolf'], ['le renard', 'de vos'], ['l\'éléphant', 'de olifant'],
    ['la girafe', 'de giraf'], ['le singe', 'de aap'], ['le lion', 'de leeuw'], ['le dragon', 'de draak'], ['l\'araignée', 'de spin'], ['l\'abeille', 'de bij'], ['la coccinelle', 'het lieveheersbeestje'],
  ],
},
{
  id: 'kleding', name: 'Kleding', emoji: '👕', level: 'A1',
  words: [
    ['les vêtements', 'de kleren'], ['le pantalon', 'de broek'], ['le jean', 'de spijkerbroek'], ['la chemise', 'het overhemd'], ['le t-shirt', 'het t-shirt'],
    ['le pull', 'de trui'], ['la veste', 'het jasje'], ['le manteau', 'de jas'], ['la robe', 'de jurk'], ['la jupe', 'de rok'], ['les chaussures', 'de schoenen'],
    ['les chaussettes', 'de sokken'], ['le chapeau', 'de hoed'], ['la casquette', 'de pet'], ['l\'écharpe', 'de sjaal'], ['les lunettes', 'de bril'], ['le pyjama', 'de pyjama'],
    ['mettre', 'aantrekken'], ['enlever', 'uittrekken'], ['porter', 'dragen'], ['Ça te va bien !', 'Dat staat je goed!'],
  ],
},
{
  id: 'beschrijven', name: 'Mensen beschrijven', emoji: '🧑', level: 'A2',
  words: [
    ['grand', 'groot / lang'], ['petit', 'klein'], ['mince', 'slank'], ['gros', 'dik'], ['jeune', 'jong'], ['vieux / vieille', 'oud'], ['beau / belle', 'mooi'],
    ['gentil / gentille', 'aardig'], ['méchant', 'gemeen'], ['drôle', 'grappig'], ['sympa', 'aardig / leuk'], ['timide', 'verlegen'], ['bavard', 'spraakzaam'],
    ['intelligent', 'slim'], ['bête', 'dom'], ['paresseux', 'lui'], ['travailleur', 'hardwerkend'], ['têtu', 'koppig'], ['généreux', 'gul'], ['curieux', 'nieuwsgierig'],
    ['blond', 'blond'], ['brun', 'donkerharig'], ['roux', 'roodharig'], ['avoir les yeux bleus', 'blauwe ogen hebben'], ['avoir de l\'humour', 'gevoel voor humor hebben'],
  ],
},
{
  id: 'werkwoorden', name: 'Top-werkwoorden', emoji: '🏃', level: 'A1',
  words: [
    ['être', 'zijn'], ['avoir', 'hebben'], ['faire', 'doen / maken'], ['aller', 'gaan'], ['venir', 'komen'], ['dire', 'zeggen'], ['pouvoir', 'kunnen'],
    ['vouloir', 'willen'], ['savoir', 'weten'], ['devoir', 'moeten'], ['voir', 'zien'], ['prendre', 'nemen'], ['donner', 'geven'], ['mettre', 'zetten / leggen'],
    ['parler', 'praten'], ['manger', 'eten'], ['boire', 'drinken'], ['dormir', 'slapen'], ['aimer', 'houden van'], ['penser', 'denken'], ['croire', 'geloven'],
    ['comprendre', 'begrijpen'], ['attendre', 'wachten'], ['chercher', 'zoeken'], ['trouver', 'vinden'], ['acheter', 'kopen'], ['payer', 'betalen'], ['ouvrir', 'openen'],
    ['fermer', 'sluiten'], ['commencer', 'beginnen'], ['finir', 'afmaken'], ['aider', 'helpen'], ['oublier', 'vergeten'], ['apprendre', 'leren'], ['écrire', 'schrijven'],
    ['lire', 'lezen'], ['jouer', 'spelen'], ['marcher', 'lopen / werken (apparaat)'], ['courir', 'rennen'], ['rester', 'blijven'],
  ],
},
{
  id: 'feest', name: 'Feest & verjaardag', emoji: '🎂', level: 'A2',
  words: [
    ['la fête', 'het feest'], ['l\'anniversaire', 'de verjaardag'], ['Joyeux anniversaire !', 'Gefeliciteerd!'], ['Bon anniversaire !', 'Fijne verjaardag!'],
    ['le cadeau', 'het cadeau'], ['le gâteau', 'de taart'], ['les bougies', 'de kaarsjes'], ['souffler les bougies', 'de kaarsjes uitblazen'], ['les invités', 'de gasten'],
    ['inviter', 'uitnodigen'], ['fêter', 'vieren'], ['le mariage', 'de bruiloft'], ['Noël', 'Kerstmis'], ['Joyeux Noël !', 'Vrolijk kerstfeest!'], ['le Nouvel An', 'Nieuwjaar'],
    ['Bonne année !', 'Gelukkig nieuwjaar!'], ['Pâques', 'Pasen'], ['Félicitations !', 'Gefeliciteerd! (prestatie)'], ['Santé !', 'Proost!'], ['le champagne', 'de champagne'],
    ['Merci pour l\'invitation !', 'Bedankt voor de uitnodiging!'], ['Ça me fait très plaisir.', 'Dat vind ik heel leuk.'], ['Il ne fallait pas !', 'Dat had niet gehoeven!'],
  ],
},
{
  id: 'kinderen', name: 'Met kinderen', emoji: '🧸', level: 'A2',
  words: [
    ['le jouet', 'het speelgoed'], ['la poupée', 'de pop'], ['le ballon', 'de bal / ballon'], ['le doudou', 'de knuffel'], ['jouer', 'spelen'],
    ['cache-cache', 'verstoppertje'], ['le dessin animé', 'de tekenfilm'], ['l\'histoire', 'het verhaal'], ['raconter une histoire', 'een verhaaltje vertellen'],
    ['faire dodo', 'slapen (kindertaal)'], ['faire un câlin', 'knuffelen'], ['un bisou', 'een kusje'], ['C\'est l\'heure du bain !', 'Tijd voor het bad!'],
    ['Au lit !', 'Naar bed!'], ['Fais de beaux rêves !', 'Droom maar fijn!'], ['Tu as fait un bobo ?', 'Heb je je pijn gedaan?'], ['Bravo, mon grand !', 'Goed zo, jongen!'],
    ['ma puce', 'lieverd (lett. mijn vlo)'], ['mon chou', 'schatje (lett. mijn kool)'], ['mon lapin', 'lieverd (lett. mijn konijn)'], ['les bêtises', 'de kattenkwaad'], ['Arrête tes bêtises !', 'Hou op met dat kattenkwaad!'],
  ],
},
{
  id: 'stad', name: 'Stad & winkels', emoji: '🏪', level: 'A1',
  words: [
    ['la ville', 'de stad'], ['le village', 'het dorp'], ['la rue', 'de straat'], ['la place', 'het plein'], ['le marché', 'de markt'], ['la boulangerie', 'de bakkerij'],
    ['la boucherie', 'de slagerij'], ['le supermarché', 'de supermarkt'], ['la poste', 'het postkantoor'], ['la banque', 'de bank'], ['l\'église', 'de kerk'], ['la mairie', 'het gemeentehuis'],
    ['le magasin', 'de winkel'], ['faire les courses', 'boodschappen doen'], ['Combien ça coûte ?', 'Hoeveel kost het?'], ['C\'est trop cher.', 'Het is te duur.'],
    ['Je voudrais…', 'Ik zou graag … willen'], ['Et avec ceci ?', 'Anders nog iets?'], ['C\'est tout, merci.', 'Dat was het, dank u.'], ['Je peux payer par carte ?', 'Kan ik pinnen?'],
    ['une baguette', 'een stokbrood'], ['un pain au chocolat', 'een chocoladebroodje'], ['un croissant', 'een croissant'],
  ],
},
{
  id: 'natuur', name: 'Natuur & buiten', emoji: '🌳', level: 'A2',
  words: [
    ['la nature', 'de natuur'], ['la mer', 'de zee'], ['la plage', 'het strand'], ['la montagne', 'de berg / bergen'], ['la forêt', 'het bos'], ['le lac', 'het meer'],
    ['la rivière', 'de rivier'], ['le champ', 'het veld / akker'], ['l\'arbre', 'de boom'], ['la fleur', 'de bloem'], ['l\'herbe', 'het gras'], ['le ciel', 'de lucht'],
    ['le soleil', 'de zon'], ['la lune', 'de maan'], ['l\'étoile', 'de ster'], ['la campagne', 'het platteland'], ['le sable', 'het zand'], ['la vague', 'de golf'],
    ['la colline', 'de heuvel'], ['le coucher de soleil', 'de zonsondergang'],
  ],
},
{
  id: 'gesprek', name: 'Gesprekswoordjes', emoji: '🗨️', level: 'B1',
  words: [
    ['Ah bon ?', 'O ja?'], ['C\'est vrai ?', 'Echt waar?'], ['Sans blague !', 'Je meent het!'], ['Je vois.', 'Ik snap het.'], ['Tant mieux !', 'Mooi zo!'],
    ['Tant pis.', 'Jammer dan.'], ['Ça dépend.', 'Dat hangt ervan af.'], ['Bref…', 'Kortom…'], ['du coup', 'dus'], ['en fait', 'eigenlijk'], ['bon ben…', 'nou…'],
    ['quand même', 'toch / nou ja'], ['franchement', 'eerlijk gezegd'], ['à mon avis', 'volgens mij'], ['Je suis d\'accord.', 'Ik ben het ermee eens.'],
    ['Pas du tout !', 'Helemaal niet!'], ['Tout à fait !', 'Helemaal!'], ['Vous pouvez répéter ?', 'Kunt u het herhalen?'], ['Plus lentement, s\'il vous plaît.', 'Langzamer, alstublieft.'],
    ['Comment dit-on… ?', 'Hoe zeg je…?'], ['Qu\'est-ce que ça veut dire ?', 'Wat betekent dat?'], ['J\'ai oublié le mot.', 'Ik ben het woord vergeten.'], ['C\'est-à-dire…', 'Dat wil zeggen…'],
  ],
},
{
  id: 'telefoon', name: 'Bellen & berichten', emoji: '📱', level: 'A2',
  words: [
    ['le téléphone / le portable', 'de telefoon / mobiel'], ['appeler', 'bellen'], ['rappeler', 'terugbellen'], ['Allô ?', 'Hallo? (aan de telefoon)'], ['C\'est qui ?', 'Met wie?'],
    ['C\'est Joris.', 'Met Joris.'], ['Tu m\'entends ?', 'Hoor je me?'], ['Ça coupe.', 'De verbinding valt weg.'], ['le message', 'het bericht'], ['le texto', 'het sms\'je'],
    ['envoyer', 'versturen'], ['la photo', 'de foto'], ['l\'appel vidéo', 'het videogesprek'], ['Je te rappelle.', 'Ik bel je terug.'], ['Bisous !', 'Kusjes! (afsluiting)'],
    ['Gros bisous !', 'Dikke kus!'], ['Bises !', 'Kusjes!'], ['Je t\'embrasse.', 'Liefs (afsluiting)'], ['À plus !', 'Later!'], ['Ça marche !', 'Komt goed! / Oké!'],
  ],
},
];
