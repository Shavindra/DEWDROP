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

(function () {

    var nav = document.querySelector('.nav'),
        selectClass = 'active';

    var delegates = function (nav) {

        console.log('delegate');

        nav.addEventListener('click', function (e) {
            var children = this.children;

            children[0].classList.add('active');

            if (e.target && e.target.nodeName == "LI") {
                console.log(e.target.parentNode, e.target.parentElement);
                console.log(e.target.parentNode, e.target.parentElement);


            }

        });

    }

    var dewdropUI = {

        init: function () {
            this.selectItem(nav, 'active');
            this.delegates(nav);
            this.keyNav();

        },

        config: {
            nav: nav

        },

        keyNav: function () {


            document.body.onkeydown = function (e) {
                e = e || window.e;
                var keycode = e.charCode || e.keyCode;
                
                console.log(window.navigator);

                switch (e.which) {

                case 32:
                    console.log('space');
                    break;
                case 37:
                    console.log('37');
                    break;

                case 38:
                    console.log('38');
                    break;

                case 39:
                    console.log('39');
                    break;
                case 40:
                    console.log('40');
                    break;

                }

            }



        },

        selectItem: function (parent, selectClass) {
            var lvl1 = parent.getElementsByClassName('lvl-1'),
                lvl2List = lvl1[0].getElementsByClassName('nav-list'),
                lvl2 = lvl1[0].getElementsByClassName('lvl-2');

            var addSelectclass = function (el) {
                el[0].classList.add(selectClass)
            }

            addSelectclass(lvl1);
            addSelectclass(lvl2);
            addSelectclass(lvl2List);


            // lvl1.classList.add(selectClass);


        },

        delegates: delegates
    };

    //Make sure the class is added before angular execute ng-repeat
    window.onload = function () {
        dewdropUI.init();

    }



})();