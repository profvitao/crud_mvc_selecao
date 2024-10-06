import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";
import LoginController from "./app/controllers/LoginController.js";
import LoginRepository from "./app/repositories/LoginRepository.js";
import CadastroController from "./app/controllers/CadastroController.js";

const routes = Router();
// ROTAS
routes.get("/", (req, res) => {
  res.send("Olá mundo");
});
routes.get("/selecoes", SelecaoController.index);
routes.get("/selecoes/:id", SelecaoController.show);
routes.post("/selecoes", SelecaoController.store);
routes.delete("/selecoes/:id", SelecaoController.delete);
routes.put("/selecoes/:id", SelecaoController.update);

// ROTAS LOGIN
routes.post("/login/auth", LoginController.show);
routes.post("/login", LoginController.store);
routes.get("/login", LoginController.findAll);
routes.get("/cliente/:cpf", LoginController.findByCpf);

//ROTAS CADASTRO DE PROMOCAO
routes.post("/cadastro", CadastroController.store);
routes.get("/cadastro", CadastroController.findAll);
routes.get("/cadastro/:empresa", CadastroController.findByEmpresa);

export default routes;
