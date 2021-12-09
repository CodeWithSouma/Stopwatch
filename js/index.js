const display = document.getElementById('display');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

    var running = false;
    var miliSec = 0;
    var hr = 0;
    var min = 0;
    var sec = 0;
    var myInterval;
    
    function calculateDuration(){
        if(miliSec === 10){
            miliSec = 0;
            sec++;
        }
        
        if(sec === 60){
            sec = 0;
            min++;
        }
    
        if(min === 60){
            min = 0;
            hr++;
        }
    }
    
    function updateDuration(){
        calculateDuration();
        display.innerHTML = `${format(hr)} : ${format(min)} : ${format(sec)} : ${format(miliSec)}`;
    }
    
    function format(n){
        return n > 9 ? "" + n: "0" + n;
    }

    var start = function(){
        if(running){
            console.log('Stopwatch is already running.');
            return;
        }

        running = true;
        myInterval = setInterval(()=>{
            miliSec++;
            updateDuration();
        },100);
    }

    var stop = function(){
        if(!running){
            console.log('Stopwatch is already stoped.');
            return;
        }

        running = false;
        clearInterval(myInterval);
    }

    var reset = function(){
        running = false;
        if(myInterval !== 'undefined')
            clearInterval(myInterval);
        running = false;
        miliSec = 0;
        hr = 0;
        min = 0;
        sec = 0;
        display.innerHTML = "00 : 00 : 00 : 00";
    }
    


startButton.addEventListener("click", function() {
    start();
});

stopButton.addEventListener("click", function() {
   stop();
});

resetButton.addEventListener("click", function() {
   reset();
});

