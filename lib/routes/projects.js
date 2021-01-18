const { Router } = require("express");
const {
  setProject,
  getProjects,
  getProjectbyId,
  deleteProjectById,
} = require("../models/projects");
const router = Router();

router.post("/", async (req, res) => {
  const project = req.body;
  try {
    const insertResult = await setProject(project);
    const newProjectId = insertResult.insertedId;
    res.status(200).json(newProjectId);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});
router.get("/", async (req, res) => {
  const { projects } = req.params;
  try {
    const projectCollection = await getProjects(projects);
    res.send(projectCollection);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});
router.get("/:projectId", async (req, res) => {
  const { projectId } = req.params;
  try {
    const project = await getProjectbyId(projectId);
    res.send(project);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

router.delete("/:projectId", async (req, res) => {
  const { projectId } = req.params;
  try {
    await deleteProjectById(projectId);
    res.status(200).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

module.exports = router;
