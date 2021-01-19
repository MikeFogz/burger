const mysql = require('mysql');
const connection;
if (process.env.mysql://sxmjeu759ppheymg:mgsx269m8rlamf64@td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qaom54pcaubtuov7) {
  connection = mysql.createConnection(process.env.mysql://sxmjeu759ppheymg:mgsx269m8rlamf64@td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qaom54pcaubtuov7);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // NOTE: Be sure to add your MySQL password here!
    password: 'password',
    database: 'burgers_db',
  });
}

  


  // Make connection.
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });





module.exports = connection;
