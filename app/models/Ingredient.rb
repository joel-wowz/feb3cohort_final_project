class Ingredient < ActiveRecord::Base
  validates :name, :volume, :weight, :matches, :avoids, :techniques, :flavor, presence: true

end