app.controller('Towns', ['$scope', 'townsData', function($scope, townsData) {
    townsData.getAllTowns().$promise.then(function(data) {
        $scope.towns = data;
    })
}])