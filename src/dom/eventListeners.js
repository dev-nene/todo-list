import { setTodos } from "../storage/storage.js";

function checkTodo(todos, e) {
  const id = e.target.dataset.id;
  if (!id) return;
  todos.map((todo) =>
    todo.id === id ? (todo.completed = !todo.completed) : "",
  );
  setTodos(todos);
}

export { checkTodo };
