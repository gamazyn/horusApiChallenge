const mysql = require('mysql');
const { config } = require('npm');

const rds = {
  host: 'users.c5gwvbv4us8w.sa-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'admin9131',
  database: 'app',
};

const initConnection = (database) => {
  const disconnect = (connection) => {
    connection.on('err', (err) => {
      if (err instanceof Error) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.log(err.stack);
          console.log('Conexão perdida. Tentando reconectar...');
          initConnection(connection.config);
        } else if (err.fatal) {
          throw err;
        }
      }
    });
  };
  connection = mysql.createConnection(config);

  disconnect(connection);

  connection.connect();
  return connection;
};

const connection = initConnection(rds);

module.exports = connection;
