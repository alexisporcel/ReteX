function room(event) {
	var name = event.target.getAttribute('name');
	console.log(name);
}

function fiche(){
	window.location.assign(`../pages/caserne/${event.target.name}.html`) ;
}
