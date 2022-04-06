const upload = require("../config/upload");
const Product = require("../models/Product");
const { successResonse, errorResponse } = require("../config/Response");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const fs = require("fs");

//TODO:  CREATE UPDATE METHOD FOR ALL CONTROLLERS

//cloudinary connect
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

exports.createProduct = async (req, res, next) => {
  const ImageFile = upload.single("image");
  ImageFile(req, res, async (err) => {
    try {
      const { file } = req;
      const cloudFile = await cloudinary.uploader.upload(file.path);
      fs.unlinkSync(`upload/product/${file.filename}`);
      if (err) {
        throw err;
      }
      const data = {
        image: cloudFile.url,
        description: req.body.description,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
      };
      const saveProduct = await Product.create(data);
      // res.status(201).json({
      //   data: saveProduct,
      // });
      return successResonse(res, saveProduct, 201);
    } catch (error) {
      return next(errorResponse(res, error, 400));
    }
  });
};

exports.getAllProduct = async (req, res, next) => {
  try {
    const allProduct = await Product.find().sort({ _id: -1 }).populate({
      path: "category",
      select: "title -_id",
    });

    // res.status(200).json({
    //   data: allProduct,
    // });
    return successResonse(res, allProduct, 200);
  } catch (error) {
    return next(res.status(401).json(error));
  }
};

exports.getSingleProduct = async (req, res, next) => {
  try {
    const singleProduct = await Product.findById(req.params.id)
      .sort({ _id: -1 })
      .populate({
        path: "category",
        select: "title -_id",
      });

    return successResonse(res, singleProduct, 200);
  } catch (error) {
    return next(errorResponse(res, error, 400));
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const deleteProd = await Product.findByIdAndDelete(req.params.id);

    // res.status(200).json({
    //   message: "Product has been deleted succesfully",
    // });
    return successResonse(res, "product has been deleted successfully", 200);
  } catch (error) {
    return next(res.status(401).json(error));
  }
};
