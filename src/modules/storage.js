const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasks = () => {
  const tasksJson = localStorage.getItem('tasks');
  if (tasksJson) {
    return JSON.parse(tasksJson);
  }
  return [];
};

export { saveTasks, loadTasks };
