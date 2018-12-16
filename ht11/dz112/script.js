const xhr = new XMLHttpRequest();
xhr.open("GET", "data.csv", true); 
xhr.onload = function(){  
	var arr=this.responseText.split('\n')
	.map(line=>line.split(', '))
	var countries=arr.map(el=>{
	    return {
	      	country:el[0],
			flag:el[1],
			cod:el[2],
	      	population:eval(el[3])
		}
 	})

 	var sorted=countries.sort((a,b)=>{
 		return a.population-b.population;
 	})
 	var table = document.querySelector('tbody')
	for (var i = 0; i < 12; i++){
	 	table.children[i].firstElementChild.innerHTML = countries[i].country;
 		table.children[i].children[1].innerHTML = countries[i].flag;
 		table.children[i].children[2].innerHTML = countries[i].cod;
  		table.children[i].children[3].innerHTML = countries[i].population;
	}
}
xhr.send(null);