class CreateIngredients < ActiveRecord::Migration
  def self.up
    create_table :ingredients do |t|
      t.string :name
      t.string :volume
      t.string :weight
      t.text :matches
      t.text :avoids
      t.text :techniques
      t.text :flavor

      t.timestamps
    end
  end

  def self.down
    drop_table :ingredients
  end
end