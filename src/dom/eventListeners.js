import { addTodo, createTodo, updateTodos } from "../models/todo.js";
import { setTodos } from "../storage/storage.js";
import { renderTodos } from "./render.js";

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

function editTodo(todos, event) {
  const dialog = document.querySelector(".edit-dialog");
  const saveBnt = document.querySelector(".save-btn");
  const cancelBtn = document.querySelector(".edit-cancel-btn");

  const id = event.target.dataset.id;
  if (!id) return;

  dialog.showModal();

  const editedTodo = todos.find((todo) => String(todo.id) === id);

  const titleEl = document.querySelector("#edit-title");
  const descEl = document.querySelector("#edit-desc");
  const dueDateEl = document.querySelector("#edit-dueDate");
  const priorityEl = document.querySelector("#edit-priority");

  titleEl.value = editedTodo.title;
  descEl.value = editedTodo.desc;
  dueDateEl.value = editedTodo.dueDate;
  priorityEl.value = editedTodo.priority;

  saveBnt.addEventListener("click", () => {
    const title = titleEl.value;
    const desc = descEl.value;
    const dueDate = dueDateEl.value;
    const priority = priorityEl.value;

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
    updateTodos(editedTodo.id, title, desc, dueDate, priority);
    renderTodos();
  });

  cancelBtn.addEventListener("click", () => {
  dialog.close();
  });
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
