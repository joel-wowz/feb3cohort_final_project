class CreateIngredients < ActiveRecord::Migration[4.2]
  def self.up
    create_table :ingredients do |t|
      t.string :name
      t.string :volume
      t.string :weight
      t.text :primary_matches
      t.text :matches
      t.text :avoids 
      t.text :techniques
      t.text :flavor

    end
  end

  def self.down
    drop_table :ingredients
  end
end