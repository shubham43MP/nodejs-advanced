process.env.UV_THREADPOOL_SIZE = 1;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("Hi There");
  });
});

app.get("/fast", (req, res) => {
  res.send("This was fast");
});

app.listen(3000);
