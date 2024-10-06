import { consult } from "../database/connect.js";
class CadastroRepository {
  create(cadastro) {
    const sql = "INSERT INTO cartoes_empresa SET ?;";
    return consult(sql, cadastro, "Não foi possível cadastrar").catch((erro) =>
      console.log(erro)
    );
  }
  findAll() {
    const sql = "SELECT * FROM cartoes_empresa;";
    return consult(sql, "", "Não foi possível encontrar dados").catch((erro) =>
      console.log(erro)
    );
  }
  findByNome(nome) {
    const sql = "SELECT * FROM cartoes_empresa WHERE nome=?;";
    return consult(
      sql,
      nome,
      "Não foi possível encontrar registro com esse nome"
    );
  }
  findByEmpresa(empresa) {
    const sql = "SELECT * FROM cartoes_empresa WHERE empresa_id=?;";
    return consult(
      sql,
      empresa,
      "Não foi possível encontrar registro com esse id de empresa"
    );
  }
  update(nome, id) {
    const sql = "UPDATE cartoes_empresa SET ? WHERE nome = ?;";
    return consult(sql, [nome, id], "Não foi possível atualizar.");
  }
  delete(id) {
    const sql = "DELETE FROM cartoes_empresa WHERE id=?;";
    consult(sql, id, "Erro ao deletar o item: " + id);
  }
}

export default new CadastroRepository();
