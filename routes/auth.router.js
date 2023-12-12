const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");

router.route("/register").post(auth.register);

module.exports = router
