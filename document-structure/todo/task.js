const btn = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input')[0];
const tasksListEl = document.getElementById('tasks__list');
btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!input.value.trim()) {
        return;
    }
  tasksListEl.insertAdjacentHTML('afterBegin', 
    `<div class="task">
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
     </div>`
    )
  input.value = '';
});


tasksListEl.addEventListener('click', (evt) => {
  evt.preventDefault();
 if (evt.target.closest('.task__remove')) {
    evt.target.closest('.task').remove();
 }   
})