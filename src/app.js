import express from "express";
import routes from "./routes.js";
import cors from "cors";
import fileupload from "express-fileupload";
const app = express();

app.use(cors());
//ler json
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(fileupload());

//usando rotues
app.use(routes);

export default app;
