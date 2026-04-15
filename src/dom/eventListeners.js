import { addTodo, createTodo } from "../models/todo.js";
import { setTodos } from "../storage/storage.js";

function checkTodo(todos, e) {
  const id = e.target.dataset.id;
  if (!id) return;

  const todo = todos.find((todo) => String(todo.id) === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
  setTodos(todos);
}

function deleteTodo(todos, e) {
  const id = e.target.dataset.id;
  if (!id) return;

  const updatedTodos = todos.filter((todo) => String(todo.id) !== id);

  setTodos(updatedTodos);
}

function editTodo(todos, e) {

}

function expandTodo(todos, e) {}

function makeTodo() {
  const title = document.querySelector("#title").value;
  const desc = document.querySelector("#desc").value;
  const dueDate = document.querySelector("#dueDate").value;
  const priority = document.querySelector("#priority").value;
  const form = document.querySelector(".todo-form");

  if (!title) {
    alert("Title is required");
    return;
  }

  if (!desc) {
    alert("Description is required");
    return;
  }

  if (!dueDate) {
    alert("Date is required");
    return;
  }

  if (!priority) {
    alert("Priority is required");
    return;
  }

  const todo = createTodo(title, desc, dueDate, priority);
  addTodo(todo);
  form.reset();
}

export { checkTodo, deleteTodo, expandTodo, editTodo, makeTodo };
