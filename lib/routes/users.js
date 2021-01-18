const { setUser, getUser } = require("../models/users");
const { getProjectsByUser } = require("../models/projects");
const { Router } = require("express");
const router = Router();
const { comparePassword } = require("../crypto");

router.post("/", async (req, res) => {
  const user = req.body;
  try {
    const result = await getUser(user);
    if (!result) {
      await setUser(user);
      res.status(201).send(user);
    } else {
      const decryptedPassword = await comparePassword(
        user.password,
        result.password
      );
      if (decryptedPassword === true) {
        res.status(200).send(user);
      } else {
        res.status(401).send("User already exists or password is wrong");
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

router.get("/:user", async (req, res) => {
  const { user } = req.params;
  try {
    const userProjects = await getProjectsByUser(user);
    res.send(userProjects);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

module.exports = router;
