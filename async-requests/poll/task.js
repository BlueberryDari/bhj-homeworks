//import { jsxs } from "react/jsx-runtime";

const urlRequest = 'https://students.netoservices.ru/nestjs-backend/poll';
const pollQuestionEl = document.querySelector('.poll__title');
const pollAnswersBox = document.querySelector('.poll__answers');
      
   
const loadAndRender = (url) => {
  fetchPollData(url, (err, questionnaireData) => {
    if (err) {
      console.log(err);
      return;

    }
  renderPollMarkup(questionnaireData);
  });
};


const fetchPollData = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const questionnaireData = JSON.parse(xhr.responseText);
      callback(null, questionnaireData);
    } else {
      callback(new Error(`ошибка обработки запроса, получили, но не то статус ${xhr.status}`), null); //в коллбэк передаём новые арг-ты(объект ошибки) 
    }
  };

  xhr.onerror = () => {
    callback(new Error('сервер не ответил, запрос не отправлен, вернулся с пустыми руками'), null);
  };

  xhr.send();
};


const renderPollMarkup = (questionnaireData) => {
  
  const question = questionnaireData.data.title;
  const answers = questionnaireData.data.answers;
  const pollId = questionnaireData.id;

  pollQuestionEl.textContent = question;
  pollAnswersBox.innerHTML = '';


  answers.forEach((answer, index) => { 
    
    const btnOption = document.createElement('button');
    btnOption.classList.add('poll__answer');
    btnOption.textContent = answer;
    
    btnOption.setAttribute('data-poll-id', pollId);
    btnOption.setAttribute('data-answer-index', index);
  
    btnOption.addEventListener('click', function() {
      handleVote(this); // кнопка сама, возможно, нужно не через стрелочную
    });

    pollAnswersBox.appendChild(btnOption);
  });
};


    function handleVote(buttonEl) {
      alert("Спасибо, ваш голос засчитан!");
      //loadAndRender(urlRequest);
      const voteId = buttonEl.getAttribute('data-poll-id');
      const answerIndex = buttonEl.getAttribute('data-answer-index');
      getStats(voteId, answerIndex, (err, statData) => {
        if (err) {
          console.error(err);
          loadAndRender(urlRequest);
          return;
        }
        
        renderStatMarkup(statData); 
        loadAndRender(urlRequest);
      });
    };


const getStats = (questionId, answerIndex, callback) => {
const xhr = new XMLHttpRequest();
const parametr = `vote=${questionId}&answer=${answerIndex}`;

xhr.open('POST',  urlRequest );
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = () => {
    if (xhr.status === 200) {
      const statData = JSON.parse(xhr.responseText);
      callback(null, statData);
    } else {
      callback(new Error(`ошибка POST статус ${xhr.status}`), null); //в колбэк передаем либо ошибку, либо данные
    }
  };
  xhr.onerror = () => {
    callback(new Error('ошибка, не достигли сервиса'), null);
  };
xhr.send (parametr);
};


const renderStatMarkup = (statData) => {
  pollAnswersBox.innerHTML = '';
  statData.stat.forEach(item => {
    const result = document.createElement('div');
    result.textContent = `${item.answer} - ${item.votes} голосов`;
    pollAnswersBox.appendChild(result);
  })
}


const init = () => {
  loadAndRender(urlRequest);
};

document.addEventListener('DOMContentLoaded', init);


/* при отображении DOM дерева, запускаем 1й вопрос loadAndRender(urlRequest) 
она приносит данные опросника, к-е передаются аргументом в renderPollMarkup, и отображает их в божеском виде renderPollMarkup
В этой ф-ии мы создаём волшебную кнопку, при нажатии записываем в неё id опроса, № ответа, вызаваем
handleVote. Здесь говорим спасибо, считываем дата-атрибуты, чтобы передать в getStats и отправить на сервер, и отображаем статистику
enderStatMarkup

*/