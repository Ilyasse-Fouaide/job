const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

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
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(8);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.generateToken = function () {
  return jwt.sign({ userId: this._id, username: this.username }, config.JWT_SECRET, { expiresIn: config.JWT_LIFETIME })
}

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("users", userSchema);
module.exports = User

