const User = require("../models/User");
const CryptoJs = require("crypto-js");
require("dotenv").config();

const signToken = require("../middleware/signToken");

exports.register = async (req, res, next) => {
  try {
    const { email, firstname, lastname, password, username } = req.body;
    if (!email || !firstname || !lastname || !password || !username) {
      res.status(401).json({
        message: "Please fill in all Fields",
      });
    }
    if (password.length < 6 || password.length > 12) {
      res.status(401).json({
        message: "Password length should not be less than 6 or greater than 12",
      });
    }
    const emailExist = await User.findOne({ email: email });
    emailExist &&
      res.status(401).json({
        message: "Email already exist",
      });
    const hashPassword = CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();

    const user = new User({
      email: req.body.email,
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: hashPassword,
      isAdmin: req.body.isAdmin,
    });
    await user.save();
    res.status(201).json({
      data: user,
    });
  } catch (error) {
    return next(new Error(error));
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    !user &&
      res.status(401).json({
        message: "Incorrect credentials",
      });
    const hashPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    ).toString(CryptoJs.enc.Utf8);
    req.body.password !== hashPassword &&
      res.status(401).json({
        message: "Incorrect credentials",
      });
    const token = signToken(user);
    res.status(200).json({
      status: "Successful",
      data: user,
      token,
    });
  } catch (error) {
    return next(new Error(error));
  }
};


