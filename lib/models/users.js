const { collection } = require("../database");

async function setUser(data) {
  return await collection("users").insertOne({
    username: data.username,
    password: data.password,
  });
}

exports.setUser = setUser;
