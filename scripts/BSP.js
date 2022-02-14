sortTableAlpha()
function sortTableAlpha() {
  var table = document.getElementById("table");
  var rows, switching, i, x, y, shouldSwitch;
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
	rows[0].style.backgroundColor = 'transparent'
	rows[rows.length-1].style.backgroundColor = 'transparent'
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
	  rows[i].style.backgroundColor = 'transparent'
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function searchBar() {
  	var input, filter, table, tr, td, i, txtValue;
  	inputs = document.getElementsByClassName("searchBar");
	input = inputs[0]
  	filter = input.value.toUpperCase();
  	table = document.getElementById("table");
  	tr = table.getElementsByTagName("tr");
	resu = null
  	for (i = 0; i < tr.length; i++) {
    	td = tr[i].getElementsByTagName("td")[0];
    	if (td) {
	      	txtValue = td.textContent || td.innerText;
	      	if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = ""
				resu = 'something'}
			else {tr[i].style.display = "none"}
    	}
		if (resu==null){
			td = tr[i].getElementsByTagName("td")[1];
			if (td) {
		      	txtValue = td.textContent || td.innerText;
		      	if (txtValue.toUpperCase().indexOf(filter) > -1) {tr[i].style.display = ""}
				else {tr[i].style.display = "none"}
	    	}
		}
  }
}
function show(event){
	var name = event.target.getAttribute('name');
	table = document.getElementById("table");
	if (name=='tout'){
		for (var i = 0; i < table.rows.length; i++) {table.rows[i].style.display = ""}
	}
	else{
		for (var i = 0; i < table.rows.length; i++) {
			if (table.rows[i].className.includes(name)) {table.rows[i].style.display = ""}
			else{table.rows[i].style.display = "none"}
		}
	}
}
