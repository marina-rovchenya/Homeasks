const csv=`Англия,England,английский,63.5,Лондон,244820,39720
Россия,Russia,русский,142.5,Москва,17125191,10714
Франция,France,французский,64.6,Париж,547030,38477
Беларусь,Belarus,русский,9.3,Миснк,207595,4240
Германия,Germany,немецкий,82.7,Берлин,357021,44470
США,USA,английский,322.6,Вашингтон,9519437,59532
Китай,China,китайский,1393.8,Пекин,9984670,8827
Испания,Spain,испанский,47.1,Мадрид,504782,28157
Дания,Denmark,датский,5.7,Копенгаген,28950,42924,`

var arr=csv.split('\n')
	.map(line=>line.split(','))
	.map(e=>{
    return{
      ru_name:e[0],
			name:e[1],
			language:e[2],
      population:eval(e[3]),
      capital:e[4],
      area:eval(e[5]),
      avgIncome:eval(e[6])
		}
  })
console.log(csv)


console.log(arr)

//a
//i

var PopDens=[];
var PopDen;
for(var i=0;i<arr.length;i++){
  PopDen=Math.ceil(arr[i].area/arr[i].population);
  PopDens.push(PopDen)
}
console.log(PopDens)

for(var i=0,j=0;i<arr.length,j<PopDens.length;i++,j++){
  arr[i].popDen=PopDens[j];
  arr[i].print=function(){
    console.log(`${this.ru_name}-${this.popDen}`)
  }
}


var maxP=arr.reduce((prev,curr)=>{
  return prev.popDen>curr.popDen?prev:curr
})
maxP.print()

var minP=arr.reduce((prev,curr)=>{
  return prev.popDen<curr.popDen?prev:curr
})
minP.print()

//ii

var VVP=[];
var vvp;
for(var i=0;i<arr.length;i++){
  vvp=Math.ceil(arr[i].avgIncome*arr[i].population);
  VVP.push(vvp);
}
console.log(VVP)

for(var i=0,j=0;i<arr.length,j<VVP.length;i++,j++){
  arr[i].vvp=VVP[j];
  arr[i].say=function(){
    console.log(`${this.ru_name}-${this.vvp}`)
  }
}

var maxVVP=arr.reduce((p,c)=>{
  return p.vvp>c.vvp?p:c
})
maxVVP.say()

var minVVP=arr.reduce((p,c)=>{
  return p.vvp<c.vvp?p:c
})
minVVP.say()

//iii


var sorted=arr.sort((a,b)=>{
  return a.avgIncome-b.avgIncome
})
var AvgIncome=[];
for(var i=0;i<sorted.length;i++){
  sorted[i].med=function(){
    console.log(`${this.ru_name}-${this.avgIncome}`)
  }
  AvgIncome.push(sorted[i].avgIncome);
}
console.log(AvgIncome)

var n=sorted.slice(sorted.length/2,1+arr.length/2)

var obj=n.reduce((p,c)=>{
  p=c;
  return p;
},{})
obj.med()

//b

var languages=[]
languages=arr.map(el=>el.language)
console.log(languages)

var result={}
languages.forEach(function(a){
  if (result[a]!=undefined)
 		++result[a];
 	else {
 		result[a]=1;
 	}
 });
 for(var key in result){
 console.log(key+` `+result[key])
 }

//d


var countries=[];
countries=arr.filter(p=>(p.ru_name.length+1<p.name.length))
for(var i=0;i<countries.length;i++){
  countries[i].list=function(){
    console.log(`${this.ru_name}-${this.name}`)
  }
}
var obj1=countries.reduce((p,c)=>{
  p=c;
  return p;
},{})

obj1.list()
