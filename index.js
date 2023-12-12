const express = require("express");
const config = require("./config/config");
const authRouter = require("./routes/auth.router");
const jobRouter = require("./routes/job.router");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const connect = require("./db/connect");

const app = express();

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
