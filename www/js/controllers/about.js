'use strict';

/**
 * @ngdoc function
 * @name g2gMobileApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the g2gMobileApp
 */
angular.module('g2gMobileApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
