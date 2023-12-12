const { notFoundError } = require("../customError/customError")

module.exports = (req, res, next) => {
  next(notFoundError(`${req.url} doesn't match!.`));
}
