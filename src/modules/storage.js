const save = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

const loadTasks = () => {
  const tasksJson = localStorage.getItem('tasks');
  if (tasksJson) {
    return JSON.parse(tasksJson);
  }
  return [];
};

const updateIndex = (tasks) => {
  tasks.forEach((element, index) => {
    element.index = index + 1;
  });
  save(tasks);
  return tasks;
};

const swapIndex = (newIndex, oldIndex) => {
  const tasks = loadTasks();
  tasks.splice(newIndex, 0, tasks.splice(oldIndex, 1)[0]);
  updateIndex(tasks);
  return tasks;
};

const deleteCompletedTasks = () => {
  const tasks = loadTasks().filter((task) => !task.completed);
  return updateIndex(tasks);
};

const saveTasks = (tasks) => save(tasks);

const saveTask = (name) => {
  const tasks = loadTasks() || [];
  tasks.push({ index: tasks.length + 1, description: name, completed: false });
  save(tasks);
  return tasks;
};

const editTask = (index, value = '', context = 0) => {
  // context = 0 for edit decscription, 1 for status
  const tasks = loadTasks();
  if (context === 0) tasks[index].description = value;
  else if (context === 1) tasks[index].completed = !tasks[index].completed;
  save(tasks);
  return tasks;
};

export {
  saveTask,
  saveTasks,
  loadTasks,
  editTask,
  updateIndex,
  swapIndex,
  deleteCompletedTasks,
};
