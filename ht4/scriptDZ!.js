var people=[{
				name: "Alex",
				age: 18
			},{
				name: "Mike",
				age: 21
			},{
				name: "Oliver",
				age: 28,
			},{
				name: "Den",
				age:16
			},{
				name: "Max",
				age: 24
			}
]

var cities=["LA","Moscow","Minsk","Kiev","London"]

for(var i=0,j=0;i<people.length,j<cities.length;i++,j++){
		people[i].city=cities[j];
		console.log(i)
		people[i].print=function(){
						console.log(`${this.name}-${this.city}-${this.age}`);
					}
}
var result=people.sort((a,b)=>b.age>a.age)

for(var el in people){
	people[el].print()
}
