# require 'sequel'

# DB = Sequel.sqlite # memory database, requires sqlite3

# DB.create_table :ingredients do
#   primary_key :id
#   String :name
#   String :weight
#   String :volume
#   Text :matches
#   Text :avoid
#   Text :flavor
#   Text :techniques

# end

# ingredients = DB[:ingredients] # Create a dataset

# # Populate the table
# ingredients.insert(:name => 'apple', :weight => 'medium', :volume => 'steady', :matches => med , :avoid => med, :flavor=> med, :techniques => med)
# ingredients.insert(:name => 'pork', :weight => 'heavy', :volume => 'loud', :matches => med , :avoid => med, :flavor=> med, :techniques => med)
# ingredients.insert(:name => 'cinnamon', :weight => 'light', :volume => 'quiet', :matches => med , :avoid => med, :flavor=> med, :techniques => med)

# Ingredient.create!(:name => 'pork', :weight => 'heavy', :volume => 'loud', :matches => 'apple, cinnamon' , :avoids => nil, :flavor=> 'porky', :techniques => 'roast, fry, grill')
# Ingredient.create!(:name => 'cinnamon', :weight => 'light', :volume => 'quiet', :matches => 'pork, apple' , :avoids => nil, :flavor=> 'spicy, hot', :techniques => 'ground, steep')
# Ingredient.create!(:name => 'dill', :weight => 'medium', :volume => 'steady', :matches => 'pork' , :avoids => 'apple', :flavor=> 'earthy, astringent', :techniques => 'raw')

# Ingredient.create!(:name => ' ', :weight => ' ', :volume => ' ', :primary_matches => ' ', :matches =>  ' ' , :avoids =>  ' ', :flavor=>  ' ', :techniques => ' ')
#Pork
# ['apple cider' , 'apple juice' , 'brandy' , 'BUTTER, UNSALTED' , 'CALVADOS' , 'CARAMEL' , 'Camembert' , 'CINNAMON' , 'cloves' , 'cognac' , 'CREAM' , 'ICE CREAM' , 'custards' , 'ginger' , 'honey' , 'Kirsch' , 'LEMON, JUICE' , 'LEMON, ZEST' , 'Madeira' , 'nutmeg' , 'pecans' , 'pine nuts' , 'pork' , 'pumpkin' , 'raisins' , 'RUM, DARK' , 'RUM, LIGHT' , 'sherry' , 'sweet potatoes' , 'vanilla' , 'vermouth' , 'SUGAR, BROWN' , 'SUGAR, WHITE' , 'WALNUTS']
# ['allspice' , 'almonds' , 'applejack' , 'apricots: dried, jam, puree' , 'Armagnac' , 'bacon' , 'bay leaf' , 'beef' , 'blackberries' , 'bourbon' , 'brioche' , 'butterscotch' , 'cabbage, red' , 'Cointreau' , 'cardamom' , 'celery' , 'celery root' , 'cheddar' , 'goat' , 'Gruyère' , 'cherries: dried, fresh' , 'chestnuts' , 'chicken' , 'chives' , 'cider' , 'coriander' , 'cranberries' , 'crème anglaise (sauce)' , 'crème fraîche' , 'crust: pastry, pie' , 'cumin' , 'currants, esp. black, and currant jelly' , 'curry powder' , 'dates' , 'duck' , 'eggplant' , 'fennel' , 'frisée' , 'goose' , 'hazelnuts' , 'horseradish' , 'ice cream' , 'lavender' , 'lemon thyme' , 'lychees' , 'maple syrup' , 'mayonnaise' , 'meringue' , 'molasses' , 'mustard' , 'nuts' , 'oatmeal and oats' , 'oil: canola, hazelnut, walnut' , 'olive oil' , 'onions, esp. green, red' , 'orange: juice, zest' , 'parsley' , 'peanuts and peanut butter' , 'pears' , 'pepper, black' , 'pies' , 'pineapple' , 'pistachios' , 'plums' , 'pomegranates' , 'poultry' , 'prunes' , 'puff pastry' , 'quince' , 'rhubarb' , 'rice and rice pudding' , 'rosemary' , 'salads: fruit, green' , 'salt, kosher' , 'sauerkraut' , 'soups' , 'sour cream' , 'star anise' , 'tarragon' , 'tarts' , 'thyme' , 'verjus' , 'vinegar: apple cider, raspberry' , 'wine: red, dry white' , 'yogurt']

#Soy sauce

# Chicken


# Corned Beef - redirect to beef brisket

# Honey

# Sage

# Tarragon (AVOID) [prove by starting search with tarragon and searching sage)

# Black-eyed peas


# Salt, smoked
