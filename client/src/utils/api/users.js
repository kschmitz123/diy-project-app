export async function postUser(user) {
  const response = await fetch(`/api/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Username already exists or password wrong");
  }
  const newUser = await response.json();
  return newUser;
}

export async function getFavoritesByUser(key, param) {
  const response = await fetch(`/api/${key}/${param}`);
  const favorites = await response.json();
  return favorites;
}
