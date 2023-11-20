import mysql from "mysql2";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // password: "admin",
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
// const conn = mysql.createConnection({
//   host: DB_HOST,
//   port: DB_PORT,
//   user: DB_USER,
//   password: DB_PASSWORD,
//   // password: "admin",
//   database: DB_NAME,
// });

pool.getConnection((err, conn) => {
  if (err) console.log(err);
  conn.connect();
  console.log("Conexão com sucesso!");
});
module.exports = pool.promise();

/**
 * Executa uma instrução sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao,id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da promise
 */
export const consult = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conn.query(sql, valores, (erro, result) => {
      if (erro) {
        reject(mensagemReject);
      } else {
        const rows = JSON.parse(JSON.stringify(result));
        resolve(rows);
      }
    });
  })
    .then((rows) => {
      console.log(rows);
    })
    .catch((error) => console.log(error))
    .finally("teste");
};
export default conn;
