class Ingredient < ActiveRecord::Base
  validates :name, :volume, :weight, :matches, :techniques, :flavor, presence: true
  validates :name, uniqueness: true

end