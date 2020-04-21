module Api
    class IngredientsController < ApplicationController
      def show
        Ingredient.find_by_id(params[:id])  
      end
      def index
        Ingredient.find_by_id(params[:id])  
      end
    end
end
