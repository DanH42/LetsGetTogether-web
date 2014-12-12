// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    // alert('Latitude: '          + position.coords.latitude          + '\n' +
    //   'Longitude: '         + position.coords.longitude         + '\n' +
    //   'Altitude: '          + position.coords.altitude          + '\n' +
    //   'Accuracy: '          + position.coords.accuracy          + '\n' +
    //   'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    //   'Heading: '           + position.coords.heading           + '\n' +
    //   'Speed: '             + position.coords.speed             + '\n' +
    //   'Timestamp: '         + position.timestamp                + '\n');


    var geolocationLatitude = position.coords.latitude;
    var geolocationLongitude = position.coords.longitude;

    localStorage.setItem('localStorageLatitude', geolocationLatitude);
    localStorage.setItem('localStorageLongitude', geolocationLongitude);

    var latLng = 'latitude: ' + localStorage.getItem('localStorageLatitude') + '  <br> longitude: ' + localStorage.getItem('localStorageLongitude');

    initialize();
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);

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
        icon: 'img/me.png'
    });
}