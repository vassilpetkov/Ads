app.controller('Register', ['$scope', '$location', 'townsData', 'userData', function($scope, $location, townsData, userData){
    townsData.getAllTowns().$promise.then(function (data) {
        $scope.towns = data;
    });

    $scope.register = function(user) {
        userData.register(user).$promise.then(function (data) {
            $location.path('/');
        })
    }
}]);