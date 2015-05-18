receta.controller('RecipeController', function($scope, RecipeService){
	$scope.service = RecipeService.new(); 

	$scope.recipe = $scope.service.get({id: $scope.id}, function() {
		console.log($scope.recipe);
	});
});