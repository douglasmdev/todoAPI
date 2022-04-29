import { resolve } from "path";
import Database from "../infra/Database.js";

class DatabaseMetodos {
    static ativaChaveEstrangeira() {
        const pragma = 'PRAGMA foreign_keys = ON';
        Database.run(pragma, error => {
            if (error) console.log(error.message);
            else console.log('Chaves estrangeiras ativadas com sucesso!');
        })
    }

    static criaTabelaUsuarios() {
        const query = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )
        `;

        return new Promise((resolve, reject) => {
            Database.run(query, error => {
                if (error) reject(error.message);
                else resolve('tabela usuários criada com sucesso!');
            });
        });
    }

    static insereUsuario(usuario) {
        const query = `INSERT INTO usuarios VALUES (?,?,?,?)`;
        const usuarioArr = Object.values(usuario);
        return new Promise((resolve, reject) => {
            Database.run(query, usuarioArr, error => {
                if (error) reject(error.message);
                else resolve('Usuario inserido com sucesso!');
            });
        });
    }

    static listaUsuarios() {
        const query = 'SELECT * FROM usuarios';
        return new Promise((resolve, reject) => {
            Database.all(query, (error, registros) => {
                if (error) reject(error.message);
                else resolve({usuarios:registros});
            });
        });
    }

    static listaUsuarioPorId(id) {
        const query = `SELECT * FROM usuarios WHERE id=${id}`;
        return new Promise((resolve, reject) => {
            Database.all(query,(error, registros) => {
                if (error) reject(error.message);
                else resolve({usuarios:registros});
            });
        });
    }
}

export default DatabaseMetodos;