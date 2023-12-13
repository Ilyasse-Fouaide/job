const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "company required!."],
  },
  position: {
    type: String,
    required: [true, 'position required!.']
  },
  status: {
    type: String,
    enum: ['interview', 'declined', 'pending'],
    default: 'pending'
  }
});

const Job = mongoose.model("jobs", jobSchema);
module.exports = Job
