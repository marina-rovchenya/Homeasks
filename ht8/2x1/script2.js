const table=document.querySelector("tbody");
const row=table.children;

for(var i=0; i<row.length; i++){
	var col=row[i].children;
	for(var j=0; j<col.length; j++){
			col[j].addEventListener("mouseover",function(){
				this.style.backgroundColor="red";				
				var cell=this;
				var timer=setTimeout(function(){
					cell.style.backgroundColor="white"
				},3000)
			})
	}
}