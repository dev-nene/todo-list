import "./styles.css";
import { createTodo, getTodos, addTodo  } from "./models/todo.js";


const todo = createTodo("Gym", "Leg day", "2026-04-14", "high");

addTodo(todo);

console.log(getTodos());

console.log("Hello");
