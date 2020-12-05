export async function postProject(project) {
  const response = await fetch(`/api/projects/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  const newProject = await response.json();
  return newProject;
}

export async function getData(key) {
  const response = await fetch(`/api/${key}`);
  const data = await response.json();
  return data;
}

export async function getDataByParam(key, category) {
  const response = await fetch(`/api/${key}/${category}`);
  const projects = await response.json();
  return projects;
}
