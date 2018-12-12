var Paint = {
	init(){
		this.isMouseDown = false;
		this.canv = document.getElementById('canvas');
		this.ctx = this.canv.getContext('2d');
		this.canv.width = 500;
		this.canv.height = 500;
		this.coords = [];

		this.toDo();
		
	},
	getSave(coords, s){
		localStorage.coords = JSON.stringify(coords);

		coords = JSON.parse(localStorage.coords);
	
	},
	toDo(){
		var inp = document.getElementById('tick');
		var clearCanvasBtn = document.getElementById('clear');
		var colorH = document.getElementById('h');
		var colorS = document.getElementById('s');
		var colorB = document.getElementById('b');
		var colorInput = document.getElementById('color');
		
		Paint.ctx.strokeStyle = "black";
		Paint.ctx.strokeRect(0,0,500,500);

		this.canv.addEventListener('mousedown',function(){
			Paint.isMouseDown = true;
		});

		this.canv.addEventListener('mouseup', function(){
			Paint.isMouseDown = false;
			Paint.ctx.beginPath();
		});
		clearCanvasBtn.addEventListener('click', function(){
			Paint.ctx.clearRect(1, 1, Paint.canv.width-2, Paint.canv.height-2);
		});

		colorInput.addEventListener('change', function(){
			Paint.ctx.fillStyle = `hsl(${colorH.value}, ${colorS.value}%, ${colorB.value}%)`;
			Paint.ctx.strokeStyle = `hsl(${colorH.value}, ${colorS.value}%, ${colorB.value}%)`;
		});		
		
		this.canv.addEventListener('mousemove', function(e){
			if(Paint.isMouseDown){
				Paint.coords.push([e.clientX, e.clientY])

				Paint.ctx.lineWidth = inp.value;
				Paint.ctx.lineTo(e.clientX, e.clientY);
				Paint.ctx.stroke();

				Paint.ctx.beginPath();
				Paint.ctx.arc(e.clientX, e.clientY, inp.value/2, 0, Math.PI*2);
				Paint.ctx.fill();

				Paint.ctx.beginPath();
				Paint.ctx.moveTo(e.clientX, e.clientY);

				Paint.getSave(Paint.coords, inp);
			}
		});		
	}	
}

Paint.init()


