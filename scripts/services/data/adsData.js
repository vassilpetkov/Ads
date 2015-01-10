app.factory('adsData',['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: {method: 'PUT'}
    });

    var userResource = $resource(baseServiceUrl + 'user/ads');

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
        return userResource.save(ad);
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
}])