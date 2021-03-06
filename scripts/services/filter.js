app.factory('filter', function() {
    var params = {};

    function filterByCategory(category) {
        params.categoryId = category.id;
    }

    function filterByTown(town) {
        params.townId = town.id;
    }

    function filterByStatus(status) {
        params.adStatus = status.id;
    }

    function getParams() {
        return params;
    }

    function setPageParams(startPage, pageSize) {
        params.startPage = startPage;
        params.pageSize = pageSize;
    }

    return {
        filterByCategory: filterByCategory,
        filterByTown: filterByTown,
        filterByStatus: filterByStatus,
        getParams: getParams,
        setPageParams: setPageParams
    }
})