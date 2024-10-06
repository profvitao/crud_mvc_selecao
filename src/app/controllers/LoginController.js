import LoginRepository from "../repositories/LoginRepository.js";
class LoginController {
  async findAll(req, res) {
    res.json(await LoginRepository.findAll());
  }
  async findByCpf(req, res) {
    res.json(await LoginRepository.findByCpf(req.params.cpf));
  }
  async show(req, res) {
    const email = req.body.email;
    const rows = await LoginRepository.findByEmail(email);
    if (req.body.senha == rows[0].senha) {
      res.send(rows[0]);
    } else {
      res.send(false);
    }
  }
  async store(req, res) {
    const selecao = req.body;
    const rows = await LoginRepository.create(selecao);
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
    const rows = await LoginRepository.update(selecao, id);
    res.json(rows);
  }

  async delete(req, res) {
    let id = req.params.id;

    const rows = await LoginRepository.delete(id);
    res.json(rows);
  }
}
export default new LoginController();
