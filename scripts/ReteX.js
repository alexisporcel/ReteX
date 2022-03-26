var lastMouseXpos = 0
var lastMouseYpos = 0

init()
function init(){
	var path = window.location.pathname
	var page = path.split("/").pop()
	if (page == 'asp.html') {
		if (window.sessionStorage['user']=='ceab54db38071d0a79eec809fb07d2c953163e4c'){
			console.log('ADMIN');
			document.getElementById('cos_link').style.display='block'
			document.getElementById('addAdmin').style.display='block'
		}
		else {
			console.log('NORMAL');
		}
	}
}

function radioButton(event){
	window.location.assign(`/pages/ReteX/RetexAsp/${event.target.name}.html`)
}

function room(event, state) {
	var name = event.target.getAttribute('name');
	let roomCards = document.getElementsByName('card_' + name)
	if (state=='on') {roomCards[0].style.display = 'block'}
	if (state=='out') {roomCards[0].style.display = 'none'}
}

var path = window.location.pathname
var page = path.split("/").pop()
if (page == 'asp.html') {

	document.addEventListener('mousemove', function(e) {
		let cards = document.getElementsByClassName('card');
		for (var i = 0; i < cards.length; i++){
			let card = cards[i]
			lastMouseXpos = e.x
			lastMouseYpos = e.y
			let top = e.y + window.scrollY - 130;
			let left = e.x + window.scrollX - 230;
			card.style.top = top + 'px';
			card.style.left = left + 'px';
		}
	});
	document.addEventListener('scroll',function(e) {
		let cards = document.getElementsByClassName('card');
		for (var i = 0; i < cards.length; i++) {
			let card = cards[i]
			let infocard = card.getBoundingClientRect();
			let top = lastMouseYpos + window.scrollY - 130;
			let left = lastMouseXpos + window.scrollX - 230;
			card.style.top = top + 'px';
			card.style.left = left + 'px';
		}
	})

}

// ##########  Text Edit ###########

if (page == 'ajouterAdmin.html') {

	if (window.sessionStorage['user'] != 'ceab54db38071d0a79eec809fb07d2c953163e4c'){window.location.assign('/index.html')}
	else {
		document.getElementById('cos_link').style.display='block'

		var alreadyFocused = false
		function focusTextArea(){
			if (!alreadyFocused) {
				alreadyFocused = true
				document.getElementsByClassName('textarea')[0].innerHTML = ''
				document.getElementsByClassName('textarea')[0].style.color = 'black'
			}
		}
		document.addEventListener('keyup',function(e){
			if (e.target.className == 'textarea'){
				if (e.keyCode === 9) {focusTextArea()}
			}
			if (e.key == "Escape") { document.getElementsByName('cardStyle')[0].style.display='none' }
		})

		document.addEventListener('click', function(e){
			if (!(e.target.className.includes('style')) & e.target.className != 'styleAdmin'){
				document.getElementsByName('cardStyle')[0].style.display='none'
			}
		})

		document.addEventListener('scroll',function(e) {
			let pinceau = document.getElementById('pinceau');
			let card = document.getElementsByClassName('card')[0];
			let info = pinceau.getBoundingClientRect();
			card.style.top = info.top + window.pageYOffset + 'px';
		})

		var card = document.getElementsByClassName('card')[0];
		card.onmousedown = function(e){
			e = e || window.event;
			e.preventDefault();
	  	} //empêche de déselectionner le texte sélectionné avant de modifier son style.

		function PreviewImage() {
		    var oFReader = new FileReader();
		    oFReader.readAsDataURL(document.getElementById("imagePicker").files[0]);
		    oFReader.onload = function (oFREvent) {
		        document.getElementById("photoFiche").src = oFREvent.target.result;
		    };
		};

		function changeStyle(element){
			if(document.execCommand(element.getAttribute('name'))){document.execCommand("normal");}
			else{document.execCommand(element.getAttribute('name'));}
		}

		let colorpicker = document.getElementsByClassName('styleColorpicker')[0];
		colorpicker.addEventListener('input', function(e) {
		    var selection = window.getSelection().getRangeAt(0);
		    var selectedText = selection.extractContents();
		    var span = document.createElement('span');
		    span.style.color = e.target.value;
		    span.className = 'selected-text';
		    span.appendChild(selectedText);
		    selection.insertNode(span);
		})

		function savePage(){
			var title = document.getElementsByName('textareaTitle2')[0].value
			var content = document.getElementsByClassName('textarea')[0].outerHTML
			// var image = `<img src="cid:${document.getElementsByClassName('photoFiche')[0].src}">`
			let subject = 'Suggestion de fiche ReteX Aspirant'
			// let body = 'titre : ' + title + '  //  contenu : ' + content + '  //  image : ' + image
			let body = 'titre : ' + title + '  //  contenu : ' + content
			window.open(`mailto:clement.patrizio@gmail.com?subject=${subject}&body=${body}`);
		}
		document.addEventListener('mousemove', function(e) {
			let card = document.getElementsByClassName('card')[1];
			lastMouseXpos = e.x
			lastMouseYpos = e.y
			let top = e.y + window.scrollY - 130;
			let left = e.x + window.scrollX - 230;
			card.style.top = top + 'px';
			card.style.left = left + 'px';
		});
		document.addEventListener('scroll',function(e) {
			let card = document.getElementsByClassName('card')[1];
			let infocard = card.getBoundingClientRect();
			let top = lastMouseYpos + window.scrollY - 130;
			let left = lastMouseXpos + window.scrollX - 230;
			card.style.top = top + 'px';
			card.style.left = left + 'px';
		})
	}
}
