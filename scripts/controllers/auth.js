'use strict';

/**
 * @ngdoc function
 * @name g2gApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the g2gApp
 */
angular.module('g2gApp')
  .controller('AuthCtrl', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.params = $routeParams;
    console.log($scope.params);
  });
