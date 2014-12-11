'use strict';

var map = null, mapLatitude = null, mapLongitude = null, mapLatitudeLongitude = null;

function initialize()
{
	mapLatitude = localStorage.getItem('localStorageLatitude');
	mapLongitude = localStorage.getItem('localStorageLongitude');
	mapLatitudeLongitude = new google.maps.LatLng(mapLatitude, mapLongitude);
	var mapOptions = {
		zoom: 12,
		center: mapLatitudeLongitude
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var userMarker = new google.maps.Marker({
		position: mapLatitudeLongitude,
		map: map,
		icon: 'images/me.png'
	});
}

if(localStorage.getItem('localStorageSet') == 'true')
{
	google.maps.event.addDomListener(window, 'load', initialize);
}