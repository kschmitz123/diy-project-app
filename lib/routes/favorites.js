const { Router } = require("express");
const { getFavoritesByUser } = require("../models/users");
const router = Router();

router.get("/:username", async (request, response) => {
  const { username } = request.params;
  try {
    const favorites = await getFavoritesByUser(username);
    response.status(200).send(favorites);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
module.exports = router;
