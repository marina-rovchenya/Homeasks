//массив сотрудников
//по каждому департаменту человека с максимальной зарплатой, среднюю зарплату, средний возраст
//вывести среднюю зарплату среди максимумов по каждому департаменту

var Company={
	employees:[{
					name: "Ivan",
					age: 73,
					department: "Cleaning",
					salary: 400,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}`);
					}
				},
				{
					name: "Vasya",
					age: 40,
					department: "Cleaning",
					salary: 300,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}`);
					}
				},
				{
					name: "Lisa",
					age: 27,
					department: "Cleaning",
					salary: 200,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}`);
					}
				},
				{
					name: "Artem",
					age: 31,
					department: "Sequrity",
					salary: 800,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}`);
					}
				},
				{
					name: "Max",
					age: 39,
					department: "Sequrity",
					salary: 750,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}`);
					}
				},
				{
					name: "Vitya",
					age: 38,
					department: "Sequrity",
					salary: 870,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}`);
					}
				},
				{
					name: "Mike",
					age: 40,
					department: "Development",
					salary: 1000,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}`);
					}
				},
				{
					name: "Kolya",
					age: 41,
					department: "Development",
					salary: 2000,
					print: function(){
						console.log(`${this.name}-${this.age}-${this.department}-${this.salary}`);
					}
				}],
				dep1: function(){
					var development=this.employees.filter(el=>el.department=="Development")
					var sumDevSalary=0;
					for(var i=0;i<development.length;i++){
						sumDevSalary+=development[i].salary
					}

					var avgDevSalary=Math.ceil(sumDevSalary/development.length)
					console.log(avgDevSalary)

					var sumAgeDev=0;
					for(var i=0;i<development.length;i++){
						sumAgeDev+=development[i].age
					}
					var avgAgeDev=Math.ceil(sumAgeDev/development.length)
					console.log(avgAgeDev)

					var maxSalDev=development.reduce((prev,curr)=>{
						return prev.salary>curr.salary?prev:curr
					})
					maxSalDev.print()
					console.log(maxSalDev.salary)
				},
				dep2: function(){
					var cleaning=this.employees.filter(el=>el.department=="Cleaning")

					var sumCleanSalary=0;
					for(var i=0;i<cleaning.length;i++){
						sumCleanSalary+=cleaning[i].salary
					}

					var avgCleanSalary=Math.ceil(sumCleanSalary/cleaning.length)
					console.log(avgCleanSalary)

					var sumAgeClean=0;
					for(var i=0;i<cleaning.length;i++){
						sumAgeClean+=cleaning[i].age
					}
					var avgAgeClean=Math.ceil(sumAgeClean/cleaning.length)
					console.log(avgAgeClean)

					var maxSalClean=cleaning.reduce((prev,curr)=>{
						return prev.salary>curr.salary?prev:curr
					})
					maxSalClean.print()
					console.log(maxSalClean.salary)
				},
				dep3: function(){
					var sequrity=this.employees.filter(el=>el.department=="Sequrity")

					var sumSeqSalary=0;
					for(var i=0;i<sequrity.length;i++){
						sumSeqSalary+=sequrity[i].salary
					}

					var avgSeqSalary=Math.ceil(sumSeqSalary/sequrity.length)
					console.log(avgSeqSalary)

					var sumAgeSeq=0;
					for(var i=0;i<sequrity.length;i++){
						sumAgeSeq+=sequrity[i].age
					}
					var avgAgeSeq=Math.ceil(sumAgeSeq/sequrity.length)
					console.log(avgAgeSeq)

					var maxSalSeq=sequrity.reduce((prev,curr)=>{
						return prev.salary>curr.salary?prev:curr
					})
					maxSalSeq.print()
					console.log(maxSalSeq.salary)

				},
				avg: function(){
					var development=this.employees.filter(el=>el.department=="Development")
					var sumDevSalary=0;
					for(var i=0;i<development.length;i++){
						sumDevSalary+=development[i].salary
					}
					var maxSalDev=development.reduce((prev,curr)=>{
						return prev.salary>curr.salary?prev:curr
					})
					var cleaning=this.employees.filter(el=>el.department=="Cleaning")

					var sumCleanSalary=0;
					for(var i=0;i<cleaning.length;i++){
						sumCleanSalary+=cleaning[i].salary
					}
					var maxSalClean=cleaning.reduce((prev,curr)=>{
						return prev.salary>curr.salary?prev:curr
					})
					var sequrity=this.employees.filter(el=>el.department=="Sequrity")

					var sumSeqSalary=0;
					for(var i=0;i<sequrity.length;i++){
						sumSeqSalary+=sequrity[i].salary
					}
					var maxSalSeq=sequrity.reduce((prev,curr)=>{
						return prev.salary>curr.salary?prev:curr
					})
					var avgMaxSal=Math.ceil(maxSalDev.salary+maxSalClean.salary+maxSalSeq.salary)/3;
					console.log(avgMaxSal)
				}
	}

Company.dep1()
Company.dep2()
Company.dep3()
Company.avg()