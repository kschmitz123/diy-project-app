export async function postProject(project) {
  const response = await fetch(`http://localhost:5000/projects/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  const newProject = await response.json();
  return newProject;
}

export async function getProjectById(id) {
  const response = await fetch(`http://localhost:5000/projects/${id}`);
  const project = await response.json();
  return project;
}
