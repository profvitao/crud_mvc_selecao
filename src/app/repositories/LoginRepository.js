import { consult } from "../database/connect.js";
class LoginRepository {
  create(selecao) {
    const sql = "INSERT INTO clientes SET ?;";
    return consult(sql, selecao, "Não foi possível cadastrar").catch((erro) =>
      console.log(erro)
    );
  }
  findAll() {
    const sql = "SELECT * FROM clientes;";
    return consult(sql, "", "Não foi possível encontrar dados");
  }
  findByCpf(cpf) {
    const sql = "SELECT * FROM clientes where cpf=?;";
    return consult(sql, cpf, "Não foi possível encontrar dados");
  }
  findByEmail(email) {
    const sql = "SELECT * FROM clientes WHERE email=?;";
    return consult(
      sql,
      email,
      "Não foi possível encontrar registro com esse email"
    );
  }
  update(selecao, id) {
    const sql = "UPDATE clientes SET ? WHERE email = ?;";
    return consult(sql, [selecao, id], "Não foi possível atualizar.");
  }
  delete(id) {
    const sql = "DELETE FROM clientes WHERE email=?;";
    consult(sql, id, "Erro ao deletar o item: " + id);
  }
}

export default new LoginRepository();
