app.controller('PublishedAds', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {
    $scope.startPage = 1;
    $scope.currentPage = 1;
    $scope.pageSize = 3;

    function loadPublishedAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getPublishedAds(filterParams).$promise.then(function(data) {
            $scope.adsData = data;
            $scope.ads = data.ads;
        })
    }

    loadPublishedAds();

    $scope.pageChanged = function() {
        console.log('works');
    }

    $scope.$on('categoryFilter', function(event, category) {
        loadPublishedAds(filter.getFilterParams());
    })

    $scope.$on('townFilter', function(event, town) {
        loadPublishedAds(filter.getFilterParams());
    })
}])