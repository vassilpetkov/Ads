app.controller('PublishedAds', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {
    function loadPublishedAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getPublishedAds(filterParams).$promise.then(function(data) {
            $scope.adsData = data;
            $scope.ads = data.ads;
        })
    }

    loadPublishedAds();

    $scope.$on('categoryFilter', function(event, category) {
        loadPublishedAds(filter.getFilterParams());
    })
}])