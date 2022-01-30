const timer = document.getElementById("stopwatch");

//Variables
let min = 0;
let sec = 0;
let centisec = 0;
let lap = 0;
let minLap = 0;
let secLap = 0;
let centisecLap = 0;
let stopTime = true;

//Button functions
function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    myTimer = setInterval("timerCycle()", 10);
    myLapTimer = setInterval("lapCycle()", 10);
  }
}

function lapTimer() {
  if (stopTime == false) {
    let lapTimer =
      ("0" + minLap).slice(-2) +
      ":" +
      ("0" + secLap).slice(-2) +
      ":" +
      ("0" + centisecLap).slice(-2);
    let div = document.createElement("div");
    lap = lap + 1;
    div.innerHTML = "Lap " + ("0" + lap).slice(-2) + " " + lapTimer;
    document.getElementById("laps").appendChild(div);
    clearInterval(myLapTimer);
    minLap = 0;
    secLap = 0;
    centisecLap = 0;
    myLapTimer = setInterval("lapCycle()", 10);
  }
}

function resetTimer() {
  stopTime = true;
  clearInterval(myTimer);
  centisec = 00;
  sec = 00;
  min = 00;
  timer.innerHTML = "0" + min + ":" + "0" + sec + ":" + "0" + centisec;
  let parent = document.getElementById("laps");
  parent.innerHTML = "";
  lap = 0;
}

function stopTimer() {
  stopTime = true;
  clearInterval(myTimer);
  clearInterval(myLapTimer);
}

//Background function
function timerCycle() {
  if (stopTime === false) {
    centisec = centisec + 1;

    if (centisec === 100) {
      sec = sec + 1;
      centisec = 0;
    }

    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }
    timer.innerHTML =
      ("0" + min).slice(-2) +
      ":" +
      ("0" + sec).slice(-2) +
      ":" +
      ("0" + centisec).slice(-2);
  }
}

function lapCycle() {
  if (stopTime === false) {
    centisecLap = centisecLap + 1;

    if (centisecLap === 100) {
      secLap = secLap + 1;
      centisecLap = 0;
    }

    if (secLap === 60) {
      minLap = minLap + 1;
      secLap = 0;
    }
    let lapTimer =
      ("0" + min).slice(-2) +
      ":" +
      ("0" + sec).slice(-2) +
      ":" +
      ("0" + centisec).slice(-2);
  }
}
