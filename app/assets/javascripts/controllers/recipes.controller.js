receta.controller('RecipesController', function($scope, $location, RecipeService) {
    $scope.service =  RecipeService;
    $scope.recipes =  [];
    $scope.search = function(keywords) {
        if(angular.isDefined($scope.keywords) && angular.isString($scope.keywords)
            && $scope.keywords != "") {
            $scope.service.getMatchingRecipes(keywords, function(data){
                $scope.recipes = data;
            });
        } else {
            $scope.recipes = [];
        }
    };

    $scope.view = function(id) {
        $location.path('recipes/' + id);
    }

    $scope.$watch(function($scope){return $scope.keywords;},
        function(){
            $scope.search($scope.keywords);
        
    }); 
});