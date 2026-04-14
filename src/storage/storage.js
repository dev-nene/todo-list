function getTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
}

function setTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export { getTodos, setTodos };
