export async function postProject(project) {
  const response = await fetch(`/api/projects/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  const newProject = await response.json();
  return newProject;
}

export async function getProjectById(id) {
  const response = await fetch(`/api/projects/${id}`);
  const project = await response.json();
  return project;
}

export async function getProjects() {
  const response = await fetch("/api/projects?_sort=id&_order=desc");
  const projects = await response.json();
  return projects;
}
export async function getLimitedProjects() {
  const response = await fetch("/api/projects?_sort=id&_order=desc&_limit=20");
  const projects = await response.json();
  return projects;
}
