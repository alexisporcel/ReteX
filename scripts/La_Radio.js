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
		labels[i].setAttribute('onmouseover', 'showExplanation()')
		labels[i].setAttribute('onmouseout', 'hideExplanation()')
	}
}

function showExplanation(){
	console.log('show');
}
function hideExplanation(){
	console.log('hide');
}
