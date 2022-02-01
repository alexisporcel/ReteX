function tab(event) {
	console.log(event.target.name);
	window.location.assign(`./pages/${event.target.name}.html`)
}
