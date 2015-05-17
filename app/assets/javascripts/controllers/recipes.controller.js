recipes = [
    {
        id: 1,
        name: 'Baked Potato w/ Cheese'
    },
    {
        id: 2,
        name: 'Garlic Mashed Potatoes'
    },
    {
        id: 3,
        name: 'Potatoes Au Gratin'
    },
    {
        id: 4,
        name: 'Baked Brussel Sprouts'
    },
];


receta.controller('RecipesController', function($scope) {
    $scope.recipes = [];
    $scope.search = function(keywords) {
        if($scope.keywords) {
            $scope.recipes = recipes.filter(function(recipe) { 
                return recipe.name.toLowerCase().indexOf($scope.keywords.toLowerCase()) != -1;
            });
        } else {
            $scope.recipes = [];
        }
    };

    $scope.$watch(function($scope){return $scope.keywords;},
        function(){
            $scope.search($scope.keywords);
        
    })

        
});