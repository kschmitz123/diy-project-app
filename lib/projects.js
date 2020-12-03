const { collection } = require("./database");
const { ObjectID } = require("mongodb");
const { cloudinary } = require("./cloudinary");

async function setProject({ data, image }) {
  const uploadedResponse = await cloudinary.uploader.upload(image, {
    upload_preset: "upload",
    width: 2000,
    height: 1800,
    crop: "limit",
  });
  const dataWithURL = {
    imageURL: uploadedResponse.secure_url,
    projectTitle: data.projectTitle,
    description: data.description,
    category: data.category,
    tags: data.tags,
  };

  return await collection("projects").insertOne({ data: dataWithURL });
}

async function getProjects() {
  return await collection("projects").find({}).sort({ _id: -1 }).toArray();
}

async function getProjectbyId(id) {
  const objectId = new ObjectID.createFromHexString(id);
  return await collection("projects").findOne({ _id: objectId });
}
async function getProjectbyTag(tag) {
  return await collection("projects").find({ tags: tag }).toArray();
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
exports.getProjectbyTag = getProjectbyTag;
