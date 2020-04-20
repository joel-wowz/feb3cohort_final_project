class Ingredient < ActiveRecord::Base
  validates :name, :volume, :weight, :matches, :flavor, presence: true
  validates :name, uniqueness: true
  
end