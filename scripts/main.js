function tab(event) {
	// NE PAS EFFACER LES LIGNES EN COMMENTAIRE
	// var path = window.location.pathname;
	// var page = path.split('/').pop();
	// if (page=='index.html') {window.location.assign(`./pages/${event.target.name}.html`)}
	// else{
	// 	if (path.includes('caserne')) {window.location.assign(`../${event.target.name}.html`)}
	// 	else {window.location.assign(`./${event.target.name}.html`)}
	// }
	console.log(event.target);
	console.log(event.target.name);
	window.location.assign(`/pages/${event.target.name}.html`)
}

function home(){
	// NE PAS EFFACER LES LIGNES EN COMMENTAIRE
	// var path = window.location.pathname;
	// var page = path.split('/').pop();
	// if (page=='index.html') {window.location.assign(`/index.html`)}
	// else {
	// 	if (path.includes('caserne')) {window.location.assign(`/index.html`)}
	// 	else {window.location.assign(`../index.html`)}
	// }
	window.location.assign(`/index.html`)
}

function sendMail(){
	let subject = 'Suggestion de modification ReteX'
	let body = ''
	window.open(`mailto:clement.patrizio@gmail.com?subject=${subject}&body=${body}`);
}

function chicAlaJone(){
	// NE PAS EFFACER LES LIGNES EN COMMENTAIRE
	// var path = window.location.pathname;
	// var page = path.split('/').pop();
	// if (page=='index.html') {window.location.assign(`./pages/chicAlaJone.html`)}
	// else {
	// 	if (path.includes('caserne')) {window.location.assign(`.././chicAlaJone.html`)}
	// 	else {window.location.assign(`./chicAlaJone.html`)}
	// }
	window.location.assign(`/pages/chicAlaJone.html`)
}
