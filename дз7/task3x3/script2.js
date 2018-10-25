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