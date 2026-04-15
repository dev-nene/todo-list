import { getTodos } from "../storage/storage.js";
import { addTodo, createTodo } from "../models/todo.js";

import {
  checkTodo,
  deleteTodo,
  expandTodo,
  editTodo,
  makeTodo,
} from "./eventListeners.js";

import { renderTodos } from "./render.js";

function initMainListener() {
  const mainDiv = document.querySelector(".main");

  mainDiv.addEventListener("click", (e) => {
    const todos = getTodos();

    if (e.target.matches('input[type="checkbox"]')) {
      checkTodo(todos, e);
      renderTodos();
      return;
    }

    if (e.target.matches(".delBtn")) {
      deleteTodo(todos, e);
      renderTodos();
      return;
    }

    if (e.target.matches(".editBtn")) {
      editTodo(todos, e);
      renderTodos();
      return;
    }

    const item = e.target.closest(".todo-item");
    if (item) {
      expandTodo(todos, item);
    }
  });
}

function initDialogListener() {
  const dialog = document.querySelector(".todo-dialog");
  const addTodoBtn = document.querySelector(".addTodo-btn");
  const createBtn = document.querySelector(".create-btn");
  const cancelBtn = document.querySelector(".cancel-btn");

  addTodoBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  createBtn.addEventListener("click", () => {
    makeTodo();
    renderTodos();

  });

  cancelBtn.addEventListener("click", () => {
    dialog.close();
  });
}

export { initMainListener, initDialogListener };
