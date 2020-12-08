const { Router } = require("express");
const {
  setProject,
  getProjects,
  getProjectbyId,
} = require("../models/projects");
const router = Router();

router.post("/", async (request, response) => {
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
router.get("/", async (request, response) => {
  const { projects } = request.params;
  try {
    const projectCollection = await getProjects(projects);
    response.send(projectCollection);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
router.get("/:projectId", async (request, response) => {
  const { projectId } = request.params;
  try {
    const project = await getProjectbyId(projectId);
    response.send(project);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

module.exports = router;
