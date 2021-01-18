const { getProjectbyTag } = require("../models/projects");

const { Router } = require("express");
const router = Router();

router.get("/:tag", async (req, res) => {
  const { tag } = req.params;
  try {
    const project = await getProjectbyTag(tag);
    res.send(project);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});
module.exports = router;
