var contextMenu = document.querySelector('.menu');
var table=document.querySelector("table").firstElementChild;

function callMenu(x, y) {
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.style.display = 'block';
}

document.addEventListener('contextmenu', function (event) {
    callMenu(event.clientX, event.clientY);
    event.preventDefault();
})

document.addEventListener('click', function () {
    contextMenu.style.display = 'none';
})


contextMenu.children[0].addEventListener('click', function () {
	var x=+table.lastElementChild.cells[0].innerHTML+1;
    table.innerHTML += `<tr>
						</tr>`;
	var y=+table.firstElementChild.cells.length;
	for(var i=0; i<y; i++){
		table.lastElementChild.innerHTML+=`<td>${x}</td>`;
	}
})

contextMenu.children[1].addEventListener('click', function () {
	for(var i=0; i<table.rows.length; i++){
		var x=table.rows[i].cells[0].innerHTML;
		table.rows[i].innerHTML += `<td>${x}</td>`;
	}
	
})

contextMenu.children[2].addEventListener('click', function () {
    table.removeChild(table.lastElementChild);
})

contextMenu.children[3].addEventListener('click', function () {
    for(var i=0; i<table.rows.length; i++){
    	table.rows[i].removeChild(table.rows[i].lastElementChild)
	}
})