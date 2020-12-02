const { collection } = require("./database");

async function setProject({ data, tags }) {
  await collection("projects").insertOne({ data, tags });
}
exports.setProject = setProject;
