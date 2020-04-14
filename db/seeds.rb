# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# ruby encoding: utf-8

Ingredient.create!(:name => 'apple', :weight => 'medium', :volume => 'steady', :matches => 'pork, cinnamon' , :avoids => nil, :flavor=> 'sweet', :techniques => 'roast, bake')
Ingredient.create!(:name => 'pork', :weight => 'heavy', :volume => 'loud', :matches => 'apple, cinnamon' , :avoids => nil, :flavor=> 'porky', :techniques => 'roast, fry, grill')
Ingredient.create!(:name => 'cinnamon', :weight => 'light', :volume => 'quiet', :matches => 'pork, apple' , :avoids => nil, :flavor=> 'spicy, hot', :techniques => 'ground, steep')
Ingredient.create!(:name => 'dill', :weight => 'medium', :volume => 'steady', :matches => 'pork' , :avoids => 'apple', :flavor=> 'earthy, astringent', :techniques => 'raw')

# test for duplicate entry
# Ingredient.create(:name => 'dill', :weight => 'medium', :volume => 'steady', :matches => 'pork' , :avoids => 'apple', :flavor=> 'earthy, astringent', :techniques => 'raw')