const { setProfileImage, getUserImage } = require("../models/users");
const { Router } = require("express");
const router = Router();

router.post("/", async (req, res) => {
  const profileImage = req.body;
  try {
    const profile = await setProfileImage(profileImage);
    res.status(200).send(profile);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

router.get("/:user", async (req, res) => {
  const { user } = req.params;
  try {
    const userImage = await getUserImage(user);
    res.send(userImage);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

module.exports = router;
