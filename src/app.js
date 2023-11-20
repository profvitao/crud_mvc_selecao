import express from "express";
import routes from "./routes.js";
const app = express();
//ler json
app.use(express.json());

//usando rotues
app.use(routes);

export default app;
