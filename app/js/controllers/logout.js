'use strict';

/**
 * @ngdoc function
 * @name g2gMobileApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the g2gMobileApp
 */
angular.module('g2gMobileApp')
  .controller('LogoutCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.post('https://get2gether.me/api/logout', { 
    		token: localStorage.getItem('token') 
    	})
    	.success(function(response, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    // $scope.response = response;
		    // $scope.success = $scope.response.success;
		    // console.log('Logged out!');
		    // console.log($scope.success);
		    $scope.response = response;
		    $scope.status = status;
		    $scope.headers = headers;
		    $scope.config = config;
		})
		.error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.		    
		    $scope.data = data;
		    $scope.status = status;
		    $scope.headers = headers;
		    $scope.config = config;
		});

  	localStorage.removeItem('token');
  	$location.route('');
  }]);
