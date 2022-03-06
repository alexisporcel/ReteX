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

// ################################## Drag and drop message game #######################################

const labels = document.querySelectorAll('.label')
var emptySpaces = document.querySelectorAll('.message-holder')
var lastDroppedBox = emptySpaces[0]

let draggedItem = null

for (var i = 0; i < labels.length; i++) {
	const label = labels[i]

	label.addEventListener('dragstart', function(e){
		draggedItem = this
		setTimeout(function(){
			draggedItem.style.display = 'none'
		}, 0)
	})
	label.addEventListener('dragend', function(e){
		setTimeout(function(){
			draggedItem.style.display = 'block'
			draggedItem = null
		}, 0)
	})
	for (var j = 0; j < emptySpaces.length; j++) {
		const emptySpace = emptySpaces[j]
		droppable(emptySpace)
	}
	droppable(document.querySelectorAll('.labels')[0])
}

function autoDrag(event){
	if (window.event.ctrlKey) {
		if (event.target.getAttribute('parent') == lastDroppedBox['className']) {
			if (event.target.getAttribute('parent') == 'labels') {
				lastDroppedBox = emptySpaces[0]
			}
			else if (event.target.getAttribute('parent') == 'message-holder') {
				lastDroppedBox = document.querySelectorAll('.labels')[0]
			}
		}
		event.target.setAttribute('parent', lastDroppedBox['className'])
		lastDroppedBox.append(event.target)
	}
}

function droppable(item){
	item.addEventListener('dragover', function(e){
		e.preventDefault()
	})
	item.addEventListener('dragenter', function(e){
		e.preventDefault()
	})
	item.addEventListener('drop', function(e){
		this.append(draggedItem)
		lastDroppedBox = this
		e.target.childNodes[e.target.childNodes.length-1].setAttribute('parent', this['className']);
	})
}

function correc(){
	for (var i = 0; i < labels.length; i++) {
		labels[i].setAttribute('draggable', 'false')
		correctionBox = document.querySelectorAll('.correctionBox')[0]
		labelsAndButtons = document.querySelectorAll('.labelsAndButtons')[0]
		labelsAndButtons.style.display = 'none'
		correctionBox.style.display = 'block'
	}
}

function showExplanation(e){
	if (e.target.getAttribute('draggable') == 'false') {
		let correctionExplanation = document.querySelectorAll('.correctionExplanation')[0]
		correctionExplanation.style.display = 'flex'
		console.log(explanation, e.target.innerHTML, explanation[e.target.innerHTML]);
		if (String(explanation[e.target.innerHTML]) != 'undefined') {correctionExplanation.innerHTML = explanation[e.target.innerHTML]}
		else {correctionExplanation.innerHTML = "pas d'information complémentaire"}

		document.addEventListener('mousemove', function(e) {
			let card = document.querySelectorAll('.correctionExplanation')[0]
			lastMouseXpos = e.x
			lastMouseYpos = e.y
			let top = e.y + window.scrollY + 30;
			let left = e.x + window.scrollX + 30;
			card.style.top = top + 'px';
			card.style.left = left + 'px';
		});
		document.addEventListener('scroll',function(e) {
			let card = document.querySelectorAll('.correctionExplanation')[0]
			let infocard = card.getBoundingClientRect();
			let top = lastMouseYpos + window.scrollY + 30;
			let left = lastMouseXpos + window.scrollX + 30;
			card.style.top = top + 'px';
			card.style.left = left + 'px';
		})
	}
}
function hideExplanation(e){
	if (e.target.getAttribute('draggable') == 'false'){
		let correctionExplanation = document.querySelectorAll('.correctionExplanation')[0]
		correctionExplanation.style.display = 'none'
	}
}


let explanation = {
	"Golf 3" : "On doit toujours demander la parole au CSO (ici Golf 3)",
	"De l'aspirant Blanc" : "On doit toujours présenter le nom du chef d'agrès qui énonce le message",
	"En détresse circulatoire" : "Pas besoin d'expliquer la patologie de la victime dans le message",
	"Structure mobile d'urgence et de réanimation de Beaujon" : "Il ne faut pas préciser la nature du moyen. Seulement sa provenance.",
	"Equipe médicale de Beaujon" : "Toujours préciser la provenance du moyen",
	"Au 4 boulevard perreire" : "Préciser l'adresse dans le premier message, pas besoin dans le deuxième message."
}
