const express = require("express");
const userRoute = require("./routes/user.routes");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use("/api/user", userRoute);

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
