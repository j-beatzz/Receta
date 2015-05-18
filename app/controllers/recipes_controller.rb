class RecipesController < ApplicationController
	def index
		@recipes = []
		if params[:keywords]
			Recipe.all.each do |recipe|
				if recipe.name.downcase.index(params[:keywords].to_s.downcase) != nil
					@recipes.push recipe
				end	
			end
		end
		return @recipes
	end

	def show
		@recipe = Recipe.find(params[:id])
	end
end
