app.directive('categories', function() {
    return {
        controller: 'Categories',
        restrict: 'E',
        templateUrl: 'templates/categories.html',
        replace: true
    }
});