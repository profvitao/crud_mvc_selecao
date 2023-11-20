import express from "express";
import routes from "./routes.js";
const app = express();
const cors = require("cors");
//ler json
app.use(cors());
app.use(express.json());

//usando rotues
app.use(routes);

export default app;
