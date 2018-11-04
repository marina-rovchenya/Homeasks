const btn1=document.getElementById("shifr");
const btn2=document.getElementById("deshifr");
const text1=document.getElementById("1");
const text2=document.getElementById("2");

var eng=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
var numb=['1','2','3','4','5','6','7','8','9','01','02','03','04','05','06','07','08','09','001','002','003','004','005','006','007','008','009'];
var arr=[];
var arr2=[];
var newAr=[];
var newAr2=[];
console.log(eng)
console.log(numb)
btn1.addEventListener('click', function(){
	var coding=text1.value.split('')
	for(var i=0;i<coding.length;i++){
		var elem=eng.find(e=>e===coding[i]);

		arr.push(eng.indexOf(elem))
	}
	console.log(arr)
	for(var i=0; i<arr.length; i++){
		var newEl=numb.find(e=>arr[i]===numb.indexOf(e))
		newAr.push(newEl)
	}
	console.log(newAr)
	
	text2.value=newAr.join('')
	console.log(coding)
	text1.value=""
})

btn2.addEventListener('click', function(){
	console.log(text2.value)
	var decoding=text2.value.split('').map((el,i,ar)=>{
		return(ar[i]!=0 && ar[i+1]==0)||(ar[i]!=0 && ar[i+1]!=0) ? el+' ':el;
	}).join('').split(' ');
	for(var j=0; j<decoding.length; j++){
		var elem=numb.find(e=>e===decoding[j]);

		arr2.push(numb.indexOf(elem))
	}
	console.log(arr2)
	for(var i=0; i<arr2.length; i++){
		var newEl=eng.find(e=>arr2[i]===eng.indexOf(e))
		newAr2.push(newEl)
	}
	console.log(newAr2)
	text1.value=newAr2.join('')
	console.log(decoding)
	text2.innerHTML=""
})