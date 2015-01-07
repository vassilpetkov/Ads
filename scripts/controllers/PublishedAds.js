app.controller('PublishedAds', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {
    $scope.startPage = 1;
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    function loadPublishedAds(filter) {
        filter = filter || {};
        adsData.getPublishedAds(filter).$promise.then(function(data) {
            $scope.adsData = data;
            $scope.ads = data.ads;
        })
    }

    loadPublishedAds();

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        filter.setPageParams($scope.currentPage, $scope.pageSize);
        loadPublishedAds(filter.getParams());

    };

    $scope.$on('categoryFilter', function(event, category) {
        loadPublishedAds(filter.getParams());
    });

    $scope.$on('townFilter', function(event, town) {
        loadPublishedAds(filter.getParams());
    });
}]);