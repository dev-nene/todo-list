import { getTodos } from "../storage/storage.js";
import { checkTodo, deleteTodo, expandTodo } from "./eventListeners.js";
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

    const item = e.target.closest(".todo-item");
    if (item) {
      expandTodo(item.dataset.id);
    }
  });
}

export { initMainListener };