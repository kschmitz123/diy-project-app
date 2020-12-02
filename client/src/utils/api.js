export async function postProject(project) {
  const response = await fetch(`/api/projects/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  const newProject = await response.json();
  return newProject;
}

export async function getData() {
  const response = await fetch(`/api/projects/`);
  const data = await response.json();
  return data;
}

export async function getProjectById(id) {
  const response = await fetch(`/api/projects/${id}`);
  const project = await response.json();
  return project;
}

export async function getCategory(category) {
  const response = await fetch(`/api/category/${category}`);
  const projects = await response.json();
  return projects;
}
