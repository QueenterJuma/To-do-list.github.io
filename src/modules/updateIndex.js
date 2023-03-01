const updateIndex = (tasks) => {
  tasks.forEach((element, index) => {
    element.index = index + 1;
  });
  return tasks;
};
export default updateIndex;