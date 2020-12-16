const CryptoJS = require("crypto-js");

function encryptPassword(password) {
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.ENCRYPTIONKEY
  ).toString();
  return encryptedPassword;
}

function decryptPassword(password) {
  const decryptedPassword = CryptoJS.AES.decrypt(
    password,
    process.env.ENCRYPTIONKEY
  ).toString(CryptoJS.enc.Utf8);
  return decryptedPassword;
}

exports.encryptPassword = encryptPassword;
exports.decryptPassword = decryptPassword;
