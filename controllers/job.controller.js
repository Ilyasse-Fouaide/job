const { StatusCodes } = require("http-status-codes");
const Job = require("../models/job.model");
const tryCatchWrapper = require("../middlewares/tryCatchWrapper");
const { notFoundError } = require("../customError/customError");

module.exports.index = tryCatchWrapper(async (req, res, next) => {
  const jobs = await Job
    .find({ user: req.user.userId })
    .sort("createdAt")
    .select("-__v")

  res.status(StatusCodes.OK).json({
    success: true,
    count: jobs.length,
    jobs
  });
});

module.exports.show = tryCatchWrapper(async (req, res, next) => {
  const { id: jobId } = req.params;
  const userId = req.user.userId;

  const job = await Job.findOne({ _id: jobId, user: userId });

  if (!job) {
    return next(notFoundError("Job not found!."))
  }

  res.status(StatusCodes.OK).json({
    success: true,
    job
  });
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
  const { company, position, status } = req.body;
  const { id: jobId } = req.params;
  const { userId } = req.user;

  const newJob = await Job.findOneAndUpdate(
    { _id: jobId, user: userId },
    { company, position, status },
    { new: true }
  )

  if (!newJob) {
    return next(notFoundError("Job not found!."))
  }

  res.status(StatusCodes.OK).json({
    success: true
  });
});

module.exports.destroy = tryCatchWrapper(async (req, res, next) => {
  const { id: jobId } = req.params;

  const job = await Job.findOneAndDelete({ _id: jobId, user: req.user.userId });

  if (!job) {
    return next(notFoundError("Job not found!."))
  }

  res.status(StatusCodes.OK).json({ success: true });
});
