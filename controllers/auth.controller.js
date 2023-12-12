const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const tryCatchWrapper = require("../middlewares/tryCatchWrapper");
const { badRequestError } = require("../customError/customError");
const User = require("../models/user.model");

module.exports.register = tryCatchWrapper(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(badRequestError("username or email or password not provided!."))
  }

  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ username, email, password: hashedPassword });

  res.status(StatusCodes.CREATED).json({
    success: true,
    user
  });
});

module.exports.login = tryCatchWrapper(async (req, res, next) => {
  res.status(StatusCodes.CREATED).json({ message: "to login endpoint" });
});
