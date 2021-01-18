const { Router } = require("express");
const {
  getFavoritesByUser,
  setFavorites,
  deleteFavorites,
} = require("../models/users");
const router = Router();

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const favorites = await getFavoritesByUser(username);
    res.status(200).send(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

router.post("/", async (req, res) => {
  const { data } = req.body;
  try {
    const result = await getFavoritesByUser(data.user.username);
    const isFavorite = result.favorites.some(
      (favorite) => favorite.id === data.favoriteData.favoriteID
    );
    if (isFavorite) {
      await deleteFavorites(data);
      res.status(200).send();
    } else {
      await setFavorites(data);
      res.status(200).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

module.exports = router;
