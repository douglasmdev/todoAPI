import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import UsuarioModel from "../models/UsuarioModel.js";

class UsuarioController {
    static rotas(app) {
        app.post('/usuarios', async (req, res) => {
            try {
                const usuario = new UsuarioModel(...Object.values(req.body));
                const resposta = await DatabaseMetodos.insereUsuario(usuario);
                res.status(201).json({mensagem: resposta});
            } catch (error) {
                res.status(401).json({erro: error.message});
            }
        });

        app.get('/usuarios', async (req, res) => {
            try {
                const resposta = await DatabaseMetodos.listaUsuarios();
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });

        app.get('/usuarios/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await DatabaseMetodos.listaUsuarioPorId(id);
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });

        app.put('/usuarios/:id', (req, res) => {
            res.send('usuário atualizado com sucesso!');
        });

        app.delete('/usuarios/:id', (req, res) => {
            res.send('usuário deletado com sucesso!');
        });
    }
}

export default UsuarioController;