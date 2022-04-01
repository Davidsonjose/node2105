const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const Authorization = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization;
    if (authHeader) {
      token = authHeader.split(" ")[1];
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decode._id });
    if (!user) {
      res.status(401).json({
        status: "Failed",
        message: "Unauthorized Access",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return next(
      res.status(403).json({
        message: "token expired invalid token",
      })
    );
  }
};
module.exports = Authorization;
