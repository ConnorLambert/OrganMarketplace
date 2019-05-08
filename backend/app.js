const express = require('express')
const app = express()

var dataPage = require("./routes/data");
var patientPage = require("./routes/patient");
var searchPage = require("./routes/search");
var exportPage = require("./routes/export");
var registerPage = require("./routes/register");
var loginPage = require("./routes/login");
var cors = require("cors");

app.use(cors());
app.use("/data", dataPage);
app.use("/patient", patientPage);
app.use("/search", searchPage);
app.use("/export", exportPage);
app.use("/register", registerPage);
app.use("/login", loginPage);

module.exports = app;
