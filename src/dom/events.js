import { getProjects, getTodos } from "../storage/storage.js";

import {
  checkTodo,
  deleteTodo,
  expandTodo,
  editTodo,
  makeTodo,
  makeProject,
} from "./eventListeners.js";

import { renderProjects, renderTodos } from "./render.js";

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

function initSideButtons() {
  document.querySelector(".all-todos-btn").addEventListener("click", () => {
    renderTodos("all");
  });
  document.querySelector(".today-btn").addEventListener("click", () => {
    renderTodos("today");
  });
  document.querySelector(".week-btn").addEventListener("click", () => {
    renderTodos("week");
  });
  document.querySelector(".month-btn").addEventListener("click", () => {
    renderTodos("month");
  });
  document.querySelector(".completed-btn").addEventListener("click", () => {
    renderTodos("completed");
  });

  const projectButtonsDiv = document.querySelector(".project-buttons");

  projectButtonsDiv.addEventListener("click", (e) => {
    const item = e.target.closest(".side-project-btn")
    console.log("clicked:", item.textContent);
    console.log("todos:", getTodos());
    if(item) {
      renderTodos("project", item.textContent)
    }
  })

  document
    .querySelector(".create-project-btn")
    .addEventListener("click", () => {
      const projects = getProjects();

      const name = prompt("Project name:");
      if (!name) return;

      makeProject(name);
      renderTodos();
      renderProjects();
      console.log(projects);
    });
}

export { initMainListener, initDialogListener, initSideButtons };
