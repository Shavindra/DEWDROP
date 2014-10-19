'use strict';

/**
 * @ngdoc function
 * @name dewdropApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dewdropApp
 */
angular.module('dewdropApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
