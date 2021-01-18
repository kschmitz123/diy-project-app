const { collection } = require("../database");
const { ObjectID } = require("mongodb");
const { cloudinary } = require("../cloudinary");

async function setProject({ formattedData, image, creator }) {
  const uploadedres = await cloudinary.uploader.upload(image, {
    upload_preset: "upload",
  });

  return await collection("projects").insertOne({
    ...formattedData,
    creator,
    imageURL: uploadedres.secure_url,
  });
}

async function getProjects() {
  return await collection("projects").find({}).sort({ _id: -1 }).toArray();
}

async function getProjectbyId(id) {
  const objectId = new ObjectID.createFromHexString(id);
  return await collection("projects").findOne({ _id: objectId });
}
async function getProjectbyTag(tag) {
  return await collection("projects")
    .find({ tags: { $regex: tag, $options: "i" } })
    .toArray();
}

async function getProjectsByUser(user) {
  return await collection("projects").find({ creator: user }).toArray();
}

async function getCategory(category) {
  return await collection("projects")
    .find({
      category: category,
    })
    .toArray();
}

async function deleteProjectById(id) {
  const objectId = new ObjectID.createFromHexString(id);
  const filter = { _id: objectId };
  await collection("projects").deleteOne(filter);
}

exports.setProject = setProject;
exports.getProjects = getProjects;
exports.getCategory = getCategory;
exports.getProjectbyId = getProjectbyId;
exports.getProjectbyTag = getProjectbyTag;
exports.getProjectsByUser = getProjectsByUser;
exports.deleteProjectById = deleteProjectById;
