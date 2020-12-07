export async function postUser(user) {
  const response = await fetch(`/api/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const newUser = await response.json();
  return newUser;
}
