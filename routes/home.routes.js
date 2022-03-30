const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage || Welcome",
  });
});

router.get("/contact", async (req, res) => {
  try {
    // const findAllContacts = await Contact.find();
    // // console.log(findAllContacts);
    // res.status(200).json({
    //   data: findAllContacts,
    // });
    res.render("contact");
  } catch (error) {
    return next(new Error(error));
  }
});

router.get("/all-contact", async (req, res) => {
  try {
    const findAllContacts = await Contact.find();
    res.render("all-contact", {
      title: "All || Contact",
      data: findAllContacts,
    });
  } catch (error) {
    return next(new Error(error));
  }
});

router.delete("/contact/delete/:id", async (req, res, next) => {
  try {
    const deleteContact = await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/all-contact");
  } catch (error) {
    return next(new Error(error));
  }
});

router.post("/contact", async (req, res, next) => {
  try {
    const contact = new Contact({
      email: req.body.email,
      message: req.body.message,
    });
    await contact.save();
    res.redirect("/all-contact");
  } catch (error) {
    return next(new Error(error));
  }
});

module.exports = router;
