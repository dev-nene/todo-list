import { addProject, createProject } from "../models/project.js";
import { addTodo, createTodo, updateTodos } from "../models/todo.js";
import { getProjects, setProjects, setTodos } from "../storage/storage.js";
import { renderProjects, renderTodos } from "./render.js";

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

function expandTodo(todos, item) {
  const foundItem = todos.find((todo) => String(todo.id) === item.dataset.id);
  const isExpanded = item.classList.contains("expanded");
  if (isExpanded) {
    item.classList.remove("expanded");
    const extra = item.querySelector(".extra");
    if (extra) extra.remove();
  } else {
    item.classList.add("expanded");

    const extra = document.createElement("div");
    extra.classList.add("extra");

    const desc = document.createElement("p");
    desc.textContent = `Description: ${foundItem.desc}`;
    const projectName = document.createElement("p");
    projectName.textContent = `Project: ${foundItem.project.name}`;
    const priority = document.createElement("p");
    priority.textContent = `Priority: ${foundItem.priority}`;

    extra.appendChild(desc);
    extra.appendChild(priority);
    extra.appendChild(projectName);

    item.appendChild(extra);
  }
}

function makeTodo() {
  const title = document.querySelector("#title").value;
  const desc = document.querySelector("#desc").value;
  const dueDate = document.querySelector("#dueDate").value;
  const priority = document.querySelector("#priority").value;
  const projectName = document.querySelector("#project").value;
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

  const project = createProject(projectName)

  const todo = createTodo(title, desc, dueDate, priority, project);
  addTodo(todo);
  form.reset();
}

function makeProject(projectName) {
  const proj = createProject(projectName);
  addProject(proj);
}

export { checkTodo, deleteTodo, expandTodo, editTodo, makeTodo, makeProject };
