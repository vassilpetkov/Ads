app.controller('Login', ['$scope', 'userData', function($scope, userData){
    $scope.login = function(user) {
        userData.login(user);
    }
}]);