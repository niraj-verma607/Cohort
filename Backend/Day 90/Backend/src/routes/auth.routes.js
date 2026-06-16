const express = require("express");
const {
  registerController,
  loginController,
  getAccessController,
} = require("../controllers/auth.controller");

const router = express.Router();

router.get("/get-accessToken", getAccessController);
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
