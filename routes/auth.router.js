const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");
const authorize = require("../middlewares/authorize");

router.route("/register").post(auth.register);
router.route("/login").post(auth.login);
router.route("/profile").get(authorize, auth.profile);

module.exports = router
