//! lembrando que ao se adicionar um diretório de arquivo aqui como require, está apenas se pegando o que foi exportado dele do arquivo mencionado;

const express =  require("express");
const aplicativo = express();

const porta = 8000;
const rota_livros = require("./rotas/livros"); //! Aqui pegamos a exportação feita do módulo de rota pelo mesmo tipo de configuração dele;

aplicativo.use(express.json());

aplicativo.use("/livros", rota_livros); //! Sempre que ele usar a rota "livros" na URI devemos encaminhar o "rota_livros" para o front;

aplicativo.get("/", (req, res) => {
    res.send(`<h1>Bem vindo a rota principal!</h1>`);
});

aplicativo.listen(porta, () => {
    console.log(`Escutando a porta: ${porta}`);
});