require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { connect } = require("./lib/database");
const {
  setProject,
  getProjects,
  getProjectbyId,
  getCategory,
  getProjectbyTag,
} = require("./lib/projects");
const { setUser } = require("./lib/users");

const port = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));

app.post("/api/projects/", async (request, response) => {
  const project = request.body;
  try {
    const insertResult = await setProject(project);
    const newProjectId = insertResult.insertedId;
    response.status(200).json(newProjectId);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

app.post("/api/users/", async (request, response) => {
  const user = request.body;
  try {
    await setUser(user);
    response.status(200).send(user);
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
app.get("/api/browse/:tag", async (request, response) => {
  const { tag } = request.params;
  try {
    const project = await getProjectbyTag(tag);
    response.send(project);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
app.get("/api/categories/:category", async (request, response) => {
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
