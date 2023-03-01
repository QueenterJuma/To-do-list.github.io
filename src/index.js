import './style.css';
import {
  renderTaskList, saveTasks, loadTasks, updateIndex, addTask,
} from './modules/renderTask';
import clearCompletedTasks from './modules/clearComplete';

const taskList = document.getElementById('taskList');
const newTaskForm = document.getElementById('newTaskForm');
const clearCompletedButton = document.getElementById('clearCompleted');
let tasks = [];

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
    saveTasks(tasks);
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
    addTask(tasks, taskName);
    newTaskInput.value = '';
    newTaskInput.focus();
  }
});

clearCompletedButton.addEventListener('click', () => {
  tasks = clearCompletedTasks(tasks);
  updateIndex(tasks);
  saveTasks(tasks);
  renderTaskList(tasks);
});

taskList.addEventListener('dragstart', handleDragStart);
taskList.addEventListener('dragover', handleDragOver);
taskList.addEventListener('dragend', handleDragEnd);

tasks = loadTasks();
renderTaskList(tasks);
