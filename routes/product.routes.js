const router = require("express").Router();

router.get("/products", (req, res) => {});

router.get("/single-product", (req, res) => {
  res.render("single", {
    title: "Single || Product",
  });
});

module.exports = router;
