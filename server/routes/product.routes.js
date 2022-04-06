const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
} = require("../controllers/productController");
const { roles } = require("../middleware/AuthmiddleRestrict");
const Authorization = require("../middleware/AuthMiddleware");

const router = require("express").Router();
router.get("/all-product", getAllProduct);
router.get("/single-product/:id", getSingleProduct);

router.use(Authorization);

router.delete("/delete/:id", roles(false), deleteProduct);
router.post("/create", roles(false), createProduct);

module.exports = router;
