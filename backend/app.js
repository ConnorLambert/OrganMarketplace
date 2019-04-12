const express = require('express')
const app = express()

var dataPage = require("./routes/data");
var cors = require("cors");

app.use(cors());
app.use("/data", dataPage);


module.exports = app;
