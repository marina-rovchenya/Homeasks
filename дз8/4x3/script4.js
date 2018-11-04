var workspace = document.getElementById('workSpace');
var buttons = workspace.children;
var memory = document.getElementById('memory');
var display = document.getElementById('display');
var btnC = document.getElementById('clear-disp');
var btnCM = document.getElementById('clear-memory')

var str = '';
var mem = '';

for (var i = 0; i < buttons.length; i++) {
	addEvent(buttons[i]);             
}
function addEvent(button) {
	button.addEventListener('click', function(){
		var type = button.getAttribute('data');  
		if (type == '=') {
			memory.value = str;
			str = eval(str);
			display.value = str;
			memory.value += `=${str}`;
			return;
		} else {
			str += type;
		} 
		display.value = str;
	})
}
btnC.addEventListener('click', function () {
	display.value = '';
	str='';
})

btnCM.addEventListener('click', function () {
    memory.value = '';
})



