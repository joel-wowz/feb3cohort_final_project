module Api
    class IngredientsController < ApplicationController
      def show
        @ingredient = Ingredient.find(params[:id])
        render :json => {
        message: @ingredient }
        
      end
      def index
        Ingredient.all 
      end
    end
end
