import {
  saveTasks,
  saveTask,
  loadTasks,
  editTask,
  deleteCompletedTasks,
  swapIndex,
  updateIndex,
} from './storage';

const saveEdit = (index, value) => {
  renderTaskList(editTask(index, value)); // eslint-disable-line no-use-before-define
};

const changeStatus = (index) => renderTaskList(editTask(index, '', 1)); // eslint-disable-line no-use-before-define

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
    taskCheckbox.addEventListener('change', () => changeStatus(index));

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
      renderTaskList(updateIndex(tasks));
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
      taskLabel.classList.remove('disable');
      taskeditButton.classList.remove('disable');
      saveEdit(index, taskinput.value);
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

const addTask = (name) => {
  // console.log("addTask");
  renderTaskList(saveTask(name));
};

const clearCompletedTasks = () => {
  renderTaskList(deleteCompletedTasks());
};

const handleDragStart = (event) => {
  event.target.classList.add('dragging');
};

let draggedIndices = [];

const handleDragOver = (event, taskList) => {
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
    [].splice();
    const oldIndex = draggingElement.getAttribute('data-index');
    draggedIndices = [newIndex, oldIndex - 1];
  }
};

const handleDragEnd = (event) => {
  event.preventDefault();
  event.target.classList.remove('dragging');
  if (draggedIndices.length) {
    renderTaskList(swapIndex(draggedIndices[0], draggedIndices[1]));
    draggedIndices = [];
  }
};

export {
  renderTaskList,
  saveTasks,
  saveEdit,
  loadTasks,
  updateIndex,
  addTask,
  clearCompletedTasks,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  changeStatus,
};
