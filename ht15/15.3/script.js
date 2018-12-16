var App = {
	init(){
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.img = document.getElementById('img');
		this.file = document.getElementById('file');

		this.addFilters();
		this.addListener();
	},

	addListener(){
		this.file.addEventListener("change", function(){
			var file = this.files[0];  //это свойство хранит объект FileList (коллекция объектов)
			App.readFile(file);
		})
	},

	readFile(img){
		var reader = new FileReader(); 
		reader.onload = function(){
			App.img.src = this.result;
			App.img.onload = function () {
                App.canvas.width = App.img.width;
                App.canvas.height = App.img.height;
                App.ctx.drawImage(App.img, 0, 0);
            }
		}
		
		reader.readAsDataURL(img);	
	},
	

	addFilters() {
            var filter1 = document.getElementById('negative');
            filter1.addEventListener('click', function () {
                App.addNegative();
            })
            var filter2 = document.getElementById('black&white');
            filter2.addEventListener('click', function () {
                App.addBlackWhite();
            })
            var filter3 = document.getElementById('sepia');
            filter3.addEventListener('click', function () {
                App.addSepia();
            })
            var restert = document.getElementById('restsrt');
            restart.addEventListener('click', function () {
                App.removeFilter();
            })
        },

        addNegative() {
            this.removeFilter();

            var imageData = App.ctx.getImageData(0, 0, App.canvas.width, App.canvas.height);
            var pixels = imageData.data;
            for (var i = 0; i < pixels.length; i += 4) {
                pixels[i] = 255 - pixels[i];
                pixels[i + 1] = 255 - pixels[i + 1];
                pixels[i + 2] = 255 - pixels[i + 2];
            }
            this.ctx.putImageData(imageData, 0, 0);
        },

        addBlackWhite() {
            this.removeFilter();

            var imageData = App.ctx.getImageData(0, 0, App.canvas.width, App.canvas.height);
            var pixels = imageData.data;

            for (var i = 0; i < pixels.length; i += 4) {
                var r = pixels[i];
                var g = pixels[i + 1];
                var b = pixels[i + 2];

                var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                pixels[i] = pixels[i + 1] = pixels[i + 2] = v;
            }
            this.ctx.putImageData(imageData, 0, 0);
        },

        addSepia() {
            this.removeFilter();

            var imageData = App.ctx.getImageData(0, 0, App.canvas.width, App.canvas.height);
            var pixels = imageData.data;

            for (var i = 0; i < pixels.length; i += 4) {

                var r = pixels[i];
                var g = pixels[i + 1];
                var b = pixels[i + 2];

                pixels[i] = (r * 0.393) + (g * 0.769) + (b * 0.189); // red
                pixels[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168); // green
                pixels[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131); // blue
            }
            this.ctx.putImageData(imageData, 0, 0);
        },

        removeFilter() {
        	App.ctx.drawImage(App.img, 0, 0);
        }

	
}

App.init()