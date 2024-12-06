let pessoa = {
    nome: "Carlos",
    idade: 28,
    cumprimento: function(){
        return `Muito prazer!`;
    }
}

console.log(`
    Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos. ${pessoa.cumprimento()}
    `)