document.addEventListener('DOMContentLoaded', function () {
  const closeEl = document.querySelector('.modal__close');
  const popup = document.querySelector('.modal');

  function getCookie(cookieName) {
    const pairs = document.cookie.split('; ');
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].trim();
      const [key, value] = pair.split('=');
      if (key === cookieName) {
        return decodeURIComponent(value);
      }
    }

    return undefined;
  }

  if (!getCookie('closed')) {
    popup.classList.add('modal_active');
  } //если нет записи в куки, показываем закрывашку

  closeEl.addEventListener('click', () => {
    document.cookie = 'closed=true; max-age=31536000';
    popup.classList.remove('modal_active');
  }) //при нажатии на крестик запоминаем, что закрыли, скрываем
});





