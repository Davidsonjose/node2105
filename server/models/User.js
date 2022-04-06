const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please fill in our username"],
    },
    firstname: {
      type: String,
      require: [true, "Please firstname is required"],
    },
    lastname: {
      type: String,
      required: [true, "Please lastname is required"],
    },
    email: {
      type: String,
      required: [true, "Please email is required"],
    },
    password: {
      type: String,
      required: [true, "Please password is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      // required: [true, "please accept terms"]
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
