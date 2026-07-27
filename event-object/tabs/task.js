const blocks = document.querySelectorAll(".tabs");

blocks.forEach(block => {
  const tabsCollection = document.querySelector(".tab");
  const contentsCollection = document.querySelector(".tab__content");

  tabsCollection.forEach((tab, index) => {

      tabsCollection.forEach(t => t.classList.remove(".tab_active"));
      contentsCollection.forEach(c => c.classList.remove(".tab__content_active"));

      tab.addEventListener("click", () => {

        tab.classList.add("tab_active");
        contentsCollection[index].add(".tab__content_active");
    });
  });
});
