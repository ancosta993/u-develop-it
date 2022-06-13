const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
   {
      host: 'localhost',
      user: 'root',
      password: 'Sjeet2bang2000oct//QL',
      database: 'election'
   },
   console.log("Connected to the election database")
);

module.exports = db;