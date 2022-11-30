// Buttons
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');

// DOM elements of timer (h/m/s/ms)
let appendHours = document.getElementById('hours');
let appendMinutes = document.getElementById('minutes');
let appendSeconds = document.getElementById('seconds');
let appendTens = document.getElementById('tens');

// Interval for setInterval
let interval;

let hours = 00;
let minutes = 00;
let seconds = 00;
let tens = 00;

// Start
buttonStart.onclick = function() {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}

// Stop
buttonStop.onclick = function() {
    clearInterval(interval)
}

// Reset
buttonReset.onclick = function() {
    clearInterval(interval)
    resetTimer();
}

function startTimer() {
    tens++
    console.log('function started')
    
    if (tens <= 9) {
        appendTens.innerHTML = '0' + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        tens = 0;
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        appendTens.innerHTML = '0' + tens;
    }

    if (seconds <= 9) {
        appendSeconds.innerHTML = '0' + seconds;
    }

    if (seconds <= 60 && seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 60) {
        minutes++
        seconds = 0
        appendMinutes.innerHTML = "0" + minutes;
    }

    if (minutes <= 9) {
        appendMinutes.innerHTML = '0' + minutes;
    }
    
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }

    if (minutes > 60) {
        minutes = 0
        hours++
        appendHours.innerHTML = '0' + hours;
    }

    if (hours < 9) {
        appendHours.innerHTML = '0' + hours;
    }

    if (hours > 9) {
        appendHours.innerHTML = hours;
    }
}

function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    tens = 0;

    appendHours.innerHTML = '0' + hours;
    appendMinutes.innerHTML = '0' + minutes;
    appendSeconds.innerHTML = '0' + seconds;
    appendTens.innerHTML = '0' + tens;
}