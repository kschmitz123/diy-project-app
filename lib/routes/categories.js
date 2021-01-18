const { Router } = require("express");
const { getCategory } = require("../models/projects");
const router = Router();

router.get("/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const categoryCollection = await getCategory(category);
    res.send(categoryCollection);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

module.exports = router;
