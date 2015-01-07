app.controller('Home', ['$scope', '$route', 'authentication', 'userData', function($scope, $route, authentication, userData){
    $scope.isLoggedIn = authentication.isLoggedIn();
    $scope.logout = function() {
        userData.logout();
        $route.reload();
    }
}]);