import CadastroRepository from "../repositories/CadastroRepository.js";
class CadastroController {
  async findAll(req, res) {
    res.json(await CadastroRepository.findAll());
  }
  async findByEmpresa(req, res) {
    const empresa = req.params.empresa;
    res.json(await CadastroRepository.findByEmpresa(empresa));
  }
  async show(req, res) {
    const nome = req.body.nome;
    const rows = await CadastroRepository.findByNome(nome);
    if (req.body.senha == rows[0].senha) {
      res.send(true);
    } else {
      res.send(false);
    }
  }
  async store(req, res) {
    const cadastro = req.body;
    const rows = await CadastroRepository.create(cadastro);
    var sucesso = {
      msgCadastro: "Cadastro realizado com sucesso!",
      statusCadastro: "success",
    };
    var falha = {
      msgCadastro: "Cadastro não realizado!",
      statusCadastro: "error",
    };
    res.json(rows === undefined ? falha : sucesso);
  }
  async update(req, res) {
    const selecao = req.body;
    const id = req.params.id;
    const rows = await CadastroRepository.update(selecao, id);
    res.json(rows);
  }

  async delete(req, res) {
    let id = req.params.id;

    const rows = await CadastroRepository.delete(id);
    res.json(rows);
  }
}
export default new CadastroController();
