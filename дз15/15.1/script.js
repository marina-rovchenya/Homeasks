const cavas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = "500";
canvas.height = "500"

window.setInterval(function(){
	var time = new Date();
	var sec = 6*time.getSeconds();
	var min = 6*(time.getMinutes()+(1/60)*time.getSeconds());
	var hours = 30*(time.getHours()+(1/60)*time.getMinutes());

	ctx.strokeStyle = "black";
	ctx.lineWidth = "1";

	ctx.fillStyle = "white"
	ctx.fillRect(0,0,500,500)

	ctx.beginPath();

	ctx.arc(250,250,100,0,2*Math.PI);
	ctx.stroke();

	ctx.beginPath()
	ctx.moveTo(250,250);
	ctx.arc(250,250,5,0,2*Math.PI);
	ctx.fill();


	ctx.textAlign = "center";
	ctx.font = "18px Arial";
	ctx.fillStyle = "black"
	ctx.fillText("12",250,170);
	ctx.fillText("6",250,340);
	ctx.fillText("3",340,258);
	ctx.fillText("9",160,258);
	ctx.fillText("1",290,180);
	ctx.fillText("2",320,215);
	ctx.fillText("11",210,180);
	ctx.fillText("10",180,215);
	ctx.fillText("4",320,295);
	ctx.fillText("5",290,325);
	ctx.fillText("7",210,325);
	ctx.fillText("8",180,295);

	ctx.beginPath();
	ctx.strokeStyle = "red"
	ctx.moveTo(250,250);
	ctx.lineTo((250 + 70*Math.cos(Math.PI/2 - sec*(Math.PI/180))),(250 - 70*Math.sin(Math.PI/2 - sec*(Math.PI/180))));
	ctx.stroke();


	ctx.strokeStyle = "black";
	ctx.lineWidth = "3";
	ctx.beginPath();
	ctx.moveTo(250,250);
	ctx.lineTo(250 + 70*Math.cos(Math.PI/2 - min*(Math.PI/180)),250 - 70*Math.sin(Math.PI/2 - min*(Math.PI/180)));
	ctx.stroke();

	ctx.lineWidth = "4";
	ctx.beginPath();
	ctx.moveTo(250,250);
	ctx.lineTo(250 + 40*Math.cos(Math.PI/2 - hours*(Math.PI/180)),250 - 40*Math.sin(Math.PI/2 - hours*(Math.PI/180)));
	ctx.stroke();

	var div = document.getElementById('div');
	div.innerHTML = time.toLocaleTimeString();
}, 1000);

