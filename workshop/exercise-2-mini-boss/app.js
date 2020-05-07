// Section 1 - Current time

let body = document.querySelector('body');

let d = new Date();
d.getHours();
d.getMinutes();
d.getSeconds();

current.innerText = d;

// Section 2 - StopWatch

var ss = document.getElementsByClassName('stopwatch');

[].forEach.call(ss, function (s) {
  var currentTimer = 0;
  var interval = 0;
  var lastUpdateTime = new Date().getTime();
  var start = s.querySelector('button.start');
  var stop = s.querySelector('button.stop');
  var reset = s.querySelector('button.reset');
  var mins = s.querySelector('span.minutes');
  var secs = s.querySelector('span.seconds');
  var cents = s.querySelector('span.centiseconds');

  start.addEventListener('click', startTimer);
  stop.addEventListener('click', stopTimer);
  reset.addEventListener('click', resetTimer);

  function pad(n) {
    return ('00' + n).substr(-2);
  }

  function update() {
    var now = new Date().getTime();
    var dt = now - lastUpdateTime;

    currentTimer += dt;

    var time = new Date(currentTimer);

    mins.innerHTML = pad(time.getMinutes());
    secs.innerHTML = pad(time.getSeconds());
    cents.innerHTML = pad(Math.floor(time.getMinutes() / 10));

    lastUpdateTime = now;
  }

  function startTimer() {
    if (!interval) {
      lastUpdateTime = new Date().getTime();
      interval = setInterval(update, 1);
    }
  }

  function stopTimer() {
    clearInterval(interval);
    interval = 0;
  }

  function resetTimer() {
    stopTimer();

    currentTimer = 0;

    mins.innerHTML = secs.innerHTML = cents.innerHTML = pad(0);
  }
});

// Section 3 - Timer
let myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  let c = 10;

  function myClock() {
    document.getElementById('demo').innerHTML = --c;
    if (c == 0) {
      clearInterval(myTimer);
    }
  }
}
