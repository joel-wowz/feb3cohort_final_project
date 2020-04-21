module Api
    class IngredientsController < ApplicationController
      def show 
        @search = Ingredient.select(:name).where("name ilike ?", "%#{apple.gsub(/s/$/,"")}%")
        
      end
    
    end
end