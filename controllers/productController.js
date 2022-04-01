const upload = require("../config/upload");
const Product = require("../models/Product");

//TODO:  CREATE UPDATE METHOD FOR ALL CONTROLLERS

exports.createProduct = async (req, res, next) => {
  const ImageFile = upload.single("image");
  ImageFile(req, res, async (err) => {
    try {
      const { file } = req;
      if (err) {
        throw err;
      }
      const data = {
        image: `upload/product/${file.filename}`,
        description: req.body.description,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
      };
      const saveProduct = await Product.create(data);
      res.status(201).json({
        data: saveProduct,
      });
    } catch (error) {
      return next(res.status(403).json(error));
    }
  });
};

exports.getAllProduct = async (req, res, next) => {
  try {
    const allProduct = await Product.find().sort({ _id: -1 }).populate({
      path: "category",
      select: "title -_id",
    });

    res.status(200).json({
      data: allProduct,
    });
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

    res.status(200).json({
      data: singleProduct,
    });
  } catch (error) {
    return next(res.status(401).json(error));
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const deleteProd = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product has been deleted succesfully",
    });
  } catch (error) {
    return next(res.status(401).json(error));
  }
};
