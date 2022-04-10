var days=02;
var hours=4;
var mins=9;
var secs=10;
var d=document.querySelector(".days");
var h=document.querySelector(".hours");
var m=document.querySelector(".mins");
var s=document.querySelector(".secs");

setInterval(() => {
  if(secs==0){
      mins--;
      secs=60;
  }
  secs--;
  if(mins==0){
      hours--;
      mins=60;
  }
  if(hours==0){
      days--;
      hours=24;
  }
  if(days==0){
      alert("Event Ended");
  }
  d.innerHTML=days;
  h.innerHTML=hours;
  m.innerHTML=mins;
  s.innerHTML=secs;
}, 1000);