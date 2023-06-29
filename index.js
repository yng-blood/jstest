let hrs=0;
let min=0;
let sec=0;

let timeInterval;

const display= document.getElementById('display');
const stopButton= document.getElementById('stop');
const startButton= document.getElementById('start');
const resetButton= document.getElementById('reset');

startButton.onclick=startTimer;
stopButton.onclick=stopTimer;
resetButton.onclick=resetTimer;

function startTimer(){
    timeInterval=setInterval(updateTimer,1000)
}
function stopTimer(){
    clearInterval(timeInterval);
}
function resetTimer(){
    clearInterval(timeInterval);
    hrs=0;
    sec=0;
    min=0;
    display.textContent='00:00:00'
}
function updateTimer(){
    sec++;
    if(sec>=60){
        min++;
        sec=0
    }
    if(min>=60){
        hrs++;
        min=0
    }
    display.textContent=`${timeformat(hrs)}:${timeformat(min)}:${timeformat(sec)}`
}

function timeformat(time){
    return time<10?`0${time}`:time
}