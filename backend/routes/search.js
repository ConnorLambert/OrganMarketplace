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


router.get('/', function (req, res) {

  // id = (req.params)
  var url_params = req.query
  console.log(url_params)

  console.log(Object.entries(url_params).length === 0 && url_params.constructor === Object)


  //check if url_params object is empty
  if ((Object.entries(url_params).length === 0 && url_params.constructor === Object) !== true)
  {
    pool.getConnection(function(err1, connection) {



      var query = 'SELECT * FROM ' + url_params.patient_type;

      if (("id") in url_params === true && url_params.id !== '') {
        query += (query.includes("WHERE") ? ' AND' : ' WHERE');
        if (url_params.patient_type == "cand_liin_m"){
          query += (' PX_ID = ' + '\'' + url_params.id + '\'')
        }
        else {
          query += (" DONOR_ID = " + '\'' + url_params.id + '\'');
        }
      }

      if (("bloodtype") in url_params === true && url_params.bloodtype !== '') {
        query += (query.includes("WHERE") ? ' AND' : ' WHERE');
        if (url_params.patient_type == "cand_liin_m"){
          query += (" CAN_ABO = " + '\'' + url_params.bloodtype + '\'');
        }

        else {
          query += (" DON_ABO = " + '\'' + url_params.bloodtype + '\'');
        }
      }

      if (("gender") in url_params === true && url_params.gender !== '') {
        query += (query.includes("WHERE") ? ' AND' : ' WHERE');
        if (url_params.patient_type == "cand_liin_m"){
          query += (" CAN_GENDER = " + '\'' + url_params.gender + '\'');
        }

        else {
          query += (" DON_GENDER = " + '\'' + url_params.gender + '\'');
        }
      }
          // query += ' cand_liin_m';
          // if (("id") in url_params === true && url_params.id !== '') {
          //   query += (query.includes("WHERE") ? ' AND' : ' WHERE');
          //   query += (' DONOR_ID = ' + '\'' + url_params.id + '\'');
          //   query += (query.includes("WHERE") ? 'AND' : 'WHERE');
          //   query += (" CAN_ABO = " + '\'' + url_params.bloodtype + '\'');
          // }
          // query += ' donor_live_m';
          // if (("id") in url_params === true && url_params.id !== '') {
          //   query += (' WHERE DONOR_ID = ' + '\'' + url_params.id + '\'');
          //   query += (" AND DON_ABO = " + '\'' + url_params.bloodtype + '\'');
          // }
          // query += ' donor_deceased_m';
          // if (("id") in url_params === true && url_params.id !== '') {
          //   query += (' WHERE DONOR_ID = ' + '\'' + url_params.id + '\'');
          //   query += (" AND DON_ABO = " + '\'' + url_params.bloodtype + '\'');
          // }


      var query_search = query.includes("WHERE");

      // query = 'SELECT * FROM cand_liin_m WHERE PX_ID = ' + '\'' + id['id'] + '\'' + ' LIMIT 30'
      console.log(query)

      connection.query(query, function (err2, data) {
        if (err2) {
          console.log(err2)
          throw err2
        }

        console.log(data)
        res.send(data)
        console.log('here')
        console.log(query)
        console.log('Contains WHERE = ' + query_search)

        connection.release()

      })

    })


  }

})



module.exports = router;
