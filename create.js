'use strict';

module.exports.createUsers = async (event) => {
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: 'users.c5gwvbv4us8w.sa-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin9131',
    database: 'app',
  });

  // const name = !event.body ? event.key1 : event.body.key1;
  // const email = !event.body ? event.key2 : event.body.key2;
  const parsedEvent = JSON.parse(event.body);

  const name = parsedEvent.key1;
  const email = parsedEvent.key2;

  const sql = `INSERT INTO app.users (name, email) VALUES ("${name}", "${email}")`;

  const prm = new Promise((resolve) => {
    connection.query(sql, function (err, result, fields) {
      if (err) throw err;

      resolve(result);
    });
  });

  const results = await prm;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Usuário adicionado.',
      results: results,
      test: sql,
      debug: event,
      debug2: parsedEvent,
    }),
  };
};
