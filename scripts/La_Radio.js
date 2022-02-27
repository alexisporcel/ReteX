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

const labelsContainer = document.getElementsByClassName('labels')[0]
const label = document.getElementsByClassName('label')[0]
const emptys = document.getElementsByClassName('empty-space')

label.addEventListener('dragstart', dragStart)
label.addEventListener('dragend', dragEnd)

function dragStart(){
	setTimeout(() => (this.className = 'invisible',this.innerHTML = ''), 0);
	this.style.opacity = 1.0
}

function dragEnd(){
	this.className = 'label'
	this.innerHTML = this.attributes["name"].value
}

for (const empty of emptys){
	empty.addEventListener('dragover', dragOver)
	empty.addEventListener('dragenter', dragEnter)
	empty.addEventListener('dragleave', dragLeave)
	empty.addEventListener('dragdrop', dragDrop)
}
labelsContainer.addEventListener('dragover', dragOver)
labelsContainer.addEventListener('dragenter', dragEnter)
labelsContainer.addEventListener('dragleave', dragLeave)
labelsContainer.addEventListener('dragdrop', dragDrop)

function dragOver(event){
	event.preventDefault()
	console.log('over');
}
function dragEnter(event){
	this.append(label)
}
function dragLeave(event){
	event.preventDefault()
	console.log('leave');
}
function dragDrop(event){
	event.preventDefault()
	console.log('drop');
}
