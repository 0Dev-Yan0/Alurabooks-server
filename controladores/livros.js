const {
    retorna_livros,
    retorna_livro,
    add_livro,
    atualiza_livros,
    deleta_livros
} = require("../servicos/livros");

function get_livros (req, res) {
    try {
        //! console.log(retorna_livros()); // Uma função ativada [ quando se tem os dois parenteses no final -> () ] devolve o retorno dela;
        const livros = retorna_livros();
        res.send(livros);
    } catch (error) {
        res.redirect("http.cat/500");
        res.send(error.message);
    };
};

function get_livros_id (req, res) {
    try {
        let id = req.params.id; //! De todos os parametros da requisição [ as variáveis que vão após os dois pontos -> : ] ele vai pegar apenas o denomidado de "id" dentro da rota;
        const livro = retorna_livro(id);
        
        if (livro == undefined || livro == null || livro == "" || livro == []) {
            res.redirect("http://http.cat/204"); 
        };

        res.send(livro);
    } catch (error) {
        res.redirect("http://http.cat/500"); //! Se você específicar corretamente a url ela redireciona diretamente para o site, mas se deixar apenas a extensão de conteuúdo dele, ele apenar concatenará o site junto da sua url atual;
        res.send(error.message);
    };
};

function post_livros (req, res) {
    try {
        let livro_novo = req.body; //! O corpo da requisição que deve trazer com ele algum ou algums elemento(s);

        if (livro_novo.id && livro_novo.nome && livro_novo.descricao && livro_novo.img && livro_novo.autor && livro_novo.editora ) {
            add_livro(livro_novo);
            res.status(201);
            res.redirect("http://http.cat/201"); //! Created;
        } else {
            res.redirect("http://http.cat/206")
        };
    } catch (error) {
        res.redirect("http://http.cat/500");
        res.send(error.message);
    };
};

function patch_livros (req, res) {
    try {
        let id = req.params.id;
        let alter = req.body;
        atualiza_livros(alter, id);
        
        if (atualiza_livros(alter, id) === "404 Not Found") {
            res.send(`<h2>Nenhum livro com esse Id: [ ${id} ] foi encontrado :(</h2>`);
        } else {
            res.redirect("http://http.cat/200");
        };
    } catch (error) {
        res.redirect("http://http.cat/500");
        res.send(error.message);
    };
};

function delete_livros (req, res) {
    try {
        let id = req.params.id;
        deleta_livros(id);
        
        if (deleta_livros(id) === "404 Not Found") {
            res.send(`<h2>Nenhum livro com esse Id: [ ${id} ] foi encontrado :(</h2>`);
        } else {
            res.redirect("http://http.cat/200");
        };
    } catch (error) {
        res.redirect("http://http.cat/500");
        res.send(error.message);
    };
};

module.exports = {
    get_livros,
    post_livros,
    patch_livros,
    delete_livros,
    get_livros_id
};
