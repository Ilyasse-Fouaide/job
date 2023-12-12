const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../middlewares/tryCatchWrapper");
const { badRequestError } = require("../customError/customError");

module.exports.register = tryCatchWrapper(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(badRequestError("username or email or password not provided!."))
  }

  res.status(StatusCodes.CREATED).json({
    success: true,
    data: req.body
  });
});

module.exports.login = tryCatchWrapper(async (req, res, next) => {
  res.status(StatusCodes.CREATED).json({ message: "to login endpoint" });
});
