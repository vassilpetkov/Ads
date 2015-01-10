app.factory('townsData', ['$resource', 'baseServiceUrl', function($resource, baseUrl){
    var resource = $resource(baseUrl + 'towns');
    function getAllTowns() {
        return resource.query();
    }

    return {
        getAllTowns: getAllTowns
    }
}])