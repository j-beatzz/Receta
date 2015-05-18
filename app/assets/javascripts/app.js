receta = angular.module('receta', [
	'ngRoute',
	'templates'
]);

receta.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'RecipesController'
      })
      .when('/recipes/:recipeId', {
      	templateUrl: 'show.html',
      	controller: 'RecipeController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
});