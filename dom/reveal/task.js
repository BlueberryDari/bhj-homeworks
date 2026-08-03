const revealBoxes = document.querySelectorAll(".reveal");

function boxShowUp() {
const viewHeight = window.innerHeight;
revealBoxes.forEach(box => {
    if (box.classList.contains("reveal_active")) return;
    const rect = box.getBoundingClientRect();
    if (rect.top < viewHeight && rect.bottom > 0) {
        box.classList.add("reveal_active");
    } else {
        box.classList.remove("reveal_active");
    }
  })
};

window.addEventListener("scroll", boxShowUp);
boxShowUp();

