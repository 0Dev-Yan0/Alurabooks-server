const fs = require("fs");

function retorna_favoritos () {
    return JSON.parse(fs.readFileSync("favoritos.json"));
};

function retorna_favorito (id) {
    let livros = JSON.parse(fs.readFileSync("favoritos.json"));
    let livro = livros.filter(objetos => objetos.id == id); //! A constante "livro" é o filtro que devolve a lista com somente aqueles objetos cujo id deles forem iguais ao parametro da função [ id ];

    let livros_filtrados; //! Funcionando como um contador que só vai acumular resultados fora do escopo do loop;

    for (let i = 0; i < livro.length; i++) {
        livros_filtrados = livro[i];
    };

    return livros_filtrados;
};

function add_favorito (id) {
    console.log("add_favorito com id: " + `${id}`);
    
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    let favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

    const livro_favoritado = livros.find(livro => livro.id == id);

    favoritos.push(livro_favoritado);

    fs.writeFileSync("favoritos.json", JSON.stringify(favoritos));
};

function deleta_favoritos (id) {
    let livros = JSON.parse(fs.readFileSync("favoritos.json"));
    let indice = livros.findIndex(livro => livro.id == id);
    
    if (indice == -1) {
        return "404 Not Found";
    };
    
    livros.splice(indice, 1);
    fs.writeFileSync("favoritos.json", JSON.stringify(livros));
};

module.exports = {
    retorna_favoritos,
    retorna_favorito,
    add_favorito,
    deleta_favoritos
};