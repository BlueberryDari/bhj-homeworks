const winEl = document.getElementById("dead");
const loseEl = document.getElementById("lost");

let winCounter = 0;
let loseCounter = 0;

function getHole(index) {
return document.getElementById(`hole${index}`)
}



for (let i = 1; i <= 9; i++) {
    const holeElement = getHole(i);


holeElement.onclick = () => {

if (holeElement.classList.contains("hole_has-mole")) {
    winCounter++;
    winEl.textContent = winCounter;
    } else {
        loseCounter++;
        loseEl.textContent = loseCounter;
    }


    if (loseCounter === 5) {
    alert("Проигрыш")
    winCounter = 0;
    loseCounter = 0;
    winEl.textContent = 0;
    loseEl.textContent = 0;

} else if (winCounter === 10) {
    alert("Вы победили");
      winCounter = 0;
    loseCounter = 0;
    winEl.textContent = 0;
    loseEl.textContent = 0;
}

};
}