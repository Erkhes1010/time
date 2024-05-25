var time = document.getElementsByTagName("h1")[0];
var second = 0,
  minute = 0,
  hour = 0;
milesecond = 0;
var olEl = document.getElementsByTagName("ol")[0];
// setInterval -> kodiig hyzgaargui ajiluulna
function watch() {
  milesecond++;
  if (milesecond == 99) {
    milesecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  // ternary operator
  var s = second < 10 ? "0" + second : second;
  var m = minute < 10 ? "0" + minute : minute;
  var h = hour < 10 ? "0" + hour : hour;
  var ms = milesecond < 10 ? "0" + milesecond : milesecond;
  time.innerText = h + ":" + m + ":" + s + ":" + ms;
}
var up;
function start() {
  up = setInterval(watch, 10);
}
function reset() {
  stop();
  milesecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
  {
  }
  time.innerHTML = "00:00:00:00";
  stop();
  olEl.innerText = "";
}
function stop() {
  clearInterval(up);
}
function lap() {
  // document.createElement("tagName"); shineer tag uusgeh
  var liEl = document.createElement("li");
  console.log(liEl);
  liEl.innerText = time.innerText;
  // .append(varName) ; -> tag dotor tag oruulah
  olEl.append(liEl);
}
