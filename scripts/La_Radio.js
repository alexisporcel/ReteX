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
	"Structure mobile d'urgence <br> et de réanimation de Beaujon" : "Il ne faut pas préciser la nature du moyen. Seulement sa provenance.",
	"Equipe médicale de Beaujon" : "Toujours préciser la provenance du moyen",
	"Au 4 boulevard perreire" : "Préciser l'adresse dans le premier message, pas besoin dans le deuxième message.",
	"Pour un accident de la circulation" : "Préciser le motif de ta demande dans le premier message. Pas besoin dans le deuxième",
	"moyen de transport non médicalisé brigade" : "Précise la nature du vecteur qui évacue la victime. Pas le nom du moyen (ex VSAV 146)",
	"véhicule de secours et d'assistance à victimes 465 de Champerret" : "Précise la nature du vecteur qui évacue la victime. Pas le nom du moyen (ex VSAV 146)",
	"Une victime urgence relative" : "Si la victime a été UA pendant l'intervention, i.e. que tu as eu besoin d'un moyen médicalisé, alors la victime reste UA toute l'inter (et tu peux transporter ou laisser sur place une UA qui en soit va mieux. [Sur ordre du médecin]). Si tu n'as pas eu besoin de moyen médicalisé, alors la victime est UR. ",
	"Une victime urgence absolue" : "Si la victime a été UA pendant l'intervention, i.e. que tu as eu besoin d'un moyen médicalisé, alors la victime reste UA toute l'inter (et tu peux transporter ou laisser sur place une UA qui en soit va mieux. [Sur ordre du médecin]). Si tu n'as pas eu besoin de moyen médicalisé, alors la victime est UR. ",
	"Ambulance de réanimation Champerret présentée à 00h10" : "On ne présente pas les moyens brigade.",
	"Equipe médicale Champerret présentée à 00h10" : "On ne présente pas les moyens brigade.",
	"A Paris" : "On précise la ville uniquement pour les villes autre que Paris. [C'est pour éviter les confusions]",
	"Circulation rétablie" : "Tu peux le dire si à ton départ, la circulation est rétablie",
	"un enfant urgence absolue évacué par équipe médicale Beaujon" : "préciser le fait que la victime soit un enfant",
	"Circulation réduite à une voie" : "Bien préciser au commandement quand la circulation est perturbée",
	"Je demande un groupe médical" : "Voir la partie 2 titre 1 du BSP 115.2 pour connaître les groupes"
}
