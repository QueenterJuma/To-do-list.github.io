import { saveTasks, loadTasks } from './storage';
import updateIndex from './updateIndex';

const renderTaskList = (tasks) => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.className = 'task';
    taskElement.draggable = true;
    taskElement.dataset.index = task.index;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener('change', (event) => {
      tasks[index].completed = event.target.checked;
      saveTasks(tasks);
      renderTaskList(tasks);
    });

    const taskLabel = document.createElement('label');
    taskLabel.textContent = task.description;
    taskLabel.className = task.completed ? 'mark' : '';

    const taskinput = document.createElement('input');
    taskinput.type = 'text';
    taskinput.className = 'disable';
    taskinput.id = 'editfield';

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.type = 'button';
    taskDeleteButton.className = 'delete';
    taskDeleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    taskDeleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      updateIndex(tasks);
      saveTasks(tasks);
      renderTaskList(tasks);
    });
    const taskeditButton = document.createElement('button');
    taskeditButton.type = 'button';
    taskeditButton.innerHTML = '<i class="fa fa-pencil"></i>';
    const tasksaveButton = document.createElement('button');
    tasksaveButton.type = 'button';
    tasksaveButton.innerHTML = '<i class="fa fa-floppy-o"></i>';
    tasksaveButton.className = 'disable';

    taskeditButton.addEventListener('click', () => {
      tasksaveButton.classList.remove('disable');
      taskinput.classList.remove('disable');
      taskinput.value = taskLabel.textContent;
      taskinput.focus();
      taskLabel.classList.add('disable');
      taskeditButton.classList.add('disable');
    });

    tasksaveButton.addEventListener('click', () => {
      tasksaveButton.classList.add('disable');
      taskinput.classList.add('disable');
      taskLabel.textContent = taskinput.value;
      tasks[index].description = taskinput.value;
      taskLabel.classList.remove('disable');
      taskeditButton.classList.remove('disable');
      saveTasks(tasks);
      renderTaskList(tasks);
    });

    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(taskLabel);
    taskElement.appendChild(taskinput);
    taskElement.appendChild(taskeditButton);
    taskElement.appendChild(tasksaveButton);
    taskElement.appendChild(taskDeleteButton);

    taskList.appendChild(taskElement);
  });
};

const addTask = (tasks, name) => {
  const task = { index: tasks.length + 1, description: name, completed: false };
  tasks.push(task);
  saveTasks(tasks);
  renderTaskList(tasks);
};

export {
  renderTaskList, saveTasks, loadTasks, updateIndex, addTask,
};
