const fs = require("fs"); //! "fs" é um arquivo no node que significa filesystem, e ele é uma ferramenta para manipular arquivos do JavaScript;

const dados_atuais = JSON.parse(fs.readFileSync("livros.json")); //! "readFileSync" tem exatamente a propriedade para ler arquivos, ela só tem um parâmetro, sendo esse o caminho até o arquivo que deve ser lido;
//! O problema acima era que apenas o fs devolvia os dados em bits, usando o "parse" do "JSON" nós transformamos os dados recebidos em JSON;
const dado_novo = { id: "4", nome: "Livro brabo" }; //! 

const dado_novo_string = JSON.stringify(dado_novo);

console.log("Dado novo em STRING: ");
console.log(dado_novo_string);

fs.writeFileSync("livros.json", JSON.stringify([...dados_atuais, dado_novo])); //! Função que vai escrever [ writeFileSync ] na rota designada [ livros.json ] e vai enviar arquivos em string [ JSON.stringify ], os arquivos a serem enviados reescrevendo a lista são: uma cópia da lista inteira [ ...dados_atuais ( funcionamento dos 3 pontos explicado no exemplo abaixo ) ] mais algum item novo [ dado_novo ];
//! Usado para copiar elementos de uma estrutura iterável (como um array ou string) para outra
//! Exemplo:
//! const array1 = [1, 2, 3];
//! const array2 = [...array1, 4, 5];
//! console.log(array2); -> Output: [1, 2, 3, 4, 5]

console.log("Dados atuais: ");
console.log(dados_atuais);

//! A diferença ao se usar o "fs" é que ele altera o arquivo real em tempo real, se for checar o ../livros.json você verá que o dado novo realmente foi adicionado após a ativação do teste.js;