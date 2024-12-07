//estrutura de uma função

function saudacao() {
    console.log("Olá, seja bem-vindo!");
}

// chamando uma função

saudacao();

//funcões com parametros
function saudacao(nome) {
    console.log("Olá, " + nome + ", seja bem-vindo!");
}

saudacao("Maria");

// função que retorna um valor

function soma(a, b) {
    return a + b; // Retorna a soma de a e b
}
let resultado = soma(5, 3); // Armazena o que for retornado da função
console.log(resultado); // exibe o resultado

// função anônima
let saudacao1 = function () {
    console.log("Olá!");
};
saudacao1(); // Chama a função atribuída à variável saudacao

// Arrow function igual ao anterior
let saudacao2 = () => {
    console.log("Olá novamente!");
};
saudacao2(); // Chama a arrow function saudacao

// função que chama outra função
function multiplicar(a, b) {
    return a * b;
}

function calcularArea(largura, altura) {
    return multiplicar(largura, altura); // Chama a função multiplicar
}

console.log(calcularArea(5, 3)); // 15