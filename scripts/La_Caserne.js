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

// function last_dead_changer() {
// 	table = document.getElementsByClassName('wikitable')
// 	last_dead_name = table.rows[0]
// }

const PAGE_NAME = 'Brigade_de_sapeurs-pompiers_de_Paris'
const LINK = `https://fr.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&page=${PAGE_NAME}&formatversion=2&format=json`

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
		            console.log(row)
					console.log(row.cells[1]);
					document.getElementById('last_dead').innerHTML = row.cells[1].innerHTML.replace(/<\\?b>/, '') // extract the name
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



// let searchUrl =
//   'https://fr.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
// let contentUrl =
//   'https://fr.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
//
// let userInput;
// let counter = 0;
//
// function loadJSON(path, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(JSON.parse(xhr.responseText));
//       }
//     }
//   };
//   xhr.open('GET', path, true);
//   xhr.send();
// }
//
// function setup() {
// 	goWiki('unicorn');
//
//
//     function goWiki(term) {
//     	counter = counter + 1;
//
// 	    if (counter < 10) {
// 	      let url = searchUrl + term;
// 	      loadJSON(url, gotSearch, 'jsonp');
//     	}
//   	}
//
//   function gotSearch(data) {
//     console.log(data);
//     // let len = data[1].length;
//     // let index = floor(random(len));
//     // let title = data[1][index];
//     // title = title.replace(/\s+/g, '_');
//     // createDiv(title);
//     // console.log('Querying: ' + title);
//     // let url = contentUrl + title;
//     // loadJSON(url, gotContent, 'jsonp');
//   }
//
//   function gotContent(data) {
//     let page = data.query.pages;
//     let pageId = Object.keys(data.query.pages)[0];
//     console.log(pageId);
//     let content = page[pageId].revisions[0]['*'];
//     console.log(content);
//     let wordRegex = /\b\w{4,}\b/g;
//     let words = content.match(wordRegex);
//     let word = random(words);
//     goWiki(word);
//     console.log(word);
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
//
// const API_URL_works = `https://fr.wikipedia.org/w/api.php?action=parse&page=Brigade_de_sapeurs-pompiers_de_Paris&prop=text&formatversion=2`
// const API_URL = `https://fr.wikipedia.org/w/api.php?action=parse&page=Brigade_de_sapeurs-pompiers_de_Paris&origin=https://www.wikipedia.org/&prop=text&formatversion=2`
// console.log('ok');
// const data = fetch(API_URL, { "method": "GET" }).then(response => response.json())
// console.log(data);
