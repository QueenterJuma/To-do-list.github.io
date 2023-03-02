/**
 * @jest-environment jsdom
 */

import {
  addTask,
  saveEdit,
  saveTasks,
  changeStatus,
  clearCompletedTasks,
  loadTasks,
} from "../renderTask";
import { swapIndex } from "../storage";

describe("Add and delete", () => {
  document.body.innerHTML = '<div><ul id="taskList"></ul></div>';

  test("Add one new item to the list", () => {
    addTask("test");
    const list = document.querySelectorAll("#taskList li");
    expect(list).toHaveLength(1);
  });

  test("Edit added item to the list", () => {
    saveEdit(0, "test edited");
    expect(loadTasks()[0].description).toBe("test edited");
  });

  test("Change status of added item to the list", () => {
    addTask("test2");
    changeStatus(1);
    expect(loadTasks()[1].completed).toBe(true);
  });

  test("Clear all completed tasks from list", () => {
    saveTasks([]);
    addTask("test 1");
    addTask("test 2");
    changeStatus(0);
    clearCompletedTasks();
    expect(loadTasks().length).toBe(1);
  });
});
