//Медианное значение от переданного набора параметров

const m=[2,1,5,9,7]

.sort((a,b)=>a-b)

if (m.length%2!=0){
	var n=m.slice(m.length/2,1+m.length/2)
}
else alert("no")
	
console.log(m)
console.log(n)