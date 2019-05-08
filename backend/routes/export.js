var express = require('express');
var router = express.Router();

//used for exporting record to .csv file
var fs = require('fs');

var mysql = require('mysql')

var pool = mysql.createPool({
  connectionLimit : 10,
  host     : '165.227.119.138',
  user     : 'orgazon',
  password : ')5yws0j)qww294e',
  database : 'orgazon'
});

router.get('/:type', function (req, res) {

  console.log("here")
  type = (req.params.type)
  console.log(type)

  filename = type + ".csv";

  res.download(filename);


})

router.get('/:type/:id', function (req, res) {
  type = (req.params.type)
  id = (req.params.id)
  console.log(id)
  console.log(type)
  exportUrl = type + id + ".csv"
  res.download(exportUrl);

})



module.exports = router;
