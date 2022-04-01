const Category = require("../models/Category");

//TODO:  CREATE UPDATE METHOD FOR ALL CONTROLLERS

exports.createCategory = async (req, res, next) => {
  try {
    const category = new Category({
      title: req.body.title,
    });
    const createCategory = await Category.create(category);
    res.status(201).json({
      message: "Category created",
      data: createCategory,
    });
  } catch (error) {
    return next(res.status(401).json(error));
  }
};

exports.getAllCategory = async (req, res, next) => {
  try {
    const allCategory = await Category.find()
    res.status(200).json({
      data: allCategory,
    });
  } catch (error) {
    return next(res.status(401).json(error));
  }
};

exports.getSingleCategory = async (req, res, next) => {
  try {
    const singleCategory = await Category.findById(req.params.id);
    res.status(200).json({
      data: singleCategory,
    });
  } catch (error) {
    return next(res.status(401).json(error));
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const deleteProd = await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Category has been deleted succesfully",
    });
  } catch (error) {
    return next(res.status(401).json(error));
  }
};
