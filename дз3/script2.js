// дом
var house={
	Apartment:[{
					area: 30,
					floor: 1,
					number: 1,
					person:[{
						name:"Max",
						age:9
					},{
						name:"Lena",
						age:14
					},{
						name:"Mr.Thompson",
						age:38
					},{
						name:"Mrs.Thompson",
						age:40
					}]
				},
				{
					area: 25,
					floor: 2,
					number: 2,
					person:[{
						name:"Anton",
						age: 24
					},
					{
						name:"Vena",
						age:24
					}]
				},
				{
					area: 15,
					floor: 3,
					number: 3,
					person:[{
						name: "Mr.Grey",
						age: 64
					}]
				},
				{
					area: 15,
					floor: 3,
					number: 4,
					person:[{
						name:"Oleg",
						age:19
					}]
				},
				{
					area: 28,
					floor: 4,
					number: 5,
					person:[{
						name: "Alex",
						age: 27
					},{
						name:"Stiven",
						age:23
					},{
						name:"Jim",
						age:30
					},{
						name:"Doroti",
						age:25
					},{
						name:"Konor",
						age: 21
					}]
				}],

				//a

				add: function(number, name, age){
					this.Apartment[number-1]?this.Apartment[number-1].person.push({name,age}):
					console.log("Wrong number");
				},

				delete: function(number,name){
					this.Apartment[number-1]?this.Apartment[number-1].person=this.Apartment[number-1].person.filter(elem=>elem.name!=name)
					:console.log("Wrong number");
				},

				//b

				clean: function(number){
					this.Apartment[number-1]?this.Apartment[number-1].person=[]
					:console.log("Wrong number");
				},

				//c

				communal: function(cost){
					var totalArea=0;
					for(var i=0;i<this.Apartment.length;i++){
						totalArea+=this.Apartment[i].area;
					};

					const personalCost=[];
					this.Apartment.forEach(el=>personalCost.push(el.area/totalArea*cost/(el.person.filter(el=>el.age>=18)).length));

					for(var i in this.Apartment){
						this.Apartment[i].person.forEach(el=>(el.age>=18)?
							console.log(`${Number(i)+1}-${el.name}-$${personalCost[i].toFixed(2)}`):'');
					}
				}
};

house.add(5, "Klar", 31);
//house.delete(3, "Mr.Grey")
//house.clean(2);
house.communal(3000);
console.log(house)