const { StatusCodes } = require("http-status-codes");

class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const internalServerError = (message) => {
  return new CustomError("Something broke!.", StatusCodes.INTERNAL_SERVER_ERROR);
}

module.exports = {
  internalServerError
}
