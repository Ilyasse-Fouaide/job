const express = require("express");
const config = require("./config/config");
const authRouter = require("./routes/auth.router");
const jobRouter = require("./routes/job.router");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const connect = require("./db/connect");
// security packages
const cors = require("cors");
const xss = require("xss-clean");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");


const app = express();

app.use(rateLimit({
  windowMs: parseInt(config.RATE_LIMIT_TIME),
  max: parseInt(config.RATE_LIMIT_MAX),
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  legacyHeaders: false
}));
app.use(cors({
  origin: "*"
}));
app.use(xss());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/job", jobRouter);
app.use(notFound);

app.use(errorHandler);

const port = config.PORT || 5001;

const start = async () => {
  try {
    await connect();
    app.listen(port, () => console.log(`listening the port ${port}...`));
  } catch (error) {
    throw new Error(error);
  }
}

start()
