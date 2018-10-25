//создать 30000 векторов с x y z [-10;10]
//найти векторы с координатами положительными и х от -1 до 1
//векторы с длиной от 0 до 3  корень из суммы квадратов координат 
//отсортировать по длине вектора по возрастанию или убыванию
//взять вторую половину
//вывести в вектор сумму полученного ряда

var arr=[];


for (var i=0;i<30000;i++){
	arr.push({
		x:Math.round(Math.random()*20-10),
		y:Math.round(Math.random()*20-10),
		z:Math.round(Math.random()*20-10)
	})
	
}
//console.log(arr)

var filtered=arr.filter(el=>{
	return el.x>=-1 && el.x<=1 && el.y>0 && el.z>0
})
//console.log(filtered)

.filter(el=>{
	var len=Math.sqrt(el.x**2+el.y**2+el.z**2);
	return len>=0&&len<=3
})
//console.log(filtered)


.sort((a,b)=>{
	var lenA,lenB;
	lenA=Math.sqrt(a.x**2+a.y**2+a.z**2);
	lenB=Math.sqrt(b.x**2+b.y**2+b.z**2);
	return lenA>lenB
})
//console.log(sorted)

var sliced=filtered.slice(filtered.length/2,filtered.length)
//console.log(sliced)

console.log(sliced.reduce((obj,next)=>{
	return {
		x:obj.x+next.x,
		y:obj.y+next.y,
		z:obj.y+next.z
	}
}))
//console.log(result)