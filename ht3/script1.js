//объект бухгалтерия

var Company=[{
					name: "Ivan",
					age: 73,
					department: "Cleaning",
					salary: 400,
					experience: 5*12,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}-${this.experience}`);
					}
				},
				{
					name: "Vasya",
					age: 40,
					department: "Cleaning",
					salary: 300,
					experience: 8*12,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}-${this.experience}`);
					}
				},
				{
					name: "Lisa",
					age: 27,
					department: "Cleaning",
					salary: 200,
					experience: 1*12,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}-${this.experience}`);
					}
				},
				{
					name: "Artem",
					age: 31,
					department: "Sequrity",
					salary: 800,
					experience: 4*12,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}-${this.experience}`);
					}
				},
				{
					name: "Max",
					age: 39,
					department: "Sequrity",
					salary: 750,
					experience: 8*12,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}-${this.experience}`);
					}
				},
				{
					name: "Vitya",
					age: 38,
					department: "Sequrity",
					salary: 870,
					experience: 10*12,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}-${this.experience}`);
					}
				},
				{
					name: "Mike",
					age: 40,
					department: "Development",
					salary: 1000,
					experience: 11*12,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}-${this.experience}`);
					}
				},
				{
					name: "Kolya",
					age: 41,
					department: "Development",
					salary: 2000,
					experience: 15*12,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}-${this.experience}`);
					}
				}
				]

//a

var newLength=Company.push({
	name: "Oleg",
	age: 48,
	department: "Cleaning",
	salary: 100,
	experience: 18*12,
	print: function(){
		console.log(`${this.name}-${this.age}-${this.department}-${this.salary}-${this.experience}`);
	}
})

// function remove(name){
// 	this.Company[name]?this.Company=[]:console.log("Wrong")
// }
// Company.remove("Kolya")

//b

var sortedSalary=Company.sort((a,b)=>{
	return a.salary>b.salary
})
for(var i in Company)
{
	Company[i].print()
}

var sumSalary=0;
for(var i=0;i<Company.length;i++){
 	sumSalary+=Company[i].salary
}
console.log(sumSalary)

//с

var maxSalary=Company.reduce((prev,next)=>{
	return prev.salary>next.salary?prev:next
})
maxSalary.print()

var minSalary=Company.reduce((prev,next)=>{
 	return prev.salary<next.salary?prev:next
})
minSalary.print()


var avgSalary=Math.ceil(sumSalary/Company.length);
console.log(avgSalary)

//d

var development=Company.filter(el=>el.department=="Development")
var sumDevSalary=0;
for(var i=0;i<development.length;i++){
	sumDevSalary+=development[i].salary
}
for(var i in development){
	development[i].print()
}
console.log(sumDevSalary)

var avgDevSalary=Math.ceil(sumDevSalary/development.length)
console.log(avgDevSalary)

console.log(development.length)

var sumAgeDev=0;
for(var i=0;i<development.length;i++){
	sumAgeDev+=development[i].age
}
var avgAgeDev=Math.ceil(sumAgeDev/development.length)
console.log(avgAgeDev)

var maxExpDev=development.reduce((prev,curr)=>{
	return prev.experience>curr.experience?prev:curr
})
maxExpDev.print()


var cleaning=Company.filter(el=>el.department=="Cleaning")
var sumCleanSalary=0;
for(var i=0;i<cleaning.length;i++){
	sumCleanSalary+=cleaning[i].salary
}
for(var i in cleaning){
	cleaning[i].print()
}
console.log(sumCleanSalary)

var avgCleanSalary=Math.ceil(sumCleanSalary/cleaning.length)
console.log(avgCleanSalary)

console.log(cleaning.length)

var sumAgeClean=0;
for(var i=0;i<cleaning.length;i++){
	sumAgeClean+=cleaning[i].age
}
var avgAgeClean=Math.ceil(sumAgeClean/cleaning.length)
console.log(avgAgeClean)

var maxExpClean=cleaning.reduce((prev,curr)=>{
	return prev.experience>curr.experience?prev:curr
})
maxExpClean.print()


var sequrity=Company.filter(el=>el.department=="Sequrity")
var sumSeqSalary=0;
for(var i=0;i<sequrity.length;i++){
	sumSeqSalary+=sequrity[i].salary
}
for(var i in sequrity){
	sequrity[i].print()
}
console.log(sumSeqSalary)

var avgSeqSalary=Math.ceil(sumSeqSalary/sequrity.length)
console.log(avgSeqSalary)

console.log(sequrity.length)

var sumAgeSeq=0;
for(var i=0;i<sequrity.length;i++){
	sumAgeSeq+=sequrity[i].age
}
var avgAgeSeq=Math.ceil(sumAgeSeq/sequrity.length)
console.log(avgAgeSeq)

var maxExpSeq=sequrity.reduce((prev,curr)=>{
	return prev.experience>curr.experience?prev:curr
})
maxExpSeq.print()

//Никита +375292595040