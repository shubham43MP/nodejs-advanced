const cluster = require("cluster");

if (cluster.isMaster) {
  cluster.fork(); // With only one cluster.fork(), the server may hangup if "/" route is called
  cluster.fork();
  // cluster.fork();
} else {
  // Child Process
  const express = require("express");
  const app = express();
  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get("/", (req, res) => {
    doWork(5000); // CAN BASICALLY BLOCK THE SERVER TO ACCEPT REQUEST
    res.send("Hi There");
  });

  app.get("/fast", (req, res) => {
    res.send("This was fast");
  });

  app.listen(3000);
}
