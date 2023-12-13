const { StatusCodes, ReasonPhrases } = require("http-status-codes")

module.exports = (err, req, res, next) => {
  if (err.code && err.code === 11000) {
    return res.status(400).json({
      success: false,
      error: {
        status: 400,
        message: `duplicate ${Object.keys(err.keyValue)}`
      }
    })
  }

  if (err.name && err.name == "ValidationError") {
    console.log(Object.values(err.errors))
    return res.status(400).json({
      success: false,
      error: {
        status: 400,
        message: Object.values(err.errors).map(({ path, message }) => {
          return { [path]: message }
        })
      }
    })
  }

  res.status(
    500
  ).json({
    err
  })

  // res.status(
  //   err.status || StatusCodes.INTERNAL_SERVER_ERROR
  // ).json({
  //   success: false,
  //   error: {
  //     status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
  //     message: err.message || ReasonPhrases.INTERNAL_SERVER_ERROR
  //   }
  // })
}