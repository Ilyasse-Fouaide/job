const jwt = require("jsonwebtoken");
const { unauthorizedError } = require("../customError/customError");
const config = require("../config/config");

module.exports = (req, res, next) => {
  const authorize = req.headers.authorization

  if (!authorize || authorize.split(" ")[0] !== "Bearer") {
    return next(unauthorizedError("Unauthorized!."))
  }

  jwt.verify(authorize.split(" ")[1], config.JWT_SECRET, (error, decoded) => {
    if (error) {
      return next(unauthorizedError(error))
    }

    req.user = {
      userId: decoded.userId,
      username: decoded.username
    }

    next();
  });
}