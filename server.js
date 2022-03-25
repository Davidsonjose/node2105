const http = require("http");
const { data } = require("./data");
console.log(http.STATUS_CODES);
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      const homePagePath = path.join(__dirname, "views/index.html");
      const readFilePath = fs.readFileSync(homePagePath, "utf-8")
      res.writeHead(200, { "content-type": "text/html" });
      res.write(readFilePath);
      res.end();
      break;
    case "/students":
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(data));
      res.end();
      break;
    case "/users":
      const userPagePath = path.join(__dirname, "views/user.html");
      const readuserPath = fs.readFileSync(userPagePath, "utf-8")
      res.writeHead(200, { "content-type": "text/html" });
      res.write(readuserPath)
      res.end();
      break;

    default:
      res.writeHead(404, { "content-type": "text/html" });
      res.write(
        "<h2>Look like you are lost.... sorry the route you requested was not found or has been moved😎😎😎</h2>"
      );
      res.end();
      break;
  }
});

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000/");
});
