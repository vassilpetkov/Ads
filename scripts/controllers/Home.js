app.controller('Home', ['$scope', 'authentication', function($scope, authentication){
    $scope.isLoggedIn = authentication.isLoggedIn();
}]);