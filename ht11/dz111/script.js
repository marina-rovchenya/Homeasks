const xhr = new XMLHttpRequest();
xhr.open("GET", "data.txt", true); 
xhr.onload = function(){ 
	document.body.innerHTML = this.responseText;
	var arr=this.responseText.split(' ');
	console.log(arr);

	for(var i=0; i<arr.length; i++) {
		arr[i]=+arr[i];
	}

	var avg=(arr.reduce((prev,curr)=>{
		return prev+curr;
	},0))/arr.length;

	console.log('average: '+ avg)
	var harm=arr.length/(arr.reduce((prev,curr)=>{
		return 1/curr+prev;
	},0))
	console.log('harmonic mean: '+ harm);
}
xhr.send(null); 