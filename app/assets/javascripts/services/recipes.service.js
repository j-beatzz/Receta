receta.service('RecipeService', ['$http', function($http) {
	var recipeService = function() {
		var self = this;
		var log = function(message) {
			console.log("data: " + message);
		};

		self.getAllRecipes = function(callback) {
			$http.get('/recipes/').
				success(function(data, status, headers, config) {
					log(data);

					if (angular.isFunction(callback)){
						callback(data);
					}
				}).
				error(function(data, status, headers, config) {
					log(status);
				});
		};

		self.getMatchingRecipes = function(keyword, callback) {
			if(angular.isDefined(keyword) && angular.isString(keyword) && keyword != "") {
				$http.get('/recipes/', {
						params: {keywords: keyword}
					}).
					success(function(data, status, headers, config) {
						log(data);
						log(status);

						if(angular.isFunction(callback)) {
							callback(data)
						}
					}).
					error(function(data, status, headers, config) {
						log(status);
					});
			}
		}

		self.getRecipe = function(id) {
			$http.get('/recipes/' + id ).
				success(function(data, status, headers, config) {
					log(data);
					if (angular.isFunction(callback)){
						callback(data);
					}
				}).
				error(function(data, status, headers, config) {
					log(status);
				});
		};

		self.putNewRecipe = function(recipe) {
			$http.put('/recipes/new').
				success(function(data, status, headers, config) {
					log(data);
					if (angular.isFunction(callback)){
						callback(data);
					}
				}).
				error(function(data, status, headers, config) {
					log(status);
				});
		};

		self.updateRecipe = function(id, newRecipe) {
			$http.patch('/recipes/' + id + '/update').
				success(function(data, status, headers, config) {
					log(data);
					if (angular.isFunction(callback)){
						callback(data);
					}
				}).
				error(function(data, status, headers, config) {
					log(status);
				});
		};	

		self.deleteRecipe = function(id) {
			$http.delete('/recipes/' + id + '/delete').
				success(function(data, status, headers, config) {
					log(data);
					if (angular.isFunction(callback)){
						callback(data);
					}
				}).
				error(function(data, status, headers, config) {
					log(status);
				});
		};
	};

	return new recipeService();
}]);