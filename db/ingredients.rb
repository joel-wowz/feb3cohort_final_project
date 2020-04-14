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

