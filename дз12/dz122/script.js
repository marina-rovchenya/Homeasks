function loadCategory(path){//вынесли обработчик xhr запроса в функцию
	var goods = new XMLHttpRequest();
	goods.open("GET", path, true) 		
	goods.onload = function (str) {
		onPodcategoriesloaded(JSON.parse(this.responseText));
	}
	goods.send(null);
}

function loadCategories(){	//функция загрузки файла с категориями
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "./json/categories.json", true);
	xhr.onload = function(){
		onCategoriesloaded(JSON.parse(this.responseText));
	}
	xhr.send(null);
}

function onCategoriesloaded(categories){ //выводит каегории в документ
	document.getElementById('nav1').innerHTML = categories.map(cat => `<a href="${cat.path}"> ${cat.title}</a>`).join('');
	document.getElementById('nav1').addEventListener('click', function(e){//по клику выводит что находится в каокретной
		if(e.target.nodeName.toLowerCase() == 'a'){
			loadCategory(e.target.getAttribute('href'));
			e.preventDefault();//чтобы не переходило по ссылке
		}
	})
}

function onPodcategoriesloaded(categories){
	document.getElementById('nav2').innerHTML = categories.map(cat => `<a href="${cat.path}"> ${cat.title}</a>`).join('');
	document.getElementById('nav2').addEventListener('click', function(e){//по клику выводит что находится в каокретной
		if(e.target.nodeName.toLowerCase() == 'a'){
			loadPodcategory(e.target.getAttribute('href'));
			e.preventDefault();//чтобы не переходило по ссылке
		}
	})
}

function loadPodcategory(path){
	var goods = new XMLHttpRequest();
	goods.open("GET", path, true) 		
	goods.onload = function (str) {
		buildUI(JSON.parse(this.responseText));
		
	}
	goods.send(null);
}

function openDescription(path, elem){
	const xhr = new XMLHttpRequest();
	xhr.open("GET", path, true);
	xhr.onload = function(){
		elem.innerHTML = this.responseText;
	}
	xhr.send(null);
}

function buildUI(items){
	document.getElementById('list').innerHTML = '';//очищаем, чтобы не выводило категории подряд
	items.forEach(function(item){
		var div = document.createElement('div');
		div.innerHTML = `<h2>${item.title}</h2>`

		div.innerHTML += `<img src='${item.img}' width='500' hight='350'/><br>`
		div.innerHTML += `<button class="open-description" data-path="${item.descriptionFile}">Краткое описание</button>
			<div class="description-content"></div>`;
			const btn = div.querySelector(".open-description");
			btn.addEventListener('click', function(){//вывод файла описания по клику
				openDescription(this.getAttribute("data-path"),this.nextElementSibling);
			})
		
		

		var section = document.getElementById('list')
		section.appendChild(div);	
		
		
	});
}

// loadCategory("goods.json");//вызов функции
loadCategories()