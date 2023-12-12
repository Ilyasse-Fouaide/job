const { StatusCodes } = require("http-status-codes");

class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const internalServerError = (message) => {
  return new CustomError(message, StatusCodes.INTERNAL_SERVER_ERROR);
}

const notFoundError = (message) => {
  return new CustomError(message, StatusCodes.NOT_FOUND);
}

module.exports = {
  internalServerError,
  notFoundError
}
