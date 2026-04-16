import "./styles.css";
import { renderProjects, renderTodos } from "./dom/render.js";
import {
  initMainListener,
  initDialogListener,
  initSideButtons,
} from "./dom/events.js";

initSideButtons();
initMainListener();
initDialogListener();
renderProjects();
renderTodos();
