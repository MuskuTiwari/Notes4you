const express = require("express");
const AuthController = require("../controller/AuthController");

const router = express.Router();

router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);
router.post("/signout", AuthController.signout);

module.exports = router;
