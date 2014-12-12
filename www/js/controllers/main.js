'use strict';

/**
 * @ngdoc function
 * @name g2gMobileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the g2gMobileApp
 */
angular.module('g2gMobileApp')
  .controller('MainCtrl', ['$scope', '$http', '$window', '$localStorage', '$q', function ($scope, $http, $window, $localStorage, $q) {

  	$scope.name = '';
  	$scope.id = '';
  	$scope.nameLength = 0;
	// setTimeout(function () {
 //        $scope.$apply(function () {
 //        	login();
 //            $scope.name = "Timeout called!";
 //        });
 //    }, 2000);
 //    



  	$scope.$watch('name', function(){
  		console.log("Name changed: " + $scope.name);
  		$scope.nameLength = $scope.name.length;
  		if($scope.nameLength > 0)
  		{
  			console.log('Welcome, ' + $scope.name);
  		}
  		else
  		{
  			console.log('nope');
  		}
  	});

	// $scope.$storage = $localStorage.$default({
	// 	displayName: 'johnny bravo',
	// 	id: 123456789
	// });

	// $scope.$watch('displayName', function() {
	//     $scope.$storage.displayName = $localStorage.displayName;
	//     console.log("main.js watch displayName - " + $localStorage.displayName);
	// });


 //  	$scope.isLoggedIn = null;
 //  	if(localStorage.getItem('displayName') !== null)
 //  	{	
 //  		$scope.isLoggedIn = 'true';
 //  		$scope.token = localStorage.getItem('token');  	
 //  		console.log($scope.token);

	//     $http.post('https://get2gether.me/api/getUserData', { 
	//     		token: $scope.token
	//     	})
	//     	.success(function(response, status, headers, config) {
	// 		    $scope.status = status;
	// 		    $scope.headers = headers;
	// 		    $scope.config = config;

	// 		    $scope.response = response;
	// 		    $scope.me = response.data;
	// 		    $scope.me.lastCheckInDate = new Date($scope.me.lastCheckIn * 1000);
	// 		    if(localStorage.getItem('localStorageAccuracy') === null)
	// 		    {
	// 		    	console.log('setting accuracy to mongoDB value - does not exist in localStorage');
	// 		    	$scope.me.accuracy = $scope.me.accuracy;
	// 		    	localStorage.setItem('localStorageAccuracy', $scope.me.accuracy);
	// 		    }
	// 		    else
	// 		    {
	// 		    	console.log('setting accuracy to localStorage - exists');
	// 		    	$scope.me.accuracy = Number(localStorage.getItem('localStorageAccuracy'));
	// 		    }
	// 		    if(localStorage.getItem('localStorageLatitude') === null)
	// 		    {
	// 		    	$scope.me.latitude = $scope.me.location[1].toFixed($scope.accuracy);
	// 		    	$scope.me.longitude = $scope.me.location[0].toFixed($scope.accuracy);
	// 		    }
	// 		    else
	// 		    {			    	
	// 		    	$scope.me.latitude = localStorage.getItem('localStorageLatitude');
	// 		    	$scope.me.longitude = localStorage.getItem('localStorageLongitude');
	// 		    }
	// 		})
	// 		.error(function(data, status, headers, config) {
	// 			$scope.data = data;
	// 		    $scope.status = status;
	// 		    $scope.headers = headers;
	// 		    $scope.config = config;
	// 		})
	// 		.then(function(){
	// 			console.log('lat');
	// 			console.log(Number(localStorage.getItem('localStorageLatitude')));
	// 			console.log('accuracy');
	// 			console.log(localStorage.getItem('localStorageAccuracy'));

	// 			$http.post('https://get2gether.me/api/checkin', { 
	// 					token: $scope.token,   
	// 					'lat': Number(localStorage.getItem('localStorageLatitude')),
	// 		   			'lng': Number(localStorage.getItem('localStorageLongitude')),
	// 		   			'accuracy': Number(localStorage.getItem('localStorageAccuracy'))
	// 				})
	// 		    	.success(function(response, status, headers, config) {
	// 				    $scope.status = status;
	// 				    $scope.headers = headers;
	// 				    $scope.config = config;
	// 		    		//
	// 				    $scope.response = response;
	// 				    $scope.success = response.success;
	// 				    if($scope.success === true)
	// 				    { 
	// 					    $scope.data = response.data;
	// 					    $scope.users = $scope.data.users;

	// 						$scope.map = $window.map;
	// 						for(var index = 0, length = $scope.users.length; index < length; index++)
	// 						{
	// 							var user = $scope.users[index];
	// 							var userName = user.name;
	// 							var userLongitude = user.location[0];
	// 							var userLatitude = user.location[1];
	// 							var userLatitudeLongitude = new google.maps.LatLng(userLatitude, userLongitude);

	// 							var userMarker = new google.maps.Marker({
	// 								position: userLatitudeLongitude,
	// 								map: map,
	// 								title: userName
	// 							});
	// 							userMarker.id = index;

	// 							var infoWindow = new google.maps.InfoWindow({
	// 								content: '',
	// 								maxWidth: 350
	// 							});
	// 							google.maps.event.addListener(userMarker, 'click', (function(userMarker, user) {
	// 					            return function() {
	// 					                // infoWindow.setContent(content);
	// 					          		var content = '<div class=\'profile-info\'>';
	// 					              		content	+= '<p><strong>' + user.name + '</strong></p>';
	// 					            		content += '<img src=\'' + user.image + '\'>';
	// 					            		content += '</div>';
	// 					            	infoWindow.setContent(content);
	// 					                infoWindow.open(map, userMarker);
	// 					            };
	// 					        })(userMarker, user));

	// 					        // create Date object for each user
	// 					        console.log('user: ' + $scope.users[index].lastCheckIn);
	// 					    	$scope.users[index].lastCheckInDate = new Date($scope.users[index].lastCheckIn * 1000);
	// 						}
	// 				    }
	// 				    else
	// 				    {
	// 				    	console.log('There was an issue making this request.');
	// 				    }
	// 				})
	// 				.error(function(data, status, headers, config) {
	// 					$scope.data = data;
	// 				    $scope.status = status;
	// 				    $scope.headers = headers;
	// 				    $scope.config = config;
	// 				});
	// 		});

  		
 //  	}
 //  	else
 //  	{
 //  		$scope.isLoggedIn = 'false';
 //  		// window.location = 'https://get2gether.me/api/auth/facebook';
 //  	}
  }]);
