var listPdf_cardio = ["FE 2019-5 SUAP arrêt des hémorragies c'est le résultat qui compte.pdf", 'FE 2019-6 SUAP un choc au bon moment et ça repart!.pdf', "FE 2020-1 SUAP Quand il n'y a pas de pouls on masse.pdf", 'FE 2021-3 choquer vite.pdf', 'RAC 2018 ACR non choqué.pdf', 'RAC 2018 Arrêt cardiaque imprévu et surveillance.pdf', 'RAC 2018 IDM chez DID.pdf', 'RAC 2018 Localisation des patchs DSA du DGT 7.pdf', 'RAC 2019 ACR non choqué DSA.pdf']
var listPdf_respi = ['20220211 FE SUAP 2022-1 2 ANGOISSEES et 1 SIMULATRCE LSP.pdf', 'FE 2019-4 SUAP méconnaissance détresse respiratoire.pdf', 'FE 2020-2 SUAP Risque COVID pas de déviance !.pdf', 'FE 2021 COVID.pdf', 'FE 2021- COVID.pdf', 'FE 2021-1 les DR masquées.pdf', "FE 2021-4 Détresse et demande d'équipe médicale.pdf", 'RAC 2019 OBVA.pdf']
var listPdf_neuro = ["FE 2020-5 L'évaluation psychiatrique c'est un métier.pdf", 'RAC 2018 détresse psy.pdf']
var listPdf_autres = ['FE 2019-10 SUAP LA FICHE BILAN.pdf', "FE 2019-7 SUAP retard a l'évacuation.pdf", "FE 2019-8 SUAP L'erreur est humaine.pdf", "FE 2019-9 SUAP l'ordonnance !.pdf", 'FE 2020-3 Reconnaitre les drapeaux rouges.pdf', 'FE 2020-4 Sécurité des personnels en SUAP.pdf', 'FE 2021-2 Hypothermie.pdf', 'FE 2021-5 Cordon ombilical couper ou pas.pdf', "FE 2021-6 MORT D' UN SDF.pdf", 'RAC 2018 constante imprenable par le DGT7.pdf', 'RAC 2018 intox mèd LSP.pdf', 'RAC 2018 Nouveau-né prématuré en détresse .pdf', 'RAC 2018 numéro TOUCH 7.pdf', 'RAC 2018 SUAP INTOX CO.pdf', 'RAC 2019 Homme vs machine.pdf']
var listPdf_bsp = ['BSP-115.1-Engagement des secours.pdf', "BSP-115.2-Conduite de l'operation.pdf", 'BSP-179-Tenues.pdf', "BSP-200.2-Secours d'urgence aux personnes.pdf", 'BSP-300.16-Catalogue des moyens brigade.pdf']


var pdfFilesDict = {
	'cardio' : listPdf_cardio,
	'respi' : listPdf_respi,
	'neuro' : listPdf_neuro,
	'autres' : listPdf_autres,
	'BSP' : listPdf_bsp
}

initPage()

function initPage(){
	var path = window.location.pathname
	var page = path.split("/").pop()
	var pageName = page.slice(0,-5)
	if (pageName!="Fiches%20ReteX") {
		var list = pdfFilesDict[pageName]
		var container = document.getElementById('pdf-container')
		for (var i = 0; i < list.length; i++) {
			var element = document.getElementById('pdf_init').cloneNode(true)
			element.id = i
			element.style.display = 'flex'
			element.setAttribute("onclick", "textOnclick(event)");
			element.children[1].innerHTML = list[i]
			element.children[1].setAttribute("id", i)
			element.children[0].setAttribute("id", i)
			console.log(element.children[1]);
			container.appendChild(element)
		}
	}
}

function textOnclick(event){
	var path = window.location.pathname
	var page = path.split("/").pop()
	var pageName = page.slice(0,-5)
	var list = pdfFilesDict[pageName]
	if (pageName != 'BSP') { window.open('/resources/pdf/Retex/' + pageName + '/' + list[event.target.id],'_blank') }
	else { window.open('/resources/pdf/BSP/' + list[event.target.id],'_blank') }
}

function tabsHover(event){
	if(!(event.target.id.indexOf("hover") !== -1)){
		icon = document.getElementById(event.target.id)
		icon_hover = document.getElementById(event.target.id+'_hover')
		icon.style.display = 'none'
		icon_hover.style.display = 'block'
	}
	else{
		icon_hover = document.getElementById(event.target.id)
		icon = document.getElementById(event.target.id.slice(0,-6))
		icon.style.display = 'block'
		icon_hover.style.display = 'none'
	}
}
