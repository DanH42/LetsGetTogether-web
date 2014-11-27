'use strict';

/**
 * @ngdoc function
 * @name g2gApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the g2gApp
 */
angular.module('g2gApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if(navigator.geolocation)
    {
    	navigator.geolocation.getCurrentPosition(function(position){
	      $scope.$apply(function(){
	        $scope.position = position;
	      });
	      console.log($scope.position.coords.latitude);
	      console.log($scope.position.coords.longitude);
	    });
    }
    $http.jsonp('https://get2gether.me/api/auth/facebook')
        .success(function(data, status, headers, config) {
          $scope.posts = data;
          console.log($scope.posts);
        })
        .error(function(data, status, headers, config) {
          console.log("ERROR");
        });
  });
