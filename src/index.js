import './style.css';
import {
  renderTaskList,
  loadTasks,
  addTask,
  clearCompletedTasks,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
} from './modules/renderTask';

const taskList = document.getElementById('taskList');
const newTaskForm = document.getElementById('newTaskForm');
const clearCompletedButton = document.getElementById('clearCompleted');
let tasks = [];

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

clearCompletedButton.addEventListener('click', () => clearCompletedTasks());
console.log(taskList);
taskList.addEventListener('dragstart', handleDragStart);
taskList.addEventListener('dragover', (event) => handleDragOver(event, taskList, tasks));
taskList.addEventListener('dragend', handleDragEnd);

tasks = loadTasks();
renderTaskList(tasks);
