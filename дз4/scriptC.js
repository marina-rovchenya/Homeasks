//Дисперсия переданного числового ряда

const arr=(new Array(10))
.fill(0)
.map(x=>Math.ceil(Math.random()*20))

var sum=0;
var sumkv=0;
for(var i=0;i<arr.length;i++){
	sum+=arr[i];
	sumkv+=arr[i]**2;
}
var s=sum/arr.length;
var sa=sumkv/arr.length;
var D=sa-s;

console.log(arr)
console.log(s)
console.log(sa)
console.log(D)