const { collection } = require("../database");
const { encryptPassword } = require("../crypto");

async function setUser(data) {
  const encryptedPassword = encryptPassword(data.password);
  return await collection("users").insertOne({
    username: data.username,
    password: encryptedPassword,
    favorites: [],
  });
}

async function getUser({ username }) {
  return await collection("users").findOne({ username: username });
}

async function getFavoritesByUser(username) {
  return await collection("users").findOne({ username: username });
}

async function setFavorites({ user, favoriteData }) {
  const filter = { username: user.username };
  const update = {
    $push: {
      favorites: {
        $each: [
          {
            projectTitle: favoriteData.favoriteTitle,
            imageURL: favoriteData.favoriteURL,
            id: favoriteData.favoriteID,
          },
        ],
        $position: 0,
      },
    },
  };
  await collection("users").updateOne(filter, update);
}

async function deleteFavorites({ user, favoriteData }) {
  const filter = { username: user.username };
  const update = {
    $pull: { favorites: { id: favoriteData.favoriteID } },
  };
  return await collection("users").updateOne(filter, update);
}

exports.setUser = setUser;
exports.getUser = getUser;
exports.getFavoritesByUser = getFavoritesByUser;
exports.setFavorites = setFavorites;
exports.deleteFavorites = deleteFavorites;
