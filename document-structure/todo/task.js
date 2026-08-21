const btn = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input')[0];
const tasksListEl = document.getElementById('tasks__list');

const restoredTasks = localStorage.getItem('tasks');

if (restoredTasks) {
    const restoredTasksArr = JSON.parse(restoredTasks);
    restoredTasksArr.forEach(restoredTask => {
      addTask(restoredTask);
    })
}

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!input.value.trim()) {
        return;
    }
   addTask (input.value);

  input.value = '';
  updateLocalStorage ();
});


tasksListEl.addEventListener('click', (evt) => {
  evt.preventDefault();
 if (evt.target.closest('.task__remove')) {
    evt.target.closest('.task').remove();
    updateLocalStorage ();
 }   
})

function updateLocalStorage() {
const tasksArray = Array.from(tasksListEl.children);
const tasksTexts = tasksArray.map(taskEl => {
    return taskEl.querySelector('.task__title').textContent.trim();
})

localStorage.setItem('tasks', JSON.stringify(tasksTexts));
}

function addTask(title) {
tasksListEl.insertAdjacentHTML('afterBegin', 
    `<div class="task">
        <div class="task__title">
            ${title}
        </div>
        <a href="#" class="task__remove">&times;</a>
     </div>`
    )
}

