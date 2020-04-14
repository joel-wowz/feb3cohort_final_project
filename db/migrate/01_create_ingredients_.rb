class CreateIngredients < ActiveRecord::Migration[4.2]
  def self.up
    create_table :ingredients do |t|
      t.string :name
      t.string :volume
      t.string :weight
      t.string :matches
      t.string :avoids 
      t.string :techniques
      t.string :flavor

    end
  end

  def self.down
    drop_table :ingredients
  end
end