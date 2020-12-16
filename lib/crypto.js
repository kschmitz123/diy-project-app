const bcrypt = require("bcrypt");

async function encryptPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

async function comparePassword(storedPassword, submittedPassword) {
  const decryptedPassword = await bcrypt.compare(
    storedPassword,
    submittedPassword
  );
  return decryptedPassword;
}

exports.encryptPassword = encryptPassword;
exports.comparePassword = comparePassword;
