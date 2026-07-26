const express = require("express");
const {
  registerController,
  loginController,
  getAccessController,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "Currently  Loggedin User",
    user: req.user,
  });
});
router.get("/get-accessToken", getAccessController);
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
