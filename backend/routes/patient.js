var express = require('express');
var router = express.Router();
var exportRouter = express.Router({mergeParams: true});

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
console.log(id)

// router.use('/candidate/:id/export', exportRouter);
// router.use('/livedonor/:id/export', exportRouter);
// router.use('/deceaseddonor/:id/export', exportRouter);

router.get('/candidate/:id', function (req, res) {

  id = (req.params)
  console.log(id)

  console.log(id != null)

  if (id != null)
  {
    pool.getConnection(function(err1, connection) {
      query = 'SELECT * FROM cand_liin_m WHERE PX_ID = ' + '\'' + id['id'] + '\'' + ' LIMIT 30'
      console.log(query)

      connection.query(query, function (err2, data) {
        if (err2) {
          console.log(err2)
          throw err2
        }

        //creates csv of data
        exportFile (data[0], "candidate", id['id']);

        console.log(data[0])
        res.send(data[0])
        console.log('here')

        connection.release()

      })

    })


  }

})

router.get('/livedonor/:id', function (req, res) {

  id = (req.params)
  console.log(id)

  console.log(id != null)

  if (id != null)
  {
    pool.getConnection(function(err1, connection) {
      query = 'SELECT * FROM donor_live_m WHERE DONOR_ID = ' + '\'' + id['id'] + '\'' + ' LIMIT 30'
      console.log(query)

      connection.query(query, function (err2, data) {
        if (err2) {
          console.log(err2)
          throw err2
        }

        //creates csv of data
        exportFile (data[0], "livedonor", id['id']);

        console.log(data[0])
        res.send(data[0])
        console.log('here')

        connection.release()

      })

    })


  }

})

router.get('/deceaseddonor/:id', function (req, res) {

  id = (req.params)
  console.log(id)

  console.log(id != null)

  if (id != null)
  {
    pool.getConnection(function(err1, connection) {
      query = 'SELECT * FROM donor_deceased_m WHERE DONOR_ID = ' + '\'' + id['id'] + '\'' + ' LIMIT 30'
      console.log(query)

      connection.query(query, function (err2, data) {
        if (err2) {
          console.log(err2)
          throw err2
        }

        //creates csv of data
        exportFile (data[0], "deceaseddonor", id['id']);

        console.log(data[0])
        res.send(data[0])
        console.log('here')

        connection.release()

      })

    })


  }

})


function exportFile (data, type, id) {
  var filename = type + id + ".csv";
  var writeStream = fs.createWriteStream(filename);

  var content = "";
  var header = "";

  console.log (data)

  for (var key in data) {
  content += data[key] + ",";
  header += key + ",";
  }


  console.log(content);
  console.log("/n", header);


  writeStream.write(header + "\n");
  writeStream.write(content);

  writeStream.close();

  return filename;

}


module.exports = router;
