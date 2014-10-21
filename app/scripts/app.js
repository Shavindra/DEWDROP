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

    function delegates(nav) {

        console.log('delegate');

        nav.addEventListener('click', function (e) {
            var children = this.children;

            children[0].classList.add('active');

            if (e.target && e.target.nodeName == "LI") {
                console.log(e.target.parentNode, e.target.parentElement);
                console.log(e.target.parentNode, e.target.parentElement);


            }

        });

    };

    var vertCounter = 0,
        oldIndex = 0,
        nodes = nav.getElementsByClassName('lvl-1'),
        maxVert = nodes.length - 1;

    function currentIndex(nodes, currentVert) {
        var index = [].indexOf.call(nodes, currentVert);
        return index;

    };

    function scrollVert() {
        console.log(oldIndex);
        var currentVert = document.querySelector('.lvl-1.active');

        currentVert.classList.remove('active');

        addActClass(nodes, oldIndex);


    };

    function addActClass(selector, newIndex) {

        selector[newIndex].classList.add('active');

    };

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
                scrollVert();

                switch (e.which) {

                case 32:
                    console.log('space');
                    break;
                case 37:
                    console.log('37');
                    break;

                case 38: // Up
                    if (oldIndex > 0) {
                        oldIndex--;
                        scrollVert();
                        console.log('Up');
                    };

                    break;

                case 39:
                    console.log('left');


                    break;
                case 40: // Down 
                         maxVert = nodes.length - 1;
                    if (oldIndex < maxVert) {
                        oldIndex++;
                        scrollVert();
                        console.log('Down');
                    };
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
            // addSelectclass(lvl2);
            // addSelectclass(lvl2List);





        },

        delegates: delegates
    };

    //Make sure the class is added before angular execute ng-repeat
    window.onload = function () {
        dewdropUI.init();

    }



})();