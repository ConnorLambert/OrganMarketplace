var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : '165.227.119.138',
  user     : 'orgazon',
  password : ')5yws0j)qww294e',
  database : 'orgazon'
});

connection.connect()

//ADD QUERY HERE FOR LOGIN VALIDATION

router.get('/', (req, res) => res.send(data)) {

})

connection.end()

module.exports = router;
