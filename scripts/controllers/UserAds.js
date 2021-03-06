app.controller('UserAds', ['$scope', '$route', '$location', 'adsData', 'filter', function($scope, $route, $location, adsData, filter) {
    $scope.startPage = 1;
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    function loadUserAds(filter) {
        filter = filter || {};
        adsData.getUserAds(filter).$promise.then(function(data) {
            $scope.adsData = data;
            $scope.ads = data.ads;
        })
    }

    loadUserAds();

    $scope.deactivate = function(adId) {
        adsData.deactivate(adId).$promise.then(function (data) {
            $route.reload();
        })
    };

    $scope.publish = function(adId) {
        adsData.publish(adId).$promise.then(function (data) {
            $route.reload();
        })
    };

    $scope.edit = function(adId) {
        adsData.setEditAdId(adId);
        $location.path('/user/ads/edit');
    };

    $scope.deleteAd = function(adId) {
        adsData.deleteAd(adId).$promise.then(function (data) {
            $route.reload();
        })
    };

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        filter.setPageParams($scope.currentPage, $scope.pageSize);
        loadUserAds(filter.getParams());
    };

    $scope.$on('statusFilter', function(event, category) {
        loadUserAds(filter.getParams());
    });
}]);