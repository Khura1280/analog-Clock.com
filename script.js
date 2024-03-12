let hourHand = document.querySelector("#hr");
let minuteHand = document.querySelector("#min");
let secondHand = document.querySelector("#sec");

const runTimer = ()=>{
   var date = new Date();
     var hours = date.getHours()/12;
     var minutes = date.getMinutes()/60;
    var seconds = date.getSeconds()/60;

hourHand.style.transform="rotate("+hours*360 + "deg)"
minuteHand.style.transform="rotate("+minutes*360 + "deg)"
secondHand.style.transform="rotate("+seconds*360 + "deg)"

document.querySelector(".current-day").innerHTML = date.toDateString()
document.querySelector(".current-seconds").innerHTML = date.getSeconds();
}
setInterval(runTimer,1000)