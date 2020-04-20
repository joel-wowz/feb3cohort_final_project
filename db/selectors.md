Select for search

Ingredient.where("lower(name) = ?", name.downcase).first

Shows all primary matches
if .join(', ') or .to_sentence doesn't work use .map{|item| %Q{"#{item}"}}.join(', ')

Ingredient.select("avoids").where("name = ?").join(', ')
Ingredient.select("matches").where("name = ?").join(', ')
Ingredient.select("primary_matches").where("name = ?").join(', ')

Ingredient.select("techniques").where("name = ?")
Ingredient.select("weight").where("name = ?")
Ingredient.select("volume").where("name = ?")
Ingredient.select("flavor").where("name = ?")
