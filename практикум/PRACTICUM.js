
const str=`abc@mail.ru,   +37526781,  abcda0, nfmc@gmail.com, +375335164,  alpha@gmail.com,dkvhdse@yandex.ru,  dsivjosi@yandex.ru,  iwf@yandex.ru`
const emails=str.split(',')
				.map(s=>s.trim())
				.filter(s=>(s.match(/[a-zA-Z][a-zA-Z0-9\.\-\_]+@[a-z][a-z0-9\-\_]*\.[a-z]{2,10}/g)!=null))
// a
const operators=[]
emails.forEach(email=>{
	let operator=email.split("@")[1];  //1 значит что мы берем первый элемент на котрые разбивается адрес и берем то что после собачки
	if(operator.indexOf(operator)!=-1){
		let inArray = false;
		operators.forEach(el => {
			if (el == operator){
				inArray = true;
			}
		})
		if (!inArray){
			operators.push(operator);
		}
	}
});


var sorted=operators.map(op=>{
	return{
		name: op,
		amount: emails.reduce((prev,curr)=>
			curr.indexOf(op)!=-1?prev+1:prev,0)
	};
})
.sort((a,b)=>a.amount<b.amount)


console.log(str)
console.log(emails)
console.log(operators)
console.log(sorted)

//b

var filtered=operators.map(op=>{

	const emailsWithOp=emails.filter(email=> email.split('@')[1] == op);
	console.log(emailsWithOp)

	const max=emailsWithOp.reduce((prev,next)=> prev.length>next.length?prev:next)
	console.log(max,max.length)

	const min=emailsWithOp.reduce((prev,next)=> prev.length<next.length?prev:next)
	console.log(min,min.length)

	const avg = emailsWithOp.reduce((prev,c) => prev + c).length / emailsWithOp.length;
	return {
		avg:avg
	}
})

console.log(filtered)

//c
const logins=[]
emails.forEach(email=>{
	let login=email.split("@")[0];
	if(login.indexOf(login)!=-1){
		let inArray = false;
		logins.forEach(el => {
			if (el == login){
				inArray = true;
			}
		})
		if (!inArray){
			logins.push(login);
		}
	}
});
var symb=logins.join("")
var ar=symb.split("")

console.log(symb)

var result={}
ar.forEach(function(a){
	if (result[a]!=undefined)
		++result[a];
	else {
		result[a]=1;
	}
});
for(var key in result){
console.log(key+`=`+result[key]+`times`)
}
