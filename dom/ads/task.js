const rotatorBlocks = document.querySelectorAll(".rotator");

rotatorBlocks.forEach(rotator => {

const rotatorItems = rotator.querySelectorAll(".rotator__case");
if (rotatorItems.length === 0) return;
let currentEl = rotator.querySelector(".rotator__case_active");
if (!currentEl) {
    currentEl = rotator.firstElementChild;
    currentEl.classList.add("rotator__case_active");
}

rotatorItems.forEach(item => {item.classList.remove("rotator__case_active")
}); //удаляем все активные, как примитивный способ не искать активный эл-т



currentEl.style.color = currentEl.dataset.color;

function switchToNext() {
    currentEl.classList.remove("rotator__case_active");
    currentEl.style.color = "";

    let nextEl = currentEl.nextElementSibling; 
     if (currentEl.nextElementSibling === null) {
        nextEl = rotator.firstElementChild;
    }

    nextEl.classList.add("rotator__case_active"); //теперь след эл-т активный, предыдущий не активный
    nextEl.style.color = nextEl.dataset.color;
    currentEl = nextEl;

setTimeout(switchToNext, Number(nextEl.dataset.speed) || 1000); // каждый раз запускаем timeout 1 раз, каждый раз вызывая ф-ю
}

setTimeout(switchToNext,Number(currentEl.dataset.speed) || 1000);
});


   