const { Router } = require("express");
const {
  getFavoritesByUser,
  setFavorites,
  deleteFavorites,
} = require("../models/users");
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

router.post("/", async (request, response) => {
  const { data } = request.body;
  try {
    const result = await getFavoritesByUser(data.user.username);
    const isFavorite = result.favorites.some(
      (favorite) => favorite.id === data.favoriteData.favoriteID
    );
    if (isFavorite) {
      await deleteFavorites(data);
      response.status(200).send();
    } else {
      await setFavorites(data);
      response.status(200).send();
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

module.exports = router;
