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

// ######################################### ATTEMPT GET LAST DEAD'S NAME ON WIKIPEDIA #######################################################

function last_dead_changer() {
	table = document.getElementsByClassName('wikitable')
	last_dead_name = table.rows[0]
}




let searchUrl =
  'https://fr.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentUrl =
  'https://fr.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

let userInput;
let counter = 0;

function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      }
    }
  };
  xhr.open('GET', path, true);
  xhr.send();
}

function setup() {
	goWiki('unicorn');


    function goWiki(term) {
    	counter = counter + 1;

	    if (counter < 10) {
	      let url = searchUrl + term;
	      loadJSON(url, gotSearch, 'jsonp');
    	}
  	}

  function gotSearch(data) {
    console.log(data);
    // let len = data[1].length;
    // let index = floor(random(len));
    // let title = data[1][index];
    // title = title.replace(/\s+/g, '_');
    // createDiv(title);
    // console.log('Querying: ' + title);
    // let url = contentUrl + title;
    // loadJSON(url, gotContent, 'jsonp');
  }

  function gotContent(data) {
    let page = data.query.pages;
    let pageId = Object.keys(data.query.pages)[0];
    console.log(pageId);
    let content = page[pageId].revisions[0]['*'];
    console.log(content);
    let wordRegex = /\b\w{4,}\b/g;
    let words = content.match(wordRegex);
    let word = random(words);
    goWiki(word);
    console.log(word);
  }
}












const API_URL_works = `https://fr.wikipedia.org/w/api.php?action=parse&page=Brigade_de_sapeurs-pompiers_de_Paris&prop=text&formatversion=2`
const API_URL = `https://fr.wikipedia.org/w/api.php?action=parse&page=Brigade_de_sapeurs-pompiers_de_Paris&origin=https://www.wikipedia.org/&prop=text&formatversion=2`
console.log('ok');
const data = fetch(API_URL, { "method": "GET" }).then(response => response.json())
console.log(data);
