function tab(event) {
	console.log(event.target.name);
	window.location.assign(`./pages/${event.target.name}.html`)
}


function home() {
	console.log(event.target.name)
	window.location.assign('../index.html')
}
