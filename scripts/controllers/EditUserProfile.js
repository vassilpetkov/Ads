app.controller('EditUserProfile', ['$scope', '$location', 'townsData', 'userData', function($scope, $location, townsData, userData){
    townsData.getAllTowns().$promise.then(function (data) {
        $scope.towns = data;
    });

    $scope.editProfile = function(user) {
        userData.editProfile(user).$promise.then(function (data) {
            $location.path('/');
        })
    };

    $scope.changePassword = function(user) {
        userData.changePassword(user).$promise.then(function (data) {
            $location.path('/');
        })
    }
}]);