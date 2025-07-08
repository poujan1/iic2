// express -- third party module
// transitive dependencies- dependencies inside dependencies

// routes request handler
// order of routes matters

const express = require("express");

const server = express();
// REST api -
// use - matches all methods get post delete put
// / wild card match

// use vs get

// server.use("/", (req, res) => {
//   res.send("this is / route");
// });
// server.use("/home/sevices/price", (req, res) => {
//   res.send("this is home route");
// });
// server.get("/home/services", (req, res) => {
//   res.send("this is another get route");
// });

// server.use("/profile", (req, res) => {
//   res.send("this is profile route");
// });
// server.use("/about", (req, res) => {
//   res.send("this is about route");
// });
// server.use("/", (req, res) => {
//   res.send("this is get route");
// });
// 1 request = 1 response
//middlewares
// res - request handler
// server.get(
//   "/hello",
//   (req, res, next) => {
//     // res.send("hello1");
//     console.log("hello 1 is printed");
//     next();
//   },
//   (req, res, next) => {
//     // res.send("hello2");
//     console.log("hello 2 is printed");
//     next();
//   },
//   (req, res, next) => {
//     res.send("hello3");
//   }
// );

// app level , route level middlewares
// inbuilt thirdparty selfmade middlewares

server.get("/hello", (req, res, next) => {
  // res.send("hello1");
  next();
});
server.get("/hello", (req, res, next) => {
  // res.send("hello1");
  next();
});
server.get("/home", (req, res) => {
  res.send("this is home");
});

server.get("/hello", (req, res) => {
  res.send("hello1");
});

server.listen(8000, (err) => {
  console.log("server is running ...");
});
