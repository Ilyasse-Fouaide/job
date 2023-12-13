const { StatusCodes, ReasonPhrases } = require("http-status-codes")

module.exports = (err, req, res, next) => {
  if (err.code && err.code === 11000) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      error: {
        status: StatusCodes.BAD_REQUEST,
        message: `duplicate ${Object.keys(err.keyValue)}`
      }
    })
  }

  if (err.name && err.name == "ValidationError") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      error: {
        status: StatusCodes.BAD_REQUEST,
        message: Object.values(err.errors).map(({ path, message }) => {
          return { [path]: message }
        })
      }
    })
  }

  if (err.name && err.name === "CastError") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      error: {
        status: StatusCodes.BAD_REQUEST,
        message: `Cast error for ObjectId ${err.value}`
      }
    })
  }

  res.status(
    err.status || StatusCodes.INTERNAL_SERVER_ERROR
  ).json({
    success: false,
    error: {
      status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
      message: err.message || ReasonPhrases.INTERNAL_SERVER_ERROR
    }
  })
}