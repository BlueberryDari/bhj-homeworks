

const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');
loader.classList.add('loader_active');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.onload = () => {
    if (xhr.status == 200) {
      const data = JSON.parse(xhr.responseText); //если загружен ответ, расшифровываем  
      const valute = data.response.Valute; //просто структура объекта ответа
      itemsContainer.innerHTML= '';

      for (const code in valute) {
        const currency = valute[code];

        const divEl = document.createElement('div');
        divEl.className = 'item';

        divEl.innerHTML = `
        <div class="item__code">
                    ${currency.CharCode}
                </div>
                <div class="item__value">
                    ${currency.Value.toFixed(4)}
                </div>
                <div class="item__currency">
                    ${currency.Name}.
                </div>
        `;
        
        itemsContainer.appendChild(divEl);
      }
    } else {
        console.error('ошибка запроса, статус', xhr.status);
    }
    loader.classList.remove('loader_active');
};

xhr.send();

   