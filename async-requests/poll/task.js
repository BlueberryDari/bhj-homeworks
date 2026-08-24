//import { jsxs } from "react/jsx-runtime";

const fetchPollData = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const questionnaireData = JSON.parse(xhr.responseText);
      callback(null, questionnaireData);
    } else {
      callback(new Error(`ошибка запроса, статус ${xhr.status}`), null);
    }
  }
  xhr.onerror = () => {
    callback(new Error('ошибка'), null);
  }
  xhr.send();

}



const renderPollMarkup = (questionnaireData) => {
  const pollBox = document.querySelector('.poll');
  const pollQuestionEl = document.querySelector('.poll__title');
  const pollAnswersBox = document.querySelector('.poll__answers');


  const question = questionnaireData.data.title;
  const answers = questionnaireData.data.answers;
  pollQuestionEl.textContent = question;
  pollAnswersBox.innerHTML = '';


  for (const index in answers) { //index - ключ, не значение, строка, в массиве №эл-та
    const answer = answers[index];
    const btnOption = document.createElement('button');
    btnOption.classList.add('poll__answer');
    btnOption.textContent = answer;

    pollAnswersBox.appendChild(btnOption);

    btnOption.addEventListener('click', () =>
      alert("Спасибо, ваш голос засчитан!")
    )
  }
};

const loadAndRender = (url) => {
  fetchPollData(url, (err, questionnaireData) => {
    if (err) {
      console.log(err);
      const titleEl = document.getElementById('poll__title');
      if (titleEl) {
        titleEl.textContent = "Опрос не загружен";
      }
      return;

    }
    renderPollMarkup(questionnaireData);
  });
}


const init = () => {
  loadAndRender('https://students.netoservices.ru/nestjs-backend/poll');
};

document.addEventListener('DOMContentLoaded', init);

