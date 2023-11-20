import { consult } from "../database/connect.js";
class LoginRepository {
  create(selecao) {
    const sql = "INSERT INTO login SET ?;";
    return consult(sql, selecao, "Não foi possível cadastrar");
  }
  findAll() {
    const sql = "SELECT * FROM login;";
    return consult(sql, "", "Não foi possível encontrar dados");
  }
  findByEmail(email) {
    const sql = "SELECT * FROM login WHERE email=?;";
    return consult(
      sql,
      email,
      "Não foi possível encontrar registro com esse email"
    );
  }
  update(selecao, id) {
    const sql = "UPDATE login SET ? WHERE email = ?;";
    return consult(sql, [selecao, id], "Não foi possível atualizar.");
  }
  delete(id) {
    const sql = "DELETE FROM login WHERE email=?;";
    consult(sql, id, "Erro ao deletar o item: " + id);
  }
}

export default new LoginRepository();
