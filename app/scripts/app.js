'use strict';

/**
 * @ngdoc overview
 * @name dewdropApp
 * @description
 * # dewdropApp
 *
 * Main module of the application.
 */

var dewdropApp = angular.module('dewdropApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);



dewdropApp
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });