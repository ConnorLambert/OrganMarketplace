var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

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


var id = null;

router.post('/', function (req, res) {

  var query = 'INSERT INTO cand_liin_m';
  var queryColumns = ' (';
  var queryValues = 'VALUES (';

  var count = 0;

  for (var key in req.body) {
    if (count == 0) {
      queryColumns += key;
      queryValues += "\'" + req.body[key] + "\'";
    }
    else {
      queryColumns += ', ' + key
      if (key == 'CAN_MOST_RECENT_HGT_CM' || key == 'CAN_MOST_RECENT_WGT_KG' || key == 'CAN_YEAR_ENTRY_US' || key == 'CAN_CITIZENSHIP') {
        if (req.body[key] == '') {
          queryValues += ', -1'
        }
        else {
          queryValues += ', ' + req.body[key]
        }

      }
      else {
        queryValues += ', ' + "\'" + req.body[key] + "\'"
      }
    }

    count++
  }

  queryColumns += ')'
  queryValues += ')'

  query += queryColumns
  query += ' ' + queryValues

  id = (req.body)

  console.log(query)


  if (id != null)
  {
    pool.getConnection(function(err1, connection) {

      //grab patient data from main table
      connection.query(query, function (err2, data) {
        if (err2) {
          throw err2
        }

        res.redirect('..');
        connection.release()

      })

    })


  }


// res.sendStatus(200);
})




module.exports = router;
