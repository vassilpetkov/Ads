app.directive('userAds', function(){
    return {
        controller: 'UserAds',
        restrict: 'E',
        templateUrl: 'templates/user-ads.html',
        replace: true
    }
});