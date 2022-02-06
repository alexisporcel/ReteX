function tab(event) {
	var path = window.location.pathname;
	var page = path.split('/').pop();
	if (page=='index.html') {window.location.assign(`./pages/${event.target.name}.html`)}
	else{
		if (path.includes('caserne')) {window.location.assign(`../${event.target.name}.html`)}
		else {window.location.assign(`./${event.target.name}.html`)}
	}
}

function home(){
	window.location.assign(`../index.html`)
}
