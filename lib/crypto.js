const CryptoJS = require("crypto-js");

function encryptPassword(password) {
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.ENCRYPTIONKEY
  ).toString();
  return encryptedPassword;
}

exports.encryptPassword = encryptPassword;
