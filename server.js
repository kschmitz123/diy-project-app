require("dotenv").config();
const { cloudinary } = require("./lib/cloudinary");
const express = require("express");
const app = express();
const path = require("path");
// const jsonServer = require("json-server");
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
const { connect } = require("./lib/database");
const {
  setProject,
  getProjects,
  getProjectbyId,
  getCategory,
} = require("./lib/projects");

const port = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));

app.post("/api/upload", async (request, response) => {
  try {
    const fileStr = request.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "upload",
      width: 2000,
      height: 1800,
      crop: "limit",
    });
    response.status(200).send(uploadedResponse.secure_url);
  } catch (error) {
    console.error(error);
    response.status(500).send("An error occured");
  }
});

app.post("/api/projects/", async (request, response) => {
  const project = request.body;
  try {
    await setProject(project);
    response.status(200).send("Successfully uploaded");
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
app.get("/api/projects/", async (request, response) => {
  const { projects } = request.params;
  try {
    const projectCollection = await getProjects(projects);
    response.send(projectCollection);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
app.get("/api/projects/:projectId", async (request, response) => {
  const { projectId } = request.params;
  try {
    const project = await getProjectbyId(projectId);
    response.send(project);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
app.get("/api/category/:category", async (request, response) => {
  const { category } = request.params;
  try {
    const categoryCollection = await getCategory(category);
    response.send(categoryCollection);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

// app.use("/api", router);
// app.use(middlewares);

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

async function run() {
  try {
    await connect(process.env.MONGODB_URL, process.env.MONGODB);
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}
run();
