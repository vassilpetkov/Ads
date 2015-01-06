app.directive('sidebarGuest', function() {
    return {
        controller: 'Home',
        restrict: 'E',
        templateUrl: 'templates/sidebar-guest.html',
        replace: true
    }
});