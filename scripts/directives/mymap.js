angular.module('mymap', [])
	   .directive('myMap', function(){
	   		return {
	   			link: function(scope)
	   			{
	   				if(navigator.geolocation)
	   				{
		   				navigator.geolocation.getCurrentPosition(function(position){
		   					console.log("lat: " + position.coords.latitude);
		   					console.log("lon: " + position.coords.longitude);
		   				});
	   				}
	   			}
	   		};
	   });