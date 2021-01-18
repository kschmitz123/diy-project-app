export async function postProject(project) {
  const res = await fetch(`/api/projects/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  const newProject = await res.json();
  return newProject;
}

export async function getData(key) {
  const res = await fetch(`/api/${key}`);
  const data = await res.json();
  return data;
}

export async function getDataByParam(key, param) {
  const res = await fetch(`/api/${key}/${param}`);
  const projects = await res.json();
  return projects;
}

export async function deleteProjectById(id) {
  await fetch(`/api/projects/${id}`, {
    method: "DELETE",
  });
}
