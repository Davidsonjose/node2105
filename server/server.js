const express = require("express");
const userRoute = require("./routes/user.routes");
const productRoute = require("./routes/product.routes");
const categoryRoute = require("./routes/category.routes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//intitialized my app middleware
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload", express.static("upload"));

// initialized routes
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

// app.use((err, req, res, next) => {
//   // err.statusCode = err.statusCode || 500;
//   err.status = err.status || "error";
//   res.status(err.statusCode).json({
//     status: err.status,
//     error: err,
//     data: err.message,
//     stack: err.stack,
//   });
// });

app.use((err, req, res, next) => {
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    data: err.message,
    stack: err.stack,
  });
});
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
