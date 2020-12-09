const { collection } = require("../database");

async function setUser(data) {
  return await collection("users").insertOne({
    username: data.username,
    password: data.password,
  });
}

async function getUser({ username }) {
  return await collection("users").findOne({ username: username });
}

async function getFavoritesByUser(username) {
  return await collection("users").findOne({ username: username });
}

exports.setUser = setUser;
exports.getUser = getUser;
exports.getFavoritesByUser = getFavoritesByUser;
