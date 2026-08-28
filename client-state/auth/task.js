document.addEventListener('DOMContentLoaded', () => {
  const userIdEl = document.getElementById('user_id')
  const welcomeWindow = document.querySelector('.welcome');
  const form = document.getElementById('signin__form');


  const savedId = localStorage.getItem('user_id');

  if (savedId) {
    userIdEl.innerText = savedId;
    welcomeWindow.classList.add('welcome_active');
    form.parentElement.style.display = 'none';
  }

  form.addEventListener('submit', (e) => {

    const login = form.querySelector('input[name="login"]').value;
    const password = form.querySelector('input[name="password"]').value;

    if (!login || !password) return;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        if (data.success) {
          const dataId = data.user_id; //сохранить в localStorage

          localStorage.setItem('user_id', dataId);
          userIdEl.innerText = dataId;
          welcomeWindow.classList.add('welcome_active');
          form.reset();

        } else {
          alert('Неверный логин/ пароль');
        }
      } else {
        console.error('ошибка запроса статус: ' + xhr.status)
      }
    };

    xhr.onerror = () => {
      console.log('не удалось связаться с сервером')
    };


    xhr.send(JSON.stringify({ login, password }));
  });
});

