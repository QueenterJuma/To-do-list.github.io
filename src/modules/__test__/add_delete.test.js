/**
 * @jest-environment jsdom
 */

import {
  addTask, saveTasks, loadTasks, renderTaskList,
} from '../renderTask';

describe('Add and delete', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = '<div><ul id="taskList"></ul></div>';
    addTask('test');
    const list = document.querySelectorAll('#taskList li');
    expect(list).toHaveLength(1);
  });
  test('Delete one new item to the list', () => {
    document.body.innerHTML = '<div><ul id="taskList"></ul></div>';

    addTask('task 1');
    addTask('task 2');

    renderTaskList(loadTasks());
    const deleteBtn = document.getElementsByClassName('delete');
    deleteBtn[0].click();
    const list2 = document.querySelectorAll('#taskList li');
    expect(list2).toHaveLength(2);
  });
});

test('Delete one new item to the list', () => {
  document.body.innerHTML = '<div><ul id="taskList"></ul></div>';
  saveTasks([]);
  addTask('test');
  addTask('test2');
  renderTaskList(loadTasks());
  const deleteBtn = document.getElementsByClassName('delete');
  deleteBtn[0].click();
  const list2 = document.querySelectorAll('#taskList li');
  expect(list2).toHaveLength(1);
});
