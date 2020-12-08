const { Router } = require("express");
const { getCategory } = require("../models/projects");
const router = Router();

router.get("/:category", async (request, response) => {
  const { category } = request.params;
  try {
    const categoryCollection = await getCategory(category);
    response.send(categoryCollection);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

module.exports = router;
