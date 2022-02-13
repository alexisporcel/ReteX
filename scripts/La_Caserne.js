var lastMouseXpos = 0
var lastMouseYpos = 0

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

function last_dead_changer() {
	table = document.getElementsByClassName('wikitable')
	last_dead_name = table.rows[0]
}


fetch("https://fr.wikipedia.org/wiki/Brigade_de_sapeurs-pompiers_de_Paris#Morts_en_intervention").then(function(resp) {
    console.log(resp);
    return resp.json()
}).then(function(data) {
    console.log(data);})
