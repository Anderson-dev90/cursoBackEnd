//OBJETOS

// const pessoa = {
//     nome : "Anderson",
//     sobrenome : "Silva",
//     idade : 35,
//     profissao : "Programador",
//     cidade : "São Paulo"
// };


// console.log(pessoa);

//FUNCtion para criar um objeto pessoa
// A função criaPessoa recebe os parâmetros necessários para criar um objeto pessoa
// e retorna um objeto com as propriedades correspondentes.
// A função pode ser chamada várias vezes para criar diferentes objetos pessoa.
// A função é útil para criar objetos de forma dinâmica, evitando a repetição de código.
// A função pode ser usada para criar objetos com diferentes valores para as propriedades,
// permitindo a criação de várias instâncias de objetos pessoa com diferentes dados.
// A função pode ser usada para criar objetos com diferentes valores para as propriedades,
// permitindo a criação de várias instâncias de objetos pessoa com diferentes dados.
// A função pode ser usada para criar objetos com diferentes valores para as propriedades,
// permitindo a criação de várias instâncias de objetos pessoa com diferentes dados.        
function criarPessoa(nome, sobrenome, idade, profissao, cidade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        profissao: profissao,
        cidade: cidade
    };
}

const pessoa1 = criarPessoa("Anderson", "Silva", 35, "Programador", "São Paulo");

console.log(pessoa1);

const pessoa2 = criarPessoa("Maria", "Oliveira", 28, "Designer", "Rio de Janeiro");
console.log(pessoa2);