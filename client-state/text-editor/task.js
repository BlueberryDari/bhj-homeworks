const textArea = document.getElementById("editor");
textArea.addEventListener('input', () => { //change от input отличается потерей фокуса, вместо каждого нового символа
localStorage.setItem("text", JSON.stringify(textArea.value));
})

window.addEventListener('load', cb);

function cb() {
  const savedText = localStorage.getItem("text");
  if (savedText) {
textArea.value = JSON.parse(savedText)+ " перезагрузили и вернули";
}
  }

  const clearBtn = document.getElementById("clear-btn");
  
  clearBtn.onclick = () => {
    textArea.value = '';
    localStorage.clear();
  }