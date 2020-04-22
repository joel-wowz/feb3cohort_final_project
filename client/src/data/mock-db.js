const IngredientDB = [
  {
    id: 1,
    name: 'Apple',
    volume: 'Steady',
    weight: 'Medium',
    description:
      'An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.',
    primary_matches: [
      'apple cider ',
      'apple juice ',
      'brandy ',
      'BUTTER, UNSALTED ',
      'CALVADOS ',
      'CARAMEL ',
      'Camembert ',
      'CINNAMON ',
      'cloves ',
      'cognac ',
      'CREAM ',
      'ICE CREAM ',
      'custards ',
      'ginger ',
      'honey ',
      'Kirsch ',
      'LEMON, JUICE ',
      'LEMON, ZEST ',
      'Madeira ',
      'nutmeg ',
      'pecans ',
      'pine nuts ',
      'pork ',
      'pumpkin ',
      'raisins ',
      'RUM, DARK ',
      'RUM, LIGHT ',
      'sherry ',
      'sweet potatoes ',
      'vanilla ',
      'vermouth ',
      'SUGAR, BROWN ',
      'SUGAR, WHITE ',
      'WALNUTS',
    ],
    matches: [
      'allspice ',
      'almonds ',
      'applejack ',
      'apricots: dried, jam, puree ',
      'Armagnac ',
      'bacon ',
      'bay leaf ',
      'beef ',
      'blackberries ',
      'bourbon ',
      'brioche ',
      'butterscotch ',
      'cabbage, red ',
      'Cointreau ',
      'cardamom ',
      'celery ',
      'celery root ',
      'cheddar ',
      'goat ',
      'Gruyère ',
      'cherries: dried, fresh ',
      'chestnuts ',
      'chicken ',
      'chives ',
      'cider ',
      'coriander ',
      'cranberries ',
      'crème anglaise (sauce) ',
      'crème fraîche ',
      'crust: pastry, pie ',
      'cumin ',
      'currants, esp. black, and currant jelly ',
      'curry powder ',
      'dates ',
      'duck ',
      'eggplant ',
      'fennel ',
      'frisée ',
      'goose ',
      'hazelnuts ',
      'horseradish ',
      'ice cream ',
      'lavender ',
      'lemon thyme ',
      'lychees ',
      'maple syrup ',
      'mayonnaise ',
      'meringue ',
      'molasses ',
      'mustard ',
      'nuts ',
      'oatmeal and oats ',
      'oil: canola, hazelnut, walnut ',
      'olive oil ',
      'onions, esp. green, red ',
      'orange: juice, zest ',
      'parsley ',
      'peanuts and peanut butter ',
      'pears ',
      'pepper, black ',
      'pies ',
      'pineapple ',
      'pistachios ',
      'plums ',
      'pomegranates ',
      'poultry ',
      'prunes ',
      'puff pastry ',
      'quince ',
      'rhubarb ',
      'rice and rice pudding ',
      'rosemary ',
      'salt,_kosher ',
      'sauerkraut ',
      'soups ',
      'sour_cream ',
      'star_anise ',
      'tarragon ',
      'tarts ',
      'thyme ',
      'verjus ',
      'vinegar, apple_cider ',
      'wine: red, dry white ',
      'yogurt',
    ],
    avoids: [],
    flavour: ['Sweet', 'Astirgent'],
    techniques: ['bake, caramelize, deep-fry, grill, poach, raw, sauté, stew'],
  },
  {
    id: 2,
    name: 'Soy Sauce',
    volume: 'Loud',
    weight: 'Light',
    description:
      'is an East Asian liquid condiment of Chinese origin, traditionally made from a fermented paste of soybeans, roasted grain, brine, and Aspergillus oryzae or Aspergillus sojae molds.',
    primary_matches: ['ginger ', 'honey '],
    matches: [
      'basil ',
      'beef ',
      'broccoli ',
      'chicken ',
      'coriander ',
      'fish: cooked, raw ',
      'garlic ',
      'lime juice',
      'lobster , raw',
      'marinades ',
      'meats ',
      'mirin ',
      'molasses ',
      'orange zest',
      'peanuts ',
      'red pepper flakes',
      'salt ',
      'scallions ',
      'seafood ',
      'sesame oil',
      'sugar ',
      'wasabi ',
    ],
    avoids: [],
    flavour: ['Salty'],
    techniques: ['add at end of cooking proccess, or to finish a dish'],
  },
  {
    id: 3,
    name: 'Chicken',
    volume: 'quiet',
    weight: 'Medium',
    description:
      'Chicken is a widely used and popular protien with a variety of cooking technqies. The light and dark meat both have unique taste and textures, as well as different cooking methods.',
    primary_matches: [
      'bacon',
      'BASIL: regular, cinnamon',
      'BAY LEAF',
      'BUTTER, UNSALTED',
      'CARROTS',
      'chile peppers: dried red (e.g., chipotle), fresh green (e.g., jalapeño)',
      'cilantro',
      'CINNAMON',
      'GARLIC',
      'GINGER: fresh, ground',
      'honey',
      'leeks',
      'LEMON: juice, zest',
      'mayonnaise',
      'MUSHROOMS: cultivated or wild (e.g., cepes, chanterelles, morels, portobello, shiitake, white)',
      'mustard: Dijon, dry, yellow mustard seeds',
      'OIL: peanut',
      'OLIVE OIL',
      'OLIVES: black, green, kalamata, niçoise',
      'ONIONS: cipollini, pearl, red, Spanish, spring, sweet orange: juice, zest',
      'paprika',
      'PARSLEY, FLAT-LEAF (garnish)',
      'potatoes (accompaniment)',
      'ROSEMARY, fresh',
      'TARRAGON',
      'THYME, FRESH',
      'TOMATOES AND TOMATO PASTE',
      'VINEGAR: balsamic',
      'WINE: dry to off-dry white, dry red',
    ],
    matches: [
      'allspice',
      'almonds',
      'anise',
      'apples',
      'apricots, dried',
      'artichokes',
      'avocadoes',
      'bananas',
      'beans: red, white',
      'beer',
      'bell peppers: red, green, yellow',
      'bouquet garni',
      'brandy, esp. apple (in sauce)',
      'bread crumbs or panko',
      'buttermilk',
      'Calvados',
      'capers',
      'cardamom',
      'cashews (e.g., Indian cuisine, etc.)',
      'cauliflower',
      'cayenne',
      'celery',
      'celery root',
      'celery seeds',
      'chard',
      'cheese: Asiago, blue, Comté, Emmental, Fontina, Parmesan',
      'chervil',
      'chicken livers',
      'chickpeas',
      'chives',
      'cider',
      'cloves',
      'coconut milk (e.g., Indian cuisine, etc.)',
      'coriander',
      'corn',
      'cranberries: dried',
      'cream (e.g., French, Indian cuisine, etc.)',
      'crème fraîche',
      'cumin',
      'currants',
      'curry leaves (e.g., Indian cuisine)',
      'curry powder',
      'curry sauce',
      'daikon',
      'dates',
      'dill',
      'dumplings',
      'endive',
      'escarole',
      'fenugreek',
      'figs',
      'fines herbes (i.e., chervil, chives, parsley, tarragon)',
      'fish sauce, Thai',
      'five-spice powder',
      'galangal',
      'garam masala (e.g., Indian cuisine)',
      'Grand Marnier',
      'grapefruit, juice',
      'grapes and grape juice',
      'greens',
      'guava',
      'ham',
      'hazelnuts',
      'hoisin sauce',
      'kale',
      'lemongrass',
      'lime, juice',
      'mangoes',
      'maple syrup',
      'marjoram',
      'mint',
      'mirepoix',
      'molasses',
      'nutmeg',
      'nuts: cashews, peanuts',
      'OIL: canola, grapeseed, hazelnut, safflower, sesame, vegetable',
      'oregano',
      'pancetta',
      'parsnips',
      'peaches',
      'peanuts',
      'pears',
      'peas: black-eyed, green',
      'PEPPER: BLACK, PINK, WHITE',
      'pesto',
      'pine nuts',
      'polenta (accompaniment)',
      'pomegranates and pomegranate molasses',
      'poppy seeds',
      'prosciutto',
      'prunes',
      'raisins',
      'red pepper flakes',
      'rice',
      'saffron',
      'sage',
      'SALT: fleur de sel, kosher, sea',
      'sauces, Mornay',
      'sausages, esp. spicy (e.g., andouille)',
      'savory',
      'scallions',
      'sesame seeds',
      'shallots',
      'sherry, dry (e.g., manzanilla)',
      'sour cream',
      'soy sauce',
      'spinach',
      'star anise',
      'STOCKS: chicken, veal',
      'sugar: brown, white (pinch)',
      'sweet potatoes',
      'Tabasco sauce',
      'truffles',
      'turmeric',
      'turnips',
      'vanilla',
      'vermouth',
      'VINEGAR: Chinese black, cider, red wine, sherry, tarragon, white wine',
      'yogurt',
      'waffles',
      'whiskey',
      'WINE: rice, sweet wine, vermouth',
    ],
    flavour: ['lean(white meat), savoury, mild'],
    avoids: [],
    techniques: [
      'bake, braise, broil, deep-fry, grill, poach, roast, sauté, steam, stew, stir-fry',
    ],
  },
  {
    id: 4,
    name: 'beef brisket',
    volume: 'moderate',
    weight: 'medium',
    description:
      'Brisket is a cut of meat from the breast or lower chest of beef or veal. The beef brisket is one of the nine beef primal cuts, though the definition of the cut differs internationally',
    primary_matches: [
      'barbecue sauce',
      'cabbage, with corned beef brisket',
      'garlic',
      'onions',
      'potatoes',
      'stock, beef',
      'sugar, brown',
      'thyme',
      'tomatoes and tomato paste',
      'vinegar: sherry, wine',
      'wine, red',
    ],
    matches: [
      'barbecue rub',
      'bay leaf',
      'beer',
      'chili powder',
      'cinnamon',
      'cumin',
      'fennel seeds',
      'horseradish',
      'maple syrup',
      'mirepoix',
      'mustard',
      'olive oil',
      'pasilla peppers',
      'pepper, black',
      'rosemary',
      'salt',
      'soups',
      'star anise',
      'stews',
    ],
    flavor: '',
    avoids: [],
    techniques: ['barbecue, braise, corn, roast, simmer, smoke'],
  },
  {
    id: 5,
    name: 'Honey',
    volume: 'loud',
    weight: 'medium',
    description:
      'Honey is a sweet, viscous food substance made by honey bees and some related insects',
    primary_matches: [
      'almonds',
      'apricots',
      'bananas',
      'chestnuts',
      'chicken',
      'cinnamon',
      'CREAM AND ICE CREAM',
      'figs, esp. dried',
      'ginger',
      'hazelnuts',
      'LEMON: juice, zest',
      'LIME, juice',
      'mascarpone',
      'mustard',
      'nutmeg',
      'NUTS',
      'ORANGE: juice, zest',
      'pistachios',
      'raisins',
      'soy sauce',
      'SUGAR: brown, white',
      'VANILLA',
      'walnuts',
    ],
    matches: [
      'apples',
      'baked goods (e.g., biscuits, breads)',
      'brandy',
      'butter',
      'buttermilk',
      'carrots',
      'cheese: goat, ricotta, soft',
      'Chinese cuisine',
      'chocolate: dark, white',
      'coconut',
      'coffee',
      'cognac',
      'currants, red',
      'dates',
      'desserts',
      'duck',
      'fruit',
      'grapefruit',
      'grapes',
      'Greek cuisine',
      'guava',
      'ham',
      'kiwi fruit',
      'kumquats',
      'lamb',
      'lavender',
      'liqueur, orange (e.g., Grand Marnier)',
      'lychees',
      'melon',
      'Middle Eastern cuisines mint',
      'Moroccan cuisine',
      'oats',
      'papaya',
      'pastries',
      'peaches',
      'peanuts',
      'pears',
      'pecans',
      'persimmons',
      'pineapple',
      'pine nuts',
      'plums',
      'pomegranate',
      'pork',
      'prunes',
      'pumpkin',
      'quince',
      'raspberries',
      'red pepper flakes',
      'rhubarb',
      'rum',
      'sage',
      'sauces',
      'Southern cuisine',
      'sweet potatoes',
      'tea',
      'tequila',
      'thyme',
      'Turkish cuisine',
      'whiskey',
      'wine: red, white',
    ],
    avoids: [],
    flavour: 'Sweet, Astringent',
    techniques: [],
  },

  {
    id: 7,
    name: 'Tarragon',
    volume: 'loud',
    weight: 'light',
    description:
      'Tarragon is a small, shrubby herb, Artemisia dracunculus, in the sunflower family. Two species are cultivated, Russian and French. ... Tarragon adds distinctive flavor to sauces.',
    primary_matches: [
      'acidic foods and flavors (e.g., citrus)',
      'beets',
      'carrots',
      'cheese, esp. goat, ricotta',
      'chervil',
      '*CHICKEN',
      'chives',
      'EGGS AND EGG DISHES (e.g., omelets), egg salad',
      'fennel bulb',
      'FISH',
      'French cuisine',
      'grapefruit',
      'LEMON, JUICE',
      'lime',
      'lobster',
      'melon',
      'mushrooms',
      'mustard: Dijon, Chinese (ingredient and complement)',
      'PARSLEY',
      'potatoes',
      'poultry',
      'sauces, e.g., BÉARNAISE (key ingredient), creamy, hollandaise, tartar',
      'SHELLFISH',
      'spinach',
      'TOMATOES',
      'VINEGAR, esp. champagne, sherry, white wine',
    ],
    matches: [
      'apples',
      'bay leaf',
      'beef',
      'blueberries',
      'butter',
      'cabbage',
      'caraway',
      'carrots',
      'chickpeas',
      'citrus',
      'cream',
      'cream cheese',
      'eggs',
      'European cuisine',
      'fennel',
      'French cuisine',
      'game',
      'game birds',
      'ginger, dried',
      'Greek cuisine',
      'honey',
      'Italian cuisine',
      'lamb',
      'lemon',
      'lemon herbs (balm, thyme, verbena)',
      'lovage',
      'Mediterranean cuisine',
      'mint',
      'offal',
      'orange',
      'oregano',
      'oysters (e.g., stuffing)',
      'pancetta',
      'paprika',
      'parsley, flat-leaf',
      'pears',
      'pepper, black',
      'pumpkin',
      'rice',
      'rich dishes',
      'salads: pasta, potato',
      'shrimp',
      'skate',
      'slow-cooked dishes',
      'Spanish cuisine',
      'steak',
      'stocks',
      'swordfish',
      'tuna',
      'vegetables, esp. root',
      'walnuts',
      'wine, esp. white',
    ],
    flavor: 'sweet',
    avoids: 'basil',
    techniques:
      'Always use cooked (never raw); add near the end of the cooking process.',
  },
  {
    id: 6,
    name: 'Sage',
    volume: 'loud',
    weight: 'moderate',
    description: 'Avocados are nice green stuff and they come from deez nuts',
    primary_matches: [
      'asparagus',
      'BEANS, esp. dried, green',
      'bread',
      'CHEESE, esp. Brie, feta, Fontina, Gruyère, Parmesan, ricotta',
      'cherries, esp. tart',
      'CHICKEN, esp. roasted',
      'corn',
      'duck',
      'eggplant',
      'fattier foods, esp. meats',
      'fish, esp. oilier',
      'garlic',
      'goose',
      'liver',
      'marjoram',
      'meats, fattier, richer, and/or roasted',
      'mushrooms',
      'olive oil',
      'ONIONS',
      'PASTA, esp. gnocchi, ravioli',
      'peas',
      '*PORK',
      'potatoes',
      'poultry',
      'prosciutto',
      'rosemary',
      'sausages',
      'savory',
      'shellfish',
      'soups, esp. legumes',
      'squash, winter',
      'stews',
      'STUFFING',
      'thyme',
      'tomatoes',
      'turkey',
      'veal',
    ],
    matches: [
      'apples',
      'bay leaf',
      'beef',
      'blueberries',
      'butter',
      'cabbage',
      'caraway',
      'carrots',
      'chickpeas',
      'citrus',
      'cream',
      'cream cheese',
      'eggs',
      'European cuisine',
      'fennel',
      'French cuisine',
      'game',
      'game birds',
      'ginger, dried',
      'Greek cuisine',
      'honey',
      'Italian cuisine',
      'lamb',
      'lemon',
      'lemon herbs (balm, thyme, verbena)',
      'lovage',
      'Mediterranean cuisine',
      'mint',
      'offal',
      'orange',
      'oregano',
      'oysters (e.g., stuffing)',
      'pancetta',
      'paprika',
      'parsley, flat-leaf',
      'pears',
      'pepper, black',
      'pumpkin',
      'rice',
      'rich dishes',
      'salads: pasta, potato',
      'shrimp',
      'skate',
      'slow-cooked dishes',
      'Spanish cuisine',
      'steak',
      'stocks',
      'swordfish',
      'tuna',
      'vegetables, esp. root',
      'walnuts',
      'wine, esp. white',
    ],
    flavor: 'sweet, bitter, sour',
    avoids: ['tarragon'],
    techniques: [
      'Always use cooked (never raw); add near the end of the cooking process.',
    ],
  },
  {
    id: 8,
    name: 'Black-eyed Peas',
    volume: 'Moderate',
    weight: 'Light',
    description:
      'The black-eyed pea, black-eyed bean, or goat pea, a legume, is a subspecies of the cowpea, grown around the world for its medium-sized, edible bean. The common commercial variety is called the California Blackeye; it is pale-colored with a prominent black spot.',
    primary_matches: [
      'GREENS (e.g., collard)',
      'HAM HOCKS',
      'onions: red, yellow',
      'pepper, black',
      'Southern cuisine (American)',
    ],
    matches: [
      'African cuisine',
      'bay leaf',
      'cardamom',
      'carrots',
      'cayenne',
      'celery',
      'chile peppers, dried red',
      'cinnamon',
      'cloves',
      'coriander',
      'cumin',
      'garam masala',
      'garlic',
      'ginger, fresh',
      'Indian cuisine',
      'oil, peanut',
      'pork',
      'red pepper flakes',
      'rice',
      'salt',
      'savory',
      'tomatoes',
      'turmeric',
      'vinegar, white wine',
      'yogurt',
    ],
    flavor: 'starchy, earthy, nutty',
    avoids: [],
    techniques: 'simmer',
  },
  {
    id: 9,
    name: 'Salt, smoked',
    volume: 'Loud',
    weight: 'Light',
    description:
      'A dry smoked salt that is traditionally used for finishing dishes, imparts a light smokey flavor to foods as well as a decent salt crunch',
    primary_matches: [],
    matches: [
      'brines, esp. for pork',
      'chicken',
      'fish, esp. raw',
      'meats: barbecued, red',
      'pork',
      'potatoes, baked',
      'seafood',
      'salmon',
      'sardines',
      'steak',
      'tuna',
      'vegetarian dishes',
    ],
    avoids: [],
    flavor: 'salty, smokey',
    techniques: 'Brine, finsish, cure',
  },
];

export default IngredientDB;
