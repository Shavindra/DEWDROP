'use strict';

/**
 * @ngdoc function
 * @name dewdropApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dewdropApp
 */
angular.module('dewdropApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
