class UsuarioController {
    static rotas(app) {
        app.post('/usuarios', (req, res) => {
            res.send('Usuario criado com sucesso!');
        });

        app.get('/usuarios', (req, res) => {
            res.send('Nenhum usuário cadastrado!');
        });
    }
}

export default UsuarioController;