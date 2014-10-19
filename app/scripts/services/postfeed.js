'use strict';

/**
 * @ngdoc service
 * @name dewdropApp.postFeed
 * @description
 * # postFeed
 * Factory in the dewdropApp.
 */
angular.module('dewdropApp')
  .factory('postFeed', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
