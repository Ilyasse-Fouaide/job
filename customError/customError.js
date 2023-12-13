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

const badRequestError = (message) => {
  return new CustomError(message, StatusCodes.BAD_REQUEST);
}

const unauthorizedError = (message) => {
  return new CustomError(message, StatusCodes.UNAUTHORIZED);
}

const notFoundError = (message) => {
  return new CustomError(message, StatusCodes.NOT_FOUND);
}

module.exports = {
  internalServerError,
  badRequestError,
  unauthorizedError,
  notFoundError
}
