import './programs.css'
//Javascript for hamburger menu
const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener('click',() =>{
    menu.classList.toggle("hidden");
})


//for the countdown
let countDownDate = new Date ("Dec 26, 2023 17:00:00").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (days < 10) {
        days = "0" + days;
    }

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    if (hours < 10) {
        hours = "0" + hours;
    }

    let minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let seconds = Math.floor((distance % (1000 * 60 )) / 1000 );
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);
