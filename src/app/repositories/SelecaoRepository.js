import { consult } from "../database/connect.js";
class SelecaoRepository {
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?;";
    return consult(sql, selecao, "Não foi possível cadastrar");
  }
  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return consult(sql, "", "Não foi possível encontrar dados");
  }
  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE ID=?;";
    return consult(sql, id, "Não foi possível encontrar registro com esse ID");
  }
  update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE ID = ?;";
    return consult(sql, [selecao, id], "Não foi possível atualizar.");
  }
  delete(id) {
    const sql = "DELETE FROM selecoes WHERE ID=?;";
    consult(sql, id, "Erro ao deletar o item: " + id);
  }
}

export default new SelecaoRepository();
