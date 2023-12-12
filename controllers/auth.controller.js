const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../middlewares/tryCatchWrapper");
const { badRequestError } = require("../customError/customError");
const User = require("../models/user.model");

module.exports.register = tryCatchWrapper(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(badRequestError("username or email or password not provided!."))
  }

  await User.create({ username, email, password });

  res.status(StatusCodes.CREATED).json({
    success: true
  });
});

module.exports.login = tryCatchWrapper(async (req, res, next) => {
  res.status(StatusCodes.CREATED).json({ message: "to login endpoint" });
});
