# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# ruby encoding: utf-8

Ingredient.create!(:name => 'apple', :weight => 'medium', :volume => 'steady', :primary_matches => ['apple cider ' , 'apple juice ' , 'brandy ' , 'BUTTER, UNSALTED ' , 'CALVADOS ' , 'CARAMEL ' , 'Camembert ' , 'CINNAMON ' , 'cloves ' , 'cognac ' , 'CREAM ' , 'ICE CREAM ' , 'custards ' , 'ginger ' , 'honey ' , 'Kirsch ' , 'LEMON, JUICE ' , 'LEMON, ZEST ' , 'Madeira ' , 'nutmeg ' , 'pecans ' , 'pine nuts ' , 'pork ' , 'pumpkin ' , 'raisins ' , 'RUM, DARK ' , 'RUM, LIGHT ' , 'sherry ' , 'sweet potatoes ' , 'vanilla ' , 'vermouth ' , 'SUGAR, BROWN ' , 'SUGAR, WHITE ' , 'WALNUTS'], :matches => ['allspice ' , 'almonds ' , 'applejack ' , 'apricots: dried, jam, puree ' , 'Armagnac ' , 'bacon ' , 'bay leaf ' , 'beef ' , 'blackberries ' , 'bourbon ' , 'brioche ' , 'butterscotch ' , 'cabbage, red ' , 'Cointreau ' , 'cardamom ' , 'celery ' , 'celery root ' , 'cheddar ' , 'goat ' , 'Gruyère ' , 'cherries: dried, fresh ' , 'chestnuts ' , 'chicken ' , 'chives ' , 'cider ' , 'coriander ' , 'cranberries ' , 'crème anglaise (sauce) ' , 'crème fraîche ' , 'crust: pastry, pie ' , 'cumin ' , 'currants, esp. black, and currant jelly ' , 'curry powder ' , 'dates ' , 'duck ' , 'eggplant ' , 'fennel ' , 'frisée ' , 'goose ' , 'hazelnuts ' , 'horseradish ' , 'ice cream ' , 'lavender ' , 'lemon thyme ' , 'lychees ' , 'maple syrup ' , 'mayonnaise ' , 'meringue ' , 'molasses ' , 'mustard ' , 'nuts ' , 'oatmeal and oats ' , 'oil: canola, hazelnut, walnut ' , 'olive oil ' , 'onions, esp. green, red ' , 'orange: juice, zest ' , 'parsley ' , 'peanuts and peanut butter ' , 'pears ' , 'pepper, black ' , 'pies ' , 'pineapple ' , 'pistachios ' , 'plums ' , 'pomegranates ' , 'poultry ' , 'prunes ' , 'puff pastry ' , 'quince ' , 'rhubarb ' , 'rice and rice pudding ' , 'rosemary ' , 'salt,_kosher ' , 'sauerkraut ' , 'soups ' , 'sour_cream ' , 'star_anise ' , 'tarragon ' , 'tarts ' , 'thyme ' , 'verjus ' , 'vinegar, apple_cider ' , 'wine: red, dry white ' , 'yogurt'], :avoids => nil, :flavor=> 'sweet, astringent', :techniques => 'bake, caramelize, deep-fry, grill, poach, raw, sauté, stew')
Ingredient.create!(:name => 'Soy Sauce', :weight => 'light', :volume => 'loud', :primary_matches => ['ginger ' , 'honey '], :matches =>  ['basil ' , 'beef ' , 'broccoli ' , 'chicken ' , 'coriander ' , 'fish: cooked, raw ' , 'garlic ' , 'lime juice' ,  'lobster , raw' , 'marinades ' , 'meats ' , 'mirin ' , 'molasses ' , 'orange zest' ,  'peanuts ' , 'red pepper flakes' ,  'salt ' , 'scallions ' , 'seafood ' , 'sesame oil' ,  'sugar ' , 'wasabi '], :avoids =>  nil, :flavor=>  'salty', :techniques => 'add at end of cooking proccess, or to finish a dish')
Ingredient.create!(:name => 'chicken', :weight => 'medium', :volume => 'quiet', :primary_matches => ['bacon',
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
'WINE: dry to off-dry white, dry red'], :matches =>  ['allspice',
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
'WINE: rice, sweet wine, vermouth'] , :avoids =>  nil, :flavor=>  'lean (white meat), savoury, mild ', :techniques => 'bake, braise, broil, deep-fry, grill, poach, roast, sauté, steam, stew, stir-fry')
Ingredient.create!(:name => 'beef brisket', :weight => 'medium', :volume => 'moderate', :primary_matches => ['barbecue sauce',
'cabbage, with corned beef brisket',
'garlic',
'onions',
'potatoes',
'stock, beef',
'sugar, brown',
'thyme',
'tomatoes and tomato paste',
'vinegar: sherry, wine',
'wine, red'
], :matches =>  ['barbecue rub',
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
'stews'] , :avoids =>  nil, :flavor=>  'sweet, salty, fatty', :techniques => 'barbecue, braise, corn, roast, simmer, smoke')
Ingredient.create!(:name => 'honey', :weight => 'medium', :volume => 'loud', :primary_matches => ['almonds',
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
'walnuts'], :matches =>  ['apples',
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
'wine: red, white'] , :avoids =>  nil, :flavor=>  'sweet, astringent', :techniques => nil)
Ingredient.create!(:name => 'sage', :weight => 'moderate', :volume => 'loud', :primary_matches => ['asparagus',
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
'veal'], :matches =>  ['apples',
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
'wine, esp. white',] , :avoids =>  nil, :flavor=>  'sweet, bitter, sour', :techniques => 'Always use cooked (never raw); add near the end of the cooking process.')
Ingredient.create!(:name => 'tarragon', :weight => 'light', :volume => 'loud', :primary_matches => ['acidic foods and flavors (e.g., citrus)',
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
'VINEGAR, esp. champagne, sherry, white wine'], :matches =>  ['anise',
'apples',
'apricots',
'artichokes',
'asparagus',
'basil (say some)',
'bass',
'bay leaf',
'beans, green',
'beef',
'broccoli',
'capers',
'cauliflower',
'celery seeds',
'chocolate',
'corn',
'crab and crab cakes',
'cream',
'crème fraîche',
'dill',
'fennel seeds',
'fines herbes (key ingredient)',
'game',
'game birds',
'garlic',
'greens, bitter',
'halibut',
'leeks',
'lemon herbs (balm, thyme, verbena)',
'lentils',
'lettuces (e.g., frisée)',
'lovage',
'marjoram',
'mayonnaise',
'meats, white',
'mint',
'mussels',
'olive oil',
'onions',
'orange, juice',
'oysters',
'paprika',
'pasta',
'peaches',
'peas',
'pepper, black',
'Pernod',
'pork',
'rabbit',
'radishes',
'rice',
'salads (e.g., fruit, green) and salad dressings',
'salmon',
'salsify',
'savory',
'scallops',
'shallots',
'shrimp',
'sole',
'soups',
'sorrel',
'soy sauce',
'squash, summer',
'steaks',
'stock, vegetable',
'stuffings',
'veal',
'vegetables',
'vinaigrette',
'wine, red',
'zucchini'] , :avoids =>  ['basil (say some)',
'desserts',
'oregano',
'rosemary',
'sage',
'savory',
'sweet dishes'], :flavor=>  'sweet', :techniques => 'Add at the end of the cooking process')

Ingredient.create!(:name => 'Black-eyed peas', :weight => 'light', :volume => 'moderate', :primary_matches => ['GREENS (e.g., collard)',
'HAM HOCKS',
'onions: red, yellow',
'pepper, black',
'Southern cuisine (American)'], :matches =>  ['African cuisine',
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
'yogurt'] , :avoids =>  nil, :flavor=>  'starchy, earthy, nutty', :techniques => 'simmer')
Ingredient.create!(:name => 'Salt, smoked', :weight => 'light', :volume => 'loud', :primary_matches => nil, :matches =>  ['brines, esp. for pork',
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
'vegetarian dishes'] , :avoids =>  nil, :flavor=>  'salty, smokey', :techniques => 'finish')


# test for duplicate entry
# Ingredient.create(:name => 'dill', :weight => 'medium', :volume => 'steady', :matches => 'pork' , :avoids => 'apple', :flavor=> 'earthy, astringent', :techniques => 'raw')