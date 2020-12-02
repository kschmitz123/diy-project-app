const { collection } = require("./database");
const { ObjectID } = require("mongodb");

async function setProject({ data, tags }) {
  await collection("projects").insertOne({ data, tags });
}

async function getProjects() {
  return await collection("projects").find({}).sort({ _id: -1 }).toArray();
}

async function getProjectbyId(id) {
  const objectId = new ObjectID.createFromHexString(id);
  return await collection("projects").findOne({ _id: objectId });
}
async function getCategory(category) {
  return await collection("projects")
    .find({
      "data.category": category,
    })
    .toArray();
}

exports.setProject = setProject;
exports.getProjects = getProjects;
exports.getCategory = getCategory;
exports.getProjectbyId = getProjectbyId;
