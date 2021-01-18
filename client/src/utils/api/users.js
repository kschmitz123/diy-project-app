export async function postUser(user) {
  const res = await fetch(`/api/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    throw new Error("Username already exists or password wrong");
  }
  const newUser = await res.json();
  return newUser;
}

export async function getFavoritesByUser(key, param) {
  const res = await fetch(`/api/${key}/${param}`);
  const favorites = await res.json();
  return favorites;
}

export async function postFavorites(data) {
  return await fetch(`/api/favorites/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
}

export async function postProfileImage(data) {
  return await fetch(`/api/profile/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function getProfileImage(key, param) {
  const res = await fetch(`/api/${key}/${param}`);
  const user = await res.json();
  return user;
}
