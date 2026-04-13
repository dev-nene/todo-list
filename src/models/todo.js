import { createProject } from "./project.js";

const todos = [];

function getTodos() {
  return [...todos];
}

function addTodo(todo) {
  todos.push(todo);
}

function createTodo(
  title,
  notes,
  dueDate,
  priority,
  projectName = "default",
  completed = false,
) {
  return {
    title,
    notes,
    dueDate,
    priority,
    projectName,
    completed,
  };
}

export { getTodos, addTodo, createTodo };
