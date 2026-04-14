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

}

function expandTodo(todos, e) {}

export { checkTodo, deleteTodo, expandTodo };
