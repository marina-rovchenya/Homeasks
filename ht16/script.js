var Clock = {
	init(){
		this.canvas = document.getElementById('canvas');
		this.ctx = canvas.getContext('2d');

		this.center = {x: this.canvas.width/2, y: this.canvas.height/2};
		this.radius = canvas.height/2-20;

		
		window.requestAnimationFrame(Clock.drawClock);

	},
	drawClock() {
		requestAnimationFrame(Clock.drawClock);
        Clock.ctx.clearRect(0, 0, canvas.width, canvas.height);
        Clock.drawLayout();
        Clock.drawPointers();

    },

    drawLayout() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 3;
        this.ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        this.ctx.stroke();

        this.ctx.save();
        this.ctx.globalCompositeOperation = 'destination-over';
        this.ctx.beginPath();
        this.ctx.arc(this.center.x, this.center.y, this.radius * 0.03, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();

        Clock.drawNumbers();
    },
    drawNumbers() {
        this.ctx.save();

        this.ctx.translate(this.center.x, this.center.y);
        this.ctx.font = this.radius * 0.11 + "px impact";
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";

        for (var i = 1; i <= 12; ++i) {
            this.ctx.rotate(Math.PI / 180 * 30);
            this.ctx.fillText(i.toString(), 0, -this.radius * 0.9);
        }

        this.ctx.restore();
    },
    drawPointers() {
        const date = new Date();
        Clock.drawSecondPointer(date);
        Clock.drawMinutePointer(date);
        Clock.drawHourPointer(date);
    },
    drawSecondPointer(date) {
        const seconds = date.getSeconds();

        this.ctx.save();
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.translate(this.center.x, this.center.y);
        this.ctx.rotate(Math.PI / 180 * seconds * 6);
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, -this.radius * 0.8);
        this.ctx.stroke();

        this.ctx.restore();
    },

    drawMinutePointer(date) {
        const minutes = date.getMinutes();

        this.ctx.save();

        this.ctx.strokeStyle = 'black';
	    this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.translate(this.center.x, this.center.y);
        this.ctx.rotate(Math.PI / 180 * (minutes * 6 + date.getSeconds() / 10));
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, -this.radius * 0.65);
        this.ctx.stroke();

        this.ctx.restore();
    },

    drawHourPointer(date) {
        var hours = date.getHours();

        this.ctx.save();

        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.translate(this.center.x, this.center.y);

        if (hours >= 12) hours -= 12;
        this.ctx.rotate(Math.PI / 180 * (hours * 30 + date.getMinutes() / 2));

        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, -this.radius * 0.55);
        this.ctx.stroke();

        this.ctx.restore();
    }
}

Clock.init();