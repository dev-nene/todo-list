import { format } from "date-fns";
import { getTodos } from "../storage/storage.js";

function renderTodos(projectName = "default") {
  const todos = getTodos();
  const mainDiv = document.querySelector(".main");

  mainDiv.innerHTML = "";

  todos.forEach((todo) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("todo-item");
    itemDiv.dataset.id = todo.id;

    const title = document.createElement("h2");
    title.textContent = todo.title;

    const desc = document.createElement("p");
    desc.textContent = todo.desc;

    const dueDate = document.createElement("p");
    dueDate.textContent = format(todo.dueDate, "yyyy-MM-dd");

    const priority = document.createElement("p");
    priority.textContent = todo.priority;

    const projectName = document.createElement("p");
    projectName.textContent = todo.projectName;

    const completed = document.createElement("input");
    completed.type = "checkbox";
    completed.checked = todo.completed;
    completed.dataset.id = todo.id;

    const editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    editBtn.classList.add("editBtn");
    editBtn.dataset.id = todo.id;

    const delBtn = document.createElement("button");
    delBtn.textContent = "DEL";
    delBtn.classList.add("delBtn");
    delBtn.dataset.id = todo.id;

    itemDiv.appendChild(completed);
    itemDiv.appendChild(title);
    itemDiv.appendChild(dueDate);
    itemDiv.appendChild(desc);
    itemDiv.appendChild(priority);
    itemDiv.appendChild(projectName);
    itemDiv.appendChild(editBtn);
    itemDiv.appendChild(delBtn);

    mainDiv.appendChild(itemDiv);
  });
}

export { renderTodos };
