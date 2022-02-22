function radioTab(event) {
	// NE PAS EFFACER LES LIGNES EN COMMENTAIRE
	// var path = window.location.pathname;
	// var page = path.split('/').pop();
	// if (page=='index.html') {window.location.assign(`./pages/${event.target.name}.html`)}
	// else{
	// 	if (path.includes('caserne')) {window.location.assign(`../${event.target.name}.html`)}
	// 	else {window.location.assign(`./${event.target.name}.html`)}
	// }
	window.location.assign(`/pages/radio/${event.target.name}.html`)
}
function radioButton(event){
	window.location.assign(`/pages/radio/jeuRadio/${event.target.name}.html`)
}
