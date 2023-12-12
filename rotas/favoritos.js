const { Router } = require("express"); //! Serve exatamente para se criar rotas como o dito nome "Router";

const rota = Router();
const {
    get_favoritos,
    post_favoritos,
    delete_favoritos,
    get_favoritos_id
} = require("../controladores/favoritos");

rota.get("/", get_favoritos); 

rota.get("/:id", get_favoritos_id); //! Os dois pontos  [ : ] indicam que após ele haverá uma variável; 

rota.post("/:id", post_favoritos);

rota.delete("/:id", delete_favoritos);

module.exports = rota; //! Esse tipo de exportação se alinha as configurações dos módulos a serem exportados;