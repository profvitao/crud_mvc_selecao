import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "admin",
  database: "bdcopa",
});

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
  });
};
export default conn;
