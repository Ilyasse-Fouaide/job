const { StatusCodes } = require("http-status-codes");
const Job = require("../models/job.model");
const tryCatchWrapper = require("../middlewares/tryCatchWrapper");

module.exports.index = tryCatchWrapper(async (req, res, next) => {
  const jobs = await Job
    .find({ user: req.user.userId })
    .sort("createdAt")
    .select("-__v")

  res.status(StatusCodes.OK).json({
    success: true,
    jobs
  });
});

module.exports.show = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "show" });
});

module.exports.store = tryCatchWrapper(async (req, res, next) => {
  await Job.create({
    company: req.body.company,
    position: req.body.position,
    user: req.user.userId
  });

  res.status(StatusCodes.CREATED).json({ success: true });
});

module.exports.update = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "update" });
});

module.exports.destroy = tryCatchWrapper(async (req, res, next) => {
  res.status(200).json({ message: "destroy" });
});
