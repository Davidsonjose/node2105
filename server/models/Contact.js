const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please fill in this field"],
    },
    message: {
      type: String,
      required: [true, "Please this field is required"],
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
