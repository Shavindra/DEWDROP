'use strict';

/**
 * @ngdoc function
 * @name dewdropApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the dewdropApp
 */
dewdropApp
    .controller('NavCtrl', function ($scope, postFeed) {

        var getPostFeed = postFeed.getPosts();


        //Product Listing
        var postListing = {

            init: function () {
                console.log('init');
                // once the data is loaded
                getPostFeed.then(function (result) {
                    var posts = result.posts;
                   // console.log(result);

                    $scope.posts = posts;

                });

            },

            update: function () {

            },

        }

        postListing.init();


    });