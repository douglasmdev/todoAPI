import express from "express";
import * as dotenv from "dotenv";
import UsuarioController from "./controllers/UsuarioController.js";

dotenv.config();
const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor lançado com sucesso na porta ${port}`);
});

UsuarioController.rotas(app);