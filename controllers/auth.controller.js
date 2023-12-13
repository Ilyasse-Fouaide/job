const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../middlewares/tryCatchWrapper");
const { badRequestError, notFoundError } = require("../customError/customError");
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
  const { email, password } = req.body;

  if (!email || !password) {
    return next(badRequestError("email or password not provided!."))
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(notFoundError("Invalid Credentials."))
  }

  const comparePass = await user.comparePassword(password);

  if (!comparePass) {
    return next(notFoundError("Password Incorrect!."));
  }

  res.status(StatusCodes.CREATED).json({
    success: true,
    token: user.generateToken()
  });
});

module.exports.profile = tryCatchWrapper(async (req, res, next) => {
  res.status(StatusCodes.OK).json({
    success: true,
    user: req.user
  })
})
