const express = require("express");
const config = require("./config/config");

const app = express();

const port = config.PORT || 5001;
app.listen(port, () => console.log(`listening the port ${port}...`));
