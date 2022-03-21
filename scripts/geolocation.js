// ToDo : proposer de contacter l'aspirant précédent en fonction de la caserne depuis laquelle l'utilisateur est localisé.  

var x = document.getElementById("location");
var y = document.getElementById("locationButton")

function getLocation() {
    navigator.permissions.query({name:'geolocation'}).then(function(result){console.log('geolocation permission ' + result.state);})
    x.style.display = 'flex'
    y.style.display = 'none'
  	if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition);}
	else {x.innerHTML = "Le navigateur n'accepte pas la localisation.";}
}

let getUserPostcode = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude,
                    long = position.coords.longitude,
                    url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=YOUR_GOOGLE_API_KEY";
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "json",
                    success: function (response) {
                        let results = response.results,
                            postalCode = '';
                            console.log(response, results[0]);
                        if (results[0]) {
                            for (let i = 0; i < results[0].address_components.length; i++) {
                                let types = results[0].address_components[i].types;

                                for (let typeIdx = 0; typeIdx < types.length; typeIdx++) {
                                    if (types[typeIdx] == 'postal_code') {
                                        postalCode = results[0].address_components[i].long_name;
                                        break;
                                    }
                                }
                                if (postalCode !== '') {
                                    break;
                                }
                            }
                        }
                        console.log(postalCode);
                    },
                    error: function (req, status, error) {
                        alert('Sorry, there was an error.');
                    }
                });
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        alert("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        alert("An unknown error occurred.");
                        break;
                }
            }
        );
    } else {
        alert("Sorry, Geolocation is not supported by your browser.");
    }
}

function newCenter(){
    var newc = map.getCenter();
    geocoder.geocode({'latLng': newc}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK) {
      var newzip = results[0].address_components['postal_code'];
      console.log(newzip);
      }
    });
}

function showPosition(position) {
    // DOESN'T WORK YET
	let lat = position.coords.latitude
	let long = position.coords.longitude
    if (long>2.352 && long<2.36 && lat>48.85 && lat<48.88) {x.innerHTML = 'CHPT'}
    // CHLY :
    // lat 48.8473238
    // long = 2.384558
	if (long>2.38455 && long<2.38456 && lat>48.847323 && lat<48.847324) {x.innerHTML = 'CHLY'}
	else { x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;}
}
