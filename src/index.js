import "./styles.css";
import { renderTodos } from "./dom/render.js";
import {
  initMainListener,
  initDialogListener,
  initSideButtons,
} from "./dom/events.js";

initSideButtons();
initMainListener();
initDialogListener();
renderTodos();
