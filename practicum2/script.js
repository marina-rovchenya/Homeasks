var Tests = {
	init: async function(){
		await this.loadList	("list-of-tests.json");

	},

	loadList(path){
		var xhr = new XMLHttpRequest;
		xhr.open("GET", path, true);
		xhr.onload = function(str){
			var d = JSON.parse(this.responseText);
			Tests.onListLoaded(d);
			Tests.loadKeys(d);
		}
		xhr.send(null);
	},

	loadKeys(arr){
		var d = arr[0].keys;
		var x = d.forEach(function(elem){
			var min = `${elem.min}`;
			var max = `${elem.max}`;
			var text = `${elem.text}`;
		})
	},

	onListLoaded(tests){ 
		var nav = document.getElementById('nav');
		nav.innerHTML = tests.map(cat => `<a href="${cat.path}"> ${cat.title}</a><br>
											<span>${cat.description}</span><br>`).join('');
		document.getElementById('nav').addEventListener('click', function(e){
			if(e.target.nodeName.toLowerCase() == 'a'){
				Tests.onDataLoaded(e.target.getAttribute('href'));
				e.preventDefault();
			}
		})
	},

	onDataLoaded(path){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", path, true) 		
		xhr.onload = function (str){
			Tests.buildTestsList(JSON.parse(this.responseText));
		}
		xhr.send(null);
	},

	buildTestsList(items){

		document.getElementById('list').innerHTML = '';
	
		var right_answers = [];
		
		items.forEach(function(item, el){

			var div = document.createElement('div');

			div.setAttribute('id', 'div'+el);
			div.innerHTML = `<h3>${item.question}</h3>`;
			var ul = document.createElement('ul');
			
			item.answers.map(function(ans,i){ 
				return ul.innerHTML += `<label><input type="button" id="${i+1}" value = "${ans}"><br></label>`
			}).join('');
			div.appendChild(ul);

			var section = document.getElementById('list')
			section.appendChild(div);

			right_answers.push(item.rightAnswer);
			
		})

		for(var i=1; i<=9; i++){
			document.getElementById('div'+`${i}`).style.display = 'none';
		}	

		var but = Array.from(document.querySelectorAll('input'));

		Tests.onclick(but, right_answers, items);
	},

	onclick(b, rightAnswers){
		var selected_answers = [];
		var points = 0;
		var button_click = 0;
			b.forEach(function(button, i, arr){
				
				button.addEventListener('click', function(){
					if(button_click < 9){
						var num = this.id;
						var target = event.target;
						var p = target.parentNode.parentNode.parentNode;
						document.getElementById(p.id).style.display='none';
						var nextP = p.nextSibling;
						document.getElementById(nextP.id).style.display = 'block';
						++button_click;

						selected_answers.push(num);
						var result = [];
						
						if(num == rightAnswers[selected_answers.length-1]){
							console.log("right");
							points+=10;
						}else{
							console.log("wrong");
						}	
					}else{ return Tests.alertResult(points)}
				})
			
			})
		
	},

	alertResult(p){		//как вывести из JSON-файла с названием тестов
		if(p <= 20){
			return alert("Ты делаешь успехи, продолжай в том же духе! (Твоя оценка 2 из 10 возможных)")
		}
		if(p > 20 && p <= 40){
			return alert("Неплохо. (твоя оценка 4 из 10 возможных)")
		}
		if(p > 40 && p <= 60){
			return alert("Можно и получше! (твоя оценка 6 из 10 возможных)")
		}
		if(p > 60 && p <= 80){
			return alert("Ты патался... (твоя оценка 8 из 10 возможых)")
		}
		if(p > 80 && p <=100){
			return alert("Попробуй еще раз. (твоя оценка 10 из 10)")
		}
		
	},

	


	
	

}

Tests.init();


// function loadList(path){//вынесли обработчик xhr запроса в функцию
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", path, true) 		
// 	xhr.onload = function (str) {
// 		console.log(this.responseText)
// 		buildUI(JSON.parse(this.responseText));
// 	}
// 	xhr.send(null);
// }

// function loadTests(){	
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", "list-of-tests.json", true);
// 	xhr.onload = function(){
// 		onTestsloaded(JSON.parse(this.responseText));
// 	}
// 	xhr.send(null);
// }

// function onTestsloaded(tests){ 
	// var nav = document.getElementById('nav');
	// nav.innerHTML = tests.map(cat => `<a href="${cat.path}"> ${cat.title}</a><br>`).join('');
	// document.getElementById('nav').addEventListener('click', function(e){
	// 	if(e.target.nodeName.toLowerCase() == 'a'){
	// 		loadList(e.target.getAttribute('href'));
	// 		e.preventDefault();
	// 	}
	// })
// }

// function buildUI(items){
// 	document.getElementById('list').innerHTML = '';
	
// 	function startTest(test){
// 		console.log("Test started")
// 		let promise = new Promise(function(resolve, reject){
// 			setTimeout(function(){
// 				resolve({});
// 			},50000000)
// 		});
// 		return promise;
// 	}

// 	startTest({}).then(function(time){	//по окончании времени выполнить функцию подсчета баллов
// 		alert("Time is over.");
// 	})

// 	var right_answers = [];
		
// 	items.forEach(function(item, el){

// 		var div = document.createElement('div');

// 		div.setAttribute('id', 'div'+el);
// 		div.innerHTML = `<h3>${item.question}</h3>`;
// 		var ul = document.createElement('ul');
// 		console.log(item.answers.length)
		
// 		item.answers.map(function(ans,i){ 
// 			return ul.innerHTML += `<label><input type="button" id="${i+1}" value = "${ans}"><br></label>`
// 		}).join('');
// 		div.appendChild(ul);


// 		var section = document.getElementById('list')
// 		section.appendChild(div);

// 		right_answers.push(item.rightAnswer);
		
// 	})
	
// 	document.getElementById('div1').style.display='none';
//     document.getElementById('div2').style.display='none';
//     document.getElementById('div3').style.display='none';
//     document.getElementById('div4').style.display='none';
//     document.getElementById('div5').style.display='none';
//     document.getElementById('div6').style.display='none';
//     document.getElementById('div7').style.display='none';
//     document.getElementById('div8').style.display='none';
//     document.getElementById('div9').style.display='none';

// 	console.log(right_answers)

// 	var but = Array.from(document.querySelectorAll('input'));

// 	onclick(but, right_answers);
// }

// function onclick(b, rightAnswers){
// 	var selected_answers = [];
// 	var points = 0;
// 	b.forEach(button=>button.addEventListener('click', function(){
// 		var num = this.id;
// 		var target = event.target;
// 		var p = target.parentNode.parentNode.parentNode;
// 		document.getElementById(p.id).style.display='none';
// 		var nextP = p.nextSibling;
// 		document.getElementById(nextP.id).style.display = 'block';
		
// 		if(nextP.id == "div9"){			//на 10 вопросе функция должна прекратиться
// 			return alertResult(points);
// 		}
		
// 		selected_answers.push(num);
// 		var result = [];
		
// 		if(num == rightAnswers[selected_answers.length-1]){
// 			console.log("right");
// 			points+=10;
// 		}else{
// 			console.log("wrong");
// 		}	
// 	}));
// }

// function alertResult(p){		//как вывести из JSON-файла с названием тестов
// 	if(p <= 20){
// 		return alert("Ты делаешь успехи, продолжай в том же духе! (Твоя оценка 2 из 10 возможных)")
// 	}
// 	if(p > 20 && p <= 40){
// 		return alert("Неплохо. (твоя оценка 4 из 10 возможных)")
// 	}
// 	if(p > 40 && p <= 60){
// 		return alert("Можно и получше! (твоя оценка 6 из 10 возможных)")
// 	}
// 	if(p > 60 && p <= 80){
// 		return alert("Ты патался... (твоя оценка 8 из 10 возможых)")
// 	}
// 	if(p > 80 && p <=100){
// 		return alert("Попробуй еще раз. (твоя оценка 10 из 10)")
// 	}
	
// }

// loadTests()