var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var mysql = require('mysql')
var pool = mysql.createPool({
  connectionLimit: 10,
  host     : '165.227.119.138',
  user     : 'orgazon',
  password : ')5yws0j)qww294e',
  database : 'orgazon'
});

var id = null;

router.post('/', function(req, res) {

  var query = 'SELECT password FROM users WHERE email = ';

  id = (req.body)
  console.log(req.body)

if(id != null) {
  query += "\'" + req.body.email + "\'" + ';';
  console.log(query)
  pool.getConnection(function(err1, connection) {

    connection.query(query, function (err2, data) {
      console.log(data);
      if (err2) {
        throw err2
      }

      res.redirect('..');
      connection.release()
    })
  })
}

})

module.exports = router;
