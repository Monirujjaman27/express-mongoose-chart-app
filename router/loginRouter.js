const express = require("express");
const { getlogin } = require("../controller/loginController");
const router = express.Router();

// login page
router.get("/", getlogin);
module.exports = router;
