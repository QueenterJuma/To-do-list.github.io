import './style.css';

const taskList = document.getElementById('taskList');

const tasks = [
  {
    index: 1,
    description: 'Reading book',
    completed: false,
  },
  {
    index: 2,
    description: 'Meditating',
    completed: false,
  },
  {
    index: 3,
    description: 'Riding bycicle',
    completed: false,
  },
  {
    index: 4,
    description: 'Meeting',
    completed: false,
  },
  {
    index: 5,
    description: 'Coding',
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
    taskLabel.textContent = task.description;

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
