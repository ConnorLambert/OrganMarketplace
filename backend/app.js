const express = require('express')
const app = express()

var dataPage = require("./routes/data");
var patientPage = require("./routes/patient");
var searchPage = require("./routes/search");
var exportPage = require("./routes/export");
var cors = require("cors");

app.use(cors());
app.use("/data", dataPage);
app.use("/patient", patientPage);
app.use("/search", searchPage);
app.use("/export", exportPage);


module.exports = app;
