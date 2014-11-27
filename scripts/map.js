
var user_latitude = null, user_longitude = null;
/*
navigator.geolocation.getCurrentPosition(show_map);
function show_map(position) 
{
  user_latitude = position.coords.latitude;
  user_longitude = position.coords.longitude;
  initialize();
}
function initialize() 
{
  displayMap();
}
function displayMap()
{
  var mapOptions = {
    center: { lat: user_latitude, lng: user_longitude},
    zoom: 12
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var person1 = {
    name: 'Minja Gaso',
    src: 'img/gaso.PNG',
    id: 100006732908567,
    url: 'gaso.html',
    gender: 'male'
  };

  var person1Marker = new google.maps.Marker({
    position: new google.maps.LatLng(user_latitude, user_longitude),
    map: map,
    title:"Minja Gaso"
  });

  var person2 = {
    name: 'Filip Gaso',
    src: 'img/gaso2.PNG',
    id: 568917034,
    url: 'gaso2.html',
    gender: 'male'
  };

  var person2Marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.132190, -88.290294),
    map: map,
    title:"Parkland College"
  });

  var infowindow = new google.maps.InfoWindow({
    content: ""
  });

  google.maps.event.addListener(person1Marker, 'click', function() {
    infowindow.content = generateContent(person1);
    infowindow.open(map, person1Marker);
  });

  google.maps.event.addListener(person2Marker, 'click', function() {
    infowindow.content = generateContent(person2);
    infowindow.open(map, person2Marker);
  });

}
function generateContent(person)
{
  var person_element = document.createElement('div');
      person_element.id = 'person-' + person.id;
      person_element.onclick = function()
      {
        //window.location = 'http://www.facebook.com/' + person.id;
        window.location = person.url;
      }
  //
  var person_heading = document.createElement('h5');
      person_heading.innerHTML = person.name;
  //
  var person_image = document.createElement('img');
      person_image.src = person.src;
  //
  var person_gender = document.createElement('p');
  var person_gender_label = document.createElement('strong');
      person_gender_label.innerHTML = "Gender";
      person_gender.appendChild(person_gender_label);
      person_gender.innerHTML = person.gender;
  //
  person_element.appendChild(person_heading);
  person_element.appendChild(person_image);
  person_element.appendChild(person_gender);

  return person_element;
}
// google.maps.event.addDomListener(window, 'load', navigator.geolocation.getCurrentPosition(show_map));
*/