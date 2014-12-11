/* global google */
'use strict';

var map = null;
var mapLatitude = localStorage.getItem('localStorageLatitude');
var mapLongitude = localStorage.getItem('localStorageLongitude');
var mapLatitudeLongitude = new google.maps.LatLng(mapLatitude, mapLongitude);
var userMarker = null;

function initialize()
{
	var mapOptions = {
		zoom: 12,
		center: mapLatitudeLongitude
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	userMarker = new google.maps.Marker({
		position: mapLatitudeLongitude,
		map: map,
		icon: 'images/me.png'
	});
}

google.maps.event.addDomListener(window, 'load', initialize);