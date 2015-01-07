app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication',
    function($resource, baseServiceUrl, authentication){

    function registerUser(user){
        return $resource(baseServiceUrl + 'user/register').save(user);
        $resource.$promise.then(function (data) {
            authentication.saveUser(data);
        });
    }

    function loginUser(user){
        return $resource(baseServiceUrl + 'user/login').save(user);

        $resource.$promise.then(function (data) {
            authentication.saveUser(data);
        });
    }

    function logoutUser(){
        return $resource(baseServiceUrl + 'user/logout').save(user);
        $resource.$promise.then(function () {
            authentication.removeUser();
        });
    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}])