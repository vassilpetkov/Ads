app.controller('PublishedAds', ['$scope', 'adsData', function($scope, adsData) {
   adsData.getPublishedAds().$promise.then(function(data) {
           $scope.adsData = data;
           $scope.ads = data.ads;
       }
   )
}])