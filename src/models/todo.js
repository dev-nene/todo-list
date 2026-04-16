import { getTodos, setTodos } from "../storage/storage.js";
import { createProject } from "./project.js";

let todos = getTodos();

function addTodo(todo) {
  todos.push(todo);
  setTodos(todos);
}

function updateTodos(id, title, desc, dueDate, priority) {
  todos = todos.map((item) => {
    if (String(item.id) === id) {
      return { ...item, title, desc, dueDate, priority };
    }
    return item;
  });
  setTodos(todos);
}

function createTodo(
  title,
  desc,
  dueDate,
  priority,
  project = createProject("default"),
  completed = false,
) {
  const id = crypto.randomUUID();
  return {
    id,
    title,
    desc,
    dueDate,
    priority,
    project,
    completed,
  };
}

export { addTodo, createTodo, updateTodos };
