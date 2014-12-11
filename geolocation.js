'use strict';

var geolocationOptions = {
	enableHighAccuracy: true,
	maximumAge: 30000,
	timeout: 27000
};

function acceptGeolocationTracking(position)
{
	alert('here');
	var geolocationLatitude = position.coords.latitude;
	var geolocationLongitude = position.coords.longitude;

	console.log('Geolocation latitude: ' + geolocationLatitude);
	console.log('Geolocation longitude: ' + geolocationLongitude);	

	// localstorage set key-value pairs
	localStorage.setItem('localStorageLatitude', geolocationLatitude);
	localStorage.setItem('localStorageLongitude', geolocationLongitude);
	localStorage.setItem('localStorageSet', 'true');
	initialize();
}

function declineGeolocationTracking()
{
	console.log('Declined geolocation service!');
	// window.location = 'geolocation_not_found.html';
}

var isLocalStorageSet = localStorage.getItem('localStorageSet');
if(isLocalStorageSet !== 'true')
{
	if('geolocation' in navigator)
	{
		navigator.geolocation.getCurrentPosition(acceptGeolocationTracking, declineGeolocationTracking, geolocationOptions);
	}
	else
	{
		window.location = 'geolocation_not_found.html';
	}
}