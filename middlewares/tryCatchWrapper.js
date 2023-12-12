const { internalServerError } = require("../customError/customError");

const tryCatchWrapper = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      next(internalServerError(error));
    }
  }
}

module.exports = tryCatchWrapper;
