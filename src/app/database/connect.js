import mysql from "mysql";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "db4free.net",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "bdcopa10",
  password: process.env.DB_PASSWORD || "admin1234",
  // password: "admin",
  database: process.env.DB_NAME || "bdcopa",
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
let conn;
pool.getConnection((err, conn) => {
  if (err) console.log(err);
  conn = conn.connect();
  console.log("Conexão com sucesso!");
});

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
