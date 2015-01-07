app.controller('Categories', ['$scope', '$rootScope', 'categoriesData', 'filter', function($scope, $rootScope, categoriesData, filter){

    categoriesData.getCategories().$promise.then(function(data) {
        $scope.categories = data;
    });

    $scope.categoryFilter = function categoryFilter(category) {
        filter.filterByCategory(category);
        $rootScope.$broadcast('categoryFilter', category);
    }
}]);