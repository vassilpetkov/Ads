app.directive('publishedAds', function(){
    return {
        controller: 'PublishedAds',
        restrict: 'E',
        templateUrl: 'templates/published-ads.html',
        replace: true
    }
});