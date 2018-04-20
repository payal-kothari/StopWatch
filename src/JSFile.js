window.onload = function () {

    var secs = 0;
    var mins = 0;
    var buttonStart = document.getElementById('startBtn');
    var buttonStop = document.getElementById('stopBtn');
    var buttonReset = document.getElementById('resetBtn');
    var showMinutes = document.getElementById("minutes");
    var showSeconds = document.getElementById("seconds");
    var interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 1000);
    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }


    buttonReset.onclick = function(){
        clearInterval(interval);
        mins = 0;
        secs = 0;
        showMinutes.innerHTML = "0" + 0;
        showSeconds.innerHTML = "0" + 0;
    }


    function startTimer () {
        secs++;

        if(secs <= 9){
            showSeconds.innerHTML = "0" + secs;
        }else if(secs > 9){
            showSeconds.innerHTML = secs;

        }

        if (secs > 59) {
            mins++;
            secs = 0;
            showSeconds.innerHTML = "0" + 0;
        }

        if(mins <= 9 ){
            showMinutes.innerHTML = "0" + mins;

        }else if (mins > 9){
            showSeconds.innerHTML = mins;
        }

    }

}