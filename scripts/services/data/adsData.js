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

    var idOfAdToEdit;

    function setEditAdId(adId) {
        idOfAdToEdit = adId;
    }

    function getEditAdId() {
        return idOfAdToEdit;
    }

    function editAd(ad, idOfAdToEdit) {
        var resource = $resource(baseServiceUrl + 'user/ads/' + idOfAdToEdit, {}, {
            update: {
                method: 'PUT',
                headers: {authorization: authentication.getHeaders().Authorization}
            }
        });
        return resource.update(ad);
    }

    function deactivateAd(adId) {
        var resource = $resource(baseServiceUrl + 'user/ads/publishagain/' + adId, {}, {
            update: {
                method: 'PUT',
                headers: {authorization: authentication.getHeaders().Authorization}
            }
        });
        return resource.update(adId);
    }

    function publishAdAgain(adId) {
        var resource = $resource(baseServiceUrl + 'user/ads/publishagain/' + adId, {}, {
            update: {
                method: 'PUT',
                headers: {authorization: authentication.getHeaders().Authorization}
            }
        });
        return resource.update(adId);
    }

    function deleteAd(adId) {
        var resource = $resource(baseServiceUrl + 'user/ads/' + adId, {}, {
            delete: {
                method: 'DELETE',
                headers: {authorization: authentication.getHeaders().Authorization}
            }
        });
        return resource.delete();
    }

    return {
        getPublishedAds: getPublishedAds,
        getUserAds: getUserAds,
        getAdById: getAdById,
        add: addAd,
        setEditAdId: setEditAdId,
        getEditAdId: getEditAdId,
        edit: editAd,
        deactivate: deactivateAd,
        publish: publishAdAgain,
        deleteAd: deleteAd
    }
}]);