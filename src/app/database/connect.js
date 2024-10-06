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
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consult = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conn.query(sql, valores, (erro, resultado) => {
      if (erro) return reject(mensagemReject);
      const row = JSON.parse(JSON.stringify(resultado));
      return resolve(row);
    });
  });
};

export default conn;
