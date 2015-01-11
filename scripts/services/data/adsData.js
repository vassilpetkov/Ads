app.factory('adsData',['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: {method: 'PUT'}
    });

    var userResource = $resource(baseServiceUrl + 'user/ads', {}, {
        post: {
            method: "POST",
            headers: {authorization: authentication.getHeaders().Authorization}
        },
        get: {
            method: "GET",
            headers: {authorization: authentication.getHeaders().Authorization}
        }
    });

    function getPublishedAds(params) {
        return resource.get(params);
    }

    function getAdById(adId) {
        return resource.get({id:adId});
    }

    function getUserAds(params) {
        return userResource.get(params);
    }

    function addAd(ad) {
        return userResource.post(ad);
    }

    function editAd(adId, ad) {
        return resource.update({ id:adId}, ad)
    }

    function deactivateAd(adId) {
        var resource = $resource(baseServiceUrl + 'user/ads/deactivate/' + adId, {}, {
            update: {
                method: 'PUT',
                headers: {authorization: authentication.getHeaders().Authorization}
            }
        });
        return resource.update(adId);
    }

    function deleteAd(AdId) {
        return resource.delete({ id: adId });
    }

    return {
        getPublishedAds: getPublishedAds,
        getUserAds: getUserAds,
        getAdById: getAdById,
        add: addAd,
        edit: editAd,
        deactivate: deactivateAd,
        delete: deleteAd
    }
}]);