'use strict';

/**
 * @ngdoc service
 * @name dewdropApp.postFeed
 * @description
 * # postFeed
 * Factory in the dewdropApp.
 */
dewdropApp
    .factory('postFeed', function ($http, $q) {

        var feedURL = 'http://beta.json-generator.com/api/json/get/AY-m9xl',
            ngCallback = '?callback=JSON_CALLBACK';


        var getFeed = function () {
            var defer = $q.defer();

            $http({
                method: 'JSONP',
                cache: true,
                url: feedURL + ngCallback

            }).success(function (data, status, headers, config) {
//                console.log(feedURL);
//                console.log(data);

                defer.resolve({
                    feedUrl: feedURL,
                    status: status,
                    posts: data


                })

            }).error(function (data, status, headers, config) {

                defer.reject({
                    feedUrl: feedURL,
                    status: status,
                    posts: data


                })

            });

            return defer.promise;

        };

       function getPosts() {

            return getFeed();
        };
    
        // Public API here
        return {
            getPosts: getPosts
        };


    });