const tryCatchWrapper = require("../middlewares/tryCatchWrapper");

module.exports.index = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "index" });
});

module.exports.show = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "show" });
});

module.exports.update = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "update" });
});

module.exports.destroy = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "destroy" });
});
