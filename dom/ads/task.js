const intervalId = setInterval(changeText, 1000);
const rotatorBlocks = document.querySelectorAll(".rotator");



rotatorBlocks.forEach(rotator => {

const rotatorItems = document.querySelectorAll(".rotator__case");
if (rotatorBlocks.length === 0) return;
let current = 0;

const activeIndex = Array.from(rotator).findIndex(item => {
    item.classList.contains("rotator__case_active");
    });

if (activeIndex !== -1) {
    current = activeIndex;
}

rotatorItems[current].style.color = rotatorItems[current].dataset.color;
function switchToNext() {
    rotatorItems[current].classList.remove("rotator__case_active");

    current = (current++) % rotatorBlocks.length; //целочисленный остаток будет current, последний index ++ -остаток 0
    const nextItem = rotatorItems[current];
    nextItem.classList.add("rotator__case_active"); //теперь след эл-т активный, предыдущий не активный
    nextItem.style.color = nextItem.dataset.color;

setTimeout(switchToNext, nextItem.dataset.speed); // каждый раз запускаем timeout 1 раз, каждый раз вызывая ф-ю
}

setTimeout(switchToNext, rotatorItems[current].dataset.speed);
});


   