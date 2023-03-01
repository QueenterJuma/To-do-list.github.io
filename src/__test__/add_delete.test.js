/**
 * @jest-environment jsdom
 */
import { addTask } from '../index';

test("Add one new item to the list", () => {
  document.body.innerHTML =
    "<div>" + '  <ul id="taskList"></ul>' + "</div>";
  addTask('test');
  const list = document.querySelectorAll("#taskList li");
  expect(list).toHaveLength(1);
});