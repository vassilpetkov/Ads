app.controller('Towns', ['$scope', '$rootScope', 'townsData', 'filter', function($scope, $rootScope, townsData, filter) {

    townsData.getAllTowns().$promise.then(function(data) {
        $scope.towns = data;
    });

    $scope.townFilter = function townFilter(town) {
        filter.filterByTown(town);
        $rootScope.$broadcast('townFilter', town);
    }
}])