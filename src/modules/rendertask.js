import {
  taskList, tasks,
} from "./task.js";

export const renderTaskList = () => {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.className = "task";
    taskElement.draggable = true;
    taskElement.dataset.index = index;

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener("change", (event) => {
      tasks[index].completed = event.target.checked;
      saveTasks();
      renderTaskList();
    });

    const taskLabel = document.createElement("label");
    taskLabel.textContent = task.name;

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.type = "button";
    taskDeleteButton.textContent = "Delete";
    taskDeleteButton.addEventListener("click", () => {
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
