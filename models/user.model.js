const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username required!."],
    trim: true
  },
  email: {
    type: String,
    required: [true, "email required!."],
    trim: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: [true, "password required!."],
    trim: true
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User

