const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // MySQL username,
  user: 'root',
  // MySQL password
  password: 'membermember123!',
  database: 'tracker'
});
db.connect(function (err) {
  if (err) throw err;
  console.log("You are Connected!")
});



module.exports = db;