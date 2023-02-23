import './style.css';

const taskList = document.getElementById('taskList');
const newTaskForm = document.getElementById('newTaskForm');
const clearCompletedButton = document.getElementById('clearCompleted');
let tasks = [];
const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const renderTaskList = () => {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.className = 'task';
    taskElement.draggable = true;
    taskElement.dataset.index = index;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener('change', (event) => {
      tasks[index].completed = event.target.checked;
      saveTasks();
      renderTaskList();
    });

    const taskLabel = document.createElement('label');
    taskLabel.textContent = task.name;

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.type = 'button';
    taskDeleteButton.textContent = 'Delete';
    taskDeleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTaskList();
    });

    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(taskLabel);
    taskElement.appendChild(taskDeleteButton);

    taskList.appendChild(taskElement);
  });
};

const loadTasks = () => {
  const tasksJson = localStorage.getItem('tasks');
  if (tasksJson) {
    tasks = JSON.parse(tasksJson);
  }
};

const addTask = (name) => {
  const task = { name, completed: false };
  tasks.push(task);
  saveTasks();
  renderTaskList();
};

const clearCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTaskList();
};

const handleDragStart = (event) => {
  event.target.classList.add('dragging');
};

const handleDragOver = (event) => {
  event.preventDefault();
  const taskElement = event.target.closest('.task');
  const draggingElement = document.querySelector('.dragging');
  if (taskElement && draggingElement && taskElement !== draggingElement) {
    const taskElementRect = taskElement.getBoundingClientRect();
    const dragY = event.clientY - taskElementRect.top;
    const isAfter = dragY > taskElementRect.height / 2;
    taskList.insertBefore(
      draggingElement,
      isAfter ? taskElement.nextSibling : taskElement,
    );
    const newIndex = Array.from(taskList.querySelectorAll('.task')).indexOf(
      draggingElement,
    );
    const oldIndex = draggingElement.getAttribute('data-index');
    tasks.splice(newIndex, 0, tasks.splice(oldIndex, 1)[0]);
    saveTasks();
  }
};

const handleDragEnd = (event) => {
  event.target.classList.remove('dragging');
};

newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskInput = document.getElementById('newTask');
  const taskName = newTaskInput.value.trim();
  if (taskName) {
    addTask(taskName);
    newTaskInput.value = '';
    newTaskInput.focus();
  }
});

clearCompletedButton.addEventListener('click', () => {
  clearCompletedTasks();
});

taskList.addEventListener('dragstart', handleDragStart);
taskList.addEventListener('dragover', handleDragOver);
taskList.addEventListener('dragend', handleDragEnd);

loadTasks();
renderTaskList();
