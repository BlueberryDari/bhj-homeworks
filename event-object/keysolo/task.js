class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.intervalId = null;
    this.timeLimit = 0;

    this.reset();
    this.registerEvents();
  }

  reset() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.wins = 0;
    this.losses = 0;

    this.winsElement.textContent = this.wins;
    this.lossElement.textContent = this.losses;

    this.setNewWord();
  }

  registerEvents() {
    document.addEventListener('keyup', (evt) => {
      if (evt.key.length > 1) {
        return;
      }

      const necessarySymbol = this.currentSymbol.textContent.toLowerCase();
      const typedSymbol = evt.key.toLowerCase();

      if (necessarySymbol === typedSymbol) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    this.wins += 1;
    this.winsElement.textContent = this.wins;

    if (this.currentSymbol && this.currentSymbol.classList.contains('symbol_current')) {
      this.currentSymbol.classList.remove('symbol_current');
    }

    if (this.currentSymbol) {
      this.currentSymbol.classList.add('symbol_correct');
    }

    this.currentSymbol = this.currentSymbol ? this.currentSymbol.nextElementSibling : null;

    if (this.currentSymbol) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (this.wins >= 10) {
      alert('Победа!');
      this.reset();
      return;
    }

    this.setNewWord();
  }

  fail() {
    this.losses += 1;
    this.lossElement.textContent = this.losses;

    if (this.losses >= 3) {
      alert('Вы проиграли!');
      this.reset();
      return;
    }

    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.startTimer();
  }

  startTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    const timerElem = document.getElementById('timer');
    if (!timerElem) {
      return;
    }

    const wordSymbols = this.wordElement.textContent.length;

    if (wordSymbols === 0) {
      console.warn('getWord() вернула пустую строку');
      this.timeLimit = 0;
      timerElem.textContent = '0';
      return;
    }

    this.timeLimit = wordSymbols;
    timerElem.textContent = this.timeLimit;

    const decrease = () => {
      this.timeLimit -= 1;
      timerElem.textContent = this.timeLimit;

      if (this.timeLimit <= 0) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        timerElem.textContent = '0';
        alert('Время вышло! (-_-)');
        this.reset();
      }
    };

    this.intervalId = setInterval(decrease, 1000);
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
      'javascript',
    ];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map((s, i) => `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`)
      .join('');

    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));
