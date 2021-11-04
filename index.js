var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'example',
  password: 'example',
  database: 'example',
});

connection.connect();

connection.query('select * from movie;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();
