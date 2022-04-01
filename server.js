const express = require("express");
const userRoute = require("./routes/user.routes");
const productRoute = require("./routes/product.routes");
const categoryRoute = require("./routes/category.routes");
const mongoose = require("mongoose");
require("dotenv").config();

//intitialized my app middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload", express.static("upload"));

// initialized routes
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database has been connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is running on http://localhost:8000");
});
