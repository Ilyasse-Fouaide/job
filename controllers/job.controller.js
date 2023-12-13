const Job = require("../models/job.model");
const tryCatchWrapper = require("../middlewares/tryCatchWrapper");
const { StatusCodes } = require("http-status-codes");

module.exports.index = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "index" });
});

module.exports.show = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "show" });
});

module.exports.store = tryCatchWrapper(async (req, res, next) => {
  const job = await Job.create({
    company: req.body.company,
    position: req.body.position,
    user: req.user.userId
  });

  res.status(StatusCodes.CREATED).json({
    success: true,
    job
  });
});

module.exports.update = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "update" });
});

module.exports.destroy = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "destroy" });
});
