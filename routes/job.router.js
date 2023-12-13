const express = require("express");
const router = express.Router();
const job = require("../controllers/job.controller");
const authorize = require("../middlewares/authorize");

router.route("/")
  .get(job.index)
  .post(authorize, job.store);

router.route("/:id")
  .get(job.show)
  .patch(authorize, job.update)
  .delete(authorize, job.destroy);

module.exports = router
