class IngredientController < ApplicationController
  def index
    ingredients = Ingredient.all
    render json: ingredients
  end

def create
  end

def show
  @search = Ingredient.select(:name).where("name ilike ?", "%#{apple.gsub(/s/$/,"")}%")
  end

def change
  enable_extension :citext
  change_column :name
end

def update
  end
end
