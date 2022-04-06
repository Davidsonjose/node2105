const {
  createCategory,
  getAllCategory,
  getSingleCategory,
  deleteCategory,
} = require("../controllers/CategoryController");
const { roles } = require("../middleware/AuthmiddleRestrict");
const Authorization = require("../middleware/AuthMiddleware");
// todo: do all the update for all 
const router = require("express").Router();
router.get("/all-category", getAllCategory);
router.get("/single-category/:id", getSingleCategory);

router.use(Authorization);

router.delete("/delete/:id", roles(false), deleteCategory);
router.post("/create", roles(false), createCategory);

module.exports = router;
