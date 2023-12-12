const express = require("express");
const router = express.Router();
const job = require("../controllers/job.controller");

router.route("/")
  .get(job.index)
  .post(job.store);

router.route("/:id")
  .get(job.show)
  .patch(job.update)
  .delete(job.destroy);

module.exports = router
