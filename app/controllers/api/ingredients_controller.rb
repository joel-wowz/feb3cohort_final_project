module Api
    class IngredientsController < ApplicationController
      def index 
        @search = Ingredient.select(:name).where("name ilike ?", "%?.gsub(/s/$/,"")%")
        
      end
    
    end
end
