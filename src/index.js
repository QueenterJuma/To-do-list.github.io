import './style.css';

const taskList = document.getElementById('taskList');

const tasks = [
  {
    index: 1,
    name: 'Reading book',
    completed: false,
  },
  {
    index: 2,
    name: 'Meditating',
    completed: false,
  },
  {
    index: 3,
    name: 'Riding bycicle',
    completed: false,
  },
  {
    index: 4,
    name: 'Meeting',
    completed: false,
  },
  {
    index: 5,
    name: 'Coding',
    completed: false,
  },
];

const renderTaskList = () => {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.className = 'task';
    taskElement.draggable = true;
    taskElement.dataset.index = task.index;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;

    const taskLabel = document.createElement('label');
    taskLabel.textContent = task.name;

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.type = 'button';
    taskDeleteButton.textContent = 'Delete';

    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(taskLabel);
    taskElement.appendChild(taskDeleteButton);

    taskList.appendChild(taskElement);
  });
};
renderTaskList();
