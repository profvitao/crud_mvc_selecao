import mysql from "mysql";

const conn = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  // password: "admin",
  database: DB_NAME,
});
// const conn = mysql.createConnection({
//   host: DB_HOST,
//   port: DB_PORT,
//   user: DB_USER,
//   password: DB_PASSWORD,
//   // password: "admin",
//   database: DB_NAME,
// });

conn.connect();

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
