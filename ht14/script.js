function loadData(){//вынесли обработчик xhr запроса в функцию
	var xhr = new XMLHttpRequest();
	xhr.open("GET", `/load`, true) 		
	xhr.onload = function (str) {
		//buildUI(JSON.parse(this.responseText));
		var but = document.getElementById('filter');
		but.addEventListener('click', filterList);
	}
	xhr.send(null);
}

function filterList(){	
	if (event.target.classList.contains('price')) {
                const minPrice = document.getElementById('min-price');
                const maxPrice = document.getElementById('max-price');
                const category = document.getElementById('category');

                const xhr = new XMLHttpRequest();
                xhr.open('GET', `/data?min=${minPrice.value}&max=${maxPrice.value}&category=${category.value}`, true);
                xhr.onload = function () {
                    buildUI(JSON.parse(this.responseText));
                }
                xhr.send(null);
            }
}

function buildUI(items){
	var container = document.getElementById('container');
	items.forEach(function(item, el){

		var div = document.createElement('div');
                div.innerHTML = `
                    <h2>${item.title}</h2>
                    <p><b>Price:</b> ${item.price}</p>
                    <p><b>Category:</b> ${item.category}</p>`

                container.appendChild(div);
		
	})
	
}

loadData();