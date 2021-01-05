const { setProfileImage, getUser } = require("../models/users");
const { Router } = require("express");
const router = Router();

router.post("/", async (request, response) => {
  const profileImage = request.body;
  try {
    const profile = await setProfileImage(profileImage);
    response.status(200).send(profile);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

router.get("/:user", async (request, response) => {
  const { user } = request.params;
  try {
    const userImage = await getUser(user);
    response.send(userImage);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

module.exports = router;
