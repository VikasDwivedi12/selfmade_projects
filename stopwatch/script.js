//Button elements
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

//Display elements
const hrsDisplay = document.getElementById('hrs');
const minDisplay = document.getElementById('min');
const secDisplay = document.getElementById('sec');

let hours = 0;
let minutes = 0;
let seconds = 0;
let startInterval;
let isRunning = false;

function resetTimer(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    hrsDisplay.innerText = `0${hours}`;
    minDisplay.innerText = `0${minutes}`;
    secDisplay.innerText = `0${seconds}`;
    clearInterval(startInterval);
    isRunning = false;
}

startBtn.addEventListener('click', function () {
    if(isRunning === false){
        startInterval = setInterval(function () {
            if(seconds < 10){
                secDisplay.innerText = `0${seconds}`;
            }
            else{
                secDisplay.innerText = seconds;
            }
            seconds++;
            //Code to handle minutes.
            if(seconds > 60){
                seconds = 0;
                secDisplay.innerText = `0${seconds}`;
                minutes++;
                if(minutes < 10){
                    minDisplay.innerText = `0${minutes}`;
                }
                else{
                    minDisplay.innerText = minutes;
                }
                //Code to handle hours.
                if(minutes > 59){
                    minutes = 0;
                    minDisplay.innerText = `0${minutes}`;
                    if(hours < 23){
                        hours++;
                        if(hours < 10){
                            hrsDisplay.innerText = `0${hours}`;
                        }
                        else{
                            hrsDisplay.innerText = hours;
                        }
                    }
                    else{
                        resetTimer();
                    }
                }
            }
        }, 1000)
    }
    isRunning = true;
})

stopBtn.addEventListener('click', function(){
    clearInterval(startInterval);
    isRunning = false;
})

resetBtn.addEventListener('click', resetTimer);