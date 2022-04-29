import DatabaseMetodos from "../DAO/DatabaseMetodos.js";

try {
    DatabaseMetodos.ativaChaveEstrangeira();
    const resposta = await DatabaseMetodos.criaTabelaUsuarios(); 
    console.log(resposta);
} catch (error) {
    console.log(error.message);
}