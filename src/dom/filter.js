import { isToday, isThisWeek, isThisMonth } from "date-fns";

export function getFilteredTodos(todos, filter, projectName) {
  switch (filter) {
    case "completed":
      return todos.filter((todo) => todo.completed);

    case "today":
      return todos.filter((todo) => isToday(new Date(todo.dueDate)));

    case "week":
      return todos.filter((todo) => isThisWeek(new Date(todo.dueDate)));

    case "month":
      return todos.filter((todo) => isThisMonth(new Date(todo.dueDate)));

    case "project":
      return todos.filter((todo) => todo.project.name === projectName);

    default:
      return todos;
  }
}
