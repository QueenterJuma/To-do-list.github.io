const taskList = document.getElementById("taskList");
const renderTaskList = (tasks) => {
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
    taskLabel.textContent = task.description;

    const taskinput = document.createElement("input");
    taskinput.type = "text";
    taskinput.className = "disable";

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.type = "button";
    taskDeleteButton.innerHTML = `<i class="fa fa-trash"></i>`;
    taskDeleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      updateIndex(tasks);
      saveTasks();
      renderTaskList();
    });
    const taskeditButton = document.createElement("button");
    taskeditButton.type = "button";
    taskeditButton.innerHTML = `<i class="fa fa-pencil"></i>`;
    const tasksaveButton = document.createElement("button");
    tasksaveButton.type = "button";
    tasksaveButton.innerHTML = `<i class="fa fa-floppy-o"></i>`;
    tasksaveButton.className = "disable";

    taskeditButton.addEventListener("click", () => {
      tasksaveButton.classList.remove("disable");
      taskinput.classList.remove("disable");
      taskinput.value = taskLabel.textContent;
      taskLabel.classList.add("disable");
      taskeditButton.classList.add("disable");
    });

    tasksaveButton.addEventListener("click", () => {
      tasksaveButton.classList.add("disable");
      taskinput.classList.add("disable");
      taskLabel.textContent = taskinput.value;
      tasks[index].description = taskinput.value;
      taskLabel.classList.remove("disable");
      taskeditButton.classList.remove("disable");
      saveTasks();
      renderTaskList();
    });

    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(taskLabel);
    taskElement.appendChild(taskinput);
    taskElement.appendChild(taskeditButton);
    taskElement.appendChild(tasksaveButton);
    taskElement.appendChild(taskDeleteButton);

    taskList.appendChild(taskElement);
  });
  return tasks;
};
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
const updateIndex = (tasks) => {
  tasks.forEach((element, index) => {
    element.index = index + 1;
  });
};
export { renderTaskList, saveTasks };
