app.directive('towns', function() {
    return {
        controller: 'Towns',
        restrict: 'E',
        templateUrl: 'templates/towns.html',
        replace: true
    }
})