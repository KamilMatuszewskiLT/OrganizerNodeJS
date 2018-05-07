function showDate(id){
var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

document.getElementById(id).innerHTML = (month < 10 ? (day+"."+"0"+month+"."+year) : (day+"."+month+"."+year));
}

function showTime(){
    var today = new Date();
    document.getElementById("time").innerHTML = today.toLocaleTimeString();
   setTimeout(function(){
       showTime();
   },500);
}
