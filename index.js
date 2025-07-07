// http module
// built in module
// path os
// express -- node js framework buit on top of http module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("desc", "this is hello html page");
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("hello");
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("hello");
  } else if (req.url === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("hello contact");
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        name: "pujan",
      })
    );
  }
});
server.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is running on http://localhost:8000");
});
