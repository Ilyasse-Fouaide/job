const { StatusCodes, ReasonPhrases } = require("http-status-codes")

module.exports = (err, req, res, next) => {
  res.status(err.status).json({
    success: false,
    error: {
      status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
      message: err.message || ReasonPhrases.INTERNAL_SERVER_ERROR
    }
  })
}