const bcrypt = require("bcrypt");

async function encryptPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

async function decryptPassword(password, hash) {
  const decryptedPassword = await bcrypt.compare(password, hash);
  return decryptedPassword;
}

exports.encryptPassword = encryptPassword;
exports.decryptPassword = decryptPassword;
