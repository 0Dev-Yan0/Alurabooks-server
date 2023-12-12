const {
    retorna_favoritos,
    add_favorito,
    deleta_favoritos,
    retorna_favorito
} = require("../servicos/favoritos");

function get_favoritos (req, res) {
    try {
        //! console.log(retorna_favoritos); // Uma função ativada [ quando se tem os dois parenteses no final -> () ] devolve o retorno dela;
        const livros = retorna_favoritos();
        res.send(livros);
    } catch (error) {
        res.redirect("http.cat/500");
        res.send(error.message);
    };
};

function post_favoritos (req, res) {
    try {
        let livro_favoritado = req.params.id;
        console.log("post_favoritos com id: " + `${livro_favoritado}`);

        add_favorito(livro_favoritado);

        res.status(201);
        res.redirect("http://http.cat/201"); //! Created;
    } catch (error) {
        res.send(error.message);
        console.log(error);
    };
};

function get_favoritos_id (req, res) {
    try {
        let id = req.params.id; //! De todos os parametros da requisição [ as variáveis que vão após os dois pontos -> : ] ele vai pegar apenas o denomidado de "id" dentro da rota;
        const livro = retorna_favorito(id);
        
        if (livro == undefined || livro == null || livro == "" || livro == []) {
            res.redirect("http://http.cat/404");
        };

        res.send(livro);
    } catch (error) {
        res.redirect("http://http.cat/500"); //! Se você específicar corretamente a url ela redireciona diretamente para o site, mas se deixar apenas a extensão de conteuúdo dele, ele apenar concatenará o site junto da sua url atual;
        res.send(error.message);
    };
};

function delete_favoritos (req, res) {
    try {
        let id = req.params.id;
        deleta_favoritos(id);
        
        if (deleta_favoritos(id) === "404 Not Found") {
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
    get_favoritos,
    post_favoritos, 
    delete_favoritos,
    get_favoritos_id
};