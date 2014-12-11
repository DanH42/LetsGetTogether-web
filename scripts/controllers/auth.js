'use strict';

/**
 * @ngdoc function
 * @name g2gMobileApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the g2gMobileApp
 */
angular.module('g2gMobileApp')
  .controller('AuthCtrl', ['$scope', '$routeParams', '$window', function ($scope, $routeParams, $window) {
  	localStorage.setItem('token', $routeParams.id);
  	$window.location.href = '/';
  }]);
