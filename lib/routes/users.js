const { setUser, getUser } = require("../models/users");
const { Router } = require("express");
const router = Router();
const { comparePassword } = require("../crypto");

router.post("/", async (request, response) => {
  const user = request.body;
  try {
    const result = await getUser(user);
    if (!result) {
      await setUser(user);
      response.status(201).send(user);
    } else {
      const decryptedPassword = await comparePassword(
        user.password,
        result.password
      );
      if (decryptedPassword === true) {
        response.status(200).send(user);
      } else {
        response.status(401).send("User already exists or password is wrong");
      }
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
module.exports = router;
