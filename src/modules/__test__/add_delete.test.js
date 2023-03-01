/**
 * @jest-environment jsdom
 */

import { addTask, renderTaskList } from '../renderTask';

describe('Add and delete', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = '<div><ul id="taskList"></ul></div>';
    const tasks = [];
    addTask(tasks, 'test');
    const list = document.querySelectorAll('#taskList li');
    expect(list).toHaveLength(1);
  });
  test('Delete one new item to the list', () => {
    document.body.innerHTML = '<div><ul id="taskList"></ul></div>';
    const tasks = [];
    tasks.push({
      index: tasks.length + 1,
      description: 'test',
      completed: false,
    });
    tasks.push({
      index: tasks.length + 1,
      description: 'test2',
      completed: false,
    });
    renderTaskList(tasks);
    const deleteBtn = document.getElementsByClassName('delete');
    deleteBtn[0].click();
    const list2 = document.querySelectorAll('#taskList li');
    expect(list2).toHaveLength(1);
  });
});

test('Delete one new item to the list', () => {
  document.body.innerHTML = '<div><ul id="taskList"></ul></div>';
  const tasks = [];
  tasks.push({
    index: tasks.length + 1,
    description: 'test',
    completed: false,
  });
  tasks.push({
    index: tasks.length + 1,
    description: 'test2',
    completed: false,
  });
  renderTaskList(tasks);
  const deleteBtn = document.getElementsByClassName('delete');
  deleteBtn[0].click();
  const list2 = document.querySelectorAll('#taskList li');
  expect(list2).toHaveLength(1);
});
