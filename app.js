// express -- third party module

// transitive dependencies- dependencies inside dependencies
const express = require("express");

const server = express();
server.get("/", (req, res) => {
  res.send("hello");
});

server.listen(8000, (err) => {
  console.log(err);
  console.log("server is running ....");
});
