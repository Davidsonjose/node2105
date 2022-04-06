const mongoose = require("mongoose");

const ProductShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please a product must have a name"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category'
    },
    price: {
      type: Number,
      required: [true, "Please a product must have a price"],
    },
    image: {
      type: String,
      required: [true, "A product must have a image"],
    },
    description: {
      type: String,
      required: [true, "Description about the product is required"],
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductShema);

module.exports = Product;
