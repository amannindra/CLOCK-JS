/*const currentDate = new Date();
var currentDayOfMonth = currentDate.getDate();
var currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
var currentYear = currentDate.getFullYear();

var currentMinute = currentDate.getMinutes();
var currentHour = currentDate.getHours();
var currentSecond = currentDate.getSeconds();
var date = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
var time = currentHour + ":" + currentMinute + ":"  + "0"+ currentSecond;
if(currentSecond < 10){
    time = currentHour + ":" + currentMinute + ":"  + "0"+ currentSecond;
}
if(currentMinute < 10){
    time = currentHour + ":" +"0"+ currentMinute + ":" + currentSecond;
}
var printDate = document.getElementById("datePrint");
var printTime = document.getElementById("timePrint");

printTime.innerText = time;
printDate.innerText = date;*/

const printDate = document.getElementById("datePrint");
const printTime = document.getElementById("timePrint");
function numberToMonth(number) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[number];
}
setInterval(() => {
  currentDate = new Date();
  currentDayOfMonth = currentDate.getDate();
  currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  currentYear = currentDate.getFullYear();
  currentMinute = currentDate.getMinutes();
  currentHour = currentDate.getHours();
  currentSecond = currentDate.getSeconds();
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }
  if (currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }
  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }
  if(currentHour < 13){
    time = currentHour + ":" + currentMinute + " AM";
  }
  else{
    currentHour -= 12;
    time = currentHour + ":" + currentMinute + " PM";
  }
  console.log(time);
  date = numberToMonth(currentMonth) + " " + currentDayOfMonth + ", " + currentYear;
  printDate.innerText = "Date: " + date;
  printTime.innerText = "Time: " + time;
}, 1000);
