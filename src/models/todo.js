import { createProject } from "./project.js";
import { getTodos, setTodos } from "../storage/storage.js";

const todos = getTodos();

function addTodo(todo) {
  todos.push(todo);
  setTodos(todos);
}

function createTodo(
  title,
  desc,
  dueDate,
  priority,
  projectName = "default",
  completed = false,
) {
  const id = crypto.randomUUID();
  return {
    id,
    title,
    desc,
    dueDate,
    priority,
    projectName,
    completed,
  };
}

export { addTodo, createTodo };
