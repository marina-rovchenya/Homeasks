const list1=document.getElementById("from")
const list2=document.getElementById("into")
const nmb=document.getElementById("number")
const res=document.getElementById("converted")
	
var currency=function(){
	res.innerHTML=Number(nmb.value*(list1.value/list2.value))
}	

list1.onchange=currency;
list2.onchange=currency;
nmb.onkeyup=currency;