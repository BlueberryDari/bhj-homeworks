/*
//задача 1
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

const intervalId = setInterval(decrease, 1000);*/



//задача 2
/*
const timerElem = document.getElementById("timer");
let timeString = timerElem.textContent;
let timeArray = timeString.split(":");
let hours = timeArray[0];
let minutes = timeArray[1];
let seconds = timeArray[2];

let timeInSeconds = parseInt(hours)*3600 + parseInt(minutes)*60 + parseInt(seconds); //вычисляем общее кол-во секунд
function workTimer () {
    if (timeInSeconds === 0){
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
    }
    timeInSeconds-=1;
    
let hoursUpdated = Math.floor(timeInSeconds / 3600); //округляем, отбрасывая остаток
let minutesUpdated = Math.floor((timeInSeconds % 3600) / 60);
let secondsUpdated = timeInSeconds % 60; // всё, что не делится на 60 - секунды
let timeUpdated = `${String(hoursUpdated).padStart(2, "0")}:${String(minutesUpdated).padStart(2, "0")}:${String(secondsUpdated).padStart(2,"0")}`;
timerElem.textContent = timeUpdated;
}

const intervalId = setInterval(workTimer, 1000);
*/

// задача 3
const timerElem = document.getElementById("timer");
let timeString = timerElem.textContent;
let timeArray = timeString.split(":");
let hours = timeArray[0];
let minutes = timeArray[1];
let seconds = timeArray[2];

let timeInSeconds = parseInt(hours)*3600 + parseInt(minutes)*60 + parseInt(seconds); //вычисляем общее кол-во секунд, строку в число
function workTimer () {
    if (timeInSeconds === 0){
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
        //window.location.assign("https://i.postimg.cc/XJrb1bYn/2026-04-09-001.jpg");
        const link = document.createElement("a");
        link.href = "https://i.postimg.cc/XJrb1bYn/2026-04-09-001.jpg";
        link.download = "flowers.jpg";
        link.target = "_blank";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;

        //<a href="https://i.postimg.cc/XJrb1bYn/2026-04-09-001.jpg" download="flowers.jpg" target="_blank"></a>
    }
    timeInSeconds-=1;
    
let hoursUpdated = Math.floor(timeInSeconds / 3600); //округляем, отбрасывая остаток
let minutesUpdated = Math.floor((timeInSeconds % 3600) / 60);
let secondsUpdated = timeInSeconds % 60; // всё, что не делится на 60 - секунды
let timeUpdated = `${String(hoursUpdated).padStart(2, "0")}:${String(minutesUpdated).padStart(2, "0")}:${String(secondsUpdated).padStart(2,"0")}`; //добавляем нули, если однозачн
timerElem.textContent = timeUpdated;
}

const intervalId = setInterval(workTimer, 1000);


