var lastMouseXpos = 0
var lastMouseYpos = 0
const PAGE_NAME = 'Brigade_de_sapeurs-pompiers_de_Paris'
const LINK = `https://fr.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&page=${PAGE_NAME}&formatversion=2&format=json`

function room(event, state) {
	var name = event.target.getAttribute('name');
	let roomCards = document.getElementsByName('card_' + name)
	if (state=='on') {roomCards[0].style.display = 'flex'}
	if (state=='out') {roomCards[0].style.display = 'none'}
}

function fiche(event) {
	var name = event.target.getAttribute('name');
	window.location.assign(`./caserne/${name}.html`)
}

document.addEventListener('mousemove', function(e) {
	let cards = document.getElementsByClassName('card');
	for (var i = 0; i < cards.length; i++){
		let card = cards[i]
		lastMouseXpos = e.x
		lastMouseYpos = e.y
		let top = e.y + window.scrollY + 30;
		let left = e.x + window.scrollX + 30;
		card.style.top = top + 'px';
		card.style.left = left + 'px';
	}
});
document.addEventListener('scroll',function(e) {
	let cards = document.getElementsByClassName('card');
	for (var i = 0; i < cards.length; i++) {
		let card = cards[i]
		let infocard = card.getBoundingClientRect();
		let top = lastMouseYpos + window.scrollY + 30;
		let left = lastMouseXpos + window.scrollX + 30;
		card.style.top = top + 'px';
		card.style.left = left + 'px';
	}
})

function getLastDeath() {
	var path = window.location.pathname;
	var page = path.split('/').pop();
	if (page=='morts_au_feu.html') {
	    const parser = new DOMParser()
		try {
			fetch(LINK, {
		            method: 'GET',
		            mode: 'cors'
		        })
		        .then(res => res.json()) // Convert the response stream into JSON
		        .then(json => parser.parseFromString(json.parse.text, 'text/html')) // Parse the JSON element in HTML
		        .then(html => {
		            let table = html.querySelector('#Morts_en_intervention').parentNode.nextElementSibling.nextElementSibling
		            let row = table.tBodies[0].rows[1]
					document.getElementById('last_dead').innerHTML = 'le ' + row.cells[3].innerHTML.replace(/<\\?b>/, '') + row.cells[1].innerHTML.replace(/<\\?b>/, '') + ', ' + row.cells[2].innerHTML.replace(/<\\?b>/, '') +" ans, mort à cause d'une " + row.cells[6].innerHTML.replace(/<\\?b>/, '').toLowerCase()// extract the name
					document.getElementById('last_dead').style.textDecoration = "none"
					document.getElementById('last_dead').style.color = "black"
		        })
		} catch (e) {
			console.log(e);
		}
	}
	else {}
}
getLastDeath()
