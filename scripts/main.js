function tab(event) {
	// NE PAS EFFACER LES LIGNES EN COMMENTAIRE
	// var path = window.location.pathname;
	// var page = path.split('/').pop();
	// if (page=='index.html') {window.location.assign(`./pages/${event.target.name}.html`)}
	// else{
	// 	if (path.includes('caserne')) {window.location.assign(`../${event.target.name}.html`)}
	// 	else {window.location.assign(`./${event.target.name}.html`)}
	// }
	console.log(event.target, event.target["name"]);
	if (String(event.target.name) != 'undefined') {window.location.assign(`/pages/${event.target.name}.html`)}
	else {window.location.assign(`/pages/${event.target.getAttribute('name')}.html`)}
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
	window.location.assign(`/main.html`)
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

// ####################################### Login Form ##########################################################
init()
function init(){
	var path = window.location.pathname
	var page = path.split("/").pop()

	if (page == 'index.html') {
		document.querySelector('body').style.display = 'flex'
		document.querySelector('.Password').addEventListener('keypress', function (e) {if (e.key === 'Enter') {submit()}});
		storage = window.sessionStorage;
	}
	else{
		storage = window.sessionStorage;
		try {
			if(storage['auth'] != 'true'){ window.location.assign(`/index.html`) }
			else { document.querySelector('body').style.display = 'flex' }
		}
		catch (e) { window.location.assign(`/index.html`) }
	}
}

function submit(){
	mdp = document.getElementsByClassName('Password')[0].value
	if (sha1(mdp) == '8758d713a95837b1599c17749ac7f43602725681'){login()}
	else {logout()}
}

function logout(){
	sessionStorage.setItem('auth', 'false');
	window.location.assign('/index.html')
}

function login(){
	sessionStorage.setItem('auth', 'true');
	window.location.assign('/main.html')
}

function showPassword() {
  var x = document.getElementsByClassName("Password")[0];
  var show = document.getElementById("show")
  var hide = document.getElementById("hide")
  if (x.type === "password") {
    x.type = "text";
	show.style.display = 'none'
	hide.style.display = 'block'
  } else {
    x.type = "password";
	show.style.display = 'block'
	hide.style.display = 'none'
  }
}

// ATTEMPT AUTO SCROLL WHEN APPROACHING THE BOTTOM EDGE OF THE WINDOW

// document.addEventListener('mousemove', function(event){
// 	function pageScroll(){
// 		window.scrollBy(0,1);
// 		scrolldelay = setTimeout(pageScroll,10);
// 	}
// 	if (window.sessionStorage['enableAutoScroll'] == 'true') {
// 		console.log(event);
// 		var viewportX = event.clientX;
// 		var viewportY = event.clientY;
// 		// Get the viewport dimensions.
// 		var viewportWidth = document.documentElement.clientWidth;
// 		var viewportHeight = document.documentElement.clientHeight;
// 		var edgeBottom = ( viewportHeight - 100 );
// 		var isInBottomEdge = ( viewportY > edgeBottom );
// 		console.log(isInBottomEdge);
// 		if (isInBottomEdge){
// 			pageScroll()
// 		}
// 	}
// })
