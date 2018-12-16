function startTime(){
    var time=new Date();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('txt').innerHTML=h+":"+m+":"+s;
    t=setTimeout('startTime()',1000);
}
function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}
var ind=0;
const interval=setInterval(function(){
    var vis = document.getElementById('txt');
    if (ind==0){
        vis.style.color="Black";
        ind=1;
    }
    else{
        vis.style.color="Red";
        ind=0;
    }
},1000)
startTime()