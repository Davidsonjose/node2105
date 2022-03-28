const express = require("express");
const fs = require("fs");
const path = require("path");

//initiallized our app using express
const app = express();

app.use(express.static(path.join(__dirname, "public")));

//inititalized our body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get("/", (req, res) => {
  const homePagePath = path.join(__dirname, "views/index.html");
  const readHomePathContent = fs.readFileSync(homePagePath, "utf-8");
  res.send(readHomePathContent);
});

app.get("/contact", (req, res) => {
  const aboutPagePath = path.join(__dirname, "views/contact.html");
  const readAboutPageContent = fs.readFileSync(aboutPagePath, "utf-8");
  res.send(readAboutPageContent);
});

app.get("/user", (req, res) => {
  const userPagePath = path.join(__dirname, "views/user.html");
  const readUserPageFile = fs.readFileSync(userPagePath, "utf-8");
  res.send(readUserPageFile);
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  // res.send(req.body);
});

const PORT = 10000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
