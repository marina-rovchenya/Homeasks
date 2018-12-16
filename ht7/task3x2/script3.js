function table(){
	var n = prompt("N")
	n = Number(n)

	document.write("<table border=\"1\">")

	document.write("<tbody>")

	for (var i = 0; i < n; i++){

		document.write("<tr>");

   	for (var j = 0; j < n; j++){

   		document.write("<td>" + (j+1) + "*" + (i+1) + "=" + ((i+1) * (j+1)) + "</td>")
   	}

	document.write("</tr>")

	}
document.write("</tbody>")

document.write("</table>")

}


function style(){

	var table = document.querySelector("tbody")
	    
	for (var i = 0; i < table.rows.length; i++){
		
	     table.rows[i].cells[i].style.backgroundColor = 'red';
	}
}
table()
style()