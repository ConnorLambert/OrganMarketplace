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

connection.query('SELECT PERS_ID, TRR_FOL_ID, TFL_WGT_KG, TFL_HOSP, ORG_TY FROM txf_li_m LIMIT 30', function (err, data) {
  if (err) throw err

  router.get('/', (req, res) => res.send(data))
  // console.log('The solution is: ', res)
})

connection.end()

module.exports = router;
