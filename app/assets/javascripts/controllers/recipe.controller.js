receta.controller('RecipeController', function($scope, $location, $routeParams, RecipeService){
	$scope.service = RecipeService;
	$scope.back = function() {
		$location.path('/');
	};
	$scope.recipe = {};

	RecipeService.getRecipe($routeParams.recipeId, function(data) {
		$scope.recipe = data;
	});
});