app.controller('Register', ['$scope', 'townsData', 'userData', function($scope, townsData, userData){
    townsData.getAllTowns().$promise.then(function (data) {
        $scope.towns = data;
    });

    $scope.register = function(user) {
        userData.register(user);
    }
}]);