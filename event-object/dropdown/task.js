/*const initialList = document.querySelector(".dropdown__list");
const dropdownValue = document.querySelector(".dropdown__value");
const optionsList = document.querySelectorAll(".dropdown__item");
const links = document.querySelectorAll(".dropdown__link");


dropdownValue.onclick = function() {
initialList.classList.toggle("dropdown__list_active");
};

links.forEach((option, index) => {

    option.addEventListener("click", (event) => {
    event.preventDefault();
   initialList.classList.remove("dropdown__list_active"); 
   dropdownValue.textContent = option.textContent;
})
}); */


document.addEventListener("click", (evt) => {
    const value = evt.target.closest(".dropdown__value");
    if (!value) return;

    const dropdown = value.closest(".dropdown");
    const list = dropdown.querySelector(".dropdown__list");
    list.classList.toggle("dropdown__list_active");
});

document.addEventListener("click", (evt) => {
    const link = evt.target.closest(".dropdown__link"); //evt.target - эл-т на котором произошел клик
    if (!link) return;
    
    evt.preventDefault();

    const dropdown = link.closest(".dropdown");
    const value = dropdown.querySelector(".dropdown__value");
    value.textContent = link.textContent;

    const linkList = dropdown.querySelector(".dropdown__list");
    linkList.classList.remove("dropdown__list_active");

});