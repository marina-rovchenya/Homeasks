//Среднее гармоническое от всех аргументов

var H=function(){
	var H=0;
	for(var i=0; i<arguments.length; i++){
		H+=1/arguments[i];
	}
	return H;
}
console.log(H(1,2,5))