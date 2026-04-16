function getTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
}

function setTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getProjects() {
  const project = JSON.parse(localStorage.getItem("project")) || [];
  return project;
}

function setProjects(project) {
  localStorage.setItem("project", JSON.stringify(project));
}

export { getTodos, setTodos, getProjects, setProjects };
