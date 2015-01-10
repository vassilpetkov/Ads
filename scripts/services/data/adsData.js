app.factory('adsData',['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: {method: 'PUT'}
    });

    var userResource = $resource(baseServiceUrl + 'user/ads', {}, {
        post: {
            method: "POST",
            headers: {authorization: authentication.getHeaders().Authorization}
        }
    });

    function getPublishedAds(params) {
        return resource.get(params);
    }

    function editAd(adId, ad) {
        return resource.update({ id:adId}, ad)
    }

    function getAdById(adId) {
        return resource.get({id:adId});
    }

    function addAd(ad) {
        return userResource.post(ad);
    }

    function deleteAd(AdId) {
        return resource.delete({ id: adId });
    }

    return {
        getPublishedAds: getPublishedAds,
        edit: editAd,
        getAdById: getAdById,
        add: addAd,
        delete: deleteAd
    }
}]);