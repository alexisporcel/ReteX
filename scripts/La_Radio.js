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

// const labelsContainer = document.getElementsByClassName('labels')[0]
// const label = document.getElementsByClassName('label')[0]
// const emptys = document.getElementsByClassName('empty-space')
//
// label.addEventListener('dragstart', dragStart)
// label.addEventListener('dragend', dragEnd)
//
// function dragStart(){
// 	setTimeout(() => (this.className = 'invisible',this.innerHTML = ''), 0);
// 	this.style.opacity = '1.0'
// }
//
// function dragEnd(){
// 	this.className = 'label'
// 	this.innerHTML = this.attributes["name"].value
// }
//
// for (const empty of emptys){
// 	empty.addEventListener('dragover', dragOver)
// 	empty.addEventListener('dragenter', dragEnter)
// 	empty.addEventListener('dragleave', dragLeave)
// 	empty.addEventListener('dragdrop', dragDrop)
// }
// labelsContainer.addEventListener('dragover', dragOver)
// labelsContainer.addEventListener('dragenter', dragEnter)
// labelsContainer.addEventListener('dragleave', dragLeave)
// labelsContainer.addEventListener('dragdrop', dragDrop)
//
// function dragOver(event){
// 	event.preventDefault()
// 	console.log('over');
// }
// function dragEnter(event){
// 	this.append(label)
// }
// function dragLeave(event){
// 	event.preventDefault()
// 	console.log('leave');
// }
// function dragDrop(event){
// }

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
		// if (event.target.parentNode == lastDroppedBox) {
		// 	console.log('ok');
		// 	if (event.target.parentNode == document.querySelectorAll('.labels')[0]) {
		// 		console.log('ok1');
		// 		lastDroppedBox = emptySpaces[0]
		// 	}
		// 	else if (event.target.parentNode in emptySpaces) {
		// 		console.log('ok2');
		// 		lastDroppedBox = document.querySelectorAll('.labels')[0]
		// 	}
		// }
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
	})
}
