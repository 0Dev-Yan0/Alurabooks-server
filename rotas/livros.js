const { Router } = require("express"); //! Serve exatamente para se criar rotas como o dito nome "Router";

const rota = Router();
const {
    get_livros,
    get_livros_id,
    post_livros,
    patch_livros,
    delete_livros
} = require("../controladores/livros");

rota.get("/", get_livros); 

rota.get("/:id", get_livros_id); //! Os dois pontos  [ : ] indicam que após ele haverá uma variável; 

rota.post("/", post_livros);

rota.patch("/:id", patch_livros);

rota.delete("/:id", delete_livros);

module.exports = rota; //! Esse tipo de exportação se alinha as configurações dos módulos a serem exportados;