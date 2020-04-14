# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# ruby encoding: utf-8

Ingredients.create(:name => 'apple', :weight => 'medium', :volume => 'steady', :matches => 'pork, cinnamon' , :avoid => nil, :flavor=> 'sweet', :techniques => 'roast, bake')
Ingredients.create(:name => 'pork', :weight => 'heavy', :volume => 'loud', :matches => 'apple, cinnamon' , :avoid => nil, :flavor=> 'porky', :techniques => 'roast, fry, grill')
Ingredients.create(:name => 'cinnamon', :weight => 'light', :volume => 'quiet', :matches => 'pork, apple' , :avoid => nil, :flavor=> 'spicy, hot', :techniques => 'ground, steep')
Ingredients.create(:name => 'dill', :weight => 'medium', :volume => 'steady', :matches => 'pork' , :avoid => 'apple', :flavor=> 'earthy, astringent', :techniques => 'raw')