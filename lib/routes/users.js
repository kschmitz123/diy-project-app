const { setUser, getUser } = require("../models/users");
const { Router } = require("express");
const router = Router();

router.post("/", async (request, response) => {
  const user = request.body;
  try {
    const result = await getUser(user);
    if (!result) {
      await setUser(user);
      response.status(201).send(user);
    } else if (result.password === user.password) {
      response.status(200).send(user);
    } else {
      response.status(401).send("User already exists or password is wrong");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});
module.exports = router;
