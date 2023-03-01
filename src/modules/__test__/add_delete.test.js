/**
 * @jest-environment jsdom
 */

import { addTask, renderTaskList } from "../renderTask";

describe("Add and delete", () => {
  test("Add one new item to the list", () => {
    document.body.innerHTML = "<div>" + '  <ul id="taskList"></ul>' + "</div>";
    let tasks = [];
    addTask(tasks, "test");
    const list = document.querySelectorAll("#taskList li");
    expect(list).toHaveLength(1);
  });
//Add code here
});
