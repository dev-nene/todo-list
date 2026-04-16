import { format } from "date-fns";
import { getTodos } from "../storage/storage.js";
import { getFilteredTodos } from "./filter.js";

function renderTodos(filter = "all") {
  const t = getTodos();
  const todos = getFilteredTodos(t, filter)

  const mainDiv = document.querySelector(".main");

  mainDiv.innerHTML = "";

  todos.forEach((todo) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("todo-item");
    itemDiv.dataset.id = todo.id;

    const title = document.createElement("h2");
    title.textContent = todo.title;

    const dueDate = document.createElement("p");
    dueDate.textContent = format(todo.dueDate, "yyyy-MM-dd");


    switch (todo.priority) {
      case "high":
        itemDiv.classList.add("high");
        break;
      case "medium":
        itemDiv.classList.add("medium");
        break;
      case "low":
        itemDiv.classList.add("low");
        break;
    }

    const completed = document.createElement("input");
    completed.type = "checkbox";
    completed.checked = todo.completed;
    completed.dataset.id = todo.id;
    if (todo.completed) {
      itemDiv.classList.add("completed-todo");
    }

    const editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    editBtn.classList.add("editBtn");
    editBtn.dataset.id = todo.id;

    const delBtn = document.createElement("button");
    delBtn.textContent = "DEL";
    delBtn.classList.add("delBtn");
    delBtn.dataset.id = todo.id;

    const divButtons = document.createElement("div");
    divButtons.classList.add("div-btn");
    divButtons.appendChild(editBtn);
    divButtons.appendChild(delBtn);

    const divContent = document.createElement("div");
    divContent.classList.add("div-content");

    divContent.appendChild(completed);
    divContent.appendChild(title);
    divContent.appendChild(dueDate);

    itemDiv.appendChild(divContent);
    itemDiv.appendChild(divButtons);

    mainDiv.appendChild(itemDiv);
  });
}

export { renderTodos };
