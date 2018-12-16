//корректность номера
var str=prompt("")
var exp=/\+375(\d{2})(\d{7})/
if (str.match(exp)!=null){
	alert(true);
}
else {alert(false);}