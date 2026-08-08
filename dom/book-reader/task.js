const sizes = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");
const backgrounds = document.querySelectorAll("[data-bg-color]");
const fontColors = document.querySelectorAll("[data-text-color]");

sizes.forEach((size, index) => {
    //size.classList.remove("font-size_active");

    size.addEventListener('click', (evt)  => {
        evt.preventDefault(); // т.к. ссылки, нам нужно, чтобы не переходил браузер по ссылкам
        sizes.forEach(bth => btn.classList.remove("font-size_active"));

        size.classList.add("font-size_active");
        book.classList.remove("book_fs-big", "book_fs-small");

        const sizeValue = size.dataset.size;

        if (sizeValue === "small") {
          book.classList.add("book_fs-small");
        };

         if (sizeValue === "big") {
          book.classList.add("book_fs-big");
        };

    });
});

backgrounds.forEach(background => {
    

    background.addEventListener('click', (evt)  => {
        evt.preventDefault(); // т.к. ссылки, нам нужно, чтобы не переходил браузер по ссылкам
        backgrounds.forEach(bth => btn.classList.remove("color_active"));

        background.classList.add("color_active");
        book.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white");

        const bgValue = background.dataset.bgColor;

        if (bgValue) {
          book.classList.add(`book_bg-${bgValue}`);
        };

    });
});

fontColors.forEach(fontColor => {
    

    fontColor.addEventListener('click', (evt)  => {
        evt.preventDefault(); // т.к. ссылки, нам нужно, чтобы не переходил браузер по ссылкам
        fontColors.forEach(bth => btn.classList.remove("color_active"));

        fontColor.classList.add("color_active");
        book.classList.remove("book_color-gray", "book_color-whitesmoke", "book_color-black");

        const colorValue = fontColor.dataset.textColor;

        if (textColor) {
          book.classList.add(`book_color-${bgValue}`); // динамичная переменная в обратных ковычках, чтобы не прописывать каждый if
        };

    });
});