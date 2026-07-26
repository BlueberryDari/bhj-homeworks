class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  let intervalId = null;   
  let timeLimit = 0; 

  registerEvents() {
    
    
    document.addEventListener("keyup", (evt) => {
      if (evt.key.length > 1) return;
const necessarySymbol = this.currentSymbol.textContent.toLowerCase();

    const typedSymbol = evt.key.toLowerCase();

    if (necessarySymbol === typedSymbol) {
     this.success();
    } else {
      this.fail();
    }
    })
    
   

    function startTimer() {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const timerElem = document.getElementById("timer");
    const word = this.getWord();
    const wordSymbols = word.length;

    if (wordSymbols === 0) {
    console.warn("getWord() вернула пустую строку");
    timeLimit = 0;
    timerElem.textContent = "0";
    return;
    }
    timeLimit = wordSymbols;
    timerElem.textContent = timeLimit;

function decrease() {
    
    timeLimit--;
    timerElem.textContent = timeLimit; //перезаписываем уменьшенное время
if (timeLimit <= 0) {
clearInterval(intervalId);
intervalId = null;
timerElem.textContent = "0";
alert("Время вышло!!!(-_-)");
}
}

const intervalId = setInterval(decrease, 1000);
  };
     /* TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    startTimer();

  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

