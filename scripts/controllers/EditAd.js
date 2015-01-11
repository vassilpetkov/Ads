app.controller('EditAd', ['$scope', '$location', 'categoriesData', 'townsData', 'userData', 'adsData', function($scope, $location, categoriesData, townsData, userData, adsData){
    $scope.logout = function() {
        userData.logout();
        $location.path('/');
    };

    townsData.getAllTowns().$promise.then(function (data) {
        $scope.towns = data;
    });

    categoriesData.getCategories().$promise.then(function (data) {
        $scope.categories = data;
    });

    $scope.edit = function(ad) {
        adsData.edit(ad, adsData.getEditAdId()).$promise.then(function (data){
            $location.path('#/user/ads');
        })
    }
}]);