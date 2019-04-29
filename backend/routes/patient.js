var express = require('express');
var router = express.Router();

var mysql = require('mysql')

var pool = mysql.createPool({
  connectionLimit : 10,
  host     : '165.227.119.138',
  user     : 'orgazon',
  password : ')5yws0j)qww294e',
  database : 'orgazon'
});


var id = null;
console.log(id)

router.get('/:id', function (req, res) {


  console.log('69')
  // res.send(req.params)

  id = (req.params)
  console.log(id)

  console.log(id != null)

  if (id != null)
  {
    pool.getConnection(function(err1, connection) {
      query = 'SELECT * FROM txf_li_m WHERE TRR_ID = ' + '\'' + id['id'] + '\'' + ' LIMIT 30'
      console.log(query)

      connection.query(query, function (err2, data) {
        if (err2) {
          console.log(err2)
          throw err2
        }

        console.log(data[0])
        res.send(data[0])
        console.log('here')

        connection.release()

      })

    })


  }

})



module.exports = router;
