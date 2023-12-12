const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../middlewares/tryCatchWrapper");

module.exports.register = tryCatchWrapper(async (req, res, next) => {
  const { username, email, password } = req.body;

  res.status(StatusCodes.OK).json({
    success: true,
    data: req.body
  });
});

module.exports.login = tryCatchWrapper(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "to login endpoint" });
});
