Select for search

Ingredient.where("lower(name) = ?", name.downcase).first

Shows all primary matches
if .join(', ') or .to_sentence doesn't work use .map{|item| %Q{"#{item}"}}.join(', ')

Ingredient.select(:avoids).where("name ilike ?").join(', ')
Ingredient.select(:matches).where("name ilike ?").join(', ')
Ingredient.select(:primary_matches).where("name ilike ?").join(', ')

Ingredient.select(:technique).where("name ilike ?", "%#{search}%")
Ingredient.select(:weight).where("name ilike ?", "%#{search}%")
Ingredient.select(:volume).where("name ilike ?", "%#{search}%")
Ingredient.select(:flavor).where("name ilike ?", "%#{search}%")
Ingredient.select(:name).where("name ilike ?", "%#{search.gsub(/s/$/,"")}%")

EXAMPLE:
Ingredient.select(:name).where("name ilike ?", "%#{'apples'.gsub(/s$/,"")}%")

query string parameter
GET request to api
