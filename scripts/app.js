'use strict'

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.constant('baseServiceUrl', 'http://localhost:1337/api/');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'Home'
    });
    $routeProvider.when('/login', {
        templateUrl: '/templates/login.html',
        controller: 'Login'
    });
    $routeProvider.when('/register', {
        templateUrl: '/templates/register.html',
        controller: 'Register'
    });
    $routeProvider.when('/user/profile', {
        templateUrl: '/templates/edit-user-profile.html',
        controller: 'EditUserProfile'
    });
    $routeProvider.when('/user/ads', {
        templateUrl: '/templates/my-ads.html',
        controller: 'UserAds'
    });
    $routeProvider.when('/user/ads/new', {
        templateUrl: '/templates/publish-new-ad.html',
        controller: 'PublishNewAd'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);