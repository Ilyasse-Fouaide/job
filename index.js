const express = require("express");
const config = require("./config/config");
const authRouter = require("./routes/auth.router");

const app = express();

app.use("/api/v1", authRouter);

const port = config.PORT || 5001;
app.listen(port, () => console.log(`listening the port ${port}...`));
