import "./styles.css";
import { renderTodos } from "./dom/render.js";
import { initMainListener, initDialogListener } from "./dom/events.js";


initMainListener();
initDialogListener();
renderTodos();

