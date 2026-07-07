const timerElem = document.getElementById("timer");
let timeToEnd = Number(timerElem.textContent);

function decrease() {
    timeToEnd--;
    timerElem.textContent = timeToEnd; //перезаписываем уменьшенное время
if (timeToEnd === 0) {
clearInterval(intervalId);
alert("Вы победили в конкурсе!");
}
}

const intervalId = setInterval(decrease, 1000);