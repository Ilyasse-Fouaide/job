const tryCatchWrapper = require("../middlewares/tryCatchWrapper");

module.exports.register = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "to register endpoint" });
});
