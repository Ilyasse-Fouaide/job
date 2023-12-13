const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  "PORT": process.env.PORT,
  "MONGO_URI": process.env.MONGO_URI,
  "JWT_SECRET": process.env.JWT_SECRET,
  "JWT_LIFETIME": process.env.JWT_LIFETIME,
  "RATE_LIMIT_TIME": process.env.RATE_LIMIT_TIME,
  "RATE_LIMIT_MAX": process.env.RATE_LIMIT_MAX
}
