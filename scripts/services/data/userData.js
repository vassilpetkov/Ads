app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication',
    function($resource, baseServiceUrl, authentication){

    function registerUser(user){
        var resource = $resource(baseServiceUrl + 'user/register').save(user);
        resource.$promise.then(function (data) {
            authentication.saveUser(data);
        });
        return resource;
    }

    function loginUser(user){
        var resource = $resource(baseServiceUrl + 'user/login').save(user);
        resource.$promise.then(function (data) {
            authentication.saveUser(data);
        });
        return resource;
    }

    function logoutUser(){
        var resource = $resource(baseServiceUrl + 'user/logout');
        authentication.removeUser();
        return resource;
    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}])