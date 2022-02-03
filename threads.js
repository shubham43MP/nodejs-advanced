const crypto = require("crypto");

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});
