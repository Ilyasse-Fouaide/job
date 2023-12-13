module.exports = (err, req, res, next) => {
  res.status(err.status).json({
    success: false,
    error: {
      status: err.status || 500,
      message: err.message || "Something broke!."
    }
  })
}