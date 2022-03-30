const User = require("../models/User");

exports.register = async (req, res, next) => {
  try {
    const { firstname, lastname, isRobot, username, password } =
      req.body;
    if (!email || !firstname || !isRobot || !username || !password || !lastname) {
      return res.status(404).json({
        message: "Please fill in all the fields",
      });
    }
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      res.status(404).json({
        message: "Please this email already exist",
      });
    }
    const user = new User({
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
      username: req.body.username,
      isRobot: req.body.isRobot,
    });

    await user.save();
    res.status(201).json({
      message: "User has been created successfully",
      data: user,
    });
  } catch (error) {
    return next(new Error(error));
  }
};

exports.login = (req, res, next) => {
  try {
    const {} = req.body;
  } catch (error) {
    return next(new Error(error));
  }
};
