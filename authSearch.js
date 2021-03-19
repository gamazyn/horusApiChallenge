'use strict';

module.exports.getUsers = async (event) => {
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: 'users.c5gwvbv4us8w.sa-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin9131',
    database: 'app',
  });

  const prm = new Promise((resolve) => {
    connection.query('SELECT * FROM users', function (err, results) {
      resolve(results);
    });
  });

  const result = await prm;

  return {
    statusCode: 200,
    body: JSON.stringify({ results: result }),
  };
};
