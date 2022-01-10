let username = prompt("Lütfen isminizi giriniz : ")

document.getElementById("myName").innerHTML = username;

var today = new Date();
var day = today.getDay();

var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];


var dayname = days[day];

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("myClock").innerHTML = date.toLocaleTimeString() + " " +  dayname;
}