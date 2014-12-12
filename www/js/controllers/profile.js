'use strict';

/**
 * @ngdoc function
 * @name g2gMobileApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the g2gMobileApp
 */
angular.module('g2gMobileApp')
  .controller('ProfileCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.accuracy = localStorage.getItem('localStorageAccuracy');
    if(localStorage.getItem('token') !== null)
  	{	
  		$scope.isLoggedIn = 'true';
  		$scope.token = localStorage.getItem('token');  	
  		console.log($scope.token);

	    $http.post('https://get2gether.me/api/getUserData', { 
	    		token: $scope.token
	    	})
	    	.success(function(response, status, headers, config) {
			    $scope.status = status;
			    $scope.headers = headers;
			    $scope.config = config;
			    // 
			    $scope.response = response;
			    $scope.me = response.data;
			    $scope.me.lastCheckInDate = new Date($scope.me.lastCheckIn * 1000);
			    if(localStorage.getItem('localStorageAccuracy') === null)
			    {
			    	console.log('setting accuracy to mongoDB value - does not exist in localStorage');
			    	$scope.me.accuracy = $scope.me.accuracy;
			    	localStorage.setItem('localStorageAccuracy', $scope.me.accuracy);
			    }
			    else
			    {
			    	console.log('setting accuracy to localStorage - exists');
			    	$scope.me.accuracy = Number(localStorage.getItem('localStorageAccuracy'));
			    }
			    if(localStorage.getItem('localStorageLatitude') === null)
			    {
			    	$scope.me.latitude = $scope.me.location[1].toFixed($scope.accuracy);
			    	$scope.me.longitude = $scope.me.location[0].toFixed($scope.accuracy);
			    }
			    else
			    {			    	
			    	$scope.me.latitude = localStorage.getItem('localStorageLatitude');
			    	$scope.me.longitude = localStorage.getItem('localStorageLongitude');
			    }
			})
			.error(function(data, status, headers, config) {
				$scope.data = data;
			    $scope.status = status;
			    $scope.headers = headers;
			    $scope.config = config;
			});
  	}
  	else
  	{
  		$scope.isLoggedIn = 'false';
  	}
  }]);
