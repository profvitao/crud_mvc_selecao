import LoginRepository from "../repositories/LoginRepository.js";
class LoginController {
  async show(req, res) {
    const email = req.body.email;
    console.log(req.body.email);
    const rows = await LoginRepository.findByEmail(email);
    res.json(rows);
  }
  async store(req, res) {
    const selecao = req.body;
    const rows = await LoginRepository.create(selecao);
    res.json(rows);
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
