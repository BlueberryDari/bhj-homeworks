const counter = document.querySelector("#clicker__counter");
const cookieImg = document.querySelector("#cookie");
const speedCounter = document.querySelector("#speed__counter");
let lastClickTime = new Date(); // сейчас время

cookieImg.addEventListener('click', () => {
const now = new Date();  // засекли момент клика
const timeDifference = (now - lastClickTime) / 1000; //новая дата минус дата клика прошлого цикла
const speed = (1 / timeDifference).toFixed(1); // 1секунду делим на миллисекунды между кликами
speedCounter.textContent = speed;
lastClickTime = now; // обновили момент последнего клика

let clickCounter = Number(counter.textContent)++;

counter.textContent = counterContent;

If (clickCounter % 2 === 0) {
cookieImg.width *= 1.5;
cookieImg.height *= 1.5;
} else {
cookieImg.width /= 1.5;
cookieImg.height /= 1.5; 
};

});


