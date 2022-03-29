const express = require("express");
const fs = require("fs");
const path = require("path");
const homeRoutes = require("./routes/home.routes");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const mongoose = require("mongoose");

//initiallized our app using express
const app = express();

//inititalized our body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// initialized routes middleware
app.use("/", homeRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
mongoose
  .connect("mongodb://localhost:27017/node2105-eccommerce", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 10000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
