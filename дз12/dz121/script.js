const Routes={
	"#home":{
		path:"home.html"
	},
	"#converter":{
		path: "converter.html",
		handler: function(){
			var div = document.getElementById('text');
			const xhr = new XMLHttpRequest();
			xhr.open('GET', 'data.txt', true);
			xhr.onload = function(){
				div.innerHTML=this.responseText;
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
			}
			xhr.send(null);
		}
	},
	"#cod":{
		path: "shifrator.html",
		handler: function(){
				var div = document.getElementById('dep');
				const xhr = new XMLHttpRequest();
				xhr.open('GET', 'shifrator.txt', true);
				xhr.onload = function(){
					div.innerHTML = this.responseText;
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
				}
				xhr.send(null);
			}
	},
	"#time":{
		path: "timer.html",
		handler: function(){
			var div = document.getElementById('setTime')
			const xhr = new XMLHttpRequest();
			xhr.open('GET', 'timer.txt', true);
			xhr.onload = function(){
				div.innerHTML += this.responseText;
				var now=new Date()
				var deadline = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1)

				function getTime(endtime){
				  var t = Date.parse(endtime) - Date.parse(new Date());
				  var s = Math.floor( (t/1000) % 60 );
				  var m = Math.floor( (t/1000/60) % 60 );
				  var h = Math.floor( (t/1000/60/60) % 24 );
				  return {
				   'total': t,
				   'hours': h,
				   'minutes': m,
				   'seconds': s
				  };
				}

				function initializeClock(endtime){
					var clock = document.getElementById('clockdiv');
					var hoursSpan = clock.querySelector('.hours');
					var minutesSpan = clock.querySelector('.minutes');
					var secondsSpan = clock.querySelector('.seconds');
				  function updateClock(){
				    var x = getTime(endtime);
				    x.hours=checkTime(x.hours);
				    x.minutes=checkTime(x.minutes);
				    x.seconds=checkTime(x.seconds);
				    hoursSpan.innerHTML = x.hours;
				    minutesSpan.innerHTML = x.minutes;
				    secondsSpan.innerHTML = x.seconds;
				    
				    if(x.total<=0){
				      clearInterval(interval);
				    }
				  }
				  function checkTime(i){
				    if (i<10){
				      i="0"+i;
				    }
				    return i;
				  }

				  updateClock(); 
				  var interval = setInterval(updateClock,1000);
				}

				initializeClock(deadline);
			}
			xhr.send(null);
		}

	},
	"#moves":{
		path: "list.html",
		handler: function(){
			var div = document.getElementById('table');
			const xhr = new XMLHttpRequest();
			xhr.open('GET', 'list.txt', true);
			xhr.onload = function(){
				div.innerHTML += this.responseText;
				const table=document.querySelector("tbody");
				const row=table.children;

				for(var i=0; i<row.length; i++){
					var col=row[i].children;
					for(var j=0; j<col.length; j++){
							col[j].addEventListener("mouseover",function(){
								this.style.backgroundColor="darkmagenta";				
								var cell=this;
								var timer=setTimeout(function(){
									cell.style.backgroundColor="white"
								},1500)
							})
					}
				}
			}
			xhr.send(null);
		}
	}
}  //объект с маршрутами (если переходим поссылке открывается этот файл)

function refreshContainer(){
	const hash = location.hash; //открытый в данный момент 
	if( hash in Routes){
		const path = Routes[hash].path;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', path, true);
		xhr.onload = function(){
			onPageLoaded(this.responseText, hash);
		}
		xhr.send(null)
	}
}

function onPageLoaded(text,hash){
	const div = document.getElementById('container');
	div.innerHTML = text;
	if(typeof Routes[hash].handler=="function"){  //проверяем есть ли в пути такие элементы
		Routes[hash].handler();
	}
}

window.onhashchange = refreshContainer; //вызывается когда меняется hash (после #)
refreshContainer();  //вызывется принудительно первый раз и загружает ранее открытый hash