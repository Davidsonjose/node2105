const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please a category must have a title"],
    },
  },
  { timeStamps: true }
);
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
