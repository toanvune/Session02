let container = document.createElement("div");
document.body.appendChild(container);

let countDownTime = document.createElement("input");
countDownTime.type = "number";
countDownTime.placeholder = "nhap so phut dem nguoc";
container.appendChild(countDownTime);

let btnCountDown = document.createElement("button");
btnCountDown.innerHTML = "count down";
btnCountDown.addEventListener("click",function(e) {
    startTimer();
});
container.appendChild(btnCountDown);

let lblCountDown = document.createElement("p");
container.appendChild(lblCountDown);

function startTimer() {
    let timer = parseInt(countDownTime.value)*60;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        lblCountDown.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            lblCountDown.innerHTML = 'time up!';
        }
    }, 1000);
}

function oclock() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

