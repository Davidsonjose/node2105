const User = require("../models/User");

exports.getAllUser = async (req, res, next) => {
  try {
    const allUser = await User.find();
    res.status(201).json({
      data: allUser,
    });
  } catch (error) {
    return next(
      res.status(401).json({
        error,
      })
    );
  }
};

exports.getSingleUser = async (req, res, next) => {
  try {
    const getSingleUser = await User.findById(req.params.id);
    res.status(201).json({
      data: getSingleUser,
    });
  } catch (error) {
    return next(new Error(error));
  }
};
