const express = require('express')
const app = express()

var dataPage = require("./routes/data");
var usersPage = require("./routes/users");
var cors = require("cors");

app.use(cors());
app.use("/data", dataPage);
app.use("/users", usersPage);


module.exports = app;
