'use strict';

/**
 * @ngdoc function
 * @name g2gApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the g2gApp
 */
angular.module('g2gApp')
  .controller('DetailCtrl',  function ($scope, $routeParams) {
  	$scope.params = $routeParams;
  	$scope.id = $scope.params.id;
  	console.log("ID: " + $scope.id);
  	$scope.name = null;
  	$scope.email = null;
  	if($scope.id == '100006732908567')
  	{
  		$scope.name = 'Minja Gaso';
  		$scope.email = 'minja.gaso@outlook.com';
  	}
  	if($scope.id == '568917034')
  	{
  		$scope.name = 'Filip Gaso';
  		$scope.email = 'gaso2@illinois.edu';
  	}


  	// switch($scope.profileId)
  	// {
  	// 	case 100006732908567:
  	// 		console.log("a");
  	// 		// $scope.detail.name = 'Minja Gaso';
  	// 		// $scope.detail.location = 'Champaign, IL';
  	// 		// $scope.detail.zipcode = '61822';
  	// 		// $scope.detail.email = 'minja.gaso@outlook.com';
  	// 		break;
  	// }
  });
