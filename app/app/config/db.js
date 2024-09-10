
const oracledb = require('oracledb');
const dbConfig = require('./dbConfig');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function executeQuery(query, params = []) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(query, params, { autoCommit: true });
    return result;
  } catch (err) {
    console.error('Error ejecutando la consulta:', err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error cerrando la conexión:', err);
      }
    }
  }
}

module.exports = { executeQuery };

