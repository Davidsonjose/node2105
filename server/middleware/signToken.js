const jwt = require("jsonwebtoken");

const signToken = (user) => {
  return jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

module.exports = signToken;
