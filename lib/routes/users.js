const { setUser } = require("../models/users");
const { Router } = require("express");
const router = Router();

router.post("/", async (request, response) => {
  const user = request.body;
  try {
    await setUser(user);
    response.status(200).send(user);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
module.exports = router;
