const { getProjectbyTag } = require("../models/projects");

const { Router } = require("express");
const router = Router();

router.get("/:tag", async (request, response) => {
  const { tag } = request.params;
  try {
    const project = await getProjectbyTag(tag);
    response.send(project);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
module.exports = router;
