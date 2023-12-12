const fs = require("fs");

function retorna_livros () {
    return JSON.parse(fs.readFileSync("livros.json"));
};

function retorna_livro (id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    let livro = livros.filter(objetos => objetos.id == id); //! A constante "livro" é o filtro que devolve a lista com somente aqueles objetos cujo id deles forem iguais ao parametro da função [ id ];

    let livros_filtrados; //! Funcionando como um contador que só vai acumular resultados fora do escopo do loop;

    for (let i = 0; i < livro.length; i++) {
        livros_filtrados = livro[i];
    };

    return livros_filtrados;
};

function add_livro (livro_novo) {
    let livros = JSON. parse(fs.readFileSync("livros.json"));
    console.log("add_livro");

    fs.writeFileSync("livros.json", JSON.stringify([...livros, livro_novo]));
};

function atualiza_livros (alter, id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    let indice = livros.findIndex(livro => livro.id == id); //! "indice" é o retorno do index do livro cujo o id é igual ao paramêtro "id";

    if (indice == -1 ) {
        return "404 Not Found";
    };
    
    const modificacao = { ...livros[indice], ...alter }; //! Os bigodes são para quando se está percorrendo dentro de um objeto, no objeto do indice indicado de toda lista de livros [ ...livros[indice] ], ele vai percorrer todo o objeto de alterações que chega e substituirá tudo aquilo que for diferente no primeiro objeto;

    livros[indice] = modificacao; //! Agora o item da lista com o indice igual ao id buscado vai receber a alteração [ alter ] feita nele;
    fs.writeFileSync("livros.json", JSON.stringify(livros)); 
};

function deleta_livros (id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    let indice = livros.findIndex(livro => livro.id == id);
    console.log("deleta_livros");
    
    if (indice == -1) {
        return "404 Not Found";
    };
    
    livros.splice(indice, 1);
    fs.writeFileSync("livros.json", JSON.stringify(livros));
};

module.exports = {
    retorna_livros,
    retorna_livro,
    add_livro,
    atualiza_livros,
    deleta_livros
};