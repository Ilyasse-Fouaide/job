const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const tryCatchWrapper = require("../middlewares/tryCatchWrapper");
const { badRequestError } = require("../customError/customError");
const User = require("../models/user.model");
const config = require("../config/config");

module.exports.register = tryCatchWrapper(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(badRequestError("username or email or password not provided!."))
  }

  const user = await User.create({ username, email, password });

  const token = jwt.sign({ id: user._id, username }, config.JWT_SECRET, { expiresIn: "15d" });

  res.status(StatusCodes.CREATED).json({
    success: true,
    token: token
  });
});

module.exports.login = tryCatchWrapper(async (req, res, next) => {
  res.status(StatusCodes.CREATED).json({ message: "to login endpoint" });
});
