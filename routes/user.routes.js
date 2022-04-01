const express = require("express");
const { login, register } = require("../controllers/authController");
const { getAllUser, getSingleUser } = require("../controllers/userController");
const { roles } = require("../middleware/AuthmiddleRestrict");
const router = express.Router();
const Authorization = require("../middleware/AuthMiddleware");
router.post("/login", login);

router.post("/register", register);

router.use(Authorization);

router.get("/all-users", roles(false), getAllUser);
router.get("/single-user/:id", getSingleUser);

module.exports = router;
