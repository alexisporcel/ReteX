var x = document.getElementById("location");

getLocation()

function getLocation() {
  	if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition);}
	else {x.innerHTML = "Geolocation is not supported by this browser.";}
}

function showPosition(position) {
	let lat = position.coords.latitude
	let long = position.coords.longitude
	if (long>2.352 && long<2.36 && lat>48.85 && lat<48.88) {x.innerHTML = 'CHPT'}
	else { x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;}
}
