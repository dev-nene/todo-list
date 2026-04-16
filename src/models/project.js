import { getProjects, setProjects } from "../storage/storage.js";

const projects = getProjects();


function addProject(project) {
  const projects = getProjects();
  projects.push(project);
  setProjects(projects)
}


function createProject(name) {
  return {
    name,
  };
}

export { createProject, addProject };
