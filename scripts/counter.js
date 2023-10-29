let days = 137;
let hours = 19;
let minutes = 10;
let seconds = 59;

function updateCounter() {
    let daysElement = document.getElementById("days");
    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
                hours = 23;
                days--;

                if (days < 0) {
                    days = 0;
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                }
            }
        }
    }
    daysElement.querySelector("h1").innerHTML = days;
    hoursElement.querySelector("h1").innerHTML = hours;
    minutesElement.querySelector("h1").innerHTML = minutes;
    secondsElement.querySelector("h1").innerHTML = seconds;
}
setInterval(updateCounter, 1000);