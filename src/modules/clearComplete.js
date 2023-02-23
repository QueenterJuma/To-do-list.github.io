const clearCompletedTasks = (tasks) => {
  const arr = tasks.filter((task) => !task.completed);
  return arr;
};
export default clearCompletedTasks;