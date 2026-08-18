const products = document.querySelectorAll('.product');

const cartElBox = document.querySelector('.cart__products');

products.forEach(product => {
    const increaseBtn = product.querySelector('.product__quantity-control_inc');
    const decreaseBtn = product.querySelector('.product__quantity-control_dec');
    const addBtn = product.querySelector('.product__add');
    const productAmount = product.querySelector('.product__quantity-value');
    const productImg = product.querySelector('.product__image');
    let amount = Number(productAmount.innerText);

    increaseBtn.addEventListener('click', () => {
    amount ++;
    amountEl.innerText = amount;
    })
    
    decreaseBtn.addEventListener('click', () => {
      if (amount > 1) {
        amount --;
        amountEl.innerText = amount;
      }
    })
    
    addBtn.addEventListener('click', () => {
        const productId = product.dataset.id;
        const imgSrc = productImg.src;

        const foundProduct = Array.from(cartElBox.children).find(cartProduct => 
            cartProduct.dataset.id === productId)
        if (foundProduct) {
        const productCartCount = foundProduct.querySelector('.cart__product-count');
        const currentCount = Number(productCartCount.innerText);
        productCartCount.innerText = currentCount + amount;
    } else {
        //const productImg = product.querySelector('img').src;
        cartElBox.insertAdjacentHTML('afterBegin', 
            `<div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src="${imgSrc}">
                <div class="cart__product-count">${amount}</div>
            </div>`)

        }
      // добавить в корзину
    })

})