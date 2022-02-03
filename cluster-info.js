process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
const crypto = require("crypto");

const start = Date.now();

if (cluster.isMaster) {
  cluster.fork(); // With only one cluster.fork(), the server may hangup if "/" route is called
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {
  // Child Process
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
}
