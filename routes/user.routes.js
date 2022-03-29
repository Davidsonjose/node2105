const express = require("express");

const router = express.Router();

router.get("/all-users", (req, res) => {
  res.status(200).json({
    message: "Here is all the users in this application",
    payload: [],
  });
});
router.get("/single-user", (req, res) => {
  res.status(200).json({
    message: "Results of single user: Davidson",
  });
});

module.exports = router;
